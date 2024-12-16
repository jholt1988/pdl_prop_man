import { z } from 'zod';
import { TenantCreateNestedOneWithoutLeasesInputObjectSchema } from './TenantCreateNestedOneWithoutLeasesInput.schema';
import { PropertyCreateNestedOneWithoutLeaseInputObjectSchema } from './PropertyCreateNestedOneWithoutLeaseInput.schema';
import { UnitCreateNestedOneWithoutLeasesInputObjectSchema } from './UnitCreateNestedOneWithoutLeasesInput.schema';
import { UtilitiesCreateNestedOneWithoutLeaseInputObjectSchema } from './UtilitiesCreateNestedOneWithoutLeaseInput.schema';
import { TransactionCreateNestedManyWithoutLeaseInputObjectSchema } from './TransactionCreateNestedManyWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateInput> = z
  .object({
    termOfLease: z.string(),
    beginDate: z.coerce.date(),
    endDate: z.coerce.date(),
    monthlyRent: z.number(),
    deposit: z.number(),
    petDeposit: z.number(),
    tenant: z.lazy(() => TenantCreateNestedOneWithoutLeasesInputObjectSchema),
    property: z.lazy(
      () => PropertyCreateNestedOneWithoutLeaseInputObjectSchema,
    ),
    unit: z.lazy(() => UnitCreateNestedOneWithoutLeasesInputObjectSchema),
    utilities: z.lazy(
      () => UtilitiesCreateNestedOneWithoutLeaseInputObjectSchema,
    ),
    Transaction: z
      .lazy(() => TransactionCreateNestedManyWithoutLeaseInputObjectSchema)
      .optional(),
  })
  .strict();

export const LeaseCreateInputObjectSchema = Schema;
