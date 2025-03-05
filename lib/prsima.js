import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}

//export const db = globalThis.prisma.db || new PrismaClient();

//if (process.env.NODE_ENV !== "production") {
//  globalThis.prisma = db;
//}
