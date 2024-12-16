import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    leaseId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UtilitiesSumOrderByAggregateInputObjectSchema = Schema;
