import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { PropertyRelationFilterObjectSchema } from './PropertyRelationFilter.schema';
import { PropertyWhereInputObjectSchema } from './PropertyWhereInput.schema';
import { UnitRelationFilterObjectSchema } from './UnitRelationFilter.schema';
import { UnitWhereInputObjectSchema } from './UnitWhereInput.schema';
import { VendorRelationFilterObjectSchema } from './VendorRelationFilter.schema';
import { VendorWhereInputObjectSchema } from './VendorWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RepairRequestWhereInputObjectSchema),
        z.lazy(() => RepairRequestWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RepairRequestWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RepairRequestWhereInputObjectSchema),
        z.lazy(() => RepairRequestWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    phone: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    issue: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    propertyId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    unitId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    vendorId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    property: z
      .union([
        z.lazy(() => PropertyRelationFilterObjectSchema),
        z.lazy(() => PropertyWhereInputObjectSchema),
      ])
      .optional(),
    unit: z
      .union([
        z.lazy(() => UnitRelationFilterObjectSchema),
        z.lazy(() => UnitWhereInputObjectSchema),
      ])
      .optional(),
    vendor: z
      .union([
        z.lazy(() => VendorRelationFilterObjectSchema),
        z.lazy(() => VendorWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const RepairRequestWhereInputObjectSchema = Schema;
