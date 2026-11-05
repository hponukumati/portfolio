export type Contribution = {
  repo: string;
  title: string;
  description: string;
  href: string;
  tags: string[];
  merged: string;
};

export const contributions: Contribution[] = [
  {
    repo: "ohmyzsh/ohmyzsh",
    title: "chore(install): quote vars and defensive programming",
    description:
      "Made Oh My Zsh's install script more robust with a defensive programming cleanup, so it handles edge cases more safely. Nothing changes for normal installs.",
    href: "https://github.com/ohmyzsh/ohmyzsh/pull/13840",
    tags: ["Shell", "Open source"],
    merged: "Jun 2026",
  },
];
