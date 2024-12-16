import { z } from 'zod';
import { PropertyOrderByWithRelationInputObjectSchema } from './objects/PropertyOrderByWithRelationInput.schema';
import { PropertyWhereInputObjectSchema } from './objects/PropertyWhereInput.schema';
import { PropertyWhereUniqueInputObjectSchema } from './objects/PropertyWhereUniqueInput.schema';
import { PropertyCountAggregateInputObjectSchema } from './objects/PropertyCountAggregateInput.schema';
import { PropertyMinAggregateInputObjectSchema } from './objects/PropertyMinAggregateInput.schema';
import { PropertyMaxAggregateInputObjectSchema } from './objects/PropertyMaxAggregateInput.schema';
import { PropertyAvgAggregateInputObjectSchema } from './objects/PropertyAvgAggregateInput.schema';
import { PropertySumAggregateInputObjectSchema } from './objects/PropertySumAggregateInput.schema';

export const PropertyAggregateSchema = z.object({
  orderBy: z
    .union([
      PropertyOrderByWithRelationInputObjectSchema,
      PropertyOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PropertyWhereInputObjectSchema.optional(),
  cursor: PropertyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PropertyCountAggregateInputObjectSchema])
    .optional(),
  _min: PropertyMinAggregateInputObjectSchema.optional(),
  _max: PropertyMaxAggregateInputObjectSchema.optional(),
  _avg: PropertyAvgAggregateInputObjectSchema.optional(),
  _sum: PropertySumAggregateInputObjectSchema.optional(),
});
