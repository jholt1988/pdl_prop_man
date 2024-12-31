import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LeaseOrderByRelationAggregateInputObjectSchema } from './LeaseOrderByRelationAggregateInput.schema';
import { RepairRequestOrderByRelationAggregateInputObjectSchema } from './RepairRequestOrderByRelationAggregateInput.schema';
import { PropertyOrderByWithRelationInputObjectSchema } from './PropertyOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    unitNumber: z.lazy(() => SortOrderSchema).optional(),
    sqft: z.lazy(() => SortOrderSchema).optional(),
    bedrooms: z.lazy(() => SortOrderSchema).optional(),
    bathrooms: z.lazy(() => SortOrderSchema).optional(),
    propertyStatus: z.lazy(() => SortOrderSchema).optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
    leases: z
      .lazy(() => LeaseOrderByRelationAggregateInputObjectSchema)
      .optional(),
    RepairRequest: z
      .lazy(() => RepairRequestOrderByRelationAggregateInputObjectSchema)
      .optional(),
    property: z
      .lazy(() => PropertyOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const UnitOrderByWithRelationInputObjectSchema = Schema;
