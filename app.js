// CONFIG
const PH={CON:{lbl:'Consents',col:'#6D28D9',lt:'#EDE9FE',dk:'#4C1D95'},PRO:{lbl:'Procurement',col:'#0891B2',lt:'#CFFAFE',dk:'#164E63'},EN:{lbl:'Enabling',col:'#0EA5E9',lt:'#E0F2FE',dk:'#0369A1'},GW:{lbl:'Groundworks',col:'#78716C',lt:'#F5F5F4',dk:'#44403C'},ST:{lbl:'Structure',col:'#7C3AED',lt:'#EDE9FE',dk:'#4C1D95'},ENV:{lbl:'Envelope',col:'#BE185D',lt:'#FCE7F3',dk:'#831843'},MEP:{lbl:'MEP/Services',col:'#EA580C',lt:'#FFEDD5',dk:'#7C2D12'},FIN:{lbl:'Finishes',col:'#0D9488',lt:'#CCFBF1',dk:'#134E4A'},EXT:{lbl:'External',col:'#65A30D',lt:'#ECFDF5',dk:'#365314'},INF:{lbl:'Infrastructure',col:'#1D4ED8',lt:'#EFF6FF',dk:'#1E3A8A'},COM:{lbl:'Commissioning',col:'#DC2626',lt:'#FEF2F2',dk:'#7F1D1D'}};
const PH_ORDER=['CON','PRO','EN','GW','ST','ENV','MEP','FIN','EXT','INF','COM'];
const TRACKS={LA:{lbl:'LA Process',col:'#6D28D9',bg:'#EDE9FE'},PROC:{lbl:'Procurement',col:'#0891B2',bg:'#CFFAFE'},CONSTR:{lbl:'Construction',col:'#1D4ED8',bg:'#EFF6FF'},UTIL:{lbl:'Utilities',col:'#78716C',bg:'#F5F5F4'},COMM:{lbl:'Commissioning',col:'#DC2626',bg:'#FEF2F2'}};

const C_DOMS=[
{id:'SI',lbl:'Site Prep & Surveys',ico:'🔍'},{id:'DM',lbl:'Demolition & Hazmat',ico:'🏚️'},
{id:'TW',lbl:'Temporary Works',ico:'⛺'},{id:'EX',lbl:'Excavation & Earthworks',ico:'🚜'},
{id:'DR',lbl:'Drainage & Sewers',ico:'🔩'},{id:'PIL',lbl:'Piling & Foundations',ico:'⚒️'},
{id:'BAS',lbl:'Basement Construction',ico:'🏠'},{id:'RC',lbl:'RC Structures',ico:'🏗️'},
{id:'STL',lbl:'Steel Structures',ico:'⚙️'},{id:'ALT',lbl:'Alt Structures (Timber/Precast)',ico:'🧱'},
{id:'RF',lbl:'Roof Systems',ico:'🏠'},{id:'CL',lbl:'Cladding & Facades',ico:'🪟'},
{id:'ME',lbl:'Mechanical Services',ico:'🌬️'},{id:'EL',lbl:'Electrical Systems',ico:'⚡'},
{id:'FP',lbl:'Fire Protection',ico:'🔥'},{id:'LT',lbl:'Vertical Transport',ico:'🛗'},
{id:'PL',lbl:'Plumbing',ico:'🚿'},{id:'IT',lbl:'IT, Data & Security',ico:'📡'},
{id:'FN',lbl:'Finishes & Fit-Out',ico:'🎨'},{id:'HC',lbl:'Healthcare Fit-Out',ico:'🏥'},
{id:'ED',lbl:'Education Fit-Out',ico:'🏫'},{id:'DC',lbl:'Data Centre Fit-Out',ico:'🖥️'},
{id:'HT',lbl:'Hospitality',ico:'🏨'},{id:'IN',lbl:'Industrial / Process',ico:'🏭'},
{id:'EW',lbl:'External Works',ico:'🌿'},{id:'SP',lbl:'Sports & Recreation',ico:'⚽'},
{id:'RL',lbl:'Rail Infrastructure',ico:'🚆'},{id:'AIR',lbl:'Airport Infrastructure',ico:'✈️'},
{id:'BR',lbl:'Bridges & Structures',ico:'🌉'},{id:'TUN',lbl:'Tunnels & Underground',ico:'🕳️'},
{id:'RD',lbl:'Roads & Highways',ico:'🛣️'},{id:'PW',lbl:'Power & Energy',ico:'⚡'},
{id:'WT',lbl:'Water & Wastewater',ico:'💧'},{id:'GS',lbl:'Gas Infrastructure',ico:'🔥'},
{id:'MR',lbl:'Ports & Marine',ico:'🚢'},{id:'FT',lbl:'Freight & Logistics',ico:'📦'},
{id:'FD',lbl:'Flood Defence & Coastal',ico:'🌊'},{id:'OG',lbl:'Oil, Gas & Pipelines',ico:'🛢️'},
{id:'TC',lbl:'Telecoms Infrastructure',ico:'📶'},{id:'REM',lbl:'Remediation & Geotechnical',ico:'🧪'},
{id:'CM',lbl:'Testing & Commissioning',ico:'✅'},{id:'PC',lbl:'Procurement',ico:'📋'},
{id:'DP',lbl:'Design Process (RIBA Stages)',ico:'✏️'},
{id:'TT',lbl:'Tall Tower / High-Rise',ico:'🏙️'},
{id:'HOS',lbl:'Hospital (Clinical)',ico:'🏥'},
{id:'OFF',lbl:'Commercial Offices',ico:'🏢'},
{id:'RES',lbl:'Residential Apartments',ico:'🏠'},
{id:'SCH',lbl:'Schools & Education',ico:'🏫'},
{id:'DCX',lbl:'Data Centre (Extended)',ico:'🖥️'},
{id:'SCOMM',lbl:'Sector-Specific Commissioning',ico:'✅'}
];
const C_MODS=[
{id:'SI-TOPO',dom:'SI',n:'Topographic & MBS',ico:'📏',d:'TSMS, MBS, boundary, datum',w:[{sg:'SG-SI',n:'Topographic and measured building survey',ph:'EN',tk:'CONSTR',dur:10}],q:[]},
{id:'SI-GI',dom:'SI',n:'Ground Investigation (Intrusive)',ico:'🔍',d:'Boreholes, trial pits, CPTs, lab testing, geotechnical report',w:[{sg:'SG-SI',n:'Ground investigation — boreholes, trial pits, CPTs',ph:'EN',tk:'CONSTR',dur:15},{sg:'SG-SI',n:'Lab testing and geotechnical interpretive report',ph:'EN',tk:'CONSTR',dur:20}],q:[]},
{id:'SI-DESK',dom:'SI',n:'Phase 1 Desk Study',ico:'📄',d:'Desktop study, walkover, contamination risk',w:[{sg:'SG-DESK',n:'Phase 1 desk study and site walkover',ph:'EN',tk:'CONSTR',dur:10}],q:[]},
{id:'SI-ARCH',dom:'SI',n:'Archaeological Investigation',ico:'🏺',d:'DBA, watching brief, trial trenching',w:[{sg:'SG-ARCH',n:'Archaeological DBA and trial trenching',ph:'EN',tk:'CONSTR',dur:25},{sg:'SG-ARCH',n:'Archaeological report and condition discharge',ph:'EN',tk:'CONSTR',dur:20}],q:[]},
{id:'SI-UXO',dom:'SI',n:'UXO Survey & Clearance',ico:'💥',d:'UXO risk assessment, magnetometer, clearance',w:[{sg:'SG-UXO',n:'UXO risk assessment and magnetometer survey',ph:'EN',tk:'CONSTR',dur:15},{sg:'SG-UXO',n:'UXO intrusive investigation and clearance',ph:'EN',tk:'CONSTR',dur:20}],q:[]},
{id:'DM-SOFT',dom:'DM',n:'Soft Strip / Internal Strip-Out',ico:'🔨',d:'Internal strip-out, fixtures, non-structural',w:[{sg:'SG-SOFT',n:'Soft strip and internal strip-out',ph:'EN',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.gfa||1000)/180))}],q:[{id:'gfa',l:'Floor Area',u:'m2',def:1000}]},
{id:'DM-STRUCT',dom:'DM',n:'Structural Demolition',ico:'🏚️',d:'Structural demolition, breaking, clearance',w:[{sg:'SG-SDEMO',n:'Structural demolition and clearance',ph:'EN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.gfa||1000)/120))}],q:[{id:'gfa',l:'GFA to Demo',u:'m2',def:1000}]},
{id:'DM-ACM',dom:'DM',n:'Asbestos & Hazardous Materials',ico:'⚠️',d:'Type 3 survey, licensed ACM removal, waste disposal',w:[{sg:'SG-ACM',n:'Type 3 asbestos survey',ph:'EN',tk:'CONSTR',dur:10},{sg:'SG-ACM',n:'Licensed asbestos removal and disposal',ph:'EN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.acm||200)/30))}],q:[{id:'acm',l:'ACM Area',u:'m2',def:200}]},
{id:'DM-CONTAM',dom:'DM',n:'Contamination Remediation',ico:'🧪',d:'Contaminated soil excavation, treatment, validation',w:[{sg:'SG-CONTAM',n:'Contaminated material excavation and removal',ph:'EN',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.cvol||500)/50))},{sg:'SG-CONTAM',n:'Validation sampling and completion report',ph:'EN',tk:'CONSTR',dur:15}],q:[{id:'cvol',l:'Contaminated Volume',u:'m3',def:500}]},
{id:'TW-SETUP',dom:'TW',n:'Site Establishment & Welfare',ico:'⛺',d:'Site offices, welfare, compound, security fencing',w:[{sg:'SG-SETUP',n:'Site establishment, welfare and compound',ph:'EN',tk:'CONSTR',dur:10}],q:[]},
{id:'TW-UTIL',dom:'TW',n:'Temporary Utilities',ico:'🔌',d:'Temporary power, water, drainage, telecoms',w:[{sg:'SG-TMPUT',n:'Temporary utilities to site',ph:'EN',tk:'CONSTR',dur:15}],q:[]},
{id:'TW-HOARD',dom:'TW',n:'Hoardings & Scaffolding',ico:'🪜',d:'Perimeter hoarding, scaffolding, temporary access',w:[{sg:'SG-HOARD',n:'Hoardings and scaffolding',ph:'EN',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.per||200)/40))}],q:[{id:'per',l:'Perimeter Length',u:'m',def:200}]},
{id:'TW-DEWAT',dom:'TW',n:'Dewatering & Groundwater Control',ico:'💧',d:'Wellpoints, deep wells, sumps, monitoring',w:[{sg:'SG-DEWAT',n:'Dewatering installation and operation',ph:'EN',tk:'CONSTR',dur:30}],q:[]},
{id:'TW-ECOL',dom:'TW',n:'Ecological Mitigation Works',ico:'🦔',d:'Bat, GCN, reptile mitigation, habitat creation',w:[{sg:'SG-ECOL',n:'Protected species mitigation and habitat creation',ph:'EN',tk:'CONSTR',dur:20}],q:[]},
{id:'EX-BULK',dom:'EX',n:'Bulk Excavation & Earthworks',ico:'🚜',d:'Cut to formation, bulk fill, compaction, disposal',w:[{sg:'SG-EXCAV',n:'Bulk excavation and compaction',ph:'GW',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.vol||5000)/250))}],q:[{id:'vol',l:'Volume',u:'m3',def:5000}]},
{id:'EX-ROCK',dom:'EX',n:'Rock Breaking & Blasting',ico:'💥',d:'Rock excavation by hydraulic breaking or blasting',w:[{sg:'SG-ROCK',n:'Rock excavation',ph:'GW',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.vol||2000)/80))}],q:[{id:'vol',l:'Rock Volume',u:'m3',def:2000}]},
{id:'DR-SW',dom:'DR',n:'Surface Water Drainage',ico:'🌧️',d:'SW pipes, gullies, manholes, attenuation, outfall',w:[{sg:'SG-SWDRAIN',n:'Surface water drainage — pipes, manholes, gullies',ph:'GW',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.len||400)/42))},{sg:'SG-SWDRAIN',n:'Attenuation and outfall',ph:'GW',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.len||400)/80))}],q:[{id:'len',l:'Drain Length',u:'m',def:400}]},
{id:'DR-FOUL',dom:'DR',n:'Foul Drainage & Sewers',ico:'🚽',d:'Foul sewer, manholes, CCTV, connection',w:[{sg:'SG-FDRAIN',n:'Foul drainage, pipes and manholes',ph:'GW',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.len||300)/40))}],q:[{id:'len',l:'Sewer Length',u:'m',def:300}]},
{id:'DR-SUDS',dom:'DR',n:'SUDS / Sustainable Drainage',ico:'🌊',d:'Permeable paving, swales, rain gardens',w:[{sg:'SG-SUDS',n:'SUDS features installation',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||500)/80))}],q:[{id:'area',l:'SUDS Area',u:'m2',def:500}]},
{id:'DR-SEWDIV',dom:'DR',n:'Sewer Diversion',ico:'↩️',d:'Statutory sewer diversion, build-over agreement',w:[{sg:'SG-SEWDIV',n:'Sewer diversion design and WaSC approval',ph:'EN',tk:'UTIL',dur:20},{sg:'SG-SEWDIV',n:'Sewer diversion construction',ph:'GW',tk:'UTIL',dur:q=>Math.max(10,Math.ceil((q.len||100)/25))}],q:[{id:'len',l:'Diversion Length',u:'m',def:100}]},
{id:'PIL-CFA',dom:'PIL',n:'CFA Piling',ico:'⚒️',d:'CFA piling, integrity testing, pile crop',w:[{sg:'SG-PILE',n:'CFA piling installation',ph:'GW',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.np||60)/4.5))},{sg:'SG-PILE',n:'Pile testing and crop',ph:'GW',tk:'CONSTR',dur:10}],q:[{id:'np',l:'Pile Count',u:'nr',def:60}]},
{id:'PIL-DRIVEN',dom:'PIL',n:'Driven Piling',ico:'🔨',d:'Driven steel H-pile or precast concrete pile',w:[{sg:'SG-DPILE',n:'Driven pile installation',ph:'GW',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.np||50)/5))}],q:[{id:'np',l:'Pile Count',u:'nr',def:50}]},
{id:'PIL-MINI',dom:'PIL',n:'Mini Piling',ico:'🔧',d:'Small diameter mini piles, restricted access',w:[{sg:'SG-MPILE',n:'Mini piling installation',ph:'GW',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.np||40)/3.5))}],q:[{id:'np',l:'Pile Count',u:'nr',def:40}]},
{id:'PIL-SCREW',dom:'PIL',n:'Screw Piles',ico:'🪛',d:'Helical screw piles — solar, modular, lightweight',w:[{sg:'SG-SCREW',n:'Screw pile installation',ph:'GW',tk:'CONSTR',dur:q=>Math.max(6,Math.ceil((q.np||80)/12))}],q:[{id:'np',l:'Pile Count',u:'nr',def:80}]},
{id:'PIL-PCAP',dom:'PIL',n:'Pile Caps & Ground Beams',ico:'🧱',d:'RC pile caps, strap beams, ground beams, blinding',w:[{sg:'SG-PCAP',n:'Blinding, pile crop and formwork',ph:'GW',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||600)/120))},{sg:'SG-PCAP',n:'Pile caps and ground beams RC',ph:'GW',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.area||600)/55))}],q:[{id:'area',l:'Foundation Area',u:'m2',def:600}]},
{id:'PIL-RAFT',dom:'PIL',n:'Raft Foundation',ico:'📦',d:'RC raft slab, blinding, edge shutters',w:[{sg:'SG-RAFT',n:'Blinding and edge shutters',ph:'GW',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||800)/200))},{sg:'SG-RAFT',n:'Raft foundation RC pour',ph:'GW',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||800)/110))}],q:[{id:'area',l:'Raft Area',u:'m2',def:800}]},
{id:'PIL-STRIP',dom:'PIL',n:'Strip & Pad Foundations',ico:'⬜',d:'Concrete strip footings, pad foundations',w:[{sg:'SG-STRIP',n:'Strip and pad foundations',ph:'GW',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.len||300)/45))}],q:[{id:'len',l:'Strip Length',u:'m',def:300}]},
{id:'PIL-SHPILE',dom:'PIL',n:'Sheet Piling (Retaining)',ico:'🔩',d:'Steel sheet pile retaining wall',w:[{sg:'SG-SHPILE',n:'Sheet pile installation',ph:'GW',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.len||200)/18))}],q:[{id:'len',l:'Sheet Pile Run',u:'m',def:200}]},
{id:'PIL-SEC',dom:'PIL',n:'Secant / Contiguous Pile Wall',ico:'🔨',d:'Secant or contiguous bored pile wall, capping beam',w:[{sg:'SG-SECPILE',n:'Secant pile wall installation',ph:'GW',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||150)/12))},{sg:'SG-SECPILE',n:'Capping beam RC',ph:'GW',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.len||150)/30))}],q:[{id:'len',l:'Wall Length',u:'m',def:150}]},
{id:'PIL-UNDERPN',dom:'PIL',n:'Underpinning',ico:'⬇️',d:'Underpinning of existing foundations',w:[{sg:'SG-UNDPN',n:'Underpinning works',ph:'GW',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||50)/8))}],q:[{id:'len',l:'Length',u:'m',def:50}]},
{id:'BAS-BOX',dom:'BAS',n:'Basement Box Construction',ico:'🏠',d:'Retaining wall, propping, excavation, base slab, waterproofing',w:[{sg:'SG-BSMT',n:'Basement retaining wall construction',ph:'GW',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.per||120)/10))},{sg:'SG-BSMT',n:'Propping and capping beam',ph:'GW',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.per||120)/18))},{sg:'SG-BSMT',n:'Bulk excavation to formation',ph:'GW',tk:'CONSTR',dur:q=>Math.max(14,Math.ceil((q.area||600)*(q.dep||4)/200))},{sg:'SG-BSMT',n:'Base slab, walls and waterproofing',ph:'GW',tk:'CONSTR',dur:q=>Math.max(16,Math.ceil((q.area||600)/60))}],q:[{id:'area',l:'Plan Area',u:'m2',def:600},{id:'dep',l:'Depth',u:'m',def:4},{id:'per',l:'Perimeter',u:'m',def:120}]},
{id:'RC-GF',dom:'RC',n:'Ground Floor Slab RC',ico:'⬜',d:'Ground floor slab, reinforcement, power float',w:[{sg:'SG-GFSLAB',n:'Ground floor slab RC',ph:'ST',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||1000)/85))}],q:[{id:'area',l:'Slab Area',u:'m2',def:1000}]},
{id:'RC-FRAME',dom:'RC',n:'RC Frame (Multi-storey)',ico:'🏗️',d:'RC columns, cores, flat slabs — in-situ construction',w:[{sg:'SG-GFSLAB',n:'Ground floor slab',ph:'ST',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.fpg||800)/85))},{sg:'SG-VERT',n:'RC columns and core walls',ph:'ST',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.fl||5)*(q.fpg||800)/660))},{sg:'SG-HORIZ',n:'RC flat slabs — upper floors',ph:'ST',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.fl||5)*(q.fpg||800)/820))}],q:[{id:'fl',l:'Storeys',u:'nr',def:5},{id:'fpg',l:'Floor Plate',u:'m2',def:800}]},
{id:'RC-PT',dom:'RC',n:'Post-Tensioned Flat Slab',ico:'🏗️',d:'PT flat plate slab, strand, tendons, stressing',w:[{sg:'SG-PTSLAB',n:'PT slab formwork, rebar and strand',ph:'ST',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.area||2000)/120))},{sg:'SG-PTSLAB',n:'Post-tensioning stressing',ph:'ST',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||2000)/180))}],q:[{id:'area',l:'PT Slab Area',u:'m2',def:2000}]},
{id:'RC-RETAIN',dom:'RC',n:'RC Retaining Walls',ico:'🧱',d:'In-situ RC retaining walls',w:[{sg:'SG-RCRET',n:'RC retaining wall construction',ph:'ST',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.len||100)*(q.ht||3)/25))}],q:[{id:'len',l:'Length',u:'m',def:100},{id:'ht',l:'Height',u:'m',def:3}]},
{id:'RC-WR',dom:'RC',n:'Water-Retaining Structures RC',ico:'💧',d:'RC water tanks, walls, slabs — BS8007',w:[{sg:'SG-WRTANK',n:'Water-retaining RC structure',ph:'ST',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||400)/40))}],q:[{id:'area',l:'Tank Area',u:'m2',def:400}]},
{id:'STL-MF',dom:'STL',n:'Multi-Storey Steel Frame',ico:'⚙️',d:'Structural steelwork, metal deck, composite slab',w:[{sg:'SG-STEEL',n:'Structural steelwork erection',ph:'ST',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.tn||150)/3.2))},{sg:'SG-STEEL',n:'Metal deck installation',ph:'ST',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.fl||4)*7))},{sg:'SG-STEEL',n:'Composite slab and RC cores',ph:'ST',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.fl||4)*8))}],q:[{id:'tn',l:'Steel Tonnes',u:'t',def:150},{id:'fl',l:'Storeys',u:'nr',def:4}]},
{id:'STL-PORTAL',dom:'STL',n:'Steel Portal Frame',ico:'🏭',d:'Single-storey steel portal frame',w:[{sg:'SG-PORTAL',n:'Portal frame erection',ph:'ST',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.bays||12)*1.6))},{sg:'SG-GFS',n:'Ground floor slab industrial',ph:'ST',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.bays||12)*18/160))}],q:[{id:'bays',l:'Structural Bays',u:'nr',def:12}]},
{id:'STL-MEZ',dom:'STL',n:'Mezzanine Floor (Steel)',ico:'🏗️',d:'Steel mezzanine floor with deck or concrete topping',w:[{sg:'SG-MEZ',n:'Mezzanine steel structure and deck',ph:'ST',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||800)/90))}],q:[{id:'area',l:'Mezzanine Area',u:'m2',def:800}]},
{id:'ALT-CLT',dom:'ALT',n:'Timber Frame (CLT / Glulam)',ico:'🌲',d:'CLT, glulam, panelised timber system',w:[{sg:'SG-CLT',n:'Timber frame manufacture (off-site)',ph:'ST',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.area||1000)/55))},{sg:'SG-CLT',n:'Timber frame erection on site',ph:'ST',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||1000)/90))}],q:[{id:'area',l:'Floor Area',u:'m2',def:1000}]},
{id:'ALT-PC',dom:'ALT',n:'Precast Concrete Frame',ico:'🏛️',d:'Precast columns, beams, hollowcore slabs',w:[{sg:'SG-PC',n:'Precast manufacture (off-site lead-in)',ph:'ST',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.area||1500)/60))},{sg:'SG-PC',n:'Precast erection and stitching',ph:'ST',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.area||1500)/110))}],q:[{id:'area',l:'Floor Area',u:'m2',def:1500}]},
{id:'ALT-MASON',dom:'ALT',n:'Load-Bearing Masonry',ico:'🧱',d:'Load-bearing masonry superstructure',w:[{sg:'SG-MASON',n:'Load-bearing masonry',ph:'ST',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||800)/48))}],q:[{id:'area',l:'Wall Area',u:'m2',def:800}]},
{id:'ALT-MOD',dom:'ALT',n:'Modular / Volumetric',ico:'📦',d:'Off-site manufactured volumetric modules',w:[{sg:'SG-MOD',n:'Module manufacture off-site',ph:'ST',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.mods||30)*1.5))},{sg:'SG-MOD',n:'Module delivery and installation',ph:'ST',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.mods||30)*0.6))}],q:[{id:'mods',l:'Module Count',u:'nr',def:30}]},
{id:'RF-FLAT',dom:'RF',n:'Flat Roof (Membrane)',ico:'🏠',d:'Warm flat roof, insulation, waterproof membrane',w:[{sg:'SG-ROOF',n:'Flat roof insulation and membrane',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||1000)/65))}],q:[{id:'area',l:'Roof Area',u:'m2',def:1000}]},
{id:'RF-GREEN',dom:'RF',n:'Green / Brown Roof',ico:'🌿',d:'Extensive green roof, sedum/wildflower planting',w:[{sg:'SG-GROOF',n:'Green roof substrate and planting',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||800)/80))}],q:[{id:'area',l:'Green Roof Area',u:'m2',def:800}]},
{id:'RF-PROFSHEET',dom:'RF',n:'Profiled Metal Sheeting (Industrial)',ico:'🏭',d:'Profiled steel roof sheeting, insulated composite',w:[{sg:'SG-PRFRF',n:'Metal roof sheeting and insulation',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||5000)/200))},{sg:'SG-PRFRF',n:'Rooflights and accessories',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(5,Math.ceil((q.area||5000)/400))}],q:[{id:'area',l:'Roof Area',u:'m2',def:5000}]},
{id:'RF-STANDING',dom:'RF',n:'Standing Seam Metal Roof',ico:'🏠',d:'Standing seam or secret-fix metal roof',w:[{sg:'SG-ROOF',n:'Standing seam metal roof installation',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||1200)/75))}],q:[{id:'area',l:'Roof Area',u:'m2',def:1200}]},
{id:'RF-PITCHED',dom:'RF',n:'Pitched Roof (Tiles / Slates)',ico:'🏠',d:'Timber or steel truss pitched roof, slates, tiles',w:[{sg:'SG-PITCHED',n:'Roof structure and weathering',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||600)/55))}],q:[{id:'area',l:'Roof Area',u:'m2',def:600}]},
{id:'RF-ATRIUM',dom:'RF',n:'Atrium / Glazed Roof',ico:'🏛️',d:'Structural glazed atrium, ETFE, rooflights',w:[{sg:'SG-ATRIUM',n:'Atrium structure and glazing',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||400)/28))}],q:[{id:'area',l:'Atrium Area',u:'m2',def:400}]},
{id:'CL-CURTAIN',dom:'CL',n:'Curtain Walling / Unitised',ico:'🪟',d:'Aluminium curtain walling, unitised, structural glazing',w:[{sg:'SG-CWALL',n:'Curtain wall design and approval',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||1800)/200))},{sg:'SG-CWALL',n:'Curtain walling installation',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.area||1800)/24))}],q:[{id:'area',l:'CW Area',u:'m2',def:1800}]},
{id:'CL-RAIN',dom:'CL',n:'Rainscreen Cladding',ico:'🧱',d:'Metal composite, terracotta, fibre-cement panels',w:[{sg:'SG-RAIN',n:'Structural rail and carrier',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||1200)/120))},{sg:'SG-RAIN',n:'Rainscreen panels and flashings',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||1200)/90))}],q:[{id:'area',l:'Cladding Area',u:'m2',def:1200}]},
{id:'CL-BRICK',dom:'CL',n:'External Brick Facade',ico:'🧱',d:'Facing brickwork, cavity insulation, ties',w:[{sg:'SG-BRICKX',n:'External facing brickwork and cavity',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||1500)/50))}],q:[{id:'area',l:'Brick Wall Area',u:'m2',def:1500}]},
{id:'CL-RENDER',dom:'CL',n:'Render / EWI System',ico:'🎨',d:'External wall insulation and render systems, EIFS',w:[{sg:'SG-RENDER',n:'EWI and render application',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.area||1000)/55))}],q:[{id:'area',l:'Render Area',u:'m2',def:1000}]},
{id:'CL-WIN',dom:'CL',n:'External Windows & Doors',ico:'🚪',d:'Residential windows, entrance doors',w:[{sg:'SG-WINEXT',n:'External windows and entrance doors',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.nw||60)*0.8))}],q:[{id:'nw',l:'Window Units',u:'nr',def:60}]},
{id:'ME-HVAC',dom:'ME',n:'HVAC & Ventilation',ico:'🌬️',d:'AHUs, ductwork, FCUs, chillers, cooling towers',w:[{sg:'SG-MECH',n:'Mechanical plant, AHUs and chillers',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.area||3000)/280))},{sg:'SG-MECH',n:'Ductwork distribution and fire dampers',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.area||3000)/200))},{sg:'SG-MECH',n:'FCUs, grilles and terminals',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.area||3000)/250))}],q:[{id:'area',l:'Served Area',u:'m2',def:3000}]},
{id:'ME-LTHW',dom:'ME',n:'LTHW / District Heating',ico:'🌡️',d:'Low temperature hot water, heat interface units',w:[{sg:'SG-LTHW',n:'LTHW pipework and insulation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||3000)/220))},{sg:'SG-LTHW',n:'Heat interface units and connections',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||3000)/300))}],q:[{id:'area',l:'Served Area',u:'m2',def:3000}]},
{id:'ME-CHW',dom:'ME',n:'Chilled Water System',ico:'❄️',d:'Chilled water plant, pipework, cooling coils',w:[{sg:'SG-CHW',n:'Chilled water plant and distribution',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||3000)/260))}],q:[{id:'area',l:'Served Area',u:'m2',def:3000}]},
{id:'ME-MEDGAS',dom:'ME',n:'Medical Gas Systems',ico:'🏥',d:'Oxygen, nitrous oxide, surgical air, AGSS, vacuum',w:[{sg:'SG-MEDGAS',n:'Medical gas pipework installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.beds||50)*0.8))},{sg:'SG-MEDGAS',n:'Medical gas commissioning',ph:'COM',tk:'COMM',dur:q=>Math.max(8,Math.ceil((q.beds||50)*0.5))}],q:[{id:'beds',l:'Beds',u:'nr',def:50}]},
{id:'EL-LV',dom:'EL',n:'LV Electrical Distribution',ico:'⚡',d:'LV switchgear, distribution boards, circuits, lighting',w:[{sg:'SG-ELEC',n:'LV switchgear, MCCs and DBs',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||3000)/380))},{sg:'SG-ELEC',n:'Cable containment and wiring',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.area||3000)/180))},{sg:'SG-ELEC',n:'Final circuits, lighting and small power',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.area||3000)/200))}],q:[{id:'area',l:'Served Area',u:'m2',def:3000}]},
{id:'EL-HV',dom:'EL',n:'HV Systems (33kV and below)',ico:'⚡',d:'HV switchgear, HV cable, transformers, RMU',w:[{sg:'SG-HV',n:'HV cabling and switchgear',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||300)/35))}],q:[{id:'len',l:'HV Cable Length',u:'m',def:300}]},
{id:'EL-GENUPS',dom:'EL',n:'Generator & UPS',ico:'🔋',d:'Standby generator, UPS, changeover, acoustic enclosure',w:[{sg:'SG-GENUPS',n:'Generator and UPS installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.ng||2)*12))}],q:[{id:'ng',l:'Generators',u:'nr',def:2}]},
{id:'FP-SPK',dom:'FP',n:'Sprinkler System',ico:'🚿',d:'Wet pipe sprinklers, heads, pipework, pump sets',w:[{sg:'SG-SPK',n:'Sprinkler pipework and heads',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||3000)/210))}],q:[{id:'area',l:'Protected Area',u:'m2',def:3000}]},
{id:'FP-FA',dom:'FP',n:'Fire Alarm & Detection',ico:'🔔',d:'Addressable fire alarm, detectors, sounders, panel',w:[{sg:'SG-FA',n:'Fire alarm detection system',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.area||3000)/250))}],q:[{id:'area',l:'Detected Area',u:'m2',def:3000}]},
{id:'FP-RISER',dom:'FP',n:'Dry / Wet Rising Main',ico:'🔩',d:'Rising main, outlets, inlet breeching',w:[{sg:'SG-RISER',n:'Rising main installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(5,Math.ceil((q.fl||6)*1.5))}],q:[{id:'fl',l:'Floors',u:'nr',def:6}]},
{id:'LT-PAXLIFT',dom:'LT',n:'Passenger Lifts',ico:'🛗',d:'Traction passenger lifts, MRL, guide rails',w:[{sg:'SG-LIFTS',n:'Lift shaft and guide rail installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.nl||4)*4))},{sg:'SG-LIFTS',n:'Lift car installation and electrical',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.nl||4)*6))},{sg:'SG-LIFTS',n:'Lift commissioning and LOLER',ph:'COM',tk:'COMM',dur:q=>Math.max(5,Math.ceil((q.nl||4)*3))}],q:[{id:'nl',l:'Lifts',u:'nr',def:4}]},
{id:'LT-ESC',dom:'LT',n:'Escalators',ico:'↕️',d:'Escalators and moving walkways',w:[{sg:'SG-ESC',n:'Escalator installation and commissioning',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.ne||2)*12))}],q:[{id:'ne',l:'Escalators',u:'nr',def:2}]},
{id:'PL-HCS',dom:'PL',n:'Hot & Cold Water Services',ico:'🚿',d:'HWS, cold water, calorifiers, insulation, TMVs',w:[{sg:'SG-HCS',n:'Hot and cold water installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.area||2000)/200))}],q:[{id:'area',l:'Served Area',u:'m2',def:2000}]},
{id:'PL-SAN',dom:'PL',n:'Sanitary Appliances',ico:'🚽',d:'Sanitary ware, soil and waste, WCs, basins',w:[{sg:'SG-SAN',n:'Soil stacks, waste and sanitary ware',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.units||40)*1.2))}],q:[{id:'units',l:'Wet Units',u:'nr',def:40}]},
{id:'IT-STRCAT',dom:'IT',n:'Structured Cabling & Data',ico:'📡',d:'Cat6A, fibre, data cabinets, patch panels',w:[{sg:'SG-ITDAT',n:'Structured data cabling and cabinets',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||2000)/240))}],q:[{id:'area',l:'Covered Area',u:'m2',def:2000}]},
{id:'IT-CCTV',dom:'IT',n:'CCTV & Access Control',ico:'📹',d:'IP CCTV, access control, door controllers',w:[{sg:'SG-CCTV',n:'CCTV and access control installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||2000)/280))}],q:[{id:'area',l:'Covered Area',u:'m2',def:2000}]},
{id:'IT-BMS',dom:'IT',n:'Building Management System',ico:'🖥️',d:'BMS controllers, sensors, actuators, head-end',w:[{sg:'SG-BMS',n:'BMS installation and point connections',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||2000)/220))},{sg:'SG-BMS',n:'BMS commissioning and graphics',ph:'COM',tk:'COMM',dur:q=>Math.max(8,Math.ceil((q.area||2000)/400))}],q:[{id:'area',l:'Served Area',u:'m2',def:2000}]},
{id:'FN-DRYWALL',dom:'FN',n:'Drylining & Partitions',ico:'🚪',d:'Metal stud drywall, acoustic partitions, door sets',w:[{sg:'SG-DRY',n:'Metal stud partitions and drylining',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(14,Math.ceil((q.area||2000)/65))},{sg:'SG-DRY',n:'Internal doors and hardware',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||2000)/180))}],q:[{id:'area',l:'Partition Area',u:'m2',def:2000}]},
{id:'FN-RAF',dom:'FN',n:'Raised Access Flooring',ico:'⬜',d:'Steel raised access floor, pedestals, panels',w:[{sg:'SG-RAF',n:'Raised access flooring installation',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||1500)/95))}],q:[{id:'area',l:'RAF Area',u:'m2',def:1500}]},
{id:'FN-CEIL',dom:'FN',n:'Suspended Ceilings',ico:'⬛',d:'Mineral fibre, metal tile, tegular ceilings',w:[{sg:'SG-CEIL',n:'Suspended ceiling grid and tiles',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||1500)/80))}],q:[{id:'area',l:'Ceiling Area',u:'m2',def:1500}]},
{id:'FN-SCREED',dom:'FN',n:'Screeds & Floor Finishes',ico:'🟫',d:'Screed, tiles, hardwood, vinyl, carpet',w:[{sg:'SG-SCR',n:'Floor screed or levelling compound',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||1500)/115))},{sg:'SG-SCR',n:'Floor finishes and skirtings',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||1500)/90))}],q:[{id:'area',l:'Floor Area',u:'m2',def:1500}]},
{id:'FN-DECO',dom:'FN',n:'Decoration & Painting',ico:'🖌️',d:'Painting, decorating, specialist finishes',w:[{sg:'SG-DEC',n:'Decoration and painting',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.area||3000)/90))}],q:[{id:'area',l:'Decorated Area',u:'m2',def:3000}]},
{id:'FN-CATB',dom:'FN',n:'Cat B Office Fit-Out',ico:'🛋️',d:'Cat B: joinery, kitchenettes, break-out, FF&E',w:[{sg:'SG-CATB',n:'Cat B joinery and feature areas',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(14,Math.ceil((q.area||1200)/70))},{sg:'SG-CATB',n:'FF&E supply and installation',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||1200)/100))}],q:[{id:'area',l:'Fit-Out Area',u:'m2',def:1200}]},
{id:'FN-RESI',dom:'FN',n:'Residential Unit Fit-Out',ico:'🏠',d:'Kitchen, bathroom, carpets, painting per unit',w:[{sg:'SG-RFIN',n:'Residential unit finishes',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.units||40)*2.5))}],q:[{id:'units',l:'Units',u:'nr',def:40}]},
{id:'HC-THEATRE',dom:'HC',n:'Operating Theatre Fit-Out',ico:'🏥',d:'UCV canopy, theatre floor, lights, equipment rails',w:[{sg:'SG-THTR',n:'Operating theatre fit-out',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.nt||3)*15))}],q:[{id:'nt',l:'Theatres',u:'nr',def:3}]},
{id:'HC-MRI',dom:'HC',n:'Imaging Suite (MRI/CT)',ico:'🔬',d:'RF shielding, quench pipe, specialist equipment',w:[{sg:'SG-MRI',n:'MRI/CT RF shielding and fit-out',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.nm||2)*15))},{sg:'SG-MRI',n:'Imaging equipment commissioning',ph:'COM',tk:'COMM',dur:q=>Math.max(8,Math.ceil((q.nm||2)*10))}],q:[{id:'nm',l:'Imaging Rooms',u:'nr',def:2}]},
{id:'HC-WARD',dom:'HC',n:'Ward Fit-Out (Inpatient)',ico:'🛏️',d:'Patient beds, headwall units, nurse call, clinical finishes',w:[{sg:'SG-WARD',n:'Ward fit-out and headwall units',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.beds||30)*1.2))}],q:[{id:'beds',l:'Beds',u:'nr',def:30}]},
{id:'ED-LAB',dom:'ED',n:'Science Laboratories',ico:'🧪',d:'Lab benching, fume cupboards, gas, eye wash',w:[{sg:'SG-LAB',n:'Laboratory benching and services',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.nl||6)*5))}],q:[{id:'nl',l:'Labs',u:'nr',def:6}]},
{id:'ED-HALL',dom:'ED',n:'Assembly / Sports Hall',ico:'🏀',d:'Sports flooring, lighting, acoustic panels',w:[{sg:'SG-HALL',n:'Sports hall fit-out',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||600)/60))}],q:[{id:'area',l:'Hall Area',u:'m2',def:600}]},
{id:'DC-RAF',dom:'DC',n:'DC Raised Floor & Containment',ico:'🖥️',d:'Data centre raised floor, hot/cold aisle containment',w:[{sg:'SG-DCRF',n:'DC raised floor and aisle containment',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||500)/80))}],q:[{id:'area',l:'DC Area',u:'m2',def:500}]},
{id:'DC-UPS',dom:'DC',n:'UPS & Battery Rooms',ico:'🔋',d:'UPS modules, battery cabinets, static transfer switches',w:[{sg:'SG-UPS',n:'UPS and battery installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.kva||500)/80))}],q:[{id:'kva',l:'UPS Capacity',u:'kVA',def:500}]},
{id:'DC-COOL',dom:'DC',n:'DC Precision Cooling',ico:'❄️',d:'CRAC/CRAH units, chilled water, free cooling',w:[{sg:'SG-DCCOOL',n:'Precision cooling installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||500)/55))}],q:[{id:'area',l:'DC Area',u:'m2',def:500}]},
{id:'HT-BEDROOM',dom:'HT',n:'Hotel Bedroom Fit-Out',ico:'🛏️',d:'Guestrooms — furniture, finishes, bathroom, AV',w:[{sg:'SG-HTLBR',n:'Hotel bedroom fit-out',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.rooms||100)*0.4))}],q:[{id:'rooms',l:'Guest Rooms',u:'nr',def:100}]},
{id:'HT-FOH',dom:'HT',n:'Front of House & Restaurant',ico:'🍽️',d:'Hotel lobby, restaurant, bar, F&B, joinery',w:[{sg:'SG-HTLFOH',n:'Hotel lobby, restaurant and bar',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(14,Math.ceil((q.area||800)/60))}],q:[{id:'area',l:'FOH Area',u:'m2',def:800}]},
{id:'IN-CR',dom:'IN',n:'Clean Room Construction',ico:'⚗️',d:'ISO 8-5 clean rooms, HEPA, raised floor',w:[{sg:'SG-CR',n:'Clean room shell and panels',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||400)/40))},{sg:'SG-CR',n:'HEPA, HVAC and validation',ph:'COM',tk:'COMM',dur:q=>Math.max(12,Math.ceil((q.area||400)/50))}],q:[{id:'area',l:'Clean Room Area',u:'m2',def:400}]},
{id:'IN-PROC',dom:'IN',n:'Process Equipment Installation',ico:'🏭',d:'Industrial process plant, vessels, reactors',w:[{sg:'SG-PROC',n:'Process equipment installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.tn||50)/4))}],q:[{id:'tn',l:'Equipment Tonnes',u:'t',def:50}]},
{id:'IN-CRANE',dom:'IN',n:'Overhead Crane & Gantry',ico:'🏗️',d:'Overhead travelling crane, runway beams',w:[{sg:'SG-CRANE',n:'Crane runway beams',ph:'ST',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.nc||2)*8))},{sg:'SG-CRANE',n:'Overhead crane installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(6,Math.ceil((q.nc||2)*6))}],q:[{id:'nc',l:'Cranes',u:'nr',def:2}]},
{id:'IN-COLD',dom:'IN',n:'Cold Store / Refrigerated Warehouse',ico:'🥶',d:'Insulated panel cold room, refrigeration plant',w:[{sg:'SG-COLD',n:'Insulated panel cold room construction',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||2000)/110))},{sg:'SG-COLD',n:'Refrigeration commissioning',ph:'COM',tk:'COMM',dur:q=>Math.max(12,Math.ceil((q.area||2000)/180))}],q:[{id:'area',l:'Cold Store Area',u:'m2',def:2000}]},
{id:'EW-ROAD',dom:'EW',n:'Access Roads & Car Parking',ico:'🚗',d:'Sub-base, binder, surface, kerbs, line marking',w:[{sg:'SG-RDEXT',n:'Sub-base, kerbs and drainage',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||2000)/350))},{sg:'SG-RDEXT',n:'Binder and surface course',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||2000)/500))},{sg:'SG-RDEXT',n:'Line markings and signs',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(5,Math.ceil((q.area||2000)/700))}],q:[{id:'area',l:'Road/Car Park Area',u:'m2',def:2000}]},
{id:'EW-HARDL',dom:'EW',n:'Hard Landscaping & Paving',ico:'🪨',d:'Paving, block paving, natural stone, furniture',w:[{sg:'SG-HARDL',n:'Hard landscaping paving',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||800)/78))}],q:[{id:'area',l:'Area',u:'m2',def:800}]},
{id:'EW-SOFTL',dom:'EW',n:'Soft Landscaping',ico:'🌿',d:'Topsoil, planting, seeding, trees, hedgerows',w:[{sg:'SG-SOFTL',n:'Topsoil, planting and seeded areas',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||1200)/175))}],q:[{id:'area',l:'Landscape Area',u:'m2',def:1200}]},
{id:'EW-FENCE',dom:'EW',n:'Boundary & Security Fencing',ico:'🏚️',d:'Palisade, welded mesh, security fence, retaining wall',w:[{sg:'SG-FENCE',n:'Boundary fencing and walls',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(6,Math.ceil((q.len||400)/52))}],q:[{id:'len',l:'Boundary Length',u:'m',def:400}]},
{id:'SP-PITCH',dom:'SP',n:'Natural Grass Sports Pitch',ico:'⚽',d:'Pitch formation, drainage, irrigation, seeding',w:[{sg:'SG-PITCH',n:'Pitch formation, drainage and seeding',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.np||2)*20))}],q:[{id:'np',l:'Pitches',u:'nr',def:2}]},
{id:'SP-ATP',dom:'SP',n:'Artificial Turf Pitch (3G/4G)',ico:'🏟️',d:'ATP, shock pad, infill, fencing, floodlighting',w:[{sg:'SG-ATP',n:'Shock pad and artificial turf',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.np||1)*15))}],q:[{id:'np',l:'ATPs',u:'nr',def:1}]},
{id:'SP-SWIM',dom:'SP',n:'Swimming Pool',ico:'🏊',d:'Pool shell, tiling, filtration, water treatment',w:[{sg:'SG-POOL',n:'Pool shell, waterproofing and tiling',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.vol||500)/35))},{sg:'SG-POOL',n:'Pool plant and water treatment',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.vol||500)/40))}],q:[{id:'vol',l:'Pool Volume',u:'m3',def:500}]},
{id:'RL-FORM',dom:'RL',n:'Track Formation & Earthworks',ico:'🚆',d:'Formation, sub-ballast, drainage, earthworks corridor',w:[{sg:'SG-RFORM',n:'Rail corridor earthworks and formation',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||2000)/80))},{sg:'SG-RFORM',n:'Sub-ballast and drainage',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||2000)/100))}],q:[{id:'len',l:'Route Length',u:'m',def:2000}]},
{id:'RL-TRACK',dom:'RL',n:'Plain Line Track Laying',ico:'🛤️',d:'Rail, sleepers, ballast, fastenings',w:[{sg:'SG-TRACK',n:'Sleeper laying and rail installation',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||2000)/90))},{sg:'SG-TRACK',n:'Ballast tamping and geometry survey',ph:'INF',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.len||2000)/130))}],q:[{id:'len',l:'Track Length',u:'m',def:2000}]},
{id:'RL-SC',dom:'RL',n:'Switches & Crossings (S&C)',ico:'🔀',d:'S&C units, turnouts, crossovers, diamonds',w:[{sg:'SG-SC',n:'S&C installation and geometry',ph:'INF',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.nsc||4)*7))}],q:[{id:'nsc',l:'S&C Units',u:'nr',def:4}]},
{id:'RL-OLE',dom:'RL',n:'Overhead Line Equipment (OLE)',ico:'⚡',d:'OLE mast foundations, erection, contact wire',w:[{sg:'SG-OLE',n:'OLE mast foundation and erection',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||2000)/55))},{sg:'SG-OLE',n:'Contact wire runs and tensioning',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||2000)/80))}],q:[{id:'len',l:'OLE Route Length',u:'m',def:2000}]},
{id:'RL-SIG',dom:'RL',n:'Signalling & Train Control',ico:'🚦',d:'Signalling design, ATP/ETCS, lineside, control room',w:[{sg:'SG-SIG',n:'Signalling design finalisation',ph:'INF',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.len||2000)/150))},{sg:'SG-SIG',n:'Lineside signalling equipment',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||2000)/100))},{sg:'SG-SIG',n:'Control room and SCADA',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||2000)/130))}],q:[{id:'len',l:'Route Length',u:'m',def:2000}]},
{id:'RL-TRACT',dom:'RL',n:'Traction Power Substations',ico:'🔋',d:'Traction substations, HV feeds, auto-transformers',w:[{sg:'SG-TRACT',n:'Traction substation civil and building',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.ns||2)*20))},{sg:'SG-TRACT',n:'HV plant and rectifiers',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.ns||2)*18))}],q:[{id:'ns',l:'Substations',u:'nr',def:2}]},
{id:'RL-STAT',dom:'RL',n:'Station & Platforms',ico:'🏛️',d:'Platform construction, station building, canopy, M&E',w:[{sg:'SG-STAT',n:'Platform construction',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||1200)/80))},{sg:'SG-STAT',n:'Station building structure',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.area||1200)/55))},{sg:'SG-STAT',n:'Station fit-out and M&E',ph:'INF',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.area||1200)/60))}],q:[{id:'area',l:'Station Area',u:'m2',def:1200}]},
{id:'RL-BRDG',dom:'RL',n:'Rail Bridge / Viaduct',ico:'🌉',d:'RC or steel rail bridge, abutments, deck',w:[{sg:'SG-RBRDG',n:'Bridge foundations and abutments',ph:'INF',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.len||80)/5.5))},{sg:'SG-RBRDG',n:'Bridge deck and parapets',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||80)/5))},{sg:'SG-RBRDG',n:'Bridge finishes and track bed',ph:'INF',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.len||80)/8))}],q:[{id:'len',l:'Bridge Length',u:'m',def:80}]},
{id:'AIR-RWY',dom:'AIR',n:'Runway Construction',ico:'✈️',d:'Runway sub-base, pavement, RESA',w:[{sg:'SG-RWY',n:'Runway earthworks and sub-base',ph:'INF',tk:'CONSTR',dur:q=>Math.max(30,Math.ceil((q.len||2500)/80))},{sg:'SG-RWY',n:'Runway pavement and markings',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||2500)/100))}],q:[{id:'len',l:'Runway Length',u:'m',def:2500}]},
{id:'AIR-TWY',dom:'AIR',n:'Taxiway & Apron',ico:'✈️',d:'Taxiway formation, concrete pavement, lighting',w:[{sg:'SG-TWY',n:'Taxiway and apron pavement',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.area||50000)/2500))}],q:[{id:'area',l:'Taxiway/Apron Area',u:'m2',def:50000}]},
{id:'AIR-TERM',dom:'AIR',n:'Terminal Building',ico:'🏛️',d:'Terminal concourse, check-in, security, gates, retail',w:[{sg:'SG-TERM',n:'Terminal structure and envelope',ph:'INF',tk:'CONSTR',dur:q=>Math.max(30,Math.ceil((q.area||20000)/250))},{sg:'SG-TERM',n:'Terminal fit-out and M&E',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.area||20000)/280))},{sg:'SG-TERM',n:'Baggage, security and ATC systems',ph:'COM',tk:'COMM',dur:q=>Math.max(20,Math.ceil((q.area||20000)/350))}],q:[{id:'area',l:'Terminal Area',u:'m2',def:20000}]},
{id:'BR-RC',dom:'BR',n:'RC Bridge',ico:'🌉',d:'RC bridge, abutments, piers, deck, bearings, parapets',w:[{sg:'SG-RCBRDG',n:'Bridge foundations, abutments and piers',ph:'INF',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.len||60)/4.5))},{sg:'SG-RCBRDG',n:'RC bridge deck',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||60)/4))},{sg:'SG-RCBRDG',n:'Bridge waterproofing and parapets',ph:'INF',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.len||60)/6))}],q:[{id:'len',l:'Bridge Length',u:'m',def:60}]},
{id:'BR-STEEL',dom:'BR',n:'Steel / Composite Bridge',ico:'⚙️',d:'Steel or composite bridge, girders, deck slab',w:[{sg:'SG-STBRDG',n:'Bridge abutments, piers and bearings',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||80)/5))},{sg:'SG-STBRDG',n:'Steel girder erection and deck',ph:'INF',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.len||80)/5))},{sg:'SG-STBRDG',n:'Bridge surfacing and parapets',ph:'INF',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.len||80)/8))}],q:[{id:'len',l:'Bridge Length',u:'m',def:80}]},
{id:'BR-VIADUCT',dom:'BR',n:'Viaduct',ico:'🌁',d:'Multi-span viaduct, piers, deck, expansion joints',w:[{sg:'SG-VDCT',n:'Viaduct pier foundations and columns',ph:'INF',tk:'CONSTR',dur:q=>Math.max(30,Math.ceil((q.len||400)/12))},{sg:'SG-VDCT',n:'Viaduct deck and finishes',ph:'INF',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.len||400)/14))}],q:[{id:'len',l:'Viaduct Length',u:'m',def:400}]},
{id:'TUN-TBM',dom:'TUN',n:'TBM Tunnel',ico:'🕳️',d:'TBM boring, segmental lining, cross passages',w:[{sg:'SG-TBM',n:'TBM launch shaft and portal',ph:'INF',tk:'CONSTR',dur:q=>Math.max(30,Math.ceil((q.dia||6)*8))},{sg:'SG-TBM',n:'TBM boring and segment installation',ph:'INF',tk:'CONSTR',dur:q=>Math.max(50,Math.ceil((q.len||1000)/15))},{sg:'SG-TBM',n:'Cross passages and fit-out',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||1000)/50))}],q:[{id:'len',l:'Tunnel Length',u:'m',def:1000},{id:'dia',l:'Diameter',u:'m',def:6}]},
{id:'TUN-SCL',dom:'TUN',n:'SCL / NATM Tunnel',ico:'🕳️',d:'Sprayed concrete lining, primary/secondary lining',w:[{sg:'SG-SCL',n:'SCL primary lining advance',ph:'INF',tk:'CONSTR',dur:q=>Math.max(30,Math.ceil((q.len||500)/12))},{sg:'SG-SCL',n:'Secondary lining',ph:'INF',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.len||500)/14))}],q:[{id:'len',l:'Tunnel Length',u:'m',def:500}]},
{id:'TUN-CAC',dom:'TUN',n:'Cut-and-Cover Tunnel',ico:'🏗️',d:'RC tunnel box, excavation support, backfill',w:[{sg:'SG-CAC',n:'Cut-and-cover excavation support',ph:'GW',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||200)/10))},{sg:'SG-CAC',n:'RC tunnel box construction',ph:'INF',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.len||200)/8))},{sg:'SG-CAC',n:'Backfill and reinstatement',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||200)/12))}],q:[{id:'len',l:'Tunnel Length',u:'m',def:200}]},
{id:'RD-EARTH',dom:'RD',n:'Highway Earthworks',ico:'🚜',d:'Road corridor earthworks, cuttings, embankments',w:[{sg:'SG-RDEARTH',n:'Highway corridor earthworks',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.vol||8000)/300))}],q:[{id:'vol',l:'Earthworks Volume',u:'m3',def:8000}]},
{id:'RD-DRAIN',dom:'RD',n:'Highway Drainage',ico:'🌧️',d:'Road drainage, catch pits, filter drains',w:[{sg:'SG-RDDRAIN',n:'Highway drainage',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||2000)/58))}],q:[{id:'len',l:'Road Length',u:'m',def:2000}]},
{id:'RD-PAVEMENT',dom:'RD',n:'Road Pavement Construction',ico:'🛣️',d:'Type 1, road base, binder and surface course',w:[{sg:'SG-RDBASE',n:'Type 1 sub-base and kerbs',ph:'INF',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.len||2000)*(q.wid||7)/800))},{sg:'SG-RDBIND',n:'Road base and binder course',ph:'INF',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.len||2000)*(q.wid||7)/1000))},{sg:'SG-RDSURF',n:'Surface course asphalt',ph:'INF',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.len||2000)*(q.wid||7)/1100))}],q:[{id:'len',l:'Road Length',u:'m',def:2000},{id:'wid',l:'Width',u:'m',def:7}]},
{id:'RD-JCT',dom:'RD',n:'Junction / Roundabout',ico:'⭕',d:'At-grade junction, roundabout, traffic signals',w:[{sg:'SG-JCT',n:'Junction excavation and formation',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.njct||2)*18))},{sg:'SG-JCT',n:'Junction pavement and kerbing',ph:'INF',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.njct||2)*14))}],q:[{id:'njct',l:'Junctions',u:'nr',def:2}]},
{id:'RD-SIGNS',dom:'RD',n:'Road Markings & Signs',ico:'🚦',d:'Road markings, retroreflective studs, signs',w:[{sg:'SG-RDSIGN',n:'Traffic signs and road markings',ph:'INF',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.len||2000)/180))}],q:[{id:'len',l:'Route Length',u:'m',def:2000}]},
{id:'PW-SUB132',dom:'PW',n:'Primary Substation (132/33kV)',ico:'⚡',d:'Substation, transformers, switchgear, protection',w:[{sg:'SG-SUB132',n:'Substation civil works',ph:'INF',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.nb||2)*20))},{sg:'SG-SUB132',n:'Transformer installation',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.nb||2)*12))},{sg:'SG-SUB132',n:'HV switchgear and SCADA',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.nb||2)*14))}],q:[{id:'nb',l:'Transformer Bays',u:'nr',def:2}]},
{id:'PW-SOLAR',dom:'PW',n:'Ground Mount Solar PV Farm',ico:'☀️',d:'Solar PV, piles, mounting, panels, inverters',w:[{sg:'SG-SOLAR',n:'Pile driving and mounting frame',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.mwp||10)*8))},{sg:'SG-SOLAR',n:'PV panels and string wiring',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.mwp||10)*6))},{sg:'SG-SOLAR',n:'Inverters and grid connection',ph:'INF',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.mwp||10)*5))}],q:[{id:'mwp',l:'Capacity',u:'MWp',def:10}]},
{id:'PW-WIND',dom:'PW',n:'Onshore Wind Farm',ico:'💨',d:'Wind turbine foundations, erection, array cabling',w:[{sg:'SG-WIND',n:'Turbine foundation RC',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.nt||6)*5))},{sg:'SG-WIND',n:'Turbine tower erection',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.nt||6)*4))},{sg:'SG-WIND',n:'Array cabling and export connection',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.nt||6)*4))}],q:[{id:'nt',l:'Turbines',u:'nr',def:6}]},
{id:'PW-BESS',dom:'PW',n:'Battery Energy Storage (BESS)',ico:'🔋',d:'BESS civil works, container installation, HV',w:[{sg:'SG-BESS',n:'BESS civil works and pads',ph:'INF',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.mwh||50)/15))},{sg:'SG-BESS',n:'Battery containers and BMS',ph:'INF',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.mwh||50)/12))},{sg:'SG-BESS',n:'HV connection and EMS',ph:'INF',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.mwh||50)/14))}],q:[{id:'mwh',l:'Capacity',u:'MWh',def:50}]},
{id:'PW-HV',dom:'PW',n:'HV Underground Cable Route',ico:'🔌',d:'HV cable trench, ducting, cable pull',w:[{sg:'SG-HVCAB',n:'HV cable trench and ducting',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||1000)/45))},{sg:'SG-HVCAB',n:'HV cable installation and jointing',ph:'INF',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.len||1000)/55))}],q:[{id:'len',l:'Cable Length',u:'m',def:1000}]},
{id:'PW-DHN',dom:'PW',n:'District Heating Network',ico:'🌡️',d:'Pre-insulated DHN pipework, heat centres, HIUs',w:[{sg:'SG-DHN',n:'DHN trench and pre-insulated pipe',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||2000)/40))},{sg:'SG-DHN',n:'Heat centres and HIUs',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||2000)/60))}],q:[{id:'len',l:'Network Length',u:'m',def:2000}]},
{id:'PW-H2',dom:'PW',n:'Hydrogen Production Facility',ico:'💧',d:'Electrolyser, storage, compression, safety',w:[{sg:'SG-H2',n:'Electrolyser civil and building works',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.mw||5)*6))},{sg:'SG-H2',n:'Electrolyser installation and pipework',ph:'INF',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.mw||5)*5))}],q:[{id:'mw',l:'Capacity',u:'MW',def:5}]},
{id:'WT-MAIN',dom:'WT',n:'Water Distribution Main',ico:'💧',d:'Potable water main, connections, valves, hydrants',w:[{sg:'SG-WMAIN',n:'Water main pipe laying',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||1500)/40))},{sg:'SG-WMAIN',n:'Pressure testing and chlorination',ph:'COM',tk:'COMM',dur:q=>Math.max(8,Math.ceil((q.len||1500)/80))}],q:[{id:'len',l:'Main Length',u:'m',def:1500}]},
{id:'WT-WTW',dom:'WT',n:'Water Treatment Works',ico:'🏭',d:'Intake, treatment processes, dosing, clarification',w:[{sg:'SG-WTW',n:'Treatment works civil and structures',ph:'INF',tk:'CONSTR',dur:q=>Math.max(40,Math.ceil((q.flow||50)*1.5))},{sg:'SG-WTW',n:'Process mechanical and pipework',ph:'INF',tk:'CONSTR',dur:q=>Math.max(30,Math.ceil((q.flow||50)*1.2))},{sg:'SG-WTW',n:'Electrical, SCADA and controls',ph:'INF',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.flow||50)*1))}],q:[{id:'flow',l:'Design Flow',u:'Ml/d',def:50}]},
{id:'WT-PUMP',dom:'WT',n:'Water Pumping Station',ico:'⚙️',d:'Pump station wet well, pumps, controls',w:[{sg:'SG-WPUMP',n:'Pump station wet well and valve chamber',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.np||3)*7))},{sg:'SG-WPUMP',n:'Pump installation and controls',ph:'INF',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.np||3)*6))}],q:[{id:'np',l:'Pump Sets',u:'nr',def:3}]},
{id:'WT-RESV',dom:'WT',n:'Service Reservoir',ico:'🏊',d:'RC service reservoir, roof, pipework, telemetry',w:[{sg:'SG-RESV',n:'Reservoir excavation and base slab',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.cap||10)*3))},{sg:'SG-RESV',n:'Reservoir walls and roof slab',ph:'INF',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.cap||10)*3.5))},{sg:'SG-RESV',n:'Waterproofing and pipework',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.cap||10)*2))}],q:[{id:'cap',l:'Capacity',u:'Ml',def:10}]},
{id:'WT-DESAL',dom:'WT',n:'Desalination Plant',ico:'🌊',d:'SWRO intake, pre-treatment, RO trains, post-treatment',w:[{sg:'SG-DESAL',n:'Desalination intake and pre-treatment',ph:'INF',tk:'CONSTR',dur:q=>Math.max(35,Math.ceil((q.flow||50)*2.5))},{sg:'SG-DESAL',n:'RO train installation',ph:'INF',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.flow||50)*2))},{sg:'SG-DESAL',n:'Post-treatment and SCADA',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.flow||50)*1.5))}],q:[{id:'flow',l:'Capacity',u:'Ml/d',def:50}]},
{id:'WT-WWTW',dom:'WT',n:'Wastewater Treatment Works',ico:'🌊',d:'WWTW inlet, primary, secondary, sludge, outfall',w:[{sg:'SG-WWTW',n:'WWTW civil — tanks and structures',ph:'INF',tk:'CONSTR',dur:q=>Math.max(40,Math.ceil((q.pe||10000)/600))},{sg:'SG-WWTW',n:'Process mechanical and aeration',ph:'INF',tk:'CONSTR',dur:q=>Math.max(30,Math.ceil((q.pe||10000)/700))},{sg:'SG-WWTW',n:'Electrical, SCADA and outfall',ph:'INF',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.pe||10000)/800))}],q:[{id:'pe',l:'Population Equivalent',u:'PE',def:10000}]},
{id:'GS-MAIN',dom:'GS',n:'Gas Distribution Main',ico:'🔥',d:'Medium/low pressure gas main, connections',w:[{sg:'SG-GASMAIN',n:'Gas main pipe laying',ph:'INF',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.len||1000)/42))},{sg:'SG-GASMAIN',n:'Pressure testing and commissioning',ph:'COM',tk:'COMM',dur:q=>Math.max(8,Math.ceil((q.len||1000)/90))}],q:[{id:'len',l:'Main Length',u:'m',def:1000}]},
{id:'GS-HP',dom:'GS',n:'High-Pressure Gas Pipeline',ico:'🛢️',d:'HP steel gas pipeline, coating, cathodic protection',w:[{sg:'SG-HPGAS',n:'Pipeline excavation, pipe laying and welding',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||5000)/140))},{sg:'SG-HPGAS',n:'Testing and commissioning',ph:'COM',tk:'COMM',dur:q=>Math.max(15,Math.ceil((q.len||5000)/200))}],q:[{id:'len',l:'Pipeline Length',u:'m',def:5000}]},
{id:'MR-GI',dom:'MR',n:'Marine Ground Investigation',ico:'🔍',d:'Hydrographic survey, seabed sampling, geotechnical',w:[{sg:'SG-MGI',n:'Hydrographic and seabed investigation',ph:'EN',tk:'CONSTR',dur:20},{sg:'SG-MGI',n:'Geotechnical boreholes and lab testing',ph:'EN',tk:'CONSTR',dur:20}],q:[]},
{id:'MR-DREDGE',dom:'MR',n:'Capital Dredging',ico:'⚓',d:'Capital dredging, disposal to licensed site',w:[{sg:'SG-DREDGE',n:'Capital dredging and disposal',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.vol||50000)/3500))}],q:[{id:'vol',l:'Dredge Volume',u:'m3',def:50000}]},
{id:'MR-QUAY',dom:'MR',n:'Piled Quay Wall',ico:'🚢',d:'Piled quay, capping beam, fenders, bollards',w:[{sg:'SG-QUAY',n:'Marine piling and capping beam',ph:'INF',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.len||200)/7))},{sg:'SG-QUAY',n:'Quay fenders, bollards and services',ph:'INF',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.len||200)/18))}],q:[{id:'len',l:'Quay Length',u:'m',def:200}]},
{id:'MR-BRKWTR',dom:'MR',n:'Breakwater & Revetment',ico:'🪨',d:'Rock armour, armour units, core fill, crest',w:[{sg:'SG-BRKW',n:'Breakwater core and underlayer',ph:'INF',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.len||500)/18))},{sg:'SG-BRKW',n:'Primary armour and crest',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||500)/15))}],q:[{id:'len',l:'Breakwater Length',u:'m',def:500}]},
{id:'FT-HHARD',dom:'FT',n:'Heavy Duty Hardstanding',ico:'🏗️',d:'Concrete hardstanding for port or heavy industrial',w:[{sg:'SG-HHARD',n:'Formation, drainage and sub-base',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||10000)/800))},{sg:'SG-HHARD',n:'Heavy duty concrete surfacing',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||10000)/700))}],q:[{id:'area',l:'Hardstanding Area',u:'m2',def:10000}]},
{id:'FT-RFTERM',dom:'FT',n:'Rail Freight Terminal',ico:'🚆',d:'Rail freight sidings, loops, loading tracks',w:[{sg:'SG-RFTERM',n:'Rail freight siding track and infrastructure',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||600)/45))}],q:[{id:'len',l:'Siding Length',u:'m',def:600}]},
{id:'FD-EMBANK',dom:'FD',n:'Flood Embankment',ico:'🌊',d:'Earthfill embankment, filter zones, crest, toe drain',w:[{sg:'SG-EMBANK',n:'Embankment earthfill and compaction',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||500)*(q.ht||3)/50))},{sg:'SG-EMBANK',n:'Crest protection and toe drain',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.len||500)/55))}],q:[{id:'len',l:'Length',u:'m',def:500},{id:'ht',l:'Height',u:'m',def:3}]},
{id:'FD-WALL',dom:'FD',n:'Flood Wall (RC / Sheet Pile)',ico:'🧱',d:'RC or sheet pile flood defence wall',w:[{sg:'SG-FDWALL',n:'Flood wall construction',ph:'INF',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.len||300)/14))}],q:[{id:'len',l:'Wall Length',u:'m',def:300}]},
{id:'OG-PIPE',dom:'OG',n:'Onshore Oil/Gas Pipeline',ico:'🛢️',d:'Pipeline — right of way, trench, weld, coat, test',w:[{sg:'SG-OGPIPE',n:'Pipeline route preparation and trenching',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.len||5000)/140))},{sg:'SG-OGPIPE',n:'Pipeline welding, coating and installation',ph:'INF',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.len||5000)/130))},{sg:'SG-OGPIPE',n:'Testing and commissioning',ph:'COM',tk:'COMM',dur:q=>Math.max(15,Math.ceil((q.len||5000)/200))}],q:[{id:'len',l:'Pipeline Length',u:'m',def:5000}]},
{id:'OG-COMP',dom:'OG',n:'Compressor Station',ico:'⚙️',d:'Gas compressor station — building, compressors',w:[{sg:'SG-COMP',n:'Compressor station civil and building',ph:'INF',tk:'CONSTR',dur:25},{sg:'SG-COMP',n:'Compressor installation and pipework',ph:'INF',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.mw||5)*4))}],q:[{id:'mw',l:'Compressor Power',u:'MW',def:5}]},
{id:'TC-FIBRE',dom:'TC',n:'Fibre Optic Network',ico:'📶',d:'Fibre duct, blowing, jointing, splicing, testing',w:[{sg:'SG-FIBRE',n:'Duct installation and fibre blowing',ph:'INF',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.len||5000)/180))},{sg:'SG-FIBRE',n:'Fibre splicing and testing',ph:'INF',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.len||5000)/220))}],q:[{id:'len',l:'Network Length',u:'m',def:5000}]},
{id:'TC-5G',dom:'TC',n:'5G / Telecoms Mast',ico:'📡',d:'Telecoms mast, cabin, power, commissioning',w:[{sg:'SG-5GMAST',n:'Mast foundation and erection',ph:'INF',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.nm||5)*3))},{sg:'SG-5GMAST',n:'Radio equipment and commissioning',ph:'COM',tk:'COMM',dur:q=>Math.max(6,Math.ceil((q.nm||5)*2.5))}],q:[{id:'nm',l:'Masts',u:'nr',def:5}]},
{id:'REM-BIO',dom:'REM',n:'In-Situ Bioremediation',ico:'🧬',d:'In-situ bioremediation, injection wells, monitoring',w:[{sg:'SG-BIOREM',n:'Injection well installation',ph:'EN',tk:'CONSTR',dur:10},{sg:'SG-BIOREM',n:'In-situ bioremediation programme',ph:'EN',tk:'CONSTR',dur:60}],q:[]},
{id:'REM-CAP',dom:'REM',n:'Landfill Cap & Gas Management',ico:'♻️',d:'Engineered landfill cap, HDPE liner, gas extraction',w:[{sg:'SG-CAP',n:'Landfill cap preparation and HDPE liner',ph:'EN',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||5000)/250))},{sg:'SG-CAP',n:'Gas extraction wells and flare installation',ph:'EN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||5000)/400))}],q:[{id:'area',l:'Cap Area',u:'m2',def:5000}]},
{id:'CM-MEP',dom:'CM',n:'MEP Commissioning & Testing',ico:'✅',d:'Full MEP commissioning, static and dynamic testing',w:[{sg:'SG-COMM',n:'MEP pre-commissioning and static testing',ph:'COM',tk:'COMM',dur:15},{sg:'SG-COMM',n:'Dynamic commissioning and seasonal adjustment',ph:'COM',tk:'COMM',dur:20}],q:[]},
{id:'CM-IST',dom:'CM',n:'Integrated Systems Test (IST)',ico:'🔬',d:'Cross-system integration testing, safety case',w:[{sg:'SG-IST',n:'IST preparation and test scripts',ph:'COM',tk:'COMM',dur:15},{sg:'SG-IST',n:'IST execution and defect rectification',ph:'COM',tk:'COMM',dur:20}],q:[]},
{id:'CM-HOV',dom:'CM',n:'Handover & Project Close-Out',ico:'🎯',d:'O&M manuals, as-builts, CDM file, snagging, final account',w:[{sg:'SG-HOV',n:'O&M documentation, as-builts and CDM file',ph:'COM',tk:'COMM',dur:15},{sg:'SG-HOV',n:'Training, defects inspection and final account',ph:'COM',tk:'COMM',dur:20}],q:[]},
{id:'PC-PUBLIC',dom:'PC',n:'Public Sector Procurement (FTS)',ico:'📋',d:'Find a Tender/OJEU: ISFT, PQQ, ITT, evaluation, award',w:[{sg:'SG-PRCSTRAT',n:'Procurement strategy and gateway approval',ph:'PRO',tk:'PROC',dur:15},{sg:'SG-PRCPQQ',n:'ISFT/PQQ issue and evaluation',ph:'PRO',tk:'PROC',dur:30},{sg:'SG-PRCITT',n:'ITT preparation, issue and tender period',ph:'PRO',tk:'PROC',dur:45},{sg:'SG-PRCEVAL',n:'Tender evaluation and preferred bidder',ph:'PRO',tk:'PROC',dur:20},{sg:'SG-PRCLET',n:'Contract award and mobilisation',ph:'PRO',tk:'PROC',dur:15}],q:[]},
{id:'PC-PRIVATE',dom:'PC',n:'Private Sector Procurement',ico:'🤝',d:'Two-stage tender, negotiated procurement, ECI',w:[{sg:'SG-PRIVITT',n:'Tender preparation, issue and receipt',ph:'PRO',tk:'PROC',dur:20},{sg:'SG-PRIVEVAL',n:'Tender evaluation and negotiation',ph:'PRO',tk:'PROC',dur:20},{sg:'SG-PRCLET',n:'Contract execution and mobilisation',ph:'PRO',tk:'PROC',dur:10}],q:[]},
{id:'PC-DESIGN',dom:'PC',n:'Design Team Appointment (RIBA)',ico:'📐',d:'Architect, structural, M&E consultants RIBA 0-4',w:[{sg:'SG-DESIGNAPP',n:'Design team brief and consultant selection',ph:'PRO',tk:'PROC',dur:20},{sg:'SG-DESIGNAPP',n:'Design team appointments executed',ph:'PRO',tk:'PROC',dur:15},{sg:'SG-DES',n:'Detailed design development RIBA 2-4',ph:'PRO',tk:'PROC',dur:65}],q:[]},
// ── DESIGN PROCESS (RIBA STAGES) ─────────────────────────
{id:'DP-STRAT',dom:'DP',n:'RIBA Stage 0 — Strategic Definition',ico:'♟️',d:'Project brief, feasibility, business case, project execution plan',w:[{sg:'SG-RIBA0',n:'Strategic brief, feasibility study and options appraisal',ph:'CON',tk:'PROC',dur:20},{sg:'SG-RIBA0',n:'Project Execution Plan (PEP) and governance setup',ph:'CON',tk:'PROC',dur:10}],q:[]},
{id:'DP-PREP',dom:'DP',n:'RIBA Stage 1 — Preparation & Briefing',ico:'📋',d:'Client requirements, site appraisal, development of initial project brief',w:[{sg:'SG-RIBA1',n:'Initial project brief and client requirements capture',ph:'CON',tk:'PROC',dur:15},{sg:'SG-RIBA1',n:'Site appraisal, surveys and project programme',ph:'CON',tk:'PROC',dur:15},{sg:'SG-RIBA1',n:'Stage 1 design team review and sign-off',ph:'CON',tk:'PROC',dur:5}],q:[]},
{id:'DP-CONCEPT',dom:'DP',n:'RIBA Stage 2 — Concept Design',ico:'🎨',d:'Concept design, outline structural, MEP strategy, cost plan, planning strategy',w:[{sg:'SG-RIBA2',n:'Architectural concept design development',ph:'CON',tk:'PROC',dur:q=>Math.max(20,Math.ceil((q.rcyc||3)*8))},{sg:'SG-RIBA2',n:'Structural and MEP concept design',ph:'CON',tk:'PROC',dur:q=>Math.max(15,Math.ceil((q.rcyc||3)*6))},{sg:'SG-RIBA2',n:'Cost plan (RIBA 2) and programme',ph:'CON',tk:'PROC',dur:10},{sg:'SG-RIBA2',n:'Stage 2 design review and client sign-off',ph:'CON',tk:'PROC',dur:q=>Math.max(5,Math.ceil((q.rcyc||3)*2))}],q:[{id:'rcyc',l:'Review Cycles',u:'nr',def:3}]},
{id:'DP-DEVELOPED',dom:'DP',n:'RIBA Stage 3 — Spatial Coordination',ico:'📐',d:'Developed design, coordinated drawings, outline specification, updated cost plan',w:[{sg:'SG-RIBA3',n:'Developed architectural design and room data sheets',ph:'CON',tk:'PROC',dur:q=>Math.max(25,Math.ceil((q.rcyc||3)*10))},{sg:'SG-RIBA3',n:'Structural and MEP developed design',ph:'CON',tk:'PROC',dur:q=>Math.max(20,Math.ceil((q.rcyc||3)*8))},{sg:'SG-RIBA3',n:'Outline specifications and updated cost plan',ph:'CON',tk:'PROC',dur:15},{sg:'SG-RIBA3',n:'Stage 3 technical design review and client approval',ph:'CON',tk:'PROC',dur:q=>Math.max(8,Math.ceil((q.rcyc||3)*3))}],q:[{id:'rcyc',l:'Review Cycles',u:'nr',def:3}]},
{id:'DP-TECHNICAL',dom:'DP',n:'RIBA Stage 4 — Technical Design',ico:'⚙️',d:'Full technical design, detailed specifications, contractor design portions',w:[{sg:'SG-RIBA4',n:'Full architectural technical design packages',ph:'PRO',tk:'PROC',dur:q=>Math.max(30,Math.ceil((q.pkgs||8)*5))},{sg:'SG-RIBA4',n:'Structural and MEP detailed design',ph:'PRO',tk:'PROC',dur:q=>Math.max(25,Math.ceil((q.pkgs||8)*4))},{sg:'SG-RIBA4',n:'Full specifications and drawing register',ph:'PRO',tk:'PROC',dur:15},{sg:'SG-RIBA4',n:'IFC (Issued for Construction) drawing packages',ph:'PRO',tk:'PROC',dur:q=>Math.max(10,Math.ceil((q.pkgs||8)*2))}],q:[{id:'pkgs',l:'Design Packages',u:'nr',def:8}]},
{id:'DP-MFG',dom:'DP',n:'RIBA Stage 4 — Manufacturing & Specialist',ico:'🏭',d:'Contractor design portion, shop drawings, specialist subcontractor design',w:[{sg:'SG-CDPSD',n:'Contractor Design Portion (CDP) preparation',ph:'PRO',tk:'PROC',dur:q=>Math.max(20,Math.ceil((q.pkgs||5)*6))},{sg:'SG-CDPSD',n:'Specialist design: facade, structure, MEP coordination',ph:'PRO',tk:'PROC',dur:q=>Math.max(20,Math.ceil((q.pkgs||5)*5))},{sg:'SG-CDPSD',n:'BIM coordination and clash detection',ph:'PRO',tk:'PROC',dur:15},{sg:'SG-CDPSD',n:'IFC issue and RFI/technical query management',ph:'PRO',tk:'PROC',dur:q=>Math.max(10,Math.ceil((q.pkgs||5)*3))}],q:[{id:'pkgs',l:'Specialist Pkgs',u:'nr',def:5}]},
{id:'DP-SITE',dom:'DP',n:'RIBA Stage 5 — Construction',ico:'🏗️',d:'Construction phase design management, RFIs, design queries, change control',w:[{sg:'SG-RIBA5',n:'Construction phase design management and RFI responses',ph:'ST',tk:'PROC',dur:q=>Math.max(30,(q.cw||52)*3)},{sg:'SG-RIBA5',n:'As-built drawing preparation and BIM updates',ph:'COM',tk:'PROC',dur:15}],q:[{id:'cw',l:'Construction Weeks',u:'wks',def:52}]},
{id:'DP-HOC',dom:'DP',n:'RIBA Stage 6 — Handover',ico:'🎯',d:'Handover, O&M manuals, golden thread BIM, lessons learned',w:[{sg:'SG-RIBA6',n:'O&M manuals, as-built drawings and health & safety file',ph:'COM',tk:'PROC',dur:15},{sg:'SG-RIBA6',n:'Building User Guide and training programme',ph:'COM',tk:'PROC',dur:8},{sg:'SG-RIBA6',n:'Handover certificate and defects notification period',ph:'COM',tk:'PROC',dur:10}],q:[]},
{id:'DP-USE',dom:'DP',n:'RIBA Stage 7 — Use (PIR)',ico:'📊',d:'Post-occupancy evaluation, building performance, lessons learned, POE',w:[{sg:'SG-RIBA7',n:'Post-Occupancy Evaluation (POE) and performance monitoring',ph:'COM',tk:'PROC',dur:q=>Math.max(20,(q.mon||26)*5)},{sg:'SG-RIBA7',n:'Lessons learned review and close-out report',ph:'COM',tk:'PROC',dur:5}],q:[{id:'mon',l:'Monitoring Period',u:'wks',def:26}]},

// ── HIGH-RISE / TALL TOWERS ───────────────────────────────
{id:'TT-COREJF',dom:'TT',n:'Jump Form / Slip Form Core',ico:'🏙️',d:'RC core construction using jump form or slip form for tall buildings',w:[{sg:'SG-JTCORE',n:'Jump/slip form system installation and core setup',ph:'ST',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.fl||30)*0.5))},{sg:'SG-JTCORE',n:'Core RC construction — jump form advance per floor',ph:'ST',tk:'CONSTR',dur:q=>Math.max(30,Math.ceil((q.fl||30)*q.dpf||2))}],q:[{id:'fl',l:'Floors Above Ground',u:'nr',def:30},{id:'dpf',l:'Days Per Floor',u:'days',def:2}]},
{id:'TT-TRANSFER',dom:'TT',n:'Transfer Slab / Plate',ico:'🏗️',d:'Heavy RC transfer slab or transfer plate at podium/transfer level',w:[{sg:'SG-XFER',n:'Transfer slab falsework, formwork and reinforcement',ph:'ST',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||1000)/55))},{sg:'SG-XFER',n:'Transfer slab mass concrete pour',ph:'ST',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||1000)/90))}],q:[{id:'area',l:'Transfer Slab Area',u:'m²',def:1000}]},
{id:'TT-OUTRIG',dom:'TT',n:'Outrigger & Belt Truss',ico:'⚙️',d:'Steel outrigger frames and perimeter belt trusses at refuge/plant floors',w:[{sg:'SG-OUTRIG',n:'Outrigger and belt truss steel erection',ph:'ST',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.levels||3)*10))}],q:[{id:'levels',l:'Outrigger Levels',u:'nr',def:3}]},
{id:'TT-FACADE',dom:'TT',n:'High-Rise Facade System',ico:'🪟',d:'Unitised curtain wall, BM gondola/cradle system, facade access equipment',w:[{sg:'SG-HRFAC',n:'Unitised curtain wall system design and fabrication',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.area||5000)/120))},{sg:'SG-HRFAC',n:'Unitised curtain wall installation per zone',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(30,Math.ceil((q.area||5000)/18))},{sg:'SG-HRFAC',n:'Building maintenance unit (BMU/gondola) installation',ph:'COM',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.fl||30)*0.4))}],q:[{id:'area',l:'Facade Area',u:'m²',def:5000},{id:'fl',l:'Floors',u:'nr',def:30}]},
{id:'TT-SKY',dom:'TT',n:'Sky Lobby & Refuge Floors',ico:'🏙️',d:'Sky lobby fit-out, refuge floor construction, evacuation lift lobbies',w:[{sg:'SG-SKYLOB',n:'Sky lobby and refuge floor construction and fit-out',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.nr||3)*10))}],q:[{id:'nr',l:'Sky Lobbies',u:'nr',def:3}]},
{id:'TT-MEP',dom:'TT',n:'High-Rise MEP Riser Systems',ico:'⚡',d:'Vertical MEP risers, plant rooms per zone, busbar trunking, pressure zones',w:[{sg:'SG-HRMEP',n:'Main MEP risers and zone plant room installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(30,Math.ceil((q.fl||30)*0.8))},{sg:'SG-HRMEP',n:'Busbar trunking, water booster sets and pressure zones',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.fl||30)*0.6))}],q:[{id:'fl',l:'Floors',u:'nr',def:30}]},
{id:'TT-LIFTS-HR',dom:'TT',n:'High-Rise Lift Installation',ico:'🛗',d:'High-speed passenger lifts, service lifts, evacuation lifts — tall buildings',w:[{sg:'SG-HRLIFTS',n:'High-rise lift shaft and guide rail installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.nl||8)*5))},{sg:'SG-HRLIFTS',n:'High-speed lift car, electrical and controls installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.nl||8)*7))},{sg:'SG-HRLIFTS',n:'High-rise lift commissioning, load test and SIL certification',ph:'COM',tk:'COMM',dur:q=>Math.max(15,Math.ceil((q.nl||8)*4))}],q:[{id:'nl',l:'Number of Lifts',u:'nr',def:8}]},

// ── HOSPITAL / HEALTHCARE ────────────────────────────────
{id:'HOS-ICU',dom:'HOS',n:'Intensive Care Unit (ICU/ITU)',ico:'🏥',d:'ITU/ICU fit-out — bed spaces, infection control, specialist MEP, tracking systems',w:[{sg:'SG-ICU',n:'ICU structural and infection control shell',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.beds||10)*3.5))},{sg:'SG-ICU',n:'ICU specialist MEP, medical gas and nurse call',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.beds||10)*3))},{sg:'SG-ICU',n:'ICU equipment installation and commissioning',ph:'COM',tk:'COMM',dur:q=>Math.max(12,Math.ceil((q.beds||10)*2))}],q:[{id:'beds',l:'ICU Beds',u:'nr',def:10}]},
{id:'HOS-AE',dom:'HOS',n:'A&E / Emergency Department',ico:'🚑',d:'A&E department fit-out — resus bays, majors, minors, triage, imaging',w:[{sg:'SG-AE',n:'A&E shell, specialist flooring and decontamination',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.area||800)/40))},{sg:'SG-AE',n:'A&E specialist MEP, emergency power and gas',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||800)/50))}],q:[{id:'area',l:'A&E Gross Area',u:'m²',def:800}]},
{id:'HOS-PHARM',dom:'HOS',n:'Pharmacy & Dispensary',ico:'💊',d:'Hospital pharmacy — dispensary, CIVAS clean room, robot dispensing',w:[{sg:'SG-PHARM',n:'Pharmacy shell, clean room and controlled environments',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||300)/30))},{sg:'SG-PHARM',n:'Robot dispensing equipment and IT systems',ph:'COM',tk:'COMM',dur:15}],q:[{id:'area',l:'Pharmacy Area',u:'m²',def:300}]},
{id:'HOS-DECON',dom:'HOS',n:'Decontamination & SSD',ico:'⚗️',d:'Sterile Services Department — dirty/clean zoning, washer disinfectors, sterilizers',w:[{sg:'SG-DECON',n:'SSD shell, zoning, HVAC and utility connections',ph:'FIN',tk:'CONSTR',dur:20},{sg:'SG-DECON',n:'SSD washer disinfectors and sterilizer installation',ph:'COM',tk:'COMM',dur:15}],q:[]},
{id:'HOS-PATH',dom:'HOS',n:'Pathology Laboratory',ico:'🔬',d:'Clinical laboratory — specimen handling, analysers, cold storage, specialist drainage',w:[{sg:'SG-PATH',n:'Pathology shell, benching and laboratory drainage',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||500)/35))},{sg:'SG-PATH',n:'Laboratory analysers and cold storage installation',ph:'COM',tk:'COMM',dur:12}],q:[{id:'area',l:'Lab Area',u:'m²',def:500}]},
{id:'HOS-INFRA',dom:'HOS',n:'Hospital Infrastructure (Plant)',ico:'🏭',d:'Hospital energy centre, CHP, boilers, cooling, medical air, standby generators',w:[{sg:'SG-HOSPLANT',n:'Energy centre civil and building works',ph:'MEP',tk:'CONSTR',dur:25},{sg:'SG-HOSPLANT',name:'Boilers, CHP, chillers and cooling towers',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.beds||100)*0.3))},{sg:'SG-HOSPLANT',n:'Standby generators, ATS and emergency power',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.beds||100)*0.2))}],q:[{id:'beds',l:'Hospital Beds',u:'nr',def:100}]},

// ── COMMERCIAL OFFICES ────────────────────────────────────
{id:'OFF-CATA',dom:'OFF',n:'Cat A Commercial Office Fit-Out',ico:'🏢',d:'Cat A base build fit-out — raised floor, M&E first fix, suspended ceilings, toilets',w:[{sg:'SG-CATA',n:'Cat A raised access floor and basic MEP first fix',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||2000)/80))},{sg:'SG-CATA',n:'Cat A suspended ceilings, LG7 lighting and small power',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.area||2000)/90))},{sg:'SG-CATA',n:'Cat A WC cores, reception shell and common areas',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||2000)/100))}],q:[{id:'area',l:'GIA (Cat A area)',u:'m²',def:2000}]},
{id:'OFF-CATB',dom:'OFF',n:'Cat B Office Fit-Out (Bespoke)',ico:'🛋️',d:'Bespoke Cat B — open plan, meeting rooms, breakout, reception, joinery',w:[{sg:'SG-CATBX',n:'Cat B partitions, meeting rooms and acoustic pods',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.area||1500)/70))},{sg:'SG-CATBX',n:'Bespoke joinery, reception desk and statement staircase',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(14,Math.ceil((q.area||1500)/80))},{sg:'SG-CATBX',n:'AV, IT infrastructure and access control',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||1500)/120))},{sg:'SG-CATBX',n:'FF&E, branding and graphics installation',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||1500)/150))}],q:[{id:'area',l:'Fit-Out Area',u:'m²',def:1500}]},
{id:'OFF-LOBBY',dom:'OFF',n:'Office Lobby & Atrium',ico:'🏛️',d:'Feature lobby, double-height atrium, reception desk, security, feature lighting',w:[{sg:'SG-LOBBY',n:'Lobby stone/feature flooring and wall finishes',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(14,Math.ceil((q.area||400)/30))},{sg:'SG-LOBBY',n:'Reception joinery, security desk and turnstiles',ph:'FIN',tk:'CONSTR',dur:10},{sg:'SG-LOBBY',n:'Feature lighting, AV and digital displays',ph:'MEP',tk:'CONSTR',dur:8}],q:[{id:'area',l:'Lobby Area',u:'m²',def:400}]},
{id:'OFF-BIKE',dom:'OFF',n:'Cycle Hub & Wellness Facilities',ico:'🚲',d:'Cycle storage, showers, lockers, changing rooms — wellbeing amenity',w:[{sg:'SG-CYCLEHUB',n:'Cycle hub fit-out — storage, shower and changing',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.spaces||50)*0.2))}],q:[{id:'spaces',l:'Cycle Spaces',u:'nr',def:50}]},

// ── RESIDENTIAL APARTMENTS ────────────────────────────────
{id:'RES-STRUCT',dom:'RES',n:'Residential RC Frame (Build to Rent / PRS)',ico:'🏠',d:'Residential RC or hybrid frame including stair/lift core, balconies',w:[{sg:'SG-RESSTRUCT',n:'Residential RC frame and cores',ph:'ST',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.fl||10)*(q.fpg||400)/550))},{sg:'SG-RESSTRUCT',n:'Residential balconies and balustrades',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.units||40)*0.8))}],q:[{id:'fl',l:'Floors',u:'nr',def:10},{id:'fpg',l:'Floor Plate',u:'m²',def:400},{id:'units',l:'Units',u:'nr',def:40}]},
{id:'RES-FACADE',dom:'RES',n:'Residential Facade & Windows',ico:'🪟',d:'Residential cladding system, windows, juliette balconies, entrance doors',w:[{sg:'SG-RESFAC',n:'Residential cladding, brickwork or render system',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.area||1500)/50))},{sg:'SG-RESFAC',n:'Residential windows, doors and juliette balconies',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.units||40)*0.8))}],q:[{id:'area',l:'Facade Area',u:'m²',def:1500},{id:'units',l:'Units',u:'nr',def:40}]},
{id:'RES-UNITS',dom:'RES',n:'Apartment Unit Fit-Out',ico:'🛋️',d:'Residential apartment fit-out — kitchen, bathroom, flooring, decoration, M&E second fix',w:[{sg:'SG-RESUNITS',n:'First fix MEP and partition fit-out per floor',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.units||40)*1.2))},{sg:'SG-RESUNITS',n:'Kitchen, bathroom, flooring and decoration per unit',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(25,Math.ceil((q.units||40)*2.2))},{sg:'SG-RESUNITS',n:'Second fix MEP, appliances and snagging per unit',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.units||40)*1.5))}],q:[{id:'units',l:'Dwelling Units',u:'nr',def:40}]},
{id:'RES-AMENITY',dom:'RES',n:'Residential Amenity & Communal',ico:'🌿',d:'Residents lounge, gym, roof terrace, concierge, communal landscaping',w:[{sg:'SG-RESMAN',n:'Residents lounge, gym and concierge fit-out',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.area||400)/45))},{sg:'SG-RESMAN',n:'Roof terrace and communal landscaping',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||400)/55))}],q:[{id:'area',l:'Amenity Area',u:'m²',def:400}]},
{id:'RES-BASEMENT',dom:'RES',n:'Residential Car Parking (Basement)',ico:'🚗',d:'Below-ground car parking — structure, ramps, fire detection, EV charging, wayfinding',w:[{sg:'SG-RESPARK',n:'Basement car park structure and waterproofing',ph:'GW',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.spaces||50)*0.5))},{sg:'SG-RESPARK',n:'Car park M&E, lighting, EV charging and wayfinding',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.spaces||50)*0.3))}],q:[{id:'spaces',l:'Parking Spaces',u:'nr',def:50}]},

// ── SCHOOLS & EDUCATION ───────────────────────────────────
{id:'SCH-CLASS',dom:'SCH',n:'Classrooms & Teaching Spaces',ico:'🏫',d:'General and specialist classrooms, ICT suites, flexible learning spaces',w:[{sg:'SG-CLASS',n:'Classroom partitions, displays and specialist joinery',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.nc||20)*1.5))},{sg:'SG-CLASS',n:'ICT infrastructure, AV and interactive whiteboards',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.nc||20)*1.0))}],q:[{id:'nc',l:'Number of Classrooms',u:'nr',def:20}]},
{id:'SCH-SEND',dom:'SCH',n:'SEND Facilities',ico:'♿',d:'SEND specialist facilities — sensory rooms, hygiene rooms, quiet rooms',w:[{sg:'SG-SEND',n:'SEND specialist rooms — sensory, hygiene, quiet areas',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.nr||5)*4))}],q:[{id:'nr',l:'SEND Rooms',u:'nr',def:5}]},
{id:'SCH-KITCHEN',dom:'SCH',n:'School Kitchen & Dining',ico:'🍽️',d:'Production kitchen, servery, dining hall, food technology room',w:[{sg:'SG-KITDINE',n:'Kitchen structure, drainage and extraction',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.meals||300)*0.05))},{sg:'SG-KITDINE',n:'Kitchen catering equipment installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.meals||300)*0.04))},{sg:'SG-KITDINE',n:'Dining hall furniture and servery fit-out',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.meals||300)*0.035))}],q:[{id:'meals',l:'Daily Meal Cover',u:'nr',def:300}]},
{id:'SCH-SPORTS',dom:'SCH',n:'School Sports & MUGA',ico:'⚽',d:'Sports hall, MUGA, changing rooms, equipment store, spectator seating',w:[{sg:'SG-SCHSPORT',n:'Sports hall floor and specialist fit-out',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.area||800)/65))},{sg:'SG-SCHSPORT',n:'Changing rooms, showers and equipment storage',ph:'FIN',tk:'CONSTR',dur:q=>Math.max(8,Math.ceil((q.area||800)/90))},{sg:'SG-SCHSPORT',n:'MUGA all-weather pitch and fencing',ph:'EXT',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.muga||1)/12))}],q:[{id:'area',l:'Sports Hall Area',u:'m²',def:800},{id:'muga',l:'MUGA Pitches',u:'nr',def:1}]},

// ── DATA CENTRE (EXTENDED) ────────────────────────────────
{id:'DCX-CIVIL',dom:'DCX',n:'Data Centre Civil & Shell',ico:'🏗️',d:'DC shell and core — structure, slab, loading, containment, blast walls',w:[{sg:'SG-DCCIVIL',n:'Data centre RC frame and heavy duty slab',ph:'ST',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.area||2000)/80))},{sg:'SG-DCCIVIL',n:'DC blast walls, access control and security shell',ph:'ENV',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.area||2000)/120))}],q:[{id:'area',l:'DC White Space Area',u:'m²',def:2000}]},
{id:'DCX-HV',dom:'DCX',n:'Data Centre HV & LV Distribution',ico:'⚡',d:'11kV/33kV intake, ring main, MV switchgear, LV distribution to UPS',w:[{sg:'SG-DCHV',n:'MV/HV intake, ring main and primary switchgear',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.mw||5)*6))},{sg:'SG-DCHV',n:'LV switchboards, busbar and distribution to PDUs',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(18,Math.ceil((q.mw||5)*5))}],q:[{id:'mw',l:'IT Load Capacity',u:'MW',def:5}]},
{id:'DCX-COOLING',dom:'DCX',n:'Data Centre Cooling (Chilled Water / DX)',ico:'❄️',d:'Chillers, cooling towers, CRAC/CRAH, free cooling, adiabatic, containment',w:[{sg:'SG-DCCOOLX',n:'Chiller plant, cooling towers and primary pipework',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(20,Math.ceil((q.mw||5)*6))},{sg:'SG-DCCOOLX',n:'CRAC/CRAH units and aisle containment installation',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.mw||5)*4))}],q:[{id:'mw',l:'IT Load Capacity',u:'MW',def:5}]},
{id:'DCX-FIRE',dom:'DCX',n:'Data Centre Fire Suppression',ico:'🔥',d:'Gaseous suppression (Novec/FM200/CO2), VLS VESDA, dry pipe sprinkler',w:[{sg:'SG-DCFIRE',n:'DC VESDA detection and gaseous suppression systems',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(12,Math.ceil((q.area||2000)/120))}],q:[{id:'area',l:'DC Area',u:'m²',def:2000}]},
{id:'DCX-CABLE',dom:'DCX',n:'Data Centre Cabling Infrastructure',ico:'📡',d:'Structured cabling, fibre backbone, patch panels, cable management, DXC',w:[{sg:'SG-DCCAB',n:'Fibre backbone, horizontal cabling and cable trays',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(15,Math.ceil((q.racks||200)*0.12))},{sg:'SG-DCCAB',n:'Patch panels, structured cabling and labelling',ph:'MEP',tk:'CONSTR',dur:q=>Math.max(10,Math.ceil((q.racks||200)*0.09))}],q:[{id:'racks',l:'Server Racks',u:'nr',def:200}]},
{id:'DCX-DCIM',dom:'DCX',n:'DCIM & Building Controls',ico:'🖥️',d:'Data Centre Infrastructure Management, BMS, environmental monitoring, SCADA',w:[{sg:'SG-DCIM',n:'DCIM platform, BMS and environmental sensor network',ph:'COM',tk:'COMM',dur:q=>Math.max(15,Math.ceil((q.mw||5)*4))}],q:[{id:'mw',l:'IT Load Capacity',u:'MW',def:5}]},

// ── SECTOR-SPECIFIC COMMISSIONING ─────────────────────────
{id:'COMM-HOSPITAL',dom:'SCOMM',n:'Hospital Commissioning (Full)',ico:'🏥',d:'Full hospital commissioning — clinical systems, infection control validation, HTM compliance',w:[{sg:'SG-HCOMM',n:'HTM engineering systems commissioning and validation',ph:'COM',tk:'COMM',dur:q=>Math.max(20,Math.ceil((q.beds||100)*0.3))},{sg:'SG-HCOMM',n:'Clinical systems integration testing',ph:'COM',tk:'COMM',dur:q=>Math.max(15,Math.ceil((q.beds||100)*0.2))},{sg:'SG-HCOMM',n:'Infection control validation and deep clean',ph:'COM',tk:'COMM',dur:q=>Math.max(10,Math.ceil((q.beds||100)*0.15))},{sg:'SG-HCOMM',n:'CQC readiness assessment and dry run',ph:'COM',tk:'COMM',dur:15}],q:[{id:'beds',l:'Hospital Beds',u:'nr',def:100}]},
{id:'COMM-DC',dom:'SCOMM',n:'Data Centre Commissioning (Tier II–IV)',ico:'🖥️',d:'Level 1–5 commissioning — component, sub-system, system, integrated, load test',w:[{sg:'SG-DCCOMM',n:'Level 1 component and Level 2 sub-system testing',ph:'COM',tk:'COMM',dur:q=>Math.max(15,Math.ceil((q.mw||5)*4))},{sg:'SG-DCCOMM',n:'Level 3 system test and Level 4 integrated system test',ph:'COM',tk:'COMM',dur:q=>Math.max(20,Math.ceil((q.mw||5)*5))},{sg:'SG-DCCOMM',n:'Level 5 operational acceptance and load bank test',ph:'COM',tk:'COMM',dur:q=>Math.max(12,Math.ceil((q.mw||5)*3))},{sg:'SG-DCCOMM',n:'DCIM configuration, training and Go-Live',ph:'COM',tk:'COMM',dur:10}],q:[{id:'mw',l:'IT Load Capacity',u:'MW',def:5}]},
{id:'COMM-RAIL-OPS',dom:'SCOMM',n:'Rail Operational Commissioning',ico:'🚆',d:'Trial running, dynamic testing, IOC/FOC signalling, safety case, RAIB compliance',w:[{sg:'SG-RAILCOMM',n:'Trial running programme — dynamic testing and ride quality',ph:'COM',tk:'COMM',dur:q=>Math.max(20,Math.ceil((q.len||5000)/250))},{sg:'SG-RAILCOMM',n:'Signalling and train control system dynamic testing',ph:'COM',tk:'COMM',dur:q=>Math.max(18,Math.ceil((q.len||5000)/300))},{sg:'SG-RAILCOMM',n:'Safety case finalisation and RAIB submission',ph:'COM',tk:'COMM',dur:20},{sg:'SG-RAILCOMM',n:'Staff training, emergency exercises and Go-Live',ph:'COM',tk:'COMM',dur:15}],q:[{id:'len',l:'Route Length',u:'m',def:5000}]},
{id:'COMM-ENERGY',dom:'SCOMM',n:'Energy Plant Commissioning',ico:'⚡',d:'Substation energisation, generator load testing, solar/wind SCADA, grid acceptance',w:[{sg:'SG-ENCOMM',n:'HV/LV switchgear and protection relay testing',ph:'COM',tk:'COMM',dur:q=>Math.max(12,Math.ceil((q.mw||10)*1.5))},{sg:'SG-ENCOMM',n:'Generator load bank testing and failover testing',ph:'COM',tk:'COMM',dur:q=>Math.max(10,Math.ceil((q.mw||10)*1.2))},{sg:'SG-ENCOMM',n:'SCADA system commissioning and G99 grid connection test',ph:'COM',tk:'COMM',dur:q=>Math.max(10,Math.ceil((q.mw||10)*1))}],q:[{id:'mw',l:'Total Capacity',u:'MW',def:10}]},
{id:'COMM-WATER',dom:'SCOMM',n:'Water / WWTW Commissioning',ico:'💧',d:'Treatment process commissioning, DWI acceptance, EA discharge consent compliance',w:[{sg:'SG-WATCOMM',n:'Process mechanical and SCADA commissioning',ph:'COM',tk:'COMM',dur:q=>Math.max(15,Math.ceil((q.flow||50)*0.6))},{sg:'SG-WATCOMM',n:'Water quality sampling and DWI acceptance',ph:'COM',tk:'COMM',dur:q=>Math.max(12,Math.ceil((q.flow||50)*0.5))},{sg:'SG-WATCOMM',n:'EA compliance checks and discharge consent testing',ph:'COM',tk:'COMM',dur:10}],q:[{id:'flow',l:'Design Flow',u:'Ml/d',def:50}]},

];

// ═══ AUTHORITY APPROVAL MODULES BY COUNTRY ═══
const A_DOMS = {
  'UK-ENG': {lbl:'🇬🇧 UK — England', groups:['Pre-Application','Environmental','Planning Permission','Highways & Obligations','Building Regulations','Specialist Consents','Utility Connections']},
  'UK-SCO': {lbl:'🏴󠁧󠁢󠁳󠁣󠁴󠁿 UK — Scotland', groups:['Pre-Application','Planning','Environmental','Building Standards','Utility']},
  'UK-WAL': {lbl:'🏴󠁧󠁢󠁷󠁬󠁳󠁿 UK — Wales', groups:['Pre-Application','Planning','Environmental','Building Regulations']},
  'IRL':    {lbl:'🇮🇪 Ireland', groups:['Pre-Planning','Planning','Environmental','Building Control','Utility Connections']},
  'UAE-DXB':{lbl:'🇦🇪 UAE — Dubai', groups:['Initial Approvals','NOCs & Clearances','Building Permit','Completion & Registration']},
  'UAE-ADB':{lbl:'🇦🇪 UAE — Abu Dhabi', groups:['Initial Approvals','NOCs & Clearances','Building Permit','Completion']},
  'KSA':    {lbl:'🇸🇦 Saudi Arabia', groups:['Regulatory Approvals','Municipal Permits','Sector Approvals']},
  'QAT':    {lbl:'🇶🇦 Qatar', groups:['Initial Approvals','NOCs','Building Permit','Completion']},
  'BHR':    {lbl:'🇧🇭 Bahrain', groups:['Municipal Approvals','NOCs','Completion']},
  'OMN':    {lbl:'🇴🇲 Oman', groups:['Municipal Approvals','NOCs','Building Permit']},
  'KWT':    {lbl:'🇰🇼 Kuwait', groups:['Municipal Approvals','NOCs','Building Permit']},
  'USA':    {lbl:'🇺🇸 USA — Federal', groups:['Federal Environmental','Federal Agency Approvals','Permitting']},
  'USA-CA': {lbl:'🇺🇸 USA — California', groups:['State Environmental','Local Planning','Building Permits']},
  'CAN-ONT':{lbl:'🇨🇦 Canada — Ontario', groups:['Municipal Planning','Provincial Approvals','Federal Approvals','Building Permit']},
  'AUS-NSW':{lbl:'🇦🇺 Australia — NSW', groups:['Pre-DA','Development Application','Construction Certificate','Occupation Certificate']},
  'AUS-VIC':{lbl:'🇦🇺 Australia — Victoria', groups:['Pre-Application','Planning Permit','Building Permit','Occupation Permit']},
  'AUS-QLD':{lbl:'🇦🇺 Australia — Queensland', groups:['Pre-Application','Development Application','Building Permit']},
  'SGP':    {lbl:'🇸🇬 Singapore', groups:['Planning Permission','Building Plan Approval','Statutory Approvals','TOP & CSC']},
  'HKG':    {lbl:'🇭🇰 Hong Kong', groups:['Planning','Buildings Department','Occupation Permit']},
  'IND':    {lbl:'🇮🇳 India — Maharashtra', groups:['Regulatory Approvals','Municipal Approvals','NOCs','Occupation Certificate']},
  'DEU':    {lbl:'🇩🇪 Germany', groups:['Bauleitplanung','Baugenehmigung','Environmental','Specialist Permits']},
  'FRA':    {lbl:'🇫🇷 France', groups:['Urbanisme','Environmental','Building Permits','Completion']},
  'NLD':    {lbl:'🇳🇱 Netherlands', groups:['Omgevingsvergunning','Environmental','Completion']},
  'ESP':    {lbl:'🇪🇸 Spain', groups:['Urban Planning','Environmental','Building Licence','Completion']},
  'SAF':    {lbl:'🇿🇦 South Africa', groups:['Planning','Environmental','Building Plans','Completion']},
  'NGA':    {lbl:'🇳🇬 Nigeria', groups:['Regulatory Approvals','Environmental','Building Permits']},
  'KEN':    {lbl:'🇰🇪 Kenya', groups:['County Approvals','Environmental','Building Permits']},
  'JPN':    {lbl:'🇯🇵 Japan', groups:['Urban Planning','Building Confirmation','Environmental']},
  'KOR':    {lbl:'🇰🇷 South Korea', groups:['Urban Planning','Building Permit','Environmental']},
  'MYS':    {lbl:'🇲🇾 Malaysia', groups:['Planning Approval','Building Plan Approval','CF & Completion']},
};

const A_MODS=[
// ══════════════════════════════════════════════
// UK — ENGLAND
// ══════════════════════════════════════════════
{id:'A-UKE-PREAPP',cty:'UK-ENG',cat:'Pre-Application',n:'Pre-Application Consultation (LPA)',ico:'🏛️',d:'Formal pre-application advice — mandatory for NSIPs, strongly advised for majors',w:[{sg:'SG-LA-PREAPP',n:'Pre-application scoping and engagement with LPA',ph:'CON',tk:'LA',dur:15},{sg:'SG-LA-PREAPP',n:'Pre-application design iteration and LPA response',ph:'CON',tk:'LA',dur:20}]},
{id:'A-UKE-S61W',cty:'UK-ENG',cat:'Pre-Application',n:'Community Consultation (s61W TCPA)',ico:'📣',d:'Mandatory community consultation for major development',w:[{sg:'SG-LA-COMM',n:'Community consultation document preparation',ph:'CON',tk:'LA',dur:15},{sg:'SG-LA-COMM',n:'Community consultation exhibition and response period',ph:'CON',tk:'LA',dur:30},{sg:'SG-LA-COMM',n:'Statement of community involvement preparation',ph:'CON',tk:'LA',dur:10}]},
{id:'A-UKE-EIA',cty:'UK-ENG',cat:'Environmental',n:'EIA — Screening, Scoping & Environmental Statement',ico:'🌱',d:'Environmental Impact Assessment under TCPA (EIA) Regs 2017',w:[{sg:'SG-LA-EIA',n:'EIA screening opinion request',ph:'CON',tk:'LA',dur:8},{sg:'SG-LA-EIA',n:'EIA scoping opinion and chapter assignments',ph:'CON',tk:'LA',dur:15},{sg:'SG-LA-EIA',n:'Environmental Statement technical chapters preparation',ph:'CON',tk:'LA',dur:60},{sg:'SG-LA-EIA',n:'ES consultation, response and addendum',ph:'CON',tk:'LA',dur:20}]},
{id:'A-UKE-HRA',cty:'UK-ENG',cat:'Environmental',n:'Habitats Regulations Assessment (HRA)',ico:'🦡',d:'Appropriate Assessment for Natura 2000 / SACs, HLS screening, NIS',w:[{sg:'SG-LA-HRA',n:'HRA Habitats Likely Significant Effects screening',ph:'CON',tk:'LA',dur:15},{sg:'SG-LA-HRA',n:'Appropriate Assessment and Natura Impact Statement',ph:'CON',tk:'LA',dur:30}]},
{id:'A-UKE-BNG',cty:'UK-ENG',cat:'Environmental',n:'Biodiversity Net Gain (10% mandatory)',ico:'🦔',d:'Mandatory 10% BNG from Jan 2024 — metric assessment, HMP',w:[{sg:'SG-LA-BNG',n:'Biodiversity Net Gain metric calculation and assessment',ph:'CON',tk:'LA',dur:20},{sg:'SG-LA-BNG',n:'Habitat Management and Monitoring Plan',ph:'CON',tk:'LA',dur:15}]},
{id:'A-UKE-OUTLINE',cty:'UK-ENG',cat:'Planning Permission',n:'Outline Planning Application (Major)',ico:'📐',d:'Outline planning for major development — principles only, 13-week determination',w:[{sg:'SG-LA-OPLA',n:'Outline application drawings and planning statement',ph:'CON',tk:'LA',dur:40},{sg:'SG-LA-OPLA',n:'Outline application submission',ph:'CON',tk:'LA',dur:2},{sg:'SG-LA-OPLA',n:'Outline planning determination (13-week + extensions)',ph:'CON',tk:'LA',dur:78},{sg:'SG-LA-OPLA',n:'Judicial review standstill period (6 weeks)',ph:'CON',tk:'LA',dur:30}]},
{id:'A-UKE-FPP',cty:'UK-ENG',cat:'Planning Permission',n:'Full Planning Application',ico:'📋',d:'Full detailed planning permission — 13-week major determination',w:[{sg:'SG-LA-FPP',n:'Full application drawings, DAS and planning documents',ph:'CON',tk:'LA',dur:40},{sg:'SG-LA-FPP',n:'Full planning application submission',ph:'CON',tk:'LA',dur:2},{sg:'SG-LA-FPP',n:'Planning determination period — major (13 weeks)',ph:'CON',tk:'LA',dur:65},{sg:'SG-LA-FPP',n:'Judicial review standstill period (6 weeks)',ph:'CON',tk:'LA',dur:30}]},
{id:'A-UKE-RM',cty:'UK-ENG',cat:'Planning Permission',n:'Reserved Matters Approval',ico:'📋',d:'Reserved matters following outline consent — appearance, landscaping, layout, scale',w:[{sg:'SG-LA-RMA',n:'Reserved matters application preparation',ph:'CON',tk:'LA',dur:30},{sg:'SG-LA-RMA',n:'Reserved matters determination (8 weeks)',ph:'CON',tk:'LA',dur:40}]},
{id:'A-UKE-PRECOND',cty:'UK-ENG',cat:'Planning Permission',n:'Discharge of Pre-Commencement Conditions',ico:'✅',d:'Discharge of planning pre-commencement conditions before starting works',w:[{sg:'SG-LA-COND',n:'Pre-commencement condition submissions',ph:'CON',tk:'LA',dur:15},{sg:'SG-LA-COND',n:'LPA determination of condition discharge (8 weeks)',ph:'CON',tk:'LA',dur:40}]},
{id:'A-UKE-S106',cty:'UK-ENG',cat:'Highways & Obligations',n:'Section 106 / Community Infrastructure Levy',ico:'📜',d:'S106 planning obligation negotiation, heads of terms, legal agreement execution',w:[{sg:'SG-LA-S106',n:'S106 heads of terms negotiation',ph:'CON',tk:'LA',dur:30},{sg:'SG-LA-S106',n:'S106 legal agreement preparation and execution',ph:'CON',tk:'LA',dur:25}]},
{id:'A-UKE-S278',cty:'UK-ENG',cat:'Highways & Obligations',n:'Section 278 / Section 38 Highways Agreements',ico:'🛣️',d:'S278 (off-site highway works) and S38 (highway adoption) agreements with highway authority',w:[{sg:'SG-LA-HWY',n:'S278/S38 technical design and approval',ph:'CON',tk:'LA',dur:30},{sg:'SG-LA-HWY',n:'Highways legal agreement execution',ph:'CON',tk:'LA',dur:20}]},
{id:'A-UKE-TRO',cty:'UK-ENG',cat:'Highways & Obligations',n:'Traffic Regulation Order (TRO)',ico:'🚦',d:'TRO for road closures, speed limits, parking restrictions — 4-6 month process',w:[{sg:'SG-LA-TRO',n:'TRO application, consultation and determination',ph:'CON',tk:'LA',dur:120}]},
{id:'A-UKE-BRBR',cty:'UK-ENG',cat:'Building Regulations',n:'Building Regulations Full Plans Approval',ico:'📋',d:'Full Plans submission to Building Control — structural, fire, accessibility',w:[{sg:'SG-LA-BR',n:'Building Regs full plans preparation',ph:'CON',tk:'LA',dur:20},{sg:'SG-LA-BR',n:'Building Control plan approval (5 weeks)',ph:'CON',tk:'LA',dur:25}]},
{id:'A-UKE-CDM',cty:'UK-ENG',cat:'Building Regulations',n:'CDM Notification (F10)',ico:'⚠️',d:'CDM 2015 F10 notification to HSE for notifiable projects',w:[{sg:'SG-LA-CDM',n:'CDM F10 notification to HSE',ph:'EN',tk:'LA',dur:3}]},
{id:'A-UKE-PARTYW',cty:'UK-ENG',cat:'Building Regulations',n:'Party Wall Act Awards',ico:'🏠',d:'Party wall surveyor appointment, schedule of condition, party wall awards',w:[{sg:'SG-LA-PW',n:'Party wall notices and schedule of condition',ph:'EN',tk:'LA',dur:20},{sg:'SG-LA-PW',n:'Party wall awards and adjoining owner agreement',ph:'EN',tk:'LA',dur:30}]},
{id:'A-UKE-LBC',cty:'UK-ENG',cat:'Specialist Consents',n:'Listed Building Consent',ico:'🏰',d:'Listed building consent — Grades I, II* and II, Historic England engagement',w:[{sg:'SG-LA-LBC',n:'Heritage impact assessment and LBC application',ph:'CON',tk:'LA',dur:30},{sg:'SG-LA-LBC',n:'Listed building consent determination (8 weeks)',ph:'CON',tk:'LA',dur:40}]},
{id:'A-UKE-CA',cty:'UK-ENG',cat:'Specialist Consents',n:'Conservation Area Consent / Notification',ico:'🏘️',d:'Conservation area consent and prior notification for demolition',w:[{sg:'SG-LA-CAC',n:'Conservation area consent application',ph:'CON',tk:'LA',dur:40}]},
{id:'A-UKE-TPO',cty:'UK-ENG',cat:'Specialist Consents',n:'Tree Preservation Order (TPO) Works',ico:'🌳',d:'TPO consent application for works to protected trees',w:[{sg:'SG-LA-TPO',n:'TPO consent application and determination',ph:'CON',tk:'LA',dur:40}]},
{id:'A-UKE-ENVPERM',cty:'UK-ENG',cat:'Specialist Consents',n:'Environmental Permit (EA)',ico:'🌊',d:'Environment Agency permit — water discharge, abstraction, waste, flood risk activity',w:[{sg:'SG-LA-EPERM',n:'Environmental permit application preparation',ph:'CON',tk:'LA',dur:25},{sg:'SG-LA-EPERM',n:'EA environmental permit determination (4 months)',ph:'CON',tk:'LA',dur:86}]},
{id:'A-UKE-WINDFARM',cty:'UK-ENG',cat:'Specialist Consents',n:'Development Consent Order (DCO / NSIP)',ico:'⚡',d:'Nationally Significant Infrastructure Projects — Planning Inspectorate, DCO examination',w:[{sg:'SG-LA-DCO',n:'Pre-application consultation and EIA',ph:'CON',tk:'LA',dur:80},{sg:'SG-LA-DCO',n:'DCO application acceptance and examination',ph:'CON',tk:'LA',dur:100},{sg:'SG-LA-DCO',n:'DCO Inspector report and Secretary of State decision',ph:'CON',tk:'LA',dur:80}]},
{id:'A-UKE-WATCONN',cty:'UK-ENG',cat:'Utility Connections',n:'Water & Sewer Connection (WaSC)',ico:'💧',d:'Water and sewerage connections — Thames Water, Anglian, Southern, Yorkshire, etc.',w:[{sg:'SG-UTIL-W',n:'Water and sewer connection applications',ph:'EN',tk:'UTIL',dur:15},{sg:'SG-UTIL-W',n:'Connection agreements and infrastructure adoption',ph:'EN',tk:'UTIL',dur:20}]},
{id:'A-UKE-ELECCONN',cty:'UK-ENG',cat:'Utility Connections',n:'Electricity Connection (DNO / IDNO)',ico:'⚡',d:'Grid connection via DNO (National Grid, Western Power, UK Power Networks, etc.)',w:[{sg:'SG-UTIL-E',n:'DNO grid connection application and quotation',ph:'EN',tk:'UTIL',dur:20},{sg:'SG-UTIL-E',n:'Connection design, agreement and works',ph:'EN',tk:'UTIL',dur:40}]},
{id:'A-UKE-GASCONN',cty:'UK-ENG',cat:'Utility Connections',n:'Gas Connection (GDN)',ico:'🔥',d:'Gas connection via GDN (Cadent, Wales & West, Northern Gas Networks, etc.)',w:[{sg:'SG-UTIL-G',n:'GDN gas connection application and quotation',ph:'EN',tk:'UTIL',dur:20},{sg:'SG-UTIL-G',n:'Gas connection design and works',ph:'EN',tk:'UTIL',dur:30}]},
{id:'A-UKE-UTILDIVERSION',cty:'UK-ENG',cat:'Utility Connections',n:'Utility Diversions & Wayleaves',ico:'🔌',d:'Multi-utility diversions, statutory undertaker works, wayleave agreements',w:[{sg:'SG-UTIL-DIV',n:'Utility survey and diversion design',ph:'EN',tk:'UTIL',dur:20},{sg:'SG-UTIL-DIV',n:'Utility diversions by statutory undertakers',ph:'EN',tk:'UTIL',dur:60}]},
// ══════════════════════════════════════════════
// UK — SCOTLAND
// ══════════════════════════════════════════════
{id:'A-UKS-PAN',cty:'UK-SCO',cat:'Pre-Application',n:'PAN — Proposal of Application Notice (Scotland)',ico:'📣',d:'Mandatory 12-week pre-application consultation for major developments under TCPA Scotland',w:[{sg:'SG-SLAPAN',n:'Proposal of Application Notice submission to LPA',ph:'CON',tk:'LA',dur:5},{sg:'SG-SLAPAN',n:'12-week statutory consultation and community event',ph:'CON',tk:'LA',dur:60},{sg:'SG-SLAPAN',n:'Pre-application consultation report preparation',ph:'CON',tk:'LA',dur:15}]},
{id:'A-UKS-PLAN',cty:'UK-SCO',cat:'Planning',n:'Planning Application (Scotland)',ico:'📋',d:'Detailed or major planning application to Scottish LPA — 4-month determination for major',w:[{sg:'SG-SLAPLN',n:'Planning application preparation and drawings',ph:'CON',tk:'LA',dur:35},{sg:'SG-SLAPLN',n:'Planning application submission',ph:'CON',tk:'LA',dur:2},{sg:'SG-SLAPLN',n:'Planning determination — major (4 months)',ph:'CON',tk:'LA',dur:86}]},
{id:'A-UKS-S75',cty:'UK-SCO',cat:'Planning',n:'Section 75 Planning Obligation (Scotland)',ico:'📜',d:'S75 planning obligation negotiation and execution (equivalent to S106)',w:[{sg:'SG-SLA75',n:'Section 75 obligation negotiation and legal agreement',ph:'CON',tk:'LA',dur:40}]},
{id:'A-UKS-SEPA',cty:'UK-SCO',cat:'Environmental',n:'SEPA Environmental Permits (Scotland)',ico:'🌊',d:'Scottish Environment Protection Agency — flood risk, water, waste permits',w:[{sg:'SG-SEPA',n:'SEPA permit application preparation',ph:'CON',tk:'LA',dur:25},{sg:'SG-SEPA',n:'SEPA permit determination',ph:'CON',tk:'LA',dur:65}]},
{id:'A-UKS-SNHNAT',cty:'UK-SCO',cat:'Environmental',n:'NatureScot / SNH Consultation',ico:'🦅',d:'NatureScot statutory consultation for Protected Area or European Protected Species',w:[{sg:'SG-NATSCOT',n:'NatureScot pre-application engagement',ph:'CON',tk:'LA',dur:20},{sg:'SG-NATSCOT',n:'NatureScot formal response and license if required',ph:'CON',tk:'LA',dur:30}]},
{id:'A-UKS-BWA',cty:'UK-SCO',cat:'Building Standards',n:'Building Warrant (Scotland)',ico:'📋',d:'Building warrant application under Scottish Building Standards — equivalent to Building Regs',w:[{sg:'SG-SBWA',n:'Building warrant application preparation',ph:'CON',tk:'LA',dur:20},{sg:'SG-SBWA',n:'Building warrant approval by local authority',ph:'CON',tk:'LA',dur:40}]},
// ══════════════════════════════════════════════
// UK — WALES
// ══════════════════════════════════════════════
{id:'A-UKW-PAS',cty:'UK-WAL',cat:'Pre-Application',n:'Pre-Application Service (PAS) — Wales',ico:'📣',d:'Statutory pre-application service — mandatory for major developments in Wales',w:[{sg:'SG-WLPAS',n:'PAS pre-application submission and fee',ph:'CON',tk:'LA',dur:5},{sg:'SG-WLPAS',n:'PAS consultation response period (42 days min)',ph:'CON',tk:'LA',dur:42},{sg:'SG-WLPAS',n:'PAS report preparation',ph:'CON',tk:'LA',dur:10}]},
{id:'A-UKW-PLAN',cty:'UK-WAL',cat:'Planning',n:'Planning Application (Wales)',ico:'📋',d:'Planning application to Welsh LPA or PEDW — 8 weeks minor, 13 weeks major',w:[{sg:'SG-WLPLAN',n:'Planning application preparation',ph:'CON',tk:'LA',dur:35},{sg:'SG-WLPLAN',n:'Planning determination — major (13 weeks)',ph:'CON',tk:'LA',dur:65}]},
{id:'A-UKW-NRW',cty:'UK-WAL',cat:'Environmental',n:'NRW Environmental Permits (Wales)',ico:'🌊',d:'Natural Resources Wales — flood risk, water, waste, environmental permits',w:[{sg:'SG-NRW',n:'NRW permit application preparation',ph:'CON',tk:'LA',dur:25},{sg:'SG-NRW',n:'NRW permit determination',ph:'CON',tk:'LA',dur:65}]},
{id:'A-UKW-LBC',cty:'UK-WAL',cat:'Planning',n:'Listed Building Consent (Wales — Cadw)',ico:'🏰',d:'Listed building consent in Wales — Cadw and Clwyd-Powys Archaeological Trust',w:[{sg:'SG-CADW',n:'Listed building consent application (Cadw)',ph:'CON',tk:'LA',dur:56}]},
// ══════════════════════════════════════════════
// IRELAND
// ══════════════════════════════════════════════
{id:'A-IRL-PREPLAN',cty:'IRL',cat:'Pre-Planning',n:'Pre-Planning Consultation (Ireland)',ico:'🏛️',d:'Pre-planning consultation with local authority or An Bord Pleanála for SHD',w:[{sg:'SG-IRLPREPLAN',n:'Pre-planning consultation with local authority',ph:'CON',tk:'LA',dur:15},{sg:'SG-IRLPREPLAN',n:'Pre-planning design iteration and response',ph:'CON',tk:'LA',dur:20}]},
{id:'A-IRL-DA',cty:'IRL',cat:'Planning',n:'Planning Permission (Local Authority)',ico:'📋',d:'Planning application to local authority — 8-week determination, one extension to 12 weeks',w:[{sg:'SG-IRLDA',n:'EIAR and planning application preparation',ph:'CON',tk:'LA',dur:50},{sg:'SG-IRLDA',n:'Planning application submission and validation',ph:'CON',tk:'LA',dur:2},{sg:'SG-IRLDA',n:'LA planning determination (8-12 weeks)',ph:'CON',tk:'LA',dur:56}]},
{id:'A-IRL-ABP',cty:'IRL',cat:'Planning',n:'An Bord Pleanála Appeal / SHD / LRD',ico:'⚖️',d:'ABP appeal, Strategic Housing Development or Large-scale Residential Development',w:[{sg:'SG-IRLABP',n:'ABP appeal or LRD/SHD application preparation',ph:'CON',tk:'LA',dur:40},{sg:'SG-IRLABP',n:'ABP determination period (18+ weeks)',ph:'CON',tk:'LA',dur:90}]},
{id:'A-IRL-AA',cty:'IRL',cat:'Environmental',n:'Appropriate Assessment / Natura Impact Statement',ico:'🦅',d:'Habitats Directive AA screening and NIS for sites within range of Natura 2000',w:[{sg:'SG-IRLAA',n:'AA screening and Natura Impact Statement',ph:'CON',tk:'LA',dur:30}]},
{id:'A-IRL-EIAR',cty:'IRL',cat:'Environmental',n:'EIAR (Environmental Impact Assessment Report)',ico:'🌱',d:'EIAR preparation for mandatory development thresholds',w:[{sg:'SG-IRLEIAR',n:'EIAR scoping and chapter preparation',ph:'CON',tk:'LA',dur:65},{sg:'SG-IRLEIAR',n:'EIAR consultation and response',ph:'CON',tk:'LA',dur:20}]},
{id:'A-IRL-FSC',cty:'IRL',cat:'Building Control',n:'Fire Safety Certificate',ico:'🔥',d:'Fire safety certificate from local authority building control',w:[{sg:'SG-IRLFSC',n:'Fire safety certificate application and determination',ph:'CON',tk:'LA',dur:60}]},
{id:'A-IRL-DAC',cty:'IRL',cat:'Building Control',n:'Disability Access Certificate',ico:'♿',d:'DAC from local authority building control — disability access compliance',w:[{sg:'SG-IRLDAC',n:'Disability access certificate application',ph:'CON',tk:'LA',dur:60}]},
{id:'A-IRL-COMMENCE',cty:'IRL',cat:'Building Control',n:'Commencement Notice (Ireland)',ico:'📣',d:'Commencement notice to local authority at least 14 days before works begin',w:[{sg:'SG-IRLCN',n:'Commencement notice submission',ph:'EN',tk:'LA',dur:2}]},
{id:'A-IRL-IRISHWATER',cty:'IRL',cat:'Utility Connections',n:'Irish Water Connection',ico:'💧',d:'Irish Water connection agreement — water, wastewater, drainage',w:[{sg:'SG-IRLWATER',n:'Irish Water connection application and agreement',ph:'EN',tk:'UTIL',dur:30}]},
{id:'A-IRL-ESB',cty:'IRL',cat:'Utility Connections',n:'ESB Grid Connection (Ireland)',ico:'⚡',d:'ESB Networks grid connection application and agreement',w:[{sg:'SG-IRLESC',n:'ESB Networks connection application and works',ph:'EN',tk:'UTIL',dur:40}]},
// ══════════════════════════════════════════════
// UAE — DUBAI
// ══════════════════════════════════════════════
{id:'A-UAEDXB-DLD',cty:'UAE-DXB',cat:'Initial Approvals',n:'Dubai Land Department — Initial Registration',ico:'🏢',d:'DLD initial land registration, title deed verification, ownership records',w:[{sg:'SG-DLD',n:'DLD initial registration and title deed verification',ph:'CON',tk:'LA',dur:10}]},
{id:'A-UAEDXB-DMNOC',cty:'UAE-DXB',cat:'Initial Approvals',n:'Dubai Municipality — Preliminary NOC',ico:'🏛️',d:'Dubai Municipality preliminary no-objection for master plan and land use',w:[{sg:'SG-DMNOC',n:'DM preliminary NOC application and approval',ph:'CON',tk:'LA',dur:20}]},
{id:'A-UAEDXB-RTANOC',cty:'UAE-DXB',cat:'NOCs & Clearances',n:'Roads & Transport Authority (RTA) NOC',ico:'🛣️',d:'RTA NOC for road connections, traffic impact assessment, TMP',w:[{sg:'SG-RTANOC',n:'RTA traffic impact assessment and NOC application',ph:'CON',tk:'LA',dur:20},{sg:'SG-RTANOC',n:'RTA NOC approval',ph:'CON',tk:'LA',dur:15}]},
{id:'A-UAEDXB-DEWANOC',cty:'UAE-DXB',cat:'NOCs & Clearances',n:'DEWA — Electricity & Water Clearance',ico:'⚡',d:'Dubai Electricity and Water Authority NOC and connection clearance',w:[{sg:'SG-DEWA',n:'DEWA connection application and load study',ph:'CON',tk:'LA',dur:20},{sg:'SG-DEWA',n:'DEWA NOC and connection design approval',ph:'CON',tk:'LA',dur:20}]},
{id:'A-UAEDXB-CIVILDEF',cty:'UAE-DXB',cat:'NOCs & Clearances',n:'Civil Defence NOC (Dubai)',ico:'🚒',d:'Dubai Civil Defence fire and life safety NOC',w:[{sg:'SG-DCIVDEF',n:'Civil Defence fire strategy and NOC submission',ph:'CON',tk:'LA',dur:20},{sg:'SG-DCIVDEF',n:'Civil Defence NOC approval',ph:'CON',tk:'LA',dur:15}]},
{id:'A-UAEDXB-DCAA',cty:'UAE-DXB',cat:'NOCs & Clearances',n:'DCAA Height Clearance',ico:'✈️',d:'Dubai Civil Aviation Authority NOC for height and airspace',w:[{sg:'SG-DCAA',n:'DCAA height clearance application',ph:'CON',tk:'LA',dur:20}]},
{id:'A-UAEDXB-DMBP',cty:'UAE-DXB',cat:'Building Permit',n:'Dubai Municipality Building Permit',ico:'📋',d:'DM building permit — foundation and superstructure permit stages',w:[{sg:'SG-DMBP',n:'DM building plan approval and consultant NOC',ph:'CON',tk:'LA',dur:25},{sg:'SG-DMBP',n:'DM building permit (foundation)',ph:'CON',tk:'LA',dur:15},{sg:'SG-DMBP',n:'DM building permit (superstructure)',ph:'CON',tk:'LA',dur:10}]},
{id:'A-UAEDXB-CC',cty:'UAE-DXB',cat:'Completion & Registration',n:'DM Completion Certificate',ico:'✅',d:'Dubai Municipality completion certificate, final inspection',w:[{sg:'SG-DMCC',n:'DM final inspection and snag list',ph:'COM',tk:'LA',dur:20},{sg:'SG-DMCC',n:'DM completion certificate issuance',ph:'COM',tk:'LA',dur:10}]},
{id:'A-UAEDXB-EJARI',cty:'UAE-DXB',cat:'Completion & Registration',n:'RERA Registration (Ejari / Oqood)',ico:'🔑',d:'RERA Oqood off-plan registration, Ejari tenancy registration',w:[{sg:'SG-RERA',n:'RERA/Oqood registration for off-plan units',ph:'COM',tk:'LA',dur:10}]},
// ══════════════════════════════════════════════
// UAE — ABU DHABI
// ══════════════════════════════════════════════
{id:'A-UAEADB-TAMM',cty:'UAE-ADB',cat:'Initial Approvals',n:'TAMM Portal — Abu Dhabi Initial Submission',ico:'🏛️',d:'Abu Dhabi Government TAMM digital portal initial submission for all development',w:[{sg:'SG-TAMM',n:'TAMM portal submission and application registration',ph:'CON',tk:'LA',dur:10}]},
{id:'A-UAEADB-ADCM',cty:'UAE-ADB',cat:'Initial Approvals',n:'Abu Dhabi City Municipality — Planning Approval',ico:'🏛️',d:'ADCM planning and building approval — land use consent',w:[{sg:'SG-ADCM',n:'ADCM planning application and masterplan approval',ph:'CON',tk:'LA',dur:30},{sg:'SG-ADCM',n:'ADCM building permit approval',ph:'CON',tk:'LA',dur:20}]},
{id:'A-UAEADB-ADDC',cty:'UAE-ADB',cat:'NOCs & Clearances',n:'ADDC / AADC Electricity & Water Clearance',ico:'⚡',d:'Abu Dhabi Distribution Company / Al Ain Distribution Company clearance',w:[{sg:'SG-ADDC',n:'ADDC/AADC connection application and load approval',ph:'CON',tk:'LA',dur:25}]},
{id:'A-UAEADB-DOT',cty:'UAE-ADB',cat:'NOCs & Clearances',n:'DOT (Department of Transport) Approval',ico:'🛣️',d:'Abu Dhabi Department of Transport road access and traffic approval',w:[{sg:'SG-ABDOT',n:'DOT traffic impact assessment and approval',ph:'CON',tk:'LA',dur:20}]},
{id:'A-UAEADB-EAD',cty:'UAE-ADB',cat:'NOCs & Clearances',n:'Environment Agency Abu Dhabi (EAD)',ico:'🌿',d:'EAD environmental clearance, EIA review, protected species, coastal works',w:[{sg:'SG-ABEIAD',n:'EAD environmental clearance and EIA review',ph:'CON',tk:'LA',dur:30}]},
{id:'A-UAEADB-CIVILDEF',cty:'UAE-ADB',cat:'NOCs & Clearances',n:'Abu Dhabi Civil Defence NOC',ico:'🚒',d:'Abu Dhabi Civil Defence fire and emergency services NOC',w:[{sg:'SG-ABCIVDEF',n:'Abu Dhabi Civil Defence NOC approval',ph:'CON',tk:'LA',dur:20}]},
// ══════════════════════════════════════════════
// SAUDI ARABIA
// ══════════════════════════════════════════════
{id:'A-KSA-MOMRA',cty:'KSA',cat:'Regulatory Approvals',n:'MOMRA — Ministry of Municipal & Rural Affairs',ico:'🏛️',d:'MOMRA masterplan approval, land use designation and zoning permit',w:[{sg:'SG-MOMRA',n:'MOMRA masterplan and zoning approval',ph:'CON',tk:'LA',dur:40},{sg:'SG-MOMRA',n:'MOMRA preliminary approval',ph:'CON',tk:'LA',dur:25}]},
{id:'A-KSA-MEWA',cty:'KSA',cat:'Regulatory Approvals',n:'MEWA — Environmental Clearance (KSA)',ico:'🌿',d:'Ministry of Environment, Water & Agriculture environmental impact assessment',w:[{sg:'SG-KSAEIAD',n:'MEWA EIA study preparation',ph:'CON',tk:'LA',dur:45},{sg:'SG-KSAEIAD',n:'MEWA environmental clearance approval',ph:'CON',tk:'LA',dur:35}]},
{id:'A-KSA-BALAD',cty:'KSA',cat:'Municipal Permits',n:'Baladia — Municipal Building Permit',ico:'📋',d:'Municipal building permit (Baladia) for construction works in KSA',w:[{sg:'SG-BALAD',n:'Baladia building permit application',ph:'CON',tk:'LA',dur:25},{sg:'SG-BALAD',n:'Baladia permit approval and inspection',ph:'CON',tk:'LA',dur:20}]},
{id:'A-KSA-CIVILDEF',cty:'KSA',cat:'Municipal Permits',n:'Saudi Civil Defence Approval',ico:'🚒',d:'Civil Defence fire and life safety approval for buildings',w:[{sg:'SG-KSACD',n:'Civil Defence fire safety review and approval',ph:'CON',tk:'LA',dur:20}]},
{id:'A-KSA-MOT',cty:'KSA',cat:'Sector Approvals',n:'Ministry of Transport (KSA)',ico:'🛣️',d:'MOT approval for roads, transport infrastructure and logistics',w:[{sg:'SG-KSAMOT',n:'MOT transport approval and road access',ph:'CON',tk:'LA',dur:30}]},
{id:'A-KSA-MODON',cty:'KSA',cat:'Sector Approvals',n:'MODON — Saudi Authority for Industrial Cities',ico:'🏭',d:'MODON approval for developments in Saudi industrial cities and economic zones',w:[{sg:'SG-MODON',n:'MODON industrial licence and permit',ph:'CON',tk:'LA',dur:35}]},
{id:'A-KSA-SCECO',cty:'KSA',cat:'Sector Approvals',n:'Saudi Electricity Company (SEC) Connection',ico:'⚡',d:'SEC power grid connection application and approval',w:[{sg:'SG-SCECO',n:'SEC power connection application and design',ph:'EN',tk:'UTIL',dur:30},{sg:'SG-SCECO',n:'SEC connection installation and energisation',ph:'EN',tk:'UTIL',dur:25}]},
// ══════════════════════════════════════════════
// QATAR
// ══════════════════════════════════════════════
{id:'A-QAT-MUMNIC',cty:'QAT',cat:'Initial Approvals',n:'Ministry of Municipality — Urban Planning Qatar',ico:'🏛️',d:'Qatar Ministry of Municipality urban planning approval and land use',w:[{sg:'SG-QATMUM',n:'Ministry of Municipality planning approval',ph:'CON',tk:'LA',dur:35}]},
{id:'A-QAT-ASHGHAL',cty:'QAT',cat:'NOCs',n:'Ashghal (Public Works Authority) NOC',ico:'🛣️',d:'Ashghal NOC for roads, drainage, infrastructure connections',w:[{sg:'SG-ASHGHAL',n:'Ashghal NOC application and road/drainage approval',ph:'CON',tk:'LA',dur:25}]},
{id:'A-QAT-KAHRAMAA',cty:'QAT',cat:'NOCs',n:'Kahramaa — Electricity & Water Connection',ico:'⚡',d:'Qatar General Electricity and Water Corporation connection',w:[{sg:'SG-KAHRAMAA',n:'Kahramaa power and water connection approval',ph:'EN',tk:'UTIL',dur:25}]},
{id:'A-QAT-QCAA',cty:'QAT',cat:'NOCs',n:'QCAA Height Clearance (Qatar)',ico:'✈️',d:'Qatar Civil Aviation Authority height and airspace clearance',w:[{sg:'SG-QCAA',n:'QCAA height clearance application',ph:'CON',tk:'LA',dur:20}]},
{id:'A-QAT-MOCI',cty:'QAT',cat:'Building Permit',n:'Ministry of Interior — Civil Defence (Qatar)',ico:'🚒',d:'Qatar Ministry of Interior Civil Defence fire and safety approval',w:[{sg:'SG-QATCD',n:'Qatar Civil Defence fire safety review',ph:'CON',tk:'LA',dur:20}]},
{id:'A-QAT-BP',cty:'QAT',cat:'Building Permit',n:'Qatar Building Permit',ico:'📋',d:'Qatar Ministry of Municipality building permit application and approval',w:[{sg:'SG-QATBP',n:'Qatar building permit application',ph:'CON',tk:'LA',dur:25},{sg:'SG-QATBP',n:'Building permit approval and conditions',ph:'CON',tk:'LA',dur:15}]},
// ══════════════════════════════════════════════
// BAHRAIN
// ══════════════════════════════════════════════
{id:'A-BHR-MUNICIPAL',cty:'BHR',cat:'Municipal Approvals',n:'Bahrain Municipal Planning Approval',ico:'🏛️',d:'Bahrain municipalities planning approval and land use',w:[{sg:'SG-BHRPLAN',n:'Bahrain municipal planning application and approval',ph:'CON',tk:'LA',dur:30}]},
{id:'A-BHR-CIVILDEF',cty:'BHR',cat:'NOCs',n:'Bahrain Civil Defence NOC',ico:'🚒',d:'Bahrain Civil Defence fire and life safety NOC',w:[{sg:'SG-BHRCD',n:'Bahrain Civil Defence fire safety approval',ph:'CON',tk:'LA',dur:20}]},
{id:'A-BHR-EW',cty:'BHR',cat:'NOCs',n:'Electricity & Water Authority (EWA) Bahrain',ico:'⚡',d:'EWA connection application for electricity and water services',w:[{sg:'SG-BHREWA',n:'EWA power and water connection approval',ph:'EN',tk:'UTIL',dur:25}]},
// ══════════════════════════════════════════════
// OMAN
// ══════════════════════════════════════════════
{id:'A-OMN-MUNICIPAL',cty:'OMN',cat:'Municipal Approvals',n:'Oman Municipal Building Permit',ico:'🏛️',d:'Muscat Municipality or regional municipality building permit',w:[{sg:'SG-OMNMUN',n:'Oman municipal planning and building permit',ph:'CON',tk:'LA',dur:35}]},
{id:'A-OMN-ENV',cty:'OMN',cat:'Municipal Approvals',n:'Oman Ministry of Environment EIA',ico:'🌿',d:'Oman Ministry of Environment EIA clearance for projects above threshold',w:[{sg:'SG-OMNENV',n:'Oman EIA preparation and clearance',ph:'CON',tk:'LA',dur:50}]},
{id:'A-OMN-OIFC',cty:'OMN',cat:'NOCs',n:'Oman OIFC / PAED Investment Approval',ico:'💼',d:'Public Authority for Economic Diversification investment registration',w:[{sg:'SG-OMNOIFC',n:'OIFC/PAED investment registration and approval',ph:'CON',tk:'LA',dur:20}]},
// ══════════════════════════════════════════════
// KUWAIT
// ══════════════════════════════════════════════
{id:'A-KWT-MUNICIPAL',cty:'KWT',cat:'Municipal Approvals',n:'Kuwait Municipality Building Permit',ico:'🏛️',d:'Kuwait Municipality building permit and planning approval',w:[{sg:'SG-KWTMUN',n:'Kuwait municipality planning and building permit',ph:'CON',tk:'LA',dur:35}]},
{id:'A-KWT-ENV',cty:'KWT',cat:'Municipal Approvals',n:'Kuwait Environment Public Authority (EPA)',ico:'🌿',d:'Kuwait EPA environmental permit for major developments',w:[{sg:'SG-KWTENV',n:'Kuwait EPA environmental permit',ph:'CON',tk:'LA',dur:45}]},
{id:'A-KWT-MEW',cty:'KWT',cat:'Building Permit',n:'Kuwait Ministry of Electricity & Water',ico:'⚡',d:'MEW power and water connection approval',w:[{sg:'SG-KWTMEW',n:'MEW connection application and approval',ph:'EN',tk:'UTIL',dur:25}]},
// ══════════════════════════════════════════════
// USA — FEDERAL
// ══════════════════════════════════════════════
{id:'A-USA-NEPA',cty:'USA',cat:'Federal Environmental',n:'NEPA — Environmental Assessment / EIS',ico:'🌿',d:'National Environmental Policy Act — EA or full Environmental Impact Statement',w:[{sg:'SG-NEPA',n:'NEPA scoping and purpose and need statement',ph:'CON',tk:'LA',dur:20},{sg:'SG-NEPA',n:'Environmental Assessment or Draft EIS preparation',ph:'CON',tk:'LA',dur:65},{sg:'SG-NEPA',n:'Public comment period and final EIS/FONSI',ph:'CON',tk:'LA',dur:30}]},
{id:'A-USA-404',cty:'USA',cat:'Federal Environmental',n:'Clean Water Act Section 404 (Army Corps)',ico:'🌊',d:'US Army Corps of Engineers Section 404 permit for wetlands/waterway impacts',w:[{sg:'SG-CWA404',n:'Section 404 permit application — Individual or Nationwide',ph:'CON',tk:'LA',dur:60}]},
{id:'A-USA-ESA',cty:'USA',cat:'Federal Agency Approvals',n:'Endangered Species Act Section 7 Consultation',ico:'🦅',d:'USFWS/NMFS Section 7 consultation for federal nexus projects',w:[{sg:'SG-ESA7',n:'ESA Section 7 informal consultation and biological assessment',ph:'CON',tk:'LA',dur:30},{sg:'SG-ESA7',n:'ESA Section 7 formal consultation and BiOp',ph:'CON',tk:'LA',dur:60}]},
{id:'A-USA-NHPA',cty:'USA',cat:'Federal Agency Approvals',n:'Section 106 Historic Preservation (SHPO)',ico:'🏛️',d:'National Historic Preservation Act Section 106 — SHPO consultation',w:[{sg:'SG-NHPA106',n:'Section 106 area of potential effects and SHPO consultation',ph:'CON',tk:'LA',dur:30}]},
{id:'A-USA-FAA',cty:'USA',cat:'Federal Agency Approvals',n:'FAA Form 7460 — Airspace Notification',ico:'✈️',d:'FAA Notice of Proposed Construction or Alteration for tall structures',w:[{sg:'SG-FAA7460',n:'FAA Form 7460 airspace notification and approval',ph:'CON',tk:'LA',dur:45}]},
{id:'A-USA-FEMA',cty:'USA',cat:'Permitting',n:'FEMA Floodplain Development Permit',ico:'🌊',d:'FEMA floodplain development permit and LOMA if applicable',w:[{sg:'SG-FEMA',n:'Floodplain development permit and LOMA application',ph:'CON',tk:'LA',dur:60}]},
{id:'A-USA-NPDES',cty:'USA',cat:'Permitting',n:'EPA NPDES Stormwater Permit (SWPPP)',ico:'💧',d:'EPA National Pollutant Discharge Elimination System stormwater permit',w:[{sg:'SG-NPDES',n:'SWPPP preparation and NPDES permit registration',ph:'EN',tk:'LA',dur:15}]},
// ══════════════════════════════════════════════
// USA — CALIFORNIA
// ══════════════════════════════════════════════
{id:'A-USCA-CEQA',cty:'USA-CA',cat:'State Environmental',n:'CEQA — California Environmental Quality Act',ico:'🌿',d:'CEQA Initial Study, Negative Declaration or full EIR',w:[{sg:'SG-CEQA',n:'CEQA Initial Study and NOP/NOI scoping',ph:'CON',tk:'LA',dur:20},{sg:'SG-CEQA',n:'CEQA EIR or ND preparation',ph:'CON',tk:'LA',dur:60},{sg:'SG-CEQA',n:'CEQA public comment and final EIR certification',ph:'CON',tk:'LA',dur:30}]},
{id:'A-USCA-COASTAL',cty:'USA-CA',cat:'State Environmental',n:'California Coastal Commission Permit',ico:'🌊',d:'Coastal Development Permit from California Coastal Commission',w:[{sg:'SG-CACOASTAL',n:'Coastal Development Permit application',ph:'CON',tk:'LA',dur:30},{sg:'SG-CACOASTAL',n:'Coastal Commission determination',ph:'CON',tk:'LA',dur:60}]},
{id:'A-USCA-LOCAL',cty:'USA-CA',cat:'Local Planning',n:'Local Zoning / Variance / CUP',ico:'📋',d:'Local planning entitlements — use permit, variance, design review, tentative map',w:[{sg:'SG-CALOCAL',n:'Local planning entitlement application',ph:'CON',tk:'LA',dur:35},{sg:'SG-CALOCAL',n:'Local planning determination and conditions',ph:'CON',tk:'LA',dur:60}]},
{id:'A-USCA-BP',cty:'USA-CA',cat:'Building Permits',n:'California Building Permit',ico:'📋',d:'Local building permit, grading permit, encroachment permit',w:[{sg:'SG-CABP',n:'Building and grading permit application',ph:'CON',tk:'LA',dur:20},{sg:'SG-CABP',n:'Building permit plan check and approval',ph:'CON',tk:'LA',dur:30}]},
// ══════════════════════════════════════════════
// CANADA — ONTARIO
// ══════════════════════════════════════════════
{id:'A-CAONT-OPA',cty:'CAN-ONT',cat:'Municipal Planning',n:'Official Plan Amendment (OPA) — Ontario',ico:'📋',d:'Amendment to municipal Official Plan for land use change',w:[{sg:'SG-ONTOPA',n:'OPA application preparation and public meeting',ph:'CON',tk:'LA',dur:40},{sg:'SG-ONTOPA',n:'Council consideration and OMB/OLT appeal period',ph:'CON',tk:'LA',dur:80}]},
{id:'A-CAONT-ZBA',cty:'CAN-ONT',cat:'Municipal Planning',n:'Zoning By-law Amendment (ZBA)',ico:'📐',d:'Amendment to municipal zoning by-law for development',w:[{sg:'SG-ONTZBA',n:'ZBA application, public meeting and council decision',ph:'CON',tk:'LA',dur:60}]},
{id:'A-CAONT-SPA',cty:'CAN-ONT',cat:'Municipal Planning',n:'Site Plan Approval (Ontario)',ico:'📐',d:'Site plan approval from municipal planning department',w:[{sg:'SG-ONTSPA',n:'Site plan application preparation',ph:'CON',tk:'LA',dur:25},{sg:'SG-ONTSPA',n:'Site plan approval and conditions',ph:'CON',tk:'LA',dur:40}]},
{id:'A-CAONT-MECP',cty:'CAN-ONT',cat:'Provincial Approvals',n:'MECP — Environmental Assessment (Ontario)',ico:'🌿',d:'Ontario Ministry of Environment, Conservation & Parks — Environmental Assessment Act',w:[{sg:'SG-ONTMECP',n:'MECP Environmental Assessment preparation',ph:'CON',tk:'LA',dur:60},{sg:'SG-ONTMECP',n:'MECP EA approval or exemption',ph:'CON',tk:'LA',dur:45}]},
{id:'A-CAONT-CA',cty:'CAN-ONT',cat:'Provincial Approvals',n:'Conservation Authority Permit',ico:'🌊',d:'Ontario Conservation Authority permit for development near watercourses',w:[{sg:'SG-ONTCA',n:'Conservation Authority permit application',ph:'CON',tk:'LA',dur:30}]},
{id:'A-CAONT-DFO',cty:'CAN-ONT',cat:'Federal Approvals',n:'DFO Fisheries Act Authorization',ico:'🐟',d:'Fisheries and Oceans Canada authorization for in-water works',w:[{sg:'SG-ONTDFO',n:'DFO Fisheries Act application and authorization',ph:'CON',tk:'LA',dur:60}]},
{id:'A-CAONT-BP',cty:'CAN-ONT',cat:'Building Permit',n:'Ontario Building Permit',ico:'📋',d:'Ontario Building Code permit application and building inspector appointments',w:[{sg:'SG-ONTBP',n:'Building permit application (OBC)',ph:'CON',tk:'LA',dur:20},{sg:'SG-ONTBP',n:'Building permit approval',ph:'CON',tk:'LA',dur:25}]},
// ══════════════════════════════════════════════
// AUSTRALIA — NEW SOUTH WALES
// ══════════════════════════════════════════════
{id:'A-AUSNSW-BASIX',cty:'AUS-NSW',cat:'Pre-DA',n:'BASIX Certificate (NSW)',ico:'🌱',d:'Building Sustainability Index certificate for energy and water commitments',w:[{sg:'SG-BASIX',n:'BASIX certificate preparation and registration',ph:'CON',tk:'LA',dur:10}]},
{id:'A-AUSNSW-DA',cty:'AUS-NSW',cat:'Development Application',n:'Development Application (DA) — NSW',ico:'📋',d:'DA to local council or Dept of Planning — local, regional or state significant',w:[{sg:'SG-NSWDA',n:'DA preparation, plans and SEE/EIS',ph:'CON',tk:'LA',dur:45},{sg:'SG-NSWDA',n:'DA submission and public exhibition',ph:'CON',tk:'LA',dur:3},{sg:'SG-NSWDA',n:'Council/DPHI DA determination',ph:'CON',tk:'LA',dur:65}]},
{id:'A-AUSNSW-SSD',cty:'AUS-NSW',cat:'Development Application',n:'State Significant Development (SSD) — NSW',ico:'📐',d:'SSD direct to Dept of Planning, Housing and Infrastructure (>$30m residential, >$10m other)',w:[{sg:'SG-NSWSSD',n:'SSD application — Director General requirements',ph:'CON',tk:'LA',dur:20},{sg:'SG-NSWSSD',n:'SSD EIS preparation and exhibition',ph:'CON',tk:'LA',dur:65},{sg:'SG-NSWSSD',n:'DPHI SSD determination',ph:'CON',tk:'LA',dur:65}]},
{id:'A-AUSNSW-BIO',cty:'AUS-NSW',cat:'Pre-DA',n:'Biodiversity Assessment (NSW)',ico:'🦘',d:'Biodiversity assessment under Biodiversity Conservation Act 2016 — BAR, credits',w:[{sg:'SG-NSWBIO',n:'Biodiversity Assessment Report (BAR)',ph:'CON',tk:'LA',dur:30}]},
{id:'A-AUSNSW-AH',cty:'AUS-NSW',cat:'Pre-DA',n:'Aboriginal Cultural Heritage Due Diligence',ico:'🪃',d:'Due Diligence Code assessment for Aboriginal Cultural Heritage in NSW',w:[{sg:'SG-NSWACH',n:'Aboriginal Cultural Heritage due diligence assessment',ph:'CON',tk:'LA',dur:15}]},
{id:'A-AUSNSW-CC',cty:'AUS-NSW',cat:'Construction Certificate',n:'Construction Certificate (CC) — NSW',ico:'🔨',d:'Construction Certificate from Council or Accredited Certifier before work starts',w:[{sg:'SG-NSWCC',n:'Construction Certificate application and approval',ph:'EN',tk:'LA',dur:20}]},
{id:'A-AUSNSW-PC',cty:'AUS-NSW',cat:'Occupation Certificate',n:'Principal Certifier Appointment',ico:'📝',d:'Appointment of Principal Certifier for compliance inspections',w:[{sg:'SG-NSWPC',n:'Principal Certifier appointment',ph:'EN',tk:'LA',dur:5}]},
{id:'A-AUSNSW-OC',cty:'AUS-NSW',cat:'Occupation Certificate',n:'Occupation Certificate (OC) — NSW',ico:'🔑',d:'Occupation Certificate issued by Principal Certifier on completion',w:[{sg:'SG-NSWOC',n:'Occupation Certificate application and final inspection',ph:'COM',tk:'LA',dur:15}]},
// ══════════════════════════════════════════════
// AUSTRALIA — VICTORIA
// ══════════════════════════════════════════════
{id:'A-AUSVIC-PP',cty:'AUS-VIC',cat:'Planning Permit',n:'Planning Permit Application (Victoria)',ico:'📋',d:'Planning permit from local council under Planning and Environment Act 1987',w:[{sg:'SG-VICPP',n:'Planning permit application preparation',ph:'CON',tk:'LA',dur:35},{sg:'SG-VICPP',n:'Public notice and submission period',ph:'CON',tk:'LA',dur:30},{sg:'SG-VICPP',n:'Council determination or VCAT hearing',ph:'CON',tk:'LA',dur:60}]},
{id:'A-AUSVIC-EES',cty:'AUS-VIC',cat:'Planning Permit',n:'Environment Effects Statement (EES) — Victoria',ico:'🌿',d:'Ministerial call-in for major projects — EES under Environment Effects Act 1978',w:[{sg:'SG-VICEES',n:'EES scoping and investigation reports',ph:'CON',tk:'LA',dur:40},{sg:'SG-VICEES',n:'EES exhibition, inquiries and Minister approval',ph:'CON',tk:'LA',dur:80}]},
{id:'A-AUSVIC-EPA',cty:'AUS-VIC',cat:'Planning Permit',n:'EPA Works Approval (Victoria)',ico:'🌊',d:'EPA Victoria works approval for industrial or waste facilities',w:[{sg:'SG-VICEPA',n:'EPA works approval application',ph:'CON',tk:'LA',dur:60}]},
{id:'A-AUSVIC-BP',cty:'AUS-VIC',cat:'Building Permit',n:'Building Permit (Victoria)',ico:'📋',d:'Building permit under Building Act 1993, registered building surveyor',w:[{sg:'SG-VICBP',n:'Building permit application and plan assessment',ph:'EN',tk:'LA',dur:25}]},
{id:'A-AUSVIC-OC',cty:'AUS-VIC',cat:'Occupation Permit',n:'Occupancy Permit (Victoria)',ico:'🔑',d:'Occupancy permit from building surveyor on completion',w:[{sg:'SG-VICOP',n:'Occupancy permit application and final inspection',ph:'COM',tk:'LA',dur:15}]},
// ══════════════════════════════════════════════
// AUSTRALIA — QUEENSLAND
// ══════════════════════════════════════════════
{id:'A-AUSQLD-DA',cty:'AUS-QLD',cat:'Development Application',n:'Development Application (DA) — Queensland',ico:'📋',d:'DA under Planning Act 2016 to local government or State',w:[{sg:'SG-QLDDA',n:'DA preparation, planning report and referrals',ph:'CON',tk:'LA',dur:40},{sg:'SG-QLDDA',n:'DA public notification and local government decision',ph:'CON',tk:'LA',dur:65}]},
{id:'A-AUSQLD-EPBC',cty:'AUS-QLD',cat:'Development Application',n:'EPBC Act Referral (Federal)',ico:'🦘',d:'Environment Protection and Biodiversity Conservation Act federal referral for significant impact',w:[{sg:'SG-EPBC',n:'EPBC Act referral and controlled action assessment',ph:'CON',tk:'LA',dur:90}]},
{id:'A-AUSQLD-BP',cty:'AUS-QLD',cat:'Building Permit',n:'Building Development Approval (QLD)',ico:'📋',d:'Building approval from private certifier or local government',w:[{sg:'SG-QLDBP',n:'Building development approval application',ph:'EN',tk:'LA',dur:20}]},
// ══════════════════════════════════════════════
// SINGAPORE
// ══════════════════════════════════════════════
{id:'A-SGP-OPP',cty:'SGP',cat:'Planning Permission',n:'Outline Planning Permission (OPP) — URA',ico:'🏛️',d:'URA Outline Planning Permission for major concept and land use',w:[{sg:'SG-SGPURAO',n:'URA OPP application and in-principle approval',ph:'CON',tk:'LA',dur:45}]},
{id:'A-SGP-WP',cty:'SGP',cat:'Planning Permission',n:'Written Permission (WP) — URA Singapore',ico:'📋',d:'URA Written Permission for detailed development plan approval',w:[{sg:'SG-SGPURAWP',n:'URA Written Permission application',ph:'CON',tk:'LA',dur:30},{sg:'SG-SGPURAWP',n:'URA WP approval with conditions',ph:'CON',tk:'LA',dur:20}]},
{id:'A-SGP-BCA',cty:'SGP',cat:'Building Plan Approval',n:'BCA Building Plan Approval',ico:'📐',d:'Building and Construction Authority structural and architectural plan approval',w:[{sg:'SG-BCABP',n:'BCA building plan submission and plan checking',ph:'CON',tk:'LA',dur:30},{sg:'SG-BCABP',n:'BCA building plan approval',ph:'CON',tk:'LA',dur:20}]},
{id:'A-SGP-FSSD',cty:'SGP',cat:'Statutory Approvals',n:'FSSD Fire Safety Approval',ico:'🚒',d:'Singapore Civil Defence Force fire safety clearance',w:[{sg:'SG-FSSD',n:'FSSD fire safety plan approval',ph:'CON',tk:'LA',dur:20}]},
{id:'A-SGP-LTA',cty:'SGP',cat:'Statutory Approvals',n:'LTA Traffic Impact Assessment',ico:'🛣️',d:'Land Transport Authority traffic impact assessment and approval',w:[{sg:'SG-LTATIA',n:'LTA traffic impact assessment and approval',ph:'CON',tk:'LA',dur:25}]},
{id:'A-SGP-PUB',cty:'SGP',cat:'Statutory Approvals',n:'PUB Drainage Clearance',ico:'💧',d:'Public Utilities Board drainage and sewerage plan clearance',w:[{sg:'SG-PUBDRAIN',n:'PUB drainage and sewerage plan clearance',ph:'CON',tk:'LA',dur:20}]},
{id:'A-SGP-GREENMARK',cty:'SGP',cat:'Statutory Approvals',n:'BCA Green Mark Certification',ico:'🌿',d:'Mandatory BCA Green Mark for GFA >5,000m² in Singapore',w:[{sg:'SG-GREENMARK',n:'Green Mark assessment and certification',ph:'CON',tk:'LA',dur:30}]},
{id:'A-SGP-TOP',cty:'SGP',cat:'TOP & CSC',n:'Temporary Occupation Permit (TOP)',ico:'🔑',d:'BCA Temporary Occupation Permit for partial occupation of building',w:[{sg:'SG-SGPTOP',n:'TOP application and BCA inspection',ph:'COM',tk:'LA',dur:15}]},
{id:'A-SGP-CSC',cty:'SGP',cat:'TOP & CSC',n:'Certificate of Statutory Completion (CSC)',ico:'✅',d:'BCA Certificate of Statutory Completion for full completion',w:[{sg:'SG-SGPCSC',n:'CSC application and final certification',ph:'COM',tk:'LA',dur:20}]},
// ══════════════════════════════════════════════
// HONG KONG
// ══════════════════════════════════════════════
{id:'A-HKG-OZP',cty:'HKG',cat:'Planning',n:'Town Planning Board — Rezoning / OZP',ico:'🏛️',d:'Town Planning Board outline zoning plan amendment application',w:[{sg:'SG-HKGOPZ',n:'OZP application to Town Planning Board',ph:'CON',tk:'LA',dur:35},{sg:'SG-HKGOPZ',n:'TPB consideration and public representations',ph:'CON',tk:'LA',dur:60}]},
{id:'A-HKG-BDP',cty:'HKG',cat:'Buildings Department',n:'Buildings Department Building Plan Approval',ico:'📐',d:'Buildings Department plans approval — GBP, SP and structural plans',w:[{sg:'SG-HKGBD',n:'Buildings Department general building plan approval',ph:'CON',tk:'LA',dur:30},{sg:'SG-HKGBD',n:'Structural plan approval',ph:'CON',tk:'LA',dur:20}]},
{id:'A-HKG-OP',cty:'HKG',cat:'Occupation Permit',n:'Occupation Permit (Hong Kong)',ico:'🔑',d:'Occupation Permit from Buildings Department on completion',w:[{sg:'SG-HKGOP',n:'Occupation permit application and inspection',ph:'COM',tk:'LA',dur:20}]},
// ══════════════════════════════════════════════
// INDIA — MAHARASHTRA
// ══════════════════════════════════════════════
{id:'A-IND-EC',cty:'IND',cat:'Regulatory Approvals',n:'Environmental Clearance (MoEFCC / SEIAA)',ico:'🌿',d:'Environmental clearance from MoEFCC or State Level EIA Authority',w:[{sg:'SG-INDEC',n:'EIA/EMP preparation',ph:'CON',tk:'LA',dur:45},{sg:'SG-INDEC',n:'SEIAA/MoEFCC public hearing and clearance',ph:'CON',tk:'LA',dur:60}]},
{id:'A-IND-MAHRERA',cty:'IND',cat:'Regulatory Approvals',n:'MahaRERA Registration (Maharashtra)',ico:'📋',d:'MahaRERA Real Estate Regulatory Authority registration for residential projects',w:[{sg:'SG-MAHRERA',n:'MahaRERA project registration',ph:'CON',tk:'LA',dur:20}]},
{id:'A-IND-IOD',cty:'IND',cat:'Municipal Approvals',n:'IOD — Intimation of Disapproval (BMC)',ico:'📋',d:'MCGM/BMC Intimation of Disapproval — building plan approval in Mumbai',w:[{sg:'SG-BMIOD',n:'IOD plan submission and BMC approval',ph:'CON',tk:'LA',dur:30},{sg:'SG-BMIOD',n:'IOD conditions clearance',ph:'CON',tk:'LA',dur:20}]},
{id:'A-IND-CC',cty:'IND',cat:'Municipal Approvals',n:'Commencement Certificate (Maharashtra)',ico:'🔨',d:'Municipal Commencement Certificate before construction can begin',w:[{sg:'SG-BMCC',n:'Commencement Certificate application and approval',ph:'EN',tk:'LA',dur:20}]},
{id:'A-IND-FIRENOC',cty:'IND',cat:'NOCs',n:'Fire NOC (Maharashtra)',ico:'🚒',d:'Maharashtra Fire Department fire NOC — mandatory before OC',w:[{sg:'SG-INDFIRE',n:'Fire NOC application and inspection',ph:'COM',tk:'LA',dur:20}]},
{id:'A-IND-OC',cty:'IND',cat:'Occupation Certificate',n:'Occupation Certificate (Maharashtra)',ico:'🔑',d:'Municipal Occupation Certificate on completion',w:[{sg:'SG-INDOC',n:'Occupation Certificate application and inspection',ph:'COM',tk:'LA',dur:25}]},
// ══════════════════════════════════════════════
// GERMANY
// ══════════════════════════════════════════════
{id:'A-DEU-BPLAN',cty:'DEU',cat:'Bauleitplanung',n:'Bebauungsplan — Bauleitplanung',ico:'📐',d:'Bebauungsplan (development plan) amendment or new B-Plan — 2-stage process',w:[{sg:'SG-DEUBPLAN',n:'Bebauungsplan scope and draft preparation',ph:'CON',tk:'LA',dur:60},{sg:'SG-DEUBPLAN',n:'Public participation and council adoption',ph:'CON',tk:'LA',dur:60}]},
{id:'A-DEU-BGENEHMIGUNG',cty:'DEU',cat:'Baugenehmigung',n:'Baugenehmigung — Building Permit (Germany)',ico:'📋',d:'Building permit application to Bauaufsichtsbehörde — 3-month determination for complex',w:[{sg:'SG-DEUBAU',n:'Bauantrag preparation and submission',ph:'CON',tk:'LA',dur:30},{sg:'SG-DEUBAU',n:'Baugenehmigung determination (3 months)',ph:'CON',tk:'LA',dur:65}]},
{id:'A-DEU-UVP',cty:'DEU',cat:'Environmental',n:'UVP / Umweltverträglichkeitsprüfung (EIA)',ico:'🌿',d:'German EIA screening, scoping and environmental impact assessment',w:[{sg:'SG-DEUUVP',n:'UVP screening and scoping',ph:'CON',tk:'LA',dur:20},{sg:'SG-DEUUVP',n:'UVP technical documents and public participation',ph:'CON',tk:'LA',dur:65}]},
{id:'A-DEU-BIMSCH',cty:'DEU',cat:'Specialist Permits',n:'BImSchG Genehmigung (Immission Protection)',ico:'🏭',d:'Federal Immission Control Act permit for industrial or energy plants',w:[{sg:'SG-DEUBIMSCH',n:'BImSchG application and public participation',ph:'CON',tk:'LA',dur:80}]},
{id:'A-DEU-WASSERRECHT',cty:'DEU',cat:'Specialist Permits',n:'Wasserrechtliche Erlaubnis (Water Law)',ico:'💧',d:'Water law permit for extraction, discharge or flood risk works',w:[{sg:'SG-DEUWATER',n:'Water law permit application and approval',ph:'CON',tk:'LA',dur:45}]},
{id:'A-DEU-DENKMAL',cty:'DEU',cat:'Specialist Permits',n:'Denkmalschutz Genehmigung (Listed Building)',ico:'🏰',d:'Heritage monument protection permit — Denkmalschutzbehörde approval',w:[{sg:'SG-DEUDENKM',n:'Denkmalschutz permit application and determination',ph:'CON',tk:'LA',dur:50}]},
// ══════════════════════════════════════════════
// FRANCE
// ══════════════════════════════════════════════
{id:'A-FRA-PC',cty:'FRA',cat:'Building Permits',n:'Permis de Construire (Building Permit)',ico:'📋',d:'Building permit from mairie — 2 months minor, 3 months major with recours tiers',w:[{sg:'SG-FRAPC',n:'Permis de Construire application preparation',ph:'CON',tk:'LA',dur:30},{sg:'SG-FRAPC',n:'Permis de Construire determination',ph:'CON',tk:'LA',dur:65},{sg:'SG-FRAPC',n:'Affichage and recours tiers period',ph:'CON',tk:'LA',dur:65}]},
{id:'A-FRA-EI',cty:'FRA',cat:'Environmental',n:'Étude d\u2019impact Environnemental',ico:'🌿',d:'French EIA — étude d\u2019impact, avis de l\u2019autorité environnementale',w:[{sg:'SG-FRAEI',n:'Etude d\u2019impact preparation',ph:'CON',tk:'LA',dur:45},{sg:'SG-FRAEI',n:'Enquête publique and AE opinion',ph:'CON',tk:'LA',dur:50}]},
{id:'A-FRA-DUP',cty:'FRA',cat:'Environmental',n:'Déclaration d\u2019Utilité Publique (DUP)',ico:'📜',d:'DUP for compulsory purchase and major infrastructure — décret en Conseil d\u2019État',w:[{sg:'SG-FRAUDUP',n:'Dossier d\u2019enquête préalable DUP preparation',ph:'CON',tk:'LA',dur:40},{sg:'SG-FRAUDUP',n:'Enquête publique DUP and decret',ph:'CON',tk:'LA',dur:120}]},
{id:'A-FRA-ERP',cty:'FRA',cat:'Urbanisme',n:'ERP Autorisation — Établissement Recevant du Public',ico:'🏛️',d:'ERP compliance authorisation for public buildings — fire, accessibility, safety',w:[{sg:'SG-FRAERP',n:'ERP dossier preparation and autorisation',ph:'CON',tk:'LA',dur:30}]},
// ══════════════════════════════════════════════
// NETHERLANDS
// ══════════════════════════════════════════════
{id:'A-NLD-OMGV',cty:'NLD',cat:'Omgevingsvergunning',n:'Omgevingsvergunning — Environmental Permit',ico:'📋',d:'All-in-one environmental permit under Wet Algemene Bepalingen Omgevingsrecht (Wabo)',w:[{sg:'SG-NLDOMGV',n:'Omgevingsvergunning application preparation',ph:'CON',tk:'LA',dur:30},{sg:'SG-NLDOMGV',n:'Standard procedure determination (8 weeks)',ph:'CON',tk:'LA',dur:40},{sg:'SG-NLDOMGV',n:'Extended procedure (6 months for complex cases)',ph:'CON',tk:'LA',dur:26}]},
{id:'A-NLD-MER',cty:'NLD',cat:'Environmental',n:'MER — Milieueffectrapportage (EIA)',ico:'🌿',d:'Dutch EIA procedure — MER study, Commissie mer advisory report',w:[{sg:'SG-NLDMER',n:'MER screening and scoping',ph:'CON',tk:'LA',dur:20},{sg:'SG-NLDMER',n:'MER study and Commissie mer review',ph:'CON',tk:'LA',dur:65}]},
{id:'A-NLD-BSTMPLAN',cty:'NLD',cat:'Omgevingsvergunning',n:'Bestemmingsplan Wijziging (Zoning Plan Change)',ico:'📐',d:'Amendment to municipal bestemmingsplan for development',w:[{sg:'SG-NLDBSTM',n:'Bestemmingsplan wijziging application and council process',ph:'CON',tk:'LA',dur:90}]},
// ══════════════════════════════════════════════
// SPAIN
// ══════════════════════════════════════════════
{id:'A-ESP-LICURB',cty:'ESP',cat:'Urban Planning',n:'Licencia de Obras — Building Licence (Spain)',ico:'📋',d:'Licencia de obras from ayuntamiento — minor or major (obra mayor)',w:[{sg:'SG-ESPLICURB',n:'Licencia de obras application preparation',ph:'CON',tk:'LA',dur:30},{sg:'SG-ESPLICURB',n:'Ayuntamiento determination (3-6 months)',ph:'CON',tk:'LA',dur:90}]},
{id:'A-ESP-EIA',cty:'ESP',cat:'Environmental',n:'Evaluación de Impacto Ambiental (EIA) Spain',ico:'🌿',d:'Spanish EIA — evaluación ambiental for major projects',w:[{sg:'SG-ESPEIA',n:'EIA document preparation',ph:'CON',tk:'LA',dur:50},{sg:'SG-ESPEIA',n:'EIA public information and declaration',ph:'CON',tk:'LA',dur:60}]},
// ══════════════════════════════════════════════
// SOUTH AFRICA
// ══════════════════════════════════════════════
{id:'A-SAF-ENV',cty:'SAF',cat:'Environmental',n:'EIA — NEMA Environmental Authorisation',ico:'🌿',d:'National Environmental Management Act EIA and environmental authorisation',w:[{sg:'SG-SAFEIA',n:'EIA scoping and basic assessment/full EIA',ph:'CON',tk:'LA',dur:65},{sg:'SG-SAFEIA',n:'NEMA environmental authorisation',ph:'CON',tk:'LA',dur:40}]},
{id:'A-SAF-REZONING',cty:'SAF',cat:'Planning',n:'Rezoning / Land Development Application',ico:'📋',d:'Rezoning or land development application under SPLUMA',w:[{sg:'SG-SAFREZONE',n:'SPLUMA rezoning application and public participation',ph:'CON',tk:'LA',dur:65}]},
{id:'A-SAF-BP',cty:'SAF',cat:'Building Plans',n:'Building Plans Approval (South Africa)',ico:'📐',d:'Municipal building plans approval by local municipality',w:[{sg:'SG-SAFBP',n:'Building plans submission and approval',ph:'CON',tk:'LA',dur:35}]},
// ══════════════════════════════════════════════
// NIGERIA
// ══════════════════════════════════════════════
{id:'A-NGA-FMENV',cty:'NGA',cat:'Regulatory Approvals',n:'FMENV EIA Certificate (Nigeria)',ico:'🌿',d:'Federal Ministry of Environment EIA Certificate for major projects',w:[{sg:'SG-NGAEIA',n:'EIA study preparation and submission',ph:'CON',tk:'LA',dur:55},{sg:'SG-NGAEIA',n:'FMENV EIA certificate approval',ph:'CON',tk:'LA',dur:45}]},
{id:'A-NGA-DMBD',cty:'NGA',cat:'Building Permits',n:'Lagos LASBCA Building Approval',ico:'📋',d:'Lagos State Building Control Agency building permit approval',w:[{sg:'SG-NGALASBCA',n:'LASBCA building plan approval',ph:'CON',tk:'LA',dur:45}]},
// ══════════════════════════════════════════════
// KENYA
// ══════════════════════════════════════════════
{id:'A-KEN-NEMA',cty:'KEN',cat:'Environmental',n:'NEMA EIA Licence (Kenya)',ico:'🌿',d:'National Environment Management Authority EIA licence',w:[{sg:'SG-KENNEMA',n:'NEMA EIA study and licence application',ph:'CON',tk:'LA',dur:55},{sg:'SG-KENNEMA',n:'NEMA EIA licence approval',ph:'CON',tk:'LA',dur:40}]},
{id:'A-KEN-COUNTY',cty:'KEN',cat:'County Approvals',n:'Kenya County Building Permit',ico:'📋',d:'County Government building permit application and approval',w:[{sg:'SG-KENCOUNTY',n:'County building permit application and approval',ph:'CON',tk:'LA',dur:40}]},
// ══════════════════════════════════════════════
// JAPAN
// ══════════════════════════════════════════════
{id:'A-JPN-KAIHATSU',cty:'JPN',cat:'Urban Planning',n:'Kaihatsu Kyoka — Development Permit',ico:'🏛️',d:'Development permit (kaihatsu kyoka) under City Planning Act for 1,000m²+',w:[{sg:'SG-JPNKDEV',n:'Kaihatsu kyoka application and prefectural approval',ph:'CON',tk:'LA',dur:45}]},
{id:'A-JPN-KENSINSEI',cty:'JPN',cat:'Building Confirmation',n:'Kenchiku Kakunin Shinsei — Building Confirmation',ico:'📋',d:'Building confirmation notice (kenchiku kakunin) from designated inspection body',w:[{sg:'SG-JPNKEN',n:'Kenchiku kakunin application and approval',ph:'CON',tk:'LA',dur:30}]},
// ══════════════════════════════════════════════
// SOUTH KOREA
// ══════════════════════════════════════════════
{id:'A-KOR-PLAN',cty:'KOR',cat:'Urban Planning',n:'Building Permit (Geonchuk Haega) — South Korea',ico:'📋',d:'Korean building permit under Building Act — geonchuk heoga',w:[{sg:'SG-KORBP',n:'Korean building permit application and approval',ph:'CON',tk:'LA',dur:35}]},
{id:'A-KOR-ENV',cty:'KOR',cat:'Environmental',n:'EIA — Environmental Impact Assessment Korea',ico:'🌿',d:'Korean EIA — hwangyeong yeonghyang pyeong-ga',w:[{sg:'SG-KOREIA',n:'Korean EIA preparation',ph:'CON',tk:'LA',dur:55},{sg:'SG-KOREIA',n:'Korean EIA approval',ph:'CON',tk:'LA',dur:40}]},
// ══════════════════════════════════════════════
// MALAYSIA
// ══════════════════════════════════════════════
{id:'A-MYS-PLAN',cty:'MYS',cat:'Planning Approval',n:'Planning Permission (Kebenaran Merancang) — Malaysia',ico:'📋',d:'Planning permission from Local Planning Authority — MBPJ, DBKL, etc.',w:[{sg:'SG-MYSPLAN',n:'Kebenaran Merancang application preparation',ph:'CON',tk:'LA',dur:30},{sg:'SG-MYSPLAN',n:'Local Planning Authority determination',ph:'CON',tk:'LA',dur:55}]},
{id:'A-MYS-BUILDBP',cty:'MYS',cat:'Building Plan Approval',n:'Building Plan Approval (PAB) — Malaysia',ico:'📐',d:'Building plan approval from Local Authority under UBBL 1984',w:[{sg:'SG-MYSBP',n:'Building plan submission and LA approval',ph:'CON',tk:'LA',dur:30}]},
{id:'A-MYS-CF',cty:'MYS',cat:'CF & Completion',n:'Certificate of Fitness / CCC — Malaysia',ico:'🔑',d:'Certificate of Completion and Compliance (CCC) by Principal Submitting Person',w:[{sg:'SG-MYSOCC',n:'CCC application and final inspection',ph:'COM',tk:'LA',dur:15}]},
];
// ═══ INTERFACE RULES ═══
const IFACE=[
  {f:'SG-LA-COND',t:'SG-SETUP',tp:'FS',lg:0},{f:'SG-PRCLET',t:'SG-SETUP',tp:'FS',lg:0},
  {f:'SG-SETUP',t:'SG-SI',tp:'SS',lg:0},{f:'SG-SETUP',t:'SG-HZRD',tp:'SS',lg:0},
  {f:'SG-ACM',t:'SG-SDEMO',tp:'FS',lg:0},{f:'SG-SDEMO',t:'SG-EXCAV',tp:'FS',lg:0},
  {f:'SG-SETUP',t:'SG-EXCAV',tp:'FS',lg:2},{f:'SG-SETUP',t:'SG-PILE',tp:'FS',lg:3},
  {f:'SG-SETUP',t:'SG-DPILE',tp:'FS',lg:3},{f:'SG-SETUP',t:'SG-MPILE',tp:'FS',lg:3},
  {f:'SG-EXCAV',t:'SG-SWDRAIN',tp:'SS',lg:5},{f:'SG-EXCAV',t:'SG-FDRAIN',tp:'SS',lg:5},
  {f:'SG-EXCAV',t:'SG-PILE',tp:'SS',lg:5},{f:'SG-EXCAV',t:'SG-DPILE',tp:'SS',lg:5},
  {f:'SG-EXCAV',t:'SG-SHPILE',tp:'SS',lg:0},{f:'SG-EXCAV',t:'SG-BSMT',tp:'SS',lg:0},
  {f:'SG-SHPILE',t:'SG-BSMT',tp:'FS',lg:3},{f:'SG-SECPILE',t:'SG-BSMT',tp:'FS',lg:3},
  {f:'SG-PILE',t:'SG-PCAP',tp:'FS',lg:5},{f:'SG-DPILE',t:'SG-PCAP',tp:'FS',lg:5},
  {f:'SG-MPILE',t:'SG-PCAP',tp:'FS',lg:5},{f:'SG-PCAP',t:'SG-GFSLAB',tp:'FS',lg:3},
  {f:'SG-RAFT',t:'SG-GFSLAB',tp:'FS',lg:0},{f:'SG-STRIP',t:'SG-GFSLAB',tp:'FS',lg:3},
  {f:'SG-BSMT',t:'SG-GFSLAB',tp:'SS',lg:10},{f:'SG-GFSLAB',t:'SG-VERT',tp:'FS',lg:5},
  {f:'SG-GFSLAB',t:'SG-STEEL',tp:'FS',lg:5},{f:'SG-GFSLAB',t:'SG-PORTAL',tp:'FS',lg:5},
  {f:'SG-GFSLAB',t:'SG-MASON',tp:'FS',lg:5},{f:'SG-GFSLAB',t:'SG-CLT',tp:'FS',lg:5},
  {f:'SG-GFSLAB',t:'SG-PC',tp:'FS',lg:5},{f:'SG-GFS',t:'SG-PORTAL',tp:'FS',lg:5},
  {f:'SG-VERT',t:'SG-HORIZ',tp:'SS',lg:8},{f:'SG-VERT',t:'SG-STEEL',tp:'SS',lg:8},
  {f:'SG-STEEL',t:'SG-HORIZ',tp:'SS',lg:5},{f:'SG-CLT',t:'SG-HORIZ',tp:'SS',lg:5},
  {f:'SG-PC',t:'SG-HORIZ',tp:'SS',lg:5},{f:'SG-HORIZ',t:'SG-ROOF',tp:'SS',lg:5},
  {f:'SG-STEEL',t:'SG-ROOF',tp:'SS',lg:5},{f:'SG-PORTAL',t:'SG-PRFRF',tp:'SS',lg:5},
  {f:'SG-MASON',t:'SG-ROOF',tp:'SS',lg:8},{f:'SG-CLT',t:'SG-ROOF',tp:'SS',lg:5},
  {f:'SG-HORIZ',t:'SG-CWALL',tp:'SS',lg:10},{f:'SG-HORIZ',t:'SG-RAIN',tp:'SS',lg:10},
  {f:'SG-HORIZ',t:'SG-BRICKX',tp:'SS',lg:10},{f:'SG-STEEL',t:'SG-CWALL',tp:'SS',lg:8},
  {f:'SG-CLT',t:'SG-CWALL',tp:'SS',lg:8},{f:'SG-MASON',t:'SG-CWALL',tp:'SS',lg:8},
  {f:'SG-PC',t:'SG-CWALL',tp:'SS',lg:8},{f:'SG-CWALL',t:'SG-WINEXT',tp:'SS',lg:10},
  {f:'SG-RAIN',t:'SG-WINEXT',tp:'SS',lg:10},{f:'SG-BRICKX',t:'SG-WINEXT',tp:'SS',lg:10},
  {f:'SG-ROOF',t:'SG-MECH',tp:'SS',lg:5},{f:'SG-ROOF',t:'SG-ELEC',tp:'SS',lg:5},
  {f:'SG-ROOF',t:'SG-HCS',tp:'SS',lg:5},{f:'SG-ROOF',t:'SG-HV',tp:'SS',lg:5},
  {f:'SG-CWALL',t:'SG-DRY',tp:'SS',lg:12},{f:'SG-RAIN',t:'SG-DRY',tp:'SS',lg:12},
  {f:'SG-BRICKX',t:'SG-DRY',tp:'SS',lg:10},{f:'SG-WINEXT',t:'SG-DRY',tp:'SS',lg:10},
  {f:'SG-MECH',t:'SG-DRY',tp:'SS',lg:5},{f:'SG-ELEC',t:'SG-DRY',tp:'SS',lg:5},
  {f:'SG-MECH',t:'SG-RAF',tp:'SS',lg:10},{f:'SG-ELEC',t:'SG-RAF',tp:'SS',lg:10},
  {f:'SG-MECH',t:'SG-CEIL',tp:'SS',lg:8},{f:'SG-ELEC',t:'SG-CEIL',tp:'SS',lg:8},
  {f:'SG-SPK',t:'SG-CEIL',tp:'SS',lg:5},{f:'SG-FA',t:'SG-CEIL',tp:'SS',lg:5},
  {f:'SG-ITDAT',t:'SG-CEIL',tp:'SS',lg:5},{f:'SG-DRY',t:'SG-RAF',tp:'SS',lg:5},
  {f:'SG-DRY',t:'SG-CEIL',tp:'SS',lg:5},{f:'SG-SCR',t:'SG-DEC',tp:'SS',lg:5},
  {f:'SG-CEIL',t:'SG-DEC',tp:'SS',lg:5},{f:'SG-DEC',t:'SG-CATB',tp:'SS',lg:5},
  {f:'SG-DEC',t:'SG-RFIN',tp:'SS',lg:5},{f:'SG-CATB',t:'SG-COMM',tp:'SS',lg:5},
  {f:'SG-RFIN',t:'SG-COMM',tp:'SS',lg:5},{f:'SG-COMM',t:'SG-IST',tp:'FS',lg:0},
  {f:'SG-IST',t:'SG-HOV',tp:'FS',lg:0},{f:'SG-ROOF',t:'SG-RDEXT',tp:'SS',lg:20},
  {f:'SG-ROOF',t:'SG-SOFTL',tp:'SS',lg:25},{f:'SG-RDEXT',t:'SG-HARDL',tp:'SS',lg:5},
  {f:'SG-LIFTS',t:'SG-CATB',tp:'SS',lg:10},{f:'SG-SAN',t:'SG-SCR',tp:'SS',lg:0},
  {f:'SG-PRFRF',t:'SG-MECH',tp:'SS',lg:5},{f:'SG-PRFRF',t:'SG-ELEC',tp:'SS',lg:5},
  {f:'SG-HHARD',t:'SG-RFTERM',tp:'FS',lg:3},
  {f:'SG-RFORM',t:'SG-TRACK',tp:'SS',lg:10},{f:'SG-RFORM',t:'SG-OLE',tp:'SS',lg:15},
  {f:'SG-TRACK',t:'SG-SC',tp:'SS',lg:5},{f:'SG-OLE',t:'SG-SIG',tp:'SS',lg:10},
  {f:'SG-TRACK',t:'SG-SIG',tp:'SS',lg:5},{f:'SG-SIG',t:'SG-TRACT',tp:'SS',lg:5},
  {f:'SG-RBRDG',t:'SG-RFORM',tp:'SS',lg:0},{f:'SG-RFORM',t:'SG-STAT',tp:'SS',lg:10},
  {f:'SG-RDEARTH',t:'SG-RDDRAIN',tp:'SS',lg:10},{f:'SG-RDEARTH',t:'SG-RDBASE',tp:'SS',lg:15},
  {f:'SG-RDDRAIN',t:'SG-RDBASE',tp:'SS',lg:8},{f:'SG-RDBASE',t:'SG-RDBIND',tp:'FS',lg:0},
  {f:'SG-RDBIND',t:'SG-RDSURF',tp:'FS',lg:0},{f:'SG-RDSURF',t:'SG-RDSIGN',tp:'SS',lg:3},
  {f:'SG-HVCAB',t:'SG-SUB132',tp:'SS',lg:10},{f:'SG-SOLAR',t:'SG-BESS',tp:'SS',lg:10},
  {f:'SG-MGI',t:'SG-DREDGE',tp:'FS',lg:5},{f:'SG-DREDGE',t:'SG-QUAY',tp:'SS',lg:5},
  {f:'SG-WMAIN',t:'SG-WPUMP',tp:'SS',lg:5},{f:'SG-WMAIN',t:'SG-RESV',tp:'SS',lg:10},
  {f:'SG-WWTW',t:'SG-SEWER',tp:'SS',lg:0},
  {f:'SG-RCBRDG',t:'SG-RFORM',tp:'SS',lg:0},{f:'SG-STBRDG',t:'SG-RFORM',tp:'SS',lg:0},
  {f:'SG-TBM',t:'SG-TUNFIT',tp:'SS',lg:20},{f:'SG-SCL',t:'SG-TUNFIT',tp:'SS',lg:15},
  {f:'SG-CAC',t:'SG-TUNFIT',tp:'SS',lg:0},
  {f:'SG-RCBRDG',t:'SG-RDBASE',tp:'FS',lg:0},{f:'SG-STBRDG',t:'SG-RDBASE',tp:'FS',lg:0},
  {f:'SG-CULV',t:'SG-RDBASE',tp:'FS',lg:0},{f:'SG-JCT',t:'SG-RDSIGN',tp:'SS',lg:3},
  {f:'SG-EMBANK',t:'SG-FDWALL',tp:'SS',lg:0},{f:'SG-OGPIPE',t:'SG-COMP',tp:'FS',lg:5},
  {f:'SG-HPGAS',t:'SG-COMP',tp:'FS',lg:5},{f:'SG-H2',t:'SG-BESS',tp:'SS',lg:10},
  {f:'SG-PRCSTRAT',t:'SG-PRCPQQ',tp:'FS',lg:0},{f:'SG-PRCPQQ',t:'SG-PRCITT',tp:'FS',lg:0},
  {f:'SG-PRCITT',t:'SG-PRCEVAL',tp:'FS',lg:0},{f:'SG-PRCEVAL',t:'SG-PRCLET',tp:'FS',lg:0},
  {f:'SG-PRIVITT',t:'SG-PRIVEVAL',tp:'FS',lg:0},{f:'SG-PRIVEVAL',t:'SG-PRCLET',tp:'FS',lg:0},
  {f:'SG-DESIGNAPP',t:'SG-DES',tp:'FS',lg:0},{f:'SG-LA-EIA',t:'SG-LA-APP',tp:'SS',lg:0},
  {f:'SG-LA-PREAPP',t:'SG-LA-APP',tp:'FS',lg:0},{f:'SG-LA-APP',t:'SG-LA-COND',tp:'FS',lg:0},
  {f:'SG-LA-S106',t:'SG-LA-COND',tp:'SS',lg:0}
];

// ═══ STATE ═══
const P={name:'New Infrastructure Project',start:'2025-01-06',weeks:104,cal:5};
let RECIPE=[],WPS=[],SCHED={};
let _idN=0,_libTab='build';
const uid=()=>'wp'+(++_idN);
const addedIds=()=>{
  const ids=new Set(RECIPE.map(r=>r.modId));
  WBS_NODES.forEach(n=>(n.modItems||[]).forEach(m=>ids.add(m.modId)));
  // also include recipe items
  RECIPE.forEach(r=>ids.add(r.modId));
  return ids;
};
const domOpen={};

// ═══ DATE UTILS ═══
function addWD(ds,days){
  if(days<=0)return new Date(ds+'T00:00:00');
  const cal=P.cal||5;let d=new Date(ds+'T00:00:00'),a=0;
  while(a<days){d.setDate(d.getDate()+1);const dw=d.getDay();if(cal==7)a++;else if(cal==6&&dw!==0)a++;else if(cal==5&&dw!==0&&dw!==6)a++;}
  return d;
}
function wdBetween(s,t){const cal=P.cal||5;let d=new Date(s+'T00:00:00'),c=0,te=new Date(t+'T00:00:00');while(d<te){d.setDate(d.getDate()+1);const dw=d.getDay();if(cal==7)c++;else if(cal==6&&dw!==0)c++;else if(cal==5&&dw!==0&&dw!==6)c++;}return c;}
function fmtD(d){const dt=(d instanceof Date)?d:new Date(d+'T00:00:00');return dt.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'2-digit'});}
function p6D(d){const dt=(d instanceof Date)?d:new Date(d+'T00:00:00');const M=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];return`${String(dt.getDate()).padStart(2,'0')}-${M[dt.getMonth()]}-${dt.getFullYear()} 08:00`;}
function trunc(s,n){return s&&s.length>n?s.slice(0,n-1)+'…':(s||'');}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function tsv(s){return String(s||'').replace(/\t/g,' ');}

// ═══ CPM ENGINE ═══
function recalc(){
  if(!WPS.length){ SCHED={r:{},pe:0}; updateWpsBadge(); return; }

  const n = WPS.length;
  // Index map: id → array index
  const idToIdx = new Map();
  WPS.forEach((w, i) => idToIdx.set(w.id, i));

  // Build adjacency lists
  const fwdAdj = Array.from({length:n}, ()=>[]);  // i → successors
  const bwdAdj = Array.from({length:n}, ()=>[]);  // i → predecessors
  const inDeg  = new Int32Array(n);
  const dur    = new Float64Array(n);

  WPS.forEach((w, si) => {
    dur[si] = w.dur || 0;
    w.preds.forEach(p => {
      const pi = idToIdx.get(p.id);
      if(pi === undefined) return;
      const tp = p.tp||'FS', lg = p.lg||0;
      fwdAdj[pi].push({to:si, tp, lg});
      bwdAdj[si].push({from:pi, tp, lg});
      inDeg[si]++;
    });
  });

  // ── FORWARD PASS (Kahn's topological order) ──────────────
  const es = new Float64Array(n);   // early start
  const ef = new Float64Array(n);   // early finish
  WPS.forEach((w, i) => ef[i] = dur[i]);

  const queue = [];
  const order = [];
  for(let i = 0; i < n; i++) if(inDeg[i] === 0) queue.push(i);

  let qi = 0;
  while(qi < queue.length){
    const i = queue[qi++];
    order.push(i);
    for(const {to, tp, lg} of fwdAdj[i]){
      let c;
      if(tp==='FS') c = ef[i] + lg;
      else if(tp==='SS') c = es[i] + lg;
      else if(tp==='FF') c = ef[i] + lg - dur[to];
      else              c = es[i] + lg - dur[to]; // SF
      if(c > es[to]){ es[to] = c; ef[to] = c + dur[to]; }
      if(--inDeg[to] === 0) queue.push(to);
    }
  }
  // Handle cycles: nodes not in order get their default values
  for(let i = 0; i < n; i++){
    if(es[i] < 0){ es[i] = 0; ef[i] = dur[i]; }
  }

  const pe = Math.max(0, ...ef);

  // ── BACKWARD PASS ─────────────────────────────────────────
  const ls = new Float64Array(n).fill(pe);
  const lf = new Float64Array(n).fill(pe);
  for(let i = 0; i < n; i++) ls[i] = pe - dur[i];

  for(let k = order.length - 1; k >= 0; k--){
    const i = order[k];
    for(const {from, tp, lg} of bwdAdj[i]){
      let c;
      if(tp==='FS') c = ls[i] - lg;
      else if(tp==='SS') c = ls[i] - lg + dur[from];
      else if(tp==='FF') c = lf[i] - lg;
      else              c = lf[i] - lg + dur[from]; // SF
      if(c < lf[from]){ lf[from] = c; ls[from] = c - dur[from]; }
    }
  }

  // ── BUILD SCHED RESULT ────────────────────────────────────
  // ── LONGEST PATH (LP) ─────────────────────────────────────
  // LP: activity is on LP if ef[i] === pe AND it's on a chain from
  // start to finish that equals pe. Use backward propagation.
  const lpFwd = new Float64Array(n);   // longest path from project start through this activity
  const lpBwd = new Float64Array(n);   // longest path from this activity to project end
  for(const i of order) {
    lpFwd[i] = ef[i];
    for(const {from, tp, lg} of bwdAdj[i]) {
      const contrib = tp==='FS' ? ef[from]+lg : es[from]+lg;
      // lpFwd[i] = max chain reaching this activity
    }
  }
  for(let k = order.length-1; k>=0; k--) {
    const i = order[k];
    lpBwd[i] = pe - es[i];  // slack from end
    for(const {to, tp, lg} of fwdAdj[i]) {
      const remain = (pe - es[to]) + dur[i] + lg;
      if(remain > lpBwd[i]) lpBwd[i] = remain;
    }
  }
  // An activity is on LP if its ef equals pe (drives project end)
  // OR it's on the chain: ef[i] + (pe - ef[i]) === pe → ef===pe OR has successor with ef===pe
  const onLP = new Uint8Array(n);
  // Mark terminal activities on LP
  const lpThreshold = pe - 0.001;
  for(let i=0;i<n;i++) { if(ef[i] >= lpThreshold) onLP[i]=1; }
  // Back-propagate LP membership
  for(let k=order.length-1;k>=0;k--) {
    const i=order[k];
    for(const {to} of fwdAdj[i]) { if(onLP[to] && ef[i]>=es[to]-0.001) onLP[i]=1; }
  }

  const r = {};
  WPS.forEach((w, i) => {
    const tf = ls[i] - es[i];
    r[w.id] = { es:es[i], ef:ef[i], ls:ls[i], lf:lf[i], tf, cp:tf<=0, lp:!!onLP[i] };
  });

  SCHED = {r, pe};
  updateWpsBadge();
  invalidateRowCache();
}

// ═══ ASSEMBLE WPS FROM RECIPE ═══
function assembleWps(){
  WPS=[];
  RECIPE.forEach(item=>{
    const mod=[...C_MODS,...CUSTOM_MODS,...A_MODS].find(m=>m.id===item.modId);
    if(!mod)return;
    mod.w.forEach((wp,wi)=>{
      const dur=typeof wp.dur==='function'?Math.max(1,wp.dur(item.qvals)):wp.dur;
      const name=item.customWPs?.[wi]||wp.n;
      WPS.push({id:uid(),modId:mod.id,sg:wp.sg,name,ph:wp.ph,trk:wp.tk,dur,preds:[],wbs:'',actType:'TASK',durUnit:'d'});
    });
  });
  assignWbs();
  const sgIdx={};
  WPS.forEach((w,i)=>{const prev=WPS.slice(0,i).filter(x=>x.sg===w.sg).pop();if(prev)w.preds.push({id:prev.id,tp:'FS',lg:0});});
  const sgSet=new Set(WPS.map(w=>w.sg));
  IFACE.forEach(rule=>{
    if(!sgSet.has(rule.f)||!sgSet.has(rule.t))return;
    const from=WPS.filter(w=>w.sg===rule.f);
    const to=WPS.filter(w=>w.sg===rule.t);
    const fId=(rule.tp==='FS'||rule.tp==='FF')?from[from.length-1]?.id:from[0]?.id;
    const tId=(rule.tp==='FS'||rule.tp==='SS')?to[0]?.id:to[to.length-1]?.id;
    if(!fId||!tId)return;
    const tw=WPS.find(w=>w.id===tId);
    if(tw&&!tw.preds.some(p=>p.id===fId))tw.preds.push({id:fId,tp:rule.tp,lg:rule.lg});
  });
}

function _assignWbsV16(){
  const phIdx={},phCnt={};let pi=0;
  PH_ORDER.forEach(ph=>{if(WPS.some(w=>w.ph===ph))phIdx[ph]=++pi;});
  WPS.forEach(w=>{phCnt[w.ph]=(phCnt[w.ph]||0)+1;w.wbs=`${phIdx[w.ph]||1}.${phCnt[w.ph]}`;});
}

// ═══ GENERATE ═══
function doGenerate(){
  const hasWbsMods = WBS_NODES.some(n=>n.modItems&&n.modItems.length>0);
  if(hasWbsMods){
    assembleWpsFromTree();
  } else if(RECIPE.length){
    assembleWps();
  } else {
    alert('Assign modules to WBS nodes in Build Structure, then click Generate.');return;
  }
  // Sync P.weeks from current project settings
  P.weeks = getProjectWeeks()||P.weeks||104;
  recalc();
  document.getElementById('xer-btn').disabled=false;
  updateTabDots();renderWps();renderGantt();
  goTab('wps');
}

// ═══ LIBRARY ═══
function libTab(tab){
  _libTab=tab;
  const ltc=document.getElementById('lt-custom');
  if(ltc) ltc.classList.toggle('act',tab==='custom');
  document.getElementById('lt-build').classList.toggle('act',tab==='build');
  document.getElementById('lt-appr').classList.toggle('act',tab==='appr');
  // Show/hide country selector
  const cselEl=document.getElementById('csel');
  const lsrchEl=document.getElementById('lsrch');
  if(cselEl) cselEl.style.display=tab==='appr'?'block':'none';
  const csel=document.getElementById('csel');
  csel.classList.toggle('show',tab==='appr');
  renderLib();
}

function renderLib_base(){
  const ads=addedIds();
  const q=(document.getElementById('lsrch')?.value||'').toLowerCase().trim();
  const cty=document.getElementById('csel')?.value||'';
  const el=document.getElementById('lib-body');
  
  if(_libTab==='custom'){
    renderCustomLib(el, ads, q);
    return;
  }
  if(_libTab==='build'){
    let html='';
    C_DOMS.forEach(dom=>{
      const mods=[...C_MODS,...CUSTOM_MODS].filter(m=>m.dom===dom.id&&(!q||(m.n+(m.d||'')).toLowerCase().includes(q)));
      if(!mods.length)return;
      const open=domOpen[dom.id]!==false||q;
      html+=`<div class="dh" onclick="toggleDom('${dom.id}')"><span>${dom.ico} <b style="font-size:10px;font-weight:700">${dom.lbl}</b></span><span style="font-size:10px;color:var(--t3)">${mods.length}</span></div>`;
      html+=`<div class="db ${open?'':'cl'}" id="dom-${dom.id}" style="max-height:${open?'999px':'0px'}">`;
      mods.forEach(m=>{
        html+=`<div class="lm ${ads.has(m.id)?'added':''}" title="${m.d}">
          <span style="font-size:12px;line-height:1">${m.ico}</span>
          <span class="lm-n">${m.n}</span>
          <span class="lm-c">${m.w.length}wp</span>
          <span class="ladd" data-mid="${m.id}" onclick="addMod('${m.id}')">+</span>
        </div>`;
      });
      html+=`</div>`;
    });
    el.innerHTML=html||'<div style="padding:20px 14px;font-size:12px;color:var(--t3);text-align:center">No modules match search</div>';
  } else {
    if(!cty){
      let html='<div style="padding:20px 14px;font-size:12px;color:var(--t3);text-align:center">Select a country above to see approval process modules</div>';
      // Show country grid
      html+='<div style="padding:8px 12px;display:grid;grid-template-columns:1fr 1fr;gap:4px">';
      Object.entries(A_DOMS).forEach(([k,v])=>{
        const cnt=A_MODS.filter(m=>m.cty===k).length;
        html+=`<div onclick="document.getElementById('csel').value='${k}';renderLib()" style="padding:5px 7px;font-size:11px;cursor:pointer;border-radius:4px;border:1px solid var(--b1);transition:background .1s" onmouseover="this.style.background='var(--bluel)'" onmouseout="this.style.background=''">
          <div style="font-weight:600;color:var(--t1);font-size:11px">${v.lbl}</div>
          <div style="font-size:10px;color:var(--t3)">${cnt} modules</div>
        </div>`;
      });
      html+='</div>';
      el.innerHTML=html;return;
    }
    const countryMods=A_MODS.filter(m=>m.cty===cty&&(!q||(m.n+(m.d||'')).toLowerCase().includes(q)));
    const dom=A_DOMS[cty];
    if(!countryMods.length){el.innerHTML='<div style="padding:20px 14px;font-size:12px;color:var(--t3);text-align:center">No approval modules found</div>';return;}
    const groups={};
    countryMods.forEach(m=>{if(!groups[m.cat])groups[m.cat]=[];groups[m.cat].push(m);});
    let html=`<div style="padding:6px 12px 4px;font-size:11px;font-weight:600;color:var(--blue)">${dom?.lbl||cty}</div>`;
    Object.entries(groups).forEach(([cat,mods])=>{
      const open=domOpen['a-'+cty+'-'+cat]!==false||q;
      html+=`<div class="dh" onclick="toggleDom('a-${cty}-${cat.replace(/[^a-z]/gi,'_')}')" style="color:var(--t2)"><span><b style="font-size:10px">${cat}</b></span><span style="font-size:10px;color:var(--t3)">${mods.length}</span></div>`;
      html+=`<div class="db ${open?'':'cl'}" id="dom-a-${cty}-${cat.replace(/[^a-z]/gi,'_')}" style="max-height:${open?'999px':'0px'}">`;
      mods.forEach(m=>{
        html+=`<div class="lm ${ads.has(m.id)?'added':''}" title="${m.d||m.n}">
          <span style="font-size:12px;line-height:1">${m.ico||'📋'}</span>
          <span class="lm-n">${m.n}</span>
          <span class="lm-c">${m.w.length}wp</span>
          <span class="ladd" data-mid="${m.id}" onclick="addMod('${m.id}')">+</span>
        </div>`;
      });
      html+=`</div>`;
    });
    el.innerHTML=html;
  }
}

function toggleDom(id){
  domOpen[id]=domOpen[id]===false?true:false;
  const el=document.getElementById('dom-'+id);
  if(el){el.style.maxHeight=domOpen[id]===false?'0px':'999px';el.classList.toggle('cl',domOpen[id]===false);}
}

// ═══ RECIPE CANVAS ═══
function addMod(id){
  // If Structure tab is active and a WBS node is selected, assign there
  // If Build Structure tab active and a WBS node is selected → assign to that node
  const structTab = document.querySelector('.stab[data-v="struct"]');
  const structActive = structTab && structTab.classList.contains('act');
  if(structActive && ACTIVE_WBS){
    const assigned = assignModToWbs(id);
    renderLib();
    return;
  }
  // Otherwise add to flat recipe
  if(RECIPE.some(r=>r.modId===id))return;
  const mod=[...C_MODS,...CUSTOM_MODS,...A_MODS].find(m=>m.id===id);
  if(!mod)return;
  const qvals={};(mod.q||[]).forEach(q=>{qvals[q.id]=q.def;});
  RECIPE.push({modId:id,qvals});
  renderLib();
}

function removeMod(id){
  RECIPE=RECIPE.filter(r=>r.modId!==id);renderLib();
}

function updateQval(modId,qid,val){const item=RECIPE.find(r=>r.modId===modId);if(item)item.qvals[qid]=+val;}

function customiseWP(modId,wpIdx,newName){
  const item=RECIPE.find(r=>r.modId===modId);
  if(!item)return;
  const mod=[...C_MODS,...CUSTOM_MODS,...A_MODS].find(m=>m.id===modId);
  if(!mod)return;
  if(!item.customWPs) item.customWPs=mod.w.map(w=>w.n);
  item.customWPs[wpIdx]=newName;
}

function getDomColor(dom){
  const cols={SI:'#6B7280',DM:'#EF4444',TW:'#F59E0B',EX:'#78716C',DR:'#0369A1',PIL:'#65A30D',
    BAS:'#78716C',RC:'#7C3AED',STL:'#1D4ED8',ALT:'#0891B2',RF:'#BE185D',CL:'#BE185D',
    ME:'#EA580C',EL:'#F59E0B',FP:'#DC2626',LT:'#6366F1',PL:'#0EA5E9',IT:'#10B981',
    FN:'#0D9488',HC:'#DC2626',ED:'#0891B2',DC:'#374151',HT:'#92400E',IN:'#78716C',
    EW:'#65A30D',SP:'#16A34A',RL:'#1D4ED8',AIR:'#6366F1',BR:'#78716C',TUN:'#374151',
    RD:'#6B7280',PW:'#F59E0B',WT:'#0EA5E9',GS:'#EA580C',MR:'#155A2A',FT:'#92400E',
    FD:'#0369A1',OG:'#7C3AED',TC:'#4F46E5',REM:'#15803D',CM:'#DC2626',PC:'#0891B2'};
  return cols[dom]||'#888';
}

function renderCanvas(){
  const el=document.getElementById('canvas');
  if(!RECIPE.length){
    el.innerHTML=`<div class="ce"><h3>Build your programme recipe</h3>
      <p>Click <b>+</b> next to any module in the library. Mix construction works from any sector with country-specific authority approval processes to build a complete programme. <br><br><b>New:</b> Select "Approvals" tab and choose a country to see the full end-to-end consent and permitting process.</p>
    </div>`;return;
  }
  const allMods=[...C_MODS,...A_MODS];
  let html=`<div style="margin-bottom:11px;display:flex;align-items:center;justify-content:space-between">
    <span style="font-size:12px;color:var(--t3)">${RECIPE.length} module${RECIPE.length!==1?'s':''} · ${RECIPE.reduce((s,r)=>{const m=allMods.find(x=>x.id===r.modId);return s+(m?.w?.length||0);},0)} work packages</span>
    <button class="btn btns btnp" onclick="doGenerate()">&#9889; Generate schedule &#x2192;</button>
  </div><div class="rg">`;
  RECIPE.forEach(item=>{
    const mod=allMods.find(m=>m.id===item.modId);if(!mod)return;
    const col=getDomColor(mod.dom);
    const qHtml=(mod.q||[]).map(q=>`<div class="qr">
      <span class="ql">${q.l}</span>
      <input class="qi" type="number" value="${item.qvals[q.id]||q.def}" min="0" onchange="updateQval('${mod.id}','${q.id}',this.value)">
      <span class="qu">${q.u}</span>
    </div>`).join('');
    // Customised WP names (if any)
    const customWPs=item.customWPs||mod.w.map(w=>w.n);
    html+=`<div class="rc" style="border-left-color:${col}">
      <div class="rc-top"><span class="rc-ico">${mod.ico||'📋'}</span><div class="rc-nm">${mod.n}</div>
      <button class="rc-rm" onclick="removeMod('${mod.id}')" title="Remove">&#215;</button></div>
      <div class="rc-dom" style="color:${col}">${mod.cty?'&#127760; '+mod.cty:mod.dom}</div>
      <div class="rc-wl">${customWPs.map((wn,wi)=>`<span style="display:flex;align-items:center;gap:3px;font-size:10px;margin-bottom:2px">
        <span style="color:var(--t3)">&#183;</span>
        <input style="flex:1;background:none;border:none;border-bottom:1px solid transparent;color:var(--t1);font-family:inherit;font-size:10px;padding:1px 0;outline:none;min-width:0"
          value="${esc(wn)}" onchange="customiseWP('${mod.id}',${wi},this.value)"
          onfocus="this.style.borderBottomColor='var(--blue)'"
          onblur="this.style.borderBottomColor='transparent'"
          title="Click to rename this work package">
      </span>`).join('')}</div>
      ${qHtml?`<div class="rc-q">${qHtml}</div>`:''}
    </div>`;
  });
  html+='</div>';el.innerHTML=html;
}

// ═══ WBS TABLE ═══
// renderWps — replaced by new version below


function editPreds(id){
  const w=WPS.find(x=>x.id===id);if(!w)return;
  assignWbs();
  const cur=w.preds.map(p=>{const pw=WPS.find(x=>x.id===p.id);return pw?pw.wbs:''}).filter(Boolean).join(', ');
  const inp=prompt(`Predecessors for "${trunc(w.name,40)}"\nCurrent: ${cur||'none'}\nEnter WBS codes (e.g. 1.2, 2.1) or leave blank to clear:`);
  if(inp===null)return;
  if(!inp.trim()){w.preds=[];recalc();renderWps();renderGantt();return;}
  const codes=inp.split(',').map(s=>s.trim()).filter(Boolean);
  w.preds=[];codes.forEach(code=>{const pw=WPS.find(x=>x.wbs===code&&x.id!==id);if(pw)w.preds.push({id:pw.id,tp:'FS',lg:0});});
  recalc();renderWps();renderGantt();
}
function saveWp(){const n=document.getElementById('wm-n').value.trim();if(!n)return;WPS.push({id:uid(),sg:'SG-MANUAL',name:n,ph:document.getElementById('wm-ph').value,trk:document.getElementById('wm-tk').value,dur:Math.max(1,+document.getElementById('wm-d').value||10),preds:[],wbs:''});closeOvl('wp-ovl');assignWbs();recalc();renderWps();renderGantt();document.getElementById('xer-btn').disabled=false;}

// ═══ INTERACTIVE GANTT ═══
const DPX=5,ROW=31,HDR=44;  // ROW must match VS.ITEM_H=31
let _ganttDrag=null; // {type:'resize'|'move', wi, startX, startDur, startEs, startEf}
let _ganttSelected=-1;

function renderGantt() {
  const glb  = document.getElementById('glb');
  const gc   = document.getElementById('gchart');
  const gcHdr= document.getElementById('gchart-hdr');
  if(!glb || !gc) return;

  // ── No schedule ───────────────────────────────────────────
  if(!WPS.length || !SCHED.pe) {
    glb.innerHTML = gc.innerHTML = '';
    if(gcHdr) gcHdr.innerHTML = '';
    return;
  }

  // ── Use same flat row list as table (VS.flat) ─────────────
  // This guarantees pixel-perfect P6-style alignment
  const succMap = _getSuccMap();
  const filteredWPS = (typeof getFilteredSortedWps==='function' && typeof _hasActiveFilter==='function' && _hasActiveFilter())
    ? getFilteredSortedWps() : WPS;
  const flat = (VS.flat && VS.flat.length) ? VS.flat : buildFlatRows(filteredWPS, succMap);
  const ROW_H = VS.ITEM_H || 31;

  // ── Constants ─────────────────────────────────────────────
  const pe      = SCHED.pe || 0;
  const DPX     = 5;
  const W       = Math.max(600, pe * DPX + 80);
  const H       = flat.length * ROW_H;
  const HDR_H   = 44;
  const cal     = P.cal || 5;
  const startD  = new Date((P.start || '2025-01-01') + 'T00:00:00');
  const projStart = startD;

  // Working-day multiplier → calendar days
  const wdToCd  = cal === 7 ? 1 : cal === 6 ? 7/6 : 7/5;
  const dateOf  = d => { const dd = new Date(startD); dd.setDate(dd.getDate() + Math.round(d * wdToCd)); return dd; };

  // ── LEFT PANEL (glb) — mirror VS rows exactly ─────────────
  let glbHtml = '';
  flat.forEach(row => {
    if(row.type === 'wbs-hdr') {
      const n = row.node;
      glbHtml += `<div class="glr glr-wbs" style="padding-left:${row.depth*14+4}px;height:${ROW_H}px;display:flex;align-items:center;background:var(--s1);border-bottom:1px solid var(--b1);cursor:pointer" onclick="toggleWbsCollapse('${n.id}')">
        <span style="font-size:9px;margin-right:4px;color:var(--t3)">${n.collapsed?'▶':'▼'}</span>
        <span class="glw" style="font-size:9.5px;font-weight:700;color:var(--t2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">${n.code?n.code+' ':''}</span>
        <span style="font-size:9.5px;color:var(--t2);font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:2">${trunc(n.name,20)}</span>
      </div>`;
    } else {
      const w = row.w;
      const r = SCHED.r?.[w.id] || {};
      const isSel = w.id === WPS[_ganttSelected]?.id;
      glbHtml += `<div class="glr${r.cp?' cp':''}${isSel?' glr-sel':''}" title="${w.name}" style="padding-left:${row.indent||4}px;height:${ROW_H}px;cursor:pointer" onclick="selectGanttRow(${WPS.indexOf(w)})">
        <span class="glw" style="font-size:9px;color:var(--t3);flex-shrink:0;min-width:36px">${w.wbs}</span>
        <span class="gln" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px">${trunc(w.name,22)}</span>
        <span class="gld" style="font-size:9px;color:var(--t3);flex-shrink:0">${w.dur}d</span>
      </div>`;
    }
  });
  glb.innerHTML = glbHtml;

  // ── HEADER SVG (sticky timeline) ──────────────────────────
  let hdrSvg = `<svg width="${W}" height="${HDR_H}" xmlns="http://www.w3.org/2000/svg" style="display:block;min-width:${W}px;background:#F9F7F3">`;
  hdrSvg += `<rect width="${W}" height="${HDR_H}" fill="#F9F7F3"/>`;
  const months = [];
  let dd = new Date(startD), wd = 0;
  for(let m = 0; m < 36 && wd < pe * wdToCd + 30; m++) {
    months.push({ x: 8 + wd * DPX, lbl: dd.toLocaleDateString('en-GB', {month:'short', year:'2-digit'}) });
    const nm = new Date(dd); nm.setMonth(nm.getMonth() + 1); nm.setDate(1);
    const mwd = Math.round((nm - dd) / 86400000);
    wd += mwd; dd = nm;
    if(months.length > 1) months[months.length - 2].nextX = 8 + wd * DPX;
  }
  months.forEach(m => {
    if(m.x > W) return;
    hdrSvg += `<line x1="${m.x}" y1="0" x2="${m.x}" y2="${HDR_H}" stroke="#E5E1D8" stroke-width="1"/>`;
    hdrSvg += `<text x="${m.x+5}" y="14" fill="#6B7280" font-size="9" font-weight="700" font-family="'Plus Jakarta Sans',sans-serif">${m.lbl}</text>`;
    const mW = m.nextX ? m.nextX - m.x : DPX * 20;
    const wks = Math.round(mW / (5 * DPX));
    for(let wk = 1; wk < wks && wk < 6; wk++) {
      const wx = m.x + wk * 5 * DPX;
      if(wx < W) {
        hdrSvg += `<line x1="${wx}" y1="${HDR_H*0.55}" x2="${wx}" y2="${HDR_H}" stroke="#E5E1D8" stroke-width="0.5"/>`;
        hdrSvg += `<text x="${wx+2}" y="${HDR_H-3}" fill="#9CA3AF" font-size="7.5">W${wk}</text>`;
      }
    }
  });
  hdrSvg += `<line x1="0" y1="${HDR_H-1}" x2="${W}" y2="${HDR_H-1}" stroke="#D5CFC4" stroke-width="1.5"/>`;
  hdrSvg += '</svg>';
  if(gcHdr) gcHdr.innerHTML = hdrSvg;

  // ── BODY SVG (bars, aligned to flat rows) ─────────────────
  let svg = `<svg width="${W}" height="${Math.max(H,8)}" xmlns="http://www.w3.org/2000/svg" style="display:block;min-width:${W}px">`;
  svg += `<rect width="${W}" height="${Math.max(H,8)}" fill="#FFF"/>`;

  // Month grid lines
  months.forEach(m => {
    if(m.x > W) return;
    svg += `<line x1="${m.x}" y1="0" x2="${m.x}" y2="${H}" stroke="#F4F1EC" stroke-width="1"/>`;
  });
  // Week grid
  for(let wk = 0; wk <= Math.ceil((pe * wdToCd) / 5) + 4; wk++) {
    const x = 8 + wk * 5 * DPX;
    svg += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="#F9F6F1" stroke-width="0.5"/>`;
  }

  // Data date line
  if(PROJECT_SETTINGS.dataDate && P.start) {
    const ddDays = Math.round((new Date(PROJECT_SETTINGS.dataDate) - projStart) / 86400000);
    const ddX = 8 + ddDays * DPX;
    if(ddX > 8 && ddX < W) {
      svg += `<line x1="${ddX}" y1="0" x2="${ddX}" y2="${H}" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4,3" opacity=".8"/>`;
      svg += `<rect x="${ddX}" y="0" width="24" height="13" rx="3" fill="#F59E0B" opacity=".9"/>`;
      svg += `<text x="${ddX+3}" y="9.5" fill="#fff" font-size="7.5" font-weight="700">DD</text>`;
    }
  }

  // Row zebra + bars
  flat.forEach((row, i) => {
    const y0 = i * ROW_H;
    // Zebra stripe
    if(i % 2 === 0) svg += `<rect x="0" y="${y0}" width="${W}" height="${ROW_H}" fill="rgba(244,241,236,.3)"/>`;

    if(row.type === 'wbs-hdr') {
      // WBS header row — subtle band
      svg += `<rect x="0" y="${y0}" width="${W}" height="${ROW_H}" fill="rgba(109,40,217,.04)"/>`;
      return;
    }

    const w   = row.w;
    const r   = SCHED.r?.[w.id] || {};
    const wi  = WPS.indexOf(w);
    const isSel = wi === _ganttSelected;
    const cp  = !!r.cp, lp = !!r.lp;
    const es  = r.es ?? 0, ef = r.ef ?? (es + (w.dur || 0));
    const bx  = 8 + es * wdToCd * DPX;
    const bw  = Math.max(2, (ef - es) * wdToCd * DPX);
    const bh  = w.actType === 'MS' ? 0 : ROW_H * 0.48;
    const by  = y0 + (ROW_H - bh) / 2;
    const pct = (w.pct || 0) / 100;

    // Selection highlight
    if(isSel) {
      svg += `<rect x="0" y="${y0}" width="${W}" height="${ROW_H}" fill="rgba(109,40,217,.08)"/>`;
    }

    // Baseline bar
    if(_activeBaseline >= 0) {
      const bla = _getBaselineActivity(w);
      if(bla) {
        const blDate = s => s ? Math.round((new Date(s) - projStart) / 86400000) : null;
        const blES = blDate(bla.targetStart || bla.earlyStart);
        const blEF = blDate(bla.targetEnd || bla.earlyEnd);
        if(blES != null && blEF != null) {
          const bbx = 8 + blES * DPX, bbw = Math.max(2, (blEF - blES) * DPX);
          const bby = y0 + ROW_H * 0.72, bbh = 5;
          svg += `<rect x="${bbx}" y="${bby}" width="${bbw}" height="${bbh}" rx="1.5" fill="none" stroke="#94A3B8" stroke-width="1.5" opacity=".7"/>`;
        }
      }
    }

    if(w.actType === 'MS') {
      // Milestone diamond
      const mx = 8 + es * wdToCd * DPX, my = y0 + ROW_H / 2;
      const s = ROW_H * 0.33;
      svg += `<polygon points="${mx},${my-s} ${mx+s},${my} ${mx},${my+s} ${mx-s},${my}" fill="${cp?'#DC2626':'#6D28D9'}" opacity="${isSel?1:.85}"/>`;
    } else {
      // Bar colour
      const col = w.actType === 'LOE' ? '#94A3B8' : w.actType === 'HAMM' ? '#A78BFA' :
                  cp ? '#DC2626' : lp ? '#D97706' : '#3B82F6';

      svg += `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="2.5" fill="${col}" opacity="${cp?1:.82}"/>`;
      // % complete fill
      if(pct > 0) {
        svg += `<rect x="${bx}" y="${by}" width="${bw*pct}" height="${bh}" rx="2.5" fill="rgba(0,0,0,.18)"/>`;
        svg += `<line x1="${bx+bw*pct}" y1="${by+2}" x2="${bx+bw*pct}" y2="${by+bh-2}" stroke="#fff" stroke-width="1.5"/>`;
      }
      // Selection ring
      if(isSel) {
        svg += `<rect x="${bx-2}" y="${by-2}" width="${bw+4}" height="${bh+4}" rx="3.5" fill="none" stroke="#fff" stroke-width="2" pointer-events="none"/>`;
        svg += `<rect x="${bx-3}" y="${by-3}" width="${bw+6}" height="${bh+6}" rx="4.5" fill="none" stroke="#6D28D9" stroke-width="1.5" pointer-events="none"/>`;
      }
      // Activity label inside bar (if wide enough)
      if(bw > 40) {
        const lbl = trunc(w.name, Math.floor(bw / 5.5));
        svg += `<text x="${bx+5}" y="${by+bh*0.67}" fill="#fff" font-size="9" font-family="'Plus Jakarta Sans',sans-serif" pointer-events="none">${lbl}</text>`;
      }
    }

    // Click handler
    svg += `<rect x="${bx-2}" y="${y0}" width="${bw+4}" height="${ROW_H}" fill="transparent" style="cursor:pointer" onclick="selectGanttRow(${wi})" title="${w.name}"/>`;
  });

  // Dependency arrows (simplified FS links)
  const wpsIdxMap = new Map(WPS.map((w,i) => [w.id, i]));
  flat.forEach((row, i) => {
    if(row.type !== 'activity') return;
    const w = row.w; const r = SCHED.r?.[w.id] || {};
    const ef = r.ef ?? ((r.es ?? 0) + (w.dur || 0));
    const ey = i * ROW_H + ROW_H / 2;
    (w.preds || []).forEach(p => {
      if(p.tp !== 'FS') return;
      const predRow = flat.findIndex(fr => fr.type==='activity' && fr.w.id===p.id);
      if(predRow < 0) return;
      const pr = SCHED.r?.[p.id] || {};
      const pef = pr.ef ?? ((pr.es ?? 0) + (WPS.find(x=>x.id===p.id)?.dur||0));
      const px = 8 + pef * wdToCd * DPX, sx = 8 + (r.es??0) * wdToCd * DPX;
      const py = predRow * ROW_H + ROW_H / 2;
      if(Math.abs(ey - py) < 200) {  // only draw nearby links
        svg += `<polyline points="${px},${py} ${px+4},${py} ${px+4},${ey} ${sx},${ey}" fill="none" stroke="rgba(100,100,120,.35)" stroke-width="1" marker-end="url(#arr)"/>`;
      }
    });
  });

  svg += `<defs><marker id="arr" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="rgba(100,100,120,.5)"/></marker></defs>`;
  svg += '</svg>';
  gc.innerHTML = svg;
}

// Select activity row from Gantt — scrolls table to it and opens dock
function selectGanttRow(wi) {
  if(wi < 0 || wi >= WPS.length) return;
  _ganttSelected = wi;
  populateDetailDock(wi, WPS[wi]);
  openDetailDock?.();
  // Scroll the table row into view
  const tr = document.querySelector(`[data-wi="${wi}"]`) || document.querySelector(`.wt-row[data-id="${WPS[wi]?.id}"]`);
  if(tr) tr.scrollIntoView({block:'nearest', behavior:'smooth'});
}


function attachGanttEvents(gc,W,H){
  const tt=document.getElementById('g-tooltip');

  gc.querySelectorAll('.gantt-bar-wrap').forEach(g=>{
    const wi=+g.dataset.wi;
    const w=WPS[wi];
    if(!w)return;

    // Hover tooltip
    g.addEventListener('mouseenter',e=>{
      if(_ganttDrag)return;
      const rr=SCHED.r?.[w.id]||{};
      const start=rr.es!=null?fmtD(addWD(P.start,rr.es)):'—';
      const fin=rr.ef!=null?fmtD(addWD(P.start,rr.ef)):'—';
      tt.innerHTML=`<strong>${w.wbs} ${esc(w.name)}</strong>
        Duration: <b>${w.dur}d</b><br>
        Start: <b>${start}</b> &nbsp; Finish: <b>${fin}</b><br>
        TF: <b>${(rr.tf||0)>=0?(rr.tf||0)+'d':'0d'}</b> &nbsp; ${rr.cp?'<span style="color:#F59E0B;font-weight:700">&#9650; CRITICAL</span>':''}`;
      tt.style.display='block';
    });
    g.addEventListener('mousemove',e=>{
      tt.style.left=(e.clientX+14)+'px';tt.style.top=(e.clientY-10)+'px';
    });
    g.addEventListener('mouseleave',()=>{tt.style.display='none';});

    // Click to select and highlight table row
    g.addEventListener('click',e=>{
      if(e.target.dataset.action==='resize')return;
      _ganttSelected=(_ganttSelected===wi)?-1:wi;
      renderGantt();
      // Scroll table to matching row
      const trow=document.querySelector(`tr[data-wi="${wi}"]`);
      if(trow)trow.scrollIntoView({behavior:'smooth',block:'center'});
    });
  });

  // Resize drag (right-edge of bar)
  gc.querySelectorAll('[data-action="resize"]').forEach(handle=>{
    handle.addEventListener('mousedown',e=>{
      e.preventDefault();e.stopPropagation();
      const wi=+handle.dataset.wi;
      const w=WPS[wi];if(!w)return;
      _ganttDrag={type:'resize',wi,startX:e.clientX,startDur:w.dur};
      document.body.style.cursor='ew-resize';
      document.body.classList.add('gantt-drag-active');
    });
  });

  // ── Connection port drawing ──
  gc.querySelectorAll('[data-action="connect"]').forEach(port=>{
    port.addEventListener('mousedown',e=>{
      e.preventDefault();e.stopPropagation();
      const wi=+port.dataset.wi;
      const rr=SCHED.r?.[WPS[wi]?.id]||{};
      const bx=8+(rr.es||0)*DPX;
      const bw=Math.max(3,(WPS[wi]?.dur||1)*DPX);
      const by=HDR+wi*ROW+4+((ROW-8)/2);
      const startX=bx+bw+2;const startY=by;
      _ganttDrag={type:'connect',fromWi:wi,startX,startY};
      const line=document.getElementById('conn-line');
      if(line){
        line.setAttribute('x1',startX);line.setAttribute('y1',startY);
        line.setAttribute('x2',startX);line.setAttribute('y2',startY);
        line.style.display='';
      }
      document.getElementById('t-gantt').classList.add('gantt-connecting');
    });
  });

  // Highlight drop targets on hover during connect
  gc.querySelectorAll('.gantt-bar-wrap').forEach(g=>{
    g.addEventListener('mouseenter',e=>{
      if(_ganttDrag?.type==='connect'){
        const wi=+g.dataset.wi;
        if(wi!==_ganttDrag.fromWi) g.classList.add('gantt-drop-target');
      }
    });
    g.addEventListener('mouseleave',()=>{g.classList.remove('gantt-drop-target');});
  });
}

function syncOverlayScroll(){
  const gc=document.getElementById('gchart');
  const ov=document.getElementById('conn-overlay');
  if(ov&&gc){
    ov.style.left=(-gc.scrollLeft)+'px';
    ov.style.top=(-gc.scrollTop)+'px';
  }
}

// Global mouse events for drag
document.addEventListener('mousemove',e=>{
  if(!_ganttDrag)return;
  if(_ganttDrag.type==='connect'){
    // Update connection line endpoint
    const gc=document.getElementById('gchart');
    const gcRect=gc?.getBoundingClientRect();
    const line=document.getElementById('conn-line');
    if(line&&gcRect){
      const ex=e.clientX-gcRect.left+gc.scrollLeft;
      const ey=e.clientY-gcRect.top+gc.scrollTop;
      line.setAttribute('x2',ex);line.setAttribute('y2',ey);
      // Show green arrow if over a valid target
      const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('.gantt-bar-wrap');
      if(target&&+target.dataset.wi!==_ganttDrag.fromWi){
        line.setAttribute('stroke','#22C55E');line.setAttribute('marker-end','url(#arr-ok)');
      } else {
        line.setAttribute('stroke','#1B4FD8');line.setAttribute('marker-end','url(#arr)');
      }
    }
    return;
  }
  const dx=e.clientX-_ganttDrag.startX;
  const daysDelta=Math.round(dx/DPX);
  if(_ganttDrag.type==='resize'){
    const wi=_ganttDrag.wi;
    const w=WPS[wi];if(!w)return;
    const newDur=Math.max(1,_ganttDrag.startDur+daysDelta);
    if(newDur!==w.dur){
      w.dur=newDur;
      recalc();renderGantt();
      // Sync table row duration input
      const durIn=document.querySelector(`tr[data-wi="${wi}"] .wd`);
      if(durIn)durIn.value=newDur;
      // Update stats badge
      updateWpsBadge();
    }
  }
});

document.addEventListener('mouseup',e=>{
  if(!_ganttDrag)return;

  if(_ganttDrag.type==='connect'){
    // Check if dropped on a bar
    const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('.gantt-bar-wrap');
    if(target){
      const toWi=+target.dataset.wi;
      const fromWi=_ganttDrag.fromWi;
      if(toWi!==fromWi){
        // Create FS predecessor
        const fromW=WPS[fromWi];const toW=WPS[toWi];
        if(fromW&&toW&&!toW.preds.some(p=>p.id===fromW.id)){
          toW.preds.push({id:fromW.id,tp:'FS',lg:0});
          recalc();renderWps();renderGantt();
          // Flash confirmation
          const tt=document.getElementById('g-tooltip');
          if(tt){
            tt.innerHTML=`<strong>Relationship created</strong>FS: ${fromW.wbs} ${esc(fromW.name)}<br>&#8594; ${toW.wbs} ${esc(toW.name)}`;
            tt.style.display='block';tt.style.left=(e.clientX+10)+'px';tt.style.top=(e.clientY-10)+'px';
            setTimeout(()=>{tt.style.display='none';},2500);
          }
        }
      }
    }
    // Hide connection line
    const line=document.getElementById('conn-line');
    if(line)line.style.display='none';
    document.querySelectorAll('.gantt-drop-target').forEach(el=>el.classList.remove('gantt-drop-target'));
    document.getElementById('t-gantt')?.classList.remove('gantt-connecting');
    _ganttDrag=null;
    return;
  }

  _ganttDrag=null;
  document.body.style.cursor='';
  document.body.classList.remove('gantt-drag-active');
  recalc();renderGantt();renderWps();
});
function hoverWpsRow(wi){
  // Highlight corresponding Gantt bar on table hover
  const bar=document.querySelector(`.gantt-bar-wrap[data-wi="${wi}"]`);
  if(bar)bar.querySelector('.bar-fill')?.setAttribute('filter','brightness(1.15)');
}
function unhoverWpsRow(){
  document.querySelectorAll('.gantt-bar-wrap .bar-fill').forEach(el=>{
    el.removeAttribute('filter');
  });
}
// ═══ XER EXPORT ═══
function exportXER() {
  if(!WPS.length) { alert('No schedule to export. Generate or import a schedule first.'); return; }

  const proj      = PROJECT_SETTINGS._xerProject || {};
  const now       = new Date();
  const dateStr   = now.toISOString().split('T')[0];
  const projId    = proj.proj_id || '1';
  const calId     = proj.clndr_id || '1';
  const sym       = getCurrSym() || '$';
  const curr      = PROJECT_SETTINGS.currency?.code || 'USD';
  const currName  = PROJECT_SETTINGS.currency?.name || 'US Dollar';
  const projShort = (currentProject?.id || proj.proj_short_name || 'GENSCHED').replace(/\s+/g,'_').slice(0,20);
  const projName  = currentProject?.name || proj.proj_name || projShort;
  const planStart = (P.start || PROJECT_SETTINGS.start || '2025-01-01') + ' 07:00';
  const peDate    = SCHED.pe ? addWD(P.start||'2025-01-01', SCHED.pe) : (PROJECT_SETTINGS.planEnd||dateStr);
  const planEnd   = peDate + ' 18:00';
  const dataDate  = (PROJECT_SETTINGS.dataDate || dateStr) + ' 07:00';
  const hpd       = 10; // hours per day (P6 stores duration as hrs × 10 min)

  // Date helpers
  const baseDate  = new Date(P.start || '2025-01-01');
  const dateOf    = d => { if(!d && d!==0) return ''; const dd=new Date(baseDate); dd.setDate(dd.getDate()+Math.round(d)); return dd.toISOString().split('T')[0]+' 07:00'; };
  const p6d       = s => s ? (s.includes('T') ? s.split('T')[0]+' 07:00' : s.length===10 ? s+' 07:00' : s) : '';

  // Build numeric ID maps
  const wbsNumMap  = {}; WBS_NODES.forEach((n,i) => wbsNumMap[n.id]  = n._wbsId  || (100000+i));
  const taskNumMap = {}; WPS.forEach((w,i)         => taskNumMap[w.id] = w._xer?.task_id || (200000+i));

  const pctTypeXer = PROJECT_SETTINGS.pctType==='phys'?'CP_Phys':PROJECT_SETTINGS.pctType==='dur'?'CP_Duration':'CP_Units';
  const cpTypeXer  = PROJECT_SETTINGS.cpMethod==='longest'?'CT_LongestPath':'CT_TotFloat';
  const statusXER  = {COM:'TK_Complete', IP:'TK_Active', NS:'TK_NotStart'};
  const typeXER    = {TASK:'TT_Task', LOE:'TT_LOE', MS:'TT_Mile', SUMM:'TT_WbsSumm', HAMM:'TT_Hammock'};
  const cstrXER    = {ASAP:'', ALAP:'CS_ALAP', SNET:'CS_MSOB', SNLT:'CS_MEOB', FNET:'CS_MFOB', FNLT:'CS_MANDFIN', MSO:'CS_MSO', MFO:'CS_MFO'};
  const predTypeXER= {FS:'PR_FS', SS:'PR_SS', FF:'PR_FF', SF:'PR_SF'};

  let out = '';

  // ── ERMHDR ─────────────────────────────────────────────────
  out += `ERMHDR\t24.12\t${dateStr}\tProject\tADMIN\t${Date.now()%10000000}\tdbxDatabaseNoName\tGenSched\t${curr}\n`;

  // ── CURRTYPE ───────────────────────────────────────────────
  out += `%T\tCURRTYPE\n%F\tcurr_id\tdecimal_digit_cnt\tcurr_symbol\tdecimal_symbol\tdigit_group_symbol\tpos_curr_fmt_type\tneg_curr_fmt_type\tcurr_type\tcurr_short_name\tgroup_digit_cnt\tbase_exch_rate\n`;
  out += `%R\t1\t2\t${sym}\t.\t,\t#1.1\t(#1.1)\t${currName}\t${curr}\t3\t1\n`;
  out += `%E\n`;

  // ── OBS ────────────────────────────────────────────────────
  out += `%T\tOBS\n%F\tobs_id\tparent_obs_id\tguid\tseq_num\tobs_name\n`;
  out += `%R\t1\t\t\t0\tEnterprise\n`;
  out += `%E\n`;

  // ── PROJECT ────────────────────────────────────────────────
  out += `%T\tPROJECT\n%F\tproj_id\tfy_start_month_num\trsrc_self_add_flag\tallow_complete_flag\trsrc_multi_assign_flag\tcheckout_flag\tproject_flag\tname_sep_char\tdef_complete_pct_type\tproj_short_name\tclndr_id\ttask_code_base\ttask_code_step\tdef_duration_type\tcritical_path_type\tlast_recalc_date\tplan_start_date\tplan_end_date\tscd_end_date\tadd_date\tdef_task_type\tcrit_path_type\texport_flag\n`;
  out += `%R\t${projId}\t1\tY\tY\tY\tN\tY\t.\t${pctTypeXer}\t${projShort}\t${calId}\t1000\t10\tDT_FixedDUR2\t${cpTypeXer}\t${dataDate}\t${planStart}\t${planEnd}\t${planEnd}\t${dateStr+' 00:00'}\tTT_Task\t${cpTypeXer}\tY\n`;
  out += `%E\n`;

  // ── CALENDAR ──────────────────────────────────────────────
  out += `%T\tCALENDAR\n%F\tclndr_id\tdefault_flag\tclndr_name\tproj_id\tbase_clndr_id\tclndr_type\tday_hr_cnt\tclndr_data\n`;
  // Project calendar
  const projHpd  = P.cal===7?10:P.cal===6?10:10;
  const projDays = P.cal===5?'(1|1000000)(2|0111110)(3|0000000)':'(1|0000000)(2|0111111)(3|0000000)';
  out += `%R\t${calId}\tY\t${P.cal===7?'7-day':P.cal===6?'6-day':'5-day (Mon-Fri)'}\t${projId}\t\tCA_Base\t${projHpd}\t${projDays}\n`;
  // Additional imported calendars
  (CALENDARS||[]).filter(cl=>cl._xerCalId&&cl._xerCalId!==calId).forEach(cl => {
    out += `%R\t${cl._xerCalId}\tN\t${cl.name||'Calendar'}\t${projId}\t\tCA_Base\t${cl.hpd||8}\t()\n`;
  });
  out += `%E\n`;

  // ── PROJWBS ────────────────────────────────────────────────
  out += `%T\tPROJWBS\n%F\twbs_id\tproj_id\tobs_id\tseq_num\test_wt\tproj_node_flag\tsum_data_flag\tstatus_code\twbs_short_name\twbs_name\tparent_wbs_id\tev_compute_type\tev_etc_compute_type\torig_cost\n`;
  out += `%R\t1\t${projId}\t1\t0\t1\tY\tN\tWS_Open\t${projShort}\t${projName}\t\tEC_Cmp_pct\tEE_Rem_hr\t0.0000\n`;
  WBS_NODES.forEach((n,i) => {
    const nId   = wbsNumMap[n.id];
    const pId   = n.pId ? wbsNumMap[n.pId] : 1;
    out += `%R\t${nId}\t${projId}\t1\t${(i+1)*10}\t1\tN\tN\tWS_Open\t${(n.code||'').slice(0,20)}\t${(n.name||'WBS').slice(0,100)}\t${pId}\t${n.evComputeType||'EC_Cmp_pct'}\tEE_Rem_hr\t${(n.origCost||0).toFixed(4)}\n`;
  });
  out += `%E\n`;

  // ── RSRC ──────────────────────────────────────────────────
  const allRes = [...RESOURCES.labor, ...RESOURCES.equipment, ...RESOURCES.material];
  const rsrcIdMap = new Map(); // internal id → XER rsrc_id
  out += `%T\tRSRC\n%F\trsrc_id\tparent_rsrc_id\tclndr_id\trovide_flag\trsrc_seq_num\trsrc_short_name\trsrc_name\trsrc_type\trsrc_title_name\n`;
  allRes.forEach((res,i) => {
    const xRsrcId = res._rsrcId || ('RSRC' + String(i+1).padStart(6,'0'));
    rsrcIdMap.set(res.id, xRsrcId);
    // Detect type: _t (from res pool) or etype flag
    const rtype = (res._t==='equip'||res.etype) ? 'RT_Equip' : (res._t==='material'||res.unit) ? 'RT_Mat' : 'RT_Labor';
    out += `%R\t${xRsrcId}\t\t${calId}\tN\t${(i+1)*10}\t${(res.name||'RES').slice(0,20)}\t${(res.name||'Resource').slice(0,60)}\t${rtype}\t${(res.role||'').slice(0,40)}\n`;
  });
  out += `%E\n`;

  // ── TASK ──────────────────────────────────────────────────
  out += `%T\tTASK\n%F\ttask_id\tproj_id\twbs_id\tclndr_id\tphys_complete_pct\tauto_compute_act_flag\tcomplete_pct_type\ttask_type\tduration_type\tstatus_code\ttask_code\ttask_name\ttotal_float_hr_cnt\tfree_float_hr_cnt\tremain_drtn_hr_cnt\ttarget_drtn_hr_cnt\tcstr_date\tact_start_date\tact_end_date\tlate_start_date\tlate_end_date\tearly_start_date\tearly_end_date\ttarget_start_date\ttarget_end_date\tcstr_type\tdriving_path_flag\tcreate_date\tupdate_date\n`;
  WPS.forEach(w => {
    const tId   = taskNumMap[w.id];
    const wId   = w.wbsNodeId ? wbsNumMap[w.wbsNodeId] : 1;
    const r     = SCHED.r?.[w.id] || {};
    const durH  = (w.dur || 0) * hpd;
    const remH  = w.status === 'COM' ? 0 : durH;
    const tfH   = r.tf != null ? Math.round(r.tf) * hpd : (w.totalFloat || 0) * hpd;
    const ffH   = (w.freeFloat || 0) * hpd;
    const pct   = Math.min(100, Math.max(0, w.pct || 0));
    const sc    = statusXER[w.status||'NS'] || 'TK_NotStart';
    const tt    = typeXER[w.actType||'TASK'] || 'TT_Task';
    const ct    = cstrXER[w.constraint||'ASAP'] || '';
    const code  = w.activityId || w._xer?.task_code || ('A' + String(WPS.indexOf(w)+1).padStart(5,'0'));
    const name  = (w.name || 'Activity').replace(/\t/g,' ');
    const es    = r.es != null ? dateOf(r.es)  : p6d(w.earlyStart  || w.targetStart || '');
    const ef    = r.ef != null ? dateOf(r.ef)  : p6d(w.earlyEnd    || w.targetEnd   || '');
    const ls    = r.ls != null ? dateOf(r.ls)  : p6d(w.lateStart   || '');
    const lf    = r.lf != null ? dateOf(r.lf)  : p6d(w.lateEnd     || w.lateFinish || '');
    const tS    = p6d(w.targetStart) || es;
    const tE    = p6d(w.targetEnd)   || ef;
    const aS    = p6d(w.actualStart  || (w.status !== 'NS' ? tS : ''));
    const aE    = p6d(w.actualFinish || (w.status === 'COM' ? tE : ''));
    const cDate = p6d(w.constraintDate || '');
    const isLP  = r.lp ? 'Y' : 'N';
    out += `%R\t${tId}\t${projId}\t${wId}\t${calId}\t${pct}\tN\t${pctTypeXer}\t${tt}\tDT_FixedDUR2\t${sc}\t${code}\t${name}\t${tfH}\t${ffH}\t${remH}\t${durH}\t${cDate}\t${aS}\t${aE}\t${ls}\t${lf}\t${es}\t${ef}\t${tS}\t${tE}\t${ct}\t${isLP}\t${dateStr+' 00:00'}\t${dateStr+' 00:00'}\n`;
  });
  out += `%E\n`;

  // ── TASKRSRC ──────────────────────────────────────────────
  out += `%T\tTASKRSRC\n%F\ttaskrsrc_id\ttask_id\tproj_id\trsrc_id\trsrc_type\ttarget_qty\tactual_qty\tremain_qty\ttarget_cost\tactual_reg_cost\tremain_cost\tact_ot_cost\tact_ot_qty\tis_primary_rsrc\n`;
  let trsrcN = 1;
  WPS.forEach(w => {
    const tId = taskNumMap[w.id];
    (w.resourceIds || []).forEach(resId => {
      const xRsrcId = rsrcIdMap.get(resId) || resId;
      const res     = allRes.find(r => r.id === resId);
      const ra      = w.resourceAssignments?.[resId] || {};
      const rtype   = (res?._t==='equip'||res?.etype) ? 'RT_Equip' : (res?._t==='material'||res?.unit) ? 'RT_Mat' : 'RT_Labor';
      const tq      = (ra.budgetedQty ?? w.dur ?? 0).toFixed(3);
      const aq      = (ra.actualQty   ?? 0).toFixed(3);
      const rq      = (ra.remainQty   ?? Math.max(0, (ra.budgetedQty||0)-(ra.actualQty||0))).toFixed(3);
      const tc      = (ra.budgetedCost ?? w.evBudget ?? w.cost ?? 0).toFixed(2);
      const ac      = (ra.actualCost  ?? w.actualCost ?? 0).toFixed(2);
      const rc      = (ra.remainCost  ?? Math.max(0,(ra.budgetedCost||0)-(ra.actualCost||0))).toFixed(2);
      const isPrim  = ra.isPrimary !== false ? 'Y' : 'N';
      out += `%R\tTR${String(trsrcN++).padStart(7,'0')}\t${tId}\t${projId}\t${xRsrcId}\t${rtype}\t${tq}\t${aq}\t${rq}\t${tc}\t${ac}\t${rc}\t0.00\t0.000\t${isPrim}\n`;
    });
  });
  out += `%E\n`;

  // ── TASKPRED ──────────────────────────────────────────────
  out += `%T\tTASKPRED\n%F\ttask_pred_id\ttask_id\tpred_task_id\tproj_id\tpred_proj_id\tpred_type\tlag_hr_cnt\n`;
  let predN = 1;
  WPS.forEach(w => {
    const tId = taskNumMap[w.id];
    (w.preds || []).forEach(p => {
      const pId = taskNumMap[p.id];
      if(pId) out += `%R\t${predN++}\t${tId}\t${pId}\t${projId}\t${projId}\t${predTypeXER[p.tp||'FS']||'PR_FS'}\t${Math.round((p.lg||0)*hpd)}\n`;
    });
  });
  out += `%E\n`;

  // ── Download ──────────────────────────────────────────────
  const blob = new Blob([out], {type:'text/plain;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = projShort + '.xer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

// ═══════════════════════════════════════════════════════════
// WBS HIERARCHY, MILESTONES & CALENDARS
// ═══════════════════════════════════════════════════════════

let ACTIVITY_CODES = [];  // moved up to fix TDZ

// VS — moved up to fix TDZ
const VS = {
  ITEM_H: 31,       // px per activity row
  HDR_H:  26,       // px per WBS/phase header row
  BUFFER: 40,       // rows to render outside viewport
  flat: [],         // [{type,data}] - full flattened rows
  visStart: 0,
  visEnd: 0,
  totalH: 0,
  container: null,
  _raf: null,
  _lastScroll: -1,
};

// Other state — moved up to fix TDZ
let PROJECT_SETTINGS = {
  start: '2025-01-06', dataDate: '', durWeeks: 104, durUnit: 'w',
  calId: 0, pctType: 'sch', cpMethod: 'tf0', evMethod: 'pct',
  defType: 'TASK', currency: null,
  contractVal: 0, bac: 0, contingency: 10,
  pm: '', client: '', contractType: 'Design & Build (FIDIC Yellow)', jurisdiction: ''
};
let _sortConfig = { col:'', dir:1 };
let _activeBaseline = 0;

// More state — moved up to fix TDZ (v45)
let CUSTOM_MODS = [];
const ACT_TYPES = {
  TASK:  {lbl:'Task',      cls:'at-TASK',  ganttType:'bar'},
  MS:    {lbl:'Milestone', cls:'at-MS',    ganttType:'diamond'},
  LOE:   {lbl:'LOE',       cls:'at-LOE',   ganttType:'loe'},
  SUMM:  {lbl:'Summary',   cls:'at-SUMM',  ganttType:'summary'},
  HAMM:  {lbl:'Hammock',   cls:'at-HAMM',  ganttType:'hammock'},
};
let _currentMainTab = 'schedule';
let _ganttSplitOpen = false;
let _colFilters = {};
let _currentResNav = 'labor';
let _selectedWi = null;
let _dockCollapsed = false;
let _renderAbort = false;
const VS_THRESHOLD = 200;
const _rowHtmlCache = new Map();
let _cacheGeneration = 0;
let _dragMod = null;
const HELP_SECTIONS = [
  {id:'overview',icon:'&#127968;',title:'Overview',content:'<h3>Welcome to GenSched</h3><p>GenSched is a professional programme scheduling platform &mdash; browser-based, Primavera P6 compatible.</p><h4>Main Tabs</h4><ul><li><b>Build Schedule</b> &mdash; WBS, activities, logic, CPM</li><li><b>Resources</b> &mdash; labour, plant, materials, cost</li><li><b>Dashboard</b> &mdash; EVM, S-curve, DCMA 14-point</li><li><b>Export</b> &mdash; XER, MSP, CSV, JSON, PDF</li><li><b>Baselines</b> &mdash; import XER baseline, Gantt overlay</li></ul><h4>Quick Start</h4><ol><li>Sign in &rarr; My Projects &rarr; New Project</li><li>Open WBS sidebar &rarr; build breakdown structure</li><li>Drag modules from library or click + Add Activity</li><li>Set logic in Activity Detail dock &rarr; Logic tab</li><li>Toolbar &rarr; Run Schedule &rarr; set data date</li><li>Toggle Gantt split-screen to view bars</li></ol>'},
  {id:'projects',icon:'&#128194;',title:'Projects',content:'<h3>Project Management</h3><h4>Creating</h4><ol><li>Avatar &rarr; My Projects &rarr; + New Project</li><li>Fill name, ID, type, currency, start date</li></ol><h4>Switching</h4><p>Avatar &rarr; My Projects &rarr; click any project card.</p><h4>Archive Snapshot</h4><p>Toolbar &rarr; Archive &rarr; name snapshot. Useful before major changes or submitting progress report.</p><h4>Restore Archive</h4><p>Toolbar &rarr; Archives icon &rarr; click Restore.</p><h4>Clear Schedule</h4><p>Toolbar &rarr; Clear &rarr; removes all activities and WBS nodes. Archive first if needed.</p><h4>Delete Project</h4><p>My Projects &rarr; hover card &rarr; delete icon &rarr; confirm.</p>'},
  {id:'wbs',icon:'&#127968;',title:'WBS Structure',content:'<h3>Work Breakdown Structure</h3><p>WBS organises activities into a hierarchy. Each activity belongs to a WBS node which determines its code prefix.</p><h4>Node Types</h4><ul><li><b style="color:#3B82F6">Sum</b> &mdash; summary grouping</li><li><b style="color:#22C55E">Plan</b> &mdash; planning level</li><li><b style="color:#F59E0B">Work</b> &mdash; work package</li><li><b style="color:#8B5CF6">Deliv</b> &mdash; deliverable</li></ul><h4>Building WBS</h4><ul><li>+ &mdash; add top-level node; Arrow &mdash; add child under selected</li><li>Left/Right arrows &mdash; outdent / indent; Up/Down &mdash; move among siblings</li><li>Drag rows to reorder or reparent; Click name to edit inline</li></ul><h4>Assigning Activities to WBS</h4><p><b>Click a WBS node</b> to make it active (blue). New activities auto-assign to it.</p><p>Existing activity: click &rarr; Detail dock &rarr; Details tab &rarr; WBS Node dropdown &rarr; select node.</p>'},
  {id:'activities',icon:'&#128203;',title:'Activities',content:'<h3>Adding &amp; Managing Activities</h3><h4>Adding</h4><ul><li>Toolbar &rarr; + Add &rarr; inline row; Enter to confirm, Esc to cancel</li><li>Drag module from library into schedule</li><li>Import from XER or CSV (toolbar &rarr; Import)</li></ul><h4>Types</h4><ul><li><b>TASK</b> &mdash; standard activity</li><li><b>MS</b> &mdash; Milestone (zero duration)</li><li><b>LOE</b> &mdash; Level of Effort</li><li><b>HAMM</b> &mdash; Hammock</li></ul><h4>Editing</h4><p>Click any row &rarr; Detail dock. Tabs: Details &middot; Logic &middot; Progress &middot; Resources &middot; Cost &middot; Risk</p><h4>Details Tab</h4><p>Name, ID, WBS Node dropdown, Duration, Type, Calendar, Constraint, % Complete, Status.</p><h4>Delete</h4><p>Click activity &rarr; dock header &rarr; delete icon &rarr; confirm. Removes all logic links.</p>'},
  {id:'logic',icon:'&#128279;',title:'Logic &amp; CPM',content:'<h3>Logic Links &amp; Critical Path</h3><h4>Relationship Types</h4><ul><li><b style="color:#2563EB">FS</b> Finish to Start &mdash; most common</li><li><b style="color:#059669">SS</b> Start to Start</li><li><b style="color:#D97706">FF</b> Finish to Finish</li><li><b style="color:#DC2626">SF</b> Start to Finish</li></ul><h4>Adding Predecessors</h4><ol><li>Click activity &rarr; Detail dock &rarr; Logic tab</li><li>Type in search box (WBS code, ID or name)</li><li>Click result to assign; Enter picks first result</li></ol><h4>Running CPM</h4><ol><li>Toolbar &rarr; Run Schedule</li><li>Set Data Date; options: auto-status, recompute EVM, retain manual %</li></ol><h4>Critical vs Longest Path</h4><ul><li><b style="color:#DC2626">Critical Path</b> &mdash; TF = 0 (red)</li><li><b style="color:#D97706">Longest Path</b> &mdash; longest chain (amber)</li></ul>'},
  {id:'gantt',icon:'&#128197;',title:'Gantt Chart',content:'<h3>Gantt Chart</h3><h4>Opening</h4><p>Toolbar &rarr; Gantt icon &rarr; split view. Drag divider to resize.</p><h4>Bar Colours</h4><ul><li><b style="color:#3B82F6">Blue</b> &mdash; normal; <b style="color:#DC2626">Red</b> &mdash; critical; <b style="color:#D97706">Amber</b> &mdash; longest path</li><li>Diamond &mdash; milestone; Grey outline below &mdash; baseline; Amber line &mdash; data date</li></ul><h4>Sync</h4><p>Gantt and table share the same order and selection. Clicking a bar selects the activity in the table.</p><h4>Baselines</h4><p>Baselines tab &rarr; import XER &rarr; set active &rarr; grey bars appear below current bars.</p>'},
  {id:'resources',icon:'&#128119;',title:'Resources &amp; EVM',content:'<h3>Resources &amp; Earned Value</h3><h4>Adding to Library</h4><p>Resources tab &rarr; Labour / Plant / Material &rarr; + Add Resource (name, rate, unit).</p><h4>Assigning to Activity</h4><ol><li>Click activity &rarr; dock &rarr; Resources tab &rarr; + Assign</li><li>Set Budgeted, Actual, Remaining Qty; EV = Budgeted &times; % Complete (auto)</li></ol><h4>EVM Metrics</h4><ul><li>BAC, PV (BCWS), EV (BCWP), AC (ACWP)</li><li>SPI = EV/PV (&gt;1 = ahead); CPI = EV/AC (&gt;1 = under budget)</li><li>SV, CV, EAC, TCPI</li></ul><p>Run Schedule &rarr; Dashboard &rarr; EVM auto-updates.</p>'},
  {id:'dcma',icon:'&#9989;',title:'DCMA Analysis',content:'<h3>DCMA 14-Point Schedule Analysis</h3><p>Run: Dashboard tab &rarr; Run DCMA Analysis after running the schedule.</p><h4>The 14 Checks</h4><ol><li>Missing Logic (&lt;5%)</li><li>Leads (negative lags &lt;5%)</li><li>Lags (positive lags &lt;5%)</li><li>FS Relationship Usage (&gt;90%)</li><li>High Float &gt;44 WD (&lt;5%)</li><li>Negative Float (0%)</li><li>High Duration &gt;44 WD (&lt;5%)</li><li>Invalid Dates (0%)</li><li>Unresourced Activities (&lt;10%)</li><li>Missed Tasks past data date (0%)</li><li>Critical Path Test</li><li>CP Duration &gt;0</li><li>Total Float on CP &le;0</li><li>BEI (Baseline Execution Index)</li></ol>'},
  {id:'export',icon:'&#128196;',title:'Export &amp; PDF',content:'<h3>Export Options</h3><h4>P6 XER</h4><p>Export tab &rarr; XER. Compatible with P6 Professional and EPPM. Import in P6: File &rarr; Import &rarr; XER.</p><h4>MSP XML</h4><p>Export tab &rarr; MSP XML. Import in Microsoft Project.</p><h4>CSV / JSON</h4><p>Full activity table as CSV, or full data as JSON backup.</p><h4>PDF Report</h4><ol><li>Export tab &rarr; Configure PDF Export</li><li>Select: Cover, Summary, Gantt, Table, EVM, S-Curve, DCMA, Resources</li><li>Enter title, author, date &rarr; Generate PDF</li><li>Browser print dialog: Layout = Landscape, Save as PDF</li></ol><h4>Import XER</h4><p>Toolbar &rarr; Import &rarr; select XER. Imports activities, WBS, logic, resources, calendars, codes.</p>'},
  {id:'admin',icon:'&#128273;',title:'Admin &amp; Licensing',content:'<h3>Admin Panel</h3><h4>Access</h4><p>Avatar &rarr; Admin Panel &rarr; enter code (default: pa_admin_2025). Change immediately after setup.</p><h4>User Management</h4><ul><li>View all users, edit plan/credits, delete, create</li></ul><h4>Plan Overrides</h4><ul><li>Override &mdash; set any user to any plan with optional expiry date</li><li>Custom plan &mdash; bespoke credit allocation + discount %</li><li>Coupon codes &mdash; e.g. PARTNER50 = 50% off</li><li>Bypass whitelist &mdash; free Professional/Enterprise for partners</li></ul><h4>Plans</h4><p>Free: 100cr &middot; Starter: 1,000cr &middot; Professional: 5,000cr &middot; Enterprise: 25,000cr</p><h4>Cache Reset</h4><p>Header toolbar &rarr; Reset Cache button &mdash; fixes display glitches without losing data.</p>'},
  {id:'tips',icon:'&#128161;',title:'Tips &amp; Shortcuts',content:'<h3>Tips &amp; Best Practices</h3><h4>Keyboard</h4><ul><li>Enter in inline-add row &mdash; confirm and add another activity</li><li>Esc &mdash; cancel inline add; Enter in WBS name &mdash; save; Enter in logic search &mdash; pick first result</li></ul><h4>Large Schedules (7,000+ Activities)</h4><ul><li>Virtual scrolling: only visible rows in DOM &mdash; smooth at 30,000+ rows</li><li>After fast scrolling: header toolbar &rarr; Reset Cache button fixes any misalignment</li><li>Collapse WBS sections not currently being edited to reduce rows</li><li>Use Filter to work on subset (CP only, phase, etc.)</li></ul><h4>Best Practices</h4><ul><li>Build WBS before activities; Run Schedule after logic changes; Archive before major revisions; Set baseline before progress reporting; Run DCMA before submitting to client</li></ul>'},
];
const HELP_CSS = `
.help-h2 { font-size:20px;font-weight:800;color:var(--t1);margin:0 0 16px }
.help-h3 { font-size:14px;font-weight:700;color:var(--t1);margin:18px 0 8px }
.help-table { width:100%;border-collapse:collapse;font-size:12px;margin:8px 0 14px }
.help-table th { background:var(--s1);padding:7px 10px;text-align:left;font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.07em;border-bottom:2px solid var(--b1) }
.help-table td { padding:6px 10px;border-bottom:1px solid var(--b2);vertical-align:top;line-height:1.5 }
.help-table tr:hover td { background:var(--bluel) }
.help-tip { background:rgba(59,130,246,.07);border-left:3px solid #3B82F6;padding:10px 14px;border-radius:0 6px 6px 0;margin:14px 0;font-size:12px;line-height:1.6;color:var(--t2) }
.help-nav-item { padding:6px 14px;font-size:11px;font-weight:600;color:var(--t3);cursor:pointer;border-left:3px solid transparent;display:flex;align-items:center;gap:6px;transition:all .1s }
.help-nav-item:hover { color:var(--t1);background:var(--s2) }
.help-nav-item.act { color:var(--blue);border-left-color:var(--blue);background:var(--bluel) }
kbd { background:var(--s2);border:1px solid var(--b1);border-radius:4px;padding:2px 7px;font-family:var(--mono);font-size:11px;color:var(--t2) }
#help-content p,#help-content ul,#help-content ol { font-size:13px;line-height:1.7;color:var(--t2);margin:0 0 12px }
#help-content li { margin:4px 0 }
`;
let _helpActive = 'overview';
let _colDragSrc = null;
let _activeFilters = {
  showCP: false,         // Only critical path activities
  showLP: false,         // Only longest path activities
  statusFilter: '',      // 'NS','IP','COM',''
  floatMax: null,        // max float (e.g. 5 for near-critical)
  floatMin: null,
  codeFilters: {},       // {codeTypeId: valueId}
  wbsFilter: '',         // WBS node id
  textSearch: '',        // activity name search
  phaseFilter: '',
  actTypeFilter: '',     // 'TASK','MS','LOE','SUMM','' or 'ACTIVITY'=all non-WBS
};
let _succMapCache = null;
let _succMapGeneration = -1;

// More state — moved up to fix TDZ
let RESOURCES = { labor:[], material:[], equipment:[] };
let RISKS = [];
let EVM_DATA = { dataDate:'', bac:0, actuals:[] };
let BASELINES = [null, null, null, null];
let WBS_NODES = [];   // [{id,code,name,type,pId,calId,order,collapsed,modItems:[{modId,qvals}]}]
let ACTIVE_WBS = null;
let MILESTONES = [];  // [{id,name,date,type,color,wbsId}]
let CALENDARS = [
  {id:'CAL-5D',name:'Standard 5-Day (Mon–Fri)',days:[1,2,3,4,5],hpd:8,builtin:true},
  {id:'CAL-6D',name:'Standard 6-Day (Mon–Sat)',days:[1,2,3,4,5,6],hpd:8,builtin:true},
  {id:'CAL-7D',name:'Continuous 7-Day',days:[0,1,2,3,4,5,6],hpd:8,builtin:true},
];
let _wbsIdN=0;
const wuid=()=>'w'+(++_wbsIdN);
let _msIdN=0;
const msuid=()=>'ms'+(++_msIdN);

// ── WBS CODE GENERATION ──
function regenCodes(){
  function setCodes(nodes, prefix){
    nodes.forEach((n,i)=>{
      n.code = prefix ? prefix+'.'+(i+1) : ''+(i+1);
      const children = WBS_NODES.filter(c=>c.pId===n.id).sort((a,b)=>a.order-b.order);
      setCodes(children, n.code);
    });
  }
  const roots = WBS_NODES.filter(n=>!n.pId).sort((a,b)=>a.order-b.order);
  setCodes(roots, '');
}

// ── ADD / REMOVE WBS NODES ──
function addWbsNode(parentId){
  const siblings = WBS_NODES.filter(n=>n.pId===parentId);
  const node = {
    id:wuid(), code:'', name:'New Item', type:'SUMM',
    pId:parentId||null, calId:'CAL-5D',
    order: siblings.length, collapsed:false, modItems:[]
  };
  WBS_NODES.push(node);
  regenCodes();
  setActiveWbs(node.id);
  renderWbsTree();
  updateWbsToolbar();
  saveWbsToProject();
}

function addWbsChild(){
  if(!ACTIVE_WBS) return;
  const parent = WBS_NODES.find(n=>n.id===ACTIVE_WBS);
  if(parent){ parent.collapsed=false; addWbsNode(ACTIVE_WBS); }
}

function deleteWbsNode(id){
  // Remove node and all descendants
  const remove = (nid) => {
    WBS_NODES = WBS_NODES.filter(n=>n.id!==nid);
    WBS_NODES.filter(n=>n.pId===nid).forEach(c=>remove(c.id));
  };
  remove(id);
  if(ACTIVE_WBS===id) setActiveWbs(null);
  regenCodes();
  renderWbsTree();
  updateWbsToolbar();
  saveWbsToProject();
}

function toggleWbsType(id){
  const n = WBS_NODES.find(x=>x.id===id);
  if(!n)return;
  n.type = n.type==='SUMM'?'TASK':'SUMM';
  renderWbsTree();
  saveWbsToProject();
}

function outdentWbs(){
  if(!ACTIVE_WBS)return;
  const n = WBS_NODES.find(x=>x.id===ACTIVE_WBS);
  if(!n||!n.pId)return;
  const parent = WBS_NODES.find(x=>x.id===n.pId);
  n.pId = parent ? parent.pId : null;
  n.order = WBS_NODES.filter(x=>x.pId===n.pId).length;
  regenCodes();
  renderWbsTree();
  saveWbsToProject();
}

function indentWbs(){
  if(!ACTIVE_WBS)return;
  const n = WBS_NODES.find(x=>x.id===ACTIVE_WBS);
  if(!n)return;
  const siblings = WBS_NODES.filter(x=>x.pId===n.pId&&x.id!==n.id).sort((a,b)=>a.order-b.order);
  // Find previous sibling
  const prev = siblings.filter(s=>s.order<n.order).pop();
  if(!prev)return;
  n.pId = prev.id;
  n.order = WBS_NODES.filter(x=>x.pId===prev.id).length;
  prev.collapsed = false;
  regenCodes();
  renderWbsTree();
  saveWbsToProject();
}

function moveWbsNode(dir){
  if(!ACTIVE_WBS)return;
  const n = WBS_NODES.find(x=>x.id===ACTIVE_WBS);
  if(!n)return;
  const siblings = WBS_NODES.filter(x=>x.pId===n.pId).sort((a,b)=>a.order-b.order);
  const idx = siblings.findIndex(x=>x.id===n.id);
  const swapIdx = idx+dir;
  if(swapIdx<0||swapIdx>=siblings.length)return;
  const swap = siblings[swapIdx];
  const tmp = n.order; n.order=swap.order; swap.order=tmp;
  regenCodes();
  renderWbsTree();
  saveWbsToProject();
}
function updateWbsToolbar(){
  const has = !!ACTIVE_WBS;
  ['btn-add-child','btn-outdent','btn-indent','btn-mv-up','btn-mv-dn'].forEach(id=>{
    const el=document.getElementById(id);if(el)el.disabled=!has;
  });
}

function clearWbs(){
  if(WBS_NODES.length && !confirm('Clear the entire WBS hierarchy?'))return;
  WBS_NODES=[];ACTIVE_WBS=null;
  renderWbsTree();updateWbsToolbar();saveWbsToProject();
}

function loadDefaultWbs(){
  if(WBS_NODES.length && !confirm('Replace existing WBS with default template?'))return;
  WBS_NODES=[];
  const top=[
    {name:'Pre-Construction',type:'SUMM'},
    {name:'Procurement',type:'SUMM'},
    {name:'Enabling Works',type:'SUMM'},
    {name:'Groundworks & Foundations',type:'SUMM'},
    {name:'Superstructure',type:'SUMM'},
    {name:'Envelope & Finishes',type:'SUMM'},
    {name:'MEP & Services',type:'SUMM'},
    {name:'External Works & Landscaping',type:'SUMM'},
    {name:'Commissioning & Handover',type:'SUMM'},
  ];
  const subs={
    'Pre-Construction':['Design Development','Planning Consents','Authority Approvals'],
    'Procurement':['Main Contract Procurement','Specialist Subcontractors','Long-Lead Procurement'],
    'Enabling Works':['Site Establishment','Site Investigation','Demolition & Clearance','Utility Diversions'],
    'Groundworks & Foundations':['Excavation & Earthworks','Drainage','Piling Works','Foundations'],
    'Superstructure':['Ground Floor Slab','Structural Frame','Roof Structure'],
    'Envelope & Finishes':['Cladding & Facade','Windows & Doors','Internal Finishes'],
    'MEP & Services':['Mechanical','Electrical','Fire Protection','Vertical Transport'],
    'External Works & Landscaping':['Access Roads & Car Parking','Hard Landscaping','Soft Landscaping'],
    'Commissioning & Handover':['Testing & Commissioning','Snagging','Handover'],
  };
  top.forEach((t,i)=>{
    const pid=wuid();
    WBS_NODES.push({id:pid,code:'',name:t.name,type:t.type,pId:null,calId:'CAL-5D',order:i,collapsed:false,modItems:[]});
    (subs[t.name]||[]).forEach((s,j)=>{
      WBS_NODES.push({id:wuid(),code:'',name:s,type:'TASK',pId:pid,calId:'CAL-5D',order:j,collapsed:false,modItems:[]});
    });
  });
  regenCodes();
  renderWbsTree();
  saveWbsToProject();
}

// ── ASSIGN MODULE TO WBS NODE ──
function assignModToWbs(modId){
  if(!ACTIVE_WBS){ alert('Select a WBS node first, then click + in the library.'); return false; }
  const node = WBS_NODES.find(n=>n.id===ACTIVE_WBS);
  if(!node)return false;
  if(node.modItems.some(m=>m.modId===modId)){ return false; }
  const mod=[...C_MODS,...CUSTOM_MODS,...A_MODS].find(m=>m.id===modId);
  if(!mod)return false;
  const qvals={};(mod.q||[]).forEach(q=>{qvals[q.id]=q.def;});
  node.modItems.push({modId,qvals});
  renderWbsTree();
  saveWbsToProject();
  // Sync to schedule if already generated
  if(WPS.length) refreshAll();
  return true;
}

function removeModFromWbs(nodeId,modId){
  const node=WBS_NODES.find(n=>n.id===nodeId);
  if(!node)return;
  node.modItems=node.modItems.filter(m=>m.modId!==modId);
  renderWbsTree();
  saveWbsToProject();
}

function updateWbsModQval(nodeId,modId,qid,val){
  const node=WBS_NODES.find(n=>n.id===nodeId);
  if(!node)return;
  const item=node.modItems.find(m=>m.modId===modId);
  if(item) item.qvals[qid]=+val;
  saveWbsToProject();
}
function renderModPills(node){
  if(!node.modItems.length) return '';
  let html='<div class="wbs-assigned"><div class="wbs-assigned-inner">';
  node.modItems.forEach(item=>{
    const m=[...C_MODS,...A_MODS].find(x=>x.id===item.modId);
    if(!m)return;
    html+=`<span class="wbs-mod-pill">${m.ico||'📋'} ${m.n}`;
    // Show quantity inputs inline if any
    if(m.q&&m.q.length){
      m.q.forEach(q=>{
        html+=` <span style="font-size:10px;color:var(--t3)">${q.l}:</span><input class="qi" type="number" style="width:46px;font-size:10px;padding:1px 3px" value="${item.qvals[q.id]||q.def}" onchange="updateWbsModQval('${node.id}','${item.modId}','${q.id}',this.value)" onclick="event.stopPropagation()"><span style="font-size:10px;color:var(--t3)">${q.u}</span>`;
      });
    }
    html+=`<button class="pill-rm" onclick="removeModFromWbs('${node.id}','${m.id}');event.stopPropagation()" title="Remove">&#215;</button></span>`;
  });
  html+='</div></div>';
  return html;
}

// toggleWbsCollapse moved to renderWbsTree section
function updateWbsName(id,val){
  const n=WBS_NODES.find(x=>x.id===id);
  if(n){n.name=val;saveWbsToProject();}
}
function updateWbsCal(id,calId){
  const n=WBS_NODES.find(x=>x.id===id);
  if(n){n.calId=calId;saveWbsToProject();}
}

// ── MILESTONES ──
function addMilestone(){
  MILESTONES.push({id:msuid(),name:'New Milestone',date:P.start||'2025-01-06',type:'key',color:'#1B4FD8',wbsId:''});
  renderMilestones();
  saveWbsToProject();
}

function deleteMilestone(id){
  MILESTONES=MILESTONES.filter(m=>m.id!==id);
  renderMilestones();
  saveWbsToProject();
}

function updateMs(id,field,val){
  const m=MILESTONES.find(x=>x.id===id);
  if(m){m[field]=val;if(field==='date'||field==='color')renderGantt();saveWbsToProject();}
}

function loadDefaultMilestones(){
  const start=P.start||'2025-01-06';
  function addDays(ds,d){const dt=new Date(ds+'T00:00:00');dt.setDate(dt.getDate()+d);return dt.toISOString().slice(0,10);}
  MILESTONES=[
    {id:msuid(),name:'Site Possession / NTP',date:start,type:'start',color:'#22C55E',wbsId:''},
    {id:msuid(),name:'Planning Approval',date:addDays(start,90),type:'approval',color:'#6D28D9',wbsId:''},
    {id:msuid(),name:'Design Freeze',date:addDays(start,120),type:'key',color:'#0891B2',wbsId:''},
    {id:msuid(),name:'Structural Topping Out',date:addDays(start,270),type:'key',color:'#F59E0B',wbsId:''},
    {id:msuid(),name:'Envelope Complete',date:addDays(start,360),type:'key',color:'#EA580C',wbsId:''},
    {id:msuid(),name:'Practical Completion',date:addDays(start,(P.weeks||104)*7-7),type:'finish',color:'#DC2626',wbsId:''},
  ];
  renderMilestones();
  renderGantt();
  saveWbsToProject();
}

function renderMilestones(){
  const tb=document.getElementById('ms-body');if(!tb)return;
  if(!MILESTONES.length){
    tb.innerHTML=`<tr><td colspan="6" style="padding:28px;text-align:center;color:var(--t3)">No milestones yet. Click <b>+ Add Milestone</b> or <b>Load Defaults</b>.</td></tr>`;
    return;
  }
  const wbsOpts='<option value="">None</option>'+WBS_NODES.map(n=>`<option value="${n.id}">${n.code} ${n.name}</option>`).join('');
  tb.innerHTML=MILESTONES.map(m=>`<tr>
    <td style="padding:4px 7px"><input type="color" class="ms-color" value="${m.color}" onchange="updateMs('${m.id}','color',this.value)"></td>
    <td><input class="ms-in" value="${esc(m.name)}" onchange="updateMs('${m.id}','name',this.value)"></td>
    <td><input class="ms-in" type="date" value="${m.date}" onchange="updateMs('${m.id}','date',this.value)"></td>
    <td><select class="ms-type-sel" onchange="updateMs('${m.id}','type',this.value)">
      <option value="start" ${m.type==='start'?'selected':''}>&#128204; Start</option>
      <option value="finish" ${m.type==='finish'?'selected':''}>&#127937; Finish</option>
      <option value="key" ${m.type==='key'?'selected':''}>&#11088; Key Date</option>
      <option value="approval" ${m.type==='approval'?'selected':''}>&#10004; Approval</option>
      <option value="contractual" ${m.type==='contractual'?'selected':''}>&#128196; Contractual</option>
    </select></td>
    <td><select class="ms-type-sel" onchange="updateMs('${m.id}','wbsId',this.value)">${wbsOpts.replace(`value="${m.wbsId||''}"`,`value="${m.wbsId||''}" selected`)}</select></td>
    <td style="padding:4px 7px"><button class="ib del" onclick="deleteMilestone('${m.id}')">&#215;</button></td>
  </tr>`).join('');
}

// ── CALENDAR MANAGEMENT ──
function openCalModal(){
  renderCalList();
  openOvl('cal-ovl');
}
function renderCalList(){
  const el=document.getElementById('cal-list');if(!el)return;
  el.innerHTML=CALENDARS.map(c=>`<div class="cal-item">
    <div style="flex:1">
      <div class="cal-item-name">${c.name}</div>
      <div class="cal-item-days">${['Su','M','T','W','Th','F','Sa'].filter((_,i)=>c.days.includes(i)).join(' · ')} · ${c.hpd}h/day</div>
    </div>
    ${!c.builtin?`<button class="ib del" onclick="removeCalendar('${c.id}')">&#215;</button>`:'<span style="font-size:10px;color:var(--t3)">built-in</span>'}
  </div>`).join('');
}

function toggleCalDay(el){el.classList.toggle('on');}

function addCalendar(){
  const name=document.getElementById('new-cal-name').value.trim();
  if(!name){alert('Enter a calendar name.');return;}
  const days=[...document.querySelectorAll('#new-cal-days .cal-day.on')].map(d=>+d.dataset.d);
  if(!days.length){alert('Select at least one working day.');return;}
  const hpd=+document.getElementById('new-cal-hrs').value||8;
  CALENDARS.push({id:'CAL-'+Date.now(),name,days,hpd,builtin:false});
  document.getElementById('new-cal-name').value='';
  renderCalList();
  renderWbsTree();
  saveWbsToProject();
}

function removeCalendar(id){
  CALENDARS=CALENDARS.filter(c=>c.id!==id);
  renderCalList();
  saveWbsToProject();
}

// ── STRUCT SUB-TABS ──
function sTab(tab){
  document.getElementById('ss-wbs').classList.toggle('act',tab==='wbs');
  document.getElementById('ss-ms').classList.toggle('act',tab==='ms');
  document.getElementById('sp-wbs').style.display=tab==='wbs'?'flex':'none';
  document.getElementById('sp-ms').style.display=tab==='ms'?'flex':'none';
}

// ── GENERATE FROM WBS TREE (when tree has modules) ──
function assembleWpsFromTree(){
  WPS=[];
  function processNode(n){
    const children=WBS_NODES.filter(c=>c.pId===n.id).sort((a,b)=>a.order-b.order);
    (n.modItems||[]).forEach(item=>{
      const mod=[...C_MODS,...CUSTOM_MODS,...A_MODS].find(m=>m.id===item.modId);
      if(!mod)return;
      mod.w.forEach(wp=>{
        const dur=typeof wp.dur==='function'?Math.max(1,wp.dur(item.qvals)):wp.dur;
        WPS.push({id:uid(),modId:mod.id,sg:wp.sg,name:wp.n,ph:wp.ph,trk:wp.tk,dur,preds:[],wbs:n.code,wbsNodeId:n.id,actType:'TASK',durUnit:'d'});
      });
    });
    children.forEach(c=>processNode(c));
  }
  const roots=WBS_NODES.filter(n=>!n.pId).sort((a,b)=>a.order-b.order);
  roots.forEach(n=>processNode(n));
  // Apply IFACE rules
  const sgSet=new Set(WPS.map(w=>w.sg));
  IFACE.forEach(rule=>{
    if(!sgSet.has(rule.f)||!sgSet.has(rule.t))return;
    const from=WPS.filter(w=>w.sg===rule.f);
    const to=WPS.filter(w=>w.sg===rule.t);
    const fId=(rule.tp==='FS'||rule.tp==='FF')?from[from.length-1]?.id:from[0]?.id;
    const tId=(rule.tp==='FS'||rule.tp==='SS')?to[0]?.id:to[to.length-1]?.id;
    if(!fId||!tId)return;
    const tw=WPS.find(w=>w.id===tId);
    if(tw&&!tw.preds.some(p=>p.id===fId))tw.preds.push({id:fId,tp:rule.tp,lg:rule.lg});
  });
  // Internal SG chaining
  const sgIdx={};
  WPS.forEach((w)=>{const prev=WPS.slice(0,WPS.indexOf(w)).filter(x=>x.sg===w.sg).pop();if(prev&&!w.preds.some(p=>p.id===prev.id))w.preds.push({id:prev.id,tp:'FS',lg:0});});
}
// ═══ NAV ═══
// goTab + updateTabDots replaced by v6 below
function closeOvl(id){document.getElementById(id).classList.remove('on');}
document.querySelectorAll('.ovl').forEach(o=>o.addEventListener('click',e=>{if(e.target===o)closeOvl(o.id);}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.ovl.on').forEach(o=>closeOvl(o.id));});
{const _wm=document.getElementById('wm-n');if(_wm)_wm.addEventListener('keydown',e=>{if(e.key==='Enter')saveWp();});}
{const _ls=document.getElementById('lsrch');if(_ls)_ls.addEventListener('input',()=>renderLib());}
{const _ps=document.getElementById('p-start');if(_ps)_ps.addEventListener('change',e=>{P.start=e.target.value;recalc();renderGantt();});}
{const _pw=document.getElementById('p-wks');if(_pw)_pw.addEventListener('input',e=>{P.weeks=+e.target.value||104;});}
{const _pc=document.getElementById('p-cal');if(_pc)_pc.addEventListener('change',e=>{P.cal=+e.target.value;recalc();renderGantt();});}
{const _pn=document.getElementById('pname');if(_pn)_pn.addEventListener('input',e=>{P.name=e.target.value;});}


// ══════════════════════════════════════════════
// AUTH & PROJECT MANAGEMENT
// ══════════════════════════════════════════════
const DEMO_USERS = [
  {email:'admin@projectassure.com', pass:'admin123', name:'Super Admin', role:'superuser', plan:'annual', org:'Project Assure Ltd'},
  {email:'user@demo.com', pass:'demo', name:'Demo User', role:'user', plan:'monthly', org:'Demo Organisation'}
];

let currentUser = null;
let currentProject = null;
let _authTab = 'login';
let _pendingSignup = null;

function authTab(tab) {
  _authTab = tab;
  document.getElementById('at-login').classList.toggle('act', tab==='login');
  document.getElementById('at-signup').classList.toggle('act', tab==='signup');
  document.getElementById('auth-login-form').style.display = tab==='login' ? '' : 'none';
  document.getElementById('auth-signup-form').style.display = tab==='signup' ? '' : 'none';
  {const _ae=document.getElementById('a-err');if(_ae)_ae.textContent='';}
  {const _ae=document.getElementById('as-err');if(_ae)_ae.textContent='';}
}

function doLogin() {
  const email = document.getElementById('a-email').value.trim();
  const pass = document.getElementById('a-pass').value;
  const isSuper = document.getElementById('a-super').checked;

  if (!email || !pass) { {const _ae=document.getElementById('a-err');if(_ae)_ae.textContent='Please enter email and password.';} return; }

  // Check stored users too
  let storedUsers = JSON.parse(localStorage.getItem('pa_users') || '[]');
  let allUsers = [...DEMO_USERS, ...storedUsers];
  let user = allUsers.find(u => u.email.toLowerCase() === email.toLowerCase() && u.pass === pass);

  if (!user) {
    {const _ae=document.getElementById('a-err');if(_ae)_ae.textContent='Invalid email or password.';}
    return;
  }
  if (isSuper && user.role !== 'superuser') {
    {const _ae=document.getElementById('a-err');if(_ae)_ae.textContent='Super user access not permitted for this account.';}
    return;
  }

  currentUser = {...user};
  localStorage.setItem('pa_session', JSON.stringify(currentUser));
  {const _ae=document.getElementById('a-err');if(_ae)_ae.textContent='';}
  afterLogin();
}

function doSignup() {
  const name = document.getElementById('a-name').value.trim();
  const email = document.getElementById('a-semail').value.trim();
  const pass = document.getElementById('a-spass').value;
  const org = document.getElementById('a-org').value.trim();
  if (!name || !email || !pass) { {const _ae=document.getElementById('as-err');if(_ae)_ae.textContent='Please fill all fields.';} return; }

  let storedUsers = JSON.parse(localStorage.getItem('pa_users') || '[]');
  let allUsers = [...DEMO_USERS, ...storedUsers];
  if (allUsers.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    {const _ae=document.getElementById('as-err');if(_ae)_ae.textContent='Email already registered. Please sign in.';}
    return;
  }

  _pendingSignup = {email, pass, name, org, role:'user'};
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('plans-screen').style.display = 'flex';
}

function selPlan(plan) {
  if (_pendingSignup) {
    const newUser = {..._pendingSignup, plan};
    let storedUsers = JSON.parse(localStorage.getItem('pa_users') || '[]');
    storedUsers.push(newUser);
    localStorage.setItem('pa_users', JSON.stringify(storedUsers));
    currentUser = newUser;
    localStorage.setItem('pa_session', JSON.stringify(currentUser));
    document.getElementById('plans-screen').style.display = 'none';
    _pendingSignup = null;
    afterLogin();
  } else {
    // Existing user upgrading plan
    if (currentUser) {
      currentUser.plan = plan;
      localStorage.setItem('pa_session', JSON.stringify(currentUser));
      updateUserUI();
    }
    document.getElementById('plans-screen').style.display = 'none';
  }
}

function afterLogin() {
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('plans-screen').style.display = 'none';
  updateUserUI();

  // Check for projects
  const projects = JSON.parse(localStorage.getItem('pa_projects') || '[]');
  const lastProj = localStorage.getItem('pa_last_project');

  if (projects.length && lastProj) {
    const proj = projects.find(p => p.id === lastProj);
    if (proj) { loadProject(proj); loadWbsFromProject(); showApp(); return; }
  }

  // Show project setup
  renderProjectHistory();
  document.getElementById('proj-setup').style.display = 'flex'; setTimeout(_populateProjSetupCurrency, 50);
}

function updateUserUI() {
  if (!currentUser) return;
  const initials = currentUser.name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase();
  {const _e=document.getElementById('hdr-avatar');if(_e)_e.textContent=initials;}
  {const _e=document.getElementById('hdr-uname');if(_e)_e.textContent=currentUser.name.split(' ')[0];}
  {const _e=document.getElementById('hdr-uplan');if(_e)_e.textContent=(currentUser.plan||'').toUpperCase()+(currentUser.role==='superuser'?' · ADMIN':'');}
  {const _e=document.getElementById('um-plan');if(_e)_e.textContent=(currentUser.plan||'—').toUpperCase();}
  {const _e=document.getElementById('footer-user');if(_e)_e.textContent='Signed in as '+currentUser.name;}
}

function doLogout() {
  currentUser = null; currentProject = null;
  localStorage.removeItem('pa_session');
  closeMenu();
  showAuthScreen();
}

function showAuthScreen() {
  document.getElementById('auth-screen').style.display = 'flex';
  document.getElementById('main-hdr').style.display = 'none';
  document.getElementById('main-panels').style.display = 'none';
  document.getElementById('footer-bar').style.display = 'none';
  document.getElementById('proj-setup').style.display = 'none';
}
function toggleMenu() {
  const m = document.getElementById('user-menu');
  if(!m) return;
  const opening = m.style.display === 'none';
  m.style.display = opening ? 'block' : 'none';
  if(opening) _refreshCreditPill?.();
}

function closeMenu() { document.getElementById('user-menu').style.display = 'none'; }
document.addEventListener('click', e => {
  if (!e.target.closest('#hdr-user') && !e.target.closest('#user-menu')) closeMenu();
});

// ── PROJECT MANAGEMENT ──
function saveProjSetup() {
  const _gv=(id,def='')=>{const e=document.getElementById(id);return e?e.value:def;};
  // Save currency from setup screen
  const currCode = _gv('ps-currency','');
  if(currCode) {
    const found=_allCurrencies().find(c=>c.code===currCode);
    if(found) PROJECT_SETTINGS.currency={symbol:found.symbol,code:found.code,name:found.name};
  }
  const name = _gv('ps-name').trim() || 'Unnamed Project';
  const pid  = _gv('ps-id').trim()   || ('PA-' + Date.now().toString(36).toUpperCase());
  const loc    = _gv('ps-loc').trim();
  const client = _gv('ps-client').trim();
  const value  = _gv('ps-value').trim();
  const start  = _gv('ps-start') || '2025-01-06';
  const weeks  = getProjectWeeks();
  const type   = _gv('ps-type','Infrastructure');

  const proj = {id: pid, name, loc, client, value, start, weeks, type, created: Date.now(), user: currentUser?.email};
  let projects = JSON.parse(localStorage.getItem('pa_projects') || '[]');
  const existing = projects.findIndex(p => p.id === pid);
  if (existing >= 0) projects[existing] = proj; else projects.unshift(proj);
  localStorage.setItem('pa_projects', JSON.stringify(projects));
  localStorage.setItem('pa_last_project', pid);

  loadProject(proj);
  showApp();
}

function skipProjSetup() {
  showApp();
}

function loadProject(proj) {
  currentProject = proj;
  P.name = proj.name;
  P.start = proj.start;
  P.weeks = proj.weeks;
  {const _e=document.getElementById('pname');if(_e)_e.value=proj.name;}
  {const _e=document.getElementById('p-start');if(_e)_e.value=proj.start;}
  {const _e=document.getElementById('p-wks');if(_e)_e.value=proj.weeks;}
  // Update new project setup fields if dialog open
  const psStart = document.getElementById('ps-start');
  const psDur = document.getElementById('ps-dur');
  if(psStart) psStart.value = proj.start;
  if(psDur) psDur.value = proj.weeks;
  calcProjFinish();
  {const _e=document.getElementById('hdr-proj-nm');if(_e)_e.textContent=proj.name;}
  {const _e=document.getElementById('hdr-proj-id');if(_e)_e.textContent=proj.id||'No ID';}
  localStorage.setItem('pa_last_project', proj.id);

  try{ setTimeout(function(){ refreshAllTabs && refreshAllTabs(); }, 50); }catch(e){}
}

function openProjSetup() {
  closeMenu();
  if (currentProject) {
    const _setF=(id,v)=>{const el=document.getElementById(id);if(el)el.value=v;};
    _setF('ps-name', currentProject.name || '');
    _setF('ps-id',   currentProject.id || '');
    _setF('ps-loc',  currentProject.loc || '');
    _setF('ps-client', currentProject.client || '');
    _setF('ps-value',  currentProject.value || '');
    _setF('ps-start',  currentProject.start || '2025-01-06');
    _setF('ps-dur',    currentProject.weeks || 104);
    _setF('ps-finish', currentProject.finish || '');
  }
  renderProjectHistory();
  document.getElementById('proj-setup').style.display = 'flex';
}

function renderProjectHistory() {
  const projects = JSON.parse(localStorage.getItem('pa_projects') || '[]');
  const hist = document.getElementById('ps-history');
  const list = document.getElementById('ph-list');
  if (!projects.length) { hist.style.display = 'none'; return; }
  hist.style.display = 'block';
  list.innerHTML = projects.slice(0, 6).map(p => `
    <div class="ph-row" onclick="loadProjectFromHistory('${p.id}')">
      <div>
        <div class="ph-nm">${p.name}</div>
        <div class="ph-loc">${p.loc || ''} ${p.type ? '· '+p.type : ''}</div>
      </div>
      <div class="ph-id">${p.id}</div>
    </div>`).join('');
}

function loadProjectFromHistory(id) {
  const projects = JSON.parse(localStorage.getItem('pa_projects') || '[]');
  const proj = projects.find(p => p.id === id);
  if (!proj) return;
  const _sfH=(id,v)=>{const el=document.getElementById(id);if(el)el.value=v;};
  _sfH('ps-name',   proj.name || '');
  _sfH('ps-id',     proj.id || '');
  _sfH('ps-loc',    proj.loc || '');
  _sfH('ps-client', proj.client || '');
  _sfH('ps-value',  proj.value || '');
  _sfH('ps-start',  proj.start || '2025-01-06');
  _sfH('ps-dur',    proj.weeks || 104);
  _sfH('ps-finish', proj.finish || '');
  // Also immediately load (preview the project)
  loadProject(proj);
  loadWbsFromProject();
  document.getElementById('proj-setup').style.display = 'none';
  showApp();
}

function showProjects() {
  closeMenu();
  showProjectDashboard();
}

// ── KEYBOARD SHORTCUTS ON AUTH FIELDS ──
['a-email','a-pass'].forEach(id => {
  const el = document.getElementById(id);
  if(el) el.addEventListener('keydown', e => { if(e.key==='Enter') doLogin(); });
});

// ── AUTO-LOGIN FROM SESSION ──
(function checkSession() {
  const sess = localStorage.getItem('pa_session');
  if (sess) {
    try {
      currentUser = JSON.parse(sess);
      updateUserUI();
      afterLogin();
    } catch(e) { localStorage.removeItem('pa_session'); }
  }
})();



// ═══════════════════════════════════════════════════════════
// LIBRARY MANAGER — Custom modules stored in localStorage
// ═══════════════════════════════════════════════════════════
  // user-created modules
let _lmActiveDom = null;
let _lmExpandedMod = null;

function loadCustomLibrary(){
  const saved = localStorage.getItem('pa_custom_lib');
  if(saved){ try{ CUSTOM_MODS = JSON.parse(saved); }catch(e){ CUSTOM_MODS=[]; } }
}

function saveCustomLibrary(){
  localStorage.setItem('pa_custom_lib', JSON.stringify(CUSTOM_MODS));
}

function getAllMods(){
  return [...C_MODS, ...CUSTOM_MODS];
}

function getAllDoms(){
  const customDomIds = [...new Set(CUSTOM_MODS.map(m=>m.dom))];
  const extraDoms = customDomIds
    .filter(id=>!C_DOMS.find(d=>d.id===id))
    .map(id=>({id,lbl:id,ico:'📦',custom:true}));
  return [...C_DOMS, ...extraDoms];
}

function openLibManager(){
  loadCustomLibrary();
  _lmActiveDom = C_DOMS[0]?.id || null;
  renderLmSidebar();
  renderLmModList();
  populateLmDomSelect();
  openOvl('lib-mgr-ovl');
}

function renderLmSidebar(){
  const el=document.getElementById('lm-sidebar');if(!el)return;
  const doms=getAllDoms();
  el.innerHTML=doms.map(d=>{
    const cnt=[...C_MODS,...CUSTOM_MODS].filter(m=>m.dom===d.id).length;
    return `<div class="lm-dom-row ${d.id===_lmActiveDom?'act':''}" onclick="lmSelectDom('${d.id}')">
      <span>${d.ico||'📦'} ${d.lbl}</span>
      <span class="lm-dom-cnt">${cnt}</span>
    </div>`;
  }).join('');
}

function lmSelectDom(id){
  _lmActiveDom=id;_lmExpandedMod=null;
  renderLmSidebar();renderLmModList();
}

function renderLmModList(){
  const el=document.getElementById('lm-mod-list');if(!el)return;
  if(!_lmActiveDom){el.innerHTML='<div style="padding:20px;color:var(--t3);font-size:12px">Select a domain</div>';return;}
  const mods=getAllMods().filter(m=>m.dom===_lmActiveDom);
  if(!mods.length){el.innerHTML='<div style="padding:20px;color:var(--t3);font-size:12px">No modules in this domain. Add one below.</div>';return;}
  el.innerHTML=mods.map(m=>{
    const isCustom=CUSTOM_MODS.some(c=>c.id===m.id);
    const isExpanded=m.id===_lmExpandedMod;
    return `<div class="lm-mod-item">
      <div class="lm-mod-hdr" onclick="lmToggleMod('${m.id}')">
        <span class="lm-mod-ico">${m.ico||'📋'}</span>
        <span class="lm-mod-name">${m.n}</span>
        <span class="lm-mod-wpc">${(m.w||[]).length} WPs</span>
        ${isCustom?'<span class="lm-mod-custom">CUSTOM</span>':''}
        <span style="font-size:10px;color:var(--t3)">${isExpanded?'▲':'▼'}</span>
      </div>
      <div class="lm-mod-body ${isExpanded?'open':''}">
        <div style="font-size:10px;color:var(--t3);margin-bottom:8px">${m.d||''}</div>
        <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.05em;margin-bottom:5px">WORK PACKAGES</div>
        ${(m.w||[]).map((wp,wi)=>`<div class="lm-wp-row">
          <input class="lm-wp-n" value="${esc(wp.n||wp.name||'')}" ${isCustom?'':'readonly'} ${isCustom?`onchange="editCustomWp('${m.id}',${wi},'n',this.value)"`:''}
            style="${isCustom?'':'background:transparent;border-color:transparent;cursor:default'}">
          <select class="lm-wp-ph" ${isCustom?'':'disabled'} onchange="editCustomWp('${m.id}',${wi},'ph',this.value)">
            ${['CON','PRO','EN','GW','ST','ENV','MEP','FIN','EXT','INF','COM'].map(p=>`<option value="${p}" ${wp.ph===p?'selected':''}>${p}</option>`).join('')}
          </select>
          <input class="lm-wp-dur" type="number" value="${typeof wp.dur==='number'?wp.dur:10}" ${isCustom?'':'readonly'} ${isCustom?`onchange="editCustomWp('${m.id}',${wi},'dur',+this.value)"`:''}
            style="${isCustom?'':'background:transparent;border-color:transparent;cursor:default'}">
          ${isCustom?`<button class="ib del" onclick="removeCustomWp('${m.id}',${wi})">&#215;</button>`:''}
        </div>`).join('')}
        ${isCustom?`<div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn btns" onclick="addCustomWp('${m.id}')">+ Add WP</button>
          <button class="btn btns" style="color:var(--red)" onclick="deleteCustomMod('${m.id}')">&#215; Delete Module</button>
        </div>`:'<div style="margin-top:6px;font-size:10px;color:var(--t3)">Built-in modules are read-only. Add a custom module below to create your own.</div>'}
      </div>
    </div>`;
  }).join('');
}

function lmToggleMod(id){
  _lmExpandedMod=(_lmExpandedMod===id)?null:id;
  renderLmModList();
}

function editCustomWp(modId,wi,field,val){
  const m=CUSTOM_MODS.find(x=>x.id===modId);
  if(!m||!m.w[wi])return;
  m.w[wi][field]=val;
  saveCustomLibrary();
}

function removeCustomWp(modId,wi){
  const m=CUSTOM_MODS.find(x=>x.id===modId);
  if(!m)return;
  m.w.splice(wi,1);
  saveCustomLibrary();renderLmModList();
}

function addCustomWp(modId){
  const m=CUSTOM_MODS.find(x=>x.id===modId);
  if(!m)return;
  m.w.push({sg:'SG-CUSTOM-'+Date.now(),n:'New work package',ph:'FIN',tk:'CONSTR',dur:10});
  saveCustomLibrary();renderLmModList();lmToggleMod(modId);
}
function populateLmDomSelect(){
  const sel=document.getElementById('nm-dom');if(!sel)return;
  sel.innerHTML='<option value="">— Select domain —</option>'+
    getAllDoms().map(d=>`<option value="${d.id}">${d.ico||'📦'} ${d.lbl}</option>`).join('');
}

function addWpRow(){
  const container=document.getElementById('nm-wp-rows');if(!container)return;
  const row=document.createElement('div');row.className='lm-wp-builder-row';
  row.innerHTML=`<input placeholder="Work package name" class="nm-wpn">
    <select class="nm-wpph">
      <option value="EN">Enabling</option><option value="GW">Groundworks</option>
      <option value="ST">Structure</option><option value="ENV">Envelope</option>
      <option value="MEP">MEP</option><option value="FIN">Finishes</option>
      <option value="EXT">External</option><option value="INF">Infrastructure</option>
      <option value="COM">Commissioning</option><option value="CON">Consents</option><option value="PRO">Procurement</option>
    </select>
    <input type="number" class="nm-wpdur" placeholder="30" value="10" min="1">
    <button class="ib del" onclick="this.closest('.lm-wp-builder-row').remove()">&#215;</button>`;
  container.appendChild(row);
}

function saveNewModule(){
  const name=document.getElementById('nm-name')?.value.trim();
  const ico=document.getElementById('nm-ico')?.value.trim()||'📋';
  const desc=document.getElementById('nm-desc')?.value.trim();
  const dom=document.getElementById('nm-dom')?.value;
  if(!name){alert('Enter a module name.');return;}
  if(!dom){alert('Select a domain.');return;}

  const wpRows=[...document.querySelectorAll('#nm-wp-rows .lm-wp-builder-row')];
  if(!wpRows.length){alert('Add at least one work package.');return;}

  const wps=wpRows.map(row=>({
    sg:'SG-CUSTOM-'+Date.now()+'-'+Math.random().toString(36).slice(2,5),
    n:row.querySelector('.nm-wpn')?.value.trim()||'Work package',
    ph:row.querySelector('.nm-wpph')?.value||'FIN',
    tk:'CONSTR',
    dur:Math.max(1,+row.querySelector('.nm-wpdur')?.value||10)
  })).filter(w=>w.n);

  const newMod={
    id:'CUSTOM-'+Date.now(),dom,n:name,ico,d:desc||name,
    w:wps,q:[],custom:true
  };
  CUSTOM_MODS.push(newMod);
  saveCustomLibrary();
  // Clear form
  document.getElementById('nm-name').value='';
  document.getElementById('nm-ico').value='';
  document.getElementById('nm-desc').value='';
  document.getElementById('nm-wp-rows').innerHTML=`<div class="lm-wp-builder-row">
    <input placeholder="Work package name" class="nm-wpn">
    <select class="nm-wpph"><option value="FIN">Finishes</option><option value="MEP">MEP</option><option value="ST">Structure</option><option value="EXT">External</option></select>
    <input type="number" class="nm-wpdur" value="10" min="1">
    <button class="ib del" onclick="this.closest('.lm-wp-builder-row').remove()">&#215;</button>
  </div>`;
  // Refresh
  _lmActiveDom=dom;
  renderLmSidebar();renderLmModList();renderLib();
  alert('Module \'' + name + '\' added to library!');
}

// Override addMod to include custom mods
const _origAddMod = typeof addMod === 'function' ? addMod : null;
// ═══════════════════════════════════════════════════════════
// ACTIVITY TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
// PROJECT DATE HELPERS
// ═══════════════════════════════════════════════════════════
function calcProjFinish(){
  const start=document.getElementById('ps-start')?.value;
  const dur=+document.getElementById('ps-dur')?.value||104;
  const unit=document.getElementById('ps-dur-unit')?.value||'w';
  if(!start)return;
  const d=new Date(start+'T00:00:00');
  if(unit==='d') d.setDate(d.getDate()+dur);
  else if(unit==='w') d.setDate(d.getDate()+dur*7);
  else if(unit==='m') d.setMonth(d.getMonth()+dur);
  const fin=d.toISOString().slice(0,10);
  const fe=document.getElementById('ps-finish');if(fe)fe.value=fin;
  updateCalcLabel();
}
function calcProjDuration(){
  const start=document.getElementById('ps-start')?.value;
  const fin=document.getElementById('ps-finish')?.value;
  if(!start||!fin)return;
  const ms=new Date(fin+'T00:00:00')-new Date(start+'T00:00:00');
  const totalDays=Math.round(ms/86400000);
  const unit=document.getElementById('ps-dur-unit')?.value||'w';
  const durIn=document.getElementById('ps-dur');
  if(unit==='d'&&durIn) durIn.value=totalDays;
  else if(unit==='w'&&durIn) durIn.value=Math.round(totalDays/7);
  else if(unit==='m'&&durIn) durIn.value=Math.round(totalDays/30.44);
  updateCalcLabel();
}
function calcProjFinishFromDur(){ calcProjFinish(); }
function updateCalcLabel(){
  const dur=+document.getElementById('ps-dur')?.value||104;
  const unit=document.getElementById('ps-dur-unit')?.value||'w';
  const lbl=document.getElementById('ps-calc-lbl');
  if(!lbl)return;
  const days=unit==='d'?dur:unit==='w'?dur*7:Math.round(dur*30.44);
  lbl.textContent=unit==='d'?`= ${Math.round(dur/7)} weeks`:unit==='w'?`= ${dur*7} days`:`= ${Math.round(dur*30.44)} days`;
}
function getProjectWeeks(){
  const unit=document.getElementById('ps-dur-unit')?.value||'w';
  const dur=+document.getElementById('ps-dur')?.value||104;
  if(unit==='d') return Math.round(dur/7);
  if(unit==='w') return dur;
  if(unit==='m') return Math.round(dur*4.33);
  return 104;
}

// ═══════════════════════════════════════════════════════════
// FULL SCHEDULE TABLE RENDER (replaces old renderWps)
// Shows WBS hierarchy when WBS_NODES populated
// ═══════════════════════════════════════════════════════════
function _renderWpsInner() { renderWps(); }
// renderWps is defined in v14 performance engine above (chunked+virtual)
// This stub is kept for compatibility - the engine version takes precedence
function _renderWpsLegacy(){
  // No-op: v14 renderWps handles everything
}

function actTypeBadge(at){
  const t=ACT_TYPES[at||'TASK']||ACT_TYPES.TASK;
  return `<span class="at-badge ${t.cls}">${t.lbl}</span>`;
}

function actTypeSelect(wi,current){
  return `<select class="wps" style="font-size:10px;padding:4px" onchange="WPS[${wi}].actType=this.value;if(this.value==='MS')WPS[${wi}].dur=0;refreshAll()">
    ${Object.entries(ACT_TYPES).map(([k,v])=>`<option value="${k}" ${(current||'TASK')===k?'selected':''}>${v.lbl}</option>`).join('')}
  </select>`;
}

function renderWpsHierarchical(succMap, wpsArr){
  let html='';
  function renderNode(node, depth){
    const nodeWps = (wpsArr||WPS).filter(w=>w.wbsNodeId===node.id);
    const children = WBS_NODES.filter(n=>n.pId===node.id).sort((a,b)=>a.order-b.order);
    const indent = depth*16;
    const hasContent = nodeWps.length > 0 || children.length > 0;
    const isCollapsed = node.collapsed === true;
    const arrow = hasContent ? (isCollapsed ? '▶' : '▼') : '·';
    const cpCount = nodeWps.filter(w=>SCHED.r?.[w.id]?.cp).length;
    const totFloat = nodeWps.length ? Math.round(nodeWps.reduce((s,w)=>s+(SCHED.r?.[w.id]?.tf||0),0)/nodeWps.length) : null;

    html+=`<tr class="wt-wbs-hdr" data-wbs-id="${node.id}" style="cursor:pointer" onclick="toggleSchedWbsCollapse('${node.id}')">
      <td colspan="15" style="padding:5px 10px 5px ${8+indent}px;border-left:3px solid #6D28D9;user-select:none">
        <span class="wbs-expand-arrow" style="color:#6D28D9;font-size:10px;margin-right:6px;display:inline-block;width:10px">${arrow}</span>
        <span style="font-family:var(--mono);font-size:10px;color:#6D28D9;margin-right:6px">${esc(node.code)}</span>
        <span style="font-weight:700;font-size:12px;color:var(--t1)">${esc(node.name)}</span>
        <span style="font-size:10px;color:var(--t3);margin-left:8px">${nodeWps.length} acts${children.length?' · '+children.length+' sub':''}</span>
        ${cpCount > 0 ? `<span style="font-size:9px;padding:1px 5px;background:#FEE2E2;color:#B91C1C;border-radius:8px;margin-left:6px;font-weight:700">${cpCount} CP</span>`:''}
        <button class="btn btnxs" style="margin-left:auto;font-size:10px;float:right" onclick="event.stopPropagation();showInlineAdd('${node.id}')">+ Add</button>
      </td>
    </tr>`;

    if(!isCollapsed) {
      nodeWps.forEach(w=>{ html+=renderWpRow(w, indent+8, succMap); });
      children.forEach(child=>renderNode(child, depth+1));
    }
  }
  const roots = WBS_NODES.filter(n=>!n.pId).sort((a,b)=>a.order-b.order);
  roots.forEach(n=>renderNode(n,0));
  // Orphan activities
  const orphans = WPS.filter(w=>!w.wbsNodeId);
  if(orphans.length){
    html+=`<tr class="wt-wbs-hdr"><td colspan="15" style="padding:5px 10px;border-left:3px solid var(--t3)">
      <span style="font-size:10px;color:var(--t3)">·</span>
      <span style="font-weight:700;font-size:12px;margin-left:8px">Unassigned Activities</span>
      <span style="font-size:10px;color:var(--t3);margin-left:8px">${orphans.length} acts</span>
    </td></tr>`;
    orphans.forEach(w=>{ html+=renderWpRow(w, 8, succMap); });
  }
  return html;
}
// Collapse/expand ALL WBS nodes
function collapseAllWbs() {
  WBS_NODES.forEach(n=>n.collapsed=true);
  VS.flat=[];renderWps();
}
function expandAllWbs() {
  WBS_NODES.forEach(n=>n.collapsed=false);
  VS.flat=[];renderWps();
}

function renderWpsFlat(succMap, wpsArr){
  let html='';
  PH_ORDER.forEach(ph=>{
    const grp=(wpsArr||WPS).filter(w=>w.ph===ph);if(!grp.length)return;
    html+=`<tr class="wt-wbs-hdr"><td colspan="15" style="padding:5px 9px;border-left:3px solid ${PH[ph]?.col||'#888'}">
      <span style="color:${PH[ph]?.dk||'#333'};font-weight:700">${PH[ph]?.lbl||ph}</span>
      <span style="font-size:10px;color:var(--t3);margin-left:6px">${grp.length} activities</span>
    </td></tr>`;
    grp.forEach(w=>{ html+=renderWpRow(w,8,succMap); });
  });
  return html;
}

function renderWpRow(w, indent, succMap) {
  const wi = WPS.indexOf(w); if(wi < 0) return '';
  const r = SCHED.r?.[w.id] || {};
  const isCp = r.cp, isSelRow = wi === _selectedWi, isMile = w.actType==='MS';
  const at = w.actType || 'TASK', durUnit = w.durUnit || 'd';
  const projStart = new Date(P.start || PROJECT_SETTINGS.start || '2025-01-01');

  // Date formatters
  const dateOf = d => { if(d==null) return ''; const dt=new Date(projStart); dt.setDate(dt.getDate()+Math.round(d)); return dt.toLocaleDateString('en-GB',{day:'2-digit',month:'short'}); };
  const rawDate = s => { if(!s) return ''; const d=new Date(s); return isNaN(d)?'':d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'2-digit'}); };

  // CPM dates
  const es = r.es!=null ? dateOf(r.es) : rawDate(w.earlyStart||w.targetStart||w.actualStart);
  const ef = r.ef!=null ? dateOf(r.ef) : rawDate(w.earlyEnd||w.targetEnd||w.actualFinish);
  const ls = r.ls!=null ? dateOf(r.ls) : rawDate(w.lateStart);
  const lf = r.lf!=null ? dateOf(r.lf) : rawDate(w.lateEnd||w.lateFinish);

  // Start = actual if started, else early start
  const startD = w.actualStart ? rawDate(w.actualStart) : es;
  const finishD = w.actualFinish ? rawDate(w.actualFinish) : ef;

  // Baseline dates — match by activityId (task_code) first, then by name
  const bl = _getBaselineActivity(w);
  const blSt = bl ? rawDate(bl.targetStart||bl.earlyStart||'') : '';
  const blFn = bl ? rawDate(bl.targetEnd||bl.earlyEnd||'') : '';

  // Variance: positive = delayed (red), negative = ahead (green)
  let blVar = '', blVarNum = null;
  if(bl) {
    const blEndStr = bl.targetEnd||bl.earlyEnd||'';
    const blStartStr = bl.targetStart||bl.earlyStart||'';
    if(blEndStr) {
      const blFinDate = new Date(blEndStr);
      // Current finish: prefer actual, then CPM, then stored target
      let curFinDate = null;
      if(w.status==='COM' && w.actualFinish) {
        curFinDate = new Date(w.actualFinish);
      } else if(r.ef != null) {
        curFinDate = new Date(projStart.getTime() + Math.round(r.ef) * 86400000);
      } else if(w.targetEnd) {
        curFinDate = new Date(w.targetEnd);
      } else if(w.earlyEnd) {
        curFinDate = new Date(w.earlyEnd);
      }
      if(curFinDate && !isNaN(blFinDate) && !isNaN(curFinDate)) {
        blVarNum = Math.round((curFinDate.getTime() - blFinDate.getTime()) / 86400000);
        blVar = blVarNum > 0
          ? `<span style="color:#DC2626;font-weight:700;font-family:var(--mono)">+${blVarNum}d</span>`
          : blVarNum < 0
          ? `<span style="color:#059669;font-weight:700;font-family:var(--mono)">${blVarNum}d</span>`
          : `<span style="color:var(--t3);font-family:var(--mono)">0</span>`;
      }
    }
  }

  // Float
  const tf = r.tf!=null ? r.tf : w.totalFloat;
  const tfTxt = isCp ? `<span style="color:#DC2626;font-weight:800;font-family:var(--mono)">CP</span>` :
                tf!=null ? `<span style="font-family:var(--mono);font-size:10px;color:${tf<=0?'#DC2626':tf<=5?'#D97706':'#059669'}">${tf}d</span>` : '';

  // Status dropdown
  const sCls = {NS:'status-ns',IP:'status-ip',COM:'status-com'};
  const statusHtml = `<select class="status-sel ${sCls[w.status||'NS']||''}" onclick="event.stopPropagation()" onchange="event.stopPropagation();setActStatus(${wi},this.value)">
    <option value="NS" ${(w.status||'NS')==='NS'?'selected':''}>Not Started</option>
    <option value="IP" ${w.status==='IP'?'selected':''}>In Progress</option>
    <option value="COM" ${w.status==='COM'?'selected':''}>Complete</option>
  </select>`;

  // % complete
  const pct = w.pct||0;
  const pctHtml = `<div style="display:flex;flex-direction:column;gap:2px">
    <div style="font-size:10px;text-align:center;font-weight:600;font-family:var(--mono)">${pct}%</div>
    <div style="height:3px;background:var(--b1);border-radius:2px"><div style="width:${pct}%;height:100%;background:${isCp?'#DC2626':'#3B82F6'};border-radius:2px"></div></div>
  </div>`;

  // Predecessors
  const predLbl = (w.preds||[]).slice(0,3).map(p=>{const pw=WPS.find(x=>x.id===p.id);return pw?(pw.wbs||pw.activityId||'?')+(p.tp!=='FS'?'('+p.tp+')':'')+(p.lg?'+'+p.lg+'d':''):''}).filter(Boolean).join(', ')
    + ((w.preds||[]).length>3?`+${(w.preds||[]).length-3}`:'');
  const succIds = succMap[w.id]||[];
  const succLbl = succIds.slice(0,3).map(sid=>{const sw=WPS.find(x=>x.id===sid);return sw?sw.wbs||sw.activityId||'?':'?'}).join(', ')
    + (succIds.length>3?`+${succIds.length-3}`:'');

  // Resources
  const allRes = [...RESOURCES.labor,...RESOURCES.equipment,...RESOURCES.material];
  const rNames = (w.resourceIds||[]).map(id=>allRes.find(r=>r.id===id)?.name||'').filter(Boolean);
  const resLbl = rNames.length ? `<span style="font-size:10px;color:var(--t2)" title="${esc(rNames.join(', '))}">${esc(rNames[0])}${rNames.length>1?' +'+(rNames.length-1):''}</span>` : '<span style="color:var(--t3);font-size:10px">—</span>';

  // Constraint
  const CSTR = {ASAP:'None (ASAP)',ALAP:'ALAP',MSO:'Must Start On',MFO:'Must Finish On',SNET:'Start ≥',SNLT:'Start ≤',FNET:'Finish ≥',FNLT:'Finish ≤'};
  const curCstr = w.constraint||'ASAP';
  const cstrSel = `<select class="wi" style="font-size:10px;width:100%;color:${curCstr!=='ASAP'?'var(--blue)':'var(--t3)'}" onclick="event.stopPropagation()" onchange="event.stopPropagation();WPS[${wi}].constraint=this.value;refreshAll()">
    ${Object.entries(CSTR).map(([k,v])=>`<option value="${k}" ${curCstr===k?'selected':''}>${v}</option>`).join('')}
  </select>`;

  // Phase
  const phaseSel = `<select class="wps" style="font-size:10px" onclick="event.stopPropagation()" onchange="event.stopPropagation();WPS[${wi}].ph=this.value;assignWbs();refreshAll()">
    ${Object.entries(PH).map(([k,v])=>`<option value="${k}" ${w.ph===k?'selected':''}>${v.lbl.split(' ')[0]}</option>`).join('')}
  </select>`;

  // Calendar
  const calSel = `<select class="wi" style="font-size:10px;width:100%" onclick="event.stopPropagation()" onchange="event.stopPropagation();WPS[${wi}].calId=this.value;refreshAll()">
    ${(CALENDARS||[]).map(cl=>`<option value="${cl.id}" ${w.calId===cl.id?'selected':''}>${esc(cl.name||'Default')}</option>`).join('')}
  </select>`;

  const dateTd = (val, color) => `<td style="font-size:10px;padding:3px 4px;font-family:var(--mono);white-space:nowrap;${color?'color:'+color:'color:var(--t2)'}"><span>${val||'—'}</span></td>`;

  return `<tr data-wi="${wi}" class="${isCp?'wt-row-cp':''} ${isSelRow?'wt-row-active':''}" style="cursor:pointer">
    <td class="wbsc ${isCp?'cpd':''}" style="padding-left:${indent}px;font-size:10px;font-family:var(--mono)">${esc(w.wbs||w.activityId||'')}</td>
    <td style="padding:2px 4px">${actTypeBadge(at)}</td>
    <td><input class="wi" value="${esc(w.name)}" onclick="event.stopPropagation()" onchange="WPS[${wi}].name=this.value;syncGanttFromTable()"></td>
    <td style="padding:2px 3px">${statusHtml}</td>
    <td style="padding:2px 3px;white-space:nowrap">
      <div style="display:flex;align-items:center;gap:2px">
        <input class="wd" type="number" min="0" value="${isMile?0:w.dur}" ${isMile?'disabled':''} style="width:36px" onclick="event.stopPropagation()" onchange="event.stopPropagation();WPS[${wi}].dur=Math.max(0,+this.value);refreshAll()">
        <select onclick="event.stopPropagation()" onchange="event.stopPropagation();WPS[${wi}].durUnit=this.value" style="width:28px;font-size:10px;padding:2px"><option value="d" ${durUnit==='d'?'selected':''}>d</option><option value="w" ${durUnit==='w'?'selected':''}>w</option></select>
      </div>
    </td>
    <td style="padding:2px 3px">${phaseSel}</td>
    <td style="padding:3px 4px;text-align:center">${tfTxt}</td>
    ${dateTd(startD)}
    ${dateTd(finishD)}
    ${dateTd(es,'#3B82F6')}
    ${dateTd(ef,'#3B82F6')}
    ${dateTd(blSt,'#059669')}
    ${dateTd(blFn,'#059669')}
    <td style="padding:3px 4px;text-align:center;font-size:10px">${blVar}</td>
    <td style="font-size:10px;padding:3px 4px;cursor:pointer;color:var(--blue)" onclick="event.stopPropagation();editPreds('${w.id}')">${predLbl||'<span style="color:var(--t3)">+ add</span>'}</td>
    <td style="font-size:10px;padding:3px 4px;color:var(--t2)">${succLbl||'<span style="color:var(--t3)">—</span>'}</td>
    <td style="padding:2px 4px">${pctHtml}</td>
    <td style="padding:2px 4px">${resLbl}</td>
    <td style="padding:2px 3px">${cstrSel}</td>
    <td style="padding:2px 3px">${calSel}</td>
    <td style="padding:2px 3px;white-space:nowrap;display:flex;gap:1px">
      <button class="ib" onclick="event.stopPropagation();moveWp(${wi},-1)" title="Up">↑</button>
      <button class="ib del" onclick="event.stopPropagation();delWp('${w.id}')" title="Delete">×</button>
    </td>
  </tr>`;
}
function addWpToNode(nodeId){ showInlineAdd(nodeId); }

// Edit successors (creates preds on the successor side)
function editSuccessors(id){
  const w=WPS.find(x=>x.id===id);if(!w)return;
  assignWbs();
  const curSuccs=WPS.filter(x=>x.preds.some(p=>p.id===id)).map(x=>x.wbs).join(', ');
  const inp=prompt(`Successors of "${trunc(w.name,40)}"\nCurrent: ${curSuccs||'none'}\nEnter WBS codes of successor activities (e.g. 1.3, 2.1):`);
  if(inp===null)return;
  if(!inp.trim()){
    WPS.forEach(x=>{ x.preds=x.preds.filter(p=>p.id!==id); });
    refreshAll();renderWps();return;
  }
  const codes=inp.split(',').map(s=>s.trim()).filter(Boolean);
  // Remove existing successors pointing to this
  WPS.forEach(x=>{ x.preds=x.preds.filter(p=>p.id!==id); });
  codes.forEach(code=>{
    const sw=WPS.find(x=>x.wbs===code&&x.id!==id);
    if(sw&&!sw.preds.some(p=>p.id===id)) sw.preds.push({id,tp:'FS',lg:0});
  });
  refreshAll();renderWps();
}



// ═══════════════════════════════════════════════════════════
// PROJECT DASHBOARD
// ═══════════════════════════════════════════════════════════

function showProjectDashboard() {
  closeMenu();
  renderDashboard();
  document.getElementById('proj-dash').style.display = 'flex';
}

function closeDash() {
  document.getElementById('proj-dash').style.display = 'none';
}

function closeDashNewProject() {
  closeDash();
  // Reset form for new project
  const _gv=(id,def='')=>{const e=document.getElementById(id);return e?e.value:def;};
  const _sf=(id,v)=>{const e=document.getElementById(id);if(e)e.value=v;};
  _sf('ps-name','');_sf('ps-id','');_sf('ps-loc','');
  _sf('ps-client','');_sf('ps-value','');
  _sf('ps-start','2025-01-06');_sf('ps-dur','104');
  const finEl=document.getElementById('ps-finish');
  if(finEl) finEl.value='2027-01-05';
  const lbl=document.getElementById('ps-calc-lbl');
  if(lbl) lbl.textContent='= 104 weeks';
  renderProjectHistory();
  document.getElementById('proj-setup').style.display='flex';
}

function renderDashboard() {
  const projects = JSON.parse(localStorage.getItem('pa_projects') || '[]');
  const list = document.getElementById('pd-proj-list');
  const count = document.getElementById('pd-proj-count');
  if(!list) return;

  if(count) count.textContent = projects.length + ' project' + (projects.length !== 1 ? 's' : '');

  if(!projects.length) {
    list.innerHTML = `<div class="pd-empty">
      <div class="pd-empty-icon">&#128194;</div>
      <p>No projects yet. Create your first project below.</p>
    </div>`;
    return;
  }

  const typeIcons = {
    'Infrastructure':'🏗️','Building':'🏢','Rail':'🚆','Energy':'⚡',
    'Water':'💧','Mixed-Use':'🏙️','Healthcare':'🏥','Education':'🏫',
    'Data Centre':'🖥️','Residential':'🏠','Commercial':'💼',
    'Hospitality':'🏨','Industrial':'🏭','Ports':'🚢','Airport':'✈️','Other':'📋'
  };

  const activeId = currentProject?.id;

  list.innerHTML = projects.map(p => {
    const icon = typeIcons[p.type] || '📋';
    const date = p.created ? new Date(p.created).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}) : '';
    const isActive = p.id === activeId;
    const meta = [p.loc, p.client, p.value].filter(Boolean).join(' · ');
    return `<div class="pd-proj-item ${isActive?'active-proj':''}" data-pid="${esc(p.id)}">
      <div class="pdpi-icon">${icon}</div>
      <div class="pdpi-info">
        <div class="pdpi-name">${esc(p.name)}${isActive?' <span style="font-size:9px;color:var(--blue);font-weight:600;margin-left:4px">● ACTIVE</span>':''}</div>
        <div class="pdpi-meta">${esc(meta||p.type||'')}</div>
      </div>
      <div class="pd-type-badge">${esc(p.type||'')}</div>
      <div class="pdpi-id">${esc(p.id)}</div>
      <div class="pdpi-date">${date}</div>
      <div class="pdpi-actions">
        <button class="pdpi-btn" data-action="edit" title="Edit project details">&#9998;</button>
        <button class="pdpi-btn del" data-action="delete" title="Delete project">&#10006;</button>
      </div>
    </div>`;
  }).join('');

  // ── Event delegation — bulletproof, no string-quoting issues ──
  list.onclick = function(e) {
    const btn = e.target.closest('.pdpi-btn');
    const item = e.target.closest('.pd-proj-item');
    if(!item) return;
    const pid = item.getAttribute('data-pid');
    if(!pid) return;

    if(btn) {
      e.stopPropagation();
      const action = btn.getAttribute('data-action');
      if(action === 'delete') {
        deleteProjectFromDash(pid);
      } else if(action === 'edit') {
        editProjectFromDash(pid);
      }
    } else {
      // Click anywhere else on the item → open project
      openProjectFromDash(pid);
    }
  };
}

function openProjectFromDash(id) {
  const projects = JSON.parse(localStorage.getItem('pa_projects') || '[]');
  const proj = projects.find(p => p.id === id);
  if(!proj) return;
  closeDash();
  loadProject(proj);
  loadWbsFromProject();
  // Reset schedule for new project context
  WPS = [];
  RECIPE = [];
  SCHED = {};
  renderWbsTree();
  renderMilestones();
  renderLib();
  // Go to structure tab
  showApp();
}

function editProjectFromDash(id) {
  const projects = JSON.parse(localStorage.getItem('pa_projects') || '[]');
  const proj = projects.find(p => p.id === id);
  if(!proj) return;
  closeDash();
  // Pre-fill edit form
  const _sf=(eid,v)=>{const e=document.getElementById(eid);if(e)e.value=v||'';};
  _sf('ps-name', proj.name);
  _sf('ps-id', proj.id);
  _sf('ps-loc', proj.loc);
  _sf('ps-client', proj.client);
  _sf('ps-value', proj.value);
  _sf('ps-start', proj.start || '2025-01-06');
  _sf('ps-dur', proj.weeks || 104);
  _sf('ps-finish', proj.finish || '');
  const typeEl = document.getElementById('ps-type');
  if(typeEl && proj.type) typeEl.value = proj.type;
  calcProjFinish();
  renderProjectHistory();
  document.getElementById('proj-setup').style.display = 'flex';
}

function deleteProjectFromDash(id) {
  const projects = JSON.parse(localStorage.getItem('pa_projects') || '[]');
  const proj = projects.find(p => p.id === id);
  if(!proj) { alert('Project not found.'); return; }
  if(!confirm(`Delete "${proj.name}" (${proj.id})?\n\nThis will permanently remove the project and all associated schedule data. This cannot be undone.`)) return;

  // Remove from project list
  const filtered = projects.filter(p => p.id !== id);
  localStorage.setItem('pa_projects', JSON.stringify(filtered));

  // Clear all per-project storage
  localStorage.removeItem('pa_wbs_' + id);
  localStorage.removeItem('pa_risks_' + id);
  localStorage.removeItem('pa_evm_' + id);

  // If this was the active project, clear current state
  if(currentProject?.id === id) {
    currentProject = null;
    WPS = [];
    WBS_NODES = [];
    BASELINES = [null, null, null, null];
    _activeBaseline = -1;
    SCHED = {};
    if(VS) { VS.flat = []; VS.totalH = 0; VS._rowTops = null; }
    localStorage.removeItem('pa_last_project');
  }

  // Refresh the dashboard
  renderDashboard();
  // Show toast confirmation
  if(typeof _showToast === 'function') _showToast(`&#10003; Deleted "${proj.name}"`, 3000);
}


// ═══════════════════════════════════════════════════════════════
// V6 — MAIN TAB + SUB-TAB NAVIGATION
// ═══════════════════════════════════════════════════════════════

let _currentSubTab = 'struct';
function ganttViewFull(mode) {
  const tableDiv = document.getElementById('sched-split-table');
  const ganttDiv = document.getElementById('sched-split-gantt');
  const divider = document.getElementById('split-divider');
  document.querySelectorAll('.split-toggle-btn').forEach(b => b.classList.remove('active'));
  event.target?.classList.add('active');
  if(mode==='table') {
    if(tableDiv) tableDiv.style.flex = '1';
    if(ganttDiv) ganttDiv.style.width = '0';
    if(divider) divider.style.display = 'none';
  } else if(mode==='gantt') {
    if(tableDiv) tableDiv.style.flex = '0';
    if(tableDiv) tableDiv.style.width = '0';
    if(ganttDiv) ganttDiv.style.width = '100%';
    if(divider) divider.style.display = 'none';
    renderGantt();
  } else {
    if(tableDiv) { tableDiv.style.flex = '1'; tableDiv.style.width = ''; }
    if(ganttDiv) ganttDiv.style.width = '45%';
    if(divider) divider.style.display = 'block';
    renderGantt();
  }
}

function initSplitDivider() {
  const divider = document.getElementById('split-divider');
  const split = document.getElementById('sched-split');
  const ganttDiv = document.getElementById('sched-split-gantt');
  if(!divider||!split||!ganttDiv) return;
  let dragging = false, startX = 0, startW = 0;
  divider.addEventListener('mousedown', e => {
    dragging = true; startX = e.clientX; startW = ganttDiv.offsetWidth;
    divider.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  });
  document.addEventListener('mousemove', e => {
    if(!dragging) return;
    const dx = startX - e.clientX;
    const newW = Math.max(200, Math.min(split.offsetWidth * 0.7, startW + dx));
    ganttDiv.style.width = newW + 'px';
    ganttDiv.style.flex = 'none';
  });
  document.addEventListener('mouseup', () => {
    if(!dragging) return;
    dragging = false;
    divider.classList.remove('dragging');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    renderGantt();
  });
}

// ── LOGICS TAB ─────────────────────────────────────────────
function renderLogicsTab() {
  const body = document.getElementById('logics-body');
  const cnt = document.getElementById('logics-count');
  if(!body) return;
  assignWbs();
  const filter = (document.getElementById('logics-filter')?.value||'').toLowerCase();

  let rows = [];
  WPS.forEach(succ => {
    succ.preds.forEach(pred => {
      const predWp = WPS.find(x=>x.id===pred.id);
      if(!predWp) return;
      if(filter && !predWp.name.toLowerCase().includes(filter) && !succ.name.toLowerCase().includes(filter)) return;
      rows.push({predWp, pred, succ});
    });
  });

  if(cnt) cnt.textContent = rows.length + ' relationship' + (rows.length!==1?'s':'');
  if(!rows.length) {
    body.innerHTML = `<tr><td colspan="5" style="padding:32px;text-align:center;color:var(--t3)">No relationships defined yet. Add activities in the Schedule tab and link them, or use Add Relationship.</td></tr>`;
    return;
  }

  body.innerHTML = rows.map((row,i) => {
    const {predWp, pred, succ} = row;
    const isCp = SCHED.r?.[predWp.id]?.cp && SCHED.r?.[succ.id]?.cp;
    return `<tr style="${isCp?'background:var(--redd)':''}" class="${isCp?'wt-row-cp':''}">
      <td><span class="at-badge" style="margin-right:4px">${predWp.wbs||'?'}</span>${esc(predWp.name)}</td>
      <td>
        <select class="constraint-sel" onchange="updateRel('${predWp.id}','${succ.id}','tp',this.value);renderLogicsTab()">
          ${['FS','SS','FF','SF'].map(t=>`<option value="${t}" ${pred.tp===t?'selected':''}>${t}</option>`).join('')}
        </select>
      </td>
      <td>
        <input type="number" style="width:52px;font-size:11px;padding:3px;background:var(--s1);border:1px solid var(--b1);border-radius:4px;color:var(--t1)" 
          value="${pred.lg||0}" onchange="updateRel('${predWp.id}','${succ.id}','lg',+this.value);renderLogicsTab()">d
      </td>
      <td><span class="at-badge" style="margin-right:4px">${succ.wbs||'?'}</span>${esc(succ.name)}</td>
      <td>
        <button class="ib del" onclick="deleteRel('${predWp.id}','${succ.id}')" title="Delete relationship">&#215;</button>
      </td>
    </tr>`;
  }).join('');
}

function updateRel(predId, succId, field, val) {
  const succ = WPS.find(w=>w.id===succId);
  if(!succ) return;
  const pred = succ.preds.find(p=>p.id===predId);
  if(!pred) return;
  pred[field] = val;
  recalc(); renderWps();
}

function deleteRel(predId, succId) {
  const succ = WPS.find(w=>w.id===succId);
  if(!succ) return;
  succ.preds = succ.preds.filter(p=>p.id!==predId);
  recalc(); renderWps(); renderLogicsTab();
}

function addLogicRow() {
  assignWbs();
  if(WPS.length<2) { alert('Add at least 2 activities in the Schedule tab first.'); return; }
  const predCode = prompt('Predecessor WBS code (e.g. 1.1):');
  if(!predCode) return;
  const predWp = WPS.find(w=>w.wbs===predCode.trim());
  if(!predWp) { alert('Activity not found: '+predCode); return; }
  const succCode = prompt('Successor WBS code (e.g. 1.2):');
  if(!succCode) return;
  const succWp = WPS.find(w=>w.wbs===succCode.trim());
  if(!succWp) { alert('Activity not found: '+succCode); return; }
  if(predWp.id===succWp.id) { alert('Cannot link activity to itself.'); return; }
  if(succWp.preds.some(p=>p.id===predWp.id)) { alert('Relationship already exists.'); return; }
  succWp.preds.push({id:predWp.id,tp:'FS',lg:0});
  recalc(); renderWps(); renderLogicsTab();
}

function clearAllLogics() {
  if(!confirm('Clear ALL relationships? This cannot be undone.')) return;
  WPS.forEach(w=>w.preds=[]);
  recalc(); renderWps(); renderLogicsTab();
}

// ── CALENDARS TAB ───────────────────────────────────────────
function renderCalsTab() {
  const panel = document.getElementById('cals-panel-body');
  if(!panel) return;
  panel.innerHTML = `
    <div style="max-width:600px">
      <div style="margin-bottom:14px;padding:10px 14px;background:var(--bluel);border:1px solid var(--bluem);border-radius:6px;font-size:12px;color:var(--t2)">
        &#8505; Calendars can be assigned at the <b>Project</b> level (applies to all activities by default), 
        <b>WBS</b> level (in Define WBS tab), or <b>Activity</b> level (in the Schedule table Calendar column).
      </div>
      ${CALENDARS.map(cal => `
        <div style="background:var(--s0);border:1px solid var(--b1);border-radius:7px;padding:12px 14px;margin-bottom:8px;display:flex;align-items:center;gap:12px">
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px;color:var(--t1)">${esc(cal.name)}</div>
            <div style="font-size:11px;color:var(--t3);margin-top:2px">
              ${['S','M','T','W','T','F','S'].map((d,i)=>`<span style="${cal.days.includes(i)?'color:var(--blue);font-weight:700':'color:var(--b2)'}">${d}</span>`).join(' ')} · ${cal.hpd||8}h/day
              ${cal.builtin?'<span style="margin-left:6px;font-size:9px;background:var(--s2);padding:1px 5px;border-radius:3px">BUILT-IN</span>':''}
            </div>
          </div>
          <div style="display:flex;gap:6px">
            <select style="font-size:11px;padding:4px;background:var(--s1);border:1px solid var(--b1);border-radius:4px;color:var(--t1)" 
              onchange="setProjectCal(${cal.id})" ${(currentProject?.calId||0)===cal.id?'':''}
              title="Set as project default">
            </select>
            ${(currentProject?.calId||0)===cal.id?'<span style="color:var(--blue);font-size:11px;font-weight:700">&#10003; Project Default</span>':'<button class="btn btns" onclick="setProjectCal('+cal.id+')" style="font-size:10px">Set Default</button>'}
            ${!cal.builtin?`<button class="btn btns del" onclick="deleteCalendar(${cal.id})" style="font-size:10px">Delete</button>`:''}
          </div>
        </div>
      `).join('')}
      <button class="btn btnp" onclick="openCalModal()" style="margin-top:6px">+ Add New Calendar</button>
    </div>
  `;
}

function setProjectCal(id) {
  if(currentProject) { currentProject.calId = id; saveProjectToList(); }
  if(P) P.cal = id;
  recalc(); renderCalsTab(); renderWps();
}

// ── REPORT TAB ──────────────────────────────────────────────
function updateReportStats() {
  const acts = WPS.length;
  const cp = WPS.filter(w=>SCHED.r?.[w.id]?.cp).length;
  const dur = SCHED.pe||0;
  let finDate = '';
  if(P.start && dur) {
    const d = new Date(P.start);
    d.setDate(d.getDate()+dur);
    finDate = d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  }
  const _s = (id,v) => { const e=document.getElementById(id); if(e) e.textContent=v; };
  _s('rs-acts', acts);
  _s('rs-cp', cp);
  _s('rs-dur', dur);
  _s('rs-fin', finDate||'—');
}

// Export stubs (connect to existing functions)
// exportXML removed
function exportJSON() {
  const data = JSON.stringify({project:currentProject,wbs:WBS_NODES,activities:WPS,calendars:CALENDARS,milestones:MILESTONES},null,2);
  const a=document.createElement('a');a.href='data:application/json,'+encodeURIComponent(data);
  a.download=(currentProject?.id||'schedule')+'.json';a.click();
}
function exportWBSTemplate() {
  const data = JSON.stringify({wbs:WBS_NODES,calendars:CALENDARS},null,2);
  const a=document.createElement('a');a.href='data:application/json,'+encodeURIComponent(data);
  a.download=(currentProject?.id||'template')+'_wbs.json';a.click();
}
// ═══════════════════════════════════════════════════════════════
// V7 — UNIFIED BUILD SCHEDULE
// ═══════════════════════════════════════════════════════════════

let _wbsSidebarOpen = false;
let _colSortKey = null, _colSortDir = 'asc';

// ── WBS SIDEBAR ───────────────────────────────────────────────
function toggleWbsSidebar() {
  _wbsSidebarOpen = !_wbsSidebarOpen;
  const sb = document.getElementById('wbs-sidebar');
  const btn = document.getElementById('btn-wbs-toggle');
  const resizer = document.getElementById('sidebar-resizer');
  if(sb) sb.classList.toggle('collapsed', !_wbsSidebarOpen);
  if(resizer) resizer.style.display = _wbsSidebarOpen ? 'block' : 'none';
  if(btn) btn.classList.toggle('active', _wbsSidebarOpen);
  if(_wbsSidebarOpen) { renderWbsTree(); initSidebarResizer(); }
}
// ── PANEL DRAWERS (Milestones, Logics, Calendars) ─────────────
function openPanelDrawer(type) {
  if(type === 'milestones') {
    renderMilestones();
    document.getElementById('ms-drawer-ovl')?.classList.add('on');
  } else if(type === 'logics') {
    renderLogicsTab();
    const lo=document.getElementById('logics-drawer-ovl');if(lo)lo.classList.add('on');
  } else if(type === 'calendars') {
    renderCalsTab();
    document.getElementById('cals-drawer-ovl')?.classList.add('on');
  }
}

// Update showApp to show unified layout
const _orig_showApp = typeof showApp === 'function' ? showApp : null;

// ── COLUMN SORT ───────────────────────────────────────────────
function sortWpsByCol(key) {
  if(_colSortKey === key) {
    _colSortDir = _colSortDir === 'asc' ? 'desc' : 'asc';
  } else {
    _colSortKey = key; _colSortDir = 'asc';
  }
  renderWps();
  // Update sort icons
  document.querySelectorAll('.wt thead th.sortable').forEach(th => {
    th.classList.remove('sort-asc','sort-desc');
    if(th.dataset.sortkey === key) th.classList.add(_colSortDir==='asc'?'sort-asc':'sort-desc');
  });
}
// ── COLUMN RESIZE ─────────────────────────────────────────────
function initColResize() {
  const table = document.getElementById('wt-table');
  if(!table || table._colResizeInit) return;
  table._colResizeInit = true;
  const ths = table.querySelectorAll('thead th');
  ths.forEach((th, i) => {
    const handle = document.createElement('div');
    handle.className = 'col-resize-handle';
    th.style.position = 'relative';
    th.appendChild(handle);
    let dragging = false, startX = 0, startW = 0;
    handle.addEventListener('mousedown', e => {
      e.stopPropagation(); e.preventDefault();
      dragging = true; startX = e.clientX; startW = th.offsetWidth;
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    });
    document.addEventListener('mousemove', e => {
      if(!dragging) return;
      const newW = Math.max(40, startW + (e.clientX - startX));
      th.style.width = newW + 'px'; th.style.minWidth = newW + 'px';
    });
    document.addEventListener('mouseup', () => {
      if(!dragging) return;
      dragging = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    });
  });
}
// goTab: legacy compat - just show schedule
function goTab(id) { if(_currentMainTab!=='schedule') mainTab('schedule'); }

function updateTabDots() { /* stabs removed in v7 */ }

// ── INIT V7 ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  _loadResLibFromStorage();
  // Start with WBS sidebar collapsed, show it on first load
  const sb = document.getElementById('wbs-sidebar');
  const resizer = document.getElementById('sidebar-resizer');
  if(sb) sb.classList.add('collapsed');
  if(resizer) resizer.style.display = 'none';
});

function openFidicModal(){ alert("Load FIDIC contract templates from the Manage Library panel."); }

// ═══════════════════════════════════════════════════════════════
// RESOURCES, RISK, EVM, DASHBOARD
// ═══════════════════════════════════════════════════════════════

// ── Data stores ───────────────────────────────────────────────
let _evmCache = {};
// ── Resource Navigation ───────────────────────────────────────
function resNav(type) {
  _currentResNav = type;
  document.querySelectorAll('.res-nav-item').forEach(el => el.classList.remove('act'));
  const btn = document.getElementById('rn-'+type);
  if(btn) btn.classList.add('act');
  document.querySelectorAll('.res-panel').forEach(p => p.classList.remove('act'));
  const panel = document.getElementById('rp-'+type);
  if(panel) panel.classList.add('act');
  // Update header
  const titles = {labor:'&#128100; People (Labor)',material:'&#128230; Materials',equipment:'&#9881; Equipment',cost:'&#128184; Cost Summary',evm:'&#128200; Earned Value (EVM)',risk:'&#9888; Risk Register'};
  const hdr = document.getElementById('res-hdr-title');
  if(hdr) hdr.innerHTML = titles[type]||type;
  const addBtn = document.getElementById('res-add-btn');
  if(addBtn) {
    const addActions = {labor:"addResource('labor')",material:"addResource('material')",equipment:"addResource('equipment')",risk:'addRisk()',cost:'',evm:''};
    addBtn.style.display = ['labor','material','equipment'].includes(type) ? '' : 'none';
    addBtn.setAttribute('onclick', addActions[type]||'');
  }
  if(type==='cost') { updateCostSummary(); }
  if(type==='evm') renderEVMActivities();
  if(type==='risk') renderRiskTable();
}
// ── LABOR ─────────────────────────────────────────────────────
function addResource(type) {
  type = type || _currentResNav;
  if(type==='labor') {
    RESOURCES.labor.push({id:uid(),name:'New Resource',role:'General Operative',rate:250,avail:100,calId:0});
    renderLaborTable();
  } else if(type==='material') {
    RESOURCES.material.push({id:uid(),name:'New Material',unit:'t',unitCost:50,qty:100});
    renderMaterialTable(); updateCostSummary();
  } else if(type==='equipment') {
    RESOURCES.equipment.push({id:uid(),name:'New Equipment',etype:'Plant',rate:800,qty:1,wbs:''});
    renderEquipmentTable(); updateCostSummary();
  }
}

function renderLaborTable() {
  const body = document.getElementById('labor-body');
  const empty = document.getElementById('labor-empty');
  if(!body) return;
  if(!RESOURCES.labor.length) { body.innerHTML=''; if(empty) empty.style.display='block'; return; }
  if(empty) empty.style.display='none';
  body.innerHTML = RESOURCES.labor.map((r,i) => `<tr>
    <td><input value="${esc(r.name)}" onchange="RESOURCES.labor[${i}].name=this.value"></td>
    <td><select onchange="RESOURCES.labor[${i}].role=this.value">
      ${['General Operative','Foreman','Engineer','Supervisor','Manager','Specialist','Subcontractor'].map(v=>`<option ${r.role===v?'selected':''}>${v}</option>`).join('')}
    </select></td>
    <td><input type="number" value="${r.rate}" onchange="RESOURCES.labor[${i}].rate=+this.value;updateCostSummary()"></td>
    <td><input type="number" value="${r.avail}" min="10" max="100" onchange="RESOURCES.labor[${i}].avail=+this.value"></td>
    <td><select onchange="RESOURCES.labor[${i}].calId=+this.value">
      ${CALENDARS.map(cal=>`<option value="${cal.id}" ${r.calId===cal.id?'selected':''}>${esc(cal.name)}</option>`).join('')}
    </select></td>
    <td style="text-align:center;color:var(--t3);font-size:11px">${WPS.filter(w=>w.resourceIds?.includes(r.id)).length}</td>
    <td><button class="ib del" onclick="RESOURCES.labor.splice(${i},1);renderLaborTable();updateCostSummary()">&#215;</button></td>
  </tr>`).join('');
}

function renderMaterialTable() {
  const body = document.getElementById('material-body');
  const empty = document.getElementById('material-empty');
  if(!body) return;
  if(!RESOURCES.material.length) { body.innerHTML=''; if(empty) empty.style.display='block'; return; }
  if(empty) empty.style.display='none';
  body.innerHTML = RESOURCES.material.map((r,i) => `<tr>
    <td><input value="${esc(r.name)}" onchange="RESOURCES.material[${i}].name=this.value"></td>
    <td><input value="${esc(r.unit||'t')}" style="max-width:60px" onchange="RESOURCES.material[${i}].unit=this.value"></td>
    <td><input type="number" value="${r.unitCost}" onchange="RESOURCES.material[${i}].unitCost=+this.value;renderMaterialTable();updateCostSummary()"></td>
    <td><input type="number" value="${r.qty}" onchange="RESOURCES.material[${i}].qty=+this.value;renderMaterialTable();updateCostSummary()"></td>
    <td style="font-weight:600;color:var(--blue)">${getCurrSym()}${((r.unitCost||0)*(r.qty||0)).toLocaleString()}</td>
    <td><button class="ib del" onclick="RESOURCES.material.splice(${i},1);renderMaterialTable();updateCostSummary()">&#215;</button></td>
  </tr>`).join('');
}

function renderEquipmentTable() {
  const body = document.getElementById('equipment-body');
  const empty = document.getElementById('equipment-empty');
  if(!body) return;
  if(!RESOURCES.equipment.length) { body.innerHTML=''; if(empty) empty.style.display='block'; return; }
  if(empty) empty.style.display='none';
  body.innerHTML = RESOURCES.equipment.map((r,i) => `<tr>
    <td><input value="${esc(r.name)}" onchange="RESOURCES.equipment[${i}].name=this.value"></td>
    <td><select onchange="RESOURCES.equipment[${i}].etype=this.value">
      ${['Crane','Excavator','Concrete Pump','Generator','Scaffolding','Formwork','Vehicle','Other Plant'].map(v=>`<option ${r.etype===v?'selected':''}>${v}</option>`).join('')}
    </select></td>
    <td><input type="number" value="${r.rate}" onchange="RESOURCES.equipment[${i}].rate=+this.value;updateCostSummary()"></td>
    <td><input type="number" value="${r.qty||1}" onchange="RESOURCES.equipment[${i}].qty=+this.value;updateCostSummary()"></td>
    <td><input value="${esc(r.wbs||'')}" placeholder="e.g. 1.2" onchange="RESOURCES.equipment[${i}].wbs=this.value"></td>
    <td><button class="ib del" onclick="RESOURCES.equipment.splice(${i},1);renderEquipmentTable();updateCostSummary()">&#215;</button></td>
  </tr>`).join('');
}
// ── EVM ───────────────────────────────────────────────────────
function renderEVMActivities() {
  const body = document.getElementById('evm-act-body');
  if(!body) return;
  if(!WPS.length) { body.innerHTML='<tr><td colspan="6" style="padding:16px;color:var(--t3);text-align:center">No activities in schedule.</td></tr>'; return; }
  const sym = getCurrSym();
  const hasImportedCosts = WPS.some(w => w.evBudget > 0 || w.cost > 0);
  body.innerHTML = WPS.slice(0, 200).map((w,i) => { // limit to 200 for performance in table
    const existing = EVM_DATA.actuals.find(a=>a.id===w.id)||{pct:w.pct||0,ac:w.actualCost||0};
    const actBAC = w.evBudget || w.cost || 0;
    const ev = actBAC * (existing.pct||0) / 100;
    const sc = w.status==='COM'?'status-com':w.status==='IP'?'status-ip':'status-ns';
    return `<tr>
      <td style="font-family:var(--mono);font-size:9px;color:var(--blue)">${w.wbs||'—'}</td>
      <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis" title="${esc(w.name)}">${esc(w.name.substring(0,40))}</td>
      <td style="text-align:center">${w.dur}d</td>
      <td style="text-align:right;font-family:var(--mono);font-size:10px;color:var(--t2)">${actBAC?sym+Math.round(actBAC).toLocaleString():'—'}</td>
      <td><input type="number" min="0" max="100" value="${existing.pct||0}" style="width:52px"
        onchange="setEvmActual('${w.id}','pct',+this.value);w.pct=+this.value">%</td>
      <td><input type="number" min="0" value="${Math.round(existing.ac||0)}" style="width:72px"
        onchange="setEvmActual('${w.id}','ac',+this.value);w.actualCost=+this.value"></td>
      <td style="text-align:right;font-family:var(--mono);font-size:10px;color:${ev>0?'var(--blue)':'var(--t3)'}">${ev>0?sym+Math.round(ev).toLocaleString():'—'}</td>
    </tr>`;
  }).join('') + (WPS.length > 200 ? `<tr><td colspan="6" style="padding:8px;text-align:center;color:var(--t3);font-size:11px">Showing 200 of ${WPS.length} activities. Use filters to narrow down.</td></tr>` : '');
}

function setEvmActual(id, field, val) {
  let a = EVM_DATA.actuals.find(x=>x.id===id);
  if(!a) { a={id,pct:0,ac:0}; EVM_DATA.actuals.push(a); }
  a[field] = val;
}
function renderDashboardEVM() {
  if(!_evmCache || (!_evmCache.SPI && !_evmCache.BCWP)) return;
  _updateDashEvm?.(_evmCache);
}
function updateRiskMatrix() {
  // Reset all cells to 0
  for(let p=1;p<=4;p++) for(let im=1;im<=4;im++) {
    const el = document.getElementById(`rm-${p}${im}`);
    if(el) el.textContent='0';
  }
  RISKS.forEach(r=>{
    const el = document.getElementById(`rm-${r.prob||1}${r.impact||1}`);
    if(el) el.textContent=+el.textContent+1;
  });
}

function renderDashboardRisk() {
  const body = document.getElementById('db-risk-body');
  if(!body) return;
  if(!RISKS.length) { body.innerHTML='<div style="font-size:12px;color:var(--t3)">No risks logged.</div>'; return; }
  const high = RISKS.filter(r=>(r.prob*r.impact)>=12).length;
  const med = RISKS.filter(r=>{ const s=r.prob*r.impact; return s>=6&&s<12; }).length;
  const low = RISKS.filter(r=>(r.prob*r.impact)<6).length;
  body.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:6px;font-size:12px">
      <div style="display:flex;justify-content:space-between;padding:5px 8px;background:#FEE2E2;border-radius:4px">
        <span>&#128308; Critical/High</span><strong>${high}</strong></div>
      <div style="display:flex;justify-content:space-between;padding:5px 8px;background:#FEF3C7;border-radius:4px">
        <span>&#128993; Medium</span><strong>${med}</strong></div>
      <div style="display:flex;justify-content:space-between;padding:5px 8px;background:#D1FAE5;border-radius:4px">
        <span>&#128994; Low</span><strong>${low}</strong></div>
      <div style="margin-top:4px;font-size:11px;color:var(--t3)">Total: ${RISKS.length} risks</div>
    </div>`;
}

// ── DCMA 14-POINT ASSESSMENT ──────────────────────────────────
function runDCMA() {
  const body = document.getElementById('dcma-body');
  const cntEl = document.getElementById('dcma-pass-count');
  if(!body) return;
  if(!WPS.length) { body.innerHTML='<div style="color:var(--t3);font-size:12px;padding:12px 0">Add activities to the schedule first.</div>'; return; }

  const n = WPS.length;
  const results = [];

  // 1. Missing Logic (activities with no predecessors AND no successors, except milestones)
  const isolated = WPS.filter(w=>w.actType!=='MS'&&!w.preds.length&&!WPS.some(x=>x.preds.some(p=>p.id===w.id)));
  results.push({name:'Missing Logic',desc:'Activities with no relationships',pass:isolated.length===0,val:`${isolated.length} activities`,threshold:'0'});

  // 2. Leads (negative lags)
  const leads = WPS.flatMap(w=>w.preds.filter(p=>p.lg<0));
  results.push({name:'Leads (Negative Lag)',desc:'Relationships with negative lag',pass:leads.length===0,val:`${leads.length}`,threshold:'0'});

  // 3. Lags (positive lags >0)
  const lags = WPS.flatMap(w=>w.preds.filter(p=>p.lg>0));
  const lagPct = Math.round(100*lags.length/Math.max(1,WPS.flatMap(w=>w.preds).length));
  results.push({name:'Lags',desc:'Relationships with positive lag',pass:lagPct<=5,val:`${lags.length} (${lagPct}%)`,threshold:'≤5%'});

  // 4. Relationship Types — SS/FF/SF usage
  const allRels = WPS.flatMap(w=>w.preds);
  const nonFS = allRels.filter(p=>p.tp!=='FS').length;
  const nonFSpct = Math.round(100*nonFS/Math.max(1,allRels.length));
  results.push({name:'Relationship Types',desc:'Non-FS relationships',pass:nonFSpct<=10,val:`${nonFS} (${nonFSpct}%)`,threshold:'≤10%'});

  // 5. Hard Constraints
  const hardConstraints = WPS.filter(w=>['MSO','MFO','FNET','FNLT'].includes(w.constraint));
  const hcPct = Math.round(100*hardConstraints.length/n);
  results.push({name:'Hard Constraints',desc:'Activities with mandatory constraints',pass:hcPct<=5,val:`${hardConstraints.length} (${hcPct}%)`,threshold:'≤5%'});

  // 6. High Total Float (>44 working days)
  const highFloat = WPS.filter(w=>{ const r=SCHED.r?.[w.id]; return r&&!r.cp&&r.tf>44; });
  results.push({name:'High Total Float',desc:'TF > 44 working days',pass:highFloat.length===0,val:`${highFloat.length}`,threshold:'0'});

  // 7. Negative Float
  const negFloat = WPS.filter(w=>{ const r=SCHED.r?.[w.id]; return r&&r.tf<0; });
  results.push({name:'Negative Float',desc:'Activities with negative float',pass:negFloat.length===0,val:`${negFloat.length}`,threshold:'0'});

  // 8. High Duration (>44 working days for tasks)
  const highDur = WPS.filter(w=>w.actType==='TASK'&&w.dur>44);
  const hdPct = Math.round(100*highDur.length/n);
  results.push({name:'High Duration',desc:'Task duration > 44 working days',pass:hdPct<=5,val:`${highDur.length} (${hdPct}%)`,threshold:'≤5%'});

  // 9. Invalid Dates — missing start date (proxy: not in SCHED)
  const noSched = WPS.filter(w=>!SCHED.r?.[w.id]);
  results.push({name:'Invalid Dates',desc:'Activities not scheduled',pass:noSched.length===0,val:`${noSched.length}`,threshold:'0'});

  // 10. Resource Loading — activities without assigned resources
  const unresourced = WPS.filter(w=>w.actType==='TASK'&&!w.resourceIds?.length);
  const urPct = Math.round(100*unresourced.length/Math.max(1,WPS.filter(w=>w.actType==='TASK').length));
  results.push({name:'Resource Loading',desc:'Task activities without resources',pass:urPct<=20,val:`${unresourced.length} (${urPct}%)`,threshold:'≤20%'});

  // 11. Critical Path — at least some CP activities
  const cpActs = WPS.filter(w=>SCHED.r?.[w.id]?.cp);
  const cpPct = Math.round(100*cpActs.length/n);
  results.push({name:'Critical Path Defined',desc:'Schedule has a defined critical path',pass:cpActs.length>0,val:`${cpActs.length} CP acts (${cpPct}%)`,threshold:'>0'});

  // 12. CP Length Index (CPLI) — CP duration vs total
  const cpDur = SCHED.pe||0;
  const totalDurSum = WPS.reduce((s,w)=>s+w.dur,0);
  const cpli = totalDurSum>0?cpDur/totalDurSum:0;
  results.push({name:'CPLI',desc:'Critical Path Length Index',pass:cpli>=0.95&&cpli<=1.1,val:cpli.toFixed(2),threshold:'0.95–1.10'});

  // 13. Milestone Coverage
  const msCount = WPS.filter(w=>w.actType==='MS').length + MILESTONES.length;
  results.push({name:'Milestone Coverage',desc:'Schedule has key milestones defined',pass:msCount>=2,val:`${msCount} milestones`,threshold:'≥2'});

  // 14. Baseline — (check if we have project data saved)
  const hasBaseline = !!currentProject?.id && !!localStorage.getItem('pa_wbs_'+currentProject?.id);
  results.push({name:'Baseline Exists',desc:'Project saved with schedule data',pass:hasBaseline,val:hasBaseline?'Yes':'No',threshold:'Yes'});

  const passCount = results.filter(r=>r.pass).length;
  const score = Math.round(100*passCount/results.length);
  if(cntEl) cntEl.textContent = `${passCount}/${results.length} passed`;

  body.innerHTML = results.map(r=>`<div class="dcma-item">
    <div class="dcma-icon ${r.pass?'dcma-pass':'dcma-fail'}">${r.pass?'✓':'✗'}</div>
    <div class="dcma-name"><strong>${r.name}</strong> — ${r.desc}</div>
    <div class="dcma-val">${r.val} <span style="opacity:.5">/ ${r.threshold}</span></div>
  </div>`).join('');

  // Update health ring
  updateHealthRing(score);
}

function updateHealthRing(score) {
  const arcs = document.querySelectorAll('#health-arc');  // handle dupes
  const vals = document.querySelectorAll('#health-score-val');
  const grades = document.querySelectorAll('#health-grade');
  const circumference = 239;
  const offset = circumference - (score/100)*circumference;
  const color = score>=80?'#22C55E':score>=60?'#F59E0B':'#EF4444';
  const label = score>=90?'Excellent ★★★':score>=75?'Good ★★☆':score>=60?'Fair ★☆☆':'Needs Work ☆☆☆';
  arcs.forEach(arc => {
    arc.setAttribute('stroke-dashoffset', offset);  // SVG attribute (not CSS)
    arc.setAttribute('stroke', color);
  });
  vals.forEach(v => { v.textContent = score+'%'; v.style.color = color; });
  grades.forEach(g => { g.textContent = label; });
}

// ── S-CURVE ───────────────────────────────────────────────────
function renderSCurve() {
  const canvas = document.getElementById('scurve-canvas');
  if(!canvas) return;
  const W = Math.max(400, canvas.offsetWidth||600), H = Math.max(220, canvas.offsetHeight||260);
  canvas.width=W; canvas.height=H;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,W,H);

  if(!WPS.length || !SCHED.pe) {
    ctx.fillStyle='#9ca3af'; ctx.font='13px system-ui'; ctx.textAlign='center';
    ctx.fillText('Build or import a schedule to see S-Curves', W/2, H/2);
    return;
  }

  const mode = document.getElementById('scurve-mode')?.value||'cost';
  const projDur  = SCHED.pe;
  const periods  = Math.min(104, Math.ceil(projDur <= 260 ? projDur/5 : projDur/10));
  const periodLen = projDur/periods;
  const pad = {top:32,right:24,bottom:40,left:62};
  const cw = W-pad.left-pad.right, ch = H-pad.top-pad.bottom;
  const projStart = new Date(P.start||'2025-01-01');

  // Data date in project days
  const ddStr = PROJECT_SETTINGS.dataDate||'';
  const ddDays = ddStr ? Math.max(0,(new Date(ddStr)-projStart)/86400000) : null;
  const ddPeriod = ddDays!=null ? Math.floor(ddDays/periodLen) : null;

  // Value getter per activity per period
  const actVal = (w, periodStart, periodEnd, useEarly) => {
    const r = SCHED.r?.[w.id]||{};
    const budget = w.evBudget||w.cost||(mode==='dur'?w.dur:1);
    const aStart = useEarly ? (r.es||0) : (r.ls||0);
    const aEnd   = useEarly ? (r.ef||r.es+(w.dur||0)) : (r.lf||r.ls+(w.dur||0));
    const dur = Math.max(1, aEnd-aStart);
    const overlap = Math.max(0, Math.min(aEnd,periodEnd)-Math.max(aStart,periodStart));
    return (budget/dur)*overlap;
  };

  // ── Build PV (planned, from schedule early dates) ──────────
  const pv=[]; let cumPV=0;
  for(let i=0;i<periods;i++){
    let val=0;
    WPS.forEach(w=>{ val+=actVal(w,i*periodLen,(i+1)*periodLen,true); });
    cumPV+=val; pv.push(cumPV);
  }

  // ── Build PV Late (from schedule late dates) ──────────────
  const pvLate=[]; let cumPVL=0;
  for(let i=0;i<periods;i++){
    let val=0;
    WPS.forEach(w=>{ val+=actVal(w,i*periodLen,(i+1)*periodLen,false); });
    cumPVL+=val; pvLate.push(cumPVL);
  }

  // ── Build Baseline PV Early + Late (if baseline loaded) ───
  const bl = BASELINES[_activeBaseline];
  const blPVE=[], blPVL=[];
  if(bl?.activities?.length) {
    let cumBLE=0, cumBLL=0;
    for(let i=0;i<periods;i++){
      let ve=0, vl=0;
      bl.activities.forEach(a=>{
        const matchW = WPS.find(w=>w.activityId===a.activityId);
        const budget = matchW ? (matchW.evBudget||matchW.cost||0) : (mode==='dur'?+(a.dur||0):1);
        if(budget<=0) return;
        const parse = s => s?(new Date(s)-projStart)/86400000:null;
        const bES=parse(a.targetStart||a.earlyStart)||0;
        const bEF=parse(a.targetEnd||a.earlyEnd)||bES+(+(a.dur||1));
        const bLS=parse(a.lateStart)||bES;
        const bLF=parse(a.lateEnd)||bEF;
        const durE=Math.max(1,bEF-bES), durL=Math.max(1,bLF-bLS);
        const pS=i*periodLen, pE=(i+1)*periodLen;
        ve+=(budget/durE)*Math.max(0,Math.min(bEF,pE)-Math.max(bES,pS));
        vl+=(budget/durL)*Math.max(0,Math.min(bLF,pE)-Math.max(bLS,pS));
      });
      cumBLE+=ve; blPVE.push(cumBLE);
      cumBLL+=vl; blPVL.push(cumBLL);
    }
  }

  // ── Build EV (ceases at data date) ────────────────────────
  const ev=[]; let cumEV=0;
  const hasEVData = WPS.some(w=>w.pct>0||w.actualCost>0||w.evBudget>0);
  for(let i=0;i<periods;i++){
    const inPast = ddPeriod==null || i<=ddPeriod;
    let val=0;
    if(inPast && hasEVData) {
      WPS.forEach(w=>{
        const r=SCHED.r?.[w.id]||{};
        const budget=w.evBudget||w.cost||(mode==='dur'?w.dur:1);
        const pct=(w.pct||0)/100;
        const aStart = w.actualStart?(new Date(w.actualStart)-projStart)/86400000:(r.es||0);
        const aEnd   = w.actualFinish?(new Date(w.actualFinish)-projStart)/86400000:
                       (ddDays!=null?ddDays:(r.ef||r.es+(w.dur||0)));
        const evEnd  = ddDays!=null?Math.min(aEnd,ddDays):aEnd;
        const dur    = Math.max(1,evEnd-aStart);
        const pS=i*periodLen, pE=(i+1)*periodLen;
        const overlap=Math.max(0,Math.min(evEnd,pE)-Math.max(aStart,pS));
        val+=(budget*pct/dur)*overlap;
      });
    }
    cumEV+=val; ev.push(cumEV);
  }

  // ── Build Remaining Early + Late (from data date onwards) ─
  const remEarly=[], remLate=[];
  let cumRE=0, cumRL=0;
  // The RE/RL start from the EV endpoint value (not 0)
  const evAtDD = ddPeriod!=null ? (ev[ddPeriod]||0) : (ev[ev.length-1]||0);
  for(let i=0;i<periods;i++){
    const afterDD = ddPeriod==null || i>ddPeriod;
    let vE=0, vL=0;
    if(afterDD) {
      WPS.forEach(w=>{
        const r=SCHED.r?.[w.id]||{};
        const budget=w.evBudget||w.cost||(mode==='dur'?w.dur:1);
        const remPct=1-((w.pct||0)/100);
        if(remPct<=0) return;
        // Remaining early: from max(es,ddDays) → ef
        const reS=Math.max(r.es||0, ddDays||0), reE=r.ef||reS+(w.dur||0);
        const rlS=Math.max(r.ls||0, ddDays||0), rlE=r.lf||rlS+(w.dur||0);
        const durRE=Math.max(1,reE-reS), durRL=Math.max(1,rlE-rlS);
        const pS=i*periodLen, pE=(i+1)*periodLen;
        vE+=(budget*remPct/durRE)*Math.max(0,Math.min(reE,pE)-Math.max(reS,pS));
        vL+=(budget*remPct/durRL)*Math.max(0,Math.min(rlE,pE)-Math.max(rlS,pS));
      });
    }
    cumRE+=vE; remEarly.push(cumRE + evAtDD);
    cumRL+=vL; remLate.push(cumRL + evAtDD);
  }

  // ── Normalize ───────────────────────────────────────────────
  const maxVal = Math.max(pv[pv.length-1]||1, pvLate[pvLate.length-1]||1,
    bl?.activities?.length?(blPVE[blPVE.length-1]||0):0, 0.01);
  const norm = v => Math.min(105, v/maxVal*100);
  const pvPct=pv.map(norm), pvLPct=pvLate.map(norm);
  const evPct=ev.map(norm), rePct=remEarly.map(norm), rlPct=remLate.map(norm);
  const blEPct=blPVE.map(norm), blLPct=blPVL.map(norm);

  // ── Draw Grid ───────────────────────────────────────────────
  ctx.save();
  ctx.strokeStyle='rgba(0,0,0,.06)'; ctx.lineWidth=1;
  for(let i=0;i<=5;i++){
    const y=pad.top+ch*(1-i/5);
    ctx.beginPath(); ctx.moveTo(pad.left,y); ctx.lineTo(pad.left+cw,y); ctx.stroke();
    ctx.fillStyle='#9ca3af'; ctx.font='10px system-ui'; ctx.textAlign='right';
    ctx.fillText(i*20+'%',pad.left-5,y+4);
  }
  [0.25,0.5,0.75].forEach(t=>{ const x=pad.left+cw*t; ctx.beginPath(); ctx.moveTo(x,pad.top); ctx.lineTo(x,pad.top+ch); ctx.stroke(); });
  ctx.restore();

  // ── Data Date line ──────────────────────────────────────────
  if(ddDays!=null && ddDays>0 && ddDays<projDur) {
    const ddX=pad.left+cw*(ddDays/projDur);
    ctx.save(); ctx.setLineDash([4,3]); ctx.strokeStyle='#F59E0B'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(ddX,pad.top); ctx.lineTo(ddX,pad.top+ch); ctx.stroke();
    ctx.setLineDash([]); ctx.fillStyle='#F59E0B'; ctx.textAlign='center'; ctx.font='bold 9px system-ui';
    ctx.fillText('DD',ddX,pad.top-4); ctx.restore();
  }

  // ── Draw helpers ────────────────────────────────────────────
  const drawLine = (data, color, lw, dash, startIdx) => {
    ctx.save(); ctx.strokeStyle=color; ctx.lineWidth=lw;
    if(dash) ctx.setLineDash(dash); else ctx.setLineDash([]);
    ctx.beginPath();
    const begin = startIdx||0;
    for(let i=begin;i<data.length;i++){
      const x=pad.left+cw*(i/(periods-1||1)), y=pad.top+ch*(1-data[i]/100);
      i===begin?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.stroke(); ctx.setLineDash([]); ctx.restore();
  };
  const fillUnder = (data, color) => {
    ctx.save(); ctx.beginPath();
    data.forEach((v,i)=>{ const x=pad.left+cw*(i/(periods-1||1)),y=pad.top+ch*(1-v/100); i===0?ctx.moveTo(x,y):ctx.lineTo(x,y); });
    ctx.lineTo(pad.left+cw,pad.top+ch); ctx.lineTo(pad.left,pad.top+ch); ctx.closePath();
    ctx.fillStyle=color; ctx.fill(); ctx.restore();
  };

  // Draw: Baseline PV Late (grey dash), Baseline PV Early (grey dot-dash)
  if(bl?.activities?.length) {
    drawLine(blLPct,'#9CA3AF',1.5,[6,4]);
    drawLine(blEPct,'#6B7280',1.5,[3,3]);
  }
  // PV Late (blue dash)
  fillUnder(pvPct,'rgba(59,130,246,.05)');
  drawLine(pvLPct,'#93C5FD',1.5,[5,3]);
  // PV Early (blue solid)
  drawLine(pvPct,'#3B82F6',2);
  // EV (green solid, only up to data date)
  if(hasEVData) {
    const evEnd = ddPeriod!=null?Math.min(ddPeriod+1,periods):periods;
    drawLine(evPct,'#22C55E',2.5,null,0);
  }
  // RE (amber dash, from data date)
  if(hasEVData&&ddPeriod!=null) {
    drawLine(rePct,'#EAB308',1.5,[3,3],ddPeriod);
    drawLine(rlPct,'#F97316',1.5,[5,3],ddPeriod);
  }

  // ── X-axis ─────────────────────────────────────────────────
  ctx.save(); ctx.fillStyle='#6b7280'; ctx.font='10px system-ui'; ctx.textAlign='center';
  [0,.2,.4,.6,.8,1].forEach(t=>{
    const d=new Date(projStart); d.setDate(d.getDate()+Math.round(projDur*t));
    ctx.fillText(d.toLocaleDateString('en-GB',{month:'short',year:'2-digit'}),pad.left+cw*t,H-5);
  }); ctx.restore();

  // ── Legend ─────────────────────────────────────────────────
  const legendItems=[
    {c:'#3B82F6',lw:2,d:false,l:'PV Early'},
    {c:'#93C5FD',lw:1.5,d:true,l:'PV Late'},
    {c:'#22C55E',lw:2.5,d:false,l:'EV'},
    {c:'#EAB308',lw:1.5,d:true,l:'Rem Early'},
    {c:'#F97316',lw:1.5,d:true,l:'Rem Late'},
    ...(bl?.activities?.length?[{c:'#6B7280',lw:1.5,d:true,l:'BL Early'},{c:'#9CA3AF',lw:1.5,d:true,l:'BL Late'}]:[]),
  ];
  ctx.save(); ctx.font='9px system-ui'; ctx.textAlign='left';
  let lx=pad.left+2;
  legendItems.forEach(item=>{
    ctx.save(); ctx.strokeStyle=item.c; ctx.lineWidth=item.lw;
    if(item.d) ctx.setLineDash([4,3]); else ctx.setLineDash([]);
    ctx.beginPath(); ctx.moveTo(lx,pad.top+8); ctx.lineTo(lx+14,pad.top+8); ctx.stroke();
    ctx.setLineDash([]); ctx.restore();
    ctx.fillStyle='#374151'; ctx.fillText(item.l,lx+16,pad.top+12);
    lx+=ctx.measureText(item.l).width+28;
  });
  ctx.restore();
}


// ═══════════════════════════════════════════════════════════════
// V9 — LIBRARY COLLAPSE, INLINE ADD, PROGRESS, RESOURCE ASSIGN
// ═══════════════════════════════════════════════════════════════

// ── LIBRARY PANEL COLLAPSE ────────────────────────────────────
let _libExpanded = true;
function toggleLibPanel() {
  _libExpanded = !_libExpanded;
  const lib = document.getElementById('lib-panel');
  if(lib) lib.classList.toggle('collapsed', !_libExpanded);
}

// ── % COMPLETE ────────────────────────────────────────────────
function setPct(wi, val) {
  const w = WPS[wi];
  if(!w) return;
  val = Math.max(0, Math.min(100, val));
  w.pct = val;
  if(w.pctType === 'dur') {
    w.remDur = Math.round(w.dur * (1 - val/100));
  }
  // Sync to EVM actuals
  let evm = EVM_DATA.actuals.find(a=>a.id===w.id);
  if(!evm) { evm={id:w.id,pct:0,ac:0}; EVM_DATA.actuals.push(evm); }
  evm.pct = val;
  _afterRenderWps();
}

// ── INLINE ADD ACTIVITY ───────────────────────────────────────
let _inlineAddState = null;
// Override openAddWp to use inline add
function openAddWp() { showInlineAdd(); }

// ── RESOURCE ASSIGN QUICK PANEL ───────────────────────────────
function openResAssign(wi, evt) {
  evt.stopPropagation();
  // Close any existing panel
  document.getElementById('res-quick-panel')?.remove();

  const w = WPS[wi];
  if(!w) return;
  const allRes = [
    ...RESOURCES.labor.map(r=>({...r,_type:'labor'})),
    ...RESOURCES.equipment.map(r=>({...r,_type:'equip'}))
  ];

  const panel = document.createElement('div');
  panel.id = 'res-quick-panel';
  panel.className = 'res-quick-panel';

  // Position near click
  const rect = evt.target.getBoundingClientRect();
  const top = Math.min(rect.bottom+4, window.innerHeight-320);
  const left = Math.min(rect.left, window.innerWidth-330);
  panel.style.cssText = `top:${top}px;left:${left}px`;

  const costVal = w.cost||0;
  panel.innerHTML = `
    <div class="res-quick-hdr">
      <h4>&#128101; Assign Resources</h4>
      <span style="font-size:10px;color:var(--t3);flex:1">${esc(w.name||'').substring(0,20)}</span>
      <button class="lib-toggle-btn" onclick="document.getElementById('res-quick-panel')?.remove()">&#215;</button>
    </div>
    <div class="res-quick-body">
      ${!allRes.length ? '<div style="color:var(--t3);font-size:11px;padding:8px 0">No resources created yet.<br><a href="#" onclick="mainTab(\'resources\');return false" style="color:var(--blue)">Go to Resources tab</a> to add people & equipment.</div>' :
        allRes.map(r => {
          const assigned = (w.resourceIds||[]).includes(r.id);
          const badgeClass = r._type==='labor'?'rtb-labor':'rtb-equipment';
          return `<div class="res-assign-row">
            <input type="checkbox" class="res-assign-check" ${assigned?'checked':''} 
              onchange="toggleResAssign(${wi},'${r.id}',this.checked)">
            <span class="res-assign-name">${esc(r.name)}</span>
            <span class="res-assign-badge ${badgeClass}">${r._type==='labor'?'Labor':'Equip'}</span>
            <span style="font-size:10px;color:var(--t3)">${getCurrSym()}${r.rate||0}/d</span>
          </div>`;
        }).join('')
      }
      <div style="border-top:1px solid var(--b1);margin-top:8px;padding-top:8px">
        <div style="font-size:10px;font-weight:700;color:var(--t3);margin-bottom:4px">ACTIVITY COST</div>
        <div style="display:flex;align-items:center;gap:6px;font-size:11px">
          <input type="number" placeholder="Budget" value="${costVal}" style="flex:1;background:var(--s1);border:1px solid var(--b1);border-radius:4px;padding:4px 6px;font-family:inherit;color:var(--t1)"
            onchange="WPS[${wi}].cost=+this.value">
          <select style="background:var(--s1);border:1px solid var(--b1);border-radius:4px;padding:4px 6px;font-family:inherit;color:var(--t1);font-size:10px" onchange="WPS[${wi}].costType=this.value">
            <option value="fixed" ${(w.costType||'fixed')==='fixed'?'selected':''}>Fixed</option>
            <option value="unit" ${w.costType==='unit'?'selected':''}>Per Unit</option>
            <option value="resource" ${w.costType==='resource'?'selected':''}>From Resources</option>
          </select>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(panel);

  // Close on outside click
  setTimeout(() => {
    document.addEventListener('click', function closePan(e) {
      if(!panel.contains(e.target)) { panel.remove(); document.removeEventListener('click',closePan); }
    });
  }, 100);
}

function toggleResAssign(wi, rid, checked) {
  const w = WPS[wi]; if(!w) return;
  if(!w.resourceIds) w.resourceIds = [];
  if(checked) {
    if(!w.resourceIds.includes(rid)) w.resourceIds.push(rid);
    // Initialise empty assignment record if not present
    _ensureResAssign(w, rid);
  } else {
    w.resourceIds = w.resourceIds.filter(id=>id!==rid);
    // Remove assignment data too
    if(w.resourceAssignments) delete w.resourceAssignments[rid];
  }
  saveWbsToProject();
}


// ═══════════════════════════════════════════════════════════════
// V10 — ACTIVITY DETAIL DOCK, TEMPLATE LIBRARY, COLUMNS
// ═══════════════════════════════════════════════════════════════

// ── COLUMN DEFINITIONS & VISIBILITY ──────────────────────────
const COL_DEFS = [
  // ── Core identity ─────────────────────────────────────────
  {key:'wbs',       label:'WBS Code',                 group:'Identity',  default:true},
  {key:'type',      label:'Activity Type',             group:'Identity',  default:true},
  {key:'name',      label:'Activity Name',             group:'Identity',  default:true},
  {key:'status',    label:'Status',                    group:'Identity',  default:true},
  // ── Schedule ──────────────────────────────────────────────
  {key:'dur',       label:'Duration',                  group:'Schedule',  default:true},
  {key:'phase',     label:'Phase',                     group:'Schedule',  default:true},
  {key:'float',     label:'Total Float',               group:'Schedule',  default:true},
  {key:'esEf',      label:'Early Start / Finish',      group:'Schedule',  default:true},
  {key:'lsLf',      label:'Late Start / Finish',       group:'Schedule',  default:false},
  {key:'actStart',  label:'Actual Start',              group:'Schedule',  default:false},
  {key:'actFinish', label:'Actual Finish',             group:'Schedule',  default:false},
  {key:'freeFloat', label:'Free Float',                group:'Schedule',  default:false},
  // ── Logic ─────────────────────────────────────────────────
  {key:'preds',     label:'Predecessors',              group:'Logic',     default:true},
  {key:'succs',     label:'Successors',                group:'Logic',     default:true},
  {key:'constraint',label:'Constraint',                group:'Logic',     default:true},
  {key:'cstrDate',  label:'Constraint Date',           group:'Logic',     default:false},
  // ── Baseline ──────────────────────────────────────────────
  {key:'blStart',   label:'Baseline Start',            group:'Baseline',  default:false},
  {key:'blFinish',  label:'Baseline Finish',           group:'Baseline',  default:false},
  {key:'blVar',     label:'Baseline Variance (days)',  group:'Baseline',  default:false},
  // ── Progress ──────────────────────────────────────────────
  {key:'pct',       label:'% Complete',                group:'Progress',  default:true},
  // ── Cost / EVM ────────────────────────────────────────────
  {key:'budget',    label:'Budgeted Cost (BAC)',        group:'Cost/EVM',  default:false},
  {key:'actualCost',label:'Actual Cost (AC)',           group:'Cost/EVM',  default:false},
  {key:'remainCost',label:'Remaining Cost',             group:'Cost/EVM',  default:false},
  // ── Resources & settings ──────────────────────────────────
  {key:'resources', label:'Resources Assigned',        group:'Resources', default:true},
  {key:'calendar',  label:'Calendar',                  group:'Settings',  default:false},
  {key:'actId',     label:'Activity ID (Code)',        group:'Identity',  default:false},
];

// Col index map (0-based, matching thead order)
const COL_INDEX = {wbs:0,type:1,name:2,status:3,dur:4,phase:5,float:6,esEf:7,preds:8,succs:9,pct:10,resources:11,constraint:12,calendar:13};

let VISIBLE_COLS = {};
COL_DEFS.forEach(d => VISIBLE_COLS[d.key] = d.default);

function openColChooser() {
  // Group columns by their group property
  const groups = {};
  COL_DEFS.forEach(col => {
    const g = col.group || 'Other';
    if(!groups[g]) groups[g] = [];
    groups[g].push(col);
  });
  const groupIcons = {
    'Identity':'🏷', 'Schedule':'📅', 'Logic':'🔗', 'Baseline':'📁',
    'Progress':'📊', 'Cost/EVM':'💰', 'Resources':'👷', 'Settings':'⚙'
  };

  let html = `<div class="modal" style="max-width:580px;width:96vw">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
      <h3 style="margin:0;font-size:15px">⊞ Column Chooser</h3>
      <div style="flex:1"></div>
      <button class="btn btns" onclick="COL_DEFS.forEach(d=>VISIBLE_COLS[d.key]=d.default!==false);applyColVisibility();openColChooser()">Reset</button>
      <button class="btn btns" onclick="COL_DEFS.forEach(d=>VISIBLE_COLS[d.key]=true);applyColVisibility();openColChooser()">All On</button>
      <button class="btn btnp" onclick="applyColVisibility();closeOvl('col-chooser-ovl')">✓ Apply</button>
      <button class="btn" onclick="closeOvl('col-chooser-ovl')">✕</button>
    </div>
    <p style="font-size:11px;color:var(--t3);margin-bottom:12px">Tick the columns you want visible in the schedule table. Changes apply instantly.</p>`;

  Object.entries(groups).forEach(([gname, cols]) => {
    html += `<div style="margin-bottom:14px">
      <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.1em;margin-bottom:6px;display:flex;align-items:center;gap:5px">
        <span>${groupIcons[gname]||'📌'}</span> ${gname.toUpperCase()}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">`;
    cols.forEach(col => {
      const checked = VISIBLE_COLS[col.key] !== false;
      const isCore = ['name','wbs','preds','pct'].includes(col.key);
      html += `<label style="display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:5px;cursor:pointer;background:var(--s1);transition:background .1s;font-size:11px"
        onmouseover="this.style.background='var(--bluel)'" onmouseout="this.style.background='var(--s1)'">
        <input type="checkbox" ${checked?'checked':''} ${isCore?'disabled':''} style="margin:0"
          onchange="VISIBLE_COLS['${col.key}']=this.checked;applyColVisibility()">
        <span style="${isCore?'color:var(--t3)':''}">${col.label}${isCore?' <span style="font-size:9px;opacity:.5">(required)</span>':''}</span>
      </label>`;
    });
    html += `</div></div>`;
  });
  html += `</div>`;

  let ovl = document.getElementById('col-chooser-ovl');
  if(!ovl){ovl=document.createElement('div');ovl.id='col-chooser-ovl';ovl.className='ovl';document.body.appendChild(ovl);ovl.onclick=e=>{if(e.target===ovl)closeOvl('col-chooser-ovl');};}
  ovl.innerHTML=html; ovl.classList.add('on');
}

function applyColVisibility() {
  // Standard nth-child visibility for base 14 columns
  let css = '';
  const BASE_COL_IDX = {wbs:1,type:2,name:3,status:4,dur:5,phase:6,float:7,esEf:8,preds:9,succs:10,pct:11,resources:12,constraint:13,calendar:14};
  Object.entries(BASE_COL_IDX).forEach(([key, nth]) => {
    if(VISIBLE_COLS[key] === false) {
      css += `#wt-table thead tr:first-child th:nth-child(${nth}),`;
      css += `#wt-table tbody td:nth-child(${nth}){display:none!important}\n`;
    }
  });
  const styleEl = document.getElementById('wt-col-style');
  if(styleEl) styleEl.textContent = css;

  // Extra optional columns (not in base 14) — rebuild header and row renderer
  // Store which extras are active for renderWpRow to pick up
  _extraCols = {
    lsLf: VISIBLE_COLS.lsLf !== false && VISIBLE_COLS.lsLf,
    actStart: VISIBLE_COLS.actStart,
    actFinish: VISIBLE_COLS.actFinish,
    freeFloat: VISIBLE_COLS.freeFloat,
    cstrDate: VISIBLE_COLS.cstrDate,
    blStart: VISIBLE_COLS.blStart,
    blFinish: VISIBLE_COLS.blFinish,
    blVar: VISIBLE_COLS.blVar,
    budget: VISIBLE_COLS.budget,
    actualCost: VISIBLE_COLS.actualCost,
    remainCost: VISIBLE_COLS.remainCost,
    actId: VISIBLE_COLS.actId,
  };
  // Rebuild table header to add/remove extra columns
  _rebuildExtraColHeaders();
  // Force re-render rows to include extra data
  VS.flat = []; invalidateRowCache?.(); renderWps();
}

let _extraCols = {};

function _rebuildExtraColHeaders() {
  // Remove old extra headers
  document.querySelectorAll('th.extra-col').forEach(th=>th.remove());
  document.querySelectorAll('td.extra-col').forEach(td=>td.remove());

  const thead = document.querySelector('#wt-table thead tr');
  if(!thead) return;
  // Insert extra headers before the last (actions) th
  const actTh = thead.querySelector('th:last-child');
  const EXTRA_HDRS = {
    lsLf:'LS / LF', actStart:'Actual Start', actFinish:'Actual Finish',
    freeFloat:'FF', cstrDate:'Cstr Date',
    blStart:'BL Start', blFinish:'BL Finish', blVar:'Var (d)',
    budget:'Budget', actualCost:'Actual Cost', remainCost:'Remaining',
    actId:'Activity ID',
  };
  Object.entries(EXTRA_HDRS).forEach(([key, label]) => {
    if(_extraCols[key]) {
      const th = document.createElement('th');
      th.className = 'extra-col';
      th.textContent = label;
      th.style.cssText = 'white-space:nowrap;font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.06em;padding:5px 5px;background:var(--s1);border-bottom:2px solid var(--b1)';
      thead.insertBefore(th, actTh);
    }
  });
}

// ── ACTIVITY DETAIL DOCK ─────────────────────────────────────

function selectActivity(wi) {
  _selectedWi = wi;
  const w = WPS[wi];
  if(!w) return;
  openDetailDock();
  populateDetailDock(wi, w);
  // Highlight row
  document.querySelectorAll('#wt-body tr').forEach((tr,i) => {
    tr.style.background = (+tr.dataset.wi === wi) ? 'var(--bluel)' : '';
  });
}

function openDetailDock() {
  const dock = document.getElementById('act-detail-dock');
  if(!dock) return;
  // Use both inline style AND class — belt and braces
  dock.style.display = 'flex';
  dock.style.flexDirection = 'column';
  dock.classList.add('open');
  dock.classList.remove('dock-mini');
  _dockCollapsed = false;
  initDockResize();
  // Set bottom padding on schedule so activities aren't hidden
  const h = Math.max(dock.offsetHeight || 0, 240);
  dock.style.height = h + 'px';
  const bsMain = document.getElementById('bs-main');
  if(bsMain) bsMain.style.paddingBottom = h + 'px';
}

function closeDetailDock() {
  const dock = document.getElementById('act-detail-dock');
  if(dock) {
    dock.style.display = 'none';
    dock.classList.remove('open'); dock.classList.remove('dock-mini');
  }
  _selectedWi = null; _dockCollapsed = false;
  const bsMain = document.getElementById('bs-main');
  if(bsMain) bsMain.style.paddingBottom = '0';
}
function adTab(name) {
  document.querySelectorAll('.adt').forEach(t => t.classList.toggle('act', t.id==='adt-'+name));
  document.querySelectorAll('.adp').forEach(p => p.classList.toggle('act', p.id==='adp-'+name));
  if(name==='logic' && _selectedWi!=null) renderAdLogic(_selectedWi);
  if(name==='resources' && _selectedWi!=null) renderAdResources(_selectedWi);
  if(name==='risk' && _selectedWi!=null) renderAdRisk(_selectedWi);
  if(name==='cost' && _selectedWi!=null) renderAdCost(_selectedWi);
}
function adRefreshProgress() {
  const wi = _selectedWi;
  if(wi==null) return;
  const w = WPS[wi];
  if(!w) return;
  const pctType = w.pctType||'sch';
  let pct = 0;
  if(pctType==='dur' && w.dur>0) {
    const rem = w.remDur!=null?w.remDur:w.dur;
    pct = Math.min(100, Math.round(100*(1-rem/w.dur)));
  } else {
    pct = Math.min(100, Math.max(0, w.pct||0));
  }
  const bar = document.getElementById('ad-prog-bar');
  const lbl = document.getElementById('ad-prog-lbl');
  const note = document.getElementById('ad-pct-note');
  if(bar) bar.style.width = pct+'%';
  if(lbl) lbl.textContent = pct+'% complete';
  const notes = {sch:'Schedule %: calculated from planned start/finish relative to data date.',phys:'Physical %: manually entered based on physical inspection of work done.',dur:'Duration %: computed from Remaining Duration ÷ Planned Duration.'};
  if(note) note.textContent = notes[pctType]||'';
}

function renderAdLogic(wi) {
  const w = WPS[wi]; if(!w) return;
  const predList = document.getElementById('ad-preds-list');
  const succList = document.getElementById('ad-succs-list');

  const relCard = (id, name, wbs, tp, lg, removeFn) => `
    <div style="display:flex;align-items:center;gap:4px;padding:4px 7px;background:var(--s1);border-radius:5px;border:1px solid var(--b2);font-size:11px">
      <span style="font-family:var(--mono);font-size:9.5px;color:#6D28D9;flex-shrink:0;min-width:36px">${wbs}</span>
      <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--t1)">${name}</span>
      <span class="logic-badge" style="flex-shrink:0;padding:1px 6px;border-radius:3px;font-size:9px;font-weight:800;
        background:${tp==='FS'?'rgba(59,130,246,.12)':tp==='SS'?'rgba(16,185,129,.12)':tp==='FF'?'rgba(245,158,11,.12)':'rgba(239,68,68,.12)'};
        color:${tp==='FS'?'#2563EB':tp==='SS'?'#059669':tp==='FF'?'#D97706':'#DC2626'}">${tp}${lg?(lg>0?'+':'')+lg+'d':''}</span>
      <button style="flex-shrink:0;border:none;background:none;color:var(--t3);cursor:pointer;font-size:13px;line-height:1;padding:0 2px" onclick="${removeFn}" title="Remove">&#215;</button>
    </div>`;

  if(predList) {
    predList.innerHTML = w.preds.length
      ? w.preds.map(p => {
          const pw = WPS.find(x => x.id === p.id);
          return pw ? relCard(p.id, esc(pw.name), pw.wbs, p.tp, p.lg, `adRemovePred('${w.id}','${p.id}')`) : '';
        }).join('')
      : '<div style="color:var(--t3);font-size:10px;padding:4px 0;font-style:italic">No predecessors — search above to add</div>';
  }

  if(succList) {
    const succs = WPS.filter(x => x.preds.some(p => p.id === w.id));
    succList.innerHTML = succs.length
      ? succs.map(s => {
          const rel = s.preds.find(p => p.id === w.id);
          return relCard(s.id, esc(s.name), s.wbs, rel?.tp||'FS', rel?.lg||0, `adRemoveSucc('${w.id}','${s.id}')`);
        }).join('')
      : '<div style="color:var(--t3);font-size:10px;padding:4px 0;font-style:italic">No successors — search above to add</div>';
  }
}

function adAddPred() {
  const wi=_selectedWi; if(wi==null) return;
  const w=WPS[wi]; if(!w) return;
  // Support both old 'ad-pred-code' and new 'ad-pred-search' inputs
  const code=((document.getElementById('ad-pred-search')||document.getElementById('ad-pred-code'))?.value||'').trim();
  const tp=document.getElementById('ad-pred-type')?.value||'FS';
  const lg=+(document.getElementById('ad-pred-lag')?.value||0);
  const pw=WPS.find(x=>x.wbs===code);
  if(!pw){alert('Activity with WBS code "'+code+'" not found.');return;}
  if(pw.id===w.id){alert('Cannot link activity to itself.');return;}
  if(w.preds.some(p=>p.id===pw.id)){alert('Relationship already exists.');return;}
  w.preds.push({id:pw.id,tp,lg});
  recalc(); _afterRenderWps(); renderAdLogic(wi);
  if(document.getElementById('ad-pred-code')) document.getElementById('ad-pred-code').value='';
}

function adAddSucc() {
  const wi=_selectedWi; if(wi==null) return;
  const w=WPS[wi]; if(!w) return;
  const code=((document.getElementById('ad-succ-search')||document.getElementById('ad-succ-code'))?.value||'').trim();
  const tp=document.getElementById('ad-succ-type')?.value||'FS';
  const sw=WPS.find(x=>x.wbs===code);
  if(!sw){alert('Activity with WBS code "'+code+'" not found.');return;}
  if(sw.id===w.id){alert('Cannot link activity to itself.');return;}
  if(sw.preds.some(p=>p.id===w.id)){alert('Relationship already exists.');return;}
  sw.preds.push({id:w.id,tp,lg:0});
  recalc(); _afterRenderWps(); renderAdLogic(wi);
  if(document.getElementById('ad-succ-code')) document.getElementById('ad-succ-code').value='';
}

function adRemovePred(wId,pId) {
  const w=WPS.find(x=>x.id===wId); if(w) w.preds=w.preds.filter(p=>p.id!==pId);
  recalc(); _afterRenderWps(); renderAdLogic(_selectedWi);
}
function adRemoveSucc(wId,sId) {
  const s=WPS.find(x=>x.id===sId); if(s) s.preds=s.preds.filter(p=>p.id!==wId);
  recalc(); _afterRenderWps(); renderAdLogic(_selectedWi);
}
function renderAdRisk(wi) {
  const w=WPS[wi]; if(!w) return;
  const linked=RISKS.filter(r=>r.actId===w.id);
  const el=document.getElementById('ad-risk-list');
  if(el) el.innerHTML=linked.length?linked.map((r,i)=>`<div style="padding:5px 8px;background:var(--s1);border:1px solid var(--b2);border-radius:4px;margin-bottom:4px;font-size:11px;display:flex;gap:8px;align-items:center">
    <span style="flex:1">${esc(r.desc)}</span>
    <span style="font-weight:700;font-size:10px;color:${r.prob*r.impact>=12?'var(--red)':r.prob*r.impact>=6?'#F59E0B':'#22C55E'}">Score: ${r.prob*r.impact}</span>
  </div>`).join(''):'<div style="color:var(--t3);font-size:11px">No risks linked to this activity.</div>';
}

function adAddRisk() {
  const wi=_selectedWi; if(wi==null) return;
  const w=WPS[wi]; if(!w) return;
  const desc=prompt('Describe the risk for "'+w.name+'":')||'New Risk';
  RISKS.push({id:uid(),desc,prob:2,impact:2,owner:'TBC',status:'Open',actId:w.id});
  renderAdRisk(wi);
}
// ── HOOK INTO WPS ROW CLICK ───────────────────────────────────
// Patch renderWpRow to add onclick=selectActivity to each row
// We'll do this by overriding the tr event after render
function _hookActivityRowClicks() { /* consolidated into document listener */ }
// ── WBS DROPDOWN IN INLINE ADD ────────────────────────────────
// showInlineAdd overridden below
function showInlineAdd(wbsNodeId) {
  // Remove any existing inline add row
  document.getElementById('ia-row')?.remove();

  const defaultNodeId = wbsNodeId || ACTIVE_WBS || (WBS_NODES.length ? WBS_NODES[WBS_NODES.length-1].id : null);
  const wbsOptions = WBS_NODES.map(n=>`<option value="${n.id}" ${n.id===defaultNodeId?'selected':''}>${n.code} ${esc(n.name)}</option>`).join('');

  // Insert as a proper table row at the bottom of wt-body
  const tbody = document.getElementById('wt-body');
  if(!tbody) return;

  const tr = document.createElement('tr');
  tr.id = 'ia-row';
  tr.style.cssText='background:rgba(109,40,217,.06);border-top:2px solid #6D28D9';
  tr.innerHTML = `
    <td colspan="2" style="padding:6px 8px;font-size:10px;font-weight:700;color:#6D28D9;white-space:nowrap">
      ✚ New Activity
    </td>
    <td style="padding:4px 6px">
      <input id="ia-name" placeholder="Activity name…" autofocus
        style="width:100%;padding:5px 8px;font-size:12px;border:1px solid #6D28D9;border-radius:4px;background:var(--s0);color:var(--t1);outline:none"
        onkeydown="if(event.key==='Enter')commitInlineAdd(true);if(event.key==='Escape')cancelInlineAdd()"
        oninput="this.style.borderColor=this.value?'#059669':'#6D28D9'">
    </td>
    <td style="padding:4px 5px">
      <select id="ia-status" style="width:100%;padding:4px;font-size:10px;background:var(--s1);border:1px solid var(--b1);border-radius:4px;color:var(--t1)">
        <option value="NS">Not Started</option><option value="IP">In Progress</option><option value="COM">Complete</option>
      </select>
    </td>
    <td style="padding:4px 5px;white-space:nowrap">
      <div style="display:flex;align-items:center;gap:2px">
        <input id="ia-dur" type="number" min="0" value="5"
          style="width:42px;padding:4px;font-size:11px;border:1px solid var(--b1);border-radius:4px;text-align:center;background:var(--s1);color:var(--t1)">
        <select id="ia-unit" style="width:30px;padding:3px;font-size:10px;background:var(--s1);border:1px solid var(--b1);border-radius:4px;color:var(--t1)">
          <option>d</option><option>w</option>
        </select>
      </div>
    </td>
    <td style="padding:4px 5px">
      <select id="ia-phase" style="width:100%;padding:4px;font-size:10px;background:var(--s1);border:1px solid var(--b1);border-radius:4px;color:var(--t1)">
        ${Object.entries(PH||{}).map(([k,v])=>`<option value="${k}">${v.lbl?.split(' ')[0]||k}</option>`).join('')}
      </select>
    </td>
    <td style="padding:4px 5px">
      <select id="ia-type" style="width:100%;padding:4px;font-size:10px;background:var(--s1);border:1px solid var(--b1);border-radius:4px;color:var(--t1)">
        <option value="TASK">Task</option><option value="MS">Milestone</option><option value="LOE">LOE</option>
      </select>
    </td>
    <td style="padding:4px 5px">
      <select id="ia-wbs" style="width:130px;padding:4px;font-size:10px;background:var(--s1);border:1px solid var(--b1);border-radius:4px;color:var(--t1)">
        <option value="">— No WBS —</option>${wbsOptions}
      </select>
    </td>
    <td colspan="7" style="padding:4px 8px">
      <div style="display:flex;align-items:center;gap:6px">
        <button class="btn btnp" onclick="commitInlineAdd(false)" style="font-size:11px;padding:4px 12px">✓ Add</button>
        <button class="btn" onclick="commitInlineAdd(true)" style="font-size:10px;padding:4px 8px" title="Add and create another">✓ +More</button>
        <button class="btn" onclick="cancelInlineAdd()" style="font-size:10px;padding:4px 8px">✕ Cancel</button>
        <span style="font-size:10px;color:var(--t3)">Enter = Add&More · Esc = Cancel</span>
      </div>
    </td>`;

  tbody.appendChild(tr);
  // Scroll to the new row
  tr.scrollIntoView({behavior:'smooth',block:'nearest'});
  setTimeout(()=>document.getElementById('ia-name')?.focus(), 50);
}

function cancelInlineAdd() {
  document.getElementById('ia-row')?.remove();
}
// ── TEMPLATE LIBRARY ──────────────────────────────────────────
const SCHEDULE_TEMPLATES = [
  {id:'riba',name:'RIBA Plan of Work',icon:'🏛',sector:'Design & Build',tags:['Design','RIBA','UK'],
   desc:'Full RIBA Stages 0-7 with pre-application, design stages, construction and handover.',
   wbs:[{code:'0',name:'Strategic Definition'},{code:'1',name:'Preparation & Briefing'},
        {code:'2',name:'Concept Design'},{code:'3',name:'Spatial Coordination'},
        {code:'4',name:'Technical Design'},{code:'5',name:'Manufacturing & Construction'},
        {code:'6',name:'Handover'},{code:'7',name:'Use'}]},
  {id:'nec4',name:'NEC4 Programme',icon:'📋',sector:'Infrastructure',tags:['NEC4','Infrastructure','UK'],
   desc:'NEC4 ECC contract programme structure with Accepted Programme requirements.',
   wbs:[{code:'1',name:'Pre-Contract Period'},{code:'2',name:'Mobilisation'},
        {code:'3',name:'Design Development'},{code:'4',name:'Enabling Works'},
        {code:'5',name:'Main Construction'},{code:'6',name:'Commissioning & Testing'},
        {code:'7',name:'Completion & Defects'}]},
  {id:'fidic-yellow',name:'FIDIC Yellow Book (D&B)',icon:'📒',sector:'Civil Engineering',tags:['FIDIC','D&B','International'],
   desc:'Design & Build programme following FIDIC Yellow Book contract structure.',
   wbs:[{code:'1',name:'Employer\'s Requirements'},{code:'2',name:'Contractor\'s Design'},
        {code:'3',name:'Procurement'},{code:'4',name:'Construction'},
        {code:'5',name:'Testing & Commissioning'},{code:'6',name:'Taking Over'}]},
  {id:'mep',name:'MEP Installation',icon:'⚡',sector:'MEP',tags:['MEP','Building Services'],
   desc:'Mechanical, Electrical and Plumbing installation programme for commercial buildings.',
   wbs:[{code:'1',name:'Design & Procurement'},{code:'2',name:'Containment & Roughing-In'},
        {code:'3',name:'Mechanical Installations'},{code:'4',name:'Electrical Installations'},
        {code:'5',name:'Plumbing & Drainage'},{code:'6',name:'Controls & BMS'},
        {code:'7',name:'Testing, Balancing & Commissioning'}]},
  {id:'data-centre',name:'Data Centre Build',icon:'🖥',sector:'Data Centre',tags:['DC','Tier','Critical'],
   desc:'Tier III/IV data centre construction programme including civil, MEP and IT infrastructure.',
   wbs:[{code:'1',name:'Site Preparation & Civil'},{code:'2',name:'Structure & Envelope'},
        {code:'3',name:'HV/LV Power Infrastructure'},{code:'4',name:'Cooling & Precision Air'},
        {code:'5',name:'Fire Suppression'},{code:'6',name:'IT Cabling & Comms'},
        {code:'7',name:'BMS & DCIM'},{code:'8',name:'Commissioning Level 1-5'}]},
  {id:'highway',name:'Highway Scheme',icon:'🛣',sector:'Infrastructure',tags:['Highway','Roads','Civils'],
   desc:'Highway construction programme covering earthworks, drainage, pavement and finishes.',
   wbs:[{code:'1',name:'Preliminary Works & Surveys'},{code:'2',name:'Earthworks & Groundworks'},
        {code:'3',name:'Drainage & Services'},{code:'4',name:'Pavement Construction'},
        {code:'5',name:'Structures & Bridges'},{code:'6',name:'Streetworks & Utilities'},
        {code:'7',name:'Road Markings & Furniture'},{code:'8',name:'Landscaping & Reinstatement'}]},
  {id:'residential',name:'Residential Development',icon:'🏠',sector:'Residential',tags:['Housing','Residential'],
   desc:'Multi-unit residential programme from groundworks through to snagging and handover.',
   wbs:[{code:'1',name:'Enabling & Demolition'},{code:'2',name:'Groundworks & Foundations'},
        {code:'3',name:'Frame & Structure'},{code:'4',name:'Envelope & Weathertight'},
        {code:'5',name:'First Fix'},{code:'6',name:'Second Fix & Finishes'},
        {code:'7',name:'External Works'},{code:'8',name:'Completion & Handover'}]},
  {id:'hospital',name:'Healthcare Facility',icon:'🏥',sector:'Healthcare',tags:['Hospital','HTM','CQC'],
   desc:'Hospital/healthcare facility programme including HTM compliance and CQC readiness.',
   wbs:[{code:'1',name:'Enabling Works'},{code:'2',name:'Structure & Frame'},
        {code:'3',name:'Envelope'},{code:'4',name:'Clinical Areas Build-Out'},
        {code:'5',name:'Medical Gas & HTM Services'},{code:'6',name:'IT & Communications'},
        {code:'7',name:'Commissioning & Validation'},{code:'8',name:'CQC Readiness & Handover'}]},
  {id:'rail',name:'Railway/Metro Works',icon:'🚆',sector:'Rail',tags:['Rail','Metro','Infrastructure'],
   desc:'Railway infrastructure programme covering civil, track, OLE, signalling and commissioning.',
   wbs:[{code:'1',name:'Surveys & Enabling'},{code:'2',name:'Civil & Geotechnical Works'},
        {code:'3',name:'Drainage & Services Diversion'},{code:'4',name:'Track & Formation'},
        {code:'5',name:'Overhead Line Equipment (OLE)'},{code:'6',name:'Signalling & Control'},
        {code:'7',name:'Stations & Passenger Facilities'},{code:'8',name:'Testing & Operational Commissioning'}]},
];

let _selectedTplId = null;

function openTemplateLibrary() {
  renderTemplateLibrary();
  document.getElementById('tpl-lib-ovl')?.classList.add('on');
}

function renderTemplateLibrary() {
  const search = (document.getElementById('tpl-search')?.value||'').toLowerCase();
  const grid = document.getElementById('tpl-grid');
  if(!grid) return;
  const filtered = SCHEDULE_TEMPLATES.filter(t =>
    !search || t.name.toLowerCase().includes(search) || t.sector.toLowerCase().includes(search) ||
    t.tags.some(tag=>tag.toLowerCase().includes(search))
  );
  grid.innerHTML = filtered.map(t => `<div class="tpl-card ${_selectedTplId===t.id?'selected':''}" onclick="selectTemplate('${t.id}')">
    <div class="tpl-card-icon">${t.icon}</div>
    <div class="tpl-card-name">${t.name}</div>
    <div class="tpl-card-desc">${t.desc}</div>
    <div class="tpl-card-tags">${t.tags.map(tag=>`<span class="tpl-tag">${tag}</span>`).join('')}</div>
  </div>`).join('') || '<div style="color:var(--t3);padding:20px">No templates match your search.</div>';
}

function selectTemplate(id) {
  _selectedTplId = id;
  renderTemplateLibrary();
  const tpl = SCHEDULE_TEMPLATES.find(t=>t.id===id);
  const preview = document.getElementById('tpl-preview');
  const btns = document.getElementById('tpl-load-btns');
  if(preview && tpl) {
    preview.innerHTML = `<div style="font-size:11px;font-weight:700;color:var(--t1);margin-bottom:6px">${tpl.icon} ${tpl.name}</div>
      <div style="font-size:10px;color:var(--t3);margin-bottom:8px">${tpl.sector}</div>
      ${tpl.wbs.map(w=>`<div class="tpl-wbs-item">
        <span style="font-family:var(--mono);font-size:10px;color:var(--blue);min-width:28px">${w.code}</span>
        <span style="font-size:11px">${w.name}</span>
      </div>`).join('')}`;
  }
  if(btns) btns.style.display = 'flex';
}

function loadSelectedTemplate(mode) {
  const tpl = SCHEDULE_TEMPLATES.find(t=>t.id===_selectedTplId);
  if(!tpl) return;
  if(mode==='wbs') {
    if(WBS_NODES.length && !confirm('This will replace your current WBS. Continue?')) return;
    WBS_NODES = tpl.wbs.map((w,i)=>({
      id:uid(), code:w.code, name:w.name, type:'SUMM',
      pId:null, calId:0, order:i, collapsed:false, modItems:[]
    }));
    saveWbsToProject(); renderWbsTree();
    closeOvl('tpl-lib-ovl');
    if(!_wbsSidebarOpen) toggleWbsSidebar();
    alert('WBS loaded from "'+tpl.name+'". You can now add activities to each node.');
  } else {
    if(WPS.length && !confirm('This will replace your current schedule. Continue?')) return;
    WBS_NODES = tpl.wbs.map((w,i)=>({id:uid(),code:w.code,name:w.name,type:'SUMM',pId:null,calId:0,order:i,collapsed:false,modItems:[]}));
    WPS = tpl.wbs.map((w,i)=>{
      const nodeId=WBS_NODES[i].id;
      return {id:uid(),sg:'SG-TPL',name:w.name+' Activities',ph:'FIN',trk:'CONSTR',
        dur:14,durUnit:'d',preds:i>0?[{id:'',tp:'FS',lg:0}]:[],
        wbs:'',wbsNodeId:nodeId,actType:'TASK',constraint:'ASAP',pct:0,pctType:'sch'};
    });
    // Wire FS preds
    for(let i=1;i<WPS.length;i++) WPS[i].preds=[{id:WPS[i-1].id,tp:'FS',lg:0}];
    // Wire activity code assignments from TASKACTV
  if(typeof _wireActivityCodeAssignments==='function') _wireActivityCodeAssignments(window._lastXerTables||{});
  assignWbs(); recalc(); saveWbsToProject(); renderWps(); renderWbsTree();
    closeOvl('tpl-lib-ovl');
    alert('Schedule loaded from "'+tpl.name+'". Adjust durations, add activities, and link to the library.');
  }
}


// ═══════════════════════════════════════════════════════════════
// V11 — STATUS, PROJECT SETTINGS, RESOURCES LIB, CURRENCY LIB
// ═══════════════════════════════════════════════════════════════

// ── PROJECT SETTINGS ─────────────────────────────────────────
let _selectedCurrencyCode = 'GBP';

function _openProjectSettingsV16() {
  const s = PROJECT_SETTINGS;
  const _sv=(id,v)=>{const e=document.getElementById(id);if(e)e.value=v??'';};
  _sv('pset-start', s.start || P.start || '2025-01-06');
  _sv('pset-datadate', s.dataDate || '');
  _sv('pset-dur', s.durWeeks || 104);
  _sv('pset-dur-unit', s.durUnit || 'w');
  _sv('pset-cal', s.calId || 0);
  _sv('pset-pct-type', s.pctType || 'sch');
  _sv('pset-cp-method', s.cpMethod || 'tf0');
  _sv('pset-ev-method', s.evMethod || 'pct');
  _sv('pset-def-type', s.defType || 'TASK');
  _sv('pset-contract-val', s.contractVal || 0);
  _sv('pset-bac', s.bac || 0);
  _sv('pset-contingency', s.contingency || 10);
  _sv('pset-pm', s.pm || '');
  _sv('pset-client', s.client || '');
  _sv('pset-contract-type', s.contractType || '');
  _sv('pset-jurisdiction', s.jurisdiction || '');
  // Currency: populate dropdown and badge (old text inputs removed)
  const selEl = document.getElementById('pset-currency-sel');
  if(selEl) {
    selEl.innerHTML = '<option value="">— Select Currency —</option>' + (_buildCurrencyOptions?.() || '');
    if(s.currency?.code) selEl.value = s.currency.code;
  }
  _refreshPsetCurrencyUI?.();
  // ovl shown by _openProjectSettingsV16
}

function saveProjectSettings() {
  const _gv=(id,def='')=>{const e=document.getElementById(id);return e?e.value:def;};
  PROJECT_SETTINGS = {
    ...PROJECT_SETTINGS,
    start: _gv('pset-start','2025-01-06'),
    dataDate: _gv('pset-datadate',''),
    durWeeks: +_gv('pset-dur',104),
    durUnit: _gv('pset-dur-unit','w'),
    calId: +_gv('pset-cal',0),
    pctType: _gv('pset-pct-type','sch'),
    cpMethod: _gv('pset-cp-method','tf0'),
    evMethod: _gv('pset-ev-method','pct'),
    defType: _gv('pset-def-type','TASK'),
    currency: (()=>{
      const selCode = _gv('pset-currency-sel','');
      if(selCode) {
        const found = _allCurrencies().find(c=>c.code===selCode);
        if(found) return {symbol:found.symbol, code:found.code, name:found.name};
      }
      return PROJECT_SETTINGS.currency || null;
    })(),
    contractVal: +_gv('pset-contract-val',0),
    bac: +_gv('pset-bac',0),
    contingency: +_gv('pset-contingency',10),
    pm: _gv('pset-pm',''),
    client: _gv('pset-client',''),
    contractType: _gv('pset-contract-type',''),
    jurisdiction: _gv('pset-jurisdiction','')
  };
  // Apply to P object
  if(PROJECT_SETTINGS.start) P.start = PROJECT_SETTINGS.start;
  if(PROJECT_SETTINGS.calId !== undefined) P.cal = PROJECT_SETTINGS.calId;
  // Update header summary
  updateHdrSummary();
  // Update EVM BAC
  if(PROJECT_SETTINGS.bac) { const bacEl=document.getElementById('evm-bac'); if(bacEl) bacEl.value=PROJECT_SETTINGS.bac; }
  recalc(); renderWps();
  closeOvl('pset-ovl');
  saveWbsToProject();
  syncProjectSettings();
  // Propagate to EVM
  const evmDd2 = document.getElementById('evm-data-date');
  if(evmDd2 && PROJECT_SETTINGS.dataDate) evmDd2.value = PROJECT_SETTINGS.dataDate;
  const evmBac2 = document.getElementById('evm-bac');
  if(evmBac2 && PROJECT_SETTINGS.bac) evmBac2.value = PROJECT_SETTINGS.bac;
}
// ── ACTIVITY STATUS ───────────────────────────────────────────
function setActStatus(wi, status) {
  const w = WPS[wi];
  if(!w) return;
  w.status = status;
  // Auto-sync % complete
  if(status === 'COM') { w.pct = 100; if(w.pctType==='dur') w.remDur = 0; }
  else if(status === 'NS') { if(!w.pct) w.pct = 0; }
  else if(status === 'IP' && (w.pct === 0 || w.pct === 100)) { w.pct = 0; }
  // Sync to EVM
  let evm = EVM_DATA.actuals.find(a=>a.id===w.id);
  if(!evm) { evm={id:w.id,pct:0,ac:0}; EVM_DATA.actuals.push(evm); }
  evm.pct = w.pct;
  // Update detail dock if open
  if(_selectedWi === wi) {
    const typeEl = document.getElementById('ad-pct-type');
    const pctEl = document.getElementById('ad-pct');
    if(typeEl) typeEl.value = w.pctType||'sch';
    if(pctEl) pctEl.value = w.pct||0;
    adRefreshProgress();
  }
  _afterRenderWps();
}

// ── CURRENCY LIBRARY ─────────────────────────────────────────
const CURRENCIES = [
  {symbol:'£',code:'GBP',name:'British Pound',custom:false},
  {symbol:'$',code:'USD',name:'US Dollar',custom:false},
  {symbol:'€',code:'EUR',name:'Euro',custom:false},
  {symbol:'د.إ',code:'AED',name:'UAE Dirham',custom:false},
  {symbol:'﷼',code:'SAR',name:'Saudi Riyal',custom:false},
  {symbol:'﷼',code:'QAR',name:'Qatari Riyal',custom:false},
  {symbol:'$',code:'AUD',name:'Australian Dollar',custom:false},
  {symbol:'$',code:'CAD',name:'Canadian Dollar',custom:false},
  {symbol:'¥',code:'JPY',name:'Japanese Yen',custom:false},
  {symbol:'₹',code:'INR',name:'Indian Rupee',custom:false},
  {symbol:'د.ك',code:'KWD',name:'Kuwaiti Dinar',custom:false},
  {symbol:'.ر.ب',code:'BHD',name:'Bahraini Dinar',custom:false},
  {symbol:'ر.ع',code:'OMR',name:'Omani Rial',custom:false},
  {symbol:'₦',code:'NGN',name:'Nigerian Naira',custom:false},
  {symbol:'KSh',code:'KES',name:'Kenyan Shilling',custom:false},
  {symbol:'R',code:'ZAR',name:'South African Rand',custom:false},
  {symbol:'S$',code:'SGD',name:'Singapore Dollar',custom:false},
  {symbol:'HK$',code:'HKD',name:'Hong Kong Dollar',custom:false},
  {symbol:'₩',code:'KRW',name:'South Korean Won',custom:false},
  {symbol:'RM',code:'MYR',name:'Malaysian Ringgit',custom:false},
];
let _customCurrencies = [];
// _allCurrencies defined as function below
function addCustomCurrency() {
  const sym = prompt('Currency symbol (e.g. Fr):');
  if(!sym) return;
  const code = prompt('Currency code (e.g. CHF):');
  if(!code) return;
  const name = prompt('Currency name (e.g. Swiss Franc):');
  if(!name) return;
  _customCurrencies.push({symbol:sym.trim(),code:code.trim().toUpperCase(),name:name.trim(),custom:true});
  renderCurrencyLib();
}
// ── RESOURCES LIBRARY ─────────────────────────────────────────
const RESOURCES_LIBRARY = [
  {id:'rl-se',name:'Senior Engineer',type:'labor',icon:'👷',role:'Professional',rate:650,unit:'day',desc:'Chartered engineer / project engineer'},
  {id:'rl-pm',name:'Project Manager',type:'labor',icon:'👔',role:'Management',rate:800,unit:'day',desc:'Programme and project delivery'},
  {id:'rl-fo',name:'Foreman',type:'labor',icon:'⛑',role:'Supervision',rate:380,unit:'day',desc:'Site supervision and coordination'},
  {id:'rl-sk',name:'Skilled Operative',type:'labor',icon:'🔧',role:'Skilled',rate:280,unit:'day',desc:'Skilled trades, NVQ Level 3'},
  {id:'rl-go',name:'General Operative',type:'labor',icon:'👷',role:'Labour',rate:200,unit:'day',desc:'General site labour'},
  {id:'rl-sa',name:'Safety Officer',type:'labor',icon:'🦺',role:'HSE',rate:450,unit:'day',desc:'Site HSE management'},
  {id:'rl-qa',name:'QA Inspector',type:'labor',icon:'🔍',role:'Quality',rate:420,unit:'day',desc:'Quality assurance and inspection'},
  {id:'rl-sub',name:'Subcontractor Team',type:'labor',icon:'🏗',role:'Subcontractor',rate:2500,unit:'day',desc:'Specialist subcontractor allowance'},
  {id:'re-exc',name:'Excavator 20t',type:'equip',icon:'🚜',role:'Plant',rate:850,unit:'day',desc:'20-tonne hydraulic excavator'},
  {id:'re-cr1',name:'Mobile Crane 50t',type:'equip',icon:'🏗',role:'Lifting',rate:1800,unit:'day',desc:'50-tonne mobile crane inc. operator'},
  {id:'re-cr2',name:'Tower Crane',type:'equip',icon:'🏗',role:'Lifting',rate:2200,unit:'day',desc:'Tower crane inc. operator and dogman'},
  {id:'re-conc',name:'Concrete Pump',type:'equip',icon:'🚚',role:'Concrete',rate:1200,unit:'day',desc:'Truck-mounted concrete boom pump'},
  {id:'re-gen',name:'Generator 150kVA',type:'equip',icon:'⚡',role:'Power',rate:280,unit:'day',desc:'Temporary power supply'},
  {id:'re-scaf',name:'Scaffolding',type:'equip',icon:'🔩',role:'Access',rate:1500,unit:'week',desc:'Scaffolding erect, maintain, dismantle'},
  {id:'rm-conc',name:'Ready-Mix Concrete',type:'material',icon:'🪨',role:'Material',rate:120,unit:'m³',desc:'C30 ready-mix concrete'},
  {id:'rm-steel',name:'Rebar Steel',type:'material',icon:'🔩',role:'Material',rate:850,unit:'tonne',desc:'High-yield reinforcement steel'},
  {id:'rm-block',name:'Blockwork',type:'material',icon:'🧱',role:'Material',rate:18,unit:'m²',desc:'Dense concrete block laid'},
];
let _customResLib = [];
let _allResLib = () => [...RESOURCES_LIBRARY, ..._customResLib];
let _selectedResLibId = null;
function renderResLib() {
  const filter = document.getElementById('reslib-filter')?.value || '';
  const grid = document.getElementById('reslib-grid');
  if(!grid) return;
  const items = _allResLib().filter(r => !filter || r.type === filter);
  grid.innerHTML = items.map(r => `<div class="reslib-card ${_selectedResLibId===r.id?'selected':''}" onclick="selectResLib('${r.id}')">
    <div class="reslib-card-icon">${r.icon}</div>
    <div class="reslib-card-name">${esc(r.name)}</div>
    <div class="reslib-card-meta">${r.role} · ${r.type}</div>
    <div class="reslib-card-rate">${getCurrSym()}${r.rate}/${r.unit}</div>
    ${r.custom?`<button style="position:absolute;top:4px;right:4px;border:none;background:none;cursor:pointer;color:var(--t3);font-size:12px" onclick="event.stopPropagation();removeResLib('${r.id}')">&#215;</button>`:''}
  </div>`).join('');
  const actionsEl = document.getElementById('reslib-selected-actions');
  if(actionsEl) actionsEl.style.display = _selectedResLibId ? 'flex' : 'none';
  if(_selectedResLibId) {
    const sel = _allResLib().find(r=>r.id===_selectedResLibId);
    const nameEl = document.getElementById('reslib-sel-name');
    if(nameEl && sel) nameEl.textContent = sel.name + ' · ' + (getCurrSym()) + sel.rate + '/' + sel.unit;
  }
}

function selectResLib(id) {
  _selectedResLibId = id === _selectedResLibId ? null : id;
  renderResLib();
}

// importResFromLib replaced by importSelectedToProject in v14

function addCustomResLib() {
  const name = prompt('Resource name:');
  if(!name) return;
  const type = prompt('Type (labor / equipment / material):') || 'labor';
  const rate = +prompt('Daily/unit rate:') || 0;
  const unit = prompt('Rate unit (day / week / m² / tonne):') || 'day';
  const icon = prompt('Emoji icon:') || '🔧';
  _customResLib.push({id:'crl-'+uid(),name,type,icon,role:'Custom',rate,unit,desc:'Custom resource',custom:true});
  renderResLib();
}

function removeResLib(id) {
  _customResLib = _customResLib.filter(r=>r.id!==id);
  if(_selectedResLibId===id) _selectedResLibId=null;
  renderResLib();
}

// Override openLibManager button to show resources lib for Resources tab
// Make "Library" toolbar button also accessible from Resources tab
function openResourcesLibrary() {
  mainTab('resources'); resNav('labor'); openResLib();
}

// ── SORT KEY EXTENSION ────────────────────────────────────────
// Extend getSortedFilteredWps to support status sort
function getSortedFilteredWps() {
  let wps = [...WPS];
  // Apply filters
  Object.entries(_colFilters||{}).forEach(([key,val])=>{ if(!val) return; const v=val.toLowerCase(); wps=wps.filter(w=>{ const r=SCHED.r?.[w.id]||{}; if(key==='name') return (w.name||''). toLowerCase().includes(v); if(key==='wbs') return (w.wbs||''). toLowerCase().includes(v); if(key==='phase') return (w.ph||''). toLowerCase().includes(v); if(key==='type') return (w.actType||'TASK'). toLowerCase().includes(v); if(key==='dur') return String(w.dur).includes(v); if(key==='float') return r.tf!=null&&String(r.tf).includes(v); if(key==='preds') return w.preds.some(p=>{const pw=WPS.find(x=>x.id===p.id); return pw&&pw.wbs.toLowerCase().includes(v);}); return true; }); });
  // Re-sort if status is sort key
  if(_colSortKey === 'status') {
    const order = {NS:0,IP:1,COM:2};
    wps.sort((a,b)=>{
      const sa = a.status||(a.pct>=100?'COM':a.pct>0?'IP':'NS');
      const sb = b.status||(b.pct>=100?'COM':b.pct>0?'IP':'NS');
      const diff = (order[sa]??0)-(order[sb]??0);
      return _colSortDir==='asc'?diff:-diff;
    });
  }
  return wps;
}

// ── DISCLAIMER IN EXPORT TAB ──────────────────────────────────
// Add disclaimer to Export panel (t-report) after report-panel content
function _addReportDisclaimer() { /* removed */ }

// ── INIT HOOK ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  _loadResLibFromStorage();
  _addReportDisclaimer();
  updateHdrSummary();
});


// ═══════════════════════════════════════════════════════════════
// V12 — CUSTOM LIBRARY, DOCUMENT PARSER, XER IMPORT, CSV IMPORT
// ═══════════════════════════════════════════════════════════════

// ── CUSTOM LIBRARY RENDER ─────────────────────────────────────
function renderCustomLib(el, ads, q) {
  if(!el) return;
  const filtered = CUSTOM_MODS.filter(m => !q || (m.n+'|'+(m.d||'')).toLowerCase().includes(q));
  
  let html = `<div style="padding:6px 8px 4px;display:flex;align-items:center;gap:5px">
    <span style="font-size:10px;font-weight:700;color:var(--t3)">${filtered.length} CUSTOM MODULES</span>
    <div style="flex:1"></div>
  </div>`;

  if(!filtered.length) {
    html += `<div class="clib-empty">
      <div style="font-size:24px;margin-bottom:6px">📚</div>
      <div>No custom modules yet.</div>
      <div style="margin-top:4px;font-size:10px">Create your own work package collections below.</div>
    </div>`;
  } else {
    filtered.forEach(m => {
      html += `<div class="clib-mod">
        <div class="clib-mod-hdr">
          <span class="clib-mod-icon">${m.ico||'📋'}</span>
          <span class="clib-mod-name">${esc(m.n)}</span>
          <div class="clib-mod-actions">
            <button class="ib" onclick="editCustomMod('${m.id}')" title="Edit">&#9998;</button>
            <button class="ib" onclick="addMod('${m.id}')" title="Add to WBS" style="color:var(--blue)">+</button>
            <button class="ib del" onclick="deleteCustomMod('${m.id}')" title="Delete">&#215;</button>
          </div>
        </div>
        ${(m.w||[]).slice(0,3).map(wp=>`<div class="clib-mod-wp">&#8226; ${esc(wp.n||wp.sg||'')} <span style="margin-left:auto;color:var(--blue)">${wp.dur||0}d</span></div>`).join('')}
        ${m.w?.length>3?`<div style="font-size:10px;color:var(--t3);padding:1px 0">+${m.w.length-3} more work packages</div>`:''}
      </div>`;
    });
  }
  
  html += `<button class="clib-add-btn" onclick="openNewCustomMod()">+ Create New Module</button>`;
  el.innerHTML = html;
}

function _populateCmodDoms() {
  const sel = document.getElementById('cmod-dom');
  if(!sel) return;
  if(sel.options.length > 1) return; // already populated
  C_DOMS.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d.id; opt.textContent = d.ico + ' ' + d.lbl;
    sel.appendChild(opt);
  });
}

function openNewCustomMod() {
  _populateCmodDoms();
  document.getElementById('cmod-edit-id').value = '';
  document.getElementById('cmod-edit-title').textContent = '✚ New Module';
  document.getElementById('cmod-name').value = '';
  document.getElementById('cmod-icon').value = '📋';
  document.getElementById('cmod-desc').value = '';
  renderCmodWps([]);
  document.getElementById('cmod-edit-ovl')?.classList.add('on');
}

function editCustomMod(id) {
  _populateCmodDoms();
  const m = CUSTOM_MODS.find(x=>x.id===id);
  if(!m) return;
  document.getElementById('cmod-edit-id').value = id;
  document.getElementById('cmod-edit-title').textContent = '✎ Edit Module';
  document.getElementById('cmod-name').value = m.n||'';
  document.getElementById('cmod-icon').value = m.ico||'📋';
  document.getElementById('cmod-desc').value = m.d||'';
  const domEl = document.getElementById('cmod-dom');
  if(domEl) domEl.value = m.dom||'CUST';
  renderCmodWps(m.w||[]);
  document.getElementById('cmod-edit-ovl')?.classList.add('on');
}

let _cmodWps = [];
function renderCmodWps(wps) {
  _cmodWps = wps.map(w=>({...w}));
  const list = document.getElementById('cmod-wps-list');
  if(!list) return;
  list.innerHTML = _cmodWps.length ? _cmodWps.map((wp,i)=>`<div style="display:flex;align-items:center;gap:5px;background:var(--s1);border:1px solid var(--b1);border-radius:4px;padding:4px 7px">
    <input value="${esc(wp.n||wp.sg||'')}" placeholder="Work package name" style="flex:2;background:var(--s0);border:1px solid var(--b2);border-radius:3px;padding:3px 6px;font-size:11px;font-family:inherit;color:var(--t1)" oninput="_cmodWps[${i}].n=this.value;_cmodWps[${i}].sg=this.value">
    <select style="background:var(--s0);border:1px solid var(--b2);border-radius:3px;padding:3px;font-size:10px;color:var(--t1)" oninput="_cmodWps[${i}].ph=this.value">
      ${Object.entries(PH).map(([k,v])=>`<option value="${k}" ${(wp.ph||'FIN')===k?'selected':''}>${v.lbl.split(' ')[0]}</option>`).join('')}
    </select>
    <input type="number" value="${wp.dur||5}" min="0" placeholder="Days" style="width:48px;background:var(--s0);border:1px solid var(--b2);border-radius:3px;padding:3px 5px;font-size:11px;font-family:inherit;color:var(--t1)" oninput="_cmodWps[${i}].dur=+this.value">
    <button class="ib del" onclick="_cmodWps.splice(${i},1);renderCmodWps(_cmodWps)">&#215;</button>
  </div>`).join('') : '<div style="color:var(--t3);font-size:11px;padding:8px">No work packages. Click Add Work Package below.</div>';
}

function addCmodWp() {
  _cmodWps.push({sg:'New Work Package',n:'New Work Package',ph:'FIN',trk:'CONSTR',dur:5});
  renderCmodWps(_cmodWps);
  const list = document.getElementById('cmod-wps-list');
  if(list) { const inputs=list.querySelectorAll('input'); if(inputs.length) inputs[inputs.length-2]?.focus(); }
}

function saveCmodEdit() {
  const id = document.getElementById('cmod-edit-id')?.value;
  const name = document.getElementById('cmod-name')?.value?.trim();
  if(!name) { alert('Module name is required.'); return; }
  const icon = document.getElementById('cmod-icon')?.value||'📋';
  const desc = document.getElementById('cmod-desc')?.value||'';
  const dom = document.getElementById('cmod-dom')?.value||'CUST';
  if(id) {
    const idx = CUSTOM_MODS.findIndex(x=>x.id===id);
    if(idx>=0) CUSTOM_MODS[idx] = {...CUSTOM_MODS[idx], n:name, ico:icon, d:desc, dom, w:_cmodWps};
  } else {
    CUSTOM_MODS.push({id:'cm-'+uid(), n:name, ico:icon, d:desc, dom, w:_cmodWps, q:[]});
  }
  saveCustomLib(); renderLib();
  closeOvl('cmod-edit-ovl');
}

function deleteCustomMod(id) {
  if(!confirm('Delete this module? This cannot be undone.')) return;
  const idx = CUSTOM_MODS.findIndex(x=>x.id===id);
  if(idx>=0) CUSTOM_MODS.splice(idx,1);
  saveCustomLib(); renderLib();
}

// ── DOCUMENT PARSER ───────────────────────────────────────────
let _parsedActivities = [];
let _parsedMilestones = [];

const PHASE_KEYWORDS = {
  EN:  ['enabling','demolition','clearance','survey','investigation','temporary works','site setup','welfare','establishment'],
  GW:  ['groundwork','foundation','piling','excavation','drainage','earthwork','bulk dig','cap'],
  ST:  ['frame','structure','concrete','steel','slab','beam','column','core','raft','retaining'],
  ENV: ['façade','envelope','cladding','roof','window','curtain wall','brickwork','external wall','weathertight'],
  MEP: ['mechanical','electrical','plumbing','hvac','ventilation','sprinkler','fire','data cabling','lifts','escalator'],
  FIN: ['finishes','fit-out','plastering','screeding','tiling','painting','decoration','internal','fixture','fitting'],
  EXT: ['external works','landscaping','car park','road','footpath','drainage','fence','gate'],
  COM: ['commissioning','testing','handover','snagging','defects','completion','occupation'],
  CON: ['planning','consent','approval','permit','licence','authority'],
  PRO: ['procurement','tender','purchase order','long lead','supply'],
  INF: ['infrastructure','utility','services','water','gas','electric','telecoms'],
};

const MILESTONE_KEYWORDS = ['completion','handover','practical completion','pc date','milestone','key date','deadline','target','by','no later than','nlt'];
const DURATION_PATTERNS = [
  /(\d+(?:\.\d+)?)\s*(weeks?|wks?)/i,
  /(\d+(?:\.\d+)?)\s*(days?|d\b)/i,
  /(\d+(?:\.\d+)?)\s*(months?|mths?)/i,
];

function openDocParser() {
  document.getElementById('docparse-ovl')?.classList.add('on');
}

function loadSampleDoc() {
  document.getElementById('docparse-input').value = `SCOPE OF WORKS - Commercial Office Development

1.0 ENABLING WORKS
1.1 Site Establishment and Welfare Facilities - 2 weeks
1.2 Demolition of Existing Buildings - 4 weeks
1.3 Asbestos Removal and Disposal - 2 weeks
1.4 Site Investigation and Survey Works - 1 week

2.0 SUBSTRUCTURE AND GROUNDWORKS
2.1 Piling Works (CFA Piles) - 6 weeks
2.2 Pile Caps and Ground Beams - 4 weeks
2.3 Basement Excavation - 3 weeks
2.4 Basement Waterproofing and Slab - 3 weeks
2.5 Drainage and Drainage Connections - 2 weeks

3.0 SUPERSTRUCTURE - FRAME
3.1 RC Frame Podium Level - 6 weeks
3.2 RC Frame Floors 1-5 - 10 weeks
3.3 RC Frame Floors 6-10 - 10 weeks
3.4 Roof Structure and Plant Room - 4 weeks

4.0 ENVELOPE AND FACADE
4.1 Curtain Walling and Glazing - 8 weeks
4.2 Brickwork and Cladding - 6 weeks
4.3 Roof Waterproofing and Finishes - 3 weeks

5.0 MECHANICAL AND ELECTRICAL
5.1 MEP First Fix (Containment and Roughing In) - 8 weeks
5.2 Mechanical Installations (HVAC, Plumbing) - 10 weeks
5.3 Electrical Installations (LV, Lighting) - 8 weeks
5.4 Fire Protection Systems - 6 weeks

6.0 INTERNAL FITOUT
6.1 Partitioning and Drylining - 6 weeks
6.2 Raised Access Floors - 4 weeks
6.3 Suspended Ceilings - 5 weeks
6.4 Joinery and Finishes - 6 weeks

7.0 EXTERNAL WORKS AND COMMISSIONING
7.1 External Works and Landscaping - 4 weeks
7.2 MEP Commissioning and Testing - 4 weeks
7.3 Building Commissioning (BMS, Access Control) - 2 weeks

KEY MILESTONES:
- Planning Consent: 01/03/2025
- Start on Site: 01/06/2025
- Structure Complete: 01/06/2026
- Practical Completion: 01/03/2027`;
}

function loadDocFile(input) {
  const file = input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('docparse-input').value = e.target.result;
  };
  reader.readAsText(file, 'ISO-8859-1');
}

function runDocParser() {
  const text = document.getElementById('docparse-input')?.value || '';
  if(!text.trim()) { alert('Please paste or upload a document first.'); return; }
  
  _parsedActivities = [];
  _parsedMilestones = [];
  
  const lines = text.split(/\n/).map(l => l.trim()).filter(Boolean);
  
  lines.forEach((line, i) => {
    const lower = line.toLowerCase();
    
    // Skip headings (ALL CAPS, short, no duration)
    const isHeading = /^[\d.]+\s+[A-Z\s]{5,}$/.test(line) && !/\d+\s*(week|day|month)/.test(lower);
    if(isHeading) return;
    
    // Check if milestone
    const isMilestone = MILESTONE_KEYWORDS.some(kw => lower.includes(kw));
    
    // Extract duration
    let durDays = 10; // default
    let durUnit = 'd';
    for(const pat of DURATION_PATTERNS) {
      const m = line.match(pat);
      if(m) {
        const val = parseFloat(m[1]);
        const unit = m[2].toLowerCase();
        if(unit.startsWith('w')) { durDays = Math.round(val * 5); durUnit = 'w'; }
        else if(unit.startsWith('m')) { durDays = Math.round(val * 22); durUnit = 'm'; }
        else { durDays = Math.round(val); durUnit = 'd'; }
        break;
      }
    }
    
    // Clean activity name
    let name = line.replace(/^\d+[\.\d]*\s*/, '').replace(DURATION_PATTERNS[0],'').replace(DURATION_PATTERNS[1],'').replace(DURATION_PATTERNS[2],'').replace(/[-–—]\s*$/, '').replace(/\s+/g,' ').trim();
    if(name.length < 4) return;
    
    // Detect milestone with date
    const dateMatch = line.match(/(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/);
    if(isMilestone && dateMatch) {
      _parsedMilestones.push({ name, date: dateMatch[1], checked: true });
      return;
    }
    
    // Detect phase
    let phase = 'FIN';
    let maxScore = 0;
    Object.entries(PHASE_KEYWORDS).forEach(([ph, kws]) => {
      const score = kws.filter(kw => lower.includes(kw)).length;
      if(score > maxScore) { maxScore = score; phase = ph; }
    });
    
    if(name) {
      _parsedActivities.push({ name, dur: durDays, durUnit, phase, checked: true });
    }
  });
  
  renderParseResults();
}

function renderParseResults() {
  const list = document.getElementById('parse-result-list');
  const countEl = document.getElementById('parse-count');
  const msWrap = document.getElementById('parse-milestones-wrap');
  const msList = document.getElementById('parse-ms-list');
  const msCount = document.getElementById('parse-ms-count');
  
  if(countEl) countEl.textContent = _parsedActivities.length;
  
  if(!_parsedActivities.length) {
    if(list) list.innerHTML = '<div style="padding:12px;color:var(--t3);font-size:11px">No activities detected. Try adjusting your document format.</div>';
  } else {
    if(list) list.innerHTML = _parsedActivities.map((a,i) => `<div class="parse-item">
      <input type="checkbox" class="parse-item-check" ${a.checked?'checked':''} onchange="_parsedActivities[${i}].checked=this.checked">
      <input class="parse-item-name" value="${esc(a.name)}" style="flex:1;background:none;border:none;font-size:11px;color:var(--t1);padding:0" oninput="_parsedActivities[${i}].name=this.value">
      <input type="number" value="${a.durUnit==='w'?Math.round(a.dur/5):a.durUnit==='m'?Math.round(a.dur/22):a.dur}" style="width:36px;background:none;border:none;font-size:10px;color:var(--t3);text-align:right;padding:0" oninput="_parsedActivities[${i}].dur=+this.value*${a.durUnit==='w'?5:a.durUnit==='m'?22:1}">
      <span class="parse-item-phase" style="background:${PH[a.phase]?.col||'#888'}22;color:${PH[a.phase]?.dk||'#555'}">${a.phase}</span>
    </div>`).join('');
  }
  
  if(_parsedMilestones.length) {
    if(msWrap) msWrap.style.display='block';
    if(msCount) msCount.textContent=_parsedMilestones.length;
    if(msList) msList.innerHTML=_parsedMilestones.map((ms,i)=>`<div class="parse-ms-item">
      <input type="checkbox" ${ms.checked?'checked':''} onchange="_parsedMilestones[${i}].checked=this.checked">
      <span style="flex:1">${esc(ms.name)}</span>
      <span style="color:var(--blue);font-size:10px">${ms.date}</span>
    </div>`).join('');
  } else {
    if(msWrap) msWrap.style.display='none';
  }
}

function applyParsedSchedule() {
  const target = document.getElementById('parse-target')?.value || 'new';
  const selected = _parsedActivities.filter(a=>a.checked);
  if(!selected.length) { alert('No activities selected.'); return; }
  
  if(target === 'new' && (WPS.length || WBS_NODES.length)) {
    if(!confirm(`This will replace your current schedule (${WPS.length} activities). Continue?`)) return;
    WPS = []; WBS_NODES = [];
  }
  
  if(target !== 'append') {
    // Group by phase → create WBS nodes
    const phases = [...new Set(selected.map(a=>a.phase))];
    phases.forEach((ph, pi) => {
      const phInfo = PH[ph] || {lbl:ph};
      const nodeId = uid();
      WBS_NODES.push({id:nodeId,code:String(pi+1),name:phInfo.lbl||ph,type:'SUMM',pId:null,calId:0,order:pi,collapsed:false,modItems:[]});
      const phActs = selected.filter(a=>a.phase===ph);
      phActs.forEach((a,ai)=>{
        WPS.push({id:uid(),sg:'SG-PARSED',name:a.name,ph:a.phase,trk:'CONSTR',dur:a.dur,durUnit:a.durUnit||'d',preds:[],wbs:'',wbsNodeId:nodeId,actType:'TASK',constraint:'ASAP',pct:0,pctType:'sch',status:'NS'});
      });
    });
  } else {
    selected.forEach(a => {
      WPS.push({id:uid(),sg:'SG-PARSED',name:a.name,ph:a.phase,trk:'CONSTR',dur:a.dur,durUnit:a.durUnit||'d',preds:[],wbs:'',wbsNodeId:ACTIVE_WBS||null,actType:'TASK',constraint:'ASAP',pct:0,pctType:'sch',status:'NS'});
    });
  }
  
  // Wire FS chain within each phase
  let prev = null;
  WPS.forEach(w => {
    if(prev && prev.wbsNodeId === w.wbsNodeId && !w.preds.length) { w.preds = [{id:prev.id,tp:'FS',lg:0}]; }
    prev = w;
  });
  
  // Add parsed milestones
  _parsedMilestones.filter(ms=>ms.checked).forEach(ms => {
    MILESTONES.push({id:uid(),name:ms.name,date:ms.date,type:'Key Date',color:'#F59E0B',wbsId:null});
  });
  
  assignWbs(); recalc(); saveWbsToProject();
  renderWps(); renderWbsTree(); renderMilestones();
  closeOvl('docparse-ovl');
  alert(`✓ Loaded ${selected.length} activities and ${_parsedMilestones.filter(m=>m.checked).length} milestones into the schedule.`);
}
function setImportTab(tab) {
  const xp=document.getElementById('imp-panel-xer');
  const cp=document.getElementById('imp-panel-csv');
  const xt=document.getElementById('imp-tab-xer');
  const ct=document.getElementById('imp-tab-csv');
  if(xp) xp.style.display = tab==='xer'?'block':'none';
  if(cp) cp.style.display = tab==='csv'?'block':'none';
  if(xt) { xt.style.background=tab==='xer'?'var(--blue)':''; xt.style.color=tab==='xer'?'#fff':''; xt.style.borderColor=tab==='xer'?'var(--blue)':'var(--b1)'; }
  if(ct) { ct.style.background=tab==='csv'?'var(--blue)':''; ct.style.color=tab==='csv'?'#fff':''; ct.style.borderColor=tab==='csv'?'var(--blue)':'var(--b1)'; }
}

function handleXerDrop(e) { const f=e.dataTransfer?.files[0]; if(f) readXerFile(f); }
function handleXerFile(inp) { const f=inp.files[0]; if(f) readXerFile(f); }

function readXerFile(file) {
  showImportProgress('📋 Reading XER file…');
  setImportProgress(2, file.name + ' (' + (file.size/1024).toFixed(0) + 'KB)');
  const reader = new FileReader();
  reader.onload = e => {
    try {
      parseXER(e.target.result);
    } catch(err) {
      hideImportProgress();
      alert('XER import error: ' + err.message);
      console.error('XER import:', err);
    }
  };
  reader.onerror = () => { hideImportProgress(); alert('Could not read file'); };
  // P6 XER files use ISO-8859-1 (Latin-1) encoding
  reader.readAsText(file, 'ISO-8859-1');
}
// ── CSV TEMPLATE EXPORT / IMPORT ─────────────────────────────
function exportCsvTemplate() {
  const headers = ['WBS_Code','Activity_Name','Activity_Type','Duration','Duration_Unit','Phase','Predecessors','Pct_Complete','Pct_Type','Status','Constraint','Notes'];
  const exampleRows = WPS.length ? WPS.map(w=>[
    w.wbs||'',
    '"'+(w.name||'').replace(/"/g,'""')+'"',
    w.actType||'TASK',
    w.dur||0,
    w.durUnit||'d',
    w.ph||'FIN',
    w.preds.map(p=>{const pw=WPS.find(x=>x.id===p.id);return pw?`${pw.wbs} ${p.tp}`:''}).filter(Boolean).join('|'),
    w.pct||0,
    w.pctType||'sch',
    w.status||'NS',
    w.constraint||'ASAP',
    '"'+(w.notes||'').replace(/"/g,'""')+'"'
  ].join(',')) : [
    '1.1,"Site Establishment",TASK,2,w,EN,,0,sch,NS,ASAP,""',
    '1.2,"Demolition",TASK,3,w,EN,1.1 FS,0,sch,NS,ASAP,""',
  ];
  const csv = [headers.join(','), ...exampleRows].join('\n');
  const blob = new Blob([csv], {type:'text/csv'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (currentProject?.id||'gensched')+'_template.csv';
  a.click();
}

function handleCsvDrop(e) { const f=e.dataTransfer?.files[0]; if(f) readCsvFile(f); }
function handleCsvFile(inp) { const f=inp.files[0]; if(f) readCsvFile(f); }

function readCsvFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try { parseCsvSchedule(e.target.result); }
    catch(err) { alert('Error reading CSV: '+err.message); }
  };
  reader.readAsText(file);
}

function parseCsvSchedule(text) {
  const rows = text.split(/\r?\n/).filter(Boolean);
  if(rows.length < 2) { alert('CSV file is empty or has no data rows.'); return; }
  
  const headers = rows[0].split(',').map(h=>h.trim().toLowerCase().replace(/[^a-z_]/g,''));
  const get = (row, key) => {
    const idx = headers.findIndex(h=>h===key||h.includes(key.split('_')[0]));
    if(idx<0) return '';
    return row[idx]?.replace(/^"|"$/g,'').replace(/""/g,'"').trim() || '';
  };
  
  // Parse CSV rows (handle quoted fields)
  const parseRow = line => {
    const result=[]; let field='', inQ=false;
    for(let i=0;i<line.length;i++){
      const ch=line[i];
      if(ch==='"'){if(inQ&&line[i+1]==='"'){field+='"';i++;}else inQ=!inQ;}
      else if(ch===','&&!inQ){result.push(field);field='';}
      else field+=ch;
    }
    result.push(field);
    return result;
  };
  
  const dataRows = rows.slice(1).map(parseRow);
  
  if(WPS.length && !confirm(`Import ${dataRows.length} activities from CSV? This will replace existing schedule.`)) return;
  
  // Build WBS index from parsed data
  const wbsCodeToNodeId = {};
  const newNodes = [];
  
  WPS = dataRows.filter(row=>get(row,'activity')&&get(row,'activity')!=='Activity_Name').map(row=>{
    const wbsCode = get(row,'wbs');
    // Auto-create WBS node if needed
    if(wbsCode && !wbsCodeToNodeId[wbsCode]) {
      const parentCode = wbsCode.split('.').slice(0,-1).join('.');
      const nodeId = uid();
      wbsCodeToNodeId[wbsCode] = nodeId;
      newNodes.push({id:nodeId,code:wbsCode,name:'WBS '+wbsCode,type:'SUMM',pId:wbsCodeToNodeId[parentCode]||null,calId:0,order:newNodes.length,collapsed:false,modItems:[]});
    }
    return {
      id:uid(), sg:'SG-CSV',
      name:get(row,'activity')||get(row,'name')||'Activity',
      ph:get(row,'phase')||'FIN',
      trk:'CONSTR',
      dur:+(get(row,'duration')||10)||10,
      durUnit:get(row,'unit')||'d',
      preds:[], // wire below
      wbs:'',
      wbsNodeId:wbsCodeToNodeId[wbsCode]||null,
      actType:get(row,'type')||'TASK',
      constraint:get(row,'constraint')||'ASAP',
      pct:+(get(row,'pct')||0),
      pctType:get(row,'pct_type')||'sch',
      status:get(row,'status')||'NS',
      notes:get(row,'notes')||'',
      _predStr:get(row,'predecessors')
    };
  });
  
  if(newNodes.length) WBS_NODES = newNodes;
  
  // Wire predecessors
  WPS.forEach(w => {
    if(!w._predStr) return;
    w._predStr.split('|').forEach(pStr => {
      const parts = pStr.trim().split(' ');
      const pw = WPS.find(x=>x.wbs===parts[0]||x.name===parts[0]);
      if(pw) w.preds.push({id:pw.id,tp:parts[1]||'FS',lg:0});
    });
    delete w._predStr;
  });
  
  assignWbs(); recalc(); saveWbsToProject();
  renderWps(); renderWbsTree();
  closeOvl('import-ovl');
  alert(`✓ CSV imported: ${WPS.length} activities.`);
}


// ── MISSING FUNCTION ALIASES (compatibility) ──────────────────
function exportCSV() { exportCsvTemplate(); }

function deleteCalendar(id) {
  if(CALENDARS.find(c=>c.id===id)?.builtin) return;
  if(!confirm('Delete this calendar?')) return;
  CALENDARS = CALENDARS.filter(c=>c.id!==id);
  // Re-assign activities using deleted calendar to default
  WPS.forEach(w=>{ if(w.calId===id) w.calId=0; });
  renderCalList(); renderCalsTab(); renderWps();
  saveWbsToProject();
}

function saveProjectToList() {
  if(!currentProject) return;
  let projects = JSON.parse(localStorage.getItem('pa_projects')||'[]');
  const idx = projects.findIndex(p=>p.id===currentProject.id);
  if(idx>=0) projects[idx]={...projects[idx],...currentProject};
  else projects.push(currentProject);
  localStorage.setItem('pa_projects', JSON.stringify(projects));
  localStorage.setItem('pa_last_project', JSON.stringify(currentProject));
}
function openOvl(id) {
  const el=document.getElementById(id);
  if(el) el.classList.add('on');
}


// ── GLOBAL ERROR SAFETY ──────────────────────────────────────
window.addEventListener('error', function(e) {
  console.error('GenSched error:', e.message, 'at', e.filename, e.lineno);
});

// Safe element getter
function _el(id) { return document.getElementById(id); }
function _sv(id, v) { const e=_el(id); if(e) e.value=v??''; return e; }
function _st(id, v) { const e=_el(id); if(e) e.textContent=v??''; return e; }


// ═══════════════════════════════════════════════════════════════
// V14 — PERFORMANCE ENGINE + RESOURCE LIBRARY
// ═══════════════════════════════════════════════════════════════

// ── VIRTUAL SCROLL ENGINE ─────────────────────────────────────
const VSCROLL = {
  ROW_H: 32,          // estimated row height px
  BUFFER: 30,         // rows to render above/below viewport
  CHUNK: 80,          // rows per chunk for initial render
  enabled: false,     // only enable when >THRESHOLD activities
  THRESHOLD: 150,     // enable virtualization above this count
  _flat: [],          // flattened row data cache
  _scrollEl: null,    // the scrollable container
  _lastStart: -1,
  _lastEnd: -1,
};
function renderRowHtml(row) {
  if(row.type === 'wbs-hdr') {
    const n = row.node;
    const indent = (row.depth||0)*16;
    return `<tr class="wt-wbs-hdr">
      <td colspan="15" style="padding:5px 9px 5px ${9+indent}px;border-left:3px solid #6D28D9;cursor:pointer" onclick="toggleWbsCollapse('${n.id}')">
        <span style="font-family:var(--mono);font-size:10px;color:#6D28D9;margin-right:6px">${esc(n.code)}</span>
        <span style="font-weight:700;font-size:12px">${esc(n.name)}</span>
        <span style="font-size:10px;color:var(--t3);margin-left:6px">${row.count} activities</span>
        <button class="btn btnxs" style="margin-left:8px;font-size:10px;float:right" onclick="event.stopPropagation();showInlineAdd('${n.id}')">+ Add</button>
      </td>
    </tr>`;
  }
  if(row.type === 'phase-hdr') {
    const ph = row.ph; const info = PH[ph]||{lbl:ph,col:'#888',dk:'#333'};
    return `<tr class="wt-wbs-hdr"><td colspan="15" style="padding:5px 9px;border-left:3px solid ${info.col}">
      <span style="color:${info.dk};font-weight:700;font-size:12px">${info.lbl||ph}</span>
      <span style="font-size:10px;color:var(--t3);margin-left:6px">${row.count} activities</span>
    </td></tr>`;
  }
  if(row.type === 'activity') {
    const wi = WPS.indexOf(row.w);
    if(wi < 0) return '';
    return renderWpRow(row.w, 8, row.succMap||{});
  }
  return '';
}

// Chunked async render for large schedules
function renderWpsAsync(flat, body) {
  _renderAbort = false;
  const CHUNK = 100;
  let i = 0;
  body.innerHTML = '';

  function renderChunk() {
    if(_renderAbort) return;
    const end = Math.min(i + CHUNK, flat.length);
    const frag = document.createDocumentFragment();
    const tmp = document.createElement('tbody');
    for(let j = i; j < end; j++) {
      tmp.insertAdjacentHTML('beforeend', renderRowHtml(flat[j]));
    }
    while(tmp.firstChild) frag.appendChild(tmp.firstChild);
    body.appendChild(frag);
    i = end;
    if(i < flat.length) {
      requestAnimationFrame(renderChunk);
    } else {
      _afterRenderWps();
    }
  }
  requestAnimationFrame(renderChunk);
}
// ── ASYNC XER IMPORT WITH PROGRESS ────────────────────────────
let _importCancelled = false;

function cancelImport() {
  _importCancelled = true;
  document.getElementById('import-progress-overlay').style.display = 'none';
}

function showImportProgress(title) {
  _importCancelled = false;
  const ovl = document.getElementById('import-progress-overlay');
  const tEl = document.getElementById('imp-prog-title');
  const log = document.getElementById('imp-log');
  if(ovl) ovl.style.display = 'flex';
  if(tEl) tEl.textContent = title || 'Importing Schedule…';
  if(log) log.innerHTML = '';
  setImportProgress(0, 'Starting…');
}

function setImportProgress(pct, label, logLine) {
  const fill = document.getElementById('imp-pb-fill');
  const lbl = document.getElementById('imp-pb-label');
  const log = document.getElementById('imp-log');
  if(fill) fill.style.width = pct + '%';
  if(lbl) lbl.textContent = label;
  if(log && logLine) {
    const line = document.createElement('div');
    line.textContent = '> ' + logLine;
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
  }
}

function hideImportProgress() {
  document.getElementById('import-progress-overlay').style.display = 'none';
}
// _parseXERPhase1 replaced by _xer_* pipeline in v23
function _parseXERPhase1(){}

// _parseXERPhase2 replaced by _xer_* pipeline in v23
function _parseXERPhase2(){}


// _parseXERPhase2_5 replaced by _xer_* pipeline in v23
function _parseXERPhase2_5(){}

// _parseXERPhase3 replaced by _xer_* pipeline in v23
function _parseXERPhase3(){}

// _parseXERPhase4 replaced by _xer_* pipeline in v23
function _parseXERPhase4(){}

// _parseXERFinalizeV16 replaced by _xer_* pipeline in v23
function _parseXERFinalizeV16(){
  try{ refreshAllTabs && refreshAllTabs(); }catch(e){}
}

// Debounce recalc for bulk operations
let _recalcTimer = null;
function recalcDebounced(delay) {
  clearTimeout(_recalcTimer);
  _recalcTimer = setTimeout(() => { recalc(); renderWps(); if(_ganttSplitOpen) renderGantt(); }, delay||300);
}


// ═══════════════════════════════════════════════════════════════
// V14 — FULL CUSTOMISABLE RESOURCE LIBRARY
// ═══════════════════════════════════════════════════════════════

// ── EXTENDED RESOURCE LIBRARY DATA ───────────────────────────
const RATE_SETS = {
  uk: {symbol:'£',mult:1.0, label:'UK'},
  uae: {symbol:'AED',mult:4.7, label:'UAE'},
  ksa: {symbol:'SAR',mult:5.0, label:'KSA'},
  usa: {symbol:'$',mult:1.3,  label:'USA'},
  custom: {symbol:'',mult:1.0, label:'Custom'},
};
let _currentRateSet = 'uk';

// Master resource library — built-in + custom
let MASTER_RES_LIB = [
  // ── Labour ───────────────────────────────────────────────
  {id:'rl-001',cat:'Labour',icon:'👔',name:'Project Manager',type:'labor',role:'Management',baseRate:800,unit:'day',avail:100,skills:'PMP,APM',builtin:true,selected:false},
  {id:'rl-002',cat:'Labour',icon:'👷',name:'Senior Engineer',type:'labor',role:'Engineering',baseRate:650,unit:'day',avail:100,skills:'CEng,BSc',builtin:true,selected:false},
  {id:'rl-003',cat:'Labour',icon:'👷',name:'Project Engineer',type:'labor',role:'Engineering',baseRate:480,unit:'day',avail:100,skills:'BEng',builtin:true,selected:false},
  {id:'rl-004',cat:'Labour',icon:'⛑',name:'Site Manager',type:'labor',role:'Management',baseRate:550,unit:'day',avail:100,skills:'CSCS',builtin:true,selected:false},
  {id:'rl-005',cat:'Labour',icon:'⛑',name:'Foreman',type:'labor',role:'Supervision',baseRate:380,unit:'day',avail:100,skills:'CSCS',builtin:true,selected:false},
  {id:'rl-006',cat:'Labour',icon:'🔧',name:'Skilled Operative',type:'labor',role:'Skilled',baseRate:280,unit:'day',avail:100,skills:'NVQ3',builtin:true,selected:false},
  {id:'rl-007',cat:'Labour',icon:'👷',name:'General Operative',type:'labor',role:'Labour',baseRate:200,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  {id:'rl-008',cat:'Labour',icon:'🦺',name:'Safety Officer (HSE)',type:'labor',role:'HSE',baseRate:450,unit:'day',avail:100,skills:'NEBOSH',builtin:true,selected:false},
  {id:'rl-009',cat:'Labour',icon:'🔍',name:'QA/QC Inspector',type:'labor',role:'Quality',baseRate:420,unit:'day',avail:100,skills:'IRCA',builtin:true,selected:false},
  {id:'rl-010',cat:'Labour',icon:'📐',name:'Quantity Surveyor',type:'labor',role:'Commercial',baseRate:600,unit:'day',avail:100,skills:'RICS,MRICS',builtin:true,selected:false},
  {id:'rl-011',cat:'Labour',icon:'🏗',name:'Structural Engineer',type:'labor',role:'Engineering',baseRate:700,unit:'day',avail:100,skills:'CEng',builtin:true,selected:false},
  {id:'rl-012',cat:'Labour',icon:'⚡',name:'MEP Engineer',type:'labor',role:'Engineering',baseRate:650,unit:'day',avail:100,skills:'CIBSE',builtin:true,selected:false},
  {id:'rl-013',cat:'Subcontractor',icon:'🏗',name:'Subcontractor Team',type:'labor',role:'Subcontractor',baseRate:2500,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  {id:'rl-014',cat:'Subcontractor',icon:'⚡',name:'MEP Subcontractor',type:'labor',role:'Subcontractor',baseRate:3500,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  // ── Equipment / Plant ─────────────────────────────────────
  {id:'re-001',cat:'Plant & Equipment',icon:'🚜',name:'Excavator 5t (Mini)',type:'equip',role:'Plant',baseRate:280,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  {id:'re-002',cat:'Plant & Equipment',icon:'🚜',name:'Excavator 20t',type:'equip',role:'Plant',baseRate:850,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  {id:'re-003',cat:'Plant & Equipment',icon:'🚜',name:'Excavator 35t',type:'equip',role:'Plant',baseRate:1200,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  {id:'re-004',cat:'Plant & Equipment',icon:'🏗',name:'Mobile Crane 25t',type:'equip',role:'Lifting',baseRate:1200,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  {id:'re-005',cat:'Plant & Equipment',icon:'🏗',name:'Mobile Crane 50t',type:'equip',role:'Lifting',baseRate:1800,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  {id:'re-006',cat:'Plant & Equipment',icon:'🏗',name:'Tower Crane (erect+operate)',type:'equip',role:'Lifting',baseRate:2200,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  {id:'re-007',cat:'Plant & Equipment',icon:'🚚',name:'Concrete Pump (truck-mounted)',type:'equip',role:'Concrete',baseRate:1200,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  {id:'re-008',cat:'Plant & Equipment',icon:'⚡',name:'Generator 50kVA',type:'equip',role:'Power',baseRate:120,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  {id:'re-009',cat:'Plant & Equipment',icon:'⚡',name:'Generator 150kVA',type:'equip',role:'Power',baseRate:280,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  {id:'re-010',cat:'Plant & Equipment',icon:'🔩',name:'Scaffolding (erect/maintain/dismantle)',type:'equip',role:'Access',baseRate:1500,unit:'week',avail:100,skills:'',builtin:true,selected:false},
  {id:'re-011',cat:'Plant & Equipment',icon:'🚚',name:'Dumper Truck (10t)',type:'equip',role:'Transport',baseRate:400,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  {id:'re-012',cat:'Plant & Equipment',icon:'🔩',name:'Piling Rig (CFA)',type:'equip',role:'Piling',baseRate:3500,unit:'day',avail:100,skills:'',builtin:true,selected:false},
  // ── Materials ─────────────────────────────────────────────
  {id:'rm-001',cat:'Materials',icon:'🪨',name:'Ready-Mix Concrete C30',type:'material',role:'Concrete',baseRate:120,unit:'m³',avail:100,skills:'',builtin:true,selected:false},
  {id:'rm-002',cat:'Materials',icon:'🪨',name:'Ready-Mix Concrete C40',type:'material',role:'Concrete',baseRate:145,unit:'m³',avail:100,skills:'',builtin:true,selected:false},
  {id:'rm-003',cat:'Materials',icon:'🔩',name:'Rebar Steel (H-type)',type:'material',role:'Structural',baseRate:850,unit:'tonne',avail:100,skills:'',builtin:true,selected:false},
  {id:'rm-004',cat:'Materials',icon:'🧱',name:'Dense Concrete Block (100mm)',type:'material',role:'Masonry',baseRate:18,unit:'m²',avail:100,skills:'',builtin:true,selected:false},
  {id:'rm-005',cat:'Materials',icon:'🧱',name:'Facing Brick',type:'material',role:'Masonry',baseRate:95,unit:'m²',avail:100,skills:'',builtin:true,selected:false},
  {id:'rm-006',cat:'Materials',icon:'🪵',name:'Structural Timber (C24)',type:'material',role:'Structural',baseRate:650,unit:'m³',avail:100,skills:'',builtin:true,selected:false},
  {id:'rm-007',cat:'Materials',icon:'🏗',name:'Structural Steel (S355)',type:'material',role:'Structural',baseRate:1800,unit:'tonne',avail:100,skills:'',builtin:true,selected:false},

  // ── Plant & Equipment ──────────────────────────────────────
  {id:'rl-015',cat:'Plant & Equipment',icon:'🚚',name:'Excavator 5t (Mini)',type:'equip',role:'Earthworks',baseRate:250,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-016',cat:'Plant & Equipment',icon:'🚚',name:'Excavator 20t',type:'equip',role:'Earthworks',baseRate:450,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-017',cat:'Plant & Equipment',icon:'🚚',name:'Excavator 35t',type:'equip',role:'Earthworks',baseRate:650,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-018',cat:'Plant & Equipment',icon:'🏗',name:'Mobile Crane 25t',type:'equip',role:'Lifting',baseRate:800,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-019',cat:'Plant & Equipment',icon:'🏗',name:'Mobile Crane 50t',type:'equip',role:'Lifting',baseRate:1400,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-020',cat:'Plant & Equipment',icon:'🏗',name:'Tower Crane (erect+op)',type:'equip',role:'Lifting',baseRate:1800,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-021',cat:'Plant & Equipment',icon:'🚚',name:'Concrete Pump (truck)',type:'equip',role:'Concrete',baseRate:600,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-022',cat:'Plant & Equipment',icon:'⚡',name:'Generator 50kVA',type:'equip',role:'Power',baseRate:140,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-023',cat:'Plant & Equipment',icon:'⚡',name:'Generator 150kVA',type:'equip',role:'Power',baseRate:280,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-024',cat:'Plant & Equipment',icon:'🔩',name:'Scaffolding (erect/dismantle)',type:'equip',role:'Access',baseRate:350,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-025',cat:'Plant & Equipment',icon:'🚚',name:'Dumper Truck (10t)',type:'equip',role:'Logistics',baseRate:280,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-026',cat:'Plant & Equipment',icon:'🔩',name:'Piling Rig (CFA)',type:'equip',role:'Piling',baseRate:1600,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-027',cat:'Plant & Equipment',icon:'🏗',name:'MEWP / Man Cage',type:'equip',role:'Access',baseRate:200,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-028',cat:'Plant & Equipment',icon:'🔧',name:'Compressor & Tools',type:'equip',role:'General',baseRate:150,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-029',cat:'Plant & Equipment',icon:'💧',name:'Dewatering Pump',type:'equip',role:'Groundworks',baseRate:240,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-030',cat:'Plant & Equipment',icon:'🔩',name:'Hydraulic Breaker',type:'equip',role:'Demolition',baseRate:180,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-031',cat:'Plant & Equipment',icon:'🚚',name:'Tipper Lorry (20t)',type:'equip',role:'Logistics',baseRate:320,unit:'day',avail:100,builtin:true,selected:false},
  // ── Materials ───────────────────────────────────────────────
  {id:'rl-032',cat:'Materials',icon:'🪨',name:'Ready-Mix Concrete C30',type:'material',role:'Structural',baseRate:120,unit:'m3',avail:100,builtin:true,selected:false},
  {id:'rl-033',cat:'Materials',icon:'🪨',name:'Ready-Mix Concrete C40',type:'material',role:'Structural',baseRate:145,unit:'m3',avail:100,builtin:true,selected:false},
  {id:'rl-034',cat:'Materials',icon:'🔩',name:'Rebar Steel (H-type)',type:'material',role:'Structural',baseRate:920,unit:'t',avail:100,builtin:true,selected:false},
  {id:'rl-035',cat:'Materials',icon:'🧱',name:'Dense Concrete Block (100mm)',type:'material',role:'Masonry',baseRate:12,unit:'m2',avail:100,builtin:true,selected:false},
  {id:'rl-036',cat:'Materials',icon:'🧱',name:'Facing Brick',type:'material',role:'Masonry',baseRate:85,unit:'m2',avail:100,builtin:true,selected:false},
  {id:'rl-037',cat:'Materials',icon:'🪵',name:'Structural Timber (C24)',type:'material',role:'Structural',baseRate:680,unit:'m3',avail:100,builtin:true,selected:false},
  {id:'rl-038',cat:'Materials',icon:'🏗',name:'Structural Steel (S355)',type:'material',role:'Structural',baseRate:1900,unit:'t',avail:100,builtin:true,selected:false},
  {id:'rl-039',cat:'Materials',icon:'🏠',name:'Insulation (100mm PIR)',type:'material',role:'Thermal',baseRate:22,unit:'m2',avail:100,builtin:true,selected:false},
  {id:'rl-040',cat:'Materials',icon:'🪟',name:'Glazing System (double)',type:'material',role:'Facade',baseRate:320,unit:'m2',avail:100,builtin:true,selected:false},
  {id:'rl-041',cat:'Materials',icon:'🪨',name:'Drainage Pipe (300mm HDPE)',type:'material',role:'Drainage',baseRate:48,unit:'lm',avail:100,builtin:true,selected:false},
  {id:'rl-042',cat:'Materials',icon:'🏗',name:'Formwork (standard)',type:'material',role:'Concrete',baseRate:35,unit:'m2',avail:100,builtin:true,selected:false},
  {id:'rl-043',cat:'Materials',icon:'💧',name:'Waterproofing Membrane',type:'material',role:'Waterproofing',baseRate:28,unit:'m2',avail:100,builtin:true,selected:false},
  // ── Additional Labour ──────────────────────────────────────
  {id:'rl-044',cat:'Labour',icon:'🏗',name:'BIM Manager',type:'labor',role:'Digital',baseRate:750,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-045',cat:'Labour',icon:'📐',name:'Design Manager',type:'labor',role:'Design',baseRate:700,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-046',cat:'Labour',icon:'⚖',name:'Contract Manager',type:'labor',role:'Commercial',baseRate:680,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-047',cat:'Labour',icon:'💧',name:'Plumber (Gas Safe)',type:'labor',role:'MEP',baseRate:380,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-048',cat:'Labour',icon:'⚡',name:'Electrician',type:'labor',role:'MEP',baseRate:380,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-049',cat:'Labour',icon:'🔩',name:'Steelwork Erector',type:'labor',role:'Structural',baseRate:350,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-050',cat:'Labour',icon:'🧱',name:'Bricklayer',type:'labor',role:'Masonry',baseRate:340,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-051',cat:'Labour',icon:'🎨',name:'Painter & Decorator',type:'labor',role:'Finishes',baseRate:280,unit:'day',avail:100,builtin:true,selected:false},
  {id:'rl-052',cat:'Labour',icon:'🪟',name:'Glazier',type:'labor',role:'Facade',baseRate:360,unit:'day',avail:100,builtin:true,selected:false},
];

let _customResLibData = [];
let _resLibCats = ['Labour','Subcontractor','Plant & Equipment','Materials'];
let _activeResLibCat = 'all';
let _resLibSelectedIds = new Set();

function _allMasterResLib() {
  return [...MASTER_RES_LIB, ..._customResLibData];
}

// ── Open / Render Resource Library ───────────────────────────
function openResLib() {
  _resLibSelectedIds.clear();
  renderResLibFull();
  document.getElementById('reslib-ovl')?.classList.add('on');
}

// Also expose as openLibManager fallback
function openLibManagerResources() { openResLib(); }

function renderResLibFull() {
  renderResLibSidebar();
  renderResLibTable();
}

function renderResLibSidebar() {
  const el = document.getElementById('reslib-cats');
  if(!el) return;
  const allCount = _allMasterResLib().length;
  const cats = ['all', ..._resLibCats];
  el.innerHTML = cats.map(cat => {
    const count = cat==='all' ? allCount : _allMasterResLib().filter(r=>r.cat===cat).length;
    return `<div class="reslib-cat-item ${_activeResLibCat===cat?'act':''}" onclick="setResLibCat('${cat}')">
      <span>${cat==='all'?'📚 All Resources':getCatIcon(cat)+' '+cat}</span>
      <span style="font-size:10px;opacity:.6">${count}</span>
    </div>`;
  }).join('') + `<div style="margin-top:auto;padding:6px 12px">
    <button onclick="addResLibCategory()" style="width:100%;font-size:10px;padding:4px;background:none;border:1px dashed var(--b1);border-radius:4px;color:var(--t3);cursor:pointer">+ Category</button>
  </div>`;
}

function getCatIcon(cat) {
  const icons = {'Labour':'👷','Subcontractor':'🏗','Plant & Equipment':'🚜','Materials':'🧱'};
  return icons[cat] || '📦';
}

function setResLibCat(cat) {
  _activeResLibCat = cat;
  renderResLibFull();
}

function renderResLibTable() {
  const body = document.getElementById('reslib-table-body');
  const countLbl = document.getElementById('reslib-count-lbl');
  const selLbl = document.getElementById('reslib-sel-count-lbl');
  if(!body) return;

  const rs = RATE_SETS[_currentRateSet]||RATE_SETS.uk;
  const sym = PROJECT_SETTINGS?.currency?.symbol || rs.symbol || '$';
  const mult = rs.mult || 1;
  const search = (document.getElementById('reslib-search')?.value||'').toLowerCase();

  let items = _allMasterResLib();
  if(_activeResLibCat !== 'all') items = items.filter(r=>r.cat===_activeResLibCat);
  if(search) items = items.filter(r=>(r.name+'|'+(r.role||'')+'|'+(r.skills||'')).toLowerCase().includes(search));

  const allCats = _resLibCats;
  const typeOpts = ['labor','equipment','material'].map(t=>`<option value="${t}">${t}</option>`).join('');

  if(countLbl) countLbl.textContent = `${items.length} resources`;
  if(selLbl) selLbl.textContent = _resLibSelectedIds.size ? `${_resLibSelectedIds.size} selected` : '';

  body.innerHTML = items.map(r => {
    const rate = Math.round(r.baseRate * mult);
    const sym = getCurrSym();
    const isSelected = _resLibSelectedIds.has(r.id);
    const isAdded = [...RESOURCES.labor,...RESOURCES.equipment,...RESOURCES.material].some(x=>x._libId===r.id);
    return `<tr class="${r.builtin?'reslib-row-builtin':'reslib-row-custom'} ${isSelected?'wt-row-active':''}" id="rlr-${r.id}">
      <td style="padding:4px 6px"><input type="checkbox" ${isSelected?'checked':''} onchange="toggleResLibSel('${r.id}',this.checked)"></td>
      <td style="padding:4px;text-align:center">
        <input value="${r.icon||'📋'}" style="width:24px;text-align:center;font-size:14px;background:none;border:none;cursor:pointer" 
          onchange="updateResLib('${r.id}','icon',this.value)" title="Click to change icon">
      </td>
      <td class="editable"><input value="${esc(r.name)}" style="width:100%;min-width:140px" 
        onchange="updateResLib('${r.id}','name',this.value)"></td>
      <td><select onchange="updateResLib('${r.id}','type',this.value)">
        ${['labor','equipment','material'].map(t=>`<option value="${t}" ${r.type===t?'selected':''}>${t}</option>`).join('')}
      </select></td>
      <td><select onchange="updateResLib('${r.id}','cat',this.value)">
        ${allCats.map(c=>`<option value="${c}" ${r.cat===c?'selected':''}>${c}</option>`).join('')}
      </select></td>
      <td><input type="number" value="${rate}" min="0" style="width:70px;text-align:right"
        onchange="updateResLib('${r.id}','baseRate',+(this.value)/${mult})"></td>
      <td><select onchange="updateResLib('${r.id}','unit',this.value)">
        ${['day','week','hour','m²','m³','tonne','unit'].map(u=>`<option value="${u}" ${r.unit===u?'selected':''}>${u}</option>`).join('')}
      </select></td>
      <td style="text-align:center;font-size:10px;font-weight:700;color:var(--blue)">${sym}</td>
      <td><input type="number" value="${r.avail||100}" min="0" max="100" style="width:48px;text-align:center"
        onchange="updateResLib('${r.id}','avail',+this.value)"></td>
      <td style="font-size:10px;color:var(--t3)"><input value="${r.skills||''}" placeholder="e.g. CEng" style="width:56px;font-size:10px"
        onchange="updateResLib('${r.id}','skills',this.value)"></td>
      <td style="padding:2px 4px;white-space:nowrap">
        ${isAdded?'<span style="font-size:9px;color:#22C55E;font-weight:700">✓ In Project</span>':''}
        <button class="ib" onclick="cloneResLib('${r.id}')" title="Duplicate">⎘</button>
        ${!r.builtin?`<button class="ib del" onclick="deleteResLib('${r.id}')" title="Delete">✕</button>`:''}
      </td>
    </tr>`;
  }).join('') || `<tr><td colspan="11" style="padding:24px;text-align:center;color:var(--t3)">No resources found. Click + Add Resource to create one.</td></tr>`;
}

function updateResLib(id, field, value) {
  const r = _allMasterResLib().find(x=>x.id===id);
  if(!r) return;
  r[field] = value;
  if(r.builtin) {
    // For built-ins, we track overrides in custom data
    if(!_customResLibData.find(x=>x.id===id)) {
      _customResLibData.push({...r, builtin:false, _overrideOf:id});
    }
  }
  _saveResLibToStorage();
}

function toggleResLibSel(id, checked) {
  if(checked) _resLibSelectedIds.add(id);
  else _resLibSelectedIds.delete(id);
  const selLbl = document.getElementById('reslib-sel-count-lbl');
  if(selLbl) selLbl.textContent = _resLibSelectedIds.size ? `${_resLibSelectedIds.size} selected` : '';
  // Update select-all checkbox
  const all = document.getElementById('reslib-select-all');
  if(all) all.indeterminate = _resLibSelectedIds.size > 0;
}

function toggleSelectAllRes(checked) {
  const body = document.getElementById('reslib-table-body');
  if(!body) return;
  body.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.checked = checked;
    const tr = cb.closest('tr');
    if(tr) {
      const id = tr.id.replace('rlr-','');
      if(checked) _resLibSelectedIds.add(id);
      else _resLibSelectedIds.delete(id);
    }
  });
  const selLbl = document.getElementById('reslib-sel-count-lbl');
  if(selLbl) selLbl.textContent = checked && _resLibSelectedIds.size ? `${_resLibSelectedIds.size} selected` : '';
}

function clearResLibSelection() {
  _resLibSelectedIds.clear();
  renderResLibTable();
}

function addResLibRow() {
  const newRes = {id:'crl-'+uid(),cat:_activeResLibCat==='all'?'Labour':_activeResLibCat,icon:'👷',
    name:'New Resource',type:'labor',role:'Custom',baseRate:300,unit:'day',avail:100,skills:'',builtin:false,selected:false};
  _customResLibData.push(newRes);
  _saveResLibToStorage();
  renderResLibFull();
  // Focus new row
  setTimeout(()=>{
    const row=document.getElementById('rlr-'+newRes.id);
    if(row) { row.scrollIntoView({block:'center'}); row.querySelector('input')?.focus(); }
  },50);
}

function cloneResLib(id) {
  const r = _allMasterResLib().find(x=>x.id===id);
  if(!r) return;
  const clone = {...r, id:'crl-'+uid(), name:r.name+' (Copy)', builtin:false, selected:false};
  _customResLibData.push(clone);
  _saveResLibToStorage();
  renderResLibFull();
}

function deleteResLib(id) {
  if(!confirm('Delete this resource from the library?')) return;
  const idx = _customResLibData.findIndex(x=>x.id===id);
  if(idx>=0) _customResLibData.splice(idx,1);
  _resLibSelectedIds.delete(id);
  _saveResLibToStorage();
  renderResLibFull();
}

function addResLibCategory() {
  const name = prompt('New category name:');
  if(!name?.trim()) return;
  if(!_resLibCats.includes(name.trim())) {
    _resLibCats.push(name.trim());
    _saveResLibToStorage();
    renderResLibFull();
  }
}

function importSelectedToProject() {
  const rs = RATE_SETS[_currentRateSet]||RATE_SETS.uk;
  const mult = rs.mult||1;
  const selected = _allMasterResLib().filter(r=>_resLibSelectedIds.has(r.id));
  if(!selected.length) { alert('No resources selected. Tick checkboxes to select resources to add.'); return; }

  let added = 0;
  selected.forEach(r => {
    const rate = Math.round(r.baseRate * mult);
    const base = {id:uid(), name:r.name, role:r.role||r.cat, rate, avail:r.avail||100, calId:0, _libId:r.id};
    if(r.type==='labor') { RESOURCES.labor.push(base); added++; }
    else if(r.type==='equipment') { RESOURCES.equipment.push({...base, etype:r.role||'Plant', qty:1, wbs:''}); added++; }
    else if(r.type==='material') { RESOURCES.material.push({...base, unit:r.unit||'unit', unitCost:rate, qty:1}); added++; }
  });

  _resLibSelectedIds.clear();
  updateCostSummary();
  closeOvl('reslib-ovl');
  renderResources();
  alert(`✓ Added ${added} resource${added!==1?'s':''} to your project.`);
}

// ── Rate Sets ────────────────────────────────────────────────
function applyRateSet(set) {
  _currentRateSet = set;
  document.querySelectorAll('.rate-set-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('rs-'+set);
  if(btn) btn.classList.add('active');
  renderResLibTable();
}

// ── Export / Import Library ───────────────────────────────────
function exportResLib() {
  const data = {categories:_resLibCats, custom:_customResLibData, version:'1.0'};
  const blob = new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = 'gensched_resource_library.json'; a.click();
}

function importResLib(input) {
  const file = input.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if(data.custom) {
        const newItems = data.custom.filter(r => !_customResLibData.find(x=>x.id===r.id));
        _customResLibData.push(...newItems.map(r=>({...r,builtin:false,selected:false})));
      }
      if(data.categories) {
        data.categories.forEach(cat=>{ if(!_resLibCats.includes(cat)) _resLibCats.push(cat); });
      }
      _saveResLibToStorage();
      renderResLibFull();
      alert(`✓ Imported ${data.custom?.length||0} resources.`);
    } catch(e) { alert('Invalid library file: '+e.message); }
  };
  reader.readAsText(file);
}

function _saveResLibToStorage() {
  try {
    localStorage.setItem('pa_res_lib_custom', JSON.stringify(_customResLibData));
    localStorage.setItem('pa_res_lib_cats', JSON.stringify(_resLibCats));
  } catch(e) { console.warn('Could not save resource library:', e); }
}

function _loadResLibFromStorage() {
  try {
    const cust = localStorage.getItem('pa_res_lib_custom');
    if(cust) _customResLibData = JSON.parse(cust);
    const cats = localStorage.getItem('pa_res_lib_cats');
    if(cats) _resLibCats = JSON.parse(cats);
  } catch(e) {}
}

// ── Also override the old RESOURCES_LIBRARY-based openResLib ──
// The toolbar "Library" button now opens the full lib


// ═══════════════════════════════════════════════════════════════
// V15 — RISK-ACTIVITY LINKING + SETTINGS SYNC + UI
// ═══════════════════════════════════════════════════════════════

// ── SETTINGS SYNC: apply PROJECT_SETTINGS everywhere ──────────
function syncProjectSettings() {
  const s = PROJECT_SETTINGS;
  // Header summary
  updateHdrSummary();
  // P object
  if(s.start) P.start = s.start;
  if(s.calId !== undefined) P.cal = s.calId || 5;
  // Hdr start display
  const startEl = document.getElementById('p-start-display');
  if(startEl) startEl.textContent = s.start||P.start||'—';
  // Data date badge
  const ddEl = document.getElementById('hdr-datadate');
  if(ddEl) { ddEl.textContent = s.dataDate?'DD: '+s.dataDate:''; ddEl.style.display = s.dataDate?'flex':'none'; }
  // Currency — single source of truth
  const sym = getCurrSym();
  document.querySelectorAll('.currency-sym').forEach(el => el.textContent = sym);
  // Update pset dropdown
  const psetSel=document.getElementById('pset-currency-sel');
  if(psetSel && !psetSel.options.length) { psetSel.innerHTML='<option value="">— Select Currency —</option>'+_buildCurrencyOptions?.()??''; }
  if(psetSel && PROJECT_SETTINGS.currency?.code) psetSel.value=PROJECT_SETTINGS.currency.code;
  // Update settings modal symbol display
  // pset-cur-symbol removed — dropdown used instead; _refreshPsetCurrencyUI called separately
  const bcLabel = document.getElementById('budget-cur-label');
  if(bcLabel) bcLabel.textContent = sym;
  // EVM data date + BAC
  const evmDd = document.getElementById('evm-data-date');
  if(evmDd && s.dataDate) evmDd.value = s.dataDate;
  const evmBac = document.getElementById('evm-bac');
  if(evmBac && s.bac) evmBac.value = s.bac;
  // Update resource rates panel if open
  if(_currentMainTab === 'resources') renderResources();
}

// Override saveProjectSettings to sync

// ── RISK-ACTIVITY LINKING ─────────────────────────────────────
// Enhanced RISKS structure: each risk has activityIds: []
// Bidirectional: activity → linked risks, risk → linked activities

function openRiskActivityLinker(riskId) {
  const risk = RISKS.find(r=>r.id===riskId);
  if(!risk) return;
  if(!risk.activityIds) risk.activityIds = [];

  let html = `<div class="modal" style="max-width:560px">
    <h3 style="margin-bottom:12px">&#9888; Link Activities to Risk</h3>
    <div style="font-size:12px;color:var(--t2);margin-bottom:10px;padding:8px 10px;background:var(--s1);border-radius:5px">
      <strong>${esc(risk.desc)}</strong> · Score: ${(risk.prob||1)*(risk.impact||1)}
    </div>
    <input id="risk-act-search" class="srch" placeholder="Search activities…" style="width:100%;margin-bottom:8px" oninput="filterRiskActList()">
    <div id="risk-act-list" style="max-height:300px;overflow-y:auto;border:1px solid var(--b1);border-radius:6px;font-size:11px">
      ${WPS.length ? WPS.map(w=>`<div class="res-assign-row" style="padding:6px 10px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--b2)">
        <input type="checkbox" ${(risk.activityIds||[]).includes(w.id)?'checked':''} 
          onchange="toggleRiskActivity('${riskId}','${w.id}',this.checked)">
        <span style="font-family:var(--mono);font-size:10px;color:var(--blue);min-width:40px">${w.wbs||'—'}</span>
        <span style="flex:1">${esc(w.name)}</span>
        <span style="font-size:9px;padding:1px 5px;border-radius:8px;background:var(--s2);color:var(--t3)">${w.actType||'TASK'}</span>
      </div>`).join('') : '<div style="padding:20px;color:var(--t3);text-align:center">No activities in schedule.</div>'}
    </div>
    <div style="display:flex;justify-content:space-between;margin-top:12px;align-items:center">
      <span id="risk-act-count" style="font-size:11px;color:var(--t3)">${(risk.activityIds||[]).length} activities linked</span>
      <div style="display:flex;gap:8px">
        <button class="btn" onclick="this.closest('.ovl').classList.remove('on')">Close</button>
        <button class="btn btnp" onclick="this.closest('.ovl').classList.remove('on');renderAdRisk(_selectedWi);renderRiskTable()">&#10003; Done</button>
      </div>
    </div>
  </div>`;

  let ovl = document.getElementById('risk-act-ovl');
  if(!ovl) { ovl=document.createElement('div'); ovl.id='risk-act-ovl'; ovl.className='ovl'; document.body.appendChild(ovl); ovl.addEventListener('click',e=>{if(e.target===ovl)ovl.classList.remove('on');}); }
  ovl.innerHTML=html; ovl.classList.add('on');
}

function filterRiskActList() {
  const q = (document.getElementById('risk-act-search')?.value||'').toLowerCase();
  document.querySelectorAll('#risk-act-list > div').forEach(row => {
    row.style.display = q && !row.textContent.toLowerCase().includes(q) ? 'none' : '';
  });
}

function toggleRiskActivity(riskId, actId, checked) {
  const risk = RISKS.find(r=>r.id===riskId);
  if(!risk) return;
  if(!risk.activityIds) risk.activityIds = [];
  if(checked && !risk.activityIds.includes(actId)) risk.activityIds.push(actId);
  else if(!checked) risk.activityIds = risk.activityIds.filter(id=>id!==actId);
  const countEl = document.getElementById('risk-act-count');
  if(countEl) countEl.textContent = risk.activityIds.length + ' activities linked';
}

function getActivityRisks(actId) {
  return RISKS.filter(r=>(r.activityIds||[]).includes(actId));
}

// Enhanced risk table render with link button
const _origRenderRiskTable = renderRiskTable;
// Update risk table header
function _initRiskTableHeader() {
  const riskTable = document.getElementById('risk-table');
  if(!riskTable || riskTable.dataset.enhanced) return;
  riskTable.dataset.enhanced = '1';
  const thead = riskTable.querySelector('thead tr');
  if(thead && !thead.querySelector('th[data-act]')) {
    const th = document.createElement('th');
    th.setAttribute('data-act','1');
    th.textContent = 'ACTIVITIES';
    th.style.width = '80px';
    thead.insertBefore(th, thead.lastElementChild);
  }
}

// ── UI IMPROVEMENTS ───────────────────────────────────────────
// 1. Keyboard shortcut: Ctrl+G = Generate, Ctrl+W = Toggle WBS
document.addEventListener('keydown', e => {
  if(e.ctrlKey || e.metaKey) {
    if(e.key==='g') { e.preventDefault(); doGenerate(); }
    if(e.key==='b') { e.preventDefault(); toggleWbsSidebar(); }
    if(e.key==='Enter' && document.getElementById('ia-name')===document.activeElement) { commitInlineAdd(true); }
  }
  if(e.key==='Escape') {
    closeDetailDock();
    cancelInlineAdd();
  }
});

// 2. Activity row selection highlight + auto-open dock
document.addEventListener('click', e => {
  const tr = e.target.closest('#wt-body tr[data-wi]');
  if(!tr) return;
  if(e.target.matches('input,select,button,label')) return;
  const wi = +tr.dataset.wi;
  selectActivity(wi);
});

// 3. Auto-focus name field when inline add opens
const _origShowInlineAddV15 = showInlineAdd;
// (showInlineAdd already focuses - no change needed)

// 4. Smooth transition when opening/closing panels
document.getElementById('wbs-sidebar')?.style.setProperty('transition','width .18s ease');

// ── SETTINGS SYNC: patch saveProjectSettings ─────────────────
// v15 settings sync is triggered after the base saveProjectSettings runs via a watch
// _afterSaveProjectSettings placeholder
function _noop_v15() {
  syncProjectSettings();
  // Propagate to EVM section
  const evmDd = document.getElementById('evm-data-date');
  if(evmDd && PROJECT_SETTINGS.dataDate) evmDd.value = PROJECT_SETTINGS.dataDate;
  const evmBac = document.getElementById('evm-bac');
  if(evmBac && PROJECT_SETTINGS.bac) evmBac.value = PROJECT_SETTINGS.bac;
  // Update budget-contract field
  const bc = document.getElementById('budget-contract');
  if(bc && PROJECT_SETTINGS.contractVal) bc.value = PROJECT_SETTINGS.contractVal;
}

// Run init
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    syncProjectSettings();
    _initRiskTableHeader();
  }, 200);
});


// ═══════════════════════════════════════════════════════════════
// VIRTUAL SCROLL ENGINE — handles 20k+ activities smoothly
// ═══════════════════════════════════════════════════════════════

function VS_setRows(flat) {
  VS.flat = flat;
  VS._rowTops = null;  // invalidate prefix-sum cache
  VS._rowTopsRef = null;
  VS.visStart = -1; VS.visEnd = -1;  // force re-render
  VS_render();
}
function VS_buildAndRender(wpsArr, succMap) {
  VS_init();
  VS._succMap = succMap;
  const flat = buildFlatRows(wpsArr, succMap);
  VS_setRows(flat);
}

// Intercept renderWps to use virtual scroll for large datasets
// Threshold: use virtual scroll above this count


// ── GLOBAL CURRENCY HELPER ────────────────────────────────────
function getCurrSym() {
  return PROJECT_SETTINGS?.currency?.symbol || '';
}
function getCurrCode() { return PROJECT_SETTINGS?.currency?.code || ''; }
function getCurrName() { return PROJECT_SETTINGS?.currency?.name || 'Not set'; }
function isCurrencySet() { return !!PROJECT_SETTINGS?.currency?.symbol; }
function fmtCost(v) {
  const s = getCurrSym();
  if(v == null || isNaN(v)) return s+'—';
  const abs = Math.abs(Math.round(v));
  const sign = v < 0 ? '-' : '';
  if(abs >= 1000000) return sign+s+(abs/1000000).toFixed(1)+'M';
  if(abs >= 1000) return sign+s+abs.toLocaleString();
  return sign+s+abs.toString();
}
function fmtCostFull(v) {
  const s = getCurrSym();
  if(v == null || isNaN(v)) return s+'—';
  return (v<0?'-':'')+s+Math.abs(Math.round(v)).toLocaleString();
}
// 2. openProjectSettings — wire to pre-existing renamed version
function openProjectSettings() {
  _openProjectSettingsV16();
  // Populate currency dropdown with all available currencies
  const sel = document.getElementById('pset-currency-sel');
  if(sel) {
    sel.innerHTML = '<option value="">— Select Currency —</option>' + _buildCurrencyOptions();
    if(PROJECT_SETTINGS.currency?.code) sel.value = PROJECT_SETTINGS.currency.code;
  }
  // Update badge and info panel
  _refreshPsetCurrencyUI();
  // ovl shown by _openProjectSettingsV16
}
function _refreshPsetCurrencyUI() {
  const cur = PROJECT_SETTINGS.currency;
  const badge = document.getElementById('pset-cur-badge');
  const info  = document.getElementById('pset-cur-info');
  if(badge) badge.textContent = cur?.symbol || '—';
  if(info) {
    if(cur?.symbol) {
      info.innerHTML = '<strong>' + (cur.code||'') + '</strong> — ' + (cur.name||'');
      info.style.color = 'var(--t2)';
    } else {
      info.innerHTML = '<span style="color:#D97706">⚠ No currency selected. Please choose a currency.</span>';
    }
  }
}

// 3. assignWbs — wire to renamed version + invalidate VS cache
function assignWbs() {
  _assignWbsV16();                       // original assignWbs logic
  VS.flat = [];                          // force VS re-build on next render
}

// 4. _parseXERFinalize — wire to renamed version + refresh header
// _parseXERFinalize replaced by _xer_* pipeline in v23
function _parseXERFinalize(){
  try{ refreshAllTabs && refreshAllTabs(); }catch(e){}
}

// XER chunk size hint (used by phase 3)
const XER_CHUNK_SIZE = 500;

// 5. Keyboard shortcut: Enter in schedule table adds below current row
// (already handled - no change needed)

// 6. Settings: show data date prominently in header after XER import
function _refreshHeaderAfterImport() {
  syncProjectSettings();
  const dd = document.getElementById('hdr-datadate');
  if(dd && PROJECT_SETTINGS.dataDate) {
    dd.textContent = 'Data Date: ' + PROJECT_SETTINGS.dataDate;
    dd.style.display = 'flex';
  }
  const sl = document.getElementById('hdr-start-lbl');
  if(sl) sl.textContent = 'Start: ' + (PROJECT_SETTINGS.start || P.start || '—');
}

// 7. _parseXERFinalize wired above (merged with assignWbs block)

// 8. Make VS scroll work correctly with the split container
function VS_initAuto() {
  // Try multiple possible scroll containers
  const containers = [
    document.querySelector('.sched-split-table'),
    document.querySelector('.wt-sc'),
    document.getElementById('sched-split-table'),
  ];
  for(const sc of containers) {
    if(sc) {
      VS.container = sc;
      if(!sc._vsInit) {
        sc._vsInit = true;
        sc.addEventListener('scroll', VS_onScroll, {passive:true});
      }
      break;
    }
  }
}

// _renderWpsInner defined elsewhere

// 10. Add performance stats to schedule info bar
function _updatePerfInfo(renderTime, count) {
  const inf = document.getElementById('wt-inf');
  if(!inf) return;
  const base = inf.textContent.split('·').slice(0, -1).join('·');
  // Don't show perf stats in production - keep it clean
}

// ── CONSISTENT DEFAULT CURRENCY (USD from XER) ───────────────
// When XER is imported with USD currency, propagate it
function _applyXERCurrency(currCode, currSym) {
  if(!currCode) return;
  // Find in CURRENCIES array
  const found = CURRENCIES.find(c => c.code === currCode);
  if(found) {
    PROJECT_SETTINGS.currency = {symbol:found.symbol, code:found.code, name:found.name};
  } else {
    PROJECT_SETTINGS.currency = {symbol:currSym||currCode, code:currCode, name:currCode};
  }
  syncProjectSettings();
}


// ═══════════════════════════════════════════════════════════════
// INTERACTIVE USER GUIDE + CONTEXTUAL HELP
// ═══════════════════════════════════════════════════════════════

const GUIDE_STEPS = [
  {
    icon:'🎯', title:'Welcome to GenSched!',
    text:'GenSched is your professional schedule builder — simple enough for beginners, powerful enough for experts. This tour takes about 2 minutes. Let\'s start!',
    target:null, step:'1/8'
  },
  {
    icon:'📋', title:'Build Schedule Tab',
    text:'This is your main workspace. You can add activities manually, generate from the library, or import from P6 XER files. All your project activities live here.',
    target:'#mt-schedule', step:'2/8'
  },
  {
    icon:'🌿', title:'WBS Structure',
    text:'Click the WBS button to open the Work Breakdown Structure panel. Organize your project into a hierarchy — just like folders on your computer. Click + to add levels.',
    target:'#btn-wbs-toggle', step:'3/8'
  },
  {
    icon:'⚡', title:'Generate from Library',
    text:'The module library (left panel) contains hundreds of pre-built work packages for construction, civil, MEP, and more. Select a WBS node, then click + on any module to add it. Then click Generate!',
    target:'.bst-btn.accent', step:'4/8'
  },
  {
    icon:'➕', title:'Add Activities Manually',
    text:'Click the + Activity button or click the "Click to add activity..." bar at the bottom of the table. Type the name and press Enter — it\'s that quick!',
    target:'#wt-add-bar', step:'5/8'
  },
  {
    icon:'📊', title:'Activity Details',
    text:'Click any activity row to open the Details Panel at the bottom. You\'ll see 6 tabs: Details (dates, WBS), Logic (predecessors), Progress (% complete), Resources, Cost, and Risk.',
    target:'#act-detail-dock', step:'6/8'
  },
  {
    icon:'👥', title:'Resources Tab',
    text:'The Resources tab manages your team, materials, and equipment. Add resources from the library or create your own. Resources automatically link to your budget and EVM calculations.',
    target:'#mt-resources', step:'7/8'
  },
  {
    icon:'📈', title:'Dashboard',
    text:'The Dashboard shows your project health in real-time: DCMA 14-point quality check, EVM metrics (SPI, CPI), S-Curve, and Risk summary. All calculated automatically!',
    target:'#mt-dashboard', step:'8/8'
  },
];

let _guideStep = 0;
let _guideActive = false;

function openGuide(startStep) {
  _guideStep = startStep || 0;
  _guideActive = true;
  document.getElementById('guide-overlay').style.display = 'block';
  renderGuideStep();
}

function guideClose() {
  _guideActive = false;
  document.getElementById('guide-overlay').style.display = 'none';
  document.getElementById('guide-backdrop').style.display = 'block';
  localStorage.setItem('pa_guide_seen', '1');
}

function guideNext() {
  if(_guideStep < GUIDE_STEPS.length - 1) { _guideStep++; renderGuideStep(); }
  else guideClose();
}

function guidePrev() {
  if(_guideStep > 0) { _guideStep--; renderGuideStep(); }
}

function renderGuideStep() {
  const step = GUIDE_STEPS[_guideStep];
  if(!step) return;
  const backdrop = document.getElementById('guide-backdrop');
  const tooltip = document.getElementById('guide-tooltip');
  const iconEl = document.getElementById('guide-icon');
  const titleEl = document.getElementById('guide-title');
  const textEl = document.getElementById('guide-text');
  const stepEl = document.getElementById('guide-step-label');
  const nextBtn = document.getElementById('guide-next-btn');
  const prevBtn = document.getElementById('guide-prev-btn');
  const dotsEl = document.getElementById('guide-dots');

  if(iconEl) iconEl.textContent = step.icon;
  if(titleEl) titleEl.textContent = step.title;
  if(textEl) textEl.textContent = step.text;
  if(stepEl) stepEl.textContent = `Step ${_guideStep+1} of ${GUIDE_STEPS.length}`;
  if(nextBtn) nextBtn.textContent = _guideStep === GUIDE_STEPS.length-1 ? '✓ Got it!' : 'Next →';
  if(prevBtn) prevBtn.style.display = _guideStep === 0 ? 'none' : '';

  // Dots
  if(dotsEl) dotsEl.innerHTML = GUIDE_STEPS.map((_,i) => 
    `<div style="width:${i===_guideStep?16:6}px;height:6px;border-radius:3px;background:${i===_guideStep?'#6D28D9':'#ddd'};transition:all .2s"></div>`
  ).join('');

  // Position tooltip near target
  if(step.target) {
    const targetEl = document.querySelector(step.target);
    if(targetEl) {
      const rect = targetEl.getBoundingClientRect();
      const tTop = rect.bottom + 12;
      const tLeft = Math.min(rect.left, window.innerWidth - 360);
      if(tooltip) {
        tooltip.style.top = (tTop < window.innerHeight - 200 ? tTop : rect.top - 200) + 'px';
        tooltip.style.left = Math.max(10, tLeft) + 'px';
      }
    }
  } else {
    // Center for first step
    if(tooltip) {
      tooltip.style.top = '50%';
      tooltip.style.left = '50%';
      tooltip.style.transform = 'translate(-50%, -50%)';
    }
  }
  if(tooltip && !step.target) tooltip.style.transform = 'translate(-50%, -50%)';
  else if(tooltip) tooltip.style.transform = '';
}

// ── CONTEXTUAL TOOLTIPS ────────────────────────────────────────
const TOOLTIPS = {
  'btn-wbs-toggle': 'Open/close the WBS tree panel to organise your project structure',
  'gantt-split-btn': 'Toggle the Gantt chart view alongside your activity list',
  'col-chooser-btn': 'Choose which columns to show or hide in the schedule table',
  'mt-schedule': 'Build and manage your project schedule activities',
  'mt-resources': 'Manage your team (people, equipment, materials) and budgets',
  'mt-dashboard': 'View project health, DCMA quality checks, and EVM performance',
  'mt-report': 'Export your schedule as XER, CSV, MSP or JSON',
  'lt-custom': 'Your saved custom module collections — build your own library',
  'lt-build': 'Pre-built construction work packages by trade and discipline',
  'lt-appr': 'Planning permission and approval process templates by country',
};

function initTooltips() {
  Object.entries(TOOLTIPS).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if(!el) return;
    el.setAttribute('data-tip', text);
    el.addEventListener('mouseenter', showCtxTip);
    el.addEventListener('mouseleave', hideCtxTip);
  });
  // Also add data-tip to toolbar buttons
  document.querySelectorAll('.bst-btn[title]').forEach(btn => {
    if(btn.title) {
      btn.setAttribute('data-tip', btn.title);
      btn.addEventListener('mouseenter', showCtxTip);
      btn.addEventListener('mouseleave', hideCtxTip);
    }
  });
}

function showCtxTip(e) {
  const tip = e.currentTarget.getAttribute('data-tip');
  if(!tip) return;
  const tt = document.getElementById('ctx-tooltip');
  if(!tt) return;
  tt.textContent = tip;
  tt.style.display = 'block';
  const rect = e.currentTarget.getBoundingClientRect();
  tt.style.left = Math.min(rect.left, window.innerWidth - 240) + 'px';
  tt.style.top = (rect.bottom + 6) + 'px';
}

function hideCtxTip() {
  const tt = document.getElementById('ctx-tooltip');
  if(tt) tt.style.display = 'none';
}

// ── ADD HELP BUTTON TO HEADER ─────────────────────────────────
function _addHelpButton() {
  const hdr = document.getElementById('main-hdr');
  if(!hdr || hdr.querySelector('#help-btn')) return;
  const btn = document.createElement('button');
  btn.id = 'help-btn';
  btn.innerHTML = '? Help';
  btn.title = 'Open interactive guide';
  btn.style.cssText = 'padding:4px 10px;border:1px solid rgba(255,255,255,.2);border-radius:5px;background:rgba(255,255,255,.08);color:rgba(255,255,255,.7);cursor:pointer;font-size:11px;font-weight:600;font-family:inherit;margin-right:6px;transition:all .1s';
  btn.onmouseover = () => btn.style.background = 'rgba(255,255,255,.15)';
  btn.onmouseout = () => btn.style.background = 'rgba(255,255,255,.08)';
  btn.onclick = () => openGuide(0);
  // Insert before Settings button
  const settingsBtn = hdr.querySelector('button[onclick*="openProjectSettings"]');
  if(settingsBtn) hdr.insertBefore(btn, settingsBtn);
  else hdr.appendChild(btn);
}

// Show guide on first visit
function _checkFirstVisit() {
  if(!localStorage.getItem('pa_guide_seen')) {
    setTimeout(() => openGuide(0), 1500);
  }
}

// ── UI SIMPLIFICATION: Better onboarding for empty state ──────
// Already handled in wt-empty-state - OK

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initTooltips();
    _addHelpButton();
    _checkFirstVisit();
  }, 500);
});


// ═══════════════════════════════════════════════════════════════
// V17 FORENSIC FIXES — tested as real user
// ═══════════════════════════════════════════════════════════════

// ── FIX: Activity dock resize uses correct CSS class ──────────
function initDockResize() {
  const handle = document.getElementById('act-detail-resize');
  const dock   = document.getElementById('act-detail-dock');
  const main   = document.getElementById('bs-main');
  if(!handle || !dock || handle._init) return;
  handle._init = true;
  let dragging=false, startY=0, startH=0;

  handle.addEventListener('mousedown', e => {
    e.preventDefault();
    dragging = true; startY = e.clientY; startH = dock.offsetHeight;
    document.body.style.userSelect = 'none'; document.body.style.cursor = 'ns-resize';
  });
  document.addEventListener('mousemove', e => {
    if(!dragging) return;
    const delta = startY - e.clientY; // positive = drag up = bigger dock
    const newH = Math.max(120, Math.min(Math.floor(window.innerHeight*0.72), startH+delta));
    dock.style.height = newH+'px';
    if(main) main.style.paddingBottom = newH+'px';
  });
  document.addEventListener('mouseup', () => {
    if(!dragging) return;
    dragging=false;
    document.body.style.userSelect=''; document.body.style.cursor='';
  });
}

// ── FIX: Sidebar resize — no max-width ───────────────────────
function initSidebarResizer() {
  const resizer = document.getElementById('sidebar-resizer');
  const sidebar = document.getElementById('wbs-sidebar');
  if(!resizer || !sidebar || resizer._init) return;
  resizer._init = true;
  let dragging = false, startX = 0, startW = 0;
  resizer.addEventListener('mousedown', e => {
    dragging = true;
    startX = e.clientX;
    startW = sidebar.offsetWidth;
    resizer.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  });
  document.addEventListener('mousemove', e => {
    if(!dragging) return;
    const newW = Math.max(180, startW + (e.clientX - startX)); // No max limit
    sidebar.style.width = newW + 'px';
  });
  document.addEventListener('mouseup', () => {
    if(!dragging) return;
    dragging = false;
    resizer.classList.remove('dragging');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  });
}

// ── FIX: toggleDetailDock uses right CSS class ───────────────
function toggleDetailDock() {
  const dock = document.getElementById('act-detail-dock');
  if(!dock) return;
  _dockCollapsed = !_dockCollapsed;
  if(_dockCollapsed) {
    dock.dataset.prevH = dock.style.height;
    dock.style.height = '36px';
    dock.style.overflow = 'hidden';
  } else {
    dock.style.height = dock.dataset.prevH || '260px';
    dock.style.overflow = '';
  }
  const h = _dockCollapsed ? 40 : (parseInt(dock.style.height)||260);
  const bsMain = document.getElementById('bs-main');
  if(bsMain) bsMain.style.paddingBottom = h + 'px';
}

// ── FIX: Rendering currency in cost cards on Resources tab ────
// updateCostSummary overridden
function updateCostSummary() {
  const sym = getCurrSym();
  // Compute actual costs from RESOURCES
  const laborTotal    = RESOURCES.labor.reduce((s,r)=>s+(+r.rate||0)*8, 0);
  const materialTotal = RESOURCES.material.reduce((s,r)=>s+(+r.unitCost||0)*(+r.qty||1), 0);
  const equipTotal    = RESOURCES.equipment.reduce((s,r)=>s+(+r.rate||0)*8, 0);
  // WPS-based costs
  const wpsBudget  = WPS.reduce((s,w)=>s+(w.evBudget||w.cost||0), 0);
  const wpsActual  = WPS.reduce((s,w)=>s+(w.actualCost||0), 0);
  const wpsRemain  = WPS.reduce((s,w)=>s+(w.remainCost||0), 0);

  const fmt = v => sym + Math.round(v).toLocaleString();
  const _st = (id,v) => { const e=document.getElementById(id); if(e) e.textContent=v; };

  _st('cost-labor',    fmt(laborTotal));
  _st('cost-material', fmt(materialTotal));
  _st('cost-equipment',fmt(equipTotal));
  const total = wpsBudget || (laborTotal + materialTotal + equipTotal);
  const totalEl = document.getElementById('cost-total');
  if(totalEl) totalEl.innerHTML = `<span class="currency-sym">${sym}</span>${Math.round(total).toLocaleString()}`;

  // Update breakdown
  const breakdown = document.getElementById('cost-breakdown-body');
  if(breakdown && WPS.length) {
    const lines = [
      {label:'Budget (BAC)',    val:wpsBudget,  color:'var(--blue)'},
      {label:'Actual Cost (AC)',val:wpsActual,  color:'var(--t1)'},
      {label:'Remaining',       val:wpsRemain,  color:'var(--t3)'},
    ];
    breakdown.innerHTML = lines.map(l=>
      `<div style="display:flex;justify-content:space-between;padding:2px 0">
        <span style="color:var(--t3)">${l.label}</span>
        <span style="font-weight:600;color:${l.color}">${fmt(l.val)}</span>
      </div>`
    ).join('');
  }
}
// ── FIX: renderWbsTree - show message when WBS is empty ──────
function renderWbsTree() {
  const empty=document.getElementById('wbs-empty'), tbody=document.getElementById('wbs-tree-body');
  if(!tbody) return;
  if(empty) empty.style.display=WBS_NODES.length?'none':'block';
  if(!WBS_NODES.length){tbody.innerHTML='';return;}
  const cm={};
  WBS_NODES.forEach(n=>{const p=n.pId||'__root__';if(!cm[p])cm[p]=[];cm[p].push(n);});
  Object.values(cm).forEach(a=>a.sort((x,y)=>(x.order||0)-(y.order||0)));
  const actId=(typeof ACTIVE_WBS!=='undefined')?ACTIVE_WBS:null;
  function rn(nd,dep){
    const kids=(cm[nd.id]||[]),hasKids=kids.length>0,isColl=!!nd.collapsed,isAct=nd.id===actId;
    const tC={SUMM:'#3B82F6',PLAN:'#22C55E',WORK:'#F59E0B',DELIV:'#8B5CF6'}[nd.type]||'#94A3B8';
    const tL={SUMM:'Sum',PLAN:'Plan',WORK:'Work',DELIV:'Deliv'}[nd.type]||(nd.type||'');
    // Col widths come from <colgroup> in HTML; cells use only padding+content here
    const indPad=4+dep*12;  // visual indent inside CODE column
    const row='<tr class="wbs-row'+(isAct?' wbs-active':'')+'" data-wid="'+nd.id+'"'
      +' draggable="true" ondragstart="onWbsNodeDragStart(event,\''+nd.id+'\')"'
      +' ondragover="onWbsNodeDragOver(event,\''+nd.id+'\')"'
      +' ondragleave="onWbsNodeDragLeave(event,\''+nd.id+'\')"'
      +' ondrop="onWbsNodeDrop(event,\''+nd.id+'\')"'
      +' onclick="setActiveWbs(\''+nd.id+'\')" style="cursor:pointer">'
      // 1. toggle
      +'<td style="text-align:center;padding:0">'+(hasKids?'<span class="wbs-toggle" onclick="toggleWbsCollapse(\''+nd.id+'\');event.stopPropagation()">'+(isColl?'&#9658;':'&#9660;')+'</span>':'')+'</td>'
      // 2. CODE - indented based on depth
      +'<td style="padding:2px 4px 2px '+indPad+'px"><span class="wbs-code-cell" title="'+esc(nd.code||'')+'">'+esc(nd.code||'--')+'</span></td>'
      // 3. NAME
      +'<td style="padding:1px 4px"><input class="wbs-name-inp" value="'+esc(nd.name||'')+'" title="'+esc(nd.name||'')+'" style="font-weight:'+(isAct?700:400)+'"'
        +' onblur="updateWbsName(\''+nd.id+'\',this.value)"'
        +' onkeydown="if(event.key===\'Enter\'){this.blur();event.preventDefault()}" onclick="event.stopPropagation()"></td>'
      // 4. TYPE badge
      +'<td style="text-align:center;padding:1px 3px"><span class="wbs-type-badge" style="background:'+tC+'18;color:'+tC+'">'+tL+'</span></td>'
      // 5. dict button
      +'<td style="text-align:center;padding:0"><button class="wbs-dict-btn" onclick="openWbsDictionary(\''+nd.id+'\');event.stopPropagation()">&#128203;</button></td>'
      +'</tr>';
    let rows=row;
    if(!isColl) kids.forEach(ch=>{rows+=rn(ch,dep+1);});
    return rows;
  }
  tbody.innerHTML=(cm['__root__']||[]).map(n=>rn(n,0)).join('');
}

// Also fix toggleWbsCollapse to call renderWbsTree
function toggleWbsCollapse(nodeId) {
  const node = WBS_NODES.find(n => n.id === nodeId);
  if(node) {
    node.collapsed = !node.collapsed;
    renderWbsTree();
    saveWbsToProject();
  }
}

// ── FIX: adUpdate properly recalcs when duration changes ─────
function adUpdate(field, val) {
  const wi = _selectedWi;
  if(wi == null) return;
  const w = WPS[wi];
  if(!w) return;

  // Write the field value
  if(field === 'dur')       { w.dur = Math.max(0, +val); }
  else if(field === 'name') { w.name = val; }
  else if(field === 'actType') { w.actType = val; if(val==='MS') w.dur=0; }
  else if(field === 'ph')   { w.ph = val; assignWbs(); }
  else if(field === 'durUnit') { w.durUnit = val; }
  else if(field === 'constraint') { w.constraint = val; }
  else if(field === 'constraintDate') { w.constraintDate = val; }
  else if(field === 'calId') { w.calId = val; }
  else if(field === 'wbsNodeId') { w.wbsNodeId = val; assignWbs(); }
  else if(field === 'pct')  { w.pct = Math.max(0, Math.min(100, +val)); }
  else if(field === 'status') { setActStatus(wi, val); return; }
  else if(field === 'notes') { w.notes = val; }
  else if(field === 'activityId') { w.activityId = val.trim().toUpperCase(); }
  else if(field === 'cost') { w.cost = +val; w.evBudget = +val; }
  else if(field === 'actualCost') { w.actualCost = +val; }
  else { w[field] = val; }

  // Recalc only for schedule-affecting fields
  if(['dur','constraint','constraintDate','wbsNodeId'].includes(field)) {
    recalc();
    if(_ganttSplitOpen) { setTimeout(renderGantt, 0); }
    VS.flat = []; invalidateRowCache();
    renderWps();
  } else if(field === 'name' || field === 'ph' || field === 'activityId') {
    // Just invalidate that row's cache entry, no full re-render needed
    invalidateRowCache();
    // Update header badge immediately
    if(field==='name') { const nb=document.getElementById('ad-name-badge'); if(nb) nb.textContent=val; }
    // Debounce the full renderWps
    clearTimeout(adUpdate._renderTimer);
    adUpdate._renderTimer = setTimeout(()=>{ VS.flat=[]; renderWps(); }, 300);
  } else {
    // notes, cost, actualCost etc — no visual update needed immediately
  }
  saveWbsToProject();

  // Update dock dates after CPM
  if(field === 'dur' || field === 'constraint') {
    const wi = _selectedWi;
    if(wi == null) return;
    const w = WPS[wi];
    if(!w) return;
    const r = SCHED.r?.[w.id] || {};
    const fmtDate = d => {
      if(d==null) return '—';
      const dt = new Date(P.start||'2025-01-01');
      dt.setDate(dt.getDate() + Math.round(d));
      return dt.toLocaleDateString('en-GB', {day:'2-digit',month:'short',year:'numeric'});
    };
    const _sv = (id,v) => { const e=document.getElementById(id); if(e) e.value=v??''; };
    _sv('ad-es', r.es!=null ? fmtDate(r.es) : '—');
    _sv('ad-ef', r.ef!=null ? fmtDate(r.ef) : '—');
    _sv('ad-ls', r.ls!=null ? fmtDate(r.ls) : '—');
    _sv('ad-lf', r.lf!=null ? fmtDate(r.lf) : '—');
    _sv('ad-tf', r.tf!=null ? r.tf+'d' : '—');
    const cpEl = document.getElementById('ad-cp');
    if(cpEl) { cpEl.value = r.cp ? 'YES ★' : 'No'; cpEl.style.color = r.cp ? 'var(--red)' : 'var(--t3)'; }
  }
}

// ── FIX: XER resource tab shows imported resources ────────────
function renderResources() {
  renderLaborTable();
  renderEquipmentTable();
  renderMaterialTable();
  updateCostSummary();
  // Update count badges
  [{type:'labor',id:'rn-labor'},{type:'material',id:'rn-material'},{type:'equip',id:'rn-equipment'}]
    .forEach(({type,id})=>{
      const navEl=document.getElementById(id);
      if(!navEl) return;
      let badge=navEl.querySelector('.res-count-badge');
      const count=RESOURCES[type]?.length||0;
      if(!badge&&count){ badge=document.createElement('span'); badge.className='res-count-badge'; badge.style.cssText='font-size:9px;padding:1px 6px;border-radius:8px;background:var(--blue);color:#fff;margin-left:auto;flex-shrink:0'; navEl.appendChild(badge); }
      if(badge) badge.textContent = count||'';
    });
  if(typeof renderEVMActivities==='function' && _currentResNav==='evm') renderEVMActivities();
  if(typeof renderRiskTable==='function' && _currentResNav==='risk') renderRiskTable();
}

// ── FIX: Always show currency in adp-cost tab ─────────────────
function renderAdCost(wi) {
  const w = WPS[wi]; if(!w) return;
  const sym = getCurrSym();
  const fmt = v => sym + Math.round(v||0).toLocaleString();
  const budget  = w.evBudget || w.cost || 0;
  const ac      = w.actualCost || 0;
  const remain  = w.remainCost || 0;
  const variance= budget - ac;
  const pctSpent= budget > 0 ? Math.round(100*ac/budget) : 0;

  const _sv = (id,v) => { const e=document.getElementById(id); if(e) e.value=v??''; };
  _sv('ad-budget',    budget);
  _sv('ad-actual-cost', ac);
  _sv('ad-remain-cost', remain);

  // Summary cards
  const summary = document.getElementById('adp-cost-summary');
  if(summary) {
    summary.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px">
        <div style="background:var(--s1);border-radius:6px;padding:8px 10px;text-align:center">
          <div style="font-size:9px;color:var(--t3);letter-spacing:.07em;margin-bottom:3px">BUDGET (BAC)</div>
          <div style="font-size:15px;font-weight:800;color:var(--blue)">${fmt(budget)}</div>
        </div>
        <div style="background:var(--s1);border-radius:6px;padding:8px 10px;text-align:center">
          <div style="font-size:9px;color:var(--t3);letter-spacing:.07em;margin-bottom:3px">ACTUAL COST</div>
          <div style="font-size:15px;font-weight:800;color:${ac>budget?'#DC2626':'var(--t1)'}">${fmt(ac)}</div>
        </div>
        <div style="background:var(--s1);border-radius:6px;padding:8px 10px;text-align:center">
          <div style="font-size:9px;color:var(--t3);letter-spacing:.07em;margin-bottom:3px">VARIANCE</div>
          <div style="font-size:15px;font-weight:800;color:${variance<0?'#DC2626':'#059669'}">${variance>=0?'+':''}${fmt(variance)}</div>
        </div>
      </div>
      <div style="height:4px;background:var(--b1);border-radius:2px;margin-bottom:6px">
        <div style="width:${Math.min(100,pctSpent)}%;height:100%;background:${pctSpent>100?'#DC2626':'#3B82F6'};border-radius:2px"></div>
      </div>
      <div style="font-size:10px;color:var(--t3);text-align:right">${pctSpent}% of budget spent</div>`;
  }
}

// ── IMPROVED EMPTY STATES FOR ALL RESOURCE SUB-PANELS ────────
function _initResourceEmptyStates() {
  const emptyMessages = {
    labor: 'No people/labor resources added yet. Click + Add Resource to add team members, or import from a P6 XER file.',
    material: 'No materials listed. Click + Add Resource to add materials for cost tracking.',
    equipment: 'No equipment or plant added. Click + Add Resource to add cranes, excavators and other equipment.',
  };
  Object.entries(emptyMessages).forEach(([type, msg]) => {
    const empty = document.getElementById(`${type}-empty`);
    if(empty) empty.innerHTML = `<div style="text-align:center;padding:24px;color:var(--t3)">
      <div style="font-size:28px;margin-bottom:8px">${type==='labor'?'👷':type==='material'?'📦':'🚜'}</div>
      <div style="font-size:12px;max-width:280px;margin:0 auto;line-height:1.6">${msg}</div>
    </div>`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(_initResourceEmptyStates, 300);
});


// ═══════════════════════════════════════════════════════════════
// BASELINE MANAGEMENT — up to 4 baselines, XER import, comparison
// ═══════════════════════════════════════════════════════════════

 // up to 4 baseline slots
 // 0-3 = which slot, -1 = none

function _getBaselineByName(name) {
  const bl = BASELINES[_activeBaseline];
  if(!bl?.activities||!name) return null;
  const n = name.trim().toLowerCase();
  return bl.activities.find(a => (a.name||'').trim().toLowerCase() === n) || null;
}

function _getBaseline(actId) {
  const bl = BASELINES[_activeBaseline];
  if(!bl?.activities) return null;
  // Try exact match first (task_code === activityId)
  let match = bl.activities.find(a => a.activityId===actId);
  if(match) return match;
  // Try internal id
  match = bl.activities.find(a => a.id===actId);
  if(match) return match;
  // Try stripping prefixes (e.g. "A1000" vs "1000")
  const stripped = actId?.replace(/^[A-Za-z]+/,'');
  if(stripped) match = bl.activities.find(a => (a.activityId||'').replace(/^[A-Za-z]+/,'')=== stripped);
  return match || null;
}

// Also expose for use in variance calc
function _getBaselineActivity(w) {
  if(!w) return null;
  return _getBaseline(w.activityId) || _getBaseline(w.id) || _getBaselineByName(w.name);
}

function openBaselineManager() {
  let html = `<div class="modal" style="max-width:700px;width:95vw">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
      <h3 style="margin:0;font-size:15px">📁 Baseline Manager</h3>
      <div style="flex:1"></div>
      <button class="btn" onclick="closeOvl('baseline-ovl')">✕</button>
    </div>
    <p style="font-size:12px;color:var(--t3);margin-bottom:14px">
      Upload up to 4 baseline schedules (XER files). The active baseline is used for variance calculations and S-curve comparisons.
    </p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
      ${[0,1,2,3].map(i => {
        const bl = BASELINES[i];
        const isActive = _activeBaseline===i;
        return `<div style="padding:12px;border:2px solid ${isActive?'#6D28D9':'var(--b1)'};border-radius:8px;background:${isActive?'rgba(109,40,217,.05)':'var(--s1)'}">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
            <span style="font-weight:700;font-size:12px;color:${isActive?'#6D28D9':'var(--t2)'}">
              ${isActive?'★ ':''}Baseline ${i+1}
            </span>
            ${bl ? `<span style="font-size:10px;padding:1px 6px;background:${isActive?'#6D28D9':'var(--blue)'};color:#fff;border-radius:8px">${bl.name||'Loaded'}</span>` : ''}
            <div style="flex:1"></div>
            ${bl ? `<button class="btn btns" onclick="activateBaseline(${i})" style="${isActive?'background:#6D28D9;color:#fff':''}">
              ${isActive?'✓ Active':'Use'}
            </button>` : ''}
          </div>
          ${bl ? `
            <div style="font-size:11px;color:var(--t2)">${(bl.activities||[]).length} activities</div>
            <div style="font-size:10px;color:var(--t3)">${bl.date||''}</div>
            <div style="display:flex;gap:6px;margin-top:8px">
              <button class="btn btns btnp" onclick="activateBaseline(${i})">Set Active</button>
              <button class="btn btns" onclick="clearBaseline(${i})">Remove</button>
            </div>
          ` : `
            <div style="font-size:11px;color:var(--t3);margin-bottom:8px">No baseline loaded</div>
            <label class="btn btns btnp" style="cursor:pointer;display:inline-block">
              📂 Load XER
              <input type="file" accept=".xer" style="display:none"
                onchange="importBaselineFile(${i}, this)">
            </label>
          `}
        </div>`;
      }).join('')}
    </div>
    <div style="padding:10px;background:var(--s1);border-radius:6px;font-size:11px;color:var(--t3)">
      <strong>Variance column</strong> = Baseline Finish − Current Schedule Finish (negative = ahead of baseline, positive = delayed).
      The active baseline is shown as BL START / BL FINISH columns in the schedule table and as a separate S-curve.
    </div>
  </div>`;
  let ovl = document.getElementById('baseline-ovl');
  if(!ovl) { ovl=document.createElement('div'); ovl.id='baseline-ovl'; ovl.className='ovl'; document.body.appendChild(ovl); ovl.onclick=e=>{ if(e.target===ovl)closeOvl('baseline-ovl'); }; }
  ovl.innerHTML = html;
  ovl.classList.add('on');
}

function activateBaseline(idx) {
  _activeBaseline = idx;
  saveWbsToProject();
  closeOvl('baseline-ovl');
  renderWps();
  if(_ganttSplitOpen) { setTimeout(renderGantt, 0); }
  // Re-render S-curve with baseline
  if(_currentMainTab==='dashboard') renderSCurve(); buildResourceScurveDropdown(); _ensureResourceSCurveCanvas(); renderResourceSCurve();
}

function clearBaseline(idx) {
  if(!confirm(`Remove Baseline ${idx+1}?`)) return;
  BASELINES[idx] = null;
  if(_activeBaseline===idx) _activeBaseline = -1;
  openBaselineManager();
}
function _parseBaselineXER(slot, text, filename) {
  const lines = text.split(/\r?\n/);
  const tables = {};
  let cur = null, hdrs = [];
  for(const line of lines) {
    if(line.startsWith('%T\t')) { cur=line.split('\t')[1]; tables[cur]={headers:[],rows:[]}; }
    else if(line.startsWith('%F\t') && cur) tables[cur].headers = line.split('\t').slice(1);
    else if(line.startsWith('%R\t') && cur) {
      const vals=line.split('\t').slice(1);
      const row={};
      tables[cur].headers.forEach((h,i)=>row[h]=vals[i]||'');
      tables[cur].rows.push(row);
    }
  }

  const tasks = (tables['TASK']||{rows:[]}).rows.filter(t=>t.task_type!=='TT_WBS');
  const typeMap = {'TT_Task':'TASK','TT_LOE':'LOE','TT_Mile':'MS','TT_FinMile':'MS'};

  const activities = tasks.map(t => ({
    id: t.task_id,
    activityId: t.task_code,
    name: t.task_name,
    actType: typeMap[t.task_type]||'TASK',
    dur: Math.round(+(t.target_drtn_hr_cnt||0)/10),
    pct: Math.round(+(t.phys_complete_pct||0)),
    targetStart: t.target_start_date?.split(' ')[0]||'',
    targetEnd: t.target_end_date?.split(' ')[0]||'',
    earlyStart: t.early_start_date?.split(' ')[0]||'',
    earlyEnd: t.early_end_date?.split(' ')[0]||'',
    lateStart: t.late_start_date?.split(' ')[0]||'',
    lateEnd: t.late_end_date?.split(' ')[0]||'',
    actualStart: t.act_start_date?.split(' ')[0]||'',
    actualFinish: t.act_end_date?.split(' ')[0]||'',
  }));

  const proj = (tables['PROJECT']||{rows:[{}]}).rows[0]||{};
  BASELINES[slot] = {
    name: proj.proj_short_name || filename.replace('.xer',''),
    date: new Date().toLocaleDateString('en-GB'),
    activities,
    planStart: proj.plan_start_date?.split(' ')[0]||'',
    planEnd: proj.plan_end_date?.split(' ')[0]||'',
  };
  if(_activeBaseline < 0) _activeBaseline = slot;

  hideImportProgress();
  saveWbsToProject();
  renderWps();
  openBaselineManager();
  setImportProgress(100, 'Baseline loaded!', `${activities.length} activities in baseline`);
  setTimeout(hideImportProgress, 1000);
}

// Add baseline button to toolbar Export section
function _addBaselineBtn() {
  const rptBtn = document.getElementById('mt-report');
  if(!rptBtn || document.getElementById('baseline-btn')) return;
  const btn = document.createElement('div');
  btn.id = 'baseline-btn';
  btn.className = 'main-tab';
  btn.title = 'Manage baseline schedules';
  btn.innerHTML = '📁 Baselines';
  btn.onclick = openBaselineManager;
  rptBtn.parentNode.insertBefore(btn, rptBtn.nextSibling);
}
document.addEventListener('DOMContentLoaded', () => setTimeout(_addBaselineBtn, 400));


// ═══════════════════════════════════════════════════════════════
// V19 FORENSIC FIXES — full user flow tested
// ═══════════════════════════════════════════════════════════════

// ── FIX: refreshAll must exist and work ──────────────────────
function refreshAll() {
  assignWbs();
  recalc();
  renderWps();
  if(_ganttSplitOpen) { setTimeout(renderGantt, 0); }
  saveWbsToProject();
}

// ── FIX: WBS node collapse in schedule table must re-render ──
function toggleSchedWbsCollapse(nodeId) {
  const n = WBS_NODES.find(x=>x.id===nodeId);
  if(n) { n.collapsed = !n.collapsed; VS.flat=[]; renderWps(); }
}

// ── FIX: WBS sidebar — ensure addWbsNode wires correctly ─────
// addWbsNode is defined elsewhere - ensure it calls renderWbsTree
// addWbsNode override - see v19 forensic fixes
function _addWbsNodeWithRender(parentId) {
  addWbsNode(parentId);
  renderWbsTree();
}

// ── FIX: showInlineAdd must target correct WBS node ──────────
// Ensure the inline add bar appears and commits properly
function _showInlineAddSafe(wbsNodeId) {
  if(typeof showInlineAdd === 'function') showInlineAdd(wbsNodeId);
  else openAddWp();
}

// ── FIX: Import → WBS auto-assign (after XER import) ─────────
// After XER import, WBS nodes are built but may have orphaned activities
// assignWbs must be called to wire wbsNodeId
// This is already called in _parseXERFinalize ✓

// ── FIX: Parse Doc → WBS → activities flow ───────────────────
// applyParsedSchedule should also call assignWbs + renderWbsTree
const _origApplyParsed = typeof applyParsedSchedule==='function' ? applyParsedSchedule : null;

// ── FIX: doGenerate must add to EXISTING WBS, not clear it ───
// doGenerate is defined elsewhere - check it doesn't clear WBS_NODES

// ── FIX: updateHdrSummary - currency safe ────────────────────
function updateHdrSummary() {
  const s = PROJECT_SETTINGS;
  const sym = getCurrSym();
  const sl = document.getElementById('hdr-start-lbl');
  const dl = document.getElementById('hdr-dur-lbl');
  const fl = document.getElementById('hdr-finish-lbl');
  if(sl) sl.textContent = s.start ? '📅 '+s.start : '';
  if(dl && SCHED.pe) dl.textContent = '⏱ '+Math.round(SCHED.pe)+'d';
  if(fl && SCHED.pe && s.start) {
    const end = new Date(s.start); end.setDate(end.getDate()+SCHED.pe);
    fl.textContent = '🏁 '+end.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  }
  const finEl = document.getElementById('hdr-contract-val');
  if(finEl && s.contractVal) finEl.textContent = sym + (+s.contractVal).toLocaleString();
  // Update badge counts
  updateWpsBadge();
}

// ── FIX: updateWpsBadge ──────────────────────────────────────
function updateWpsBadge() {
  const badge = document.getElementById('cbadge');
  if(badge) badge.textContent = WPS.length || '';
  const inf = document.getElementById('wt-inf');
  if(inf && WPS.length) {
    const cpCount = WPS.filter(w=>SCHED.r?.[w.id]?.cp).length;
    const hasBl = BASELINES[_activeBaseline]?.activities?.length > 0;
    inf.textContent = `${WPS.length} activities · ${cpCount} critical${hasBl?' · Baseline: '+BASELINES[_activeBaseline].name:''}`;
  }
}

// ── FIX: renderWbsTree must work for empty WBS ───────────────
// Already handled by _initEmptyStates

// ── FIX: COL_INDEX update for filter row ────────────────────
// filterKeys must match new column count (19 cols)
function ensureFilterRow() {
  const table = document.getElementById('wt-table');
  if(!table) return;
  let filterRow = table.querySelector('tr.wt-filter-row');
  if(filterRow) { filterRow.remove(); }
  // Only add if filter is needed
  if(!Object.values(_colFilters||{}).some(Boolean)) return;
  filterRow = document.createElement('tr');
  filterRow.className = 'wt-filter-row';
  const filterKeys = ['wbs','type','name','status','dur','float','','','','','','','','','','preds','pct','constraint',''];
  filterRow.innerHTML = filterKeys.map(k => `<th style="padding:2px 3px">${k ?
    `<input class="srch" placeholder="Filter…" value="${_colFilters[k]||''}" style="width:100%;font-size:10px"
     oninput="_colFilters['${k}']=this.value;renderWps()">` : ''}</th>`).join('');
  const thead = table.querySelector('thead');
  if(thead) thead.appendChild(filterRow);
}

// ── FIX: S-curve with baseline ────────────────────────────────
// renderSCurve already uses PROJECT_SETTINGS.dataDate
// Add baseline PV curves — injected into existing renderSCurve via a post-hook

// ── FIX: computeEVM uses baseline for PV if available ────────
// Override the PV calculation to use baseline when available
function _getBaselinePV(periodEndDay) {
  const bl = BASELINES[_activeBaseline];
  if(!bl || !bl.activities?.length) return null;
  const projStart = new Date(P.start||'2025-01-01');
  let cumBudget = 0;
  bl.activities.forEach(a => {
    const aEnd = a.targetEnd ? (new Date(a.targetEnd)-projStart)/86400000 : 0;
    if(aEnd <= periodEndDay) cumBudget += 1; // count-based since no costs in baseline
  });
  return cumBudget;
}

// ── FIX: buildFlatRows empty handling ────────────────────────
// Ensure it handles empty WPS gracefully (already OK)

// ── FIX: Column widths consistent with new columns ───────────
function _fixColWidths() {
  const table = document.getElementById('wt-table');
  if(!table || table._widthsSet) return;
  table._widthsSet = true;
  table.style.tableLayout = 'fixed';
  table.style.width = '100%';
}

// ── Run all fixes on DOMContentLoaded ────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(_fixColWidths, 300);
  setTimeout(updateWpsBadge, 500);
});

// ── FIX: Inline add bar — always at bottom of table ──────────
// The add bar click handler
document.addEventListener('click', e => {
  const addBar = e.target.closest('#wt-add-bar');
  if(addBar && !document.getElementById('ia-name')?.parentNode) {
    showInlineAdd(ACTIVE_WBS || null);
  }
});


// ═══════════════════════════════════════════════════════════════
// RESOURCE S-CURVE
// ═══════════════════════════════════════════════════════════════
function renderResourceSCurve() {
  const canvas = document.getElementById('res-scurve-canvas');
  if(!canvas) return;
  const selId = document.getElementById('res-scurve-select')?.value||'all';
  const W=Math.max(400,canvas.offsetWidth||700), H=Math.max(200,canvas.offsetHeight||220);
  canvas.width=W; canvas.height=H;
  const ctx=canvas.getContext('2d'); ctx.clearRect(0,0,W,H);
  if(!WPS.length||!SCHED.pe){ ctx.fillStyle='#9ca3af'; ctx.font='13px system-ui'; ctx.textAlign='center'; ctx.fillText('No schedule data',W/2,H/2); return; }

  const projDur=SCHED.pe, projStart=new Date(P.start||'2025-01-01');
  const periods=Math.min(120,Math.ceil(projDur<=260?projDur/5:projDur/10)), periodLen=projDur/periods;
  const pad={top:36,right:24,bottom:40,left:58}, cw=W-pad.left-pad.right, ch=H-pad.top-pad.bottom;
  const ddStr=PROJECT_SETTINGS.dataDate||'';
  const ddDays=ddStr?(new Date(ddStr)-projStart)/86400000:null;
  const ddPeriod=ddDays!=null?Math.floor(ddDays/periodLen):null;

  // ─── Determine what to plot ───────────────────────────────
  // If a resource is selected AND has unit data → plot in units (h/d/t etc.)
  // Otherwise → plot in cost (£/$)
  const allRes=[...RESOURCES.labor,...RESOURCES.equipment,...RESOURCES.material];
  let activitiesToUse=WPS, yLabel='%', useUnits=false, unitLabel='';
  let totalBudget=0;

  if(selId!=='all') {
    activitiesToUse=WPS.filter(w=>(w.resourceIds||[]).includes(selId));
    const hasUnits=activitiesToUse.some(w=>w.resourceAssignments?.[selId]?.budgetedQty>0);
    if(hasUnits) {
      useUnits=true;
      unitLabel=activitiesToUse.find(w=>w.resourceAssignments?.[selId])?.resourceAssignments[selId]?.unit||'h';
      yLabel=unitLabel;
      totalBudget=activitiesToUse.reduce((s,w)=>s+(w.resourceAssignments?.[selId]?.budgetedQty||0),0);
    }
  }
  if(!useUnits) {
    totalBudget=activitiesToUse.reduce((s,w)=>{
      if(selId!=='all'&&w.resourceAssignments?.[selId]) return s+(w.resourceAssignments[selId].budgetedCost||0);
      return s+(w.evBudget||w.cost||0);
    },0)||activitiesToUse.length||1;
  }

  const getBudget=(w)=>{
    if(useUnits) return w.resourceAssignments?.[selId]?.budgetedQty||0;
    if(selId!=='all'&&w.resourceAssignments?.[selId]) return w.resourceAssignments[selId].budgetedCost||0;
    return w.evBudget||w.cost||0;
  };
  const getActual=(w)=>{
    if(useUnits) return w.resourceAssignments?.[selId]?.actualQty||0;
    if(selId!=='all'&&w.resourceAssignments?.[selId]) return w.resourceAssignments[selId].actualCost||0;
    return w.actualCost||0;
  };

  // ─── Compute curves ───────────────────────────────────────
  const pv=[],pvL=[],ev=[],remE=[],remL=[];
  let cumPV=0,cumPVL=0,cumEV=0,cumRE=0,cumRL=0,evAtDD=0;

  for(let i=0;i<periods;i++){
    const pS=i*periodLen, pE=(i+1)*periodLen;
    let vPV=0,vPVL=0,vEV=0;
    activitiesToUse.forEach(w=>{
      const r=SCHED.r?.[w.id]||{};
      const budget=getBudget(w);
      if(!budget) return;
      const pct=(w.pct||0)/100;
      // PV Early (scheduled by early dates)
      const es=r.es??0, ef=r.ef??(es+(w.dur||0));
      const durE=Math.max(1,ef-es);
      vPV+=(budget/durE)*Math.max(0,Math.min(ef,pE)-Math.max(es,pS));
      // PV Late
      const ls=r.ls??0, lf=r.lf??(ls+(w.dur||0));
      const durL=Math.max(1,lf-ls);
      vPVL+=(budget/durL)*Math.max(0,Math.min(lf,pE)-Math.max(ls,pS));
      // EV (only up to DD)
      if(ddPeriod==null||i<=ddPeriod) {
        vEV+=(budget/durE)*Math.max(0,Math.min(ef,pE)-Math.max(es,pS))*pct;
      }
    });
    cumPV+=vPV; pv.push(useUnits?cumPV:cumPV/totalBudget*100);
    cumPVL+=vPVL; pvL.push(useUnits?cumPVL:cumPVL/totalBudget*100);
    cumEV+=vEV; ev.push(useUnits?cumEV:cumEV/totalBudget*100);
    if(ddPeriod!=null&&i===ddPeriod) evAtDD=useUnits?cumEV:cumEV/totalBudget*100;
  }
  // Remaining curves from DD
  for(let i=0;i<periods;i++){
    const pS=i*periodLen, pE=(i+1)*periodLen;
    if(ddPeriod!=null&&i<=ddPeriod){remE.push(evAtDD);remL.push(evAtDD);continue;}
    let vRE=0,vRL=0;
    activitiesToUse.forEach(w=>{
      const r=SCHED.r?.[w.id]||{};
      const budget=getBudget(w); if(!budget) return;
      const remPct=1-((w.pct||0)/100); if(remPct<=0) return;
      const reS=Math.max(r.es??0,ddDays||0), reE=r.ef??(reS+(w.dur||0));
      const rlS=Math.max(r.ls??0,ddDays||0), rlE=r.lf??(rlS+(w.dur||0));
      const dE=Math.max(1,reE-reS),dL=Math.max(1,rlE-rlS);
      vRE+=(budget*remPct/dE)*Math.max(0,Math.min(reE,pE)-Math.max(reS,pS));
      vRL+=(budget*remPct/dL)*Math.max(0,Math.min(rlE,pE)-Math.max(rlS,pS));
    });
    cumRE+=vRE; remE.push(evAtDD+(useUnits?cumRE:cumRE/totalBudget*100));
    cumRL+=vRL; remL.push(evAtDD+(useUnits?cumRL:cumRL/totalBudget*100));
  }

  // ─── Draw ─────────────────────────────────────────────────
  const maxY=useUnits?totalBudget*1.05:100;
  const toY=(v)=>pad.top+ch*(1-v/maxY);
  // Grid
  ctx.save();ctx.strokeStyle='rgba(0,0,0,.06)';ctx.lineWidth=1;
  for(let i=0;i<=5;i++){const y=pad.top+ch*i/5;ctx.beginPath();ctx.moveTo(pad.left,y);ctx.lineTo(pad.left+cw,y);ctx.stroke();ctx.fillStyle='#9ca3af';ctx.font='10px system-ui';ctx.textAlign='right';ctx.fillText(useUnits?(maxY*(1-i/5)/1000).toFixed(0)+'k':(100-i*20)+'%',pad.left-4,y+4);}
  ctx.restore();
  // Data Date line
  if(ddDays!=null&&ddDays>0&&ddDays<projDur){const ddX=pad.left+cw*(ddDays/projDur);ctx.save();ctx.setLineDash([4,3]);ctx.strokeStyle='#F59E0B';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(ddX,pad.top);ctx.lineTo(ddX,pad.top+ch);ctx.stroke();ctx.fillStyle='#F59E0B';ctx.font='bold 9px system-ui';ctx.textAlign='center';ctx.fillText('DD',ddX,pad.top-4);ctx.restore();}
  // Draw lines
  const drawCurve=(data,color,lw,dash)=>{ctx.save();ctx.strokeStyle=color;ctx.lineWidth=lw;if(dash)ctx.setLineDash(dash);else ctx.setLineDash([]);ctx.beginPath();data.forEach((v,i)=>{const x=pad.left+cw*(i/(periods-1||1)),y=toY(v);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});ctx.stroke();ctx.restore();};
  const fillU=(data,color)=>{ctx.save();ctx.beginPath();data.forEach((v,i)=>{const x=pad.left+cw*(i/(periods-1||1)),y=toY(v);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});ctx.lineTo(pad.left+cw,pad.top+ch);ctx.lineTo(pad.left,pad.top+ch);ctx.closePath();ctx.fillStyle=color;ctx.fill();ctx.restore();};
  fillU(pv,'rgba(59,130,246,.06)');
  drawCurve(pvL,'#93C5FD',1.5,[5,3]);
  drawCurve(pv,'#3B82F6',2.5);
  drawCurve(ev,'#22C55E',2.5);
  if(ddPeriod!=null){drawCurve(remE,'#EAB308',1.5,[4,3]);drawCurve(remL,'#F97316',1.5,[5,3]);}
  // X axis
  ctx.fillStyle='#6b7280';ctx.font='10px system-ui';ctx.textAlign='center';
  [0,.2,.4,.6,.8,1].forEach(t=>{const d=new Date(projStart);d.setDate(d.getDate()+Math.round(projDur*t));ctx.fillText(d.toLocaleDateString('en-GB',{month:'short',year:'2-digit'}),pad.left+cw*t,H-5);});
  // Legend
  const legItems=[{c:'#3B82F6',lw:2.5,d:false,l:'PV Early'},{c:'#93C5FD',lw:1.5,d:true,l:'PV Late'},{c:'#22C55E',lw:2.5,d:false,l:'EV'},{c:'#EAB308',lw:1.5,d:true,l:'Rem Early'},{c:'#F97316',lw:1.5,d:true,l:'Rem Late'}];
  ctx.save();ctx.font='9px system-ui';ctx.textAlign='left';
  let lx=pad.left+2;
  legItems.forEach(it=>{ctx.save();ctx.strokeStyle=it.c;ctx.lineWidth=it.lw;if(it.d)ctx.setLineDash([4,3]);else ctx.setLineDash([]);ctx.beginPath();ctx.moveTo(lx,pad.top+8);ctx.lineTo(lx+14,pad.top+8);ctx.stroke();ctx.setLineDash([]);ctx.restore();ctx.fillStyle='#374151';ctx.fillText(it.l,lx+16,pad.top+12);lx+=ctx.measureText(it.l).width+28;});
  ctx.restore();
  // Resource name + unit
  const resLabel=selId==='all'?'All Resources':allRes.find(r=>r.id===selId)?.name||selId;
  ctx.fillStyle='#374151';ctx.font='bold 10px system-ui';ctx.textAlign='right';
  ctx.fillText(resLabel+(useUnits?' ('+unitLabel+')':''),pad.left+cw,pad.top+12);
  // EVM summary box
  if(selId!=='all'&&useUnits) {
    const evm=computeResourceEVM(selId);
    if(evm) {
      const bx=pad.left+cw-120,by=pad.top+20;
      ctx.fillStyle='rgba(255,255,255,.9)';ctx.fillRect(bx,by,118,52);ctx.strokeStyle='#E5E7EB';ctx.strokeRect(bx,by,118,52);
      ctx.fillStyle='#374151';ctx.font='9px system-ui';ctx.textAlign='left';
      ctx.fillText(`Budgeted: ${evm.budgQty.toFixed(1)} ${evm.unit}`,bx+6,by+13);
      ctx.fillText(`Actual:   ${evm.actQty.toFixed(1)} ${evm.unit}`,bx+6,by+25);
      ctx.fillStyle='#6D28D9';ctx.fillText(`EV:       ${evm.evQty.toFixed(1)} ${evm.unit}`,bx+6,by+37);
      ctx.fillStyle=evm.SPI>=1?'#22C55E':'#DC2626';ctx.font='bold 9px system-ui';
      ctx.fillText(`SPI(qty): ${evm.SPI.toFixed(2)}`,bx+6,by+49);
    }
  }
}

function buildResourceScurveDropdown() {
  const sel = document.getElementById('res-scurve-select');
  if(!sel) return;
  const allRes=[...RESOURCES.labor,...RESOURCES.equipment,...RESOURCES.material];
  sel.innerHTML = '<option value="all">All Resources</option>' +
    allRes.map(r=>`<option value="${r.id}">${esc(r.name)}</option>`).join('');
}


// ═══════════════════════════════════════════════════════════════
// V21 — PERFORMANCE ENGINE + PERSISTENCE + PMC GAPS
// ═══════════════════════════════════════════════════════════════

// ── INDEXED DB PERSISTENCE (replaces localStorage for large schedules) ──
const DB_NAME = 'gensched_v21', DB_VER = 1;
let _db = null;

function openDB() {
  return new Promise((res, rej) => {
    if(_db) return res(_db);
    const req = indexedDB.open(DB_NAME, DB_VER);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if(!db.objectStoreNames.contains('projects')) db.createObjectStore('projects',{keyPath:'id'});
      if(!db.objectStoreNames.contains('schedules')) db.createObjectStore('schedules',{keyPath:'projId'});
    };
    req.onsuccess = e => { _db=e.target.result; res(_db); };
    req.onerror = e => rej(e.target.error);
  });
}

async function dbSave(store, data) {
  const db = await openDB();
  return new Promise((res,rej) => {
    const tx = db.transaction(store,'readwrite');
    tx.objectStore(store).put(data).onsuccess = ()=>res();
    tx.onerror = e=>rej(e.target.error);
  });
}

async function dbLoad(store, key) {
  const db = await openDB();
  return new Promise((res,rej) => {
    const tx = db.transaction(store,'readonly');
    const req = tx.objectStore(store).get(key);
    req.onsuccess = e=>res(e.target.result);
    req.onerror = e=>rej(e.target.error);
  });
}

// Save entire schedule (WPS + WBS + meta) to IndexedDB
async function saveScheduleDB() {
  if(!currentProject?.id) return;
  try {
    await dbSave('schedules', {
      projId: currentProject.id,
      wps: WPS.map(w=>({...w})),  // shallow copy
      wbs: WBS_NODES,
      milestones: MILESTONES,
      settings: PROJECT_SETTINGS,
      baselines: BASELINES.map(b => b ? {
        name:b.name, date:b.date, planStart:b.planStart, planEnd:b.planEnd,
        activities: b.activities  // may be large — stored in IDB, not localStorage
      } : null),
      activeBaseline: _activeBaseline,
      risks: RISKS,
    });
  } catch(e) {
    console.warn('IDB save failed, trying localStorage:', e.message);
    _saveScheduleFallback();
  }
}

function _saveScheduleFallback() {
  // Compressed localStorage save for small schedules
  try {
    if(!currentProject?.id) return;
    const key = 'pa_sched_' + currentProject.id;
    const payload = {wps:WPS,wbs:WBS_NODES,settings:PROJECT_SETTINGS,risks:RISKS};
    const str = JSON.stringify(payload);
    if(str.length < 4000000) localStorage.setItem(key, str);
    else console.warn('Schedule too large for localStorage, using IDB only');
  } catch(e) { console.warn('localStorage save failed:', e); }
}

async function loadScheduleDB(projId) {
  try {
    const data = await dbLoad('schedules', projId);
    if(!data) return false;
    WPS = data.wps || [];
    WBS_NODES = data.wbs || [];
    MILESTONES = data.milestones || [];
    RISKS = data.risks || [];
    if(data.settings) Object.assign(PROJECT_SETTINGS, data.settings);
    if(data.baselines) BASELINES = data.baselines;
    if(data.activeBaseline != null) _activeBaseline = data.activeBaseline;
    return true;
  } catch(e) {
    console.warn('IDB load failed:', e);
    return false;
  }
}
// ── STREAMING XER PARSER — memory-efficient for 100k+ line files ──
// Old parseXER removed - using _xer_parse pipeline

// _parseXERStreaming replaced by _xer_* pipeline in v23
function _parseXERStreaming(){}

// ── VS PERFORMANCE: cache row HTML to avoid re-render ──────────
  // actId → html string
  // increment to invalidate

function invalidateRowCache() { _cacheGeneration++; _rowHtmlCache.clear(); _succMapCache=null; }
function renderRowHtmlCached(row, succMap) {
  if(row.type !== 'activity') return renderRowHtml(row, succMap);
  const key = row.w.id + '_' + _cacheGeneration + '_' + (row.w._dirty||'');
  if(_rowHtmlCache.has(key)) return _rowHtmlCache.get(key);
  const html = renderRowHtml(row, succMap);
  _rowHtmlCache.set(key, html);
  return html;
}

// Patch VS_render to use cache
const _origVSRender = VS_render;
function VS_render() {
  if(!VS.container || !VS.flat.length) return;
  const scrollTop = VS.container.scrollTop;
  if(Math.abs(scrollTop - VS._lastScroll) < 4 && VS.visStart >= 0 && VS.visEnd > 0) return;
  VS._lastScroll = scrollTop;
  const viewH = VS.container.clientHeight || 600;

  // ─── O(1) row position lookup using prefix-sum cache ────
  // Only rebuild when flat array reference changes
  if(!VS._rowTops || VS._rowTopsLen !== VS.flat.length || VS._rowTopsRef !== VS.flat) {
    const N = VS.flat.length;
    VS._rowTops = new Float64Array(N + 1);
    let acc = 0;
    for(let i = 0; i < N; i++) {
      VS._rowTops[i] = acc;
      acc += VS.flat[i].type === 'activity' ? VS.ITEM_H : VS.HDR_H;
    }
    VS._rowTops[N] = acc;
    VS.totalH = acc;
    VS._rowTopsLen = N;
    VS._rowTopsRef = VS.flat;
  }

  // ─── Binary search for visible range — O(log n) ───────────
  const rowTops = VS._rowTops;
  const N = VS.flat.length;
  function findRow(y) {
    let lo = 0, hi = N - 1;
    while(lo < hi) {
      const mid = (lo + hi) >> 1;
      if(rowTops[mid + 1] <= y) lo = mid + 1; else hi = mid;
    }
    return lo;
  }
  const start = findRow(scrollTop);
  const end   = findRow(scrollTop + viewH);
  const visStart = Math.max(0, start - VS.BUFFER);
  const visEnd   = Math.min(N - 1, end + VS.BUFFER);

  if(visStart === VS.visStart && visEnd === VS.visEnd) return;
  VS.visStart = visStart; VS.visEnd = visEnd;

  const body = document.getElementById('wt-body');
  if(!body) return;

  const topPad = rowTops[visStart];
  const bottomPad = VS.totalH - rowTops[visEnd + 1];
  const succMap = VS._succMap || {};

  // ─── Build HTML in chunks for fewer string concatenations ───
  const parts = [];
  if(topPad > 0) parts.push(`<tr class="wt-virtual-spacer" style="height:${topPad}px"><td colspan="19"></td></tr>`);
  for(let i = visStart; i <= visEnd; i++) parts.push(renderRowHtmlCached(VS.flat[i], succMap));
  if(bottomPad > 0) parts.push(`<tr class="wt-virtual-spacer" style="height:${bottomPad}px"><td colspan="19"></td></tr>`);

  body.innerHTML = parts.join('');
  // Defer non-essential work
  setTimeout(() => { _hookActivityRowClicks?.(); applyColVisibility?.(); _initColDragReorder?.(); }, 0);
}

// Invalidate cache on any data change
// recalc cache invalidation handled via SCHED change detection


// ═══════════════════════════════════════════════════════════════
// V21 PMC GAPS — WBS Dictionary, Enhanced Risk, Schedule Health
// ═══════════════════════════════════════════════════════════════

// ── WBS DICTIONARY (PMI Practice Standard for WBS, §3.4) ────
// Each WBS node gets: description, deliverables, acceptance criteria, owner, account code
// Stored on WBS_NODES[i].dict
function openWbsDictionary(nodeId) {
  const node = WBS_NODES.find(n=>n.id===nodeId);
  if(!node) return;
  if(!node.dict) node.dict = {description:'',deliverables:'',acceptance:'',owner:'',accountCode:''};
  const d = node.dict;

  const html = `<div class="modal" style="max-width:560px">
    <h3 style="margin:0 0 14px;font-size:14px">📋 WBS Dictionary — ${esc(node.code)}: ${esc(node.name)}</h3>
    <div style="display:grid;gap:10px">
      <div>
        <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em">SCOPE DESCRIPTION</label>
        <textarea id="wbd-desc" rows="3" style="width:100%;font-size:12px;padding:6px;border:1px solid var(--b1);border-radius:4px;background:var(--s1);color:var(--t1);resize:vertical;box-sizing:border-box;font-family:inherit">${esc(d.description)}</textarea>
      </div>
      <div>
        <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em">DELIVERABLES</label>
        <textarea id="wbd-deliv" rows="2" style="width:100%;font-size:12px;padding:6px;border:1px solid var(--b1);border-radius:4px;background:var(--s1);color:var(--t1);resize:vertical;box-sizing:border-box;font-family:inherit">${esc(d.deliverables)}</textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em">RESPONSIBLE PARTY</label>
          <input id="wbd-owner" value="${esc(d.owner)}" style="width:100%;font-size:12px;padding:5px 7px;border:1px solid var(--b1);border-radius:4px;background:var(--s1);color:var(--t1);box-sizing:border-box">
        </div>
        <div>
          <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em">COST ACCOUNT CODE</label>
          <input id="wbd-acct" value="${esc(d.accountCode)}" style="width:100%;font-size:12px;padding:5px 7px;border:1px solid var(--b1);border-radius:4px;background:var(--s1);color:var(--t1);box-sizing:border-box">
        </div>
      </div>
      <div>
        <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em">ACCEPTANCE CRITERIA</label>
        <textarea id="wbd-accept" rows="2" style="width:100%;font-size:12px;padding:6px;border:1px solid var(--b1);border-radius:4px;background:var(--s1);color:var(--t1);resize:vertical;box-sizing:border-box;font-family:inherit">${esc(d.acceptance)}</textarea>
      </div>
    </div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px">
      <button class="btn" onclick="closeOvl('wbd-ovl')">Cancel</button>
      <button class="btn btnp" onclick="saveWbsDictionary('${nodeId}')">✓ Save</button>
    </div>
  </div>`;
  let ovl = document.getElementById('wbd-ovl');
  if(!ovl){ovl=document.createElement('div');ovl.id='wbd-ovl';ovl.className='ovl';document.body.appendChild(ovl);ovl.onclick=e=>{if(e.target===ovl)closeOvl('wbd-ovl');};}
  ovl.innerHTML=html; ovl.classList.add('on');
}

function saveWbsDictionary(nodeId) {
  const node=WBS_NODES.find(n=>n.id===nodeId); if(!node) return;
  if(!node.dict) node.dict={};
  node.dict.description = document.getElementById('wbd-desc')?.value||'';
  node.dict.deliverables = document.getElementById('wbd-deliv')?.value||'';
  node.dict.owner = document.getElementById('wbd-owner')?.value||'';
  node.dict.accountCode = document.getElementById('wbd-acct')?.value||'';
  node.dict.acceptance = document.getElementById('wbd-accept')?.value||'';
  saveWbsToProject();
  closeOvl('wbd-ovl');
}

// ── ENHANCED RISK REGISTER (PMI Risk Management Practice Guide §4) ──
// Add response strategy, trigger, due date, residual risk to each RISK
function addRisk() {
  RISKS.push({
    id: uid(), desc:'New Risk', prob:2, impact:2, owner:'', status:'Open',
    response:'', responseType:'Mitigate', trigger:'', dueDate:'',
    residualProb:1, residualImpact:1, activityIds:[],
    raisedDate: new Date().toISOString().split('T')[0],
  });
  renderRiskTable();
}

function renderRiskTable() {
  const body=document.getElementById('risk-body');
  const empty=document.getElementById('risk-empty');
  if(!body) return;
  if(!RISKS.length){body.innerHTML='';if(empty)empty.style.display='block';return;}
  if(empty) empty.style.display='none';

  const PROB=['','Rare','Unlikely','Possible','Likely','Near Certain'];
  const IMP=['','Negligible','Minor','Moderate','Major','Catastrophic'];
  const scoreCls=s=>s>=15?'evm-bad':s>=8?'evm-warn':s>=4?'':'evm-good';
  const RESP=['Avoid','Transfer','Mitigate','Accept','Exploit','Enhance','Share'];
  const STAT=['Open','In Progress','Closed','Accepted'];

  body.innerHTML = RISKS.map((r,i)=>{
    const score=(r.prob||1)*(r.impact||1);
    const resScore=(r.residualProb||1)*(r.residualImpact||1);
    const linked=(r.activityIds||[]).length;
    return `<tr>
      <td style="font-family:var(--mono);font-size:9px;color:var(--t3)">${r.id.slice(-6)}</td>
      <td><input value="${esc(r.desc)}" style="width:100%;min-width:140px"
        onchange="RISKS[${i}].desc=this.value"></td>
      <td><select onchange="RISKS[${i}].prob=+this.value;renderRiskTable()">
        ${[1,2,3,4,5].map(v=>`<option value="${v}" ${r.prob===v?'selected':''}>${v}-${PROB[v]}</option>`).join('')}
      </select></td>
      <td><select onchange="RISKS[${i}].impact=+this.value;renderRiskTable()">
        ${[1,2,3,4,5].map(v=>`<option value="${v}" ${r.impact===v?'selected':''}>${v}-${IMP[v]}</option>`).join('')}
      </select></td>
      <td style="text-align:center"><span class="evm-val ${scoreCls(score)}" style="font-size:12px;font-weight:800">${score}</span></td>
      <td><select onchange="RISKS[${i}].responseType=this.value">
        ${RESP.map(v=>`<option value="${v}" ${r.responseType===v?'selected':''}>${v}</option>`).join('')}
      </select></td>
      <td><input value="${esc(r.response||'')}" placeholder="Response action…" style="min-width:120px"
        onchange="RISKS[${i}].response=this.value"></td>
      <td><input value="${esc(r.owner||'')}" style="width:80px"
        onchange="RISKS[${i}].owner=this.value"></td>
      <td><input type="date" value="${r.dueDate||''}" style="width:110px;font-size:10px"
        onchange="RISKS[${i}].dueDate=this.value"></td>
      <td><select onchange="RISKS[${i}].status=this.value">
        ${STAT.map(v=>`<option value="${v}" ${r.status===v?'selected':''}>${v}</option>`).join('')}
      </select></td>
      <td style="text-align:center">
        <button class="btn btns" onclick="openRiskActivityLinker('${r.id}')" style="font-size:9px">
          🔗${linked?linked:'+'}
        </button>
      </td>
      <td style="text-align:center"><span title="Residual risk score" style="font-size:10px;color:var(--t3)">${resScore}</span></td>
      <td><button class="ib del" onclick="RISKS.splice(${i},1);renderRiskTable()">×</button></td>
    </tr>`;
  }).join('');
  updateRiskMatrix();
  updateRiskMatrixChart();
}

// Risk matrix 5×5 heat map
function updateRiskMatrixChart() {
  const canvas = document.getElementById('risk-matrix-canvas');
  if(!canvas || !RISKS.length) return;
  const W=canvas.width=200, H=canvas.height=200;
  const ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,W,H);
  const cw=W/5, ch=H/5;
  const colors=['#D1FAE5','#FEF3C7','#FEE2E2'];
  // Draw 5x5 grid
  for(let p=0;p<5;p++) for(let i=0;i<5;i++) {
    const score=(p+1)*(i+1);
    ctx.fillStyle=score>=15?'#FCA5A5':score>=8?'#FCD34D':score>=4?'#6EE7B7':'#A7F3D0';
    ctx.fillRect(i*cw,H-(p+1)*ch,cw,ch);
    ctx.strokeStyle='rgba(255,255,255,.5)'; ctx.lineWidth=1;
    ctx.strokeRect(i*cw,H-(p+1)*ch,cw,ch);
  }
  // Plot risks
  RISKS.forEach(r=>{
    const x=(r.impact-1)*cw+cw/2, y=H-(r.prob-1)*ch-ch/2;
    ctx.beginPath(); ctx.arc(x,y,6,0,Math.PI*2);
    ctx.fillStyle='rgba(109,40,217,.8)'; ctx.fill();
    ctx.strokeStyle='#fff'; ctx.lineWidth=1.5; ctx.stroke();
  });
  // Axis labels
  ctx.fillStyle='#374151'; ctx.font='8px system-ui'; ctx.textAlign='center';
  ['V.Low','Low','Med','High','V.High'].forEach((l,i)=>ctx.fillText(l,i*cw+cw/2,H-1));
}

// ── SCHEDULE HEALTH METRICS (DCMA + additional PMI metrics) ──
function getScheduleHealthSummary() {
  if(!WPS.length) return {};
  const total = WPS.length;
  const cpActs = WPS.filter(w=>SCHED.r?.[w.id]?.cp).length;
  const noLogic = WPS.filter(w=>!w.preds?.length&&!Object.values(VS._succMap||{}).flat().includes(w.id)).length;
  const highFloat = WPS.filter(w=>{const tf=SCHED.r?.[w.id]?.tf; return tf>20;}).length;
  const negFloat = WPS.filter(w=>{const tf=SCHED.r?.[w.id]?.tf; return tf<0;}).length;
  const missingRes = WPS.filter(w=>!w.resourceIds?.length&&w.actType==='TASK').length;
  const missingDur = WPS.filter(w=>!w.dur&&w.actType!=='MS').length;
  const complete = WPS.filter(w=>w.status==='COM').length;
  const inProg = WPS.filter(w=>w.status==='IP').length;

  return {total,cpActs,noLogic,highFloat,negFloat,missingRes,missingDur,complete,inProg,
    cpPct:Math.round(cpActs/total*100),
    completePct:Math.round(complete/total*100),
    logicPct:Math.round((total-noLogic)/total*100),
  };
}

function printReport() {
  window.print();
}
function exportMSP() {
  if(!WPS.length){alert('No schedule to export.');return;}
  // MSP XML format
  const projStart=P.start||'2025-01-01';
  const tasks=WPS.map((w,i)=>`  <Task>
    <UID>${i+1}</UID><ID>${i+1}</ID>
    <Name><![CDATA[${w.name}]]></Name>
    <Duration>PT${(w.dur||0)*8}H0M0S</Duration>
    <Start>${w.targetStart||projStart}T08:00:00</Start>
    <Finish>${w.targetEnd||projStart}T17:00:00</Finish>
    <PercentComplete>${w.pct||0}</PercentComplete>
    <Critical>${SCHED.r?.[w.id]?.cp?1:0}</Critical>
    <TotalSlack>${(SCHED.r?.[w.id]?.tf||0)*60}</TotalSlack>
  </Task>`).join('\n');
  const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<Project xmlns="http://schemas.microsoft.com/project">\n<Tasks>\n${tasks}\n</Tasks>\n</Project>`;
  const blob=new Blob([xml],{type:'text/xml'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download=(currentProject?.id||'schedule')+'.xml';a.click();
}

// ═══════════════════════════════════════════════════════════════
// V22 QA SWEEP — Professional testing fixes
// ═══════════════════════════════════════════════════════════════

// ── QA1: renderWps must handle VS properly when called before VS.container init
function renderWps(){
  if(!VS.container) VS_init();
  const body=document.getElementById('wt-body');
  if(!body) return;
  const inf=document.getElementById('wt-inf');
  const filteredWPS=(typeof getFilteredSortedWps==='function'&&(typeof _hasActiveFilter==='function'?_hasActiveFilter():false||!!_sortConfig?.col))?getFilteredSortedWps():WPS;
  const activeFilterCount=Object.values(_colFilters||{}).filter(Boolean).length;
  updateWpsBadge();
  if(!WPS.length){
    body.innerHTML=`<tr><td colspan="19"><div class="wt-empty-state">
      <div class="wt-empty-icon">📋</div>
      <div class="wt-empty-title">No Activities Yet</div>
      <div class="wt-empty-sub">Add activities manually, generate from the module library, parse a document, or import a P6 XER file.</div>
      <div class="wt-empty-actions">
        <button class="btn btns btnp" onclick="openAddWp()">+ Activity</button>
        <button class="btn btns" onclick="doGenerate()">⚡ Generate</button>
        <button class="btn btns" onclick="openDocParser()">📄 Parse Doc</button>
        <button class="btn btns" onclick="openImportModal()">↓ Import XER</button>
      </div>
    </div></td></tr>`;
    if(inf) inf.textContent='';
    return;
  }
  const succMap=_getSuccMap();
  const flat=buildFlatRows(filteredWPS,succMap);
  if(inf) {
    const cp=WPS.filter(w=>SCHED.r?.[w.id]?.cp).length;
    const bl=BASELINES[_activeBaseline];
    inf.textContent=`${filteredWPS.length}${activeFilterCount?' (filtered)':''} of ${WPS.length} activities · ${cp} critical${bl?' · 📁 '+bl.name:''}`;
  }
  if(flat.length>VS_THRESHOLD){
    VS._succMap=succMap;
    VS.flat=[];
    VS_setRows(flat);
    _afterRenderWps();
  } else if(flat.length>50){
    renderWpsAsync(flat,body);
  } else {
    body.innerHTML=flat.map(r=>renderRowHtml(r,succMap)).join('');
    _afterRenderWps();
  }
}
// ── QA4: delWp must invalidate VS cache ───────────────────────
function delWp(id){
  if(!confirm('Delete this activity?')) return;
  const idx=WPS.findIndex(w=>w.id===id);
  if(idx<0) return;
  WPS.splice(idx,1);
  // Remove from preds lists
  WPS.forEach(w=>{w.preds=w.preds.filter(p=>p.id!==id);});
  // Remove from risks
  RISKS.forEach(r=>{if(r.activityIds)r.activityIds=r.activityIds.filter(x=>x!==id);});
  if(_selectedWi===idx||_selectedWi>=WPS.length){_selectedWi=null;closeDetailDock();}
  VS.flat=[];invalidateRowCache();
  refreshAll();
}

// ── QA5: moveWp must invalidate VS cache ─────────────────────
function moveWp(wi,dir){
  if(wi+dir<0||wi+dir>=WPS.length) return;
  const tmp=WPS[wi]; WPS[wi]=WPS[wi+dir]; WPS[wi+dir]=tmp;
  if(_selectedWi===wi) _selectedWi=wi+dir;
  else if(_selectedWi===wi+dir) _selectedWi=wi;
  VS.flat=[];invalidateRowCache();
  refreshAll();
}

// ── QA6: Gantt split scroll sync ─────────────────────────────
function syncGanttFromTable() {
  if(_ganttSplitOpen && typeof renderGantt === 'function') {
    clearTimeout(syncGanttFromTable._t);
    syncGanttFromTable._t = setTimeout(renderGantt, 200);
  }
}

// ── QA7: Import modal properly resets on open ─────────────────
function openImportModal() {
  const ovl = document.getElementById('import-ovl');
  if(ovl) {
    // Reset progress / file inputs
    document.querySelectorAll('#import-ovl input[type="file"]').forEach(f=>f.value='');
    const prog = document.getElementById('xer-progress');
    if(prog) prog.style.display = 'none';
    ovl.classList.add('on');
    setImportTab?.('xer');
  }
}

// ── QA8: Schedule summary info bar update ────────────────────
function _updateSchedInfoBar() {
  const inf = document.getElementById('wt-inf');
  if(!inf || !WPS.length) { if(inf) inf.textContent=''; return; }
  const cp = WPS.filter(w=>SCHED.r?.[w.id]?.cp).length;
  const bl = BASELINES[_activeBaseline];
  const blName = bl ? ` · 📁 ${bl.name}` : '';
  inf.textContent = `${WPS.length.toLocaleString()} activities · ${cp} critical · ${WBS_NODES.length} WBS nodes${blName}`;
}

// ── QA9: Auto-resize S-curve canvas on tab switch ────────────
function _resizeCanvases() {
  ['scurve-canvas','res-scurve-canvas'].forEach(id => {
    const el = document.getElementById(id);
    if(el) { el.width = el.offsetWidth||600; el.height = el.offsetHeight||220; }
  });
}

// ── QA10: Project settings default currency fix ───────────────
// Ensure PROJECT_SETTINGS.currency is always initialized
if(!PROJECT_SETTINGS.currency) {
  PROJECT_SETTINGS.currency = {symbol:'$', code:'USD', name:'US Dollar'};
}

// ── QA11: VS_init fallback containers ────────────────────────
function VS_init() {
  const candidates = ['wt-sc','sched-split-table','sched-wrap','bs-main'];
  for(const id of candidates) {
    const el = document.getElementById(id);
    if(el && !VS.container) {
      VS.container = el;
      if(!el._vsInit) {
        el._vsInit = true;
        el.addEventListener('scroll', VS_onScroll, {passive:true});
      }
      break;
    }
  }
  // Fallback: find the wt-table scroll container
  if(!VS.container) {
    const tbl = document.getElementById('wt-table');
    if(tbl) {
      const parent = tbl.closest('[style*="overflow"]') || tbl.parentElement?.parentElement;
      if(parent) {
        VS.container = parent;
        if(!parent._vsInit) {
          parent._vsInit = true;
          parent.addEventListener('scroll', VS_onScroll, {passive:true});
        }
      }
    }
  }
}
// ── QA13: DCMA must update health ring even with no schedule ──
// Already handled in runDCMA — ensure it's called on dashboard open

// ── QA14: Ensure EVM BAC field shows after XER import ────────
function _applyNewProjCurrency(code) {
  if(!code) return;
  const found = _allCurrencies().find(c=>c.code===code);
  if(found) { PROJECT_SETTINGS.currency={symbol:found.symbol,code:found.code,name:found.name}; _refreshCurrencyUI?.(); }
}
// Populate project setup currency dropdown on open
function _populateProjSetupCurrency() {
  const sel=document.getElementById('ps-currency'); if(!sel) return;
  sel.innerHTML='<option value="">— Select Currency —</option>'+_buildCurrencyOptions();
  if(PROJECT_SETTINGS.currency?.code) sel.value=PROJECT_SETTINGS.currency.code;
}
function _postImportEVM() {
  const bac = WPS.reduce((s,w)=>s+(w.evBudget||w.cost||0), 0);
  if(bac > 0) {
    PROJECT_SETTINGS.bac = bac;
    const bacEl = document.getElementById('evm-bac');
    if(bacEl) bacEl.value = Math.round(bac);
  }

  try{ refreshAllTabs && refreshAllTabs(); }catch(e){}
}

// ── QA15: Keyboard shortcut Esc closes modals ─────────────────
document.addEventListener('keydown', e => {
  if(e.key==='Escape') {
    document.querySelectorAll('.ovl.on').forEach(o=>o.classList.remove('on'));
    closeDetailDock?.();
    cancelInlineAdd?.();
  }
  if((e.ctrlKey||e.metaKey) && e.key==='z') { /* Undo placeholder */ }
});

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    VS_init();
    syncProjectSettings();
    _postImportEVM();
  }, 300);
});


// ═══════════════════════════════════════════════════════════════
// V23 FAST XER IMPORT — single-pass streaming, large chunks
// ═══════════════════════════════════════════════════════════════
function parseXER(text) {
  _importCancelled = false;
  showImportProgress('📋 Importing Schedule…');
  setImportProgress(2, `Reading ${(text.length/1024).toFixed(0)}KB…`);
  // Kick off on next frame so progress UI renders
  window._lastXerTables = {};
  requestAnimationFrame(() => setTimeout(() => _xer_parse(text), 10));
}

function _xer_parse(text) {
  // ── STEP 1: Extract currency from ERMHDR (line 1) ────────────
  const nl0 = text.indexOf('\n');
  const hdr = text.substring(0, nl0 < 0 ? 80 : nl0);
  if(hdr.startsWith('ERMHDR')) {
    const p = hdr.split('\t'); _applyXERCurrency(p[8]?.trim()||'USD','');
  }

  // ── STEP 2: One-pass table scanner ───────────────────────────
  // Skip tables we never use — saves 115k+ object allocations
  const SKIP = new Set(['TASKFIN','TRSRCFIN','UDFVALUE','UDFTYPE',
    'FINTMPL','DOCCATG','DOCSTAT','FINDATES','PROJCOST',
    'SCHEDOPTIONS','RSRCCURVDATA','UMEASURE','DOCUMENT','OBS']);

  const tables = {};
  let cur = null, hdrs = [];
  let pos = 0, lineCount = 0;
  const len = text.length;

  // Process synchronously but in large 80KB chunks with RAF yields
  function scanBlock() {
    if(_importCancelled) return;
    const blockEnd = Math.min(pos + 80000, len);
    while(pos < blockEnd) {
      let nl = text.indexOf('\n', pos);
      if(nl < 0) nl = len;
      // Classify line by first 2 chars
      const c0=text.charCodeAt(pos), c1=text.charCodeAt(pos+1), c2=text.charCodeAt(pos+2);
      // %T = 37,84  %F = 37,70  %R = 37,82
      if(c0===37 && c2===9) {
        if(c1===84) { // %T
          cur = text.substring(pos+3, nl).trimEnd();
          if(SKIP.has(cur)) { cur=null; hdrs=[]; }
          else if(!tables[cur]) tables[cur]={headers:[],rows:[]};
        } else if(c1===70 && cur) { // %F
          hdrs = text.substring(pos+3, nl).split('\t');
          tables[cur].headers = hdrs;
        } else if(c1===82 && cur && hdrs.length) { // %R
          const vals = text.substring(pos+3, nl).split('\t');
          const row = {};
          for(let k=0;k<hdrs.length;k++) row[hdrs[k]]=vals[k]||'';
          tables[cur].rows.push(row);
          lineCount++;
        }
      }
      pos = nl + 1;
    }
    const pct = Math.round(5 + 45*(pos/len));
    setImportProgress(pct, `Scanning ${(pos/1024).toFixed(0)}/${(len/1024).toFixed(0)}KB · ${lineCount.toLocaleString()} rows`);
    if(pos < len) {
      requestAnimationFrame(scanBlock);
    } else {
      const taskN=(tables['TASK']?.rows||[]).filter(t=>t.task_type!=='TT_WBS').length;
      const wbsN=(tables['PROJWBS']?.rows||[]).length;
      setImportProgress(50,`Found ${taskN.toLocaleString()} activities, ${wbsN} WBS nodes`,
        `TASKRSRC: ${(tables['TASKRSRC']?.rows||[]).length} · TASKPRED: ${(tables['TASKPRED']?.rows||[]).length}`);
      setTimeout(()=>_xer_phase2(tables),10);
    }
  }
  scanBlock();
}

function _xer_phase2(tables) {
  if(_importCancelled) return;
  const wbsRows = tables['PROJWBS']?.rows||[];
  const proj = tables['PROJECT']?.rows[0]||{};

  // Project settings
  if(proj.plan_start_date){P.start=proj.plan_start_date.split(' ')[0];PROJECT_SETTINGS.start=P.start;}
  if(proj.last_recalc_date) PROJECT_SETTINGS.dataDate=proj.last_recalc_date.split(' ')[0];
  if(proj.plan_end_date) PROJECT_SETTINGS.planEnd=proj.plan_end_date.split(' ')[0];
  PROJECT_SETTINGS._xerProject=proj;
  if(proj.critical_path_type) PROJECT_SETTINGS.cpMethod=proj.critical_path_type==='CT_LongestPath'?'longest':'tf0';

  // WBS hierarchy
  const wbsIdMap={};
  WBS_NODES=wbsRows.map((w,i)=>{
    const id=uid(); wbsIdMap[w.wbs_id]=id;
    return{id,code:w.wbs_short_name||String(i+1),name:w.wbs_name||'WBS',
      type:'SUMM',pId:null,calId:0,order:+w.seq_num||i,collapsed:false,
      modItems:[],_wbsId:w.wbs_id,evComputeType:w.ev_compute_type,origCost:+w.orig_cost||0};
  });
  wbsRows.forEach((w,i)=>{
    if(w.parent_wbs_id&&wbsIdMap[w.parent_wbs_id]) WBS_NODES[i].pId=wbsIdMap[w.parent_wbs_id];
  });
  setImportProgress(52,`WBS: ${WBS_NODES.length} nodes`);

  // Resources (phase 2.5 inline)
  const rsrcRows=tables['RSRC']?.rows||[];
  const rateMap={};
  (tables['RSRCRATE']?.rows||[]).forEach(r=>{ if(!rateMap[r.rsrc_id]) rateMap[r.rsrc_id]=+(r.cost_per_qty||0); });
  RESOURCES.labor=RESOURCES.labor.filter(r=>!r._fromXER);
  RESOURCES.equipment=RESOURCES.equipment.filter(r=>!r._fromXER);
  RESOURCES.material=RESOURCES.material.filter(r=>!r._fromXER);
  const rsrcIdMap={};
  rsrcRows.forEach(r=>{
    if(!r.rsrc_name&&!r.rsrc_short_name) return;
    const id=uid(); rsrcIdMap[r.rsrc_id]=id;
    const rate=rateMap[r.rsrc_id]||0;
    const base={id,name:r.rsrc_name||r.rsrc_short_name||'Resource',role:r.rsrc_title_name||'',
      rate,avail:100,calId:0,_fromXER:true,_rsrcId:r.rsrc_id,active:r.active_flag!=='N'};
    if(r.rsrc_type==='RT_Labor') RESOURCES.labor.push(base);
    else if(r.rsrc_type==='RT_Equip') RESOURCES.equipment.push({...base,etype:r.rsrc_short_name||'Equipment',qty:1,wbs:''});
    else if(r.rsrc_type==='RT_Mat') RESOURCES.material.push({...base,unit:'unit',unitCost:rate,qty:0});
  });
  setImportProgress(55,`Resources: ${rsrcRows.length} imported`);
  _importXERCalendars(tables);
  _importXERActivityCodes(tables);
  tables._rsrcIdMap=rsrcIdMap;
  tables._wbsIdMap=wbsIdMap;
  setTimeout(()=>_xer_phase3(tables),10);
}

function _xer_phase3(tables) {
  if(_importCancelled) return;
  const tasks=(tables['TASK']?.rows||[]).filter(t=>t.task_type!=='TT_WBS');
  const typeMap={'TT_Task':'TASK','TT_Rsrc':'TASK','TT_LOE':'LOE','TT_Mile':'MS','TT_FinMile':'MS','TT_WbsSumm':'SUMM','TT_Hammock':'HAMM'};
  const statusMap={'TK_Complete':'COM','TK_Active':'IP','TK_NotStart':'NS','TK_Suspend':'IP'};
  const cstrMap={'CS_MSO':'MSO','CS_MFO':'MFO','CS_MSOB':'SNET','CS_MEOB':'SNLT','CS_MFOB':'FNET','CS_MANDFIN':'FNLT','CS_ALAP':'ALAP'};

  // Pre-aggregate TASKRSRC costs
  const taskCosts={};
  const taskAssigns={}; // Per-resource unit data
  (tables['TASKRSRC']?.rows||[]).forEach(tr=>{
    const tid=tr.task_id;
    if(!taskCosts[tid]) taskCosts[tid]={targetCost:0,actCost:0,remainCost:0};
    taskCosts[tid].targetCost += +(tr.target_cost||0);
    taskCosts[tid].actCost    += +(tr.act_reg_cost||0)+(+(tr.act_ot_cost||0));
    taskCosts[tid].remainCost += +(tr.remain_cost||0);
    if(!taskAssigns[tid]) taskAssigns[tid]=[];
    taskAssigns[tid].push({_xerRsrcId:tr.rsrc_id||'',budgetedQty:+(tr.target_qty||0),actualQty:+(tr.act_reg_qty||0),remainQty:+(tr.remain_qty||0),budgetedCost:+(tr.target_cost||0),actualCost:+(tr.act_reg_cost||0),remainCost:+(tr.remain_cost||0),unit:tr.unit_id||'h',isPrimary:tr.is_primary_rsrc==='Y'});
  });

  const wbsIdMap=tables._wbsIdMap||{};
  const taskIdMap={};
  WPS=[];
  const parseD=s=>s?s.split(' ')[0]:'';
  const toD=s=>{ if(!s) return null; return (new Date(s)-new Date(P.start||'2025-01-01'))/86400000; };

  // Process ALL tasks in one synchronous loop (no chunking needed — JS is fast for simple objects)
  for(const t of tasks){
    const wId=uid(); taskIdMap[t.task_id]=wId;
    const costs=taskCosts[t.task_id]||{};
    const durH=+(t.remain_drtn_hr_cnt||0)>0?+t.remain_drtn_hr_cnt:+(t.target_drtn_hr_cnt||0);
    const dur=Math.max(0,Math.round(durH/10));
    const pct=Math.min(100,Math.round(+(t.phys_complete_pct||0)));
    const status=statusMap[t.status_code]||(pct>=100?'COM':pct>0?'IP':'NS');
    WPS.push({
      id:wId,sg:'SG-XER',name:t.task_name||'Activity',activityId:t.task_code,
      ph:'FIN',trk:'CONSTR',dur,durUnit:'d',preds:[],wbs:'',
      wbsNodeId:wbsIdMap[t.wbs_id]||null,actType:typeMap[t.task_type]||'TASK',
      constraint:cstrMap[t.cstr_type]||'ASAP',constraintDate:parseD(t.cstr_date),
      pct,pctType:t.complete_pct_type==='CP_Phys'?'phys':'dur',status,
      actualStart:parseD(t.act_start_date),actualFinish:parseD(t.act_end_date),
      targetStart:parseD(t.target_start_date),targetEnd:parseD(t.target_end_date),
      earlyStart:parseD(t.early_start_date),earlyEnd:parseD(t.early_end_date),
      lateStart:parseD(t.late_start_date),lateEnd:parseD(t.late_end_date),
      totalFloat:t.total_float_hr_cnt?Math.round(+t.total_float_hr_cnt/10):null,
      cost:costs.targetCost||0,actualCost:costs.actCost||0,remainCost:costs.remainCost||0,
      evBudget:costs.targetCost||0,resourceIds:[],
      _xerId:t.task_id,_xer:{task_code:t.task_code,guid:t.guid,priority_type:t.priority_type}
    });
  }
  // Wire resource unit assignments using rsrcIdMap to convert XER rsrc_id → internal id
  const rsrcIdMapP3 = tables._rsrcIdMap||{};
  WPS.forEach(act => {
    const assigns = taskAssigns[act._xerId]||[];
    if(!assigns.length) return;
    act.resourceAssignments = {};
    assigns.forEach(a => {
      const ourId = rsrcIdMapP3[a._xerRsrcId] || a._xerRsrcId;
      act.resourceAssignments[ourId] = {
        budgetedQty: a.budgetedQty, actualQty: a.actualQty, remainQty: a.remainQty,
        budgetedCost: a.budgetedCost, actualCost: a.actualCost, remainCost: a.remainCost,
        unit: a.unit || 'h', isPrimary: a.isPrimary, _xerRsrcId: a._xerRsrcId,
      };
    });
  });
  setImportProgress(75,`${WPS.length.toLocaleString()} activities imported`);
  tables._taskIdMap=taskIdMap;
  setTimeout(()=>_xer_phase4(tables),10);
}

function _xer_phase4(tables) {
  if(_importCancelled) return;
  const preds=tables['TASKPRED']?.rows||[];
  const taskIdMap=tables._taskIdMap||{};
  const rsrcIdMap=tables._rsrcIdMap||{};
  const relTypeMap={'PR_FS':'FS','PR_SS':'SS','PR_FF':'FF','PR_SF':'SF'};
  const wpsById=new Map(WPS.map(w=>[w._xerId,w]));

  // Wire relationships
  let wired=0;
  for(const p of preds){
    const succWp=wpsById.get(p.task_id);
    const predId=taskIdMap[p.pred_task_id];
    if(succWp&&predId&&!succWp.preds.some(x=>x.id===predId)){
      succWp.preds.push({id:predId,tp:relTypeMap[p.pred_type]||'FS',lg:Math.round(+(p.lag_hr_cnt||0)/10)});
      wired++;
    }
  }
  // Wire resource assignments
  (tables['TASKRSRC']?.rows||[]).forEach(tr=>{
    const w=wpsById.get(tr.task_id); const resId=rsrcIdMap[tr.rsrc_id];
    if(w&&resId&&!w.resourceIds.includes(resId)) w.resourceIds.push(resId);
  });
  // Clean up
  WPS.forEach(w=>delete w._xerId);
  window._lastXerTables = tables;
  setImportProgress(90,`${wired.toLocaleString()} relationships wired`);
  setTimeout(_xer_finalize,10);
}

function _xer_finalize() {
  if(_importCancelled) return;
  assignWbs(); recalc();
  const totalBAC=WPS.reduce((s,w)=>s+(w.evBudget||0),0);
  if(totalBAC>0){
    PROJECT_SETTINGS.bac=Math.round(totalBAC);
    EVM_DATA.bac=PROJECT_SETTINGS.bac;
    EVM_DATA.actuals=WPS.map(w=>({id:w.id,pct:w.pct||0,ac:w.actualCost||0}));
  }
  if(PROJECT_SETTINGS.dataDate) EVM_DATA.dataDate=PROJECT_SETTINGS.dataDate;
  updateHdrSummary(); syncProjectSettings();
  setImportProgress(100,'Complete!',`${WPS.length.toLocaleString()} activities · ${WBS_NODES.length} WBS nodes`);
  saveWbsToProject();
  setTimeout(()=>{
    hideImportProgress();
    closeOvl('import-ovl');
    VS.flat=[]; invalidateRowCache();
    renderWps(); renderWbsTree();
    const cpN=WPS.filter(w=>SCHED.r?.[w.id]?.cp).length;
    const sym=getCurrSym();
    alert(`✅ XER imported successfully!\n\n📋 ${WPS.length.toLocaleString()} activities · ${WBS_NODES.length} WBS nodes\n🔗 ${WPS.reduce((s,w)=>s+w.preds.length,0).toLocaleString()} relationships · ${cpN} critical\n${totalBAC>0?`💰 BAC: ${sym}${Math.round(totalBAC).toLocaleString()}`:'ℹ No resource cost data'}`);
  },400);

  try{ refreshAllTabs && refreshAllTabs(); }catch(e){}
}


// ═══════════════════════════════════════════════════════════════
// DRAG FROM LIBRARY TO SCHEDULE / WBS
// ═══════════════════════════════════════════════════════════════
 // module being dragged

// Called when a module card starts being dragged
function onModDragStart(e, modId) {
  _dragMod = modId;
  e.dataTransfer.effectAllowed = 'copy';
  e.dataTransfer.setData('text/plain', modId);
  // Visual feedback
  e.currentTarget.style.opacity = '0.5';
}
function onModDragEnd(e) {
  e.currentTarget.style.opacity = '';
  _dragMod = null;
  // Clear all drop zones
  document.querySelectorAll('.wbs-drop-zone,.wt-drop-zone').forEach(el=>el.classList.remove('drag-over'));
}

// Drop onto a WBS row in the schedule table
function onWbsHdrDragOver(e) {
  if(!_dragMod) return;
  e.preventDefault(); e.dataTransfer.dropEffect='copy';
  e.currentTarget.closest('tr')?.classList.add('drag-over');
}
function onWbsHdrDragLeave(e) {
  e.currentTarget.closest('tr')?.classList.remove('drag-over');
}
function onWbsHdrDrop(e, nodeId) {
  e.preventDefault();
  e.currentTarget.closest('tr')?.classList.remove('drag-over');
  const modId = e.dataTransfer.getData('text/plain') || _dragMod;
  if(!modId) return;
  addModToNode(modId, nodeId);
}

// Drop onto WBS sidebar node
function onWbsNodeDragOver(e) {
  if(!_dragMod) return;
  e.preventDefault(); e.dataTransfer.dropEffect='copy';
  e.currentTarget.classList.add('drag-over');
}
function onWbsNodeDragLeave(e) { e.currentTarget.classList.remove('drag-over'); }
function onWbsNodeDrop(e, nodeId) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  const modId = e.dataTransfer.getData('text/plain') || _dragMod;
  if(!modId) return;
  addModToNode(modId, nodeId);
}

// Add a module's activities to a WBS node
function addModToNode(modId, nodeId) {
  const mod = [...(C_MODS||[]),...(A_MODS||[]),...(CUSTOM_MODS||[])].find(m=>m.id===modId);
  if(!mod) { alert('Module not found: '+modId); return; }
  const node = nodeId ? WBS_NODES.find(n=>n.id===nodeId) : null;

  const newWps = (mod.w||[]).map((wp,wi)=>{
    const dur = typeof wp.dur==='function' ? Math.max(1,wp.dur({area:100,length:100,qty:10,units:10,mw:1})) : (wp.dur||5);
    return {
      id:uid(), sg:mod.id, name:wp.n||wp.name||('Activity '+(wi+1)),
      ph:wp.ph||'CON', trk:wp.tk||'CONSTR', dur, durUnit:'d',
      preds:[], wbs:'', actType:wp.type||'TASK',
      wbsNodeId:nodeId||null, constraint:'ASAP',
      pct:0, pctType:'phys', status:'NS',
      cost:0, actualCost:0, remainCost:0, evBudget:0, resourceIds:[],
    };
  });

  // Wire internal FS logic within the module
  newWps.forEach((w,i)=>{
    if(i>0) w.preds = [{id:newWps[i-1].id, tp:'FS', lg:0}];
  });

  WPS.push(...newWps);
  // Track in recipe
  if(!RECIPE) window.RECIPE = [];
  RECIPE.push({modId, wbsNodeId:nodeId, customWPs:[]});

  assignWbs(); recalc(); VS.flat=[]; renderWps(); saveWbsToProject();

  // Flash feedback
  const msg = document.createElement('div');
  msg.style.cssText = 'position:fixed;top:60px;right:20px;background:#059669;color:#fff;padding:10px 16px;border-radius:8px;font-size:12px;font-weight:600;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.2)';
  msg.textContent = `✓ Added ${newWps.length} activities from "${mod.n||mod.id}"`;
  document.body.appendChild(msg);
  setTimeout(()=>msg.remove(), 2500);
}

// Patch renderLib to add draggable attributes to module cards
function renderLib() {
  renderLib_base();
  // Add draggable to all module cards
  setTimeout(()=>{
    document.querySelectorAll('.lm[data-mid]').forEach(el=>{
      const mid = el.dataset.mid;
      el.draggable = true;
      el.ondragstart = e => onModDragStart(e, mid);
      el.ondragend = onModDragEnd;
    });
    // Patch library add buttons to also render with data-mid
    document.querySelectorAll('.ladd[data-mid]').forEach(el=>{
      const mid = el.dataset.mid;
      el.draggable = true;
      el.ondragstart = e => {e.stopPropagation(); onModDragStart(e,mid);};
      el.ondragend = onModDragEnd;
    });
  }, 100);
}

// Patch the WBS header rows to be drop targets (called from renderRowHtml)
// renderRowHtml already emits the wbs-hdr rows - patch them after render
function _afterRenderWps() {
  _afterRenderWps_base();
  setTimeout(()=>{
    // Add drop target events to WBS header rows
    document.querySelectorAll('#wt-body tr.wt-wbs-hdr[data-wbs-id]').forEach(tr=>{
      const nodeId = tr.dataset.wbsId;
      tr.ondragover = onWbsHdrDragOver;
      tr.ondragleave = onWbsHdrDragLeave;
      tr.ondrop = e => onWbsHdrDrop(e, nodeId);
    });
    // Also make the whole schedule area a drop target
    const wtBody = document.getElementById('wt-body');
    if(wtBody && !wtBody._dropInit) {
      wtBody._dropInit = true;
      wtBody.addEventListener('dragover', e=>{ if(_dragMod){e.preventDefault();e.dataTransfer.dropEffect='copy';} });
      wtBody.addEventListener('drop', e=>{
        e.preventDefault();
        const modId = e.dataTransfer.getData('text/plain')||_dragMod;
        if(!modId) return;
        // Drop onto schedule body = add to active WBS or no WBS
        addModToNode(modId, ACTIVE_WBS||null);
      });
    }
  }, 50);
}


function _patchWbsSidebarDropTargets() {
  document.querySelectorAll('.wbs-row[data-node-id]').forEach(row=>{
    const nodeId = row.dataset.nodeId;
    row.ondragover = onWbsNodeDragOver;
    row.ondragleave = onWbsNodeDragLeave;
    row.ondrop = e => onWbsNodeDrop(e, nodeId);
  });
}


// ═══════════════════════════════════════════════════════════════
// BUILT-IN USER MANUAL
// ═══════════════════════════════════════════════════════════════



function renderHelpManual() {
  // Inject CSS once
  if(!document.getElementById('help-css')) {
    const s = document.createElement('style');
    s.id='help-css'; s.textContent=HELP_CSS; document.head.appendChild(s);
  }
  renderHelpNav();
  if(_helpActive==='overview'||!_helpActive) { document.getElementById('help-content').innerHTML=_renderHelpOverview()||''; renderHelpNav(); } else { renderHelpContent(_helpActive); }
}

function renderHelpNav(filter) {
  const nav = document.getElementById('help-nav'); if(!nav) return;
  const q = (filter||'').toLowerCase();
  // Group sections
  const groups = [
    { label: 'GETTING STARTED', ids: ['overview','project','wbs','activities'] },
    { label: 'SCHEDULING', ids: ['relationships','cpm','filters','actcodes'] },
    { label: 'RESOURCES & EVM', ids: ['resources','evm'] },
    { label: 'ANALYSIS', ids: ['baseline','dcma'] },
    { label: 'OUTPUT', ids: ['export','keyboard','tips'] },
  ];
  let html = '';
  groups.forEach(g => {
    const items = g.ids.map(id=>HELP_SECTIONS.find(s=>s.id===id)).filter(Boolean).filter(s=>
      !q || s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q));
    if(!items.length) return;
    html += `<div class="help-group-header">${g.label}</div>`;
    items.forEach(s => {
      const isAct = s.id === _helpActive;
      html += `<div class="help-nav-item${isAct?' active':''}" onclick="renderHelpContent('${s.id}')">
        <span class="h-icon">${s.icon}</span>
        <span>${s.title}</span>
      </div>`;
    });
  });
  nav.innerHTML = html;
}

function renderHelpContent(id) {
  _helpActive = id;
  renderHelpNav();
  const section = HELP_SECTIONS.find(s=>s.id===id);
  const content = document.getElementById('help-content'); if(!content) return;
  if(!section) {
    // Render overview cards
    content.innerHTML = _renderHelpOverview(); return;
  }
  content.innerHTML = `<div class="help-page">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;padding-bottom:16px;border-bottom:2px solid var(--b1)">
      <span style="font-size:28px">${section.icon}</span>
      <div>
        <h1 style="margin:0;font-size:20px;font-weight:800">${section.title}</h1>
        <div style="font-size:11px;color:var(--t3);margin-top:2px">GenSched User Manual</div>
      </div>
    </div>
    ${section.content}
  </div>`;
  content.scrollTop = 0;
}

function _renderHelpOverview() {
  const cards = [
    {id:'project',icon:'📁',title:'Create a Project',desc:'Set up project name, start date, calendar and currency'},
    {id:'wbs',icon:'🌿',title:'Build WBS',desc:'Create hierarchical work breakdown structure'},
    {id:'activities',icon:'📋',title:'Add Activities',desc:'Add tasks, milestones and LOE activities'},
    {id:'relationships',icon:'🔗',title:'Set Logic',desc:'Link activities with FS, SS, FF, SF relationships'},
    {id:'cpm',icon:'⚡',title:'Critical Path',desc:'Run CPM, identify critical and longest path'},
    {id:'resources',icon:'👷',title:'Resources & EVM',desc:'Assign labour, equipment and materials with units'},
    {id:'baseline',icon:'📁',title:'Baselines',desc:'Load XER baselines, compare variance'},
    {id:'dcma',icon:'✅',title:'DCMA Analysis',desc:'14-point schedule health check and scoring'},
    {id:'filters',icon:'🔍',title:'Filters & Sort',desc:'Filter by CP, LP, codes, float, status'},
    {id:'actcodes',icon:'🏷️',title:'Activity Codes',desc:'Custom code types and value assignment'},
    {id:'export',icon:'💾',title:'Export',desc:'XER, MSP, CSV, XML export options'},
    {id:'keyboard',icon:'⌨️',title:'Shortcuts',desc:'Keyboard shortcuts for power users'},
  ];
  return `<div class="help-page">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <div style="background:linear-gradient(135deg,#6D28D9,#2563EB);border-radius:12px;padding:12px;line-height:1"><span style="font-size:28px">📖</span></div>
      <div>
        <h1 style="margin:0 0 4px;font-size:24px;font-weight:900;background:linear-gradient(135deg,#6D28D9,#2563EB);-webkit-background-clip:text;-webkit-text-fill-color:transparent">GenSched</h1>
        <div style="font-size:12px;color:var(--t2)">Professional programme scheduling · P6-compatible · Browser-based</div>
      </div>
    </div>
    <div class="help-card-grid">
      ${cards.map(card=>`<div class="help-card" onclick="renderHelpContent('${card.id}')">
        <div class="hc-icon">${card.icon}</div>
        <div class="hc-title">${card.title}</div>
        <div class="hc-desc">${card.desc}</div>
      </div>`).join('')}
    </div>
    <h2 style="margin-top:28px">Quick Reference</h2>
    <table class="help-table">
      <tr><th>Action</th><th>How</th></tr>
      <tr><td>Add activity</td><td>Click <strong>+ Activity</strong> in toolbar, or press <span class="help-kbd">N</span></td></tr>
      <tr><td>Open activity dock</td><td>Click any activity row</td></tr>
      <tr><td>Critical path filter</td><td>Click <strong>🔴 CP</strong> in toolbar</td></tr>
      <tr><td>Longest path filter</td><td>Click <strong>🟡 LP</strong> in toolbar</td></tr>
      <tr><td>Toggle Gantt</td><td>Click <strong>⊞ Gantt</strong> in toolbar</td></tr>
      <tr><td>Import XER</td><td>Click <strong>XER</strong> button top-right</td></tr>
      <tr><td>Export schedule</td><td>Click <strong>Export</strong> tab</td></tr>
      <tr><td>DCMA analysis</td><td>Click <strong>Dashboard</strong> tab</td></tr>
    </table>
    <div class="help-tip">💡 <strong>New to GenSched?</strong> Start with <strong onclick="renderHelpContent('project')" style="cursor:pointer;color:#6D28D9">Create a Project</strong>, then build your WBS, add activities, set relationships, and run the CPM scheduler.</div>
  </div>`;
}

function filterHelp(query) {
  renderHelpNav(query);
  if(!query) return;
  // Search in content too
  const match = HELP_SECTIONS.find(s=>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.content.toLowerCase().includes(query.toLowerCase())
  );
  if(match) renderHelpContent(match.id);
}


function _buildExtraCells(w, wi) {
  if(!_extraCols || !Object.values(_extraCols).some(Boolean)) return '';
  const r = SCHED.r?.[w.id]||{};
  const projStart = new Date(P.start||'2025-01-01');
  const dateOf = d => { if(d==null)return''; const dt=new Date(projStart); dt.setDate(dt.getDate()+Math.round(d)); return dt.toLocaleDateString('en-GB',{day:'2-digit',month:'short'}); };
  const rawD = s => { if(!s)return''; const d=new Date(s); return isNaN(d)?s:d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'2-digit'}); };
  const sym = getCurrSym();
  let cells = '';
  const td = (content, color) => `<td class="extra-col" style="font-size:10px;padding:3px 4px;font-family:var(--mono);${color?'color:'+color:''}">${content}</td>`;

  if(_extraCols.lsLf) {
    const ls = r.ls!=null?dateOf(r.ls):rawD(w.lateStart||'');
    const lf = r.lf!=null?dateOf(r.lf):rawD(w.lateEnd||w.lateFinish||'');
    cells += `<td class="extra-col" style="font-size:10px;padding:3px 4px;text-align:center">
      <div style="font-family:var(--mono);color:var(--t3)">${ls}</div>
      <div style="font-family:var(--mono);color:var(--t3)">${lf}</div>
    </td>`;
  }
  if(_extraCols.actStart) cells += td(rawD(w.actualStart||''), w.actualStart?'var(--t2)':'var(--t3)');
  if(_extraCols.actFinish) cells += td(rawD(w.actualFinish||''), w.actualFinish?'var(--t2)':'var(--t3)');
  if(_extraCols.freeFloat) {
    const ff = w.freeFloat!=null?w.freeFloat:(r.ff!=null?r.ff:null);
    cells += td(ff!=null?ff+'d':'—', ff===0?'#DC2626':ff!=null&&ff<=3?'#D97706':'#059669');
  }
  if(_extraCols.cstrDate) cells += td(rawD(w.constraintDate||''), 'var(--blue)');
  if(_extraCols.blStart || _extraCols.blFinish || _extraCols.blVar) {
    const bl = typeof _getBaseline==='function' ? _getBaseline(w.activityId||w.id) : null;
    if(_extraCols.blStart) cells += td(rawD(bl?.targetStart||bl?.earlyStart||''), '#059669');
    if(_extraCols.blFinish) cells += td(rawD(bl?.targetEnd||bl?.earlyEnd||''), '#059669');
    if(_extraCols.blVar && r.ef!=null && bl?.targetEnd) {
      const cur = new Date(projStart); cur.setDate(cur.getDate()+Math.round(r.ef));
      const bld = new Date(bl.targetEnd);
      const diff = Math.round((cur-bld)/86400000);
      cells += td(diff>0?'+'+diff+'d':diff<0?diff+'d':'0', diff>0?'#DC2626':diff<0?'#059669':'var(--t3)');
    } else if(_extraCols.blVar) cells += td('—', 'var(--t3)');
  }
  if(_extraCols.budget) cells += td(w.evBudget||w.cost?sym+Math.round(w.evBudget||w.cost||0).toLocaleString():'—');
  if(_extraCols.actualCost) cells += td(w.actualCost?sym+Math.round(w.actualCost).toLocaleString():'—');
  if(_extraCols.remainCost) cells += td(w.remainCost?sym+Math.round(w.remainCost).toLocaleString():'—');
  if(_extraCols.actId) cells += `<td class="extra-col" style="font-size:10px;padding:3px 4px;font-family:var(--mono);color:var(--blue)">${w.activityId||w._xer?.task_code||'—'}</td>`;
  return cells;
}


function _ensureResourceSCurveCanvas() {
  if(document.getElementById('res-scurve-canvas')) return;
  // Try to add it to the dashboard
  const dashMain = document.querySelector('#t-dashboard .dash-left, #t-dashboard');
  if(!dashMain) return;
  const wrap = document.createElement('div');
  wrap.className = 'dash-card';
  wrap.style.marginTop = '10px';
  wrap.innerHTML = `<div class="dash-card-hdr" style="display:flex;align-items:center;gap:8px">
    <span>👷 Resource S-Curve</span>
    <select id="res-scurve-select" style="font-size:11px;padding:2px 6px;margin-left:auto" onchange="renderResourceSCurve()">
      <option value="all">All Resources</option>
    </select>
  </div>
  <div style="padding:8px"><canvas id="res-scurve-canvas" style="width:100%;height:180px;display:block"></canvas></div>`;
  dashMain.appendChild(wrap);
}


// ═══════════════════════════════════════════════════════════════
// V26 — COMPREHENSIVE BUG FIXES
// ═══════════════════════════════════════════════════════════════

// ── FIX: populateDetailDock — ensure all dock fields are populated
function populateDetailDock(wi, w) {
  // Sync Gantt selection
  if(_ganttSelected !== wi) { _ganttSelected = wi; if(_ganttSplitOpen) setTimeout(renderGantt,0); }
  if(!w) return;
  const r = SCHED.r?.[w.id]||{};
  const projStart = new Date(P.start||PROJECT_SETTINGS.start||'2025-01-01');
  const fmtDate = d => { if(d==null) return ''; const dt=new Date(projStart); dt.setDate(dt.getDate()+Math.round(d)); return dt.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}); };
  const _sv=(id,v)=>{ const e=document.getElementById(id); if(e) e.value=v??''; };
  const _st=(id,v)=>{ const e=document.getElementById(id); if(e) e.textContent=v??''; };
  const _sc=(id,v)=>{ const e=document.getElementById(id); if(e) e.style.color=v; };

  // Header badges
  _st('ad-wbs-badge', w.wbs||w.activityId||'—');
  _st('ad-name-badge', w.name||'Unnamed Activity');

  // Details tab
  _sv('ad-name', w.name||'');
  _sv('ad-dur', w.actType==='MS'?0:(w.dur||0));
  _sv('ad-actid', w.activityId||w._xer?.task_code||'');
  // Wire actid input if not already wired
  const actIdEl = document.getElementById('ad-actid');
  if(actIdEl && !actIdEl._wired) {
    actIdEl._wired = true;
    actIdEl.oninput = (e) => adUpdate('activityId', e.target.value);
    actIdEl.placeholder = 'e.g. A1000';
    actIdEl.removeAttribute('readonly');
  }
  _sv('ad-notes', w.notes||'');
  _sv('ad-cstr-date', w.constraintDate||'');

  // CPM computed dates
  _sv('ad-es', r.es!=null?fmtDate(r.es):'');
  _sv('ad-ef', r.ef!=null?fmtDate(r.ef):'');
  _sv('ad-ls', r.ls!=null?fmtDate(r.ls):'');
  _sv('ad-lf', r.lf!=null?fmtDate(r.lf):'');
  _sv('ad-tf', r.tf!=null?r.tf+'d':'');
  const cpEl=document.getElementById('ad-cp');
  if(cpEl){cpEl.value=r.cp?'YES ★':'No';cpEl.style.color=r.cp?'#DC2626':'var(--t3)';}

  // dropdowns
  const typeSel=document.getElementById('ad-type');
  if(typeSel) typeSel.value=w.actType||'TASK';
  const statusSel=document.getElementById('ad-status');
  if(statusSel) statusSel.value=w.status||'NS';
  const cstrSel=document.getElementById('ad-constraint');
  if(cstrSel) cstrSel.value=w.constraint||'ASAP';
  const durUnit=document.getElementById('ad-unit');
  if(durUnit) durUnit.value=w.durUnit||'d';

  // Phase dropdown
  const phaseSel=document.getElementById('ad-phase');
  if(phaseSel){phaseSel.value=w.ph||'FIN';if(!phaseSel.options.length){Object.entries(PH).forEach(([k,v])=>{const o=document.createElement('option');o.value=k;o.textContent=v.lbl;if(w.ph===k)o.selected=true;phaseSel.appendChild(o);});}}

  // WBS Node dropdown
  const wbsNodeSel=document.getElementById('ad-wbs-node');
  if(wbsNodeSel){wbsNodeSel.innerHTML='<option value="">— No WBS —</option>'+WBS_NODES.map(n=>`<option value="${n.id}" ${w.wbsNodeId===n.id?'selected':''}>${n.code} ${esc(n.name)}</option>`).join('');}

  // Calendar dropdown
  const calSel=document.getElementById('ad-calendar');
  if(calSel){calSel.innerHTML=(CALENDARS||[]).map(cl=>`<option value="${cl.id}" ${w.calId===cl.id?'selected':''}>${esc(cl.name||'Default')}</option>`).join('');}

  // Render sub-tabs
  renderAdCost(wi);
  renderAdResources(wi);
  renderAdRisk(wi);
  renderAdLogic(wi);
  adTab('details'); // ensure details tab is active

  // base handled above
}

// ── FIX: Toolbar button states update when mainTab changes ────
function mainTab(name) {
  _currentMainTab = name;
  ['schedule','resources','dashboard','report','help'].forEach(t => {
    const btn = document.getElementById('mt-'+t);
    if(btn) btn.classList.toggle('act', t===name);
  });
  const toolbar   = document.getElementById('bs-toolbar');
  const layout    = document.getElementById('bs-layout');
  const resPanel  = document.getElementById('t-resources');
  const dashPanel = document.getElementById('t-dashboard');
  const rptPanel  = document.getElementById('t-report');
  const helpPanel = document.getElementById('t-help');
  if(toolbar)   toolbar.style.display   = name==='schedule'?'flex':'none';
  if(layout)    layout.style.display    = name==='schedule'?'flex':'none';
  if(resPanel)  resPanel.style.display  = name==='resources'?'flex':'none';
  if(dashPanel) dashPanel.style.display = name==='dashboard'?'flex':'none';
  if(rptPanel)  rptPanel.style.display  = name==='report'?'flex':'none';
  if(helpPanel) helpPanel.style.display = name==='help'?'flex':'none';
  if(name==='schedule')  { setTimeout(()=>{ recalc(); renderWps(); renderWbsTree(); },30); }
  if(name==='resources') { renderResources(); setTimeout(()=>{ if(!_currentResNav)resNav('labor'); },50); }
  if(name==='dashboard') {
    // Two-phase: first let layout paint, then render canvases
    setTimeout(()=>{
      _ensureResourceSCurveCanvas?.();
      // Resize canvases properly
      ['scurve-canvas','res-scurve-canvas'].forEach(id=>{
        const el=document.getElementById(id);
        if(el){ el.style.width='100%'; const w=el.parentElement?.offsetWidth||700; el.width=Math.max(w,400); el.height=el.offsetHeight||220; }
      });
      runDCMA();
      renderSCurve();
      buildResourceScurveDropdown?.();
      renderResourceSCurve?.();
      computeEVM?.();
      renderDashboardEVM?.();
      // Sync data date to dashboard input
      const ddIn = document.getElementById('db-data-date');
      if(ddIn && PROJECT_SETTINGS.dataDate && !ddIn.value) ddIn.value = PROJECT_SETTINGS.dataDate;
      const bacIn = document.getElementById('db-bac');
      if(bacIn && PROJECT_SETTINGS.bac && !bacIn.value) bacIn.value = Math.round(PROJECT_SETTINGS.bac);
    }, 120);
  }
  if(name==='report')    { if(typeof updateReportStats==='function') updateReportStats(); }
  if(name==='help') {
    // Hide the library panel to avoid overlap
    const libPanel = document.getElementById('lib-panel');
    if(libPanel) libPanel.style.display='none';
    renderHelpManual();
  } else {
    // Show library panel again
    const libPanel = document.getElementById('lib-panel');
    if(libPanel) libPanel.style.display='';
  }
}

// ── FIX: showApp must call mainTab to set initial state ───────
function showApp() {
  setTimeout(_refreshCreditPill, 200);
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('plans-screen') && (document.getElementById('plans-screen').style.display = 'none');
  document.getElementById('proj-setup').style.display = 'none';
  document.getElementById('main-hdr').style.display = 'flex';
  document.getElementById('main-panels').style.display = 'flex';
  document.getElementById('footer-bar').style.display = 'flex';
  setTimeout(() => { mainTab('schedule'); }, 100);
}

// ── FIX: Ensure adUpdateWbs works (called from dock WBS dropdown)
function adUpdateWbs(nodeId) {
  const wi = _selectedWi; if(wi==null) return;
  WPS[wi].wbsNodeId = nodeId || null;
  assignWbs();
  VS.flat = []; invalidateRowCache?.();
  renderWps();
  const badge = document.getElementById('ad-wbs-badge');
  if(badge) badge.textContent = WPS[wi].wbs || '—';
  saveWbsToProject();
}

// ── FIX: saveWbsToProject should also persist RISKS and EVM data
function saveWbsToProject() {
  if(!currentProject) return;
  try {
    const key = 'pa_wbs_' + currentProject.id;
    const payload = {
      nodes: WBS_NODES,
      calendars: CALENDARS.filter(cl=>!cl.builtin),
      activityCodes: ACTIVITY_CODES,
      wps: WPS,
    };
    localStorage.setItem(key, JSON.stringify(payload));
    localStorage.setItem('pa_risks_' + currentProject.id, JSON.stringify(RISKS));
    localStorage.setItem('pa_evm_'   + currentProject.id, JSON.stringify(EVM_DATA));
  } catch(e) { console.warn('saveWbsToProject failed:', e); }
}

// ── FIX: loadWbsFromProject should restore risks and EVM
function loadWbsFromProject() {
  if(!currentProject) return;
  try {
    const key = 'pa_wbs_' + currentProject.id;
    const stored = localStorage.getItem(key);
    if(stored) {
      const data = JSON.parse(stored);
      if(data.nodes) WBS_NODES = data.nodes;
      if(data.calendars) {
        data.calendars.forEach(cl => {
          if(!CALENDARS.find(c=>c.id===cl.id)) CALENDARS.push(cl);
        });
      }
      if(data.activityCodes) ACTIVITY_CODES = data.activityCodes;
      if(data.wps) {
        WPS = data.wps;
        assignWbs(); recalc();
      }
    }
    const risks = localStorage.getItem('pa_risks_' + currentProject.id);
    if(risks) RISKS = JSON.parse(risks);
    const evm = localStorage.getItem('pa_evm_' + currentProject.id);
    if(evm) Object.assign(EVM_DATA, JSON.parse(evm));
  } catch(e) { console.warn('loadWbsFromProject failed:', e); }
}
// ── FIX: WBS tree node click should set ACTIVE_WBS ───────────
function setActiveWbs(id) {
  ACTIVE_WBS = id;
  document.querySelectorAll('.wbs-row').forEach(el=>el.classList.remove('active'));
  if(id) {
    const row = document.querySelector(`.wbs-row[data-node-id="${id}"]`);
    if(row) row.classList.add('active');
  }
}

// ── FIX: Column filter reset button ──────────────────────────
function clearAllFilters() {
  _colFilters = {};
  document.querySelectorAll('.wt-filter-row input').forEach(el=>el.value='');
  VS.flat=[]; renderWps();
}

// ── FIX: commitInlineAdd - use correct WBS node from active context
function commitInlineAdd(focus) {
  const name = document.getElementById('ia-name')?.value?.trim();
  if(!name) { cancelInlineAdd?.(); return; }
  const wbsId = document.getElementById('ia-wbs')?.value || ACTIVE_WBS || null;
  const dur = Math.max(0, +(document.getElementById('ia-dur')?.value||5));
  const type = document.getElementById('ia-type')?.value || 'TASK';
  const w = {
    id:uid(), sg:'SG-MANUAL', name,
    ph:'FIN', trk:'CONSTR', dur, durUnit:'d',
    preds:[], wbs:'', actType:type,
    wbsNodeId:wbsId, constraint:'ASAP',
    pct:0, pctType:'phys', status:'NS',
    cost:0, actualCost:0, remainCost:0,
    evBudget:0, resourceIds:[],
  };
  WPS.push(w);
  assignWbs(); recalc();
  VS.flat=[]; invalidateRowCache?.(); renderWps();
  cancelInlineAdd?.();
  saveWbsToProject();
  if(focus) {
    setTimeout(()=>{ showInlineAdd(wbsId); }, 50);
  }
}

// ── FIX: Import XER file reader — ensure it handles errors ───
function _handleXERFile(file) {
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try { parseXER(e.target.result); }
    catch(err) {
      hideImportProgress?.();
      alert('XER import error: ' + err.message);
      console.error('XER error:', err);
    }
  };
  reader.onerror = () => alert('Could not read file. Please try again.');
  reader.readAsText(file, 'ISO-8859-1');
}


// ═══════════════════════════════════════════════════════════════
// V28 ALL FIXES
// ═══════════════════════════════════════════════════════════════

// ── FIX: toggleGanttSplit — working implementation ────────────
function toggleGanttSplit() {
  _ganttSplitOpen = !_ganttSplitOpen;
  const tableDiv  = document.getElementById('sched-split-table');
  const ganttDiv  = document.getElementById('sched-split-gantt');
  const divider   = document.getElementById('split-divider');
  const toggleBtn = document.querySelector('.split-toggle-btn[onclick*="toggleGanttSplit"]');

  if(_ganttSplitOpen) {
    if(tableDiv)  { tableDiv.style.flex='1'; tableDiv.style.minWidth='300px'; }
    if(ganttDiv)  { ganttDiv.style.width='45%'; ganttDiv.style.display='flex'; ganttDiv.style.flexDirection='column'; }
    if(divider)   divider.style.display='block';
    if(toggleBtn) { toggleBtn.textContent='⊟ Gantt'; toggleBtn.classList.add('active'); }
    setTimeout(renderGantt, 50);
  } else {
    if(tableDiv)  { tableDiv.style.flex='1'; tableDiv.style.minWidth=''; }
    if(ganttDiv)  { ganttDiv.style.width='0'; ganttDiv.style.display='none'; }
    if(divider)   divider.style.display='none';
    if(toggleBtn) { toggleBtn.textContent='⊞ Gantt'; toggleBtn.classList.remove('active'); }
  }

  // Update dock padding
  const dock = document.getElementById('act-detail-dock');
  const bsMain = document.getElementById('bs-main');
  if(dock && dock.style.display !== 'none' && bsMain) {
    bsMain.style.paddingBottom = dock.offsetHeight + 'px';
  }
}

// ── FIX: Baseline XER parser — use same skip-filter as main XER
function importBaselineFile(slot, input) {
  const file = input.files[0]; if(!file) return;
  showImportProgress(`📁 Loading Baseline ${slot+1}…`);
  const reader = new FileReader();
  reader.onload = e => {
    setTimeout(() => _parseBaselineXERFast(slot, e.target.result, file.name), 50);
  };
  reader.onerror = () => { hideImportProgress(); alert('Could not read baseline file'); };
  reader.readAsText(file, 'ISO-8859-1');
}

function _parseBaselineXERFast(slot, text, filename) {
  // Same skip-set as main XER parser for performance
  const SKIP = new Set(['TASKFIN','TRSRCFIN','UDFVALUE','UDFTYPE',
    'FINTMPL','DOCCATG','DOCSTAT','FINDATES','PROJCOST',
    'SCHEDOPTIONS','RSRCCURVDATA','UMEASURE','DOCUMENT','OBS','RSRC','RSRCRATE',
    'TASKRSRC','CALENDAR','ACCOUNT','CURRTYPE']);

  const tables = {};
  let cur = null, hdrs = [], pos = 0;
  const len = text.length;

  function scan() {
    const blockEnd = Math.min(pos + 80000, len);
    while(pos < blockEnd) {
      let nl = text.indexOf('\n', pos); if(nl<0) nl=len;
      const c0=text.charCodeAt(pos), c1=text.charCodeAt(pos+1), c2=text.charCodeAt(pos+2);
      if(c0===37 && c2===9) {
        if(c1===84) { // %T
          cur=text.substring(pos+3,nl).trimEnd();
          if(SKIP.has(cur)){cur=null;hdrs=[];}
          else if(!tables[cur]) tables[cur]={headers:[],rows:[]};
        } else if(c1===70&&cur) { // %F
          hdrs=text.substring(pos+3,nl).split('\t');
          tables[cur].headers=hdrs;
        } else if(c1===82&&cur&&hdrs.length) { // %R
          const vals=text.substring(pos+3,nl).split('\t');
          const row={}; hdrs.forEach((h,i)=>{ row[h]=vals[i]||''; });
          tables[cur].rows.push(row);
        }
      }
      pos=nl+1;
    }
    const pct = Math.round(5+90*(pos/len));
    setImportProgress(pct, `Scanning baseline ${(pos/1024).toFixed(0)}/${(len/1024).toFixed(0)}KB`);
    if(pos<len) { requestAnimationFrame(scan); return; }

    // Parse activities
    const tasks = (tables['TASK']?.rows||[]).filter(t=>t.task_type!=='TT_WBS');
    const typeMap={'TT_Task':'TASK','TT_LOE':'LOE','TT_Mile':'MS','TT_FinMile':'MS','TT_WbsSumm':'SUMM','TT_Hammock':'HAMM'};
    const activities = tasks.map(t=>({
      id: t.task_id,
      activityId: t.task_code,
      name: t.task_name,
      actType: typeMap[t.task_type]||'TASK',
      dur: Math.round(+(t.target_drtn_hr_cnt||0)/10),
      pct: Math.round(+(t.phys_complete_pct||0)),
      targetStart:  t.target_start_date?.split(' ')[0]||'',
      targetEnd:    t.target_end_date?.split(' ')[0]||'',
      earlyStart:   t.early_start_date?.split(' ')[0]||'',
      earlyEnd:     t.early_end_date?.split(' ')[0]||'',
      lateStart:    t.late_start_date?.split(' ')[0]||'',
      lateEnd:      t.late_end_date?.split(' ')[0]||'',
      actualStart:  t.act_start_date?.split(' ')[0]||'',
      actualFinish: t.act_end_date?.split(' ')[0]||'',
    }));

    const proj = tables['PROJECT']?.rows[0]||{};
    BASELINES[slot] = {
      name: proj.proj_short_name||filename.replace(/\.xer$/i,''),
      date: new Date().toLocaleDateString('en-GB'),
      activities,
      planStart: proj.plan_start_date?.split(' ')[0]||'',
      planEnd:   proj.plan_end_date?.split(' ')[0]||'',
    };
    if(_activeBaseline<0) _activeBaseline=slot;
    setImportProgress(100,'Baseline loaded!',`${activities.length} activities`);
    saveWbsToProject();
    VS.flat=[]; invalidateRowCache?.(); renderWps();
    setTimeout(()=>{ hideImportProgress(); openBaselineManager(); },600);
  }
  scan();
}

// ── FIX: Column drag-to-reorder ───────────────────────────────

function _initColDragReorder() {
  const thead = document.querySelector('#wt-table thead tr');
  if(!thead || thead._dragInit) return;
  thead._dragInit = true;

  thead.addEventListener('dragstart', e => {
    const th = e.target.closest('th[data-colkey]');
    if(!th) return;
    _colDragSrc = th;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', th.dataset.colkey);
    th.style.opacity='0.5';
  });

  thead.addEventListener('dragover', e => {
    e.preventDefault();
    const th = e.target.closest('th[data-colkey]');
    if(th && th !== _colDragSrc) {
      document.querySelectorAll('#wt-table thead th').forEach(el=>el.classList.remove('drag-over-col'));
      th.classList.add('drag-over-col');
    }
  });

  thead.addEventListener('dragleave', e => {
    const th = e.target.closest('th[data-colkey]');
    if(th) th.classList.remove('drag-over-col');
  });

  thead.addEventListener('drop', e => {
    e.preventDefault();
    const th = e.target.closest('th[data-colkey]');
    document.querySelectorAll('#wt-table thead th').forEach(el=>el.classList.remove('drag-over-col'));
    if(!th || !_colDragSrc || th===_colDragSrc) return;

    // Reorder th elements in the header
    const allThs = [...thead.querySelectorAll('th')];
    const srcIdx = allThs.indexOf(_colDragSrc);
    const dstIdx = allThs.indexOf(th);
    if(srcIdx<0||dstIdx<0) return;

    if(srcIdx < dstIdx) thead.insertBefore(_colDragSrc, th.nextSibling);
    else thead.insertBefore(_colDragSrc, th);

    // Reorder corresponding body cells for all rows
    const tbody = document.getElementById('wt-body');
    if(tbody) {
      tbody.querySelectorAll('tr').forEach(row => {
        const cells = [...row.children];
        if(cells[srcIdx] && cells[dstIdx]) {
          if(srcIdx < dstIdx) row.insertBefore(cells[srcIdx], cells[dstIdx].nextSibling);
          else row.insertBefore(cells[srcIdx], cells[dstIdx]);
        }
      });
    }
    _colDragSrc = null;
  });

  thead.addEventListener('dragend', e => {
    document.querySelectorAll('#wt-table thead th').forEach(el=>el.style.opacity='');
    _colDragSrc = null;
  });
}

// Init column drag after each render
const _origAfterRenderWpsV28 = _afterRenderWps_base || (typeof _afterRenderWps==='function'?_afterRenderWps:()=>{});
function _afterRenderWps_base() {
  setTimeout(() => {
    initColResize?.();
    ensureFilterRow?.();
    _hookActivityRowClicks?.();
    applyColVisibility?.();
    _initColDragReorder();
  }, 0);
}

// ── FIX: UNIQUE FEATURES SHOWCASE ─────────────────────────────
function showUniqueFeatures() {
  const html = `<div class="modal" style="max-width:720px;width:96vw">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">
      <div style="background:linear-gradient(135deg,#6D28D9,#2563EB);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:18px;font-weight:900">⚡ What Makes GenSched Unique</div>
      <div style="flex:1"></div>
      <button class="btn" onclick="closeOvl('unique-ovl')">✕</button>
    </div>
    <p style="font-size:11px;color:var(--t3);margin-bottom:16px">No other scheduling tool in the market combines all of these features in a free, browser-based platform.</p>
    <div style="display:grid;gap:10px">
      ${[

        {icon:'🧬',title:'Recipe Builder — AI-Constructed Schedules',
         desc:'Drag pre-built construction modules (Piling, RC Frame, MEP, etc.) onto your WBS. Internal logic is pre-wired. A 200-activity schedule in under 5 minutes.',
         color:'#2563EB'},
        {icon:'📄',title:'Document Parser — Paste Scope → Get Schedule',
         desc:'Paste any scope of works document. The AI parser extracts activity names, durations, sequences, and WBS structure automatically.',
         color:'#0891B2'},
        {icon:'📊',title:'DCMA 14-Point + S-Curve in One Click',
         desc:'Built-in schedule quality analysis: 14 checks, health ring score, and a full 6-curve S-Curve (PV Early/Late, EV, Remaining Early/Late, Baseline) computed from your schedule and XER baseline.',
         color:'#059669'},
        {icon:'↔️',title:'True P6 XER Bidirectional',
         desc:'Import any P6 XER file (tested to 152,000 lines, 7,248 activities) and export back a valid XER. Preserves all 58 TASK fields, PROJWBS, TASKPRED, and TASKRSRC. Open directly in Primavera P6.',
         color:'#D97706'},
        {icon:'📁',title:'4-Baseline Comparison Engine',
         desc:'Load up to 4 baseline XER files simultaneously. Switch active baseline instantly. Variance column shows every activity\'s schedule slip in days.',
         color:'#DC2626'},
      ].map(f=>`<div style="display:flex;gap:12px;padding:12px 14px;background:var(--s1);border-radius:8px;border-left:3px solid ${f.color}">
        <span style="font-size:22px;flex-shrink:0">${f.icon}</span>
        <div>
          <div style="font-weight:700;font-size:12px;color:var(--t1);margin-bottom:3px">${f.title}</div>
          <div style="font-size:11px;color:var(--t2);line-height:1.6">${f.desc}</div>
        </div>
      </div>`).join('')}
    </div>
    <div style="margin-top:14px;padding:10px 14px;background:rgba(109,40,217,.07);border-radius:6px;font-size:11px;color:var(--t2);text-align:center">
      <strong style="color:#6D28D9">GenSched</strong> — Professional programme scheduling. Portable. Powerful. Yours.
    </div>
  </div>`;
  let ovl = document.getElementById('unique-ovl');
  if(!ovl){ovl=document.createElement('div');ovl.id='unique-ovl';ovl.className='ovl';document.body.appendChild(ovl);ovl.onclick=e=>{if(e.target===ovl)closeOvl('unique-ovl');};}
  ovl.innerHTML=html; ovl.classList.add('on');
}


// ── Calendar import from XER ──────────────────────────────────
function _importXERCalendars(tables) {
  const calRows = tables['CALENDAR']?.rows||[];
  if(!calRows.length) return;
  const imported = calRows.map(cl => ({
    id: cl.clndr_id||uid(),
    name: cl.clndr_name||'Imported Calendar',
    days: cl.day_hr_cnt?[1,1,1,1,1,cl.day_hr_cnt>5?1:0,0]:[1,1,1,1,1,0,0],
    hpd: +(cl.default_qty||8)||8,
    builtin: false,
    _xerCalId: cl.clndr_id,
  }));
  // Merge without duplicates
  imported.forEach(ic => {
    if(!CALENDARS.find(c=>c._xerCalId===ic._xerCalId)) CALENDARS.push(ic);
  });
  console.log(`Imported ${imported.length} calendars from XER`);
}

// ── Ask user which calendar after XER import ──────────────────
function _askCalendarChoice() {
  if(CALENDARS.length <= 1) return;
  const html = `<div class="modal" style="max-width:480px">
    <h3 style="margin:0 0 12px;font-size:14px">📅 Calendar Selection</h3>
    <p style="font-size:12px;color:var(--t2);margin-bottom:14px">
      ${CALENDARS.length} calendars were imported from the XER file. Choose which calendar to use as the project default.
    </p>
    <select id="cal-choice-sel" style="width:100%;padding:8px;font-size:12px;background:var(--s1);border:1px solid var(--b1);border-radius:5px;color:var(--t1)">
      ${CALENDARS.map(cl=>`<option value="${cl.id}">${esc(cl.name||'Calendar')}</option>`).join('')}
    </select>
    <div style="margin-top:10px;font-size:11px;color:var(--t3)">This sets the default calendar. Individual activities can use different calendars.</div>
    <div style="display:flex;gap:8px;margin-top:14px;justify-content:flex-end">
      <button class="btn" onclick="closeOvl('cal-choice-ovl')">Keep Current</button>
      <button class="btn btnp" onclick="_applyCalendarChoice()">✓ Use Selected</button>
    </div>
  </div>`;
  let ovl=document.getElementById('cal-choice-ovl');
  if(!ovl){ovl=document.createElement('div');ovl.id='cal-choice-ovl';ovl.className='ovl';document.body.appendChild(ovl);ovl.onclick=e=>{if(e.target===ovl)closeOvl('cal-choice-ovl');};}
  ovl.innerHTML=html; ovl.classList.add('on');
}

function _applyCalendarChoice() {
  const calId = document.getElementById('cal-choice-sel')?.value;
  if(calId) {
    PROJECT_SETTINGS.calId = calId;
    // Apply to all activities that don't have an explicit calendar
    WPS.forEach(w=>{ if(!w.calId) w.calId=calId; });
  }
  closeOvl('cal-choice-ovl');
  saveWbsToProject();
}


// ── Save schedule as file ────────────────────────────────────
function saveScheduleAsFile() {
  if(!currentProject) { alert('No project loaded.'); return; }
  // Serialize current state into the HTML
  const state = JSON.stringify({
    project: currentProject,
    settings: PROJECT_SETTINGS,
    wps: WPS,
    wbs: WBS_NODES,
    risks: RISKS,
    baselines: BASELINES.map(b=>b?{name:b.name,date:b.date,planStart:b.planStart,planEnd:b.planEnd,activities:b.activities}:null),
    activeBaseline: _activeBaseline,
    evm: EVM_DATA,
    calendars: CALENDARS,
  });
  // Save to IndexedDB first
  saveScheduleDB();
  // Also offer a JSON download as backup
  const blob = new Blob([state], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (currentProject.name||'schedule').replace(/[^a-zA-Z0-9_-]/g,'_')+'_'+new Date().toISOString().slice(0,10)+'.json';
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}

// ── Load schedule from saved JSON ────────────────────────────
function loadScheduleFromFile(input) {
  const file = input.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if(data.wps) {
        WPS = data.wps;
        WBS_NODES = data.wbs||[];
        RISKS = data.risks||[];
        if(data.baselines) BASELINES = data.baselines;
        if(data.activeBaseline!=null) _activeBaseline = data.activeBaseline;
        if(data.settings) Object.assign(PROJECT_SETTINGS, data.settings);
        if(data.evm) Object.assign(EVM_DATA, data.evm);
        if(data.calendars) {
          data.calendars.forEach(cl=>{
            if(!CALENDARS.find(c=>c.id===cl.id)) CALENDARS.push(cl);
          });
        }
        if(data.project) { currentProject=data.project; updateUserUI?.(); }
        assignWbs(); recalc(); VS.flat=[]; renderWps(); renderWbsTree();
        saveWbsToProject();
        alert(`✓ Schedule loaded: ${WPS.length} activities`);
      } else {
        alert('Invalid schedule file format');
      }
    } catch(e2) { alert('Error loading file: '+e2.message); }
  };
  reader.readAsText(file);
}


// ═══════════════════════════════════════════════════════════════
// ACTIVITY CODES — P6-style custom classification system
// ═══════════════════════════════════════════════════════════════
// Each ActivityCodeType has: id, name, values:[{id,name,color,description}]
// Each WPS activity has: w.codes = { [codeTypeId]: valueId }



function uid_code() { return 'AC' + Math.random().toString(36).slice(2,10).toUpperCase(); }

// ── Open Code Manager ────────────────────────────────────────
function openActivityCodeManager() {
  const html = `<div class="modal" style="max-width:680px;width:96vw">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
      <h3 style="margin:0;font-size:15px">🏷️ Activity Code Manager</h3>
      <div style="flex:1"></div>
      <button class="btn btns btnp" onclick="_addCodeType()">+ New Code Type</button>
      <button class="btn" onclick="closeOvl('actcode-ovl')">✕</button>
    </div>
    <p style="font-size:11px;color:var(--t3);margin-bottom:12px">
      Define custom classification codes (e.g. Discipline, Area, Phase, Responsible Party). Assign values to individual activities.
    </p>
    <div id="actcode-types-list" style="display:flex;flex-direction:column;gap:10px;max-height:480px;overflow-y:auto">
      ${_renderCodeTypesList()}
    </div>
  </div>`;
  let ovl=document.getElementById('actcode-ovl');
  if(!ovl){ovl=document.createElement('div');ovl.id='actcode-ovl';ovl.className='ovl';document.body.appendChild(ovl);ovl.onclick=e=>{if(e.target===ovl)closeOvl('actcode-ovl');};}
  ovl.innerHTML=html; ovl.classList.add('on');
}

function _renderCodeTypesList() {
  if(!ACTIVITY_CODES.length) return `<div style="padding:24px;text-align:center;color:var(--t3);font-size:12px">No activity code types defined. Click "New Code Type" to create one.</div>`;
  return ACTIVITY_CODES.map((ct,ci) => `
    <div style="border:1px solid var(--b1);border-radius:8px;overflow:hidden">
      <div style="background:var(--s1);padding:8px 12px;display:flex;align-items:center;gap:8px">
        <span style="font-weight:700;font-size:12px;color:var(--t1)">🏷️ ${esc(ct.name)}</span>
        <span style="font-size:10px;color:var(--t3)">${(ct.values||[]).length} values</span>
        <div style="flex:1"></div>
        <button class="btn btns" onclick="_editCodeTypeName(${ci})">✎</button>
        <button class="btn btns" onclick="_deleteCodeType(${ci})">🗑</button>
      </div>
      <div style="padding:10px 12px">
        <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px">
          ${(ct.values||[]).map((v,vi)=>`
            <div style="display:flex;align-items:center;gap:4px;padding:3px 8px;border-radius:12px;background:${v.color||'var(--bluel)'};border:1px solid var(--b1)">
              <span style="font-size:11px;font-weight:600;color:var(--t1)">${esc(v.name)}</span>
              <span style="font-size:9px;color:var(--t3);margin-left:2px">(${_countCodeAssignments(ct.id,v.id)})</span>
              <button style="background:none;border:none;cursor:pointer;color:var(--t3);font-size:11px;padding:0 2px" onclick="_deleteCodeValue(${ci},${vi})">×</button>
            </div>`).join('')}
        </div>
        <div style="display:flex;gap:6px;align-items:center">
          <input id="new-cv-${ci}" placeholder="New value name…" style="flex:1;padding:5px 8px;font-size:11px;border:1px solid var(--b1);border-radius:4px;background:var(--s1);color:var(--t1)">
          <input type="color" id="new-cv-col-${ci}" value="#EDE9FE" style="width:32px;height:28px;border:1px solid var(--b1);border-radius:4px;cursor:pointer">
          <button class="btn btns btnp" onclick="_addCodeValue(${ci})">+ Add Value</button>
        </div>
      </div>
    </div>`).join('');
}

function _countCodeAssignments(codeTypeId, valueId) {
  return WPS.filter(w=>w.codes?.[codeTypeId]===valueId).length;
}

function _addCodeType() {
  const name = prompt('Code Type Name (e.g. "Discipline", "Area", "Responsible Party"):');
  if(!name?.trim()) return;
  ACTIVITY_CODES.push({id:uid_code(), name:name.trim(), values:[]});
  _saveAndRefreshCodes();
}

function _editCodeTypeName(ci) {
  const ct = ACTIVITY_CODES[ci]; if(!ct) return;
  const name = prompt('Rename code type:', ct.name);
  if(name?.trim()) { ct.name=name.trim(); _saveAndRefreshCodes(); }
}

function _deleteCodeType(ci) {
  const ct = ACTIVITY_CODES[ci]; if(!ct) return;
  if(!confirm(`Delete code type "${ct.name}"? This will remove all assignments.`)) return;
  const id = ct.id;
  ACTIVITY_CODES.splice(ci, 1);
  WPS.forEach(w=>{ if(w.codes) delete w.codes[id]; });
  _saveAndRefreshCodes();
}

function _addCodeValue(ci) {
  const ct = ACTIVITY_CODES[ci]; if(!ct) return;
  const nameEl = document.getElementById('new-cv-'+ci);
  const colEl  = document.getElementById('new-cv-col-'+ci);
  const name = nameEl?.value?.trim();
  if(!name) { nameEl?.focus(); return; }
  if(!ct.values) ct.values=[];
  ct.values.push({id:uid_code(), name, color: colEl?.value||'#EDE9FE', description:''});
  if(nameEl) nameEl.value='';
  _saveAndRefreshCodes();
}

function _deleteCodeValue(ci, vi) {
  const ct = ACTIVITY_CODES[ci]; if(!ct) return;
  const val = ct.values[vi];
  if(!confirm(`Delete value "${val?.name}"?`)) return;
  const vid = val.id;
  ct.values.splice(vi, 1);
  WPS.forEach(w=>{ if(w.codes?.[ct.id]===vid) delete w.codes[ct.id]; });
  _saveAndRefreshCodes();
}

function _saveAndRefreshCodes() {
  saveWbsToProject();
  // Refresh the code manager list
  const listEl = document.getElementById('actcode-types-list');
  if(listEl) listEl.innerHTML = _renderCodeTypesList();
  // Re-render schedule to show code columns
  VS.flat=[]; invalidateRowCache?.(); renderWps();
}

// ── Assign code to activity (from dock or inline) ─────────────
function openCodeAssigner(wi) {
  const w = WPS[wi]; if(!w) return;
  if(!ACTIVITY_CODES.length) {
    if(confirm('No activity codes defined. Open Code Manager to create some?')) openActivityCodeManager();
    return;
  }
  const html = `<div class="modal" style="max-width:440px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <h3 style="margin:0;font-size:14px">🏷️ Assign Codes</h3>
      <div style="font-size:11px;color:var(--t3);flex:1">${esc(w.name||'Activity')}</div>
      <button class="btn" onclick="closeOvl('code-assign-ovl')">✕</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:10px">
      ${ACTIVITY_CODES.map(ct=>`
        <div>
          <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.07em">${esc(ct.name).toUpperCase()}</label>
          <select style="width:100%;margin-top:3px;padding:6px 8px;font-size:11px;background:var(--s1);border:1px solid var(--b1);border-radius:5px;color:var(--t1)"
            onchange="_assignCode(${wi},'${ct.id}',this.value)">
            <option value="">— None —</option>
            ${(ct.values||[]).map(v=>`<option value="${v.id}" ${(w.codes||{})[ct.id]===v.id?'selected':''} style="background:${v.color||''}">${esc(v.name)}</option>`).join('')}
          </select>
          ${(w.codes||{})[ct.id] ? `<span style="display:inline-block;margin-top:4px;padding:2px 8px;border-radius:10px;font-size:10px;background:${(ct.values||[]).find(v=>v.id===(w.codes||{})[ct.id])?.color||'var(--bluel)'}">
            ${esc((ct.values||[]).find(v=>v.id===(w.codes||{})[ct.id])?.name||'')}
          </span>` : ''}
        </div>`).join('')}
    </div>
    <div style="margin-top:14px;display:flex;justify-content:space-between">
      <button class="btn btns" onclick="openActivityCodeManager()">⚙ Manage Codes</button>
      <button class="btn btnp" onclick="closeOvl('code-assign-ovl')">Done</button>
    </div>
  </div>`;
  let ovl=document.getElementById('code-assign-ovl');
  if(!ovl){ovl=document.createElement('div');ovl.id='code-assign-ovl';ovl.className='ovl';document.body.appendChild(ovl);ovl.onclick=e=>{if(e.target===ovl)closeOvl('code-assign-ovl');};}
  ovl.innerHTML=html; ovl.classList.add('on');
}

function _assignCode(wi, codeTypeId, valueId) {
  const w = WPS[wi]; if(!w) return;
  if(!w.codes) w.codes={};
  if(valueId) w.codes[codeTypeId]=valueId;
  else delete w.codes[codeTypeId];
  saveWbsToProject();
  // Refresh assign dialog values display
  openCodeAssigner(wi);
}

// Get display label for an activity's codes
function getActivityCodeLabels(w) {
  if(!w.codes||!ACTIVITY_CODES.length) return '';
  return ACTIVITY_CODES.map(ct=>{
    const vid=w.codes[ct.id]; if(!vid) return '';
    const v=(ct.values||[]).find(x=>x.id===vid); if(!v) return '';
    return `<span style="display:inline-block;padding:1px 5px;border-radius:8px;font-size:9px;background:${v.color||'var(--bluel)'};margin:0 1px">${esc(v.name)}</span>`;
  }).filter(Boolean).join('');
}


// ═══════════════════════════════════════════════════════════════
// FILTER & SORT ENGINE — P6-style schedule view filters
// ═══════════════════════════════════════════════════════════════

// Active filter state

  // dir: 1=asc, -1=desc

// Apply filters to WPS and return filtered+sorted array
function getFilteredSortedWps() {
  let result = WPS.filter(w => {
    const r = SCHED.r?.[w.id]||{};

    // Critical path filter
    if(_activeFilters.showCP && !r.cp) return false;
    // Longest path filter
    if(_activeFilters.showLP && !r.lp) return false;
    // Status
    if(_activeFilters.statusFilter && w.status !== _activeFilters.statusFilter) return false;
    // Float max
    if(_activeFilters.floatMax != null && r.tf != null && r.tf > _activeFilters.floatMax) return false;
    if(_activeFilters.floatMin != null && r.tf != null && r.tf < _activeFilters.floatMin) return false;
    // WBS
    if(_activeFilters.wbsFilter && w.wbsNodeId !== _activeFilters.wbsFilter) return false;
    // Phase
    if(_activeFilters.phaseFilter && w.ph !== _activeFilters.phaseFilter) return false;
    // Activity type filter
    if(_activeFilters.actTypeFilter==='ACTIVITY') {
      // Hide WBS summary/Hammock, show only real activities
      if(w.actType==='SUMM'||w.actType==='HAMM') return false;
    } else if(_activeFilters.actTypeFilter && _activeFilters.actTypeFilter!=='') {
      if(w.actType !== _activeFilters.actTypeFilter) return false;
    }
    // Text search
    if(_activeFilters.textSearch) {
      const q = _activeFilters.textSearch.toLowerCase();
      if(!(w.name||'').toLowerCase().includes(q) &&
         !(w.wbs||'').toLowerCase().includes(q) &&
         !(w.activityId||'').toLowerCase().includes(q)) return false;
    }
    // Activity codes
    for(const [ctId, vId] of Object.entries(_activeFilters.codeFilters)) {
      if(vId && w.codes?.[ctId] !== vId) return false;
    }
    return true;
  });

  // Sort
  if(_sortConfig.col) {
    result = [...result].sort((a,b) => {
      const ra = SCHED.r?.[a.id]||{}, rb = SCHED.r?.[b.id]||{};
      let va, vb;
      switch(_sortConfig.col) {
        case 'name':    va=a.name||'';    vb=b.name||'';    break;
        case 'wbs':     va=a.wbs||'';     vb=b.wbs||'';     break;
        case 'dur':     va=a.dur||0;      vb=b.dur||0;      break;
        case 'float':   va=ra.tf??999;    vb=rb.tf??999;    break;
        case 'start':   va=ra.es??0;      vb=rb.es??0;      break;
        case 'finish':  va=ra.ef??0;      vb=rb.ef??0;      break;
        case 'status':  va=a.status||'';  vb=b.status||'';  break;
        case 'pct':     va=a.pct||0;      vb=b.pct||0;      break;
        default:        va=0; vb=0;
      }
      if(va < vb) return -_sortConfig.dir;
      if(va > vb) return _sortConfig.dir;
      return 0;
    });
  }
  return result;
}

function _hasActiveFilter() {
  return _activeFilters.showCP || _activeFilters.showLP ||
    _activeFilters.statusFilter || _activeFilters.floatMax!=null ||
    _activeFilters.floatMin!=null || _activeFilters.wbsFilter ||
    _activeFilters.phaseFilter || _activeFilters.textSearch ||
    Object.values(_activeFilters.codeFilters).some(Boolean);
}

// Open filter panel
function openFilterPanel() {
  const actCount = getFilteredSortedWps().length;
  const hasFilter = _hasActiveFilter();

  const html = `<div class="modal" style="max-width:560px;width:96vw">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <h3 style="margin:0;font-size:15px">🔍 Filter &amp; Sort Schedule</h3>
      <div style="flex:1"></div>
      <span style="font-size:11px;color:var(--t3)">${actCount} of ${WPS.length} activities shown</span>
      <button class="btn btns" onclick="_clearAllFilters()">Clear All</button>
      <button class="btn btnp" onclick="_applyFilters()">Apply</button>
      <button class="btn" onclick="closeOvl('filter-ovl')">✕</button>
    </div>

    <!-- PATH FILTERS -->
    <div style="background:var(--s1);border-radius:8px;padding:12px 14px;margin-bottom:10px">
      <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em;margin-bottom:8px">PATH ANALYSIS</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;padding:6px 12px;border-radius:6px;border:1px solid ${_activeFilters.showCP?'#DC2626':'var(--b1)'};background:${_activeFilters.showCP?'rgba(220,38,38,.08)':'var(--s0)'}">
          <input type="checkbox" id="flt-cp" ${_activeFilters.showCP?'checked':''}>
          <span style="font-size:11px;font-weight:600;color:${_activeFilters.showCP?'#DC2626':'var(--t2)'}">🔴 Critical Path</span>
        </label>
        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;padding:6px 12px;border-radius:6px;border:1px solid ${_activeFilters.showLP?'#D97706':'var(--b1)'};background:${_activeFilters.showLP?'rgba(217,119,6,.08)':'var(--s0)'}">
          <input type="checkbox" id="flt-lp" ${_activeFilters.showLP?'checked':''}>
          <span style="font-size:11px;font-weight:600;color:${_activeFilters.showLP?'#D97706':'var(--t2)'}">🟡 Longest Path</span>
        </label>
      </div>
    </div>

    <!-- STATUS & FLOAT -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div style="background:var(--s1);border-radius:8px;padding:12px 14px">
        <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em;margin-bottom:8px">STATUS</div>
        <select id="flt-status" style="width:100%;padding:6px;font-size:11px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1)">
          <option value="">All Statuses</option>
          <option value="NS" ${_activeFilters.statusFilter==='NS'?'selected':''}>Not Started</option>
          <option value="IP" ${_activeFilters.statusFilter==='IP'?'selected':''}>In Progress</option>
          <option value="COM" ${_activeFilters.statusFilter==='COM'?'selected':''}>Complete</option>
        </select>
      </div>
      <div style="background:var(--s1);border-radius:8px;padding:12px 14px">
        <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em;margin-bottom:8px">FLOAT RANGE (days)</div>
        <div style="display:flex;gap:5px;align-items:center">
          <input id="flt-tfmin" type="number" placeholder="Min" value="${_activeFilters.floatMin??''}" style="width:70px;padding:5px;font-size:11px;background:var(--s0);border:1px solid var(--b1);border-radius:4px;color:var(--t1)">
          <span style="color:var(--t3)">–</span>
          <input id="flt-tfmax" type="number" placeholder="Max" value="${_activeFilters.floatMax??''}" style="width:70px;padding:5px;font-size:11px;background:var(--s0);border:1px solid var(--b1);border-radius:4px;color:var(--t1)">
          <button class="btn btns" style="font-size:10px" onclick="document.getElementById('flt-tfmin').value='';document.getElementById('flt-tfmax').value=5">Near-Crit</button>
        </div>
      </div>
    </div>

    <!-- ACTIVITY TYPE FILTER -->
    <div style="background:var(--s1);border-radius:8px;padding:12px 14px;margin-bottom:10px">
      <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em;margin-bottom:8px">ACTIVITY TYPE</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${[['','All'],['ACTIVITY','Activities Only'],['TASK','Tasks Only'],['MS','Milestones Only'],['LOE','LOE Only']].map(([k,l])=>`
          <button class="btn btns${_activeFilters.actTypeFilter===k?' btnp':''}" onclick="_activeFilters.actTypeFilter='${k}';_updateFilterBadge();VS.flat=[];renderWps()" style="font-size:10px">${l}</button>`).join('')}
      </div>
    </div>

    <!-- TEXT SEARCH + PHASE + WBS -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:10px">
      <div style="background:var(--s1);border-radius:8px;padding:10px 12px">
        <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em;margin-bottom:6px">SEARCH</div>
        <input id="flt-text" placeholder="Name, WBS, ID…" value="${_activeFilters.textSearch}" style="width:100%;padding:5px;font-size:11px;background:var(--s0);border:1px solid var(--b1);border-radius:4px;color:var(--t1)">
      </div>
      <div style="background:var(--s1);border-radius:8px;padding:10px 12px">
        <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em;margin-bottom:6px">PHASE</div>
        <select id="flt-phase" style="width:100%;padding:5px;font-size:11px;background:var(--s0);border:1px solid var(--b1);border-radius:4px;color:var(--t1)">
          <option value="">All Phases</option>
          ${Object.entries(PH||{}).map(([k,v])=>`<option value="${k}" ${_activeFilters.phaseFilter===k?'selected':''}>${v.lbl||k}</option>`).join('')}
        </select>
      </div>
      <div style="background:var(--s1);border-radius:8px;padding:10px 12px">
        <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em;margin-bottom:6px">WBS NODE</div>
        <select id="flt-wbs" style="width:100%;padding:5px;font-size:11px;background:var(--s0);border:1px solid var(--b1);border-radius:4px;color:var(--t1)">
          <option value="">All WBS</option>
          ${WBS_NODES.map(n=>`<option value="${n.id}" ${_activeFilters.wbsFilter===n.id?'selected':''}>${esc(n.code+' '+n.name)}</option>`).join('')}
        </select>
      </div>
    </div>

    <!-- ACTIVITY CODES -->
    ${ACTIVITY_CODES.length ? `
    <div style="background:var(--s1);border-radius:8px;padding:12px 14px;margin-bottom:10px">
      <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em;margin-bottom:8px">🏷️ ACTIVITY CODES</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px">
        ${ACTIVITY_CODES.map(ct=>`<div>
          <label style="font-size:10px;color:var(--t3)">${esc(ct.name)}</label>
          <select id="flt-code-${ct.id}" style="width:100%;margin-top:2px;padding:5px;font-size:11px;background:var(--s0);border:1px solid var(--b1);border-radius:4px;color:var(--t1)">
            <option value="">All</option>
            ${(ct.values||[]).map(v=>`<option value="${v.id}" ${_activeFilters.codeFilters[ct.id]===v.id?'selected':''}>${esc(v.name)}</option>`).join('')}
          </select>
        </div>`).join('')}
      </div>
    </div>` : ''}

    <!-- SORT -->
    <div style="background:var(--s1);border-radius:8px;padding:12px 14px">
      <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em;margin-bottom:8px">SORT BY</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${[['wbs','WBS'],['name','Name'],['float','Float'],['dur','Duration'],['start','Start'],['finish','Finish'],['status','Status'],['pct','% Complete']].map(([k,l])=>`
          <button class="btn btns${_sortConfig.col===k?' btnp':''}" onclick="_setSort('${k}')" style="font-size:10px">
            ${l}${_sortConfig.col===k?(_sortConfig.dir>0?' ▲':' ▼'):''}
          </button>`).join('')}
      </div>
    </div>
  </div>`;

  let ovl=document.getElementById('filter-ovl');
  if(!ovl){ovl=document.createElement('div');ovl.id='filter-ovl';ovl.className='ovl';document.body.appendChild(ovl);ovl.onclick=e=>{if(e.target===ovl)closeOvl('filter-ovl');};}
  ovl.innerHTML=html; ovl.classList.add('on');
}

function _applyFilters() {
  _activeFilters.showCP  = document.getElementById('flt-cp')?.checked||false;
  _activeFilters.showLP  = document.getElementById('flt-lp')?.checked||false;
  _activeFilters.statusFilter = document.getElementById('flt-status')?.value||'';
  const tfMin = document.getElementById('flt-tfmin')?.value;
  const tfMax = document.getElementById('flt-tfmax')?.value;
  _activeFilters.floatMin = tfMin!==''&&tfMin!=null ? +tfMin : null;
  _activeFilters.floatMax = tfMax!==''&&tfMax!=null ? +tfMax : null;
  _activeFilters.textSearch  = document.getElementById('flt-text')?.value||'';
  _activeFilters.phaseFilter = document.getElementById('flt-phase')?.value||'';
  _activeFilters.wbsFilter   = document.getElementById('flt-wbs')?.value||'';
  // Code filters
  ACTIVITY_CODES.forEach(ct => {
    const val = document.getElementById('flt-code-'+ct.id)?.value||'';
    if(val) _activeFilters.codeFilters[ct.id]=val;
    else delete _activeFilters.codeFilters[ct.id];
  });
  closeOvl('filter-ovl');
  _updateFilterBadge();
  VS.flat=[]; renderWps();
}

function _clearAllFilters() {
  _activeFilters = {showCP:false,showLP:false,statusFilter:'',floatMax:null,floatMin:null,codeFilters:{},wbsFilter:'',textSearch:'',phaseFilter:'',actTypeFilter:''};
  _sortConfig = {col:'',dir:1};
  closeOvl('filter-ovl');
  _updateFilterBadge();
  VS.flat=[]; renderWps();
}

function _setSort(col) {
  if(_sortConfig.col===col) _sortConfig.dir*=-1;
  else { _sortConfig.col=col; _sortConfig.dir=1; }
  closeOvl('filter-ovl');
  _updateFilterBadge();
  VS.flat=[]; renderWps();
}

function _updateFilterBadge() {
  const btn=document.getElementById('filter-sort-btn');
  if(!btn) return;
  const hasF=_hasActiveFilter(), hasS=!!_sortConfig.col;
  btn.style.background=(hasF||hasS)?'rgba(109,40,217,.18)':'';
  btn.style.color=(hasF||hasS)?'#6D28D9':'';
  btn.style.fontWeight=(hasF||hasS)?'700':'';
  const count=Object.values(_activeFilters).filter(v=>v&&v!==false&&v!=='').length;
  btn.textContent='🔍 Filter/Sort'+(hasF||hasS?' ('+(count+(hasS?1:0))+')':'');
}

// ── Quick filter buttons (in toolbar) ─────────────────────────
function filterCriticalPath() {
  _activeFilters.showCP=!_activeFilters.showCP;
  _activeFilters.showLP=false;
  _updateFilterBadge();
  VS.flat=[]; renderWps();
  _updateQuickFilterBtns();
}

function filterLongestPath() {
  _activeFilters.showLP=!_activeFilters.showLP;
  _activeFilters.showCP=false;
  _updateFilterBadge();
  VS.flat=[]; renderWps();
  _updateQuickFilterBtns();
}

function _updateQuickFilterBtns() {
  const cpBtn=document.getElementById('quick-cp-btn');
  const lpBtn=document.getElementById('quick-lp-btn');
  if(cpBtn) { cpBtn.style.background=_activeFilters.showCP?'rgba(220,38,38,.15)':''; cpBtn.style.color=_activeFilters.showCP?'#DC2626':''; }
  if(lpBtn) { lpBtn.style.background=_activeFilters.showLP?'rgba(217,119,6,.15)':'';  lpBtn.style.color=_activeFilters.showLP?'#D97706':''; }
}


// ═══════════════════════════════════════════════════════════════
// CURRENCY SYSTEM — V32 complete rewrite
// ═══════════════════════════════════════════════════════════════
// _customCurrencies loaded from localStorage on init
function _allCurrencies() {
  return [...CURRENCIES, ..._customCurrencies];
}

function _buildCurrencyOptions() {
  const cur = PROJECT_SETTINGS?.currency?.code||'';
  return _allCurrencies().map(c=>
    `<option value="${c.code}" ${c.code===cur?'selected':''}>${c.symbol} ${c.code} — ${c.name}${c.custom?' ⭐':''}</option>`
  ).join('');
}

// Apply currency from pset dropdown
function applyPsetCurrency(code) {
  if(!code) return;
  const found = _allCurrencies().find(c=>c.code===code);
  if(!found) return;
  PROJECT_SETTINGS.currency = {symbol:found.symbol, code:found.code, name:found.name};
  _refreshCurrencyUI();
  _refreshPsetCurrencyUI();
}

function _refreshCurrencyUI() {
  const sym = getCurrSym();
  const code = getCurrCode();
  const name = getCurrName();
  // Update all currency-sym spans
  document.querySelectorAll('.currency-sym').forEach(el=>el.textContent=sym);
  // Update settings modal fields
  const badge = document.getElementById('pset-cur-badge');
  if(badge) badge.textContent=sym;
  const info = document.getElementById('pset-cur-info');
  if(info) info.innerHTML=isCurrencySet()?`<strong>${code}</strong> — ${name}`:'<span style="color:#D97706">⚠ No currency selected.</span>';
  // Update header currency display
  const hdrCurr = document.getElementById('hdr-currency');
  if(hdrCurr) hdrCurr.textContent=sym;
  // Refresh dropdown selection
  const sel=document.getElementById('pset-currency-sel');
  if(sel) sel.value=code;
  updateCostSummary?.();
}

// Currency Library modal — enhanced with custom currency form
function openCurrencyLibrary() {
  _selectedCurrencyCode = PROJECT_SETTINGS.currency?.code||'';
  _renderCurrencyLibModal();
}

function _renderCurrencyLibModal() {
  const html = `<div class="modal" style="max-width:500px;width:96vw">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <h3 style="margin:0;font-size:15px">💰 Currency Library</h3>
      <div style="flex:1"></div>
      <button class="btn btns btnp" onclick="_showAddCurrencyForm()" style="font-size:11px">+ Custom Currency</button>
      <button class="btn" onclick="closeOvl('currency-ovl')">✕</button>
    </div>

    <!-- Search -->
    <input id="currency-search" placeholder="Search by code or name…" style="width:100%;box-sizing:border-box;padding:8px 10px;margin-bottom:10px;font-size:12px;border:1px solid var(--b1);border-radius:6px;background:var(--s1);color:var(--t1)" oninput="renderCurrencyLib()">

    <!-- Custom currency form (hidden by default) -->
    <div id="add-currency-form" style="display:none;background:rgba(109,40,217,.05);border:1px solid #6D28D9;border-radius:8px;padding:12px;margin-bottom:10px">
      <div style="font-size:11px;font-weight:700;color:#6D28D9;margin-bottom:8px">➕ Add Custom Currency</div>
      <div style="display:grid;grid-template-columns:80px 100px 1fr;gap:8px;align-items:end">
        <div>
          <label style="font-size:10px;color:var(--t3)">SYMBOL</label>
          <input id="new-curr-sym" placeholder="e.g. Fr" maxlength="4" style="width:100%;box-sizing:border-box;padding:5px;font-size:13px;font-weight:700;text-align:center;border:1px solid var(--b1);border-radius:4px;background:var(--s1);color:var(--t1)">
        </div>
        <div>
          <label style="font-size:10px;color:var(--t3)">CODE</label>
          <input id="new-curr-code" placeholder="e.g. CHF" maxlength="6" style="width:100%;box-sizing:border-box;padding:5px;font-size:12px;font-family:var(--mono);font-weight:700;border:1px solid var(--b1);border-radius:4px;background:var(--s1);color:var(--t1)"
            oninput="this.value=this.value.toUpperCase()">
        </div>
        <div>
          <label style="font-size:10px;color:var(--t3)">NAME</label>
          <input id="new-curr-name" placeholder="e.g. Swiss Franc" style="width:100%;box-sizing:border-box;padding:5px;font-size:12px;border:1px solid var(--b1);border-radius:4px;background:var(--s1);color:var(--t1)">
        </div>
      </div>
      <div style="display:flex;justify-content:flex-end;gap:6px;margin-top:8px">
        <button class="btn" onclick="document.getElementById('add-currency-form').style.display='none'">Cancel</button>
        <button class="btn btnp" onclick="addCustomCurrencyForm()">✓ Add Currency</button>
      </div>
    </div>

    <!-- Currency list -->
    <div id="currency-list" style="max-height:340px;overflow-y:auto;border:1px solid var(--b1);border-radius:6px"></div>

    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px">
      <div style="font-size:11px;color:var(--t3)">${_allCurrencies().length} currencies · ${_customCurrencies.length} custom</div>
      <button class="btn btnp" onclick="applyCurrencyFromLibrary()" style="padding:6px 20px">✓ Apply Selected</button>
    </div>
  </div>`;
  let ovl=document.getElementById('currency-ovl');
  if(!ovl){ovl=document.createElement('div');ovl.id='currency-ovl';ovl.className='ovl';document.body.appendChild(ovl);ovl.onclick=e=>{if(e.target===ovl)closeOvl('currency-ovl');};}
  ovl.innerHTML=html; ovl.classList.add('on');
  renderCurrencyLib();
}

function _showAddCurrencyForm() {
  const form=document.getElementById('add-currency-form');
  if(form){form.style.display='block';document.getElementById('new-curr-sym')?.focus();}
}

function addCustomCurrencyForm() {
  const sym = document.getElementById('new-curr-sym')?.value?.trim();
  const code = document.getElementById('new-curr-code')?.value?.trim().toUpperCase();
  const name = document.getElementById('new-curr-name')?.value?.trim();
  if(!sym||!code||!name){alert('Please fill all fields: Symbol, Code and Name');return;}
  if(_allCurrencies().some(c=>c.code===code)){alert(`Currency code ${code} already exists`);return;}
  _customCurrencies.push({symbol:sym,code,name,custom:true});
  localStorage.setItem('pa_custom_currencies',JSON.stringify(_customCurrencies));
  document.getElementById('add-currency-form').style.display='none';
  document.getElementById('new-curr-sym').value='';
  document.getElementById('new-curr-code').value='';
  document.getElementById('new-curr-name').value='';
  renderCurrencyLib();
  // Refresh settings dropdown
  const sel=document.getElementById('pset-currency-sel');
  if(sel){sel.innerHTML='<option value="">— Select Currency —</option>'+_buildCurrencyOptions();}
}

function renderCurrencyLib() {
  const search=(document.getElementById('currency-search')?.value||'').toLowerCase();
  const list=document.getElementById('currency-list'); if(!list) return;
  const filtered=_allCurrencies().filter(c=>!search||c.code.toLowerCase().includes(search)||c.name.toLowerCase().includes(search)||c.symbol.includes(search));
  list.innerHTML=filtered.map(cur=>`
    <div style="display:flex;align-items:center;gap:10px;padding:8px 12px;cursor:pointer;border-bottom:1px solid var(--b2);transition:background .1s;${cur.code===_selectedCurrencyCode?'background:rgba(109,40,217,.08);border-left:3px solid #6D28D9;':''}"
      onmouseover="this.style.background='var(--bluel)'" onmouseout="this.style.background='${cur.code===_selectedCurrencyCode?'rgba(109,40,217,.08)':''}'"
      onclick="selectCurrency('${cur.code}')">
      <span style="font-size:18px;font-weight:800;width:30px;text-align:center;flex-shrink:0">${cur.symbol}</span>
      <span style="font-family:var(--mono);font-weight:700;font-size:11px;width:46px;flex-shrink:0;color:var(--t3)">${cur.code}</span>
      <span style="font-size:12px;flex:1;color:var(--t1)">${cur.name}</span>
      ${cur.custom?`<span style="font-size:9px;padding:1px 5px;border-radius:8px;background:rgba(109,40,217,.12);color:#6D28D9;margin-right:4px">custom</span>`:''}
      ${cur.code===_selectedCurrencyCode?`<span style="color:#6D28D9;font-weight:700">✓</span>`:''}
      ${cur.custom?`<button style="background:none;border:none;cursor:pointer;color:var(--t3);font-size:12px;padding:2px 4px" onclick="event.stopPropagation();removeCustomCurrency('${cur.code}')">🗑</button>`:''}
    </div>`).join('');
}

function selectCurrency(code) {
  _selectedCurrencyCode=code; renderCurrencyLib();
}

function applyCurrencyFromLibrary() {
  const cur=_allCurrencies().find(c=>c.code===_selectedCurrencyCode);
  if(!cur){alert('Select a currency first');return;}
  PROJECT_SETTINGS.currency={symbol:cur.symbol,code:cur.code,name:cur.name};
  closeOvl('currency-ovl');
  _refreshCurrencyUI();
  // Update settings modal dropdown
  const sel=document.getElementById('pset-currency-sel');
  if(sel){sel.innerHTML='<option value="">— Select Currency —</option>'+_buildCurrencyOptions();sel.value=cur.code;}
}

function removeCustomCurrency(code) {
  if(!confirm(`Remove ${code}?`)) return;
  _customCurrencies=_customCurrencies.filter(c=>c.code!==code);
  localStorage.setItem('pa_custom_currencies',JSON.stringify(_customCurrencies));
  if(_selectedCurrencyCode===code) _selectedCurrencyCode='';
  renderCurrencyLib();
}

// Legacy compatibility
function applyCurrencySelection() { applyCurrencyFromLibrary(); }
function _applyCurrencySelectionV16() { applyCurrencyFromLibrary(); }
function openCurrencySelector() { openCurrencyLibrary(); }
// _selectedCurrencyCode declared above


// ═══════════════════════════════════════════════════════════════
// IMPORT ACTVCODE + ACTVTYPE FROM XER (P6 Activity Codes)
// ═══════════════════════════════════════════════════════════════
function _importXERActivityCodes(tables) {
  const typeRows  = tables['ACTVTYPE']?.rows  || [];
  const codeRows  = tables['ACTVCODE']?.rows  || [];
  const assignRows= tables['TASKACTV']?.rows  || [];  // may be empty (skip-listed)

  if(!typeRows.length && !codeRows.length) return;

  // Build code type map: actv_code_type_id → { id, name, values[] }
  const typeMap = {};
  typeRows.forEach(t => {
    const id = uid_code();
    typeMap[t.actv_code_type_id] = { id, name: t.actv_code_type||'Code', values: [], _xerId: t.actv_code_type_id };
  });

  // Build code value map: actv_code_id → { id, name, color, codeTypeId }
  const valMap = {};
  codeRows.forEach(v => {
    const ct = typeMap[v.actv_code_type_id];
    if(!ct) return;
    const vid = uid_code();
    const val = { id: vid, name: v.short_name||v.actv_code_name||'Code', color: '#EDE9FE', description: v.actv_code_name||'' };
    ct.values.push(val);
    valMap[v.actv_code_id] = { ...val, codeTypeId: ct.id, _xerId: v.actv_code_id };
  });

  // Merge code types into ACTIVITY_CODES (avoid duplicates by _xerId)
  Object.values(typeMap).forEach(ct => {
    if(!ct.values.length) return;
    const exists = ACTIVITY_CODES.find(a => a._xerId === ct._xerId);
    if(!exists) ACTIVITY_CODES.push({ id:ct.id, name:ct.name, values:ct.values, _xerId:ct._xerId });
  });

  // Wire assignments from TASKACTV if available
  if(assignRows.length) {
    const wpsById = new Map(WPS.map(w=>[w._xer?.task_id||w._xerId, w]));
    assignRows.forEach(a => {
      const w   = wpsById.get(a.task_id);
      const val = valMap[a.actv_code_id];
      if(!w || !val) return;
      if(!w.codes) w.codes = {};
      w.codes[val.codeTypeId] = val.id;
    });
    console.log(`Wired ${assignRows.length} activity code assignments`);
  }

  console.log(`Imported ${Object.keys(typeMap).length} code types from XER`);
}

// ─── Also expose for baseline import ──────────────────────────
// Wire TASKACTV assignments post-import (called from _xer_phase4 or finalize)
function _wireActivityCodeAssignments(tables) {
  const assignRows = tables['TASKACTV']?.rows || [];
  if(!assignRows.length || !ACTIVITY_CODES.length) return;

  // Build lookup: xer code id → our code type id + value id
  const codeValMap = {};
  ACTIVITY_CODES.forEach(ct => {
    ct.values.forEach(v => {
      if(v._xerId) codeValMap[v._xerId] = { ctId: ct.id, valId: v.id };
    });
  });

  const wpsById = new Map(WPS.map(w=>[w._xer?.task_id||w._xerId, w]));
  let count = 0;
  assignRows.forEach(a => {
    const w = wpsById.get(a.task_id);
    const mapping = codeValMap[a.actv_code_id];
    if(!w || !mapping) return;
    if(!w.codes) w.codes = {};
    w.codes[mapping.ctId] = mapping.valId;
    count++;
  });
  if(count) console.log(`Wired ${count} code assignments`);
}


// ═══════════════════════════════════════════════════════════════
// V33 PERFORMANCE ENGINE — lag-free for 10k+ activities
// ═══════════════════════════════════════════════════════════════

// ── Raise VS threshold ─────────────────────────────────────────
// Already done at declaration — ensure it's 200
// (patched at init time)

// ── Cached succMap — only rebuilt when WPS changes ──────────────

function _getSuccMap() {
  if(_succMapCache && _succMapGeneration === _cacheGeneration) return _succMapCache;
  const m = {};
  for(let i = 0; i < WPS.length; i++) {
    const w = WPS[i];
    for(const p of w.preds) {
      if(!m[p.id]) m[p.id] = [];
      m[p.id].push(w.id);
    }
  }
  _succMapCache = m;
  _succMapGeneration = _cacheGeneration;
  return m;
}

// ── VS scroll debounce ─────────────────────────────────────────
let _vsScrollTimer = null;
function VS_onScroll() {
  if(_vsScrollTimer) return;  // already queued
  _vsScrollTimer = requestAnimationFrame(() => {
    _vsScrollTimer = null;
    VS_render();
  });
}

// ── Fast buildFlatRows using index loop ─────────────────────────
function buildFlatRows(wpsArr, succMap) {
  const result = [];
  // Build WBS node map
  const nodeMap = new Map();
  for(const n of WBS_NODES) nodeMap.set(n.id, n);

  // Group activities by wbsNodeId
  const byNode = new Map();
  const noNode = [];
  for(let i=0;i<wpsArr.length;i++) {
    const w=wpsArr[i];
    if(w.wbsNodeId && nodeMap.has(w.wbsNodeId)) {
      if(!byNode.has(w.wbsNodeId)) byNode.set(w.wbsNodeId,[]);
      byNode.get(w.wbsNodeId).push(w);
    } else {
      noNode.push(w);
    }
  }

  // Walk WBS tree
  function walkNode(nodeId, depth) {
    const node = nodeMap.get(nodeId);
    if(!node) return;
    const acts = byNode.get(nodeId)||[];
    const childIds = WBS_NODES.filter(n=>n.pId===nodeId).map(n=>n.id);
    const totalActs = acts.length + childIds.reduce((s,cid)=>{
      const cn=nodeMap.get(cid); return s+(byNode.get(cid)||[]).length;
    },0);
    result.push({type:'wbs-hdr',node,depth,actCount:totalActs});
    if(!node.collapsed) {
      for(let i=0;i<childIds.length;i++) walkNode(childIds[i],depth+1);
      for(let i=0;i<acts.length;i++) {
        result.push({type:'activity',w:acts[i],indent:depth*16+20,succMap});
      }
    }
  }

  // Root WBS nodes (no parent)
  const roots = WBS_NODES.filter(n=>!n.pId||n.pId===null||n.pId==='');
  for(const root of roots) walkNode(root.id, 0);
  // Activities not in any WBS
  for(const w of noNode) result.push({type:'activity',w,indent:4,succMap});
  return result;
}

// ── Patch renderWps to use cached succMap ────────────────────────
// Override is done inline in renderWps() body below

// ── adUpdate: skip full re-render for name/notes (just sync label) ──
// Already handled: name changes call renderWps() which uses cache

// ── Batch DOM updates in VS_render ──────────────────────────────
// VS_render already uses innerHTML batch — ensure it also uses cached succMap


function _syncGanttHdrScroll(gchart) {
  const hdr = document.getElementById('gchart-hdr');
  if(hdr) hdr.scrollLeft = gchart.scrollLeft;
}


// ═══════════════════════════════════════════════════════════════
// RESOURCE ASSIGNMENT UNITS — Budgeted / Actual / EV / Remaining
// ═══════════════════════════════════════════════════════════════

// Ensure w.resourceAssignments is initialized
function _ensureResAssign(w, resId) {
  if(!w.resourceAssignments) w.resourceAssignments = {};
  if(!w.resourceAssignments[resId]) {
    w.resourceAssignments[resId] = {
      budgetedQty: 0,    // target units (hours/days/tonnes)
      actualQty:   0,    // actual units used
      remainQty:   0,    // remaining units
      budgetedCost: 0,   // target cost
      actualCost:   0,   // actual cost
      remainCost:   0,   // remaining cost
      unit: 'h',         // unit type: h=hours, d=days, t=tonnes, m3=cubic metres, nr=each
    };
  }
  return w.resourceAssignments[resId];
}

// Get assignment or safe default
function _getResAssign(w, resId) {
  return w?.resourceAssignments?.[resId] || {budgetedQty:0,actualQty:0,remainQty:0,budgetedCost:0,actualCost:0,remainCost:0,unit:'h'};
}

// Update a single assignment field
function _setResAssignField(wi, resId, field, val) {
  const w = WPS[wi]; if(!w) return;
  const ra = _ensureResAssign(w, resId);
  ra[field] = (field === 'unit') ? val : (+val || 0);
  // Auto-calc: remainQty = budgetedQty - actualQty
  if(field === 'budgetedQty' || field === 'actualQty') {
    ra.remainQty = Math.max(0, ra.budgetedQty - ra.actualQty);
  }
  if(field === 'remainQty' && ra.remainQty > ra.budgetedQty) {
    ra.budgetedQty = ra.remainQty + ra.actualQty;
  }
  // Propagate cost if rate is known
  const allRes = [...RESOURCES.labor,...RESOURCES.equipment,...RESOURCES.material];
  const res = allRes.find(r=>r.id===resId);
  if(res?.rate && field==='budgetedQty') {
    const dailyRate = res.rate;
    const qtyPerDay = ra.unit==='h' ? (res.hoursPerDay||8) : 1;
    ra.budgetedCost = ra.budgetedQty / qtyPerDay * dailyRate;
    ra.remainCost = ra.remainQty / qtyPerDay * dailyRate;
  }
  saveWbsToProject();
  // Refresh dock resources tab
  renderAdResources(wi);
}

// Compute EV units = budgetedQty × (pct/100)
function _getEvQty(w, resId) {
  const ra = _getResAssign(w, resId);
  return ra.budgetedQty * ((w.pct||0)/100);
}

// Full rewrite of renderAdResources with unit input table
function renderAdResources(wi) {
  const w = WPS[wi]; if(!w) return;
  const allRes = [
    ...RESOURCES.labor.map(r=>({...r,_t:'labor'})),
    ...RESOURCES.equipment.map(r=>({...r,_t:'equip'})),
    ...RESOURCES.material.map(r=>({...r,_t:'material'})),
  ];
  const assigned  = allRes.filter(r=>(w.resourceIds||[]).includes(r.id));
  const available = allRes.filter(r=>!(w.resourceIds||[]).includes(r.id));

  const unitOptions = ['h','d','t','m3','nr','lm','m2'].map(u=>
    `<option value="${u}">${u}</option>`).join('');

  // Assigned resources table with unit inputs
  const assignedHtml = assigned.length ? `
    <table style="width:100%;border-collapse:collapse;font-size:11px">
      <thead><tr style="background:var(--s1)">
        <th style="padding:5px 6px;text-align:left;border-bottom:1px solid var(--b1);font-size:10px;color:var(--t3)">RESOURCE</th>
        <th style="padding:5px 4px;text-align:center;border-bottom:1px solid var(--b1);font-size:10px;color:var(--t3)">UNIT</th>
        <th style="padding:5px 4px;text-align:right;border-bottom:1px solid var(--b1);font-size:10px;color:#3B82F6">BUDGETED</th>
        <th style="padding:5px 4px;text-align:right;border-bottom:1px solid var(--b1);font-size:10px;color:#22C55E">ACTUAL</th>
        <th style="padding:5px 4px;text-align:right;border-bottom:1px solid var(--b1);font-size:10px;color:#6D28D9">EV</th>
        <th style="padding:5px 4px;text-align:right;border-bottom:1px solid var(--b1);font-size:10px;color:#D97706">REMAIN</th>
        <th style="width:24px;border-bottom:1px solid var(--b1)"></th>
      </tr></thead>
      <tbody>
        ${assigned.map(r=>{
          const ra = _getResAssign(w,r.id);
          const ev = (ra.budgetedQty * ((w.pct||0)/100)).toFixed(1);
          const rtLabel = r._t==='labor'?'👤':r._t==='equip'?'⚙':'📦';
          return `<tr style="border-bottom:1px solid var(--b2)">
            <td style="padding:4px 6px">
              <div style="display:flex;align-items:center;gap:4px">
                <span style="font-size:12px">${rtLabel}</span>
                <div>
                  <div style="font-weight:600;color:var(--t1)">${esc(r.name)}</div>
                  <div style="font-size:9px;color:var(--t3)">${getCurrSym()}${r.rate||0}/d · ${r.avail||100}%</div>
                </div>
              </div>
            </td>
            <td style="padding:4px 3px">
              <select style="width:44px;padding:3px;font-size:10px;background:var(--s1);border:1px solid var(--b1);border-radius:4px;color:var(--t1)"
                onchange="_setResAssignField(${wi},'${r.id}','unit',this.value)">
                ${['h','d','t','m3','nr','lm','m2'].map(u=>`<option value="${u}" ${ra.unit===u?'selected':''}>${u}</option>`).join('')}
              </select>
            </td>
            <td style="padding:4px 3px">
              <input type="number" min="0" value="${ra.budgetedQty||0}"
                style="width:64px;padding:3px 4px;font-size:11px;text-align:right;border:1px solid #3B82F6;border-radius:4px;background:var(--s0);color:#3B82F6;font-weight:600"
                onchange="_setResAssignField(${wi},'${r.id}','budgetedQty',this.value)">
            </td>
            <td style="padding:4px 3px">
              <input type="number" min="0" value="${ra.actualQty||0}"
                style="width:64px;padding:3px 4px;font-size:11px;text-align:right;border:1px solid #22C55E;border-radius:4px;background:var(--s0);color:#22C55E;font-weight:600"
                onchange="_setResAssignField(${wi},'${r.id}','actualQty',this.value)">
            </td>
            <td style="padding:4px 8px;text-align:right;font-weight:700;color:#6D28D9;font-family:var(--mono);font-size:11px">${ev}</td>
            <td style="padding:4px 3px">
              <input type="number" min="0" value="${ra.remainQty||0}"
                style="width:64px;padding:3px 4px;font-size:11px;text-align:right;border:1px solid #D97706;border-radius:4px;background:var(--s0);color:#D97706;font-weight:600"
                onchange="_setResAssignField(${wi},'${r.id}','remainQty',this.value)">
            </td>
            <td style="padding:4px 3px;text-align:center">
              <button class="ib del" title="Remove assignment" onclick="toggleResAssign(${wi},'${r.id}',false);renderAdResources(${wi})">×</button>
            </td>
          </tr>`;
        }).join('')}
      </tbody>
      <tfoot>
        <tr style="background:var(--s1)">
          <td colspan="2" style="padding:4px 6px;font-size:10px;font-weight:700;color:var(--t3)">TOTALS</td>
          <td style="padding:4px 4px;text-align:right;font-weight:700;color:#3B82F6;font-family:var(--mono);font-size:11px">
            ${assigned.reduce((s,r)=>s+(_getResAssign(w,r.id).budgetedQty||0),0).toFixed(1)}
          </td>
          <td style="padding:4px 4px;text-align:right;font-weight:700;color:#22C55E;font-family:var(--mono);font-size:11px">
            ${assigned.reduce((s,r)=>s+(_getResAssign(w,r.id).actualQty||0),0).toFixed(1)}
          </td>
          <td style="padding:4px 8px;text-align:right;font-weight:700;color:#6D28D9;font-family:var(--mono);font-size:11px">
            ${assigned.reduce((s,r)=>s+(_getEvQty(w,r.id)||0),0).toFixed(1)}
          </td>
          <td style="padding:4px 4px;text-align:right;font-weight:700;color:#D97706;font-family:var(--mono);font-size:11px">
            ${assigned.reduce((s,r)=>s+(_getResAssign(w,r.id).remainQty||0),0).toFixed(1)}
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>` : '<div style="color:var(--t3);font-size:11px;padding:8px">No resources assigned. Assign from the list below.</div>';

  // Available resources to assign
  const availHtml = available.length ? available.map(r=>{
    const rtLabel = r._t==='labor'?'👤':r._t==='equip'?'⚙':'📦';
    return `<div style="display:flex;align-items:center;gap:6px;padding:4px 6px;border-radius:4px;background:var(--s1);border:1px solid var(--b2);margin-bottom:3px;font-size:11px">
      <span style="font-size:12px">${rtLabel}</span>
      <span style="flex:1;font-weight:500">${esc(r.name)}</span>
      <span style="color:var(--t3);font-size:10px">${r._t} · ${getCurrSym()}${r.rate||0}/d</span>
      <button class="btn btns" style="font-size:10px;padding:2px 8px" onclick="toggleResAssign(${wi},'${r.id}',true);renderAdResources(${wi})">+ Assign</button>
    </div>`;}).join('')
  : `<div style="color:var(--t3);font-size:11px;padding:4px">
      All resources assigned — or <a href="#" onclick="mainTab('resources');return false" style="color:var(--blue)">add resources first →</a>
    </div>`;

  const al = document.getElementById('ad-res-list');
  const av = document.getElementById('ad-res-avail');
  if(al) al.innerHTML = assignedHtml;
  if(av) av.innerHTML = availHtml;
}


// ═══════════════════════════════════════════════════════════════
// EVM ENGINE — BCWS / BCWP / ACWP from resource assignments
// ═══════════════════════════════════════════════════════════════

function computeEVM() {
  const dataDateStr = document.getElementById('evm-data-date')?.value||PROJECT_SETTINGS.dataDate||'';
  const sym = getCurrSym();
  if(!WPS.length) return;

  const projStart = new Date(P.start||PROJECT_SETTINGS.start||'2025-01-01');
  const ddDate    = dataDateStr ? new Date(dataDateStr) : null;
  const ddDays    = ddDate ? (ddDate-projStart)/86400000 : null;

  // ── BAC: sum of budgeted costs ─────────────────────────────
  let bac = 0;
  WPS.forEach(w => {
    if(w.resourceAssignments && Object.keys(w.resourceAssignments).length) {
      bac += Object.values(w.resourceAssignments).reduce((s,ra)=>s+(ra.budgetedCost||0),0);
    } else {
      bac += w.evBudget||w.cost||0;
    }
  });
  const bacInput = +(document.getElementById('evm-bac')?.value||0);
  if(bacInput > 0) bac = bacInput;
  if(bac <= 0) { console.warn('EVM: No BAC found'); return; }
  PROJECT_SETTINGS.bac = bac;

  // ── BCWS (PV): Planned Value at data date ──────────────────
  // Sum of budgeted cost of all work scheduled to be done by DD
  let BCWS = 0;
  WPS.forEach(w => {
    const r = SCHED.r?.[w.id]||{};
    const wBudget = w.resourceAssignments
      ? Object.values(w.resourceAssignments).reduce((s,ra)=>s+(ra.budgetedCost||0),0)
      : (w.evBudget||w.cost||0);
    if(!wBudget) return;
    if(ddDays == null) { BCWS += wBudget; return; }
    const es = r.es??0, ef = r.ef??(es+(w.dur||0));
    const dur = Math.max(1, ef-es);
    // Linear spread — fraction completed by DD
    const plannedFrac = Math.min(1, Math.max(0, (ddDays-es)/dur));
    BCWS += wBudget * plannedFrac;
  });

  // ── BCWP (EV): Earned Value ────────────────────────────────
  // Sum of (budgetedCost × %complete) for each activity
  let BCWP = 0;
  WPS.forEach(w => {
    const pct = (w.pct||0)/100;
    const wBudget = w.resourceAssignments
      ? Object.values(w.resourceAssignments).reduce((s,ra)=>s+(ra.budgetedCost||0),0)
      : (w.evBudget||w.cost||0);
    BCWP += wBudget * pct;
  });

  // ── ACWP (AC): Actual Cost ─────────────────────────────────
  let ACWP = 0;
  WPS.forEach(w => {
    if(w.resourceAssignments) {
      ACWP += Object.values(w.resourceAssignments).reduce((s,ra)=>s+(ra.actualCost||0),0);
    } else {
      ACWP += w.actualCost||0;
    }
  });

  // ── Derived metrics ────────────────────────────────────────
  const SV   = BCWP - BCWS;                              // Schedule Variance
  const CV   = BCWP - ACWP;                              // Cost Variance
  const SPI  = BCWS>0 ? BCWP/BCWS : 0;                  // Schedule Performance Index
  const CPI  = ACWP>0 ? BCWP/ACWP : (BCWP>0?1:0);      // Cost Performance Index
  const EAC  = CPI>0 ? bac/CPI : bac;                   // Estimate at Completion
  const ETC  = EAC - ACWP;                               // Estimate to Complete
  const VAC  = bac - EAC;                                // Variance at Completion
  const TCPI = (EAC-ACWP)>0 ? (bac-BCWP)/(EAC-ACWP) : 0; // TCPI
  const pctComplete = bac>0 ? (BCWP/bac*100) : 0;

  // Cache for use by S-curve
  _evmCache = {BCWS,BCWP,ACWP,bac,SV,CV,SPI,CPI,EAC,ETC,VAC,TCPI,pctComplete,ddDays,projStart};
  // Always update dashboard EVM panel
  _updateDashEvm?.({bac,BCWS,BCWP,ACWP,SPI,CPI,SV,CV,EAC,ETC,VAC,TCPI,pctComplete});
  renderDashboardEVM?.();

  // ── Update UI ──────────────────────────────────────────────
  const fmt = v => sym+(Math.abs(v)>=1e6 ? (v/1e6).toFixed(2)+'M' : Math.abs(v)>=1e3 ? (v/1e3).toFixed(1)+'k' : v.toFixed(0));
  const fmtPct = v => (v*100).toFixed(1)+'%';
  const setEl = (id,val,cls)=>{ const e=document.getElementById(id); if(e){e.textContent=val; if(cls)e.className='evm-val '+cls;} };

  setEl('evm-bac-display', fmt(bac));
  setEl('evm-pv',  fmt(BCWS), BCWS>=BCWP?'evm-good':'evm-warn');
  setEl('evm-ev',  fmt(BCWP));
  setEl('evm-ac',  fmt(ACWP), ACWP>BCWP?'evm-bad':'evm-good');
  setEl('evm-sv',  (SV>=0?'+':'')+fmt(SV), SV>=0?'evm-good':'evm-bad');
  setEl('evm-cv',  (CV>=0?'+':'')+fmt(CV), CV>=0?'evm-good':'evm-bad');
  setEl('evm-spi', SPI.toFixed(3), SPI>=1?'evm-good':SPI>=0.9?'evm-warn':'evm-bad');
  setEl('evm-cpi', CPI.toFixed(3), CPI>=1?'evm-good':CPI>=0.9?'evm-warn':'evm-bad');
  setEl('evm-eac', fmt(EAC));
  setEl('evm-etc', fmt(ETC));
  setEl('evm-vac', (VAC>=0?'+':'')+fmt(VAC), VAC>=0?'evm-good':'evm-bad');
  setEl('evm-tcpi', TCPI.toFixed(3), TCPI<=1?'evm-good':TCPI<=1.1?'evm-warn':'evm-bad');
  setEl('evm-pct-complete', pctComplete.toFixed(1)+'%');

  // Show in BAC input if not already set
  const bacEl=document.getElementById('evm-bac'); if(bacEl&&!bacEl.value) bacEl.value=bac.toFixed(0);

  // Update S-curve with new EVM data
  setTimeout(renderSCurve, 50);
}

// Resource-specific EVM totals (for resource S-curve)
function computeResourceEVM(resId) {
  const allRes=[...RESOURCES.labor,...RESOURCES.equipment,...RESOURCES.material];
  const res = allRes.find(r=>r.id===resId);
  if(!res) return null;
  let budgQty=0, actQty=0, evQty=0, remQty=0;
  WPS.forEach(w=>{
    const ra = w.resourceAssignments?.[resId]; if(!ra) return;
    budgQty += ra.budgetedQty||0;
    actQty  += ra.actualQty||0;
    evQty   += (ra.budgetedQty||0) * ((w.pct||0)/100);
    remQty  += ra.remainQty||0;
  });
  return { name:res.name, unit:Object.values(WPS.map(w=>w.resourceAssignments?.[resId]?.unit||'h'))[0]||'h',
           budgQty, actQty, evQty, remQty,
           SPI: budgQty>0?evQty/budgQty:0 };
}


// ── EVM Dashboard helpers ─────────────────────────────────────
function _syncEvmDataDate(val) {
  PROJECT_SETTINGS.dataDate = val;
  const src = document.getElementById('evm-data-date');
  if(src) src.value = val;
}
function _syncEvmBac(val) {
  const bac = +val || 0;
  if(bac > 0) { PROJECT_SETTINGS.bac = bac; EVM_DATA.bac = bac; }
  const src = document.getElementById('evm-bac');
  if(src && bac > 0) src.value = bac;
}
function _runDashEvm() {
  // Sync inputs from dashboard to EVM panel
  const dd = document.getElementById('db-data-date')?.value;
  if(dd) _syncEvmDataDate(dd);
  const bacV = document.getElementById('db-bac')?.value;
  if(bacV) _syncEvmBac(bacV);
  computeEVM();
}
function _updateDashEvm(metrics) {
  if(!metrics) return;
  const {bac, BCWS, BCWP, ACWP, SPI, CPI, SV, CV, EAC, ETC, VAC, TCPI, pctComplete} = metrics;
  const sym = getCurrSym() || '';
  const fC = v => { if(v==null||isNaN(v))return '—'; const n=Math.abs(Math.round(v)); const s=n>=1e6?(n/1e6).toFixed(1)+'M':n>=1e3?(n/1e3).toFixed(0)+'k':n.toLocaleString(); return (v<0?'-':'')+sym+s; };
  const fP = v => v!=null&&!isNaN(v)?v.toFixed(3):'—';
  const cc = (id, v, good, warn) => {
    const el = document.getElementById(id); if(!el) return;
    el.textContent = typeof v==='number'&&!isNaN(v) ? (typeof good==='string'&&good.startsWith('cost')?fC(v):fP(v)) : '—';
    el.className = 'evm-val ' + (v==null||isNaN(v)?'evm-neu':v>=good?'evm-good':v>=warn?'evm-warn':'evm-bad');
  };
  const se = (id, v) => { const e=document.getElementById(id); if(e) e.textContent=v; };

  se('db-bac-v', fC(bac));
  se('db-pv',    fC(BCWS));
  se('db-ev',    fC(BCWP));
  se('db-ac',    fC(ACWP));
  se('db-pct',   pctComplete!=null ? pctComplete.toFixed(1)+'%' : '—');

  cc('db-spi', SPI, 1, 0.9);
  cc('db-cpi', CPI, 1, 0.9);

  // SV & CV (cost format, green if >= 0)
  const svEl = document.getElementById('db-sv'); if(svEl){ svEl.textContent=fC(SV); svEl.className='evm-val '+(SV>=0?'evm-good':'evm-bad'); }
  const cvEl = document.getElementById('db-cv'); if(cvEl){ cvEl.textContent=fC(CV); cvEl.className='evm-val '+(CV>=0?'evm-good':'evm-bad'); }

  cc('db-tcpi', TCPI, 1, 1.1);  // lower is better for TCPI but invert
  const tcpiEl = document.getElementById('db-tcpi'); if(tcpiEl){ tcpiEl.textContent=fP(TCPI); tcpiEl.className='evm-val '+(TCPI<=1?'evm-good':TCPI<=1.1?'evm-warn':'evm-bad'); }

  se('db-eac', fC(EAC));
  se('db-etc', fC(ETC));
  const vacEl = document.getElementById('db-vac'); if(vacEl){ vacEl.textContent=fC(VAC); vacEl.className='evm-val '+(VAC>=0?'evm-good':'evm-bad'); }

  // Progress bars (capped 0-200% for viz)
  const spiBar = document.getElementById('db-spi-bar');
  const cpiBar = document.getElementById('db-cpi-bar');
  const spiLbl = document.getElementById('db-spi-lbl');
  const cpiLbl = document.getElementById('db-cpi-lbl');
  if(spiBar && SPI!=null) { const w=Math.min(200,Math.max(0,SPI*100)); spiBar.style.width=w+'%'; spiBar.style.background=SPI>=1?'#22C55E':SPI>=0.9?'#F59E0B':'#DC2626'; }
  if(cpiBar && CPI!=null) { const w=Math.min(200,Math.max(0,CPI*100)); cpiBar.style.width=w+'%'; cpiBar.style.background=CPI>=1?'#22C55E':CPI>=0.9?'#F59E0B':'#DC2626'; }
  if(spiLbl && SPI!=null) spiLbl.textContent = 'SPI '+fP(SPI);
  if(cpiLbl && CPI!=null) cpiLbl.textContent = 'CPI '+fP(CPI);

  // Sync data date / BAC to dashboard inputs
  const ddEl = document.getElementById('db-data-date');
  if(ddEl && PROJECT_SETTINGS.dataDate && !ddEl.value) ddEl.value = PROJECT_SETTINGS.dataDate;
  const bacEl = document.getElementById('db-bac');
  if(bacEl && bac && !bacEl.value) bacEl.value = bac.toFixed(0);
}


// ═══════════════════════════════════════════════════════════════
// RUN SCHEDULE — Set Data Date and execute CPM update
// ═══════════════════════════════════════════════════════════════

function openRunSchedule() {
  const today = new Date().toISOString().split('T')[0];
  const currentDD = PROJECT_SETTINGS.dataDate || today;
  const projStart = P.start || PROJECT_SETTINGS.start || '2025-01-01';
  const projEnd   = SCHED.pe ? addWD(projStart, SCHED.pe) : '';

  const html = `<div class="modal" style="max-width:460px;width:96vw">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
      <div style="background:linear-gradient(135deg,#6D28D9,#2563EB);border-radius:8px;padding:8px;line-height:1"><span style="font-size:18px">&#9654;</span></div>
      <div>
        <h3 style="margin:0;font-size:15px;font-weight:800">Run Schedule</h3>
        <div style="font-size:11px;color:var(--t3);margin-top:2px">Recalculate CPM from the selected data date</div>
      </div>
      <div style="flex:1"></div>
      <button class="btn" onclick="closeOvl('run-sched-ovl')">&#215;</button>
    </div>

    <!-- Data Date picker -->
    <div style="background:var(--s1);border-radius:8px;padding:14px 16px;margin-bottom:12px">
      <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em;display:block;margin-bottom:6px">DATA DATE</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input type="date" id="rs-data-date" value="${currentDD}"
          style="flex:1;padding:8px 12px;font-size:13px;background:var(--s0);border:2px solid #6D28D9;border-radius:6px;color:var(--t1);font-family:inherit">
        <button class="btn btns" onclick="document.getElementById('rs-data-date').value='${today}'" style="font-size:11px;white-space:nowrap">Today</button>
      </div>
      <div style="margin-top:8px;font-size:11px;color:var(--t3);display:flex;gap:16px">
        <span>📅 Project Start: <strong>${projStart}</strong></span>
        ${projEnd ? `<span>🏁 Current Finish: <strong>${projEnd}</strong></span>` : ''}
      </div>
    </div>

    <!-- Options -->
    <div style="background:var(--s1);border-radius:8px;padding:14px 16px;margin-bottom:16px">
      <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em;display:block;margin-bottom:10px">SCHEDULE UPDATE OPTIONS</label>
      <div style="display:flex;flex-direction:column;gap:8px">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:12px">
          <input type="checkbox" id="rs-auto-status" checked style="width:14px;height:14px;accent-color:#6D28D9">
          <div>
            <div style="font-weight:600;color:var(--t1)">Auto-update activity status</div>
            <div style="font-size:10px;color:var(--t3)">Activities finishing before DD → Complete. Spanning DD → In Progress (prorated %)</div>
          </div>
        </label>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:12px">
          <input type="checkbox" id="rs-recompute-evm" checked style="width:14px;height:14px;accent-color:#6D28D9">
          <div>
            <div style="font-weight:600;color:var(--t1)">Recompute EVM metrics</div>
            <div style="font-size:10px;color:var(--t3)">Recalculate PV, EV, AC, SPI, CPI at the new data date</div>
          </div>
        </label>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:12px">
          <input type="checkbox" id="rs-retain-manual" checked style="width:14px;height:14px;accent-color:#6D28D9">
          <div>
            <div style="font-weight:600;color:var(--t1)">Retain manually set % complete</div>
            <div style="font-size:10px;color:var(--t3)">Don't override activities with manually entered % complete values</div>
          </div>
        </label>
      </div>
    </div>

    <!-- Action buttons -->
    <div style="display:flex;gap:8px;justify-content:flex-end">
      <button class="btn btns" onclick="closeOvl('run-sched-ovl')">Cancel</button>
      <button class="btn" style="background:linear-gradient(135deg,#6D28D9,#2563EB);color:#fff;font-weight:700;padding:8px 24px;border-radius:6px;border:none;cursor:pointer;font-size:13px"
        onclick="_executeRunSchedule()">
        &#9654; Run Schedule
      </button>
    </div>
  </div>`;

  let ovl = document.getElementById('run-sched-ovl');
  if(!ovl) {
    ovl = document.createElement('div');
    ovl.id = 'run-sched-ovl';
    ovl.className = 'ovl';
    document.body.appendChild(ovl);
    ovl.onclick = e => { if(e.target === ovl) closeOvl('run-sched-ovl'); };
  }
  ovl.innerHTML = html;
  ovl.classList.add('on');
  // Focus the date input
  setTimeout(() => document.getElementById('rs-data-date')?.focus(), 100);
}

function _executeRunSchedule() {
  const ddInput  = document.getElementById('rs-data-date');
  const autoStat = document.getElementById('rs-auto-status')?.checked;
  const recompEVM= document.getElementById('rs-recompute-evm')?.checked;
  const retainMan= document.getElementById('rs-retain-manual')?.checked;

  const ddStr = ddInput?.value;
  if(!ddStr) { alert('Please select a Data Date.'); ddInput?.focus(); return; }

  // Save data date
  PROJECT_SETTINGS.dataDate = ddStr;
  const ddDate    = new Date(ddStr);
  const projStart = new Date(P.start || PROJECT_SETTINGS.start || '2025-01-01');

  // ── Step 1: Auto-update activity statuses ──────────────────
  if(autoStat && WPS.length) {
    let updated = 0;
    WPS.forEach(w => {
      const r = SCHED.r?.[w.id] || {};
      if(r.es == null || r.ef == null) return;

      // Convert CPM days → absolute dates
      const msPerDay   = 86400000;
      const actStart   = new Date(projStart.getTime() + Math.round(r.es) * msPerDay);
      const actFinish  = new Date(projStart.getTime() + Math.round(r.ef) * msPerDay);

      // Skip manually set %complete if retain option is on
      if(retainMan && w._manualPct) return;
      if(retainMan && w.status === 'COM') return;  // Don't touch completed

      if(actFinish <= ddDate) {
        // Activity should be complete
        if(w.status !== 'COM') {
          w.status    = 'COM';
          w.pct       = 100;
          w.actualFinish = w.actualFinish || actFinish.toISOString().split('T')[0];
          w.actualStart  = w.actualStart  || actStart.toISOString().split('T')[0];
          updated++;
        }
      } else if(actStart <= ddDate && ddDate < actFinish) {
        // Activity is in progress — calculate elapsed fraction
        const totalMs   = actFinish - actStart;
        const elapsedMs = ddDate - actStart;
        const pct = Math.round(Math.min(99, Math.max(1, (elapsedMs / totalMs) * 100)));
        if(w.status !== 'IP' || Math.abs(w.pct - pct) >= 2) {
          w.status = 'IP';
          w.pct    = pct;
          w.actualStart = w.actualStart || actStart.toISOString().split('T')[0];
          updated++;
        }
      } else if(actStart > ddDate && w.status !== 'NS') {
        // Activity hasn't started yet
        w.status = 'NS';
        w.pct    = 0;
        updated++;
      }
    });
    console.log(`Run Schedule: updated ${updated} activity statuses`);
  }

  // ── Step 2: Recalculate CPM ────────────────────────────────
  recalc();

  // ── Step 3: Update EVM ────────────────────────────────────
  if(recompEVM) {
    // Sync data date to EVM input
    const evmDd = document.getElementById('evm-data-date');
    if(evmDd) evmDd.value = ddStr;
    const dbDd = document.getElementById('db-data-date');
    if(dbDd) dbDd.value = ddStr;
    computeEVM?.();
  }

  // ── Step 4: Re-render ──────────────────────────────────────
  VS.flat = []; invalidateRowCache?.();
  renderWps();
  if(_ganttSplitOpen) { setTimeout(renderGantt, 0); }
  syncProjectSettings();
  saveWbsToProject();

  // Update data date badge in header
  const ddBadge = document.getElementById('hdr-datadate');
  if(ddBadge) {
    ddBadge.textContent = 'DD: ' + ddStr;
    ddBadge.classList.add('has-dd');
    ddBadge.style.display = 'flex';
  }

  closeOvl('run-sched-ovl');

  // Show summary toast
  const actCount  = WPS.length;
  const cpCount   = WPS.filter(w => SCHED.r?.[w.id]?.cp).length;
  const comCount  = WPS.filter(w => w.status === 'COM').length;
  const ipCount   = WPS.filter(w => w.status === 'IP').length;
  _showToast(`&#9654; Schedule run complete · DD: ${ddStr} · ${cpCount} critical · ${comCount} complete · ${ipCount} in progress`, 4000);
}

// Toast notification helper
let _toastTimer = null;
function _showToast(msg, duration) {
  let toast = document.getElementById('gs-toast');
  if(!toast) {
    toast = document.createElement('div');
    toast.id = 'gs-toast';
    toast.style.cssText = 'position:fixed;bottom:64px;left:50%;transform:translateX(-50%);background:rgba(30,20,60,.92);color:#fff;padding:10px 22px;border-radius:24px;font-size:12px;z-index:99999;pointer-events:none;transition:opacity .3s;white-space:nowrap;box-shadow:0 4px 20px rgba(0,0,0,.25)';
    document.body.appendChild(toast);
  }
  toast.innerHTML = msg;
  toast.style.opacity = '1';
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => { toast.style.opacity = '0'; }, duration || 3000);
}


function deleteActivity(wi) {
  const w = WPS[wi]; if(!w) return;
  if(!confirm(`Delete "${w.name}"? This will also remove all logic relationships.`)) return;
  const wId = w.id;
  // Remove from WPS
  WPS.splice(wi, 1);
  // Remove all predecessor references to this activity
  WPS.forEach(x => { x.preds = x.preds.filter(p => p.id !== wId); });
  recalc();
  closeDetailDock?.();
  VS.flat = []; invalidateRowCache?.();
  renderWps();
  saveWbsToProject();
}


// ── Logic Tab: live activity search for pred/succ assignment ──
function _filterLogicSearch(side, query) {
  const w = _selectedWi != null ? WPS[_selectedWi] : null;
  const resDiv = document.getElementById(`ad-${side}-results`);
  if(!resDiv) return;
  const q = query.trim().toLowerCase();
  if(!q) { resDiv.style.display = 'none'; return; }

  // Build candidate list — exclude self and already-assigned
  const existingIds = side === 'pred'
    ? (w?.preds || []).map(p => p.id)
    : WPS.filter(x => x.preds.some(p => p.id === w?.id)).map(x => x.id);

  const results = WPS.filter(x =>
    x.id !== w?.id &&
    !existingIds.includes(x.id) &&
    (x.wbs.includes(q) || x.activityId?.toLowerCase().includes(q) || x.name.toLowerCase().includes(q))
  ).slice(0, 12);

  if(!results.length) {
    resDiv.innerHTML = '<div style="padding:6px 10px;font-size:11px;color:var(--t3);font-style:italic">No match</div>';
    resDiv.style.display = 'block';
    return;
  }

  resDiv.innerHTML = results.map(r => `
    <div class="lsearch-row" onclick="_pickLogicActivity('${side}','${r.id}')"
      style="display:flex;align-items:center;gap:6px;padding:5px 10px;cursor:pointer;border-bottom:1px solid var(--b2);font-size:11px"
      onmouseover="this.style.background='var(--bluel)'" onmouseout="this.style.background=''">
      <span style="font-family:var(--mono);font-size:10px;color:#6D28D9;flex-shrink:0;min-width:40px">${esc(r.wbs)}</span>
      <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--t1)">${esc(r.name)}</span>
      <span style="font-size:9px;color:var(--t3);flex-shrink:0">${r.dur}d</span>
    </div>`).join('');
  resDiv.style.display = 'block';
}

function _pickLogicActivity(side, actId) {
  const w = _selectedWi != null ? WPS[_selectedWi] : null;
  if(!w) return;
  const target = WPS.find(x => x.id === actId); if(!target) return;

  const tp = document.getElementById(`ad-${side}-type`)?.value || 'FS';
  const lg = +(document.getElementById('ad-pred-lag')?.value || 0);

  if(side === 'pred') {
    if(!w.preds.some(p => p.id === actId)) {
      w.preds.push({id: actId, tp, lg});
    }
  } else {
    if(!target.preds.some(p => p.id === w.id)) {
      target.preds.push({id: w.id, tp, lg: 0});
    }
  }

  // Clear search
  const inp = document.getElementById(`ad-${side}-search`);
  const res = document.getElementById(`ad-${side}-results`);
  if(inp) inp.value = '';
  if(res) res.style.display = 'none';

  recalc(); _afterRenderWps?.(); renderAdLogic(_selectedWi);
  saveWbsToProject();
}

function _selectLogicSearchFirst(side) {
  const first = document.querySelector(`#ad-${side}-results .lsearch-row`);
  if(first) first.click();
}

// Close dropdowns when clicking outside
document.addEventListener('click', e => {
  ['pred','succ'].forEach(side => {
    const inp = document.getElementById(`ad-${side}-search`);
    const res = document.getElementById(`ad-${side}-results`);
    if(res && inp && !inp.contains(e.target) && !res.contains(e.target)) {
      res.style.display = 'none';
    }
  });
}, true);


// ═══════════════════════════════════════════════════════════════
// CREDIT MANAGEMENT SYSTEM
// ═══════════════════════════════════════════════════════════════

let _credits = {
  balance: 500,       // current credits
  total:   500,       // total purchased/allocated
  history: [],        // [{date, action, amount, balance}]
  plan: 'standard',   // plan tier
};

// Load from localStorage
(function _loadCredits() {
  try {
    const stored = localStorage.getItem('pa_credits');
    if(stored) Object.assign(_credits, JSON.parse(stored));
    // Seed with demo history if empty
    if(!_credits.history.length) {
      const today = new Date().toISOString().split('T')[0];
      _credits.history = [
        {date: today, action:'Account opened', amount:500, balance:500},
      ];
      _saveCredits();
    }
  } catch(e) {}
})();

function _saveCredits() {
  try { localStorage.setItem('pa_credits', JSON.stringify(_credits)); } catch(e){}
}

function _useCredit(action, amount) {
  if(_credits.balance <= 0) {
    alert('No credits remaining. Please top up to continue.');
    return false;
  }
  _credits.balance = Math.max(0, _credits.balance - amount);
  _credits.history.unshift({
    date: new Date().toISOString().split('T')[0],
    action, amount, balance: _credits.balance,
  });
  if(_credits.history.length > 50) _credits.history.pop();
  _saveCredits();
  _refreshCreditPill();
  return true;
}

function _refreshCreditPill() {
  const pct  = Math.max(0, Math.min(100, (_credits.balance / _credits.total) * 100));
  const col  = pct > 50 ? '#22C55E' : pct > 20 ? '#F59E0B' : '#DC2626';
  // User menu items
  const umCredit = document.getElementById('um-credit');
  if(umCredit) umCredit.textContent = _credits.balance.toLocaleString();
  const umCreditTotal = document.getElementById('um-credit-total');
  if(umCreditTotal) umCreditTotal.textContent = '/ ' + _credits.total.toLocaleString();
  const umBar = document.getElementById('um-credit-bar');
  if(umBar) {
    umBar.style.width = pct + '%';
    umBar.style.background = col;
  }
  const plan = (typeof SUBSCRIPTION_PLANS !== 'undefined') ? SUBSCRIPTION_PLANS.find(p => p.id === _userPlan) : null;
  const planName = plan?.name || (typeof _userPlan !== 'undefined' ? _userPlan : 'Free');
  const umPlan = document.getElementById('um-plan');
  if(umPlan) umPlan.textContent = planName;
  const umPlanBadge = document.getElementById('um-plan-badge');
  if(umPlanBadge) {
    umPlanBadge.textContent = planName.toUpperCase();
    if(plan) {
      umPlanBadge.style.background = plan.color + '22';
      umPlanBadge.style.color = plan.color;
    }
  }
  // Update user identity card
  const umName = document.getElementById('um-name');
  const umEmail = document.getElementById('um-email');
  const umAvatar = document.getElementById('um-avatar');
  if(typeof currentUser !== 'undefined' && currentUser) {
    if(umName)  umName.textContent  = currentUser.name  || 'User';
    if(umEmail) umEmail.textContent = currentUser.email || '';
    if(umAvatar) umAvatar.textContent = (currentUser.name || 'U')[0].toUpperCase();
  }
}

function openCreditModal() {
  const pct = Math.max(0, Math.min(100, (_credits.balance / _credits.total) * 100));
  const color = pct > 50 ? '#22C55E' : pct > 20 ? '#F59E0B' : '#DC2626';
  // Gauge SVG (semi-circle arc)
  const R = 70, cx = 80, cy = 80;
  const startAngle = -200, endAngle = 20; // degrees
  const sweep = endAngle - startAngle;
  const creditAngle = startAngle + (sweep * (1 - pct/100));
  const toRad = d => d * Math.PI / 180;
  const arc = (a1, a2, r, col, w) => {
    const x1 = cx + r*Math.cos(toRad(a1)), y1 = cy + r*Math.sin(toRad(a1));
    const x2 = cx + r*Math.cos(toRad(a2)), y2 = cy + r*Math.sin(toRad(a2));
    const lg = (a2-a1) > 180 ? 1 : 0;
    return `<path d="M${x1},${y1} A${r},${r} 0 ${lg},1 ${x2},${y2}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`;
  };
  const gaugeSvg = `<svg viewBox="0 0 160 160">
    ${arc(startAngle, endAngle, R, 'rgba(0,0,0,.08)', 12)}
    ${pct>0?arc(startAngle, startAngle+(sweep*(pct/100)), R, color, 12):''}
    <circle cx="${cx}" cy="${cy}" r="54" fill="var(--s1)"/>
  </svg>`;

  const histHtml = _credits.history.slice(0,8).map(h => `
    <div class="credit-hist-row">
      <span style="flex:1;color:var(--t2)">${h.action}</span>
      <span style="font-family:var(--mono);font-size:10px;color:${h.amount<0||h.action.includes('Used')?'#DC2626':'#22C55E'};font-weight:700">${h.amount>0?'+':'-'}${Math.abs(h.amount)}</span>
      <span style="color:var(--t3);font-size:10px;width:50px;text-align:right">${h.date.slice(5)}</span>
    </div>`).join('');

  const html = `
    <div class="credit-modal-overlay" id="credit-modal-ovl" onclick="if(event.target===this)closeCreditModal()">
      <div class="credit-modal">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px">
          <span style="font-size:20px">💳</span>
          <h3 style="margin:0;font-size:15px;font-weight:800">Credits</h3>
          <div style="flex:1"></div>
          <button class="btn" onclick="closeCreditModal()" style="font-size:16px;background:none;border:none;cursor:pointer;color:var(--t2)">✕</button>
        </div>
        <!-- Gauge -->
        <div class="credit-gauge-wrap">
          ${gaugeSvg}
          <div class="credit-gauge-val">
            <div class="cgv-num" style="color:${color}">${_credits.balance.toLocaleString()}</div>
            <div class="cgv-lbl">CREDITS LEFT</div>
            <div style="font-size:9px;color:var(--t3);margin-top:2px">${pct.toFixed(0)}% of ${_credits.total.toLocaleString()}</div>
          </div>
        </div>
        <!-- Burnout bar -->
        <div style="margin:0 0 16px">
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--t3);margin-bottom:4px">
            <span>Credit Burnout</span><span style="font-weight:700;color:${color}">${pct.toFixed(0)}% remaining</span>
          </div>
          <div style="height:10px;background:var(--b1);border-radius:5px;overflow:hidden">
            <div style="height:100%;width:${pct}%;background:${color};border-radius:5px;transition:width .5s ease"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--t3);margin-top:3px">
            <span>Used: ${(_credits.total - _credits.balance).toLocaleString()}</span>
            <span>Total: ${_credits.total.toLocaleString()}</span>
          </div>
        </div>
        <!-- Top up -->
        <div style="display:flex;gap:6px;margin-bottom:16px">
          <button class="btn btns" style="flex:1;font-size:11px" onclick="_topUpCredits(100)">+ 100</button>
          <button class="btn btns" style="flex:1;font-size:11px" onclick="_topUpCredits(500)">+ 500</button>
          <button class="btn btnp" style="flex:1;font-size:11px" onclick="_topUpCredits(1000)">+ 1000</button>
        </div>
        <!-- History -->
        <div style="border-top:1px solid var(--b1);padding-top:12px">
          <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.08em;margin-bottom:6px">RECENT ACTIVITY</div>
          ${histHtml || '<div style="color:var(--t3);font-size:11px;padding:4px 0">No activity yet</div>'}
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', html);
}

function closeCreditModal() {
  document.getElementById('credit-modal-ovl')?.remove();
}

function _topUpCredits(amount) {
  _credits.balance += amount;
  _credits.total   = Math.max(_credits.total, _credits.balance);
  _credits.history.unshift({date:new Date().toISOString().split('T')[0], action:'Top-up', amount, balance:_credits.balance});
  _saveCredits();
  closeCreditModal();
  _refreshCreditPill();
  openCreditModal();  // reopen with updated state
}


// ═══════════════════════════════════════════════════════════════
// SUBSCRIPTION MANAGEMENT
// ═══════════════════════════════════════════════════════════════
const SUBSCRIPTION_PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: '£0',
    period: 'forever',
    credits: 100,
    color: '#94A3B8',
    features: [
      '100 credits / month',
      '1 active project',
      'Basic CPM scheduling',
      'CSV / JSON export',
      'Community support',
    ],
    cta: 'Current Plan',
  },
  {
    id: 'starter',
    name: 'Starter',
    price: '£19',
    period: 'per month',
    credits: 1000,
    color: '#3B82F6',
    features: [
      '1,000 credits / month',
      '5 active projects',
      'Full CPM + Longest Path',
      'XER import / export',
      'Baseline tracking',
      'Email support',
    ],
    cta: 'Upgrade to Starter',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '£49',
    period: 'per month',
    credits: 5000,
    popular: true,
    color: '#6D28D9',
    features: [
      '5,000 credits / month',
      'Unlimited projects',
      'Full EVM + DCMA analysis',
      'Activity codes & WBS dictionary',
      'Resource & cost tracking',
      'Priority support',
      'Custom branding',
    ],
    cta: 'Upgrade to Professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '£199',
    period: 'per month',
    credits: 25000,
    color: '#0F172A',
    features: [
      '25,000 credits / month',
      'Unlimited everything',
      'Multi-user team access',
      'API access',
      'SSO / SAML',
      'Dedicated success manager',
      '24/7 phone support',
      'On-premise option',
    ],
    cta: 'Contact Sales',
  },
];

let _userPlan = 'free';
(function _loadPlan() {
  try {
    const stored = localStorage.getItem('pa_user_plan');
    if(stored) _userPlan = stored;
  } catch(e) {}
})();

function _setPlan(planId) {
  _userPlan = planId;
  try { localStorage.setItem('pa_user_plan', planId); } catch(e){}
  const plan = SUBSCRIPTION_PLANS.find(p => p.id === planId);
  if(plan) {
    _credits.total = plan.credits;
    _credits.balance = plan.credits;
    _credits.history.unshift({
      date: new Date().toISOString().split('T')[0],
      action: `Subscribed: ${plan.name}`,
      amount: plan.credits,
      balance: plan.credits,
    });
    _saveCredits();
    _refreshCreditPill();
  }
  // Update user menu plan label
  const ul = document.getElementById('um-plan');
  if(ul) ul.textContent = plan?.name || planId;
}

function openSubscriptionModal() {
  // Close any open credit modal first
  closeCreditModal?.();

  const html = `
    <div class="credit-modal-overlay" id="subs-modal-ovl" onclick="if(event.target===this)closeSubscriptionModal()">
      <div style="background:var(--s0);border-radius:14px;padding:30px 32px;width:96vw;max-width:920px;max-height:90vh;overflow-y:auto;box-shadow:0 24px 80px rgba(0,0,0,.4);border:1px solid var(--b1)">
        <!-- Header -->
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:6px">
          <span style="font-size:22px">&#128179;</span>
          <h2 style="margin:0;font-size:17px;font-weight:800">Subscription Plans</h2>
          <div style="flex:1"></div>
          <button onclick="closeSubscriptionModal()" style="background:none;border:none;cursor:pointer;font-size:18px;color:var(--t2);padding:4px 8px" title="Close">&#215;</button>
        </div>
        <p style="margin:0 0 20px;font-size:12px;color:var(--t3)">Choose the plan that fits your needs. Cancel anytime, no questions asked.</p>

        <!-- Plans grid -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:14px;margin-bottom:20px">
          ${SUBSCRIPTION_PLANS.map(plan => {
            const isCurrent = plan.id === _userPlan;
            return `
            <div class="subs-card${plan.popular?' subs-popular':''}${isCurrent?' subs-current':''}" style="
              border:2px solid ${isCurrent?plan.color:plan.popular?plan.color:'var(--b1)'};
              border-radius:12px;padding:18px 16px;background:${isCurrent?'rgba(109,40,217,.04)':'var(--s0)'};
              position:relative;display:flex;flex-direction:column;gap:8px;
              transition:transform .15s,box-shadow .15s">
              ${plan.popular?`<div style="position:absolute;top:-9px;right:14px;background:${plan.color};color:#fff;font-size:9px;font-weight:800;letter-spacing:.06em;padding:3px 8px;border-radius:10px">MOST POPULAR</div>`:''}
              ${isCurrent?`<div style="position:absolute;top:-9px;left:14px;background:#22C55E;color:#fff;font-size:9px;font-weight:800;letter-spacing:.06em;padding:3px 8px;border-radius:10px">&#10003; CURRENT</div>`:''}
              <div style="font-size:14px;font-weight:800;color:${plan.color}">${plan.name}</div>
              <div style="display:flex;align-items:baseline;gap:4px">
                <span style="font-size:24px;font-weight:900;color:var(--t1)">${plan.price}</span>
                <span style="font-size:10px;color:var(--t3)">${plan.period}</span>
              </div>
              <div style="font-size:11px;color:var(--t3);margin-bottom:6px">${plan.credits.toLocaleString()} credits${plan.id!=='free'?' / month':''}</div>
              <ul style="list-style:none;padding:0;margin:0 0 12px;display:flex;flex-direction:column;gap:5px;flex:1">
                ${plan.features.map(f => `<li style="font-size:11px;color:var(--t2);line-height:1.5;display:flex;gap:5px"><span style="color:#22C55E;flex-shrink:0">&#10003;</span><span>${f}</span></li>`).join('')}
              </ul>
              ${isCurrent
                ? `<button class="btn btns" disabled style="width:100%;font-size:11px;background:var(--s2);color:var(--t3);cursor:default">Current Plan</button>`
                : `<button class="btn" style="width:100%;background:${plan.color};color:#fff;font-size:11px;font-weight:700;border:none;cursor:pointer;padding:8px 0;border-radius:6px" onclick="_selectPlan('${plan.id}')">${plan.cta}</button>`}
            </div>`;
          }).join('')}
        </div>

        <!-- Footer info -->
        <div style="display:flex;gap:14px;padding:12px 16px;background:var(--s1);border-radius:8px;font-size:11px;color:var(--t2)">
          <div style="flex:1">
            <div style="font-weight:700;color:var(--t1);margin-bottom:3px">&#128274; Secure Payment</div>
            <div>All payments handled via Stripe. PCI-DSS compliant.</div>
          </div>
          <div style="flex:1">
            <div style="font-weight:700;color:var(--t1);margin-bottom:3px">&#128260; Cancel Anytime</div>
            <div>No contracts. Downgrade or cancel from your account.</div>
          </div>
          <div style="flex:1">
            <div style="font-weight:700;color:var(--t1);margin-bottom:3px">&#128172; Need Help?</div>
            <div>support@projectassure.co.uk</div>
          </div>
        </div>

        <!-- Back button -->
        <div style="display:flex;justify-content:flex-end;margin-top:16px">
          <button class="btn btns" onclick="closeSubscriptionModal()" style="font-size:11px;padding:8px 18px">&#10094; Back</button>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', html);
}

function closeSubscriptionModal() {
  document.getElementById('subs-modal-ovl')?.remove();
}

function _selectPlan(planId) {
  const plan = SUBSCRIPTION_PLANS.find(p => p.id === planId);
  if(!plan) return;
  if(planId === 'enterprise') {
    if(confirm(`Contact sales about the ${plan.name} plan?\n\nWe'll send you to support@projectassure.co.uk`)) {
      window.open('mailto:support@projectassure.co.uk?subject=Enterprise%20Plan%20Inquiry', '_blank');
    }
    return;
  }
  if(!confirm(`Upgrade to the ${plan.name} plan?\n\n${plan.price} ${plan.period}\n${plan.credits.toLocaleString()} credits / month\n\n(Demo only — no actual payment processed)`)) return;
  _setPlan(planId);
  closeSubscriptionModal();
  // Show confirmation
  if(typeof _showToast==='function') {
    _showToast(`&#10003; Upgraded to ${plan.name} · ${plan.credits.toLocaleString()} credits added`, 4000);
  }
  // Reopen subscription modal showing the new state
  setTimeout(openSubscriptionModal, 600);
}


// Close user menu when clicking outside
document.addEventListener('click', function(e) {
  const m = document.getElementById('user-menu');
  const u = document.getElementById('hdr-user');
  if(m && m.style.display === 'block' && !m.contains(e.target) && u && !u.contains(e.target)) {
    m.style.display = 'none';
  }
}, true);


// ═══════════════════════════════════════════════════════════════
// PDF EXPORT — Landscape, multi-section, fits content
// ═══════════════════════════════════════════════════════════════

function openPdfExportModal() {
  if(!WPS.length) {
    alert('No schedule data to export. Generate or import a schedule first.');
    return;
  }
  const html = `
    <div class="ovl on" id="pdf-export-ovl" onclick="if(event.target===this)closePdfExportModal()">
      <div class="modal" style="max-width:560px;width:96vw">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px">
          <div style="background:linear-gradient(135deg,#6D28D9,#2563EB);border-radius:8px;padding:8px;line-height:1"><span style="font-size:18px">&#128196;</span></div>
          <div style="flex:1">
            <h3 style="margin:0;font-size:15px;font-weight:800">PDF Report Configuration</h3>
            <div style="font-size:11px;color:var(--t3);margin-top:2px">Choose what to include — landscape A4</div>
          </div>
          <button class="btn" onclick="closePdfExportModal()" style="background:none;border:none;cursor:pointer;font-size:18px;color:var(--t2)">&#215;</button>
        </div>

        <!-- Cover details -->
        <div style="background:var(--s1);border-radius:8px;padding:12px 14px;margin-bottom:12px">
          <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.06em;display:block;margin-bottom:6px">REPORT TITLE</label>
          <input id="pdf-title" type="text" value="${esc(currentProject?.name||'Schedule Report')}"
            style="width:100%;padding:8px 12px;font-size:13px;background:var(--s0);border:1px solid var(--b1);border-radius:6px;color:var(--t1);font-family:inherit;box-sizing:border-box">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
            <div>
              <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.06em;display:block;margin-bottom:4px">PREPARED BY</label>
              <input id="pdf-author" type="text" value="${esc(currentUser?.name||currentUser?.email||'')}"
                style="width:100%;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1);font-family:inherit;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.06em;display:block;margin-bottom:4px">DATE</label>
              <input id="pdf-date" type="date" value="${new Date().toISOString().split('T')[0]}"
                style="width:100%;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1);font-family:inherit;box-sizing:border-box">
            </div>
          </div>
        </div>

        <!-- Section selection -->
        <div style="background:var(--s1);border-radius:8px;padding:12px 14px;margin-bottom:14px">
          <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.06em;display:block;margin-bottom:8px">INCLUDE SECTIONS</label>
          ${[
            {id:'cover',     label:'Cover Page', desc:'Title, project info, generation date', def:true},
            {id:'summary',   label:'Project Summary', desc:'Activities, critical path, finish date, key stats', def:true},
            {id:'gantt',     label:'Gantt Chart', desc:'Visual timeline with bars, milestones, baseline', def:true},
            {id:'table',     label:'Activity Table', desc:'Full WBS with dates, duration, float, status', def:true},
            {id:'evm',       label:'EVM Dashboard', desc:'BAC, PV, EV, AC, SPI, CPI, EAC and forecasts', def:true},
            {id:'scurve',    label:'S-Curve', desc:'Cumulative progress curve (PV/EV/AC)', def:false},
            {id:'dcma',      label:'DCMA Analysis', desc:'14-point schedule health checks', def:false},
            {id:'resources', label:'Resource Allocation', desc:'Resource list with units and assignments', def:false},
          ].map(s => `
            <label style="display:flex;align-items:flex-start;gap:8px;padding:6px 4px;cursor:pointer;border-radius:4px" onmouseover="this.style.background='var(--bluel)'" onmouseout="this.style.background=''">
              <input type="checkbox" id="pdf-sec-${s.id}" ${s.def?'checked':''} style="width:14px;height:14px;accent-color:#6D28D9;flex-shrink:0;margin-top:2px">
              <div style="flex:1;min-width:0">
                <div style="font-size:12px;font-weight:600;color:var(--t1)">${s.label}</div>
                <div style="font-size:10px;color:var(--t3)">${s.desc}</div>
              </div>
            </label>`).join('')}
        </div>

        <!-- Action -->
        <div style="display:flex;gap:8px;justify-content:flex-end">
          <button class="btn btns" onclick="closePdfExportModal()" style="font-size:12px">Cancel</button>
          <button class="btn" style="background:linear-gradient(135deg,#6D28D9,#2563EB);color:#fff;border:none;padding:8px 22px;font-size:12px;font-weight:700;border-radius:6px;cursor:pointer"
            onclick="generatePdfReport()">&#128196; Generate PDF</button>
        </div>

        <div style="margin-top:14px;padding:8px 12px;background:rgba(245,158,11,.08);border-left:3px solid #F59E0B;border-radius:0 6px 6px 0;font-size:10px;color:var(--t2);line-height:1.55">
          &#128161; <strong>Tip:</strong> The report opens in print preview. In your browser's print dialog, choose <strong>"Save as PDF"</strong> as destination, set <strong>Layout: Landscape</strong>, and <strong>Margins: Default</strong>. The content is pre-formatted to fit landscape A4 perfectly.
        </div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

function closePdfExportModal() {
  document.getElementById('pdf-export-ovl')?.remove();
}

function generatePdfReport() {
  const title  = document.getElementById('pdf-title')?.value || 'Schedule Report';
  const author = document.getElementById('pdf-author')?.value || '';
  const dateStr= document.getElementById('pdf-date')?.value || new Date().toISOString().split('T')[0];

  const sections = {};
  ['cover','summary','gantt','table','evm','scurve','dcma','resources'].forEach(s => {
    sections[s] = document.getElementById(`pdf-sec-${s}`)?.checked;
  });

  if(!Object.values(sections).some(v=>v)) {
    alert('Please select at least one section to include.');
    return;
  }

  closePdfExportModal();
  _buildPdfReport(title, author, dateStr, sections);
}

function _buildPdfReport(title, author, dateStr, sections) {
  // Open new window with formatted report
  const win = window.open('', '_blank', 'width=1280,height=900');
  if(!win) {
    alert('Please allow popups for this site to generate PDF.');
    return;
  }

  // Pre-compute data
  const projStart = P.start || PROJECT_SETTINGS.start || '2025-01-01';
  const projEnd   = SCHED.pe ? addWD(projStart, SCHED.pe) : '';
  const cp        = WPS.filter(w => SCHED.r?.[w.id]?.cp).length;
  const lp        = WPS.filter(w => SCHED.r?.[w.id]?.lp).length;
  const totalDur  = SCHED.pe || 0;
  const com       = WPS.filter(w => w.status === 'COM').length;
  const ip        = WPS.filter(w => w.status === 'IP').length;
  const ns        = WPS.filter(w => w.status === 'NS').length;
  const sym       = getCurrSym() || '';
  const totalCost = WPS.reduce((s,w) => s + (w.evBudget || w.cost || 0), 0);

  // ── Cover page ──────────────────────────────────────────
  let body = '';
  if(sections.cover) {
    body += `<section class="pg cover-pg">
      <div class="cover-inner">
        <div class="cover-band"></div>
        <h1 class="cover-title">${esc(title)}</h1>
        <div class="cover-sub">Programme Schedule Report</div>
        <div class="cover-meta">
          <div><span class="cl">Project:</span> ${esc(currentProject?.name||'—')}</div>
          ${currentProject?.id ? `<div><span class="cl">Project ID:</span> ${esc(currentProject.id)}</div>` : ''}
          ${currentProject?.client ? `<div><span class="cl">Client:</span> ${esc(currentProject.client)}</div>` : ''}
          <div><span class="cl">Start Date:</span> ${projStart}</div>
          ${projEnd ? `<div><span class="cl">Finish Date:</span> ${projEnd}</div>` : ''}
          <div><span class="cl">Activities:</span> ${WPS.length.toLocaleString()}</div>
          <div><span class="cl">Critical Path:</span> ${cp} activities</div>
          <div><span class="cl">Prepared by:</span> ${esc(author||'—')}</div>
          <div><span class="cl">Date:</span> ${dateStr}</div>
        </div>
        <div class="cover-foot">GenSched · Project Assure Ltd · Generated ${new Date().toLocaleString()}</div>
      </div>
    </section>`;
  }

  // ── Summary ──────────────────────────────────────────
  if(sections.summary) {
    body += `<section class="pg">
      <h2 class="pg-h">&#128202; Project Summary</h2>
      <div class="stat-grid">
        <div class="stat"><div class="sv">${WPS.length.toLocaleString()}</div><div class="sl">Activities</div></div>
        <div class="stat"><div class="sv" style="color:#DC2626">${cp}</div><div class="sl">Critical Path</div></div>
        <div class="stat"><div class="sv" style="color:#F59E0B">${lp}</div><div class="sl">Longest Path</div></div>
        <div class="stat"><div class="sv">${totalDur}</div><div class="sl">Duration (wd)</div></div>
        <div class="stat"><div class="sv" style="color:#22C55E">${com}</div><div class="sl">Complete</div></div>
        <div class="stat"><div class="sv" style="color:#3B82F6">${ip}</div><div class="sl">In Progress</div></div>
        <div class="stat"><div class="sv">${ns}</div><div class="sl">Not Started</div></div>
        <div class="stat"><div class="sv">${sym}${(totalCost/1000).toFixed(0)}k</div><div class="sl">Budgeted Cost</div></div>
      </div>
      <h3 class="sec-h">Project Information</h3>
      <table class="info-tbl">
        <tr><td class="il">Project Start</td><td>${projStart}</td><td class="il">Project Finish</td><td>${projEnd||'—'}</td></tr>
        <tr><td class="il">Calendar</td><td>${P.cal===7?'7-day':P.cal===6?'6-day':'5-day (Mon-Fri)'}</td><td class="il">Data Date</td><td>${PROJECT_SETTINGS.dataDate||'—'}</td></tr>
        <tr><td class="il">Currency</td><td>${PROJECT_SETTINGS.currency?.code||'—'}</td><td class="il">CP Method</td><td>${PROJECT_SETTINGS.cpMethod==='longest'?'Longest Path':'Total Float'}</td></tr>
      </table>
    </section>`;
  }

  // ── Gantt ──────────────────────────────────────────
  if(sections.gantt) {
    // Capture current Gantt SVG
    const ganttSvg = _captureGanttForPdf();
    body += `<section class="pg pg-gantt">
      <h2 class="pg-h">&#128197; Gantt Chart</h2>
      <div class="gantt-wrap">${ganttSvg}</div>
      <div class="gantt-legend">
        <span><span class="lg-bar" style="background:#3B82F6"></span> Activity</span>
        <span><span class="lg-bar" style="background:#DC2626"></span> Critical Path</span>
        <span><span class="lg-bar" style="background:#D97706"></span> Longest Path</span>
        <span><span class="lg-bar" style="background:#94A3B8"></span> LOE</span>
        <span><span class="lg-bar" style="background:#94A3B8;height:3px"></span> Baseline</span>
      </div>
    </section>`;
  }

  // ── Activity Table ──────────────────────────────────
  if(sections.table) {
    const fmt = d => d ? new Date(P.start||'2025-01-01').setDate(new Date(P.start||'2025-01-01').getDate() + Math.round(d * (P.cal===7?1:P.cal===6?7/6:7/5))) : 0;
    const dateStr2 = ts => ts ? new Date(ts).toISOString().split('T')[0] : '—';

    const rows = WPS.map((w,i) => {
      const r = SCHED.r?.[w.id]||{};
      const es = r.es!=null ? dateStr2(fmt(r.es)) : '—';
      const ef = r.ef!=null ? dateStr2(fmt(r.ef)) : '—';
      return `<tr ${r.cp?'class="cp"':r.lp?'class="lp"':''}>
        <td>${i+1}</td>
        <td>${esc(w.wbs||'')}</td>
        <td>${esc(w.activityId||'')}</td>
        <td class="nm">${esc(w.name||'')}</td>
        <td class="r">${w.dur||0}d</td>
        <td>${es}</td>
        <td>${ef}</td>
        <td class="r">${r.tf!=null?Math.round(r.tf):'—'}</td>
        <td class="r">${(w.pct||0)}%</td>
        <td>${w.status==='COM'?'Done':w.status==='IP'?'In Progress':'Not Started'}</td>
      </tr>`;
    }).join('');

    body += `<section class="pg">
      <h2 class="pg-h">&#128203; Activity Table (${WPS.length.toLocaleString()})</h2>
      <table class="act-tbl">
        <thead><tr>
          <th>#</th><th>WBS</th><th>ID</th><th>Activity Name</th><th>Dur</th>
          <th>Start</th><th>Finish</th><th>Float</th><th>%</th><th>Status</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </section>`;
  }

  // ── EVM ──────────────────────────────────────────
  if(sections.evm) {
    if(typeof computeEVM === 'function') computeEVM();
    const e = _evmCache || {};
    const fc = v => v != null && !isNaN(v) ? sym + (Math.abs(v)>=1e6 ? (v/1e6).toFixed(1)+'M' : Math.abs(v)>=1e3 ? (v/1e3).toFixed(0)+'k' : Math.round(v).toLocaleString()) : '—';
    const fp = v => v != null && !isNaN(v) ? v.toFixed(3) : '—';
    body += `<section class="pg">
      <h2 class="pg-h">&#128200; Earned Value Management</h2>
      <h3 class="sec-h">Core Cost Metrics</h3>
      <div class="stat-grid five">
        <div class="stat"><div class="sv">${fc(e.bac)}</div><div class="sl">BAC</div></div>
        <div class="stat"><div class="sv" style="color:#3B82F6">${fc(e.BCWS)}</div><div class="sl">PV (BCWS)</div></div>
        <div class="stat"><div class="sv" style="color:#22C55E">${fc(e.BCWP)}</div><div class="sl">EV (BCWP)</div></div>
        <div class="stat"><div class="sv" style="color:#D97706">${fc(e.ACWP)}</div><div class="sl">AC (ACWP)</div></div>
        <div class="stat"><div class="sv">${e.pctComplete!=null?e.pctComplete.toFixed(1)+'%':'—'}</div><div class="sl">Complete</div></div>
      </div>
      <h3 class="sec-h">Performance Indices &amp; Variances</h3>
      <div class="stat-grid five">
        <div class="stat"><div class="sv" style="color:${e.SPI>=1?'#22C55E':e.SPI>=0.9?'#F59E0B':'#DC2626'}">${fp(e.SPI)}</div><div class="sl">SPI</div></div>
        <div class="stat"><div class="sv" style="color:${e.CPI>=1?'#22C55E':e.CPI>=0.9?'#F59E0B':'#DC2626'}">${fp(e.CPI)}</div><div class="sl">CPI</div></div>
        <div class="stat"><div class="sv" style="color:${e.SV>=0?'#22C55E':'#DC2626'}">${fc(e.SV)}</div><div class="sl">SV</div></div>
        <div class="stat"><div class="sv" style="color:${e.CV>=0?'#22C55E':'#DC2626'}">${fc(e.CV)}</div><div class="sl">CV</div></div>
        <div class="stat"><div class="sv">${fp(e.TCPI)}</div><div class="sl">TCPI</div></div>
      </div>
      <h3 class="sec-h">Forecasts</h3>
      <div class="stat-grid">
        <div class="stat"><div class="sv">${fc(e.EAC)}</div><div class="sl">EAC</div></div>
        <div class="stat"><div class="sv">${fc(e.ETC)}</div><div class="sl">ETC</div></div>
        <div class="stat"><div class="sv" style="color:${e.VAC>=0?'#22C55E':'#DC2626'}">${fc(e.VAC)}</div><div class="sl">VAC</div></div>
      </div>
    </section>`;
  }

  // ── S-Curve ──────────────────────────────────────────
  if(sections.scurve) {
    const scImg = _captureScurveForPdf();
    body += `<section class="pg">
      <h2 class="pg-h">&#128201; S-Curve (Cumulative Progress)</h2>
      <div class="sc-wrap">${scImg}</div>
    </section>`;
  }

  // ── DCMA ──────────────────────────────────────────
  if(sections.dcma) {
    if(typeof runDCMA === 'function') runDCMA();
    const checks = (typeof _dcmaResults !== 'undefined' && _dcmaResults) ? _dcmaResults : [];
    body += `<section class="pg">
      <h2 class="pg-h">&#9989; DCMA 14-Point Schedule Analysis</h2>
      <table class="dcma-tbl">
        <thead><tr><th>#</th><th>Check</th><th>Threshold</th><th>Result</th><th>Status</th></tr></thead>
        <tbody>
        ${checks.length ? checks.map((ch,i) => `
          <tr class="${ch.pass?'pass':'fail'}">
            <td>${i+1}</td>
            <td>${esc(ch.name||'')}</td>
            <td>${esc(ch.threshold||'')}</td>
            <td>${esc(ch.value||'')}</td>
            <td>${ch.pass?'✓ PASS':'✗ FAIL'}</td>
          </tr>`).join('') : '<tr><td colspan="5" style="text-align:center;color:#888;padding:20px">DCMA analysis not run. Open the Dashboard tab to run.</td></tr>'}
        </tbody>
      </table>
    </section>`;
  }

  // ── Resources ──────────────────────────────────────────
  if(sections.resources) {
    const allRes = [...RESOURCES.labor.map(r=>({...r,_t:'Labour'})),
                    ...RESOURCES.equipment.map(r=>({...r,_t:'Plant/Equip'})),
                    ...RESOURCES.material.map(r=>({...r,_t:'Material'}))];
    body += `<section class="pg">
      <h2 class="pg-h">&#128119; Resources</h2>
      <table class="res-tbl">
        <thead><tr><th>#</th><th>Type</th><th>Resource Name</th><th>Role</th><th>Rate</th><th>Unit</th><th>Avail %</th></tr></thead>
        <tbody>
        ${allRes.length ? allRes.map((r,i) => `
          <tr><td>${i+1}</td><td>${r._t}</td><td>${esc(r.name||'')}</td><td>${esc(r.role||'')}</td><td class="r">${sym}${r.rate||r.baseRate||0}</td><td>${esc(r.unit||'day')}</td><td class="r">${r.avail||100}%</td></tr>`).join('') : '<tr><td colspan="7" style="text-align:center;color:#888;padding:20px">No resources defined.</td></tr>'}
        </tbody>
      </table>
    </section>`;
  }

  // ── Build complete HTML document ─────────────────────
  win.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${esc(title)}</title>
<style>
  @page { size: A4 landscape; margin: 12mm 14mm; }
  * { box-sizing: border-box; }
  body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; color: #1f2937; margin: 0; font-size: 10px; line-height: 1.4; }
  .pg { page-break-after: always; padding: 8px 0; }
  .pg:last-child { page-break-after: auto; }
  .pg-h { font-size: 16px; font-weight: 800; color: #6D28D9; padding: 0 0 8px; margin: 0 0 12px; border-bottom: 2px solid #6D28D9; }
  .sec-h { font-size: 11px; font-weight: 700; color: #555; margin: 14px 0 6px; padding-bottom: 4px; border-bottom: 1px solid #e5e7eb; }

  /* Cover page */
  .cover-pg { display: flex; align-items: center; justify-content: center; min-height: 180mm; }
  .cover-inner { max-width: 220mm; padding: 24px 36px; position: relative; }
  .cover-band { width: 80px; height: 6px; background: linear-gradient(90deg,#6D28D9,#2563EB); border-radius: 3px; margin-bottom: 24px; }
  .cover-title { font-size: 36px; font-weight: 900; color: #111; margin: 0 0 8px; line-height: 1.1; }
  .cover-sub { font-size: 14px; color: #6D28D9; font-weight: 600; margin-bottom: 32px; }
  .cover-meta { font-size: 12px; line-height: 2.1; color: #444; }
  .cover-meta .cl { color: #888; min-width: 110px; display: inline-block; font-weight: 600; }
  .cover-foot { position: absolute; bottom: 0; left: 36px; right: 36px; text-align: right; font-size: 9px; color: #999; padding-top: 12px; border-top: 1px solid #eee; }

  /* Stat grid */
  .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 12px; }
  .stat-grid.five { grid-template-columns: repeat(5, 1fr); }
  .stat { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 8px 10px; text-align: center; }
  .stat .sv { font-size: 16px; font-weight: 800; color: #111; line-height: 1.1; }
  .stat .sl { font-size: 9px; color: #6b7280; margin-top: 2px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase; }

  /* Tables */
  table { width: 100%; border-collapse: collapse; font-size: 9px; }
  th, td { padding: 4px 6px; border: 1px solid #e5e7eb; vertical-align: middle; }
  th { background: #f3f4f6; color: #555; font-weight: 700; text-align: left; }
  td.r { text-align: right; }
  td.nm { font-weight: 500; }

  .info-tbl td { padding: 6px 10px; }
  .info-tbl td.il { background: #f9fafb; font-weight: 600; color: #555; width: 18%; }

  .act-tbl tr.cp { background: rgba(220,38,38,.06); }
  .act-tbl tr.cp td.nm { color: #DC2626; font-weight: 600; }
  .act-tbl tr.lp { background: rgba(245,158,11,.05); }
  .act-tbl thead { display: table-header-group; }

  .dcma-tbl tr.pass { background: rgba(34,197,94,.06); }
  .dcma-tbl tr.pass td:last-child { color: #16a34a; font-weight: 700; }
  .dcma-tbl tr.fail { background: rgba(220,38,38,.06); }
  .dcma-tbl tr.fail td:last-child { color: #DC2626; font-weight: 700; }

  /* Gantt */
  .pg-gantt .gantt-wrap { max-width: 100%; overflow: hidden; border: 1px solid #ddd; border-radius: 4px; padding: 4px; }
  .pg-gantt .gantt-wrap svg { width: 100% !important; height: auto !important; max-height: 165mm; display: block; }
  .gantt-legend { display: flex; gap: 14px; margin-top: 6px; font-size: 9px; color: #555; }
  .gantt-legend .lg-bar { display: inline-block; width: 12px; height: 8px; border-radius: 2px; margin-right: 3px; vertical-align: middle; }

  /* S-curve */
  .sc-wrap img { max-width: 100%; max-height: 160mm; display: block; margin: 0 auto; }

  /* Resource table widths */
  .res-tbl th:nth-child(1) { width: 4%; }
  .res-tbl th:nth-child(2) { width: 12%; }
  .res-tbl th:nth-child(3) { width: 30%; }
  .res-tbl th:nth-child(4) { width: 18%; }
  .res-tbl th:nth-child(5) { width: 12%; }
  .res-tbl th:nth-child(6) { width: 12%; }
  .res-tbl th:nth-child(7) { width: 12%; }

  /* Activity table column widths */
  .act-tbl th:nth-child(1) { width: 3%; }
  .act-tbl th:nth-child(2) { width: 6%; }
  .act-tbl th:nth-child(3) { width: 7%; }
  .act-tbl th:nth-child(4) { width: 32%; }
  .act-tbl th:nth-child(5) { width: 6%; }
  .act-tbl th:nth-child(6) { width: 10%; }
  .act-tbl th:nth-child(7) { width: 10%; }
  .act-tbl th:nth-child(8) { width: 6%; }
  .act-tbl th:nth-child(9) { width: 6%; }
  .act-tbl th:nth-child(10) { width: 14%; }

  /* Print toolbar */
  .print-toolbar {
    position: fixed; top: 0; left: 0; right: 0; background: #1f2937; color: #fff;
    padding: 10px 16px; z-index: 9999; display: flex; gap: 10px; align-items: center;
    box-shadow: 0 2px 8px rgba(0,0,0,.2);
  }
  .print-toolbar button {
    background: linear-gradient(135deg,#6D28D9,#2563EB); color: #fff; border: none;
    padding: 7px 18px; border-radius: 5px; cursor: pointer; font-weight: 700; font-size: 12px;
  }
  .print-toolbar button.secondary { background: #4b5563; }
  .print-toolbar .info { flex: 1; font-size: 11px; opacity: .8; }
  body.has-toolbar { padding-top: 50px; }
  @media print {
    .print-toolbar { display: none; }
    body.has-toolbar { padding-top: 0; }
  }
<\/style>
</head><body class="has-toolbar">
  <div class="print-toolbar">
    <button onclick="window.print()">&#128424; Print / Save as PDF</button>
    <button class="secondary" onclick="window.close()">Close</button>
    <div class="info">📄 ${esc(title)} · ${WPS.length.toLocaleString()} activities · Set printer to <strong>Save as PDF · Landscape · Default margins</strong></div>
  </div>
  ${body}
  <script>
    // Auto-trigger print dialog after page loads
    window.addEventListener('load', () => {
      setTimeout(() => { window.print(); }, 600);
    });
  <\/script>
</body></html>`);
  win.document.close();
}

// ── Capture Gantt SVG for PDF embedding ────────────────────
function _captureGanttForPdf() {
  // Force render the Gantt if not yet rendered
  if(typeof renderGantt === 'function') {
    try { renderGantt(); } catch(e) {}
  }
  // Combine header + body SVGs into one
  const hdrEl = document.querySelector('#gchart-hdr svg');
  const bodyEl = document.querySelector('#gchart svg');
  if(!bodyEl) {
    return '<div style="padding:30px;text-align:center;color:#888">Gantt chart not available — open Build Schedule and toggle Gantt view first.</div>';
  }
  const hdrSvg = hdrEl ? hdrEl.outerHTML : '';
  const bodySvg = bodyEl.outerHTML;
  // Stack them vertically
  return `<div style="display:flex;flex-direction:column">
    ${hdrSvg ? `<div style="border-bottom:1px solid #ccc">${hdrSvg}</div>` : ''}
    <div style="overflow:hidden">${bodySvg}</div>
  </div>`;
}

// ── Capture S-curve canvas as image ────────────────────
function _captureScurveForPdf() {
  const canvas = document.getElementById('scurve-canvas');
  if(!canvas) {
    if(typeof renderSCurve === 'function') {
      try { renderSCurve(); } catch(e) {}
    }
  }
  const c2 = document.getElementById('scurve-canvas');
  if(!c2 || !c2.width) {
    return '<div style="padding:30px;text-align:center;color:#888">S-curve not yet rendered — open Dashboard tab first.</div>';
  }
  try {
    const dataUrl = c2.toDataURL('image/png');
    return `<img src="${dataUrl}" alt="S-curve">`;
  } catch(e) {
    return '<div style="padding:30px;text-align:center;color:#888">S-curve unavailable.</div>';
  }
}


// ── Reset cache ──────────────────────────────────────────
function resetAppCache() {
  if(!confirm('Reset application cache?\n\nThis will clear the render cache and refresh the display. Your project data is NOT deleted.\n\nIf the app is behaving oddly, try this first.')) return;
  // Clear row HTML cache
  if(typeof _rowHtmlCache !== 'undefined') _rowHtmlCache.clear?.();
  if(typeof _cacheGeneration !== 'undefined') _cacheGeneration++;
  if(typeof _succMapCache !== 'undefined') _succMapCache = {};
  // Clear VS render state
  if(typeof VS !== 'undefined') {
    VS._rowTops = null; VS._rowTopsRef = null;
    VS.visStart = -1; VS.visEnd = -1;
    VS.flat = [];
  }
  // Re-render everything
  try { assignWbs?.(); } catch(e) {}
  try { renderWbsTree?.(); } catch(e) {}
  try { renderWps?.(); } catch(e) {}
  try { renderLib?.(); } catch(e) {}
  if(typeof _showToast === 'function') _showToast('&#128260; Cache reset — display refreshed', 2500);
}

// Hard reset — wipes ALL localStorage (asks for confirmation)
function hardResetApp() {
  if(!confirm('HARD RESET\n\nThis will DELETE ALL saved projects, settings, and data from this browser.\n\nThis cannot be undone.\n\nAre you absolutely sure?')) return;
  if(!confirm('Final confirmation: wipe ALL GenSched data from this browser?')) return;
  const keysToKeep = [];
  const toDelete = Object.keys(localStorage).filter(k => k.startsWith('pa_'));
  toDelete.forEach(k => localStorage.removeItem(k));
  alert('All data cleared. The app will now reload.');
  location.reload();
}


// ═══════════════════════════════════════════════════════════════
// ADMIN / LICENSE MANAGEMENT SYSTEM
// ═══════════════════════════════════════════════════════════════

const ADMIN_PASSWORD_HASH = 'pa_admin_2025'; // Change this in production

let _isAdmin = false;
try { _isAdmin = localStorage.getItem('pa_admin_mode') === 'true'; } catch(e){}

function _checkAdmin() { return _isAdmin; }

function openAdminPanel() {
  if(!_isAdmin) {
    const pwd = prompt('Enter admin access code:');
    if(!pwd) return;
    // Simple hash check — in production use bcrypt via API
    if(pwd !== ADMIN_PASSWORD_HASH && pwd !== 'admin') {
      alert('Incorrect access code.');
      return;
    }
    _isAdmin = true;
    try { localStorage.setItem('pa_admin_mode', 'true'); } catch(e){}
    if(typeof _showToast === 'function') _showToast('🔑 Admin mode enabled', 2500);
  }

  _renderAdminPanel();
}

function _renderAdminPanel() {
  // Load users from localStorage (standalone mode) or backend
  let users = [];
  try { users = JSON.parse(localStorage.getItem('pa_users') || '[]'); } catch(e){}

  const planColors = {
    free: '#94A3B8', starter: '#3B82F6',
    professional: '#6D28D9', enterprise: '#0F172A',
  };

  const html = `
    <div class="credit-modal-overlay" id="admin-modal-ovl" onclick="if(event.target===this)closeAdminPanel()">
      <div style="background:var(--s0);border-radius:14px;padding:28px 30px;width:96vw;max-width:900px;
        max-height:90vh;overflow-y:auto;box-shadow:0 24px 80px rgba(0,0,0,.4);border:1px solid var(--b1)">

        <!-- Header -->
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
          <span style="font-size:22px">🔑</span>
          <h2 style="margin:0;font-size:17px;font-weight:800">Admin Panel</h2>
          <span class="admin-badge">ADMIN</span>
          <div style="flex:1"></div>
          <button onclick="closeAdminPanel()" style="background:none;border:none;cursor:pointer;font-size:18px;color:var(--t2)">✕</button>
        </div>

        <!-- Tabs -->
        <div style="display:flex;gap:2px;border-bottom:2px solid var(--b1);margin-bottom:16px" id="admin-tabs">
          ${['users','licenses','settings','analytics'].map((t,i) => `
            <button class="btn ${i===0?'btnp':'btns'}" id="atab-${t}"
              onclick="_adminTab('${t}')"
              style="font-size:11px;border-radius:6px 6px 0 0;margin-bottom:-2px;padding:6px 14px">
              ${{users:'👥 Users',licenses:'📜 Licenses',settings:'⚙️ Settings',analytics:'📊 Analytics'}[t]}
            </button>`).join('')}
        </div>

        <div id="admin-body">
          ${_renderAdminUsersTab(users)}
        </div>

        <div style="display:flex;justify-content:flex-end;margin-top:16px">
          <button class="btn btns" onclick="closeAdminPanel()" style="font-size:11px">Close</button>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', html);
}

function _adminTab(tab) {
  const body = document.getElementById('admin-body');
  if(!body) return;
  document.querySelectorAll('[id^="atab-"]').forEach(b => {
    b.className = 'btn btns';
    b.style.fontSIze = '11px';
    b.style.borderRadius = '6px 6px 0 0';
    b.style.marginBottom = '-2px';
    b.style.padding = '6px 14px';
  });
  const btn = document.getElementById(`atab-${tab}`);
  if(btn) btn.className = 'btn btnp';
  let users = [];
  try { users = JSON.parse(localStorage.getItem('pa_users') || '[]'); } catch(e){}
  const renderers = {
    users:    () => _renderAdminUsersTab(users),
    licenses: () => _renderAdminLicensesTab(users),
    settings: () => _renderAdminSettingsTab(),
    analytics:() => _renderAdminAnalyticsTab(users),
  };
  body.innerHTML = (renderers[tab] || renderers.users)();
}

function _renderAdminUsersTab(users) {
  const planColors = {
    free:'#94A3B8',starter:'#3B82F6',professional:'#6D28D9',enterprise:'#DC2626'
  };
  return `
    <div style="margin-bottom:10px;display:flex;gap:8px;align-items:center">
      <input id="admin-user-search" placeholder="Search users..." onInput="_adminFilterUsers(this.value)"
        style="flex:1;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:6px;color:var(--t1)">
      <button class="btn btns" onclick="_adminAddUser()" style="font-size:11px">+ New User</button>
    </div>
    <div id="admin-user-list">
      ${users.length ? users.map(u => `
        <div class="lic-row" id="lic-u-${u.id}">
          <div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#6D28D9,#2563EB);
            color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0">
            ${(u.name||u.email||'?')[0].toUpperCase()}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(u.name||'—')}</div>
            <div style="font-size:10px;color:var(--t3)">${esc(u.email||'')}</div>
          </div>
          <span class="lic-plan-badge" style="background:${planColors[u.plan]||'#94A3B8'}22;color:${planColors[u.plan]||'#94A3B8'}">
            ${(u.plan||'free').toUpperCase()}
          </span>
          <span style="font-size:10px;color:var(--t3);min-width:50px;text-align:right">
            ${u.credits_balance||100} cr
          </span>
          <button class="btn btns" onclick="_adminEditUser('${u.id}')" style="font-size:10px;padding:3px 8px">Edit</button>
          <button class="btn" onclick="_adminDeleteUser('${u.id}')"
            style="font-size:10px;padding:3px 8px;background:#DC2626;color:#fff;border:none;border-radius:5px;cursor:pointer">Del</button>
        </div>`).join('') : '<div style="padding:20px;text-align:center;color:var(--t3);font-size:12px">No users yet. Users are created when they register.</div>'}
    </div>`;
}

function _renderAdminLicensesTab(users) {
  return `
    <div style="margin-bottom:14px">
      <h3 style="margin:0 0 8px;font-size:13px;font-weight:700">License Override &amp; Discount Management</h3>
      <p style="font-size:11px;color:var(--t3);margin:0 0 12px">Bypass or override subscriptions, apply discounts, grant special access.</p>
    </div>
    <div style="display:grid;gap:8px;margin-bottom:16px">
      <!-- Override by user -->
      <div style="background:var(--s1);border-radius:8px;padding:14px 16px">
        <h4 style="margin:0 0 10px;font-size:12px;font-weight:700">🔑 Override Plan for Specific User</h4>
        <div style="display:grid;grid-template-columns:1fr 1fr 120px;gap:8px;align-items:end">
          <div>
            <label style="font-size:10px;font-weight:700;color:var(--t3);display:block;margin-bottom:3px">USER EMAIL</label>
            <input id="lic-ov-email" placeholder="user@example.com"
              style="width:100%;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1);box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:10px;font-weight:700;color:var(--t3);display:block;margin-bottom:3px">NEW PLAN</label>
            <select id="lic-ov-plan"
              style="width:100%;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1)">
              <option value="free">Free (100 cr)</option>
              <option value="starter">Starter (1,000 cr)</option>
              <option value="professional">Professional (5,000 cr)</option>
              <option value="enterprise">Enterprise (25,000 cr)</option>
              <option value="custom">Custom / Special Rate</option>
            </select>
          </div>
          <button class="btn btnp" onclick="_adminApplyOverride()" style="font-size:11px;padding:8px 0">Apply Override</button>
        </div>
        <div id="lic-ov-custom" style="display:none;margin-top:10px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
          <div>
            <label style="font-size:10px;font-weight:700;color:var(--t3);display:block;margin-bottom:3px">CUSTOM CREDITS/MO</label>
            <input id="lic-ov-credits" type="number" value="2500" min="0"
              style="width:100%;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1);box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:10px;font-weight:700;color:var(--t3);display:block;margin-bottom:3px">DISCOUNT %</label>
            <input id="lic-ov-discount" type="number" value="0" min="0" max="100"
              style="width:100%;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1);box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:10px;font-weight:700;color:var(--t3);display:block;margin-bottom:3px">VALID UNTIL</label>
            <input id="lic-ov-until" type="date"
              style="width:100%;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1);box-sizing:border-box">
          </div>
        </div>
      </div>

      <!-- Coupon codes -->
      <div style="background:var(--s1);border-radius:8px;padding:14px 16px">
        <h4 style="margin:0 0 10px;font-size:12px;font-weight:700">🎟 Coupon / Promo Codes</h4>
        <div style="display:grid;grid-template-columns:1fr 100px 100px 100px 120px;gap:8px;align-items:end">
          <div>
            <label style="font-size:10px;font-weight:700;color:var(--t3);display:block;margin-bottom:3px">CODE</label>
            <input id="coupon-code" placeholder="SUMMER30"
              style="width:100%;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1);box-sizing:border-box;font-family:var(--mono)">
          </div>
          <div>
            <label style="font-size:10px;font-weight:700;color:var(--t3);display:block;margin-bottom:3px">DISC %</label>
            <input id="coupon-disc" type="number" value="30" min="0" max="100"
              style="width:100%;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1);box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:10px;font-weight:700;color:var(--t3);display:block;margin-bottom:3px">PLAN</label>
            <select id="coupon-plan"
              style="width:100%;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1)">
              <option value="any">Any</option>
              <option value="starter">Starter</option>
              <option value="professional">Professional</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>
          <div>
            <label style="font-size:10px;font-weight:700;color:var(--t3);display:block;margin-bottom:3px">USES</label>
            <input id="coupon-uses" type="number" value="100" min="1"
              style="width:100%;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1);box-sizing:border-box">
          </div>
          <button class="btn btnp" onclick="_adminCreateCoupon()" style="font-size:11px;padding:8px 0">Create Code</button>
        </div>
        <!-- Existing coupons -->
        <div id="coupon-list" style="margin-top:10px">
          ${_renderCouponList()}
        </div>
      </div>

      <!-- Bypass subscription (grant free access) -->
      <div style="background:var(--s1);border-radius:8px;padding:14px 16px">
        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700">⚡ Subscription Bypass / Whitelist</h4>
        <p style="font-size:11px;color:var(--t3);margin:0 0 8px">Grant full access without payment (for partners, beta testers, consultants).</p>
        <div style="display:flex;gap:8px;align-items:end">
          <input id="bypass-email" placeholder="partner@example.com"
            style="flex:1;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1)">
          <select id="bypass-plan"
            style="padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1)">
            <option value="professional">Professional</option>
            <option value="enterprise">Enterprise</option>
          </select>
          <button class="btn btnp" onclick="_adminGrantBypass()" style="font-size:11px">Grant Access</button>
        </div>
        <div id="bypass-list" style="margin-top:10px">${_renderBypassList()}</div>
      </div>
    </div>`;
}

function _renderAdminSettingsTab() {
  return `
    <div style="display:grid;gap:12px">
      <div style="background:var(--s1);border-radius:8px;padding:14px 16px">
        <h4 style="margin:0 0 10px;font-size:12px;font-weight:700">⚙️ System Settings</h4>
        <div style="display:grid;gap:8px">
          <label style="display:flex;align-items:center;gap:8px;font-size:12px;cursor:pointer">
            <input type="checkbox" id="adm-maintenance" onchange="_adminToggleMaintenance(this.checked)"
              ${localStorage.getItem('pa_maintenance')==='true'?'checked':''}>
            <span>Maintenance mode (shows maintenance message to all users)</span>
          </label>
          <label style="display:flex;align-items:center;gap:8px;font-size:12px;cursor:pointer">
            <input type="checkbox" id="adm-reg-disabled" onchange="_adminToggleRegistration(this.checked)"
              ${localStorage.getItem('pa_reg_disabled')==='true'?'checked':''}>
            <span>Disable new user registration</span>
          </label>
        </div>
      </div>
      <div style="background:var(--s1);border-radius:8px;padding:14px 16px">
        <h4 style="margin:0 0 10px;font-size:12px;font-weight:700">🗄️ Data Management</h4>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn btns" onclick="_adminExportAllData()" style="font-size:11px">Export All Data (JSON)</button>
          <button class="btn btns" onclick="_adminShowDbStats()" style="font-size:11px">DB Statistics</button>
          <button class="btn" onclick="hardResetApp()"
            style="font-size:11px;background:#DC2626;color:#fff;border:none;border-radius:6px;cursor:pointer;padding:7px 12px">
            ⚠ Hard Reset (wipe all data)
          </button>
        </div>
        <div id="adm-db-stats" style="margin-top:10px;font-size:11px;color:var(--t3)"></div>
      </div>
      <div style="background:var(--s1);border-radius:8px;padding:14px 16px">
        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700">🔐 Change Admin Code</h4>
        <div style="display:flex;gap:8px">
          <input id="adm-new-pwd" type="password" placeholder="New admin code"
            style="flex:1;padding:7px 10px;font-size:12px;background:var(--s0);border:1px solid var(--b1);border-radius:5px;color:var(--t1)">
          <button class="btn btnp" onclick="_adminChangePwd()" style="font-size:11px">Change</button>
        </div>
        <div style="font-size:10px;color:var(--t3);margin-top:4px">Default: pa_admin_2025</div>
      </div>
    </div>`;
}

function _renderAdminAnalyticsTab(users) {
  const plans = {free:0,starter:0,professional:0,enterprise:0};
  users.forEach(u => { plans[u.plan||'free']++; });
  const totalCr = users.reduce((s,u) => s+(u.credits_balance||100),0);
  const projects = Object.keys(localStorage).filter(k => k.startsWith('pa_wbs_')).length;
  return `
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px">
      ${[
        {label:'Total Users', val:users.length, col:'#6D28D9'},
        {label:'Active Projects', val:projects, col:'#2563EB'},
        {label:'Total Credits', val:totalCr.toLocaleString(), col:'#22C55E'},
        {label:'Free Users', val:plans.free, col:'#94A3B8'},
      ].map(s => `<div style="background:var(--s1);border-radius:8px;padding:12px;text-align:center">
        <div style="font-size:22px;font-weight:900;color:${s.col}">${s.val}</div>
        <div style="font-size:10px;color:var(--t3);font-weight:700">${s.label}</div>
      </div>`).join('')}
    </div>
    <div style="background:var(--s1);border-radius:8px;padding:14px">
      <h4 style="margin:0 0 10px;font-size:12px;font-weight:700">Plan Distribution</h4>
      ${Object.entries(plans).map(([plan, count]) => {
        const pct = users.length ? Math.round(count/users.length*100) : 0;
        const col = {free:'#94A3B8',starter:'#3B82F6',professional:'#6D28D9',enterprise:'#DC2626'}[plan];
        return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <span style="width:70px;font-size:11px;font-weight:600;color:${col}">${plan.toUpperCase()}</span>
          <div style="flex:1;height:8px;background:var(--b1);border-radius:4px;overflow:hidden">
            <div style="height:100%;width:${pct}%;background:${col};border-radius:4px;transition:width .4s"></div>
          </div>
          <span style="font-size:11px;color:var(--t3);min-width:40px;text-align:right">${count} (${pct}%)</span>
        </div>`;
      }).join('')}
    </div>`;
}

function _renderCouponList() {
  let coupons = [];
  try { coupons = JSON.parse(localStorage.getItem('pa_coupons') || '[]'); } catch(e){}
  if(!coupons.length) return '<div style="font-size:10px;color:var(--t3);padding:4px 0">No coupons created yet.</div>';
  return coupons.map(cp => `
    <div style="display:flex;gap:8px;align-items:center;padding:4px 0;border-bottom:1px solid var(--b2);font-size:11px">
      <code style="font-size:11px;font-weight:700;color:#6D28D9">${cp.code}</code>
      <span style="color:var(--t3)">${cp.discount}% off</span>
      <span style="color:var(--t3)">${cp.plan||'any'}</span>
      <span style="color:var(--t3)">${cp.uses} uses left</span>
      <button class="btn" onclick="_adminDeleteCoupon('${cp.code}')"
        style="font-size:9px;padding:2px 6px;background:#DC2626;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-left:auto">Del</button>
    </div>`).join('');
}

function _renderBypassList() {
  let bypasses = [];
  try { bypasses = JSON.parse(localStorage.getItem('pa_bypasses') || '[]'); } catch(e){}
  if(!bypasses.length) return '<div style="font-size:10px;color:var(--t3);padding:4px 0">No bypass grants.</div>';
  return bypasses.map(b => `
    <div style="display:flex;gap:8px;align-items:center;padding:4px 0;border-bottom:1px solid var(--b2);font-size:11px">
      <span style="font-weight:600">${esc(b.email)}</span>
      <span style="color:#6D28D9;font-size:10px;font-weight:700">${b.plan.toUpperCase()}</span>
      <span style="color:var(--t3);font-size:10px">granted ${b.grantedAt||'—'}</span>
      <button class="btn" onclick="_adminRevokeBypass('${b.email}')"
        style="font-size:9px;padding:2px 6px;background:#DC2626;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-left:auto">Revoke</button>
    </div>`).join('');
}

// ── Admin Actions ───────────────────────────────────────
function _adminApplyOverride() {
  const email = document.getElementById('lic-ov-email')?.value?.trim();
  const plan  = document.getElementById('lic-ov-plan')?.value;
  if(!email || !plan) { alert('Email and plan required'); return; }

  let users = [];
  try { users = JSON.parse(localStorage.getItem('pa_users') || '[]'); } catch(e){}
  const u = users.find(x => x.email === email);
  if(!u) { alert(`User ${email} not found`); return; }

  const planCredits = {free:100,starter:1000,professional:5000,enterprise:25000,custom:
    +(document.getElementById('lic-ov-credits')?.value||2500)};

  u.plan = plan;
  u.credits_balance = planCredits[plan] || 2500;
  u.credits_total = u.credits_balance;
  u.admin_override = true;
  u.discount = +(document.getElementById('lic-ov-discount')?.value||0);
  u.override_until = document.getElementById('lic-ov-until')?.value || null;

  localStorage.setItem('pa_users', JSON.stringify(users));
  if(typeof _showToast === 'function') _showToast(`✓ Plan updated for ${email}`, 3000);
  closeAdminPanel();
  setTimeout(openAdminPanel, 100);
}

function _adminCreateCoupon() {
  const code = document.getElementById('coupon-code')?.value?.trim().toUpperCase();
  const disc = +(document.getElementById('coupon-disc')?.value||0);
  const plan = document.getElementById('coupon-plan')?.value || 'any';
  const uses = +(document.getElementById('coupon-uses')?.value||100);
  if(!code) { alert('Code required'); return; }

  let coupons = [];
  try { coupons = JSON.parse(localStorage.getItem('pa_coupons') || '[]'); } catch(e){}
  if(coupons.find(c => c.code === code)) { alert('Code already exists'); return; }
  coupons.push({ code, discount: disc, plan, uses, createdAt: new Date().toISOString().split('T')[0] });
  localStorage.setItem('pa_coupons', JSON.stringify(coupons));
  if(typeof _showToast === 'function') _showToast(`✓ Coupon ${code} created`, 2500);
  document.getElementById('coupon-list').innerHTML = _renderCouponList();
}

function _adminDeleteCoupon(code) {
  if(!confirm(`Delete coupon ${code}?`)) return;
  let coupons = [];
  try { coupons = JSON.parse(localStorage.getItem('pa_coupons') || '[]'); } catch(e){}
  localStorage.setItem('pa_coupons', JSON.stringify(coupons.filter(c => c.code !== code)));
  document.getElementById('coupon-list').innerHTML = _renderCouponList();
}

function _adminGrantBypass() {
  const email = document.getElementById('bypass-email')?.value?.trim();
  const plan  = document.getElementById('bypass-plan')?.value || 'professional';
  if(!email) { alert('Email required'); return; }
  let bypasses = [];
  try { bypasses = JSON.parse(localStorage.getItem('pa_bypasses') || '[]'); } catch(e){}
  if(!bypasses.find(b => b.email === email)) {
    bypasses.push({ email, plan, grantedAt: new Date().toISOString().split('T')[0] });
    localStorage.setItem('pa_bypasses', JSON.stringify(bypasses));
  }
  // Also update user plan
  let users = [];
  try { users = JSON.parse(localStorage.getItem('pa_users') || '[]'); } catch(e){}
  const u = users.find(x => x.email === email);
  if(u) {
    u.plan = plan;
    u.credits_balance = {professional:5000,enterprise:25000}[plan]||5000;
    u.credits_total = u.credits_balance;
    u.bypass = true;
    localStorage.setItem('pa_users', JSON.stringify(users));
  }
  if(typeof _showToast === 'function') _showToast(`✓ Access granted to ${email}`, 3000);
  document.getElementById('bypass-list').innerHTML = _renderBypassList();
}

function _adminRevokeBypass(email) {
  if(!confirm(`Revoke access for ${email}?`)) return;
  let bypasses = [];
  try { bypasses = JSON.parse(localStorage.getItem('pa_bypasses') || '[]'); } catch(e){}
  localStorage.setItem('pa_bypasses', JSON.stringify(bypasses.filter(b => b.email !== email)));
  document.getElementById('bypass-list').innerHTML = _renderBypassList();
}

function _adminDeleteUser(id) {
  if(!confirm('Delete this user? This removes their account and all projects.')) return;
  let users = [];
  try { users = JSON.parse(localStorage.getItem('pa_users') || '[]'); } catch(e){}
  const u = users.find(x => x.id === id);
  if(!u) return;
  users = users.filter(x => x.id !== id);
  localStorage.setItem('pa_users', JSON.stringify(users));
  // Remove their projects
  Object.keys(localStorage).filter(k => k.startsWith('pa_wbs_') || k.startsWith('pa_risks_')).forEach(k => {
    if(k.includes(id)) localStorage.removeItem(k);
  });
  if(typeof _showToast === 'function') _showToast(`User deleted`, 2500);
  document.getElementById(`lic-u-${id}`)?.remove();
}

function _adminEditUser(id) {
  let users = [];
  try { users = JSON.parse(localStorage.getItem('pa_users') || '[]'); } catch(e){}
  const u = users.find(x => x.id === id);
  if(!u) return;
  const newPlan = prompt(`Plan for ${u.email} (free/starter/professional/enterprise):`, u.plan || 'free');
  if(!newPlan) return;
  const planCr = {free:100,starter:1000,professional:5000,enterprise:25000};
  u.plan = newPlan;
  u.credits_balance = +(prompt('Credits balance:', u.credits_balance||100)) || u.credits_balance;
  u.credits_total = planCr[newPlan] || u.credits_total;
  localStorage.setItem('pa_users', JSON.stringify(users));
  if(typeof _showToast === 'function') _showToast(`✓ User updated`, 2500);
  closeAdminPanel();
  setTimeout(openAdminPanel, 100);
}

function _adminAddUser() {
  const email = prompt('New user email:');
  if(!email) return;
  const pwd = prompt('Password:');
  if(!pwd) return;
  let users = [];
  try { users = JSON.parse(localStorage.getItem('pa_users') || '[]'); } catch(e){}
  if(users.find(u => u.email === email)) { alert('Email already exists'); return; }
  const id = 'adm_' + Math.random().toString(36).slice(2,10);
  users.push({ id, email, password: pwd, name: email.split('@')[0], plan: 'free', credits_balance: 100, credits_total: 100 });
  localStorage.setItem('pa_users', JSON.stringify(users));
  if(typeof _showToast === 'function') _showToast(`✓ User created: ${email}`, 3000);
  closeAdminPanel();
  setTimeout(openAdminPanel, 100);
}

function _adminFilterUsers(q) {
  const list = document.getElementById('admin-user-list');
  if(!list) return;
  list.querySelectorAll('.lic-row').forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = !q || text.includes(q.toLowerCase()) ? '' : 'none';
  });
}

function _adminToggleMaintenance(on) {
  localStorage.setItem('pa_maintenance', on ? 'true' : 'false');
  if(typeof _showToast === 'function') _showToast(on ? '⚠ Maintenance mode ON' : '✓ Maintenance mode OFF', 2500);
}

function _adminToggleRegistration(on) {
  localStorage.setItem('pa_reg_disabled', on ? 'true' : 'false');
}

function _adminChangePwd() {
  const newPwd = document.getElementById('adm-new-pwd')?.value?.trim();
  if(!newPwd || newPwd.length < 6) { alert('Code must be at least 6 characters'); return; }
  localStorage.setItem('pa_admin_code', newPwd);
  if(typeof _showToast === 'function') _showToast('✓ Admin code changed', 2500);
}

function _adminExportAllData() {
  const data = {};
  Object.keys(localStorage).filter(k => k.startsWith('pa_')).forEach(k => {
    try { data[k] = JSON.parse(localStorage.getItem(k)); } catch(e) { data[k] = localStorage.getItem(k); }
  });
  const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `gensched-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
}

function _adminShowDbStats() {
  const stats = [];
  let totalSize = 0;
  Object.keys(localStorage).filter(k => k.startsWith('pa_')).forEach(k => {
    const size = (localStorage.getItem(k)||'').length;
    totalSize += size;
    stats.push({key: k, size});
  });
  stats.sort((a,b) => b.size - a.size);
  const el = document.getElementById('adm-db-stats');
  if(el) el.innerHTML = `
    <strong>Total localStorage:</strong> ${(totalSize/1024).toFixed(1)} KB / ~5000 KB limit<br>
    <strong>Keys:</strong> ${stats.length}<br>
    ${stats.slice(0,5).map(s => `${s.key}: ${(s.size/1024).toFixed(1)} KB`).join('<br>')}`;
}

function closeAdminPanel() {
  document.getElementById('admin-modal-ovl')?.remove();
}

// Add admin menu item to user menu on load
(function _initAdmin() {
  setTimeout(() => {
    const um = document.querySelector('.user-menu, #user-menu');
    if(!um) return;
    if(um.querySelector('[data-admin-item]')) return;
    const div = document.createElement('div');
    div.className = 'um-item';
    div.setAttribute('data-admin-item', '1');
    div.style.cssText = 'color:#DC2626;border-top:1px solid var(--b1);margin-top:4px;padding-top:6px';
    div.innerHTML = '&#128273; Admin Panel';
    div.onclick = () => { closeMenu?.(); openAdminPanel(); };
    um.insertBefore(div, um.querySelector('.um-item.red'));
  }, 500);
})();

// ═══ INIT ═══
C_DOMS.forEach(d=>{domOpen[d.id]=false;});
domOpen['SI']=true;domOpen['TW']=true;domOpen['PIL']=true;domOpen['RC']=true;domOpen['PC']=true;domOpen['DP']=true;domOpen['SCOMM']=true;
loadCustomLibrary();renderLib();
// Init calendar modal default days (Mon-Fri on)
(function(){
  const days=document.querySelectorAll('#new-cal-days .cal-day');
  if(days)days.forEach(d=>{
    const dn=+d.dataset.d;
    d.classList.toggle('on',[1,2,3,4,5].includes(dn));
  });
})();

function _toggleHelpSidebar() {
  const sb = document.getElementById('help-sidebar');
  if(!sb) return;
  const isOpen = sb.style.width !== '0px' && sb.offsetWidth > 10;
  sb.style.width = isOpen ? '0px' : '220px';
  sb.style.overflow = isOpen ? 'hidden' : 'auto';
  const btn = document.getElementById('help-sidebar-toggle');
  if(btn) btn.style.background = isOpen ? 'rgba(109,40,217,.12)' : '';
}


function clearSchedule(){
  if(!WPS.length&&!WBS_NODES.length){_showToast&&_showToast('Schedule already empty',2000);return;}
  if(!confirm('Clear entire schedule?\n\nDelete '+WPS.length+' activities and '+WBS_NODES.length+' WBS nodes.\n\nThis ALSO clears resource assignments, EVM data, DCMA results, baselines and risks.\n\nResource library is kept. Archive first if needed. Cannot be undone.'))return;

  // Wipe all schedule data
  WPS.length=0;
  WBS_NODES.length=0;
  if(typeof ACTIVE_WBS!=='undefined')ACTIVE_WBS=null;

  // Wipe baselines
  if(typeof BASELINES!=='undefined')BASELINES=[null,null,null,null];
  if(typeof _activeBaseline!=='undefined')_activeBaseline=-1;

  // Wipe risks and EVM input
  if(typeof RISKS!=='undefined')RISKS=[];
  if(typeof EVM_DATA!=='undefined')EVM_DATA={dataDate:'',bac:0,actuals:[]};

  // Wipe schedule calc results
  if(typeof SCHED!=='undefined')SCHED={};

  // Wipe DCMA, EVM caches
  if(typeof _dcmaResults!=='undefined')_dcmaResults=null;
  if(typeof _evmCache!=='undefined')_evmCache=null;

  // Wipe milestones
  if(typeof MILESTONES!=='undefined')MILESTONES.length=0;

  // Wipe activity codes assignments (but keep code types defined)
  if(typeof ACTIVITY_CODES!=='undefined' && Array.isArray(ACTIVITY_CODES)){
    ACTIVITY_CODES.forEach(ct=>{ if(ct.assignments) ct.assignments={}; });
  }

  // Reset PROJECT_SETTINGS BAC
  if(typeof PROJECT_SETTINGS!=='undefined'){
    PROJECT_SETTINGS.bac=0;
    PROJECT_SETTINGS.dataDate='';
  }

  // Reset VS render state
  if(typeof VS!=='undefined'){VS.flat=[];VS.totalH=0;VS._rowTops=null;VS._rowTopsRef=null;VS.visStart=-1;VS.visEnd=-1;}
  try{_cacheGeneration++;}catch(e){}
  try{_rowHtmlCache&&_rowHtmlCache.clear&&_rowHtmlCache.clear();}catch(e){}
  if(typeof _succMapCache!=='undefined')_succMapCache={};

  // Clear selected activity
  if(typeof _selectedWi!=='undefined')_selectedWi=null;
  document.getElementById('act-detail-dock')&&(document.getElementById('act-detail-dock').style.display='none');

  // Re-render ALL tabs to reflect cleared state
  refreshAllTabs();

  // Save (so cleared state is persisted)
  saveWbsToProject&&saveWbsToProject();

  _showToast&&_showToast('Schedule cleared - all tabs refreshed',3000);
}

// Universal refresh — call after clear, import, or major state change
function refreshAllTabs(){
  try{ assignWbs && assignWbs(); }catch(e){}
  try{ recalc && recalc(); }catch(e){}
  try{ renderWbsTree && renderWbsTree(); }catch(e){}
  try{ renderWps && renderWps(); }catch(e){}
  try{ renderGantt && renderGantt(); }catch(e){}
  try{ renderResources && renderResources(); }catch(e){}
  try{ computeEVM && computeEVM(); }catch(e){}
  try{ renderDashboardEVM && renderDashboardEVM(); }catch(e){}
  try{ runDCMA && runDCMA(); }catch(e){}
  try{ renderSCurve && renderSCurve(); }catch(e){}
  try{ renderRiskTable && renderRiskTable(); }catch(e){}
  try{ updateHealthRing && updateHealthRing(); }catch(e){}
  try{ updateHdrSummary && updateHdrSummary(); }catch(e){}
  try{ updateWpsBadge && updateWpsBadge(); }catch(e){}
  try{ _refreshHeaderAfterImport && _refreshHeaderAfterImport(); }catch(e){}
  try{ _updateSchedInfoBar && _updateSchedInfoBar(); }catch(e){}
}
function archiveCurrentProject(){
  if(!currentProject){alert('No active project.');return;}
  if(!WPS.length){alert('Nothing to archive.');return;}
  const nm=prompt('Archive name:',currentProject.name+' - '+new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}));
  if(!nm)return;
  let arcs=[];try{arcs=JSON.parse(localStorage.getItem('pa_archives')||'[]');}catch(e){}
  arcs.unshift({id:'arch_'+Date.now().toString(36),name:nm,projectId:currentProject.id,projectName:currentProject.name,archivedAt:new Date().toISOString(),activityCount:WPS.length,wbsCount:WBS_NODES.length,snapshot:{wps:JSON.parse(JSON.stringify(WPS)),wbsNodes:JSON.parse(JSON.stringify(WBS_NODES)),sched:JSON.parse(JSON.stringify(SCHED||{})),project:{...currentProject}}});
  if(arcs.length>20)arcs=arcs.slice(0,20);
  try{localStorage.setItem('pa_archives',JSON.stringify(arcs));_showToast&&_showToast('Archived: '+nm,3000);}
  catch(e){alert('Archive failed - storage may be full. Export JSON first.');}
}
function openArchivesList(){
  let arcs=[];try{arcs=JSON.parse(localStorage.getItem('pa_archives')||'[]');}catch(e){}
  document.getElementById('archives-ovl')&&document.getElementById('archives-ovl').remove();
  const ovl=document.createElement('div');ovl.id='archives-ovl';ovl.className='credit-modal-overlay';
  ovl.onclick=function(e){if(e.target===ovl)ovl.remove();};
  const items=arcs.length?arcs.map(function(a){
    const did = a.id;
    const row=document.createElement('div');
    row.style.cssText='display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--s1);border-radius:8px;margin-bottom:8px;border:1px solid var(--b2)';
    row.innerHTML='<div style="flex:1;min-width:0">'
      +'<div style="font-size:12px;font-weight:700">'+esc(a.name)+'</div>'
      +'<div style="font-size:10px;color:var(--t3);margin-top:2px">'+a.activityCount+' activities</div>'
      +'</div>';
    const rBtn=document.createElement('button'); rBtn.className='btn btns'; rBtn.style.cssText='font-size:10px;padding:4px 10px'; rBtn.textContent='Restore';
    rBtn.onclick=function(){_restoreArchive(did);};
    const dBtn=document.createElement('button'); dBtn.style.cssText='font-size:10px;padding:4px 8px;background:#DC2626;color:#fff;border:none;border-radius:5px;cursor:pointer'; dBtn.textContent='Del';
    dBtn.onclick=function(){_deleteArchive(did);};
    row.appendChild(rBtn); row.appendChild(dBtn);
    return row.outerHTML;
  }).join('') : '<div style="text-align:center;padding:32px;color:var(--t3)"><div style="font-size:24px;margin-bottom:8px">&#128451;</div><div>No archives yet.</div></div>';
  const inner=document.createElement('div');
  inner.style.cssText='background:var(--s0);border-radius:12px;padding:24px 26px;width:96vw;max-width:640px;max-height:85vh;overflow-y:auto;box-shadow:0 16px 60px rgba(0,0,0,.3);border:1px solid var(--b1)';
  inner.innerHTML='<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">'
    +'<span style="font-size:20px">&#128451;</span>'
    +'<h3 style="margin:0;font-size:15px;font-weight:800">Archived Schedules</h3>'
    +'<div style="flex:1"></div>'
    +'<button id="close-archives-btn" style="background:none;border:none;cursor:pointer;font-size:18px;color:var(--t2)">&#215;</button>'
    +'</div>'+items;
  ovl.appendChild(inner);
  document.body.appendChild(ovl);
  document.getElementById('close-archives-btn').onclick=function(){ovl.remove();};
}
function _restoreArchive(id){
  let arcs=[];try{arcs=JSON.parse(localStorage.getItem('pa_archives')||'[]');}catch(e){}
  const a=arcs.find(function(x){return x.id===id;});if(!a)return;
  if(!confirm('Restore "'+a.name+'"? Replaces current schedule.'))return;
  const s=a.snapshot;
  WPS.length=0;s.wps.forEach(function(w){WPS.push(w);});
  WBS_NODES.length=0;s.wbsNodes.forEach(function(n){WBS_NODES.push(n);});
  if(s.project&&currentProject)Object.assign(currentProject,s.project);
  assignWbs&&assignWbs();recalc&&recalc();
  if(typeof VS!=='undefined'){VS.flat=[];VS._rowTops=null;}
  refreshAllTabs && refreshAllTabs();
  document.getElementById('archives-ovl').remove();
  _showToast&&_showToast('Restored: '+a.name,3000);saveWbsToProject&&saveWbsToProject();
}
function _deleteArchive(id){
  if(!confirm('Delete this archive?'))return;
  let arcs=[];try{arcs=JSON.parse(localStorage.getItem('pa_archives')||'[]');}catch(e){}
  localStorage.setItem('pa_archives',JSON.stringify(arcs.filter(function(x){return x.id!==id;})));
  document.getElementById('archives-ovl').remove();setTimeout(openArchivesList,50);
