import { z } from 'zod';
import { TenantUpdateManyMutationInputObjectSchema } from './objects/TenantUpdateManyMutationInput.schema';
import { TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';

export const TenantUpdateManySchema = z.object({
  data: TenantUpdateManyMutationInputObjectSchema,
  where: TenantWhereInputObjectSchema.optional(),
});
