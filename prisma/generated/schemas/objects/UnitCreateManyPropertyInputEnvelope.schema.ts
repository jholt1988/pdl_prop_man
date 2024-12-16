import { z } from 'zod';
import { UnitCreateManyPropertyInputObjectSchema } from './UnitCreateManyPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateManyPropertyInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => UnitCreateManyPropertyInputObjectSchema),
      z.lazy(() => UnitCreateManyPropertyInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UnitCreateManyPropertyInputEnvelopeObjectSchema = Schema;
