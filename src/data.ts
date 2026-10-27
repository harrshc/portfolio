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
  { name: 'Blender', status: 'interest', note: 'Creating ideas into 3D models.' },
  { name: 'Cybersecurity fundamentals', status: 'learning', note: 'Learning the basics, step by step.' },
  { name: 'Red Hat', status: 'interest', note: 'Enterprise Linux ecosystem.' },
  { name: 'OpenShift', status: 'interest', note: 'Container platform I want to explore.' },
]

// ✏️ Replace these samples with real projects. Remove `sample: true` when real.
export const projects = [
  { title: 'Project name goes here', desc: 'Describe what you built, why, and what you learned. Replace this sample.', stack: ['Linux', 'Bash'], repo: 'https://github.com/harrshc', demo: '', sample: true },
  { title: 'Another project', desc: 'A second sample card. Add your repository link and a live demo URL if you have one.', stack: ['Python', 'Git'], repo: 'https://github.com/harrshc', demo: '', sample: true },
  { title: 'Lab notes / dotfiles', desc: 'Idea: publish your Linux configs or write-ups as a repository.', stack: ['Fedora', 'Shell'], repo: 'https://github.com/harrshc', demo: '', sample: true },
]

// ✏️ Add your real learning milestones (courses, workshops, contributions).
export const timeline = [
  { when: 'June 2024-August 2024', title: 'Game Developer intern at Waytoweb Solutions', body: 'Here I learnt core of C# and Unity game engine.' },
  { when: 'Add date', title: 'Cybersecurity fundamentals', body: 'Placeholder: add the courses, labs or CTFs you actually did.' },
  { when: 'Add date', title: 'Red Hat learning path', body: 'Placeholder: add workshops or certifications only if real.' },
]

// ✏️ Only real achievements. Leave empty to show the invitation card.
export const achievements: { title: string; detail: string }[] = [
  { title: 'SSIP Gujarat-Project manager', detail: 'My first ever Hackathon where I got to know how to represent your project on the problem given to you and how to represent yourself as per presentation point of view, I did a bit of Frontend development, Research work and Documentation of the project. Which logically means i mostly did Project Managing.' },
  { title: 'Another one', detail: 'Same idea.' },
]
