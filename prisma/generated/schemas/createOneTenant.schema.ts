import { z } from 'zod';
import { TenantCreateInputObjectSchema } from './objects/TenantCreateInput.schema';
import { TenantUncheckedCreateInputObjectSchema } from './objects/TenantUncheckedCreateInput.schema';

export const TenantCreateOneSchema = z.object({
  data: z.union([
    TenantCreateInputObjectSchema,
    TenantUncheckedCreateInputObjectSchema,
  ]),
});
