import { z } from 'zod';
import { UtilitiesUncheckedCreateNestedOneWithoutLeaseInputObjectSchema } from './UtilitiesUncheckedCreateNestedOneWithoutLeaseInput.schema';
import { TransactionUncheckedCreateNestedManyWithoutLeaseInputObjectSchema } from './TransactionUncheckedCreateNestedManyWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUncheckedCreateInput> = z
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
    unitId: z.number(),
    utilitiesId: z.number().optional().nullable(),
    utilities: z
      .lazy(
        () => UtilitiesUncheckedCreateNestedOneWithoutLeaseInputObjectSchema,
      )
      .optional(),
    Transaction: z
      .lazy(
        () => TransactionUncheckedCreateNestedManyWithoutLeaseInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const LeaseUncheckedCreateInputObjectSchema = Schema;
