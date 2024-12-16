import { z } from 'zod';
import { LeaseUncheckedCreateNestedManyWithoutUnitInputObjectSchema } from './LeaseUncheckedCreateNestedManyWithoutUnitInput.schema';
import { RepairRequestUncheckedCreateNestedManyWithoutUnitInputObjectSchema } from './RepairRequestUncheckedCreateNestedManyWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    unitNumber: z.number(),
    sqft: z.string(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    propertyStatus: z.string(),
    propertyId: z.number(),
    leases: z
      .lazy(() => LeaseUncheckedCreateNestedManyWithoutUnitInputObjectSchema)
      .optional(),
    RepairRequest: z
      .lazy(
        () =>
          RepairRequestUncheckedCreateNestedManyWithoutUnitInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UnitUncheckedCreateInputObjectSchema = Schema;
