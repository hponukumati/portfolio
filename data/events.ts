export type Event = {
  name: string;
  role: string;
  date: string;
  description?: string;
  href?: string;
};

export const events: Event[] = [
  {
    name: "TechCrunch 2025",
    role: "Volunteer",
    date: "Oct 2025",
    description:
      "Supported event operations: explained event rules and procedures to attendees, verified IDs and credentials for entry, and helped coordinate crowd movement.",
  },
  {
    name: "TechEx North America 2025",
    role: "Attendee",
    date: "Jun 4, 2025",
    description:
      "Startup showcase highlights: RavenDB’s native database features, Pan Botica’s coffee-making robot, and SJSU founders pitching for funding.",
  },
];
