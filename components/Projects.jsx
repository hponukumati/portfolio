"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import projects from "@/data/projects";

function ProjectCard({ project }) {
  const isSvg = project.imageUrl.endsWith(".svg");

  return (
    <article className="group pop relative flex h-full flex-col overflow-hidden bg-panel">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className={`grayscale transition-all duration-500 group-hover:brightness-[0.15] ${
            isSvg ? "object-contain p-8" : "object-cover"
          }`}
        />
        {/* Slide-up overlay */}
        <div
          className="absolute inset-0 flex translate-y-full flex-col justify-end p-6 transition-transform duration-500 ease-out group-hover:translate-y-0"
          style={{ background: "var(--panel)" }}
        >
          <h3 className="font-display text-3xl uppercase leading-tight tracking-wide">
            {project.title}
          </h3>
          <p className="mt-2 font-serif text-sm leading-relaxed text-chalk/70">
            {project.blurb}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-2 font-typewriter text-xs tracking-widest transition-colors hover:text-accent"
            style={{ color: "var(--accent)" }}
          >
            View Project ↗
          </a>
        </div>
      </div>

      {/* Static info */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl uppercase tracking-wide">{project.title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-chalk/25 px-2 py-1 font-typewriter text-xs tracking-wide text-chalk/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading>Work</SectionHeading>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.1} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
