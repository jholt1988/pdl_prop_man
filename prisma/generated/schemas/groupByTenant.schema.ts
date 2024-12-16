import { z } from 'zod';
import { TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';
import { TenantOrderByWithAggregationInputObjectSchema } from './objects/TenantOrderByWithAggregationInput.schema';
import { TenantScalarWhereWithAggregatesInputObjectSchema } from './objects/TenantScalarWhereWithAggregatesInput.schema';
import { TenantScalarFieldEnumSchema } from './enums/TenantScalarFieldEnum.schema';

export const TenantGroupBySchema = z.object({
  where: TenantWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TenantOrderByWithAggregationInputObjectSchema,
      TenantOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TenantScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TenantScalarFieldEnumSchema),
});
