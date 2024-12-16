import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UtilitiesCountOrderByAggregateInputObjectSchema } from './UtilitiesCountOrderByAggregateInput.schema';
import { UtilitiesAvgOrderByAggregateInputObjectSchema } from './UtilitiesAvgOrderByAggregateInput.schema';
import { UtilitiesMaxOrderByAggregateInputObjectSchema } from './UtilitiesMaxOrderByAggregateInput.schema';
import { UtilitiesMinOrderByAggregateInputObjectSchema } from './UtilitiesMinOrderByAggregateInput.schema';
import { UtilitiesSumOrderByAggregateInputObjectSchema } from './UtilitiesSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    electric: z.lazy(() => SortOrderSchema).optional(),
    gas: z.lazy(() => SortOrderSchema).optional(),
    water: z.lazy(() => SortOrderSchema).optional(),
    leaseId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => UtilitiesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => UtilitiesAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => UtilitiesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => UtilitiesMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => UtilitiesSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UtilitiesOrderByWithAggregationInputObjectSchema = Schema;
