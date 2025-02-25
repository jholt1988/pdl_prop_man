import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { LeaseListRelationFilterObjectSchema } from './LeaseListRelationFilter.schema';
import { TransactionListRelationFilterObjectSchema } from './TransactionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TenantWhereInputObjectSchema),
        z.lazy(() => TenantWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TenantWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TenantWhereInputObjectSchema),
        z.lazy(() => TenantWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    firstName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    phone: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    ssn: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    DOB: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    driversLicense: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emergencyContact: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emergencyContactPhone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    leases: z.lazy(() => LeaseListRelationFilterObjectSchema).optional(),
    Transaction: z
      .lazy(() => TransactionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const TenantWhereInputObjectSchema = Schema;
