import { z } from 'zod';
import { PropertyArgsObjectSchema } from './PropertyArgs.schema';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { UnitArgsObjectSchema } from './UnitArgs.schema';
import { UtilitiesArgsObjectSchema } from './UtilitiesArgs.schema';
import { TransactionFindManySchema } from '../findManyTransaction.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseInclude> = z
  .object({
    property: z
      .union([z.boolean(), z.lazy(() => PropertyArgsObjectSchema)])
      .optional(),
    tenant: z
      .union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)])
      .optional(),
    unit: z.union([z.boolean(), z.lazy(() => UnitArgsObjectSchema)]).optional(),
    utilities: z
      .union([z.boolean(), z.lazy(() => UtilitiesArgsObjectSchema)])
      .optional(),
    Transaction: z
      .union([z.boolean(), z.lazy(() => TransactionFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const LeaseIncludeObjectSchema = Schema;
