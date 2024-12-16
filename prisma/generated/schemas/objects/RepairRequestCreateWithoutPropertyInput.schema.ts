import { z } from 'zod';
import { UnitCreateNestedOneWithoutRepairRequestInputObjectSchema } from './UnitCreateNestedOneWithoutRepairRequestInput.schema';
import { VendorCreateNestedOneWithoutRepairRequestsInputObjectSchema } from './VendorCreateNestedOneWithoutRepairRequestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestCreateWithoutPropertyInput> = z
  .object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    issue: z.string(),
    image: z.string().optional().nullable(),
    status: z.string(),
    unit: z.lazy(
      () => UnitCreateNestedOneWithoutRepairRequestInputObjectSchema,
    ),
    vendor: z.lazy(
      () => VendorCreateNestedOneWithoutRepairRequestsInputObjectSchema,
    ),
  })
  .strict();

export const RepairRequestCreateWithoutPropertyInputObjectSchema = Schema;
