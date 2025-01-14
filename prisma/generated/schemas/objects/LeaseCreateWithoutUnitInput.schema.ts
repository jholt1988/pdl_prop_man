import { z } from 'zod';
import { PropertyCreateNestedOneWithoutLeaseInputObjectSchema } from './PropertyCreateNestedOneWithoutLeaseInput.schema';
import { TenantCreateNestedOneWithoutLeasesInputObjectSchema } from './TenantCreateNestedOneWithoutLeasesInput.schema';
import { UtilitiesCreateNestedOneWithoutLeaseInputObjectSchema } from './UtilitiesCreateNestedOneWithoutLeaseInput.schema';
import { TransactionCreateNestedManyWithoutLeaseInputObjectSchema } from './TransactionCreateNestedManyWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateWithoutUnitInput> = z
  .object({
    termOfLease: z.string(),
    beginDate: z.coerce.date(),
    endDate: z.coerce.date(),
    monthlyRent: z.number(),
    deposit: z.number(),
    petDeposit: z.number(),
    utilitiesId: z.number().optional().nullable(),
    property: z.lazy(
      () => PropertyCreateNestedOneWithoutLeaseInputObjectSchema,
    ),
    tenant: z.lazy(() => TenantCreateNestedOneWithoutLeasesInputObjectSchema),
    utilities: z
      .lazy(() => UtilitiesCreateNestedOneWithoutLeaseInputObjectSchema)
      .optional(),
    Transaction: z
      .lazy(() => TransactionCreateNestedManyWithoutLeaseInputObjectSchema)
      .optional(),
  })
  .strict();

export const LeaseCreateWithoutUnitInputObjectSchema = Schema;
