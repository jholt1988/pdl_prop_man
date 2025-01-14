import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { PropertyRelationFilterObjectSchema } from './PropertyRelationFilter.schema';
import { PropertyWhereInputObjectSchema } from './PropertyWhereInput.schema';
import { TenantRelationFilterObjectSchema } from './TenantRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { UnitRelationFilterObjectSchema } from './UnitRelationFilter.schema';
import { UnitWhereInputObjectSchema } from './UnitWhereInput.schema';
import { UtilitiesRelationFilterObjectSchema } from './UtilitiesRelationFilter.schema';
import { UtilitiesWhereInputObjectSchema } from './UtilitiesWhereInput.schema';
import { TransactionListRelationFilterObjectSchema } from './TransactionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LeaseWhereInputObjectSchema),
        z.lazy(() => LeaseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LeaseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LeaseWhereInputObjectSchema),
        z.lazy(() => LeaseWhereInputObjectSchema).array(),
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
    property: z
      .union([
        z.lazy(() => PropertyRelationFilterObjectSchema),
        z.lazy(() => PropertyWhereInputObjectSchema),
      ])
      .optional(),
    tenant: z
      .union([
        z.lazy(() => TenantRelationFilterObjectSchema),
        z.lazy(() => TenantWhereInputObjectSchema),
      ])
      .optional(),
    unit: z
      .union([
        z.lazy(() => UnitRelationFilterObjectSchema),
        z.lazy(() => UnitWhereInputObjectSchema),
      ])
      .optional(),
    utilities: z
      .union([
        z.lazy(() => UtilitiesRelationFilterObjectSchema),
        z.lazy(() => UtilitiesWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Transaction: z
      .lazy(() => TransactionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const LeaseWhereInputObjectSchema = Schema;
