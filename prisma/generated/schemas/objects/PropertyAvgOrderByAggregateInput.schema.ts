import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    numUnits: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PropertyAvgOrderByAggregateInputObjectSchema = Schema;
