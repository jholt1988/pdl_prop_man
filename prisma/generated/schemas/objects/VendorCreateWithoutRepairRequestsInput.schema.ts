import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VendorCreateWithoutRepairRequestsInput> = z
  .object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string(),
  })
  .strict();

export const VendorCreateWithoutRepairRequestsInputObjectSchema = Schema;
