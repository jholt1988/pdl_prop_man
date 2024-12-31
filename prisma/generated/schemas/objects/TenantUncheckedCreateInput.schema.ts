import { z } from 'zod';
import { LeaseUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './LeaseUncheckedCreateNestedManyWithoutTenantInput.schema';
import { TransactionUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './TransactionUncheckedCreateNestedManyWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string(),
    ssn: z.string(),
    DOB: z.coerce.date().optional().nullable(),
    driversLicense: z.string().optional().nullable(),
    emergencyContact: z.string().optional().nullable(),
    emergencyContactPhone: z.string().optional().nullable(),
    leases: z
      .lazy(() => LeaseUncheckedCreateNestedManyWithoutTenantInputObjectSchema)
      .optional(),
    Transaction: z
      .lazy(
        () =>
          TransactionUncheckedCreateNestedManyWithoutTenantInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TenantUncheckedCreateInputObjectSchema = Schema;
