import { z } from 'zod';
import { LeaseUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from './LeaseUncheckedCreateNestedManyWithoutPropertyInput.schema';
import { UnitUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from './UnitUncheckedCreateNestedManyWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUncheckedCreateWithoutRepairRequestInput> =
  z
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
      units: z
        .lazy(
          () => UnitUncheckedCreateNestedManyWithoutPropertyInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PropertyUncheckedCreateWithoutRepairRequestInputObjectSchema =
  Schema;
