import { z } from 'zod';
import { TransactionCreateNestedManyWithoutTenantInputObjectSchema } from './TransactionCreateNestedManyWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateWithoutLeasesInput> = z
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
    Transaction: z
      .lazy(() => TransactionCreateNestedManyWithoutTenantInputObjectSchema)
      .optional(),
  })
  .strict();

export const TenantCreateWithoutLeasesInputObjectSchema = Schema;
