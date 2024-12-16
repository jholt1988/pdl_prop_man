import { z } from 'zod';
import { RepairRequestOrderByWithRelationInputObjectSchema } from './objects/RepairRequestOrderByWithRelationInput.schema';
import { RepairRequestWhereInputObjectSchema } from './objects/RepairRequestWhereInput.schema';
import { RepairRequestWhereUniqueInputObjectSchema } from './objects/RepairRequestWhereUniqueInput.schema';
import { RepairRequestCountAggregateInputObjectSchema } from './objects/RepairRequestCountAggregateInput.schema';
import { RepairRequestMinAggregateInputObjectSchema } from './objects/RepairRequestMinAggregateInput.schema';
import { RepairRequestMaxAggregateInputObjectSchema } from './objects/RepairRequestMaxAggregateInput.schema';
import { RepairRequestAvgAggregateInputObjectSchema } from './objects/RepairRequestAvgAggregateInput.schema';
import { RepairRequestSumAggregateInputObjectSchema } from './objects/RepairRequestSumAggregateInput.schema';

export const RepairRequestAggregateSchema = z.object({
  orderBy: z
    .union([
      RepairRequestOrderByWithRelationInputObjectSchema,
      RepairRequestOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RepairRequestWhereInputObjectSchema.optional(),
  cursor: RepairRequestWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RepairRequestCountAggregateInputObjectSchema])
    .optional(),
  _min: RepairRequestMinAggregateInputObjectSchema.optional(),
  _max: RepairRequestMaxAggregateInputObjectSchema.optional(),
  _avg: RepairRequestAvgAggregateInputObjectSchema.optional(),
  _sum: RepairRequestSumAggregateInputObjectSchema.optional(),
});
