import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LeaseOrderByWithRelationInputObjectSchema } from './LeaseOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    electric: z.lazy(() => SortOrderSchema).optional(),
    gas: z.lazy(() => SortOrderSchema).optional(),
    water: z.lazy(() => SortOrderSchema).optional(),
    leaseId: z.lazy(() => SortOrderSchema).optional(),
    lease: z.lazy(() => LeaseOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const UtilitiesOrderByWithRelationInputObjectSchema = Schema;
