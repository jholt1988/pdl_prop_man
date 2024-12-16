import { z } from 'zod';
import { RepairRequestUncheckedCreateNestedManyWithoutUnitInputObjectSchema } from './RepairRequestUncheckedCreateNestedManyWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUncheckedCreateWithoutLeasesInput> = z
  .object({
    id: z.number().optional(),
    unitNumber: z.number(),
    sqft: z.string(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    propertyStatus: z.string(),
    propertyId: z.number(),
    RepairRequest: z
      .lazy(
        () =>
          RepairRequestUncheckedCreateNestedManyWithoutUnitInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UnitUncheckedCreateWithoutLeasesInputObjectSchema = Schema;
