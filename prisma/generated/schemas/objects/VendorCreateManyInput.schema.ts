import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VendorCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string(),
  })
  .strict();

export const VendorCreateManyInputObjectSchema = Schema;
