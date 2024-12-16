import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UnitScalarWhereInputObjectSchema),
        z.lazy(() => UnitScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UnitScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UnitScalarWhereInputObjectSchema),
        z.lazy(() => UnitScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const UnitScalarWhereInputObjectSchema = Schema;
