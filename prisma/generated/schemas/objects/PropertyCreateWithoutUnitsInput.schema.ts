import { z } from 'zod';
import { LeaseCreateNestedManyWithoutPropertyInputObjectSchema } from './LeaseCreateNestedManyWithoutPropertyInput.schema';
import { RepairRequestCreateNestedManyWithoutPropertyInputObjectSchema } from './RepairRequestCreateNestedManyWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyCreateWithoutUnitsInput> = z
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
  })
  .strict();

export const PropertyCreateWithoutUnitsInputObjectSchema = Schema;
