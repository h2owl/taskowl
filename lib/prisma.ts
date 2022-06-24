import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query", "error", "info", "warn"],
});

prisma.$on('beforeExit', async () => {
  console.log('beforeExit hook')
  await prisma.$disconnect();
});

// 取得データのjson化でエラーになるのを回避する
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
}

export * from "@prisma/client";