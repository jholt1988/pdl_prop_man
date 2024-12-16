import { z } from 'zod';
import { TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';

export const TenantDeleteManySchema = z.object({
  where: TenantWhereInputObjectSchema.optional(),
});
