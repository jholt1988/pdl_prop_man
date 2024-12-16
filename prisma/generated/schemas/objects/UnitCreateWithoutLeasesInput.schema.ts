import { z } from 'zod';
import { PropertyCreateNestedOneWithoutUnitsInputObjectSchema } from './PropertyCreateNestedOneWithoutUnitsInput.schema';
import { RepairRequestCreateNestedManyWithoutUnitInputObjectSchema } from './RepairRequestCreateNestedManyWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateWithoutLeasesInput> = z
  .object({
    unitNumber: z.number(),
    sqft: z.string(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    propertyStatus: z.string(),
    property: z.lazy(
      () => PropertyCreateNestedOneWithoutUnitsInputObjectSchema,
    ),
    RepairRequest: z
      .lazy(() => RepairRequestCreateNestedManyWithoutUnitInputObjectSchema)
      .optional(),
  })
  .strict();

export const UnitCreateWithoutLeasesInputObjectSchema = Schema;
