import { z } from 'zod';
import { RepairRequestWhereInputObjectSchema } from './objects/RepairRequestWhereInput.schema';
import { RepairRequestOrderByWithAggregationInputObjectSchema } from './objects/RepairRequestOrderByWithAggregationInput.schema';
import { RepairRequestScalarWhereWithAggregatesInputObjectSchema } from './objects/RepairRequestScalarWhereWithAggregatesInput.schema';
import { RepairRequestScalarFieldEnumSchema } from './enums/RepairRequestScalarFieldEnum.schema';

export const RepairRequestGroupBySchema = z.object({
  where: RepairRequestWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RepairRequestOrderByWithAggregationInputObjectSchema,
      RepairRequestOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RepairRequestScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RepairRequestScalarFieldEnumSchema),
});
