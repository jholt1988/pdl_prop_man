import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VendorCountOrderByAggregateInputObjectSchema } from './VendorCountOrderByAggregateInput.schema';
import { VendorAvgOrderByAggregateInputObjectSchema } from './VendorAvgOrderByAggregateInput.schema';
import { VendorMaxOrderByAggregateInputObjectSchema } from './VendorMaxOrderByAggregateInput.schema';
import { VendorMinOrderByAggregateInputObjectSchema } from './VendorMinOrderByAggregateInput.schema';
import { VendorSumOrderByAggregateInputObjectSchema } from './VendorSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VendorOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => VendorCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => VendorAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VendorMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VendorMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => VendorSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const VendorOrderByWithAggregationInputObjectSchema = Schema;
