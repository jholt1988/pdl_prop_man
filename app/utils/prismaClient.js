import { PrismaClient } from "@prisma/client";

let applicationPrismaClient;

function getPrismaClient() {
  if (!applicationPrismaClient) {
    applicationPrismaClient = new PrismaClient();
  }
  return applicationPrismaClient;
}

export const prismaClient =  getPrismaClient();
