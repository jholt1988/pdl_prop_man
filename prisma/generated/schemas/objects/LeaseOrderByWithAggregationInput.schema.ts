import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LeaseCountOrderByAggregateInputObjectSchema } from './LeaseCountOrderByAggregateInput.schema';
import { LeaseAvgOrderByAggregateInputObjectSchema } from './LeaseAvgOrderByAggregateInput.schema';
import { LeaseMaxOrderByAggregateInputObjectSchema } from './LeaseMaxOrderByAggregateInput.schema';
import { LeaseMinOrderByAggregateInputObjectSchema } from './LeaseMinOrderByAggregateInput.schema';
import { LeaseSumOrderByAggregateInputObjectSchema } from './LeaseSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    termOfLease: z.lazy(() => SortOrderSchema).optional(),
    beginDate: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.lazy(() => SortOrderSchema).optional(),
    monthlyRent: z.lazy(() => SortOrderSchema).optional(),
    deposit: z.lazy(() => SortOrderSchema).optional(),
    petDeposit: z.lazy(() => SortOrderSchema).optional(),
    tenantId: z.lazy(() => SortOrderSchema).optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
    unitId: z.lazy(() => SortOrderSchema).optional(),
    utilitiesId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => LeaseCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => LeaseAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => LeaseMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => LeaseMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => LeaseSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const LeaseOrderByWithAggregationInputObjectSchema = Schema;
