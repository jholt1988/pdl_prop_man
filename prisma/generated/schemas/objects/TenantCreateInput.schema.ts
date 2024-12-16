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
    leases: z
      .lazy(() => LeaseCreateNestedManyWithoutTenantInputObjectSchema)
      .optional(),
    Transaction: z
      .lazy(() => TransactionCreateNestedManyWithoutTenantInputObjectSchema)
      .optional(),
  })
  .strict();

export const TenantCreateInputObjectSchema = Schema;
