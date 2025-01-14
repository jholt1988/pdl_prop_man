import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LeaseScalarWhereInputObjectSchema),
        z.lazy(() => LeaseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LeaseScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LeaseScalarWhereInputObjectSchema),
        z.lazy(() => LeaseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    termOfLease: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    beginDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    endDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    monthlyRent: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    deposit: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    petDeposit: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    tenantId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    propertyId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    unitId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    utilitiesId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const LeaseScalarWhereInputObjectSchema = Schema;
