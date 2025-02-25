import { z } from 'zod';
import { PropertyCreateNestedOneWithoutRepairRequestInputObjectSchema } from './PropertyCreateNestedOneWithoutRepairRequestInput.schema';
import { UnitCreateNestedOneWithoutRepairRequestInputObjectSchema } from './UnitCreateNestedOneWithoutRepairRequestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestCreateWithoutVendorInput> = z
  .object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    issue: z.string(),
    image: z.string().optional().nullable(),
    status: z.string(),
    property: z.lazy(
      () => PropertyCreateNestedOneWithoutRepairRequestInputObjectSchema,
    ),
    unit: z.lazy(
      () => UnitCreateNestedOneWithoutRepairRequestInputObjectSchema,
    ),
  })
  .strict();

export const RepairRequestCreateWithoutVendorInputObjectSchema = Schema;
