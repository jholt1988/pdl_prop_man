import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RepairRequestCountOrderByAggregateInputObjectSchema } from './RepairRequestCountOrderByAggregateInput.schema';
import { RepairRequestAvgOrderByAggregateInputObjectSchema } from './RepairRequestAvgOrderByAggregateInput.schema';
import { RepairRequestMaxOrderByAggregateInputObjectSchema } from './RepairRequestMaxOrderByAggregateInput.schema';
import { RepairRequestMinOrderByAggregateInputObjectSchema } from './RepairRequestMinOrderByAggregateInput.schema';
import { RepairRequestSumOrderByAggregateInputObjectSchema } from './RepairRequestSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    issue: z.lazy(() => SortOrderSchema).optional(),
    image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
    unitId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    vendorId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RepairRequestCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => RepairRequestAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RepairRequestMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RepairRequestMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => RepairRequestSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RepairRequestOrderByWithAggregationInputObjectSchema = Schema;
