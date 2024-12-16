import { z } from 'zod';
import { VendorWhereInputObjectSchema } from './objects/VendorWhereInput.schema';
import { VendorOrderByWithAggregationInputObjectSchema } from './objects/VendorOrderByWithAggregationInput.schema';
import { VendorScalarWhereWithAggregatesInputObjectSchema } from './objects/VendorScalarWhereWithAggregatesInput.schema';
import { VendorScalarFieldEnumSchema } from './enums/VendorScalarFieldEnum.schema';

export const VendorGroupBySchema = z.object({
  where: VendorWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VendorOrderByWithAggregationInputObjectSchema,
      VendorOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: VendorScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VendorScalarFieldEnumSchema),
});
