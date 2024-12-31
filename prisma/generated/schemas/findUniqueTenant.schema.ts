import { z } from 'zod';
import { TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';

export const TenantFindUniqueSchema = z.object({
  include: TenantIncludeObjectSchema.optional(),
  where: TenantWhereUniqueInputObjectSchema,
});
