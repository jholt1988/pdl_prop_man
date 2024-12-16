import { z } from 'zod';
import { LeaseCreateManyUnitInputObjectSchema } from './LeaseCreateManyUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateManyUnitInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => LeaseCreateManyUnitInputObjectSchema),
      z.lazy(() => LeaseCreateManyUnitInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LeaseCreateManyUnitInputEnvelopeObjectSchema = Schema;
