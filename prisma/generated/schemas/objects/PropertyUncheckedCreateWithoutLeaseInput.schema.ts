import { z } from 'zod';
import { RepairRequestUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from './RepairRequestUncheckedCreateNestedManyWithoutPropertyInput.schema';
import { UnitUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from './UnitUncheckedCreateNestedManyWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUncheckedCreateWithoutLeaseInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    address: z.string(),
    numUnits: z.number(),
    RepairRequest: z
      .lazy(
        () =>
          RepairRequestUncheckedCreateNestedManyWithoutPropertyInputObjectSchema,
      )
      .optional(),
    units: z
      .lazy(() => UnitUncheckedCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyUncheckedCreateWithoutLeaseInputObjectSchema = Schema;
