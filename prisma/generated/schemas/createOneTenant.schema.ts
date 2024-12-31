import { z } from 'zod';
import { TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantCreateInputObjectSchema } from './objects/TenantCreateInput.schema';
import { TenantUncheckedCreateInputObjectSchema } from './objects/TenantUncheckedCreateInput.schema';

export const TenantCreateOneSchema = z.object({
  include: TenantIncludeObjectSchema.optional(),
  data: z.union([
    TenantCreateInputObjectSchema,
    TenantUncheckedCreateInputObjectSchema,
  ]),
});
