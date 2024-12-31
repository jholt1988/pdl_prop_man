import { z } from 'zod';
import { RepairRequestCreateNestedManyWithoutPropertyInputObjectSchema } from './RepairRequestCreateNestedManyWithoutPropertyInput.schema';
import { UnitCreateNestedManyWithoutPropertyInputObjectSchema } from './UnitCreateNestedManyWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyCreateWithoutLeaseInput> = z
  .object({
    name: z.string(),
    address: z.string(),
    numUnits: z.number(),
    RepairRequest: z
      .lazy(() => RepairRequestCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
    units: z
      .lazy(() => UnitCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyCreateWithoutLeaseInputObjectSchema = Schema;
