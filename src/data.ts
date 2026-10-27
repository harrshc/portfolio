// ✏️ EDIT ME: every personal detail on the site lives in this file.
export const profile = {
  name: 'Harsh Chauhan',
  handle: 'harrshc',
  email: 'hc121106@gmail.com',
  github: 'https://github.com/harrshc',
  linkedin: 'https://www.linkedin.com/in/harsh-chauhan-289170321/',
  about: [
    'I like knowing what my machine is actually doing. That curiosity pulled me into Linux, then into cybersecurity, and it keeps me tuning systems long after they already work.',
    'I am a learner and an aspiring engineer. This site is honest about that: what you see below is what I am exploring, with no invented credentials.',
  ],
  interests: ['Linux', 'Cybersecurity', 'Red Hat', 'Software development', 'Blender', 'System optimization'],
}

// status: 'interest' (default, no proficiency claimed) | 'learning' | 'verified'.
// Only switch an item to 'verified' when you can back it up (project, certificate, work).
export type Status = 'interest' | 'learning' | 'verified'
export const skills: { name: string; status: Status; note: string }[] = [
  { name: 'Linux', status: 'interest', note: 'Core interest: how the system works under the hood.' },
  { name: 'Fedora', status: 'interest', note: 'Part of the Red Hat family I want to learn more about.' },
  { name: 'Git', status: 'interest', note: 'Version control for every project.' },
  { name: 'GitHub', status: 'interest', note: 'Hosting code and this portfolio.' },
  { name: 'Blender', status: 'learning', note: 'Creating ideas into 3D models.' },
  { name: 'Cybersecurity fundamentals', status: 'learning', note: 'Learning the basics, step by step.' },
  { name: 'Red Hat', status: 'interest', note: 'Enterprise Linux ecosystem.' },
  { name: 'OpenShift', status: 'learning', note: 'Container platform I want to explore.' },
]

// ✏️ Replace these samples with real projects. Remove `sample: true` when real.
export const projects = [
  { 
    title: 'Project name goes here', 
    desc: 'Describe what you built, why, and what you learned. Replace this sample.', 
    stack: ['Linux', 'Bash'], 
    repo: 'https://github.com/harrshc', 
    demo: '', 
    sample: true 
  },
]

// ✏️ Add your real learning milestones (courses, workshops, contributions).
export const timeline = [
  {
    when: 'Nov 2023', 
    title: 'SSIP Gujarat - Project manager', 
    body: 'Placeholder: add the courses, labs or CTFs you actually did.',
  },
  { 
    when: 'Jun 2024 - Aug 2024',
    title: 'Game Developer intern at Waytoweb Solutions', 
    body: 'Here I learnt core of C# and Unity game engine.' 
  },
  {
    when: 'Sep 2025',
    title: '3D character model in Blender',
    body: 'Sculpted and textured a character called "Mechatronnn" while following the Model Video Game Characters course by GameDev.tv. Still learning, and shared it publicly.',
  },
  {
    when: 'Aug 2026',
    title: 'HackSpace Cyber Club inauguration',
    body: 'Part of the team behind the launch of the HackSpace Cyber Club at Parul University, which included a "Hack the Hacker" activity and a cybersecurity webinar.',
  },
  {
    when: 'Sep 2026',
    title: 'CTF Unlocked, HackSpace Club',
    body: 'Part of the organising team for a hands-on Capture The Flag session for students, handling event management and coordination.',
  },
  { 
    when: 'Oct 2026',
    title: 'Red Hat India Challenge 2026 workshop, Parul University',
    body: 'Part of the Red Hat core team that prepared and ran a technical workshop as a speaker on Linux basics, RHEL, Podman, Kubernetes and OpenShift, followed by a 40-question OpenShift quiz.',
  },
]