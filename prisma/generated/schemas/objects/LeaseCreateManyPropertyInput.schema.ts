import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateManyPropertyInput> = z
  .object({
    id: z.number().optional(),
    termOfLease: z.string(),
    beginDate: z.coerce.date(),
    endDate: z.coerce.date(),
    monthlyRent: z.number(),
    deposit: z.number(),
    petDeposit: z.number(),
    tenantId: z.number(),
    unitId: z.number(),
    utilitiesId: z.number(),
  })
  .strict();

export const LeaseCreateManyPropertyInputObjectSchema = Schema;
