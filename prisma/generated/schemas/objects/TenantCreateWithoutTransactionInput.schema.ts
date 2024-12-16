import { z } from 'zod';
import { LeaseCreateNestedManyWithoutTenantInputObjectSchema } from './LeaseCreateNestedManyWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateWithoutTransactionInput> = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string(),
    ssn: z.string(),
    leases: z
      .lazy(() => LeaseCreateNestedManyWithoutTenantInputObjectSchema)
      .optional(),
  })
  .strict();

export const TenantCreateWithoutTransactionInputObjectSchema = Schema;
