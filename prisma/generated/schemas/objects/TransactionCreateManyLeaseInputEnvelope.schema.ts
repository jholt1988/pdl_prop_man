import { z } from 'zod';
import { TransactionCreateManyLeaseInputObjectSchema } from './TransactionCreateManyLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateManyLeaseInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TransactionCreateManyLeaseInputObjectSchema),
      z.lazy(() => TransactionCreateManyLeaseInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TransactionCreateManyLeaseInputEnvelopeObjectSchema = Schema;
