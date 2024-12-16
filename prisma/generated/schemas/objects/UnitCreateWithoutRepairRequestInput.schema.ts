import { z } from 'zod';
import { PropertyCreateNestedOneWithoutUnitsInputObjectSchema } from './PropertyCreateNestedOneWithoutUnitsInput.schema';
import { LeaseCreateNestedManyWithoutUnitInputObjectSchema } from './LeaseCreateNestedManyWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateWithoutRepairRequestInput> = z
  .object({
    unitNumber: z.number(),
    sqft: z.string(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    propertyStatus: z.string(),
    property: z.lazy(
      () => PropertyCreateNestedOneWithoutUnitsInputObjectSchema,
    ),
    leases: z
      .lazy(() => LeaseCreateNestedManyWithoutUnitInputObjectSchema)
      .optional(),
  })
  .strict();

export const UnitCreateWithoutRepairRequestInputObjectSchema = Schema;
