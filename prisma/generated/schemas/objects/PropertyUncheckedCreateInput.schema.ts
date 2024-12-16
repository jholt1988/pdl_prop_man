import { z } from 'zod';
import { UnitUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from './UnitUncheckedCreateNestedManyWithoutPropertyInput.schema';
import { LeaseUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from './LeaseUncheckedCreateNestedManyWithoutPropertyInput.schema';
import { RepairRequestUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from './RepairRequestUncheckedCreateNestedManyWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    address: z.string(),
    numUnits: z.number(),
    units: z
      .lazy(() => UnitUncheckedCreateNestedManyWithoutPropertyInputObjectSchema)
      .optional(),
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

export const PropertyUncheckedCreateInputObjectSchema = Schema;