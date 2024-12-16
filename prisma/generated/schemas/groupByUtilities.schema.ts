import { z } from 'zod';
import { UtilitiesWhereInputObjectSchema } from './objects/UtilitiesWhereInput.schema';
import { UtilitiesOrderByWithAggregationInputObjectSchema } from './objects/UtilitiesOrderByWithAggregationInput.schema';
import { UtilitiesScalarWhereWithAggregatesInputObjectSchema } from './objects/UtilitiesScalarWhereWithAggregatesInput.schema';
import { UtilitiesScalarFieldEnumSchema } from './enums/UtilitiesScalarFieldEnum.schema';

export const UtilitiesGroupBySchema = z.object({
  where: UtilitiesWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UtilitiesOrderByWithAggregationInputObjectSchema,
      UtilitiesOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: UtilitiesScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UtilitiesScalarFieldEnumSchema),
});
