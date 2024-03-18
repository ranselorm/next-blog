import { PrismaClient } from "@prisma/client";

let prisma;

if (typeof global !== "undefined" && !global.prisma) {
  global.prisma = new PrismaClient();
}

prisma = global.prisma || new PrismaClient();

export default prisma;
