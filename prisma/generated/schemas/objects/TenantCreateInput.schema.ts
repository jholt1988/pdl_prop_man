import { z } from 'zod';
import { LeaseCreateNestedManyWithoutTenantInputObjectSchema } from './LeaseCreateNestedManyWithoutTenantInput.schema';
import { TransactionCreateNestedManyWithoutTenantInputObjectSchema } from './TransactionCreateNestedManyWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateInput> = z
  .object({
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
      .lazy(() => LeaseCreateNestedManyWithoutTenantInputObjectSchema)
      .optional(),
    Transaction: z
      .lazy(() => TransactionCreateNestedManyWithoutTenantInputObjectSchema)
      .optional(),
  })
  .strict();

export const TenantCreateInputObjectSchema = Schema;
