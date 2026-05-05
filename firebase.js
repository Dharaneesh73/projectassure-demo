// ============================================================
//  firebase.js  –  ProjectAssure Firebase Integration
//  Free Spark plan: Firestore + Auth (anonymous sign-in)
//  Replace the firebaseConfig values with your project's keys
// ============================================================

// ── 1. YOUR FIREBASE CONFIG (paste from Firebase console) ───
const firebaseConfig = {
  apiKey:            "AIzaSyDKJXZNlSW_36UNnsnOj8D4_P9j-GK6Fn8",
  authDomain:        "projectassure.firebaseapp.com",
  projectId:         "projectassure",
  storageBucket:     "projectassure.firebasestorage.app",
  messagingSenderId: "553059600174",
  appId:             "1:553059600174:web:8f9009da5f0c2db1785cbf"
};

// ── 2. INIT ─────────────────────────────────────────────────
firebase.initializeApp(firebaseConfig);
const db   = firebase.firestore();
const auth = firebase.auth();

// ── 3. ANONYMOUS AUTH (no login screen needed) ───────────────
let _fbUid = null;

auth.signInAnonymously().catch(err => {
  console.warn('[Firebase] Auth failed:', err.message);
});

auth.onAuthStateChanged(user => {
  if (user) {
    _fbUid = user.uid;
    console.log('[Firebase] Signed in as', _fbUid);
    FB.loadProjects();          // pull projects after sign-in
  }
});

// ── 4. FB NAMESPACE  (all Firestore ops live here) ──────────
const FB = {

  // ── helpers ──────────────────────────────────────────────
  _userDoc() {
    if (!_fbUid) throw new Error('Not authenticated yet');
    return db.collection('users').doc(_fbUid);
  },
  _projectsCol() {
    return this._userDoc().collection('projects');
  },

  // ── PROJECTS ─────────────────────────────────────────────

  /** Save / update one project (id = project.id) */
  async saveProject(project) {
    if (!_fbUid || !project?.id) return;
    try {
      await this._projectsCol().doc(project.id).set({
        ...project,
        _updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      _showToast && _showToast('☁️ Saved to cloud', 2000);
    } catch (e) {
      console.error('[Firebase] saveProject:', e);
      _showToast && _showToast('⚠️ Cloud save failed', 3000);
    }
  },

  /** Delete a project by id */
  async deleteProject(id) {
    if (!_fbUid || !id) return;
    try {
      await this._projectsCol().doc(id).delete();
    } catch (e) {
      console.error('[Firebase] deleteProject:', e);
    }
  },

  /** Load all projects for this user and merge into app state */
  async loadProjects() {
    if (!_fbUid) return;
    try {
      const snap = await this._projectsCol()
        .orderBy('_updatedAt', 'desc')
        .get();

      if (snap.empty) return;

      // Merge cloud projects into the local PROJECTS array
      // (defined in app.js)  — avoid duplicates by id
      snap.forEach(doc => {
        const data = doc.data();
        if (!data.id) return;
        const exists = (typeof PROJECTS !== 'undefined') &&
          PROJECTS.findIndex(p => p.id === data.id);
        if (typeof PROJECTS !== 'undefined') {
          if (exists === -1) {
            PROJECTS.push(data);
          } else {
            PROJECTS[exists] = data;
          }
        }
      });

      // Refresh project list UI if function exists
      typeof renderProjectList === 'function' && renderProjectList();
      console.log('[Firebase] Loaded', snap.size, 'projects');
    } catch (e) {
      console.error('[Firebase] loadProjects:', e);
    }
  },

  // ── SCHEDULE (WPS / activities for current project) ───────

  /** Save the full WPS array for a given projectId */
  async saveSchedule(projectId, wps) {
    if (!_fbUid || !projectId) return;
    try {
      await this._projectsCol().doc(projectId)
        .collection('schedules').doc('main').set({
          wps: wps,
          _savedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (e) {
      console.error('[Firebase] saveSchedule:', e);
    }
  },

  /** Load WPS array for a project */
  async loadSchedule(projectId) {
    if (!_fbUid || !projectId) return null;
    try {
      const snap = await this._projectsCol()
        .doc(projectId).collection('schedules').doc('main').get();
      return snap.exists ? snap.data().wps : null;
    } catch (e) {
      console.error('[Firebase] loadSchedule:', e);
      return null;
    }
  },

  // ── REAL-TIME LISTENER (optional) ─────────────────────────
  /** Subscribe to live updates for a project's schedule */
  listenSchedule(projectId, callback) {
    if (!_fbUid || !projectId) return () => {};
    return this._projectsCol()
      .doc(projectId).collection('schedules').doc('main')
      .onSnapshot(snap => {
        if (snap.exists) callback(snap.data().wps || []);
      }, err => console.warn('[Firebase] listener:', err));
  }
};

// ── 5. AUTO-SAVE HOOK ────────────────────────────────────────
// Wrap the existing saveWbsToProject / saveToLocalStorage
// so every local save also goes to Firestore.
document.addEventListener('DOMContentLoaded', () => {
  // Give app.js time to define its globals
  setTimeout(() => {
    const _origSave = window.saveWbsToProject;
    if (typeof _origSave === 'function') {
      window.saveWbsToProject = function(...args) {
        _origSave.apply(this, args);
        // Also push to Firebase
        if (typeof currentProject !== 'undefined' && currentProject) {
          FB.saveProject(currentProject);
          if (typeof WPS !== 'undefined') {
            FB.saveSchedule(currentProject.id, WPS);
          }
        }
      };
    }
  }, 1500);
});

// ── 6. EXPOSE FB globally ────────────────────────────────────
window.FB = FB;
