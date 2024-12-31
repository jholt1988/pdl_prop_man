import { z } from 'zod';
import { LeaseCreateNestedManyWithoutUnitInputObjectSchema } from './LeaseCreateNestedManyWithoutUnitInput.schema';
import { RepairRequestCreateNestedManyWithoutUnitInputObjectSchema } from './RepairRequestCreateNestedManyWithoutUnitInput.schema';
import { PropertyCreateNestedOneWithoutUnitsInputObjectSchema } from './PropertyCreateNestedOneWithoutUnitsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateInput> = z
  .object({
    unitNumber: z.number(),
    sqft: z.string(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    propertyStatus: z.string(),
    leases: z
      .lazy(() => LeaseCreateNestedManyWithoutUnitInputObjectSchema)
      .optional(),
    RepairRequest: z
      .lazy(() => RepairRequestCreateNestedManyWithoutUnitInputObjectSchema)
      .optional(),
    property: z.lazy(
      () => PropertyCreateNestedOneWithoutUnitsInputObjectSchema,
    ),
  })
  .strict();

export const UnitCreateInputObjectSchema = Schema;
