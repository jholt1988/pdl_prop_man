import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    issue: z.literal(true).optional(),
    image: z.literal(true).optional(),
    propertyId: z.literal(true).optional(),
    unitId: z.literal(true).optional(),
    status: z.literal(true).optional(),
    vendorId: z.literal(true).optional(),
  })
  .strict();

export const RepairRequestMaxAggregateInputObjectSchema = Schema;
