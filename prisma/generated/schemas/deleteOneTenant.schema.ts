import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';

export const TenantDeleteOneSchema = z.object({
  where: TenantWhereUniqueInputObjectSchema,
});
