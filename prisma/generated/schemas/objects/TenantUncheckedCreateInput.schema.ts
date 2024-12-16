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
