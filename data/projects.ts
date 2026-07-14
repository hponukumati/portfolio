export type Project = {
  name: string;
  description: string;
  href: string;
  tags: string[];
  size: "large" | "standard";
};

export const projects: Project[] = [
  {
    name: "Speechify",
    description:
      "Fully offline speech-to-text tool built on faster-whisper, specialized for medical terminology. Transcripts run through a 4-layer correction pipeline — learned exact corrections, prompt biasing, fuzzy matching (rapidfuzz), and Double Metaphone phonetic matching. User corrections feed a self-learning loop: confirmed terms get promoted into the permanent vocabulary across all layers.",
    href: "https://github.com/hponukumati/speechify",
    tags: ["Python", "FastAPI", "Whisper", "NLP"],
    size: "large",
  },
  {
    name: "StatusCheck",
    description:
      "Automated job-application tracker that reads Gmail directly, logging applications to CSV and moving them through Applied → Interview → Offer → Rejected based on email content. Matches emails to applications by company name with confidence scoring, runs daily via cron, and sends an optional digest email when anything changes.",
    href: "https://github.com/hponukumati/StatusCheck",
    tags: ["Python", "Gmail API", "OAuth2", "Automation"],
    size: "large",
  },
  {
    name: "Findex",
    description:
      "Fast, predictable file search for macOS. Indexes the filesystem once into SQLite, then serves instant queries against the index — search speed stays flat no matter how big the disk is. Interactive fzf picker for opening results.",
    href: "https://github.com/hponukumati/findex",
    tags: ["Go", "SQLite", "CLI tooling"],
    size: "standard",
  },
  {
    name: "Movie Theatre Website",
    description:
      "Full-stack movie theatre site built by a four-person team — a React frontend backed by a Node.js server, developed XP-style with an emphasis on simple, readable code.",
    href: "https://github.com/hponukumati/movie-theatre-website",
    tags: ["JavaScript", "React", "Node.js"],
    size: "standard",
  },
];
