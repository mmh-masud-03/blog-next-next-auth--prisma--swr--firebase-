import { PrismaClient } from "@prisma/client";
const prismaClientSingleTone = () => {
  return new PrismaClient();
};
type prismaClientSingleTone = ReturnType<typeof prismaClientSingleTone>;

const globalForPrisma = globalThis as unknown as {
  prisma: prismaClientSingleTone | undefined;
};
export const prisma = globalForPrisma.prisma ?? prismaClientSingleTone();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
