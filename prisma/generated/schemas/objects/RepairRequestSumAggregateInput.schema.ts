import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    propertyId: z.literal(true).optional(),
    unitId: z.literal(true).optional(),
    vendorId: z.literal(true).optional(),
  })
  .strict();

export const RepairRequestSumAggregateInputObjectSchema = Schema;
