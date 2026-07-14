import { GraduationCap } from "lucide-react";
import BentoCard from "@/components/BentoCard";

export default function About() {
  return (
    <BentoCard id="about" className="md:col-span-2">
      <h2 className="text-lg font-semibold tracking-tight">About me</h2>
      <p className="mt-3 text-sm leading-6 text-foreground/90">
        Software engineer who likes building tools that solve real, specific
        problems — from medical-vocabulary speech recognition to filesystem
        search that never makes you wait.
      </p>
      <p className="mt-4 flex items-center gap-2 text-sm text-muted">
        <GraduationCap className="h-4 w-4 shrink-0 text-accent" />
        M.S. Software Engineering, San Jose State University
      </p>
    </BentoCard>
  );
}
