import BentoCard from "@/components/BentoCard";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <BentoCard id="skills" className="md:col-span-2">
      <h2 className="text-lg font-semibold tracking-tight">Skills</h2>
      <div className="mt-4 space-y-4">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-xs font-medium text-foreground/70">
              {group.label}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-black/10 bg-black/5 px-2.5 py-0.5 text-xs text-foreground/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
