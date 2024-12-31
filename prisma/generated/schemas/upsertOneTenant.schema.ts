import { z } from 'zod';
import { TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';
import { TenantCreateInputObjectSchema } from './objects/TenantCreateInput.schema';
import { TenantUncheckedCreateInputObjectSchema } from './objects/TenantUncheckedCreateInput.schema';
import { TenantUpdateInputObjectSchema } from './objects/TenantUpdateInput.schema';
import { TenantUncheckedUpdateInputObjectSchema } from './objects/TenantUncheckedUpdateInput.schema';

export const TenantUpsertSchema = z.object({
  include: TenantIncludeObjectSchema.optional(),
  where: TenantWhereUniqueInputObjectSchema,
  create: z.union([
    TenantCreateInputObjectSchema,
    TenantUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TenantUpdateInputObjectSchema,
    TenantUncheckedUpdateInputObjectSchema,
  ]),
});
