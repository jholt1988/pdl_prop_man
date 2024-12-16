import { z } from 'zod';
import { UnitCreateNestedManyWithoutPropertyInputObjectSchema } from './UnitCreateNestedManyWithoutPropertyInput.schema';
import { LeaseCreateNestedManyWithoutPropertyInputObjectSchema } from './LeaseCreateNestedManyWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyCreateWithoutRepairRequestInput> = z
  .object({
    name: z.string(),
    address: z.string(),
    numUnits: z.number(),
    units: z
      .lazy(() => UnitCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
    Lease: z
      .lazy(() => LeaseCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyCreateWithoutRepairRequestInputObjectSchema = Schema;
