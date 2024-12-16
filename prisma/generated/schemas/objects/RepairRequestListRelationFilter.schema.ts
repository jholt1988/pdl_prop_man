import { z } from 'zod';
import { RepairRequestWhereInputObjectSchema } from './RepairRequestWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestListRelationFilter> = z
  .object({
    every: z.lazy(() => RepairRequestWhereInputObjectSchema).optional(),
    some: z.lazy(() => RepairRequestWhereInputObjectSchema).optional(),
    none: z.lazy(() => RepairRequestWhereInputObjectSchema).optional(),
  })
  .strict();

export const RepairRequestListRelationFilterObjectSchema = Schema;
