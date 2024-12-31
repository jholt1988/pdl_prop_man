import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LeaseOrderByWithRelationInputObjectSchema } from './LeaseOrderByWithRelationInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    tenantId: z.lazy(() => SortOrderSchema).optional(),
    leaseId: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    lease: z.lazy(() => LeaseOrderByWithRelationInputObjectSchema).optional(),
    tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const TransactionOrderByWithRelationInputObjectSchema = Schema;
