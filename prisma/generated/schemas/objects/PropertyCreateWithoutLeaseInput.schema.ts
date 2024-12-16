import { z } from 'zod';
import { UnitCreateNestedManyWithoutPropertyInputObjectSchema } from './UnitCreateNestedManyWithoutPropertyInput.schema';
import { RepairRequestCreateNestedManyWithoutPropertyInputObjectSchema } from './RepairRequestCreateNestedManyWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyCreateWithoutLeaseInput> = z
  .object({
    name: z.string(),
    address: z.string(),
    numUnits: z.number(),
    units: z
      .lazy(() => UnitCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
    RepairRequest: z
      .lazy(() => RepairRequestCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyCreateWithoutLeaseInputObjectSchema = Schema;
