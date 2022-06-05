import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query", "error", "info", "warn"],
});

prisma.$on('beforeExit', async () => {
  console.log('beforeExit hook')
  await prisma.$disconnect();
});

export * from "@prisma/client";