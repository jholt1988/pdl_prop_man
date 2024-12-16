import { z } from 'zod';
import { LeaseCreateManyPropertyInputObjectSchema } from './LeaseCreateManyPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateManyPropertyInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => LeaseCreateManyPropertyInputObjectSchema),
      z.lazy(() => LeaseCreateManyPropertyInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LeaseCreateManyPropertyInputEnvelopeObjectSchema = Schema;
