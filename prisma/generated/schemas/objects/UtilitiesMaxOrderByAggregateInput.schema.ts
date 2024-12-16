import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    electric: z.lazy(() => SortOrderSchema).optional(),
    gas: z.lazy(() => SortOrderSchema).optional(),
    water: z.lazy(() => SortOrderSchema).optional(),
    leaseId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UtilitiesMaxOrderByAggregateInputObjectSchema = Schema;
