import { z } from 'zod';
import { LeaseUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from './LeaseUncheckedCreateNestedManyWithoutPropertyInput.schema';
import { RepairRequestUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from './RepairRequestUncheckedCreateNestedManyWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUncheckedCreateWithoutUnitsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    address: z.string(),
    numUnits: z.number(),
    Lease: z
      .lazy(
        () => LeaseUncheckedCreateNestedManyWithoutPropertyInputObjectSchema,
      )
      .optional(),
    RepairRequest: z
      .lazy(
        () =>
          RepairRequestUncheckedCreateNestedManyWithoutPropertyInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PropertyUncheckedCreateWithoutUnitsInputObjectSchema = Schema;
