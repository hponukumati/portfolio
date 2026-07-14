import { Github, Linkedin, Mail } from "lucide-react";
import BentoCard from "@/components/BentoCard";

const contactLinks = [
  {
    label: "sriharshaponukumati@gmail.com",
    href: "mailto:sriharshaponukumati@gmail.com",
    Icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/hponukumati",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hponukumati",
    Icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <BentoCard id="contact" className="md:col-span-2">
      <h2 className="text-lg font-semibold tracking-tight">Get in touch</h2>
      <p className="mt-3 text-sm leading-6 text-muted">
        Open to interesting problems and good conversations.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {contactLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-black/15 px-4 py-1.5 text-sm text-foreground/90 transition-colors hover:border-black/40 hover:text-foreground"
          >
            <Icon className="h-4 w-4 text-accent" />
            {label}
          </a>
        ))}
      </div>
    </BentoCard>
  );
}
