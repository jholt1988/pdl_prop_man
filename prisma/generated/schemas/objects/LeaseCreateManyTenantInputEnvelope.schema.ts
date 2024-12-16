import { z } from 'zod';
import { LeaseCreateManyTenantInputObjectSchema } from './LeaseCreateManyTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateManyTenantInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => LeaseCreateManyTenantInputObjectSchema),
      z.lazy(() => LeaseCreateManyTenantInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LeaseCreateManyTenantInputEnvelopeObjectSchema = Schema;
