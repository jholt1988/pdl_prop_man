import { z } from 'zod';
import { PropertyCreateNestedOneWithoutLeaseInputObjectSchema } from './PropertyCreateNestedOneWithoutLeaseInput.schema';
import { TenantCreateNestedOneWithoutLeasesInputObjectSchema } from './TenantCreateNestedOneWithoutLeasesInput.schema';
import { UnitCreateNestedOneWithoutLeasesInputObjectSchema } from './UnitCreateNestedOneWithoutLeasesInput.schema';
import { TransactionCreateNestedManyWithoutLeaseInputObjectSchema } from './TransactionCreateNestedManyWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateWithoutUtilitiesInput> = z
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
    unit: z.lazy(() => UnitCreateNestedOneWithoutLeasesInputObjectSchema),
    Transaction: z
      .lazy(() => TransactionCreateNestedManyWithoutLeaseInputObjectSchema)
      .optional(),
  })
  .strict();

export const LeaseCreateWithoutUtilitiesInputObjectSchema = Schema;
