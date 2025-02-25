import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    unitNumber: z.lazy(() => SortOrderSchema).optional(),
    bedrooms: z.lazy(() => SortOrderSchema).optional(),
    bathrooms: z.lazy(() => SortOrderSchema).optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UnitAvgOrderByAggregateInputObjectSchema = Schema;
