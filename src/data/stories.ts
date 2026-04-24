export type Story = {
  quote: string;
  name: string;
  role: string;
  avatar: string | null;
};

export const stories: Story[] = [
  {
    quote:
      "I had the skills but not the corridor. Origin Workforce found the path. Two years on, I lead a development team.",
    name: "David O.",
    role: "Software Engineer · Manufacturing · East Africa to Europe",
    avatar: null,
  },
  {
    quote:
      "The preparation process was unlike anything I had experienced. I arrived ready, not just willing.",
    name: "Amara K.",
    role: "Healthcare Worker · Hospitality · West Africa to the Gulf",
    avatar: null,
  },
  {
    quote:
      "Origin Workforce didn't just place me — they made sure I understood what I was walking into.",
    name: "Fatima M.",
    role: "Operations Lead · Construction · North Africa to Europe",
    avatar: null,
  },
];
