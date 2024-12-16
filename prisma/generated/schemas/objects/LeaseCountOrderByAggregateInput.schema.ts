import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCountOrderByAggregateInput> = z
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
    utilitiesId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const LeaseCountOrderByAggregateInputObjectSchema = Schema;
