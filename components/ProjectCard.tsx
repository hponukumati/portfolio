import { ArrowUpRight } from "lucide-react";
import BentoCard from "@/components/BentoCard";
import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  id,
}: {
  project: Project;
  id?: string;
}) {
  return (
    <BentoCard
      id={id}
      className={`group flex flex-col ${
        project.size === "large" ? "md:col-span-2" : ""
      }`}
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit"
      >
        <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
      </a>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">
        {project.description}
      </p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 px-2.5 py-0.5 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} on GitHub`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 text-foreground transition-colors group-hover:border-accent group-hover:text-accent"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </BentoCard>
  );
}
