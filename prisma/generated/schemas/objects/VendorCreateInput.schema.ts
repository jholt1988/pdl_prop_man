import { z } from 'zod';
import { RepairRequestCreateNestedManyWithoutVendorInputObjectSchema } from './RepairRequestCreateNestedManyWithoutVendorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VendorCreateInput> = z
  .object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string(),
    repairRequests: z
      .lazy(() => RepairRequestCreateNestedManyWithoutVendorInputObjectSchema)
      .optional(),
  })
  .strict();

export const VendorCreateInputObjectSchema = Schema;
