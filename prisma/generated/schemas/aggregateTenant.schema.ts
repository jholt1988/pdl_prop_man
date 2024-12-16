import { z } from 'zod';
import { TenantOrderByWithRelationInputObjectSchema } from './objects/TenantOrderByWithRelationInput.schema';
import { TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';
import { TenantCountAggregateInputObjectSchema } from './objects/TenantCountAggregateInput.schema';
import { TenantMinAggregateInputObjectSchema } from './objects/TenantMinAggregateInput.schema';
import { TenantMaxAggregateInputObjectSchema } from './objects/TenantMaxAggregateInput.schema';
import { TenantAvgAggregateInputObjectSchema } from './objects/TenantAvgAggregateInput.schema';
import { TenantSumAggregateInputObjectSchema } from './objects/TenantSumAggregateInput.schema';

export const TenantAggregateSchema = z.object({
  orderBy: z
    .union([
      TenantOrderByWithRelationInputObjectSchema,
      TenantOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TenantWhereInputObjectSchema.optional(),
  cursor: TenantWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TenantCountAggregateInputObjectSchema])
    .optional(),
  _min: TenantMinAggregateInputObjectSchema.optional(),
  _max: TenantMaxAggregateInputObjectSchema.optional(),
  _avg: TenantAvgAggregateInputObjectSchema.optional(),
  _sum: TenantSumAggregateInputObjectSchema.optional(),
});
