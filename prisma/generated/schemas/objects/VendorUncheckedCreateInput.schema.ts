import { z } from 'zod';
import { RepairRequestUncheckedCreateNestedManyWithoutVendorInputObjectSchema } from './RepairRequestUncheckedCreateNestedManyWithoutVendorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VendorUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string(),
    repairRequests: z
      .lazy(
        () =>
          RepairRequestUncheckedCreateNestedManyWithoutVendorInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const VendorUncheckedCreateInputObjectSchema = Schema;
