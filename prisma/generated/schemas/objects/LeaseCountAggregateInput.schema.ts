import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    termOfLease: z.literal(true).optional(),
    beginDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    monthlyRent: z.literal(true).optional(),
    deposit: z.literal(true).optional(),
    petDeposit: z.literal(true).optional(),
    tenantId: z.literal(true).optional(),
    propertyId: z.literal(true).optional(),
    unitId: z.literal(true).optional(),
    utilitiesId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const LeaseCountAggregateInputObjectSchema = Schema;