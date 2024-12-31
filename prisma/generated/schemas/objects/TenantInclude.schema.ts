import { z } from 'zod';
import { LeaseFindManySchema } from '../findManyLease.schema';
import { TransactionFindManySchema } from '../findManyTransaction.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantInclude> = z
  .object({
    leases: z
      .union([z.boolean(), z.lazy(() => LeaseFindManySchema)])
      .optional(),
    Transaction: z
      .union([z.boolean(), z.lazy(() => TransactionFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const TenantIncludeObjectSchema = Schema;
