import { z } from 'zod';
import { RepairRequestCreateManyVendorInputObjectSchema } from './RepairRequestCreateManyVendorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestCreateManyVendorInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RepairRequestCreateManyVendorInputObjectSchema),
      z.lazy(() => RepairRequestCreateManyVendorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RepairRequestCreateManyVendorInputEnvelopeObjectSchema = Schema;
