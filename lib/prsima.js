import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma.db || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
