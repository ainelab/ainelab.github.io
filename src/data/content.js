export const RESEARCH = [
  {
    tag: 'Signals',
    title: 'Neural signals & brain networks',
    body: 'Temporal, spectral, and spatial structure of EEG, MEG, and SEEG activity — with a focus on functional and effective connectivity: how distributed regions interact to support cognition, emotion, behaviour, and health.',
  },
  {
    tag: 'Clinical',
    title: 'Epilepsy & clinical neurotechnology',
    body: 'Non-invasive and invasive recordings (EEG, SEEG) to identify clinically meaningful biomarkers, characterise seizure-related network dynamics, and build data-driven tools for seizure localisation and monitoring.',
  },
  {
    tag: 'MEG',
    title: 'MEG & neurodegenerative disorders',
    body: "Magnetoencephalography to probe brain dynamics in health and disease, including Parkinson's — studying oscillations, connectivity, and network-level alterations as interpretable markers of brain health.",
  },
  {
    tag: 'AI',
    title: 'AI for neuroscience & healthcare',
    body: 'Machine-learning and AI methods for biomedical and neural data — prioritising interpretable models that reveal physiological and clinical patterns, integrated with signal processing and network neuroscience.',
  },
  {
    tag: 'Behaviour',
    title: 'Emotion, cognition & behaviour',
    body: 'Neural mechanisms of emotion, impulsivity, cognition, and brain–behaviour relationships — how dynamic interactions within and between brain networks relate to individual differences and affective states.',
  },
];

export const METHODS = [
  'Neural signal processing', 'EEG · MEG · SEEG analysis', 'Brain connectivity & network neuroscience',
  'Machine learning & AI', 'Statistical learning & time-series', 'Dynamical systems & modelling',
  'Clinical & translational neuroscience',
];

export const PROJECTS = [
  {
    level: 'PhD / M.Tech',
    title: 'Seizure-onset localisation from SEEG',
    body: 'Envelope-based changepoint analysis and network dynamics to segment seizures and localise onset zones from intracranial recordings.',
    skills: ['SEEG', 'Changepoint', 'Networks'],
  },
  {
    level: 'PhD',
    title: 'Contrastive learning of ictal patterns',
    body: 'Self-supervised representations of stereo-EEG to discover ictal onset patterns without hand-labelled data.',
    skills: ['Self-supervised', 'Deep learning', 'SEEG'],
  },
  {
    level: 'PhD / M.Tech',
    title: 'MEG network markers in Parkinson’s',
    body: 'Network-control and connectivity metrics from MEG to distinguish clinical states and track disease-related change.',
    skills: ['MEG', 'Connectivity', 'Control theory'],
  },
  {
    level: 'M.Tech / UG',
    title: 'Interpretable EEG emotion models',
    body: 'Explainable ML on bispectral and superlet-transform features for subject-independent emotion recognition.',
    skills: ['EEG', 'Explainable AI', 'Time-frequency'],
  },
  {
    level: 'UG',
    title: 'Brain-network modelling toolkit',
    body: 'Spectral graph and graph-OU models linking structural connectomes to measured neural dynamics.',
    skills: ['Graph models', 'Python', 'Simulation'],
  },
];

// Selected recent publications (full list on Google Scholar).
export const PUBLICATIONS = [
  {
    year: 2026, venue: 'Biomedical Physics & Engineering Express',
    title: 'Subject-independent emotion recognition with EEG bispectral quadratic phase coupling features and explainable machine learning',
    authors: 'Kumar H, Ganapathy N, Puthankattil SD, Swaminathan R',
    link: 'https://iopscience.iop.org/article/10.1088/2057-1976/ae711a',
  },
  {
    year: 2026, venue: 'Annals of Biomedical Engineering',
    title: 'Three-Phase Seizure Segmentation in Stereotactic EEG Using Envelope-Based Multivariate Changepoint Analysis',
    authors: 'Kumar H, Seshadri NPG, Martinez D, Najm I, Alexopoulos A, Bulacio JC, Serletis D, Krishnan B',
    link: 'https://doi.org/10.1007/s10439-026-04097-7',
  },
  {
    year: 2026, venue: 'Biomedical Signal Processing and Control',
    title: 'EEG-based emotion recognition using super-resolution superlet transform and self-attention convolutional neural network',
    authors: 'Kumar H, Govindarajan S, Ramakrishnan MS, Karthick PA, Ganapathy N',
    link: 'https://www.sciencedirect.com/science/article/pii/S1746809426009043',
  },
  {
    year: 2026, venue: 'Epilepsia',
    title: 'Presurgical MEG-derived network control metrics distinguish successful hippocampal resection vs sparing in temporal lobe epilepsy',
    authors: 'Seshadri NPG, Kumar H, John NS, Alexopoulos AV, Burgess RC, Murakami H, et al.',
    link: '',
  },
  {
    year: 2025, venue: 'IEEE Sensors Letters',
    title: 'Analysis of Dynamics of EEG Signals in Emotional Valence Using Super-Resolution Superlet Transform',
    authors: 'Kumar H, Ganapathy N, Swaminathan R',
    link: 'https://doi.org/10.1109/LSENS.2025.3526907',
  },
  {
    year: 2024, venue: 'Human Brain Mapping',
    title: 'Functional Brain Networks of Trait Impulsivity: A Connectome-Based Predictive Modeling Analysis',
    authors: 'Hüpen P, Kumar H, Swaminathan R, Habel U, Wagels L',
    link: 'https://doi.org/10.1002/hbm.70059',
  },
  {
    year: 2024, venue: 'IEEE Access',
    title: 'Exploring Central-Peripheral Nervous System Interaction Through Multimodal Biosignals: A Systematic Review',
    authors: 'Banik S, Kumar H, Ganapathy N, Swaminathan R',
    link: 'https://doi.org/10.1109/ACCESS.2024.3392069',
  },
  {
    year: 2023, venue: 'International Journal of Neural Systems',
    title: 'Impulsivity Classification Using EEG Power and Explainable Machine Learning',
    authors: 'Hüpen P, Kumar H*, Shymanskaya A, Swaminathan R, Habel U',
    link: 'https://doi.org/10.1142/S0129065723500065',
  },
];

export const STATS = [
  ['3', 'recording modalities', 'EEG · MEG · SEEG'],
  ['5', 'research areas', 'signals to behaviour'],
  ['20+', 'publications', 'journals & conferences'],
  ['∞', 'brain networks', 'dynamic & interpretable'],
];

// Dated updates — newest first. Seeded from recent publications & lab milestones; edit freely.
export const NEWS = [
  { date: 'May 2026', tag: 'Publication', text: 'New paper on subject-independent EEG emotion recognition with bispectral features and explainable ML published in Biomedical Physics & Engineering Express.' },
  { date: 'Apr 2026', tag: 'Publication', text: 'Work on envelope-based changepoint segmentation of seizures in stereotactic EEG published in Annals of Biomedical Engineering.' },
  { date: 'Apr 2026', tag: 'Publication', text: 'EEG emotion recognition with super-resolution superlet transform and self-attention CNN published in Biomedical Signal Processing and Control.' },
  { date: '2026', tag: 'Preprint', text: 'MEG-derived network control metrics for temporal lobe epilepsy accepted at Epilepsia.' },
  { date: '2026', tag: 'Lab', text: 'AI-NE Lab established at IIT Indore within the Mehta Family School of Biosciences & Biomedical Engineering.' },
];

// Highlights carousel — text-based achievement cards (no photos needed). Edit freely.
export const HIGHLIGHTS = [
  { kicker: 'Multimodal', title: 'EEG, MEG & SEEG', body: 'From non-invasive recordings to intracranial signals — studying brain dynamics across scales.' },
  { kicker: 'Clinical impact', title: 'Seizure localisation from SEEG', body: 'Data-driven segmentation and network dynamics to support epilepsy surgery decisions.' },
  { kicker: 'Interpretable AI', title: 'Explainable models for brain data', body: 'ML that reveals physiological and clinical patterns — not just predictions.' },
  { kicker: 'Collaborations', title: 'From bench to bedside', body: 'Ties to Cleveland Clinic Epilepsy Center and University Hospital RWTH Aachen.' },
];

// Members — the PI is real; open positions are advertised honestly instead of placeholder people.
export const PI = {
  name: 'Dr. Himanshu Kumar',
  role: 'Principal Investigator · Assistant Professor',
  affil: 'Mehta Family School of Biosciences & Biomedical Engineering, IIT Indore',
  bio: 'Biomedical signal processing, neurotechnology, and machine learning — EEG/SEEG/MEG, seizure characterisation, affective computing, and brain-network analysis. Previously postdoc at Cleveland Clinic Epilepsy Center and, as a DAAD Bi-National Guided Research Fellow, guest scientist at University Hospital RWTH Aachen, Germany. PhD, IIT Madras.',
  awards: [
    'DAAD Bi-National Guided Research Fellow — RWTH Aachen',
    'Postdoctoral Fellow — Cleveland Clinic Epilepsy Center',
    'Medal for academic excellence — IIIT Allahabad',
  ],
  links: [
    ['Website', 'https://himsriv24.github.io'],
    ['Scholar', 'https://scholar.google.com/citations?user=rlqKrlwAAAAJ'],
    ['ORCID', 'https://orcid.org/0000-0003-3255-4588'],
    ['Email', 'mailto:himanshu@iiti.ac.in'],
  ],
};

export const OPENINGS = [
  { level: 'PhD', body: 'Fully engaged doctoral research in neural signal processing, epilepsy, or AI for neuroscience.' },
  { level: 'M.Tech', body: 'Thesis projects on EEG/MEG analysis, brain networks, or interpretable machine learning.' },
  { level: 'Undergraduate', body: 'Project and internship roles for curious students across engineering and brain health.' },
];

// Teaching at IIT Indore.
export const TEACHING = [
  { code: 'BSE 637', title: 'Bioelectronics and Biomedical Sensors', term: 'Fall 2026', credits: '2-1-0 (3)', note: 'Principles of bioelectronics and sensing for physiological measurement. Co-taught with other faculty.' },
  { code: 'BSE 644 / 444', title: 'Biomedical Signal and Image Processing', term: 'Fall 2026', credits: '2-1-0 (3)', note: 'Signal and image processing methods for biomedical data. Co-taught with other faculty.' },
];
