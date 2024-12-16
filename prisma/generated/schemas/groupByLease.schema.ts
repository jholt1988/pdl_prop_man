import { z } from 'zod';
import { LeaseWhereInputObjectSchema } from './objects/LeaseWhereInput.schema';
import { LeaseOrderByWithAggregationInputObjectSchema } from './objects/LeaseOrderByWithAggregationInput.schema';
import { LeaseScalarWhereWithAggregatesInputObjectSchema } from './objects/LeaseScalarWhereWithAggregatesInput.schema';
import { LeaseScalarFieldEnumSchema } from './enums/LeaseScalarFieldEnum.schema';

export const LeaseGroupBySchema = z.object({
  where: LeaseWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      LeaseOrderByWithAggregationInputObjectSchema,
      LeaseOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: LeaseScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(LeaseScalarFieldEnumSchema),
});
