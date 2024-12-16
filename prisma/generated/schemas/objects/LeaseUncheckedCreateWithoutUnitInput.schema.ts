import { z } from 'zod';
import { TransactionUncheckedCreateNestedManyWithoutLeaseInputObjectSchema } from './TransactionUncheckedCreateNestedManyWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUncheckedCreateWithoutUnitInput> = z
  .object({
    id: z.number().optional(),
    termOfLease: z.string(),
    beginDate: z.coerce.date(),
    endDate: z.coerce.date(),
    monthlyRent: z.number(),
    deposit: z.number(),
    petDeposit: z.number(),
    tenantId: z.number(),
    propertyId: z.number(),
    utilitiesId: z.number(),
    Transaction: z
      .lazy(
        () => TransactionUncheckedCreateNestedManyWithoutLeaseInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const LeaseUncheckedCreateWithoutUnitInputObjectSchema = Schema;