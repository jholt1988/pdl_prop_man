import { z } from 'zod';
import { TransactionCreateManyTenantInputObjectSchema } from './TransactionCreateManyTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateManyTenantInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TransactionCreateManyTenantInputObjectSchema),
      z.lazy(() => TransactionCreateManyTenantInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TransactionCreateManyTenantInputEnvelopeObjectSchema = Schema;
