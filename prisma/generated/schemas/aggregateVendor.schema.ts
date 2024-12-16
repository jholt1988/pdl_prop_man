import { z } from 'zod';
import { VendorOrderByWithRelationInputObjectSchema } from './objects/VendorOrderByWithRelationInput.schema';
import { VendorWhereInputObjectSchema } from './objects/VendorWhereInput.schema';
import { VendorWhereUniqueInputObjectSchema } from './objects/VendorWhereUniqueInput.schema';
import { VendorCountAggregateInputObjectSchema } from './objects/VendorCountAggregateInput.schema';
import { VendorMinAggregateInputObjectSchema } from './objects/VendorMinAggregateInput.schema';
import { VendorMaxAggregateInputObjectSchema } from './objects/VendorMaxAggregateInput.schema';
import { VendorAvgAggregateInputObjectSchema } from './objects/VendorAvgAggregateInput.schema';
import { VendorSumAggregateInputObjectSchema } from './objects/VendorSumAggregateInput.schema';

export const VendorAggregateSchema = z.object({
  orderBy: z
    .union([
      VendorOrderByWithRelationInputObjectSchema,
      VendorOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: VendorWhereInputObjectSchema.optional(),
  cursor: VendorWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), VendorCountAggregateInputObjectSchema])
    .optional(),
  _min: VendorMinAggregateInputObjectSchema.optional(),
  _max: VendorMaxAggregateInputObjectSchema.optional(),
  _avg: VendorAvgAggregateInputObjectSchema.optional(),
  _sum: VendorSumAggregateInputObjectSchema.optional(),
});
