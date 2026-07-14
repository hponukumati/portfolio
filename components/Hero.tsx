import BentoCard from "@/components/BentoCard";

export default function Hero() {
  return (
    <BentoCard className="flex flex-col justify-between gap-10 md:col-span-2 lg:row-span-2">
      <div>
        <p className="inline-flex items-center gap-2 text-xs font-medium text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Available for a job
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Hello, my name is Sri&nbsp;Harsha, and I am a{" "}
          <span className="text-accent">Software Engineer</span>.
        </h1>
        <p className="mt-4 max-w-md text-base leading-7 text-muted">
          I build practical software — offline speech-to-text pipelines, fast
          CLI tools, and automation that quietly does its job.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-black/40"
        >
          Get in touch
        </a>
      </div>
    </BentoCard>
  );
}
