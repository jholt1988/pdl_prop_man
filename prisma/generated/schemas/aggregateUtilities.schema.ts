import { z } from 'zod';
import { UtilitiesOrderByWithRelationInputObjectSchema } from './objects/UtilitiesOrderByWithRelationInput.schema';
import { UtilitiesWhereInputObjectSchema } from './objects/UtilitiesWhereInput.schema';
import { UtilitiesWhereUniqueInputObjectSchema } from './objects/UtilitiesWhereUniqueInput.schema';
import { UtilitiesCountAggregateInputObjectSchema } from './objects/UtilitiesCountAggregateInput.schema';
import { UtilitiesMinAggregateInputObjectSchema } from './objects/UtilitiesMinAggregateInput.schema';
import { UtilitiesMaxAggregateInputObjectSchema } from './objects/UtilitiesMaxAggregateInput.schema';
import { UtilitiesAvgAggregateInputObjectSchema } from './objects/UtilitiesAvgAggregateInput.schema';
import { UtilitiesSumAggregateInputObjectSchema } from './objects/UtilitiesSumAggregateInput.schema';

export const UtilitiesAggregateSchema = z.object({
  orderBy: z
    .union([
      UtilitiesOrderByWithRelationInputObjectSchema,
      UtilitiesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UtilitiesWhereInputObjectSchema.optional(),
  cursor: UtilitiesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), UtilitiesCountAggregateInputObjectSchema])
    .optional(),
  _min: UtilitiesMinAggregateInputObjectSchema.optional(),
  _max: UtilitiesMaxAggregateInputObjectSchema.optional(),
  _avg: UtilitiesAvgAggregateInputObjectSchema.optional(),
  _sum: UtilitiesSumAggregateInputObjectSchema.optional(),
});
