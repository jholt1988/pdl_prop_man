import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    firstName: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    email: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    ssn: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const TenantCountAggregateInputObjectSchema = Schema;
