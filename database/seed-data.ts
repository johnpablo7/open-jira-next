interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pendiente: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus .",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "En- Progreso Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus .",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Terminadas Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus .",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
