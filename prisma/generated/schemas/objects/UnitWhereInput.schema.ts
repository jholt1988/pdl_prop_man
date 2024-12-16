import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { PropertyRelationFilterObjectSchema } from './PropertyRelationFilter.schema';
import { PropertyWhereInputObjectSchema } from './PropertyWhereInput.schema';
import { LeaseListRelationFilterObjectSchema } from './LeaseListRelationFilter.schema';
import { RepairRequestListRelationFilterObjectSchema } from './RepairRequestListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UnitWhereInputObjectSchema),
        z.lazy(() => UnitWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UnitWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UnitWhereInputObjectSchema),
        z.lazy(() => UnitWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    unitNumber: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    sqft: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    bedrooms: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    bathrooms: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    propertyStatus: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    propertyId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    property: z
      .union([
        z.lazy(() => PropertyRelationFilterObjectSchema),
        z.lazy(() => PropertyWhereInputObjectSchema),
      ])
      .optional(),
    leases: z.lazy(() => LeaseListRelationFilterObjectSchema).optional(),
    RepairRequest: z
      .lazy(() => RepairRequestListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const UnitWhereInputObjectSchema = Schema;
