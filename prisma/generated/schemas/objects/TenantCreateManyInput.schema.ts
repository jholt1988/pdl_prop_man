import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateManyInput> = z
  .object({
    id: z.number().optional(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string(),
    ssn: z.string(),
  })
  .strict();

export const TenantCreateManyInputObjectSchema = Schema;
