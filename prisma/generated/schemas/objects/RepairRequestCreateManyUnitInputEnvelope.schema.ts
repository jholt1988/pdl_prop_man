import { z } from 'zod';
import { RepairRequestCreateManyUnitInputObjectSchema } from './RepairRequestCreateManyUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestCreateManyUnitInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RepairRequestCreateManyUnitInputObjectSchema),
      z.lazy(() => RepairRequestCreateManyUnitInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RepairRequestCreateManyUnitInputEnvelopeObjectSchema = Schema;
