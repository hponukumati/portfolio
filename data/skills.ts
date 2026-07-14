export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "Go", "SQL"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "FastAPI", "Node.js", "Tailwind CSS"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "Docker", "SQLite", "Vercel", "Linux"],
  },
];
