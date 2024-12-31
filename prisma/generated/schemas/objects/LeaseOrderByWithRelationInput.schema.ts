import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PropertyOrderByWithRelationInputObjectSchema } from './PropertyOrderByWithRelationInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { UnitOrderByWithRelationInputObjectSchema } from './UnitOrderByWithRelationInput.schema';
import { UtilitiesOrderByWithRelationInputObjectSchema } from './UtilitiesOrderByWithRelationInput.schema';
import { TransactionOrderByRelationAggregateInputObjectSchema } from './TransactionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseOrderByWithRelationInput> = z
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
    property: z
      .lazy(() => PropertyOrderByWithRelationInputObjectSchema)
      .optional(),
    tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
    unit: z.lazy(() => UnitOrderByWithRelationInputObjectSchema).optional(),
    utilities: z
      .lazy(() => UtilitiesOrderByWithRelationInputObjectSchema)
      .optional(),
    Transaction: z
      .lazy(() => TransactionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const LeaseOrderByWithRelationInputObjectSchema = Schema;
