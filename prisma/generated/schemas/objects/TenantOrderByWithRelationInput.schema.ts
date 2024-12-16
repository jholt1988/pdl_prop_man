import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LeaseOrderByRelationAggregateInputObjectSchema } from './LeaseOrderByRelationAggregateInput.schema';
import { TransactionOrderByRelationAggregateInputObjectSchema } from './TransactionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    ssn: z.lazy(() => SortOrderSchema).optional(),
    leases: z
      .lazy(() => LeaseOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Transaction: z
      .lazy(() => TransactionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TenantOrderByWithRelationInputObjectSchema = Schema;