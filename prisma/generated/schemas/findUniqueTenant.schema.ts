import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';

export const TenantFindUniqueSchema = z.object({
  where: TenantWhereUniqueInputObjectSchema,
});
