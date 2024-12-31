import { z } from 'zod';
import { TransactionUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './TransactionUncheckedCreateNestedManyWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUncheckedCreateWithoutLeasesInput> = z
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
    Transaction: z
      .lazy(
        () =>
          TransactionUncheckedCreateNestedManyWithoutTenantInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TenantUncheckedCreateWithoutLeasesInputObjectSchema = Schema;
