import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUncheckedCreateWithoutVendorInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      email: z.string(),
      phone: z.string(),
      issue: z.string(),
      image: z.string().optional().nullable(),
      propertyId: z.number(),
      unitId: z.number(),
      status: z.string(),
    })
    .strict();

export const RepairRequestUncheckedCreateWithoutVendorInputObjectSchema =
  Schema;
