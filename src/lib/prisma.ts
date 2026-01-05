// Prisma Client - Initialize only after migrations are run
// This file is prepared for database integration

// TODO: Uncomment after running "npx prisma migrate dev"
// import { PrismaClient } from '@prisma/client';
// const globalForPrisma = global as unknown as { prisma: PrismaClient };
// export const prisma = globalForPrisma.prisma || new PrismaClient();
// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Temporary export for build - remove after Prisma setup
export const prisma = null as any;
