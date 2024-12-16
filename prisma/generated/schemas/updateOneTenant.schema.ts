import { z } from 'zod';
import { TenantUpdateInputObjectSchema } from './objects/TenantUpdateInput.schema';
import { TenantUncheckedUpdateInputObjectSchema } from './objects/TenantUncheckedUpdateInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';

export const TenantUpdateOneSchema = z.object({
  data: z.union([
    TenantUpdateInputObjectSchema,
    TenantUncheckedUpdateInputObjectSchema,
  ]),
  where: TenantWhereUniqueInputObjectSchema,
});
