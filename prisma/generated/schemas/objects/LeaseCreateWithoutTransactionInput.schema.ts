import { z } from 'zod';
import { PropertyCreateNestedOneWithoutLeaseInputObjectSchema } from './PropertyCreateNestedOneWithoutLeaseInput.schema';
import { TenantCreateNestedOneWithoutLeasesInputObjectSchema } from './TenantCreateNestedOneWithoutLeasesInput.schema';
import { UnitCreateNestedOneWithoutLeasesInputObjectSchema } from './UnitCreateNestedOneWithoutLeasesInput.schema';
import { UtilitiesCreateNestedOneWithoutLeaseInputObjectSchema } from './UtilitiesCreateNestedOneWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateWithoutTransactionInput> = z
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
    utilities: z
      .lazy(() => UtilitiesCreateNestedOneWithoutLeaseInputObjectSchema)
      .optional(),
  })
  .strict();

export const LeaseCreateWithoutTransactionInputObjectSchema = Schema;
