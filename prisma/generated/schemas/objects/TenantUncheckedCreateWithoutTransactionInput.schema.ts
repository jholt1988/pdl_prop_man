import { z } from 'zod';
import { LeaseUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './LeaseUncheckedCreateNestedManyWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUncheckedCreateWithoutTransactionInput> = z
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
  })
  .strict();

export const TenantUncheckedCreateWithoutTransactionInputObjectSchema = Schema;
