import { z } from 'zod';
import { RepairRequestCreateManyPropertyInputObjectSchema } from './RepairRequestCreateManyPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestCreateManyPropertyInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RepairRequestCreateManyPropertyInputObjectSchema),
      z.lazy(() => RepairRequestCreateManyPropertyInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RepairRequestCreateManyPropertyInputEnvelopeObjectSchema = Schema;
