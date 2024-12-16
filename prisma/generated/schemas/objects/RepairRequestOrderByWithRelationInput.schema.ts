import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PropertyOrderByWithRelationInputObjectSchema } from './PropertyOrderByWithRelationInput.schema';
import { UnitOrderByWithRelationInputObjectSchema } from './UnitOrderByWithRelationInput.schema';
import { VendorOrderByWithRelationInputObjectSchema } from './VendorOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    issue: z.lazy(() => SortOrderSchema).optional(),
    image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    propertyId: z.lazy(() => SortOrderSchema).optional(),
    unitId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    vendorId: z.lazy(() => SortOrderSchema).optional(),
    property: z
      .lazy(() => PropertyOrderByWithRelationInputObjectSchema)
      .optional(),
    unit: z.lazy(() => UnitOrderByWithRelationInputObjectSchema).optional(),
    vendor: z.lazy(() => VendorOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const RepairRequestOrderByWithRelationInputObjectSchema = Schema;
