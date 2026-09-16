import { SkillItem, ProjectItem, TestimonialItem, ClientItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Rofique Chowdhury',
  brand: "Rofique’s Visuals",
  title: 'Senior Visualizer & Motion Designer',
  tagline: 'Visual Stories. Motion. Impact.',
  heroIntro: 'Crafting cinematic visuals, motion experiences and digital stories that turn ideas into impact.',
  experience: '6+ Years Experience',
  location: 'Dhaka, Bangladesh',
  timezone: 'GMT+6',
  projectsDelivered: '150+ Delivered',
  studentsMentored: '400+ Mentored',
  education: 'B.Sc. in CSE',
  availability: 'Available for Select Commissions',
  email: 'rofique.visuals@gmail.com',
  socials: [
    { name: 'Behance', url: 'https://behance.net', label: 'behance.net/rofiquevisuals' },
    { name: 'LinkedIn', url: 'https://linkedin.com', label: 'linkedin.com/in/rofique-chowdhury' },
    { name: 'YouTube', url: 'https://youtube.com', label: 'youtube.com/@rofiquevisuals' },
    { name: 'Facebook', url: 'https://facebook.com', label: 'facebook.com/rofiquevisuals' },
  ],
  services: [
    { title: 'Video Editing', desc: 'Cinematic pacing, narrative rhythm, sound design, and color grading for commercials and brand stories.' },
    { title: 'Motion Graphics', desc: '2D & 3D title sequences, kinetic typography, HUD interfaces, and dynamic broadcast packaging.' },
    { title: 'Brand Visuals', desc: 'Comprehensive motion identity systems, style frames, animated guidelines, and logo reveals.' },
    { title: 'Social Media Content', desc: 'High-retention creative formats tailored for modern algorithmic engagement.' },
    { title: 'Reels & Short-form', desc: 'Punchy, trend-aware vertical motion design engineered for TikTok, IG Reels, and YouTube Shorts.' },
    { title: 'Commercial Video', desc: 'End-to-end post-production for high-stakes corporate launches and product campaigns.' },
    { title: 'Creative Direction', desc: 'Concept development, moodboarding, visual treatment, and cinematic storytelling leadership.' }
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  { id: 'pr', name: 'Adobe Premiere Pro', category: 'Video Editing & Narrative', proficiency: 95, highlight: true },
  { id: 'ae', name: 'Adobe After Effects', category: 'Motion Graphics & VFX', proficiency: 95, highlight: true },
  { id: 'ps', name: 'Photoshop', category: 'Key Visuals & Compositing', proficiency: 90 },
  { id: 'ai', name: 'Illustrator', category: 'Vector & Identity Design', proficiency: 85 },
  { id: 'figma', name: 'Figma', category: 'UI & Storyboarding', proficiency: 85 },
  { id: 'davinci', name: 'DaVinci Resolve', category: 'Color Grading & Audio', proficiency: 85, highlight: true },
  { id: 'capcut', name: 'CapCut', category: 'Short-Form & Vertical Reels', proficiency: 90 },
  { id: 'genai', name: 'AI Creative Tools', category: 'Generative Storyboards & Assets', proficiency: 88 }
];

export const CLIENTS_DATA: ClientItem[] = [
  { name: 'UNDP', description: 'United Nations Development Programme — Youth & digital empowerment visual campaigns', sector: 'International NGO' },
  { name: 'FutureNation', description: 'National economic and youth skills initiative motion narratives & masterclasses', sector: 'Nation-Building Initiative', highlight: true },
  { name: 'MGI', description: 'Meghna Group of Industries — Flagship consumer brand films & TVCs', sector: 'Conglomerate & FMCG', highlight: true },
  { name: 'British Council', description: 'Educational & cultural documentary editing and event motion packages', sector: 'Education & Culture' },
  { name: 'ICAB', description: 'Institute of Chartered Accountants of Bangladesh — Annual conference visual assets', sector: 'Professional Institution' },
  { name: 'Creative IT', description: 'Lead visualizer, syllabus architect, and senior motion graphics mentor', sector: 'Tech & Design Academy' }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-1',
    number: '01',
    title: 'Aura Chronos — Cinematic Brand Film',
    client: 'Apex Timepieces',
    category: 'Brand Film',
    year: '2025',
    description: 'A dark, atmospheric commercial exploring precision mechanics, time perception, and luxury engineering with bespoke sound design and macro camera moves.',
    deliverables: ['Director’s Cut 90s', 'Broadcast Master 30s', 'Social Cutdowns (9:16)'],
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    duration: '01:30',
    aspectRatio: '16:9',
    thumbnail: '/assets/projects/project-1.jpg',
    highlightStat: '4.2M Impressions'
  },
  {
    id: 'project-2',
    number: '02',
    title: 'Synthetic Pulse — 3D Motion System',
    client: 'Vanguard Audio Lab',
    category: 'Motion Graphics',
    year: '2025',
    description: 'Comprehensive kinetic identity system translating sonic frequencies into organic digital wireframes, particle simulations, and dynamic typography.',
    deliverables: ['Brand Motion Guidelines', '12 Dynamic Loops', 'Audio-Reactive Idents'],
    tools: ['After Effects', 'Illustrator', 'Cinema 4D'],
    duration: '00:45',
    aspectRatio: '16:9',
    thumbnail: '/assets/projects/project-2.jpg',
    highlightStat: 'Featured on Behance'
  },
  {
    id: 'project-3',
    number: '03',
    title: 'FutureNation X — Youth Impact Campaign',
    client: 'FutureNation / UNDP',
    category: 'Social Media Campaign',
    year: '2024',
    description: 'High-energy nationwide digital campaign celebrating digital youth leadership, combining fast-paced typography cuts, graphic match cuts, and documentary footage.',
    deliverables: ['8 Episodic Reels', 'Hero Launch Video', 'Social Motion Kit'],
    tools: ['Premiere Pro', 'After Effects', 'CapCut Pro'],
    duration: '02:15',
    aspectRatio: '9:16 / 16:9',
    thumbnail: '/assets/projects/project-3.jpg',
    highlightStat: '150K+ Engagement'
  },
  {
    id: 'project-4',
    number: '04',
    title: 'Zero Latency — Hardware Commercial',
    client: 'Aegis Gaming Gear',
    category: 'Commercial',
    year: '2024',
    description: 'Electrifying commercial spot highlighting optical switches and low-latency wireless response through explosive neon pacing and kinetic audio synchronization.',
    deliverables: ['Hero Commercial 45s', 'In-Store Display Loop', 'Digital Banners'],
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    duration: '00:45',
    aspectRatio: '16:9',
    thumbnail: '/assets/projects/project-4.jpg',
    highlightStat: 'Broadcast & OTT'
  },
  {
    id: 'project-5',
    number: '05',
    title: 'Lumina Slate — Next-Gen Tablet Reveal',
    client: 'Kvantum Devices',
    category: 'Product Video',
    year: '2024',
    description: 'Minimalist product reveal emphasizing aerospace-grade aluminum chamfers, OLED radiance, and ultra-thin chassis architecture.',
    deliverables: ['Keynote Reveal 60s', 'Feature Explainer Modules', 'Web Video Loops'],
    tools: ['After Effects', 'Premiere Pro', 'Photoshop'],
    duration: '01:00',
    aspectRatio: '16:9',
    thumbnail: '/assets/projects/project-5.jpg',
    highlightStat: 'Launch Keynote'
  },
  {
    id: 'project-6',
    number: '06',
    title: 'Echoes of Velocity — Kinetic Manifesto',
    client: 'Self-Initiated Editorial',
    category: 'Kinetic Typography',
    year: '2023',
    description: 'Experimental typographic film dissecting rhythm, momentum, and brutalist editorial layouts with stark black-and-white contrast and synchronized sub-bass hits.',
    deliverables: ['Cinematic Short 75s', 'Typography Poster Series', 'Motion Stills'],
    tools: ['After Effects', 'Illustrator', 'Photoshop'],
    duration: '01:15',
    aspectRatio: '2.39:1',
    thumbnail: '/assets/projects/project-6.jpg',
    highlightStat: 'Staff Pick'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Rofique transformed our raw ideas into a visual story that felt polished, modern and genuinely engaging. His sense of editorial timing and motion grammar is exceptional.',
    author: 'Nafisur Rahman',
    role: 'Creative Director',
    organization: 'FutureNation',
    verified: true
  },
  {
    id: 'test-2',
    quote: 'Working with Rofique elevated our entire digital campaign. His precision in timing, cinematic color grading, and visual elegance set a new benchmark for our team.',
    author: 'Sarah Lin',
    role: 'Head of Brand & Communications',
    organization: 'UNDP Digital Initiative',
    verified: true
  },
  {
    id: 'test-3',
    quote: 'From storyboarding to final audio-visual mix, Rofique delivers agency-level craftsmanship under tight deadlines. Our flagship commercial turned heads across every platform.',
    author: 'Tanvir Ahmed',
    role: 'Lead Brand Strategist',
    organization: 'Meghna Group of Industries (MGI)',
    verified: true
  }
];
