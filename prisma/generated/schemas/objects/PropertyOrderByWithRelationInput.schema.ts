import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LeaseOrderByRelationAggregateInputObjectSchema } from './LeaseOrderByRelationAggregateInput.schema';
import { RepairRequestOrderByRelationAggregateInputObjectSchema } from './RepairRequestOrderByRelationAggregateInput.schema';
import { UnitOrderByRelationAggregateInputObjectSchema } from './UnitOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    numUnits: z.lazy(() => SortOrderSchema).optional(),
    Lease: z
      .lazy(() => LeaseOrderByRelationAggregateInputObjectSchema)
      .optional(),
    RepairRequest: z
      .lazy(() => RepairRequestOrderByRelationAggregateInputObjectSchema)
      .optional(),
    units: z
      .lazy(() => UnitOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyOrderByWithRelationInputObjectSchema = Schema;
