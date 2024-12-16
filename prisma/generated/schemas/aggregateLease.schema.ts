import { z } from 'zod';
import { LeaseOrderByWithRelationInputObjectSchema } from './objects/LeaseOrderByWithRelationInput.schema';
import { LeaseWhereInputObjectSchema } from './objects/LeaseWhereInput.schema';
import { LeaseWhereUniqueInputObjectSchema } from './objects/LeaseWhereUniqueInput.schema';
import { LeaseCountAggregateInputObjectSchema } from './objects/LeaseCountAggregateInput.schema';
import { LeaseMinAggregateInputObjectSchema } from './objects/LeaseMinAggregateInput.schema';
import { LeaseMaxAggregateInputObjectSchema } from './objects/LeaseMaxAggregateInput.schema';
import { LeaseAvgAggregateInputObjectSchema } from './objects/LeaseAvgAggregateInput.schema';
import { LeaseSumAggregateInputObjectSchema } from './objects/LeaseSumAggregateInput.schema';

export const LeaseAggregateSchema = z.object({
  orderBy: z
    .union([
      LeaseOrderByWithRelationInputObjectSchema,
      LeaseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LeaseWhereInputObjectSchema.optional(),
  cursor: LeaseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), LeaseCountAggregateInputObjectSchema])
    .optional(),
  _min: LeaseMinAggregateInputObjectSchema.optional(),
  _max: LeaseMaxAggregateInputObjectSchema.optional(),
  _avg: LeaseAvgAggregateInputObjectSchema.optional(),
  _sum: LeaseSumAggregateInputObjectSchema.optional(),
});
