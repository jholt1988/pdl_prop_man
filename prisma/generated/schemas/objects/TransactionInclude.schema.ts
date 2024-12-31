import { z } from 'zod';
import { LeaseArgsObjectSchema } from './LeaseArgs.schema';
import { TenantArgsObjectSchema } from './TenantArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionInclude> = z
  .object({
    lease: z
      .union([z.boolean(), z.lazy(() => LeaseArgsObjectSchema)])
      .optional(),
    tenant: z
      .union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const TransactionIncludeObjectSchema = Schema;
