import { z } from 'zod';
import { RepairRequestIncludeObjectSchema } from './RepairRequestInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestArgs> = z
  .object({
    include: z.lazy(() => RepairRequestIncludeObjectSchema).optional(),
  })
  .strict();

export const RepairRequestArgsObjectSchema = Schema;
