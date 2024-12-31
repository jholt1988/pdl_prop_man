import { z } from 'zod';
import { LeaseCreateNestedManyWithoutPropertyInputObjectSchema } from './LeaseCreateNestedManyWithoutPropertyInput.schema';
import { RepairRequestCreateNestedManyWithoutPropertyInputObjectSchema } from './RepairRequestCreateNestedManyWithoutPropertyInput.schema';
import { UnitCreateNestedManyWithoutPropertyInputObjectSchema } from './UnitCreateNestedManyWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyCreateInput> = z
  .object({
    name: z.string(),
    address: z.string(),
    numUnits: z.number(),
    Lease: z
      .lazy(() => LeaseCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
    RepairRequest: z
      .lazy(() => RepairRequestCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
    units: z
      .lazy(() => UnitCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyCreateInputObjectSchema = Schema;
