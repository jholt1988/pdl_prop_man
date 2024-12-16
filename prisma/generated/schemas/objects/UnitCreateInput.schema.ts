import { z } from 'zod';
import { PropertyCreateNestedOneWithoutUnitsInputObjectSchema } from './PropertyCreateNestedOneWithoutUnitsInput.schema';
import { LeaseCreateNestedManyWithoutUnitInputObjectSchema } from './LeaseCreateNestedManyWithoutUnitInput.schema';
import { RepairRequestCreateNestedManyWithoutUnitInputObjectSchema } from './RepairRequestCreateNestedManyWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateInput> = z
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
    RepairRequest: z
      .lazy(() => RepairRequestCreateNestedManyWithoutUnitInputObjectSchema)
      .optional(),
  })
  .strict();

export const UnitCreateInputObjectSchema = Schema;