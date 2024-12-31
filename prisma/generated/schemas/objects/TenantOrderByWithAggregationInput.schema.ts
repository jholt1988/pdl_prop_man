import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantCountOrderByAggregateInputObjectSchema } from './TenantCountOrderByAggregateInput.schema';
import { TenantAvgOrderByAggregateInputObjectSchema } from './TenantAvgOrderByAggregateInput.schema';
import { TenantMaxOrderByAggregateInputObjectSchema } from './TenantMaxOrderByAggregateInput.schema';
import { TenantMinOrderByAggregateInputObjectSchema } from './TenantMinOrderByAggregateInput.schema';
import { TenantSumOrderByAggregateInputObjectSchema } from './TenantSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    ssn: z.lazy(() => SortOrderSchema).optional(),
    DOB: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    driversLicense: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    emergencyContact: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    emergencyContactPhone: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => TenantCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => TenantAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TenantMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TenantMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => TenantSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TenantOrderByWithAggregationInputObjectSchema = Schema;
