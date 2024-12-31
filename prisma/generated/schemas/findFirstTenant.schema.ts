import { z } from 'zod';
import { TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './objects/TenantOrderByWithRelationInput.schema';
import { TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';
import { TenantScalarFieldEnumSchema } from './enums/TenantScalarFieldEnum.schema';

export const TenantFindFirstSchema = z.object({
  include: TenantIncludeObjectSchema.optional(),
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
  distinct: z.array(TenantScalarFieldEnumSchema).optional(),
});
