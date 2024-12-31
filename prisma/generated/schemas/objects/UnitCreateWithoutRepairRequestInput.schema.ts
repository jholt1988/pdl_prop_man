import { z } from 'zod';
import { LeaseCreateNestedManyWithoutUnitInputObjectSchema } from './LeaseCreateNestedManyWithoutUnitInput.schema';
import { PropertyCreateNestedOneWithoutUnitsInputObjectSchema } from './PropertyCreateNestedOneWithoutUnitsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateWithoutRepairRequestInput> = z
  .object({
    unitNumber: z.number(),
    sqft: z.string(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    propertyStatus: z.string(),
    leases: z
      .lazy(() => LeaseCreateNestedManyWithoutUnitInputObjectSchema)
      .optional(),
    property: z.lazy(
      () => PropertyCreateNestedOneWithoutUnitsInputObjectSchema,
    ),
  })
  .strict();

export const UnitCreateWithoutRepairRequestInputObjectSchema = Schema;
