import { z } from 'zod';
import { TransactionIncludeObjectSchema } from './TransactionInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionArgs> = z
  .object({
    include: z.lazy(() => TransactionIncludeObjectSchema).optional(),
  })
  .strict();

export const TransactionArgsObjectSchema = Schema;
