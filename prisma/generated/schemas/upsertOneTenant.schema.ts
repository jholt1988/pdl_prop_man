import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';
import { TenantCreateInputObjectSchema } from './objects/TenantCreateInput.schema';
import { TenantUncheckedCreateInputObjectSchema } from './objects/TenantUncheckedCreateInput.schema';
import { TenantUpdateInputObjectSchema } from './objects/TenantUpdateInput.schema';
import { TenantUncheckedUpdateInputObjectSchema } from './objects/TenantUncheckedUpdateInput.schema';

export const TenantUpsertSchema = z.object({
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
