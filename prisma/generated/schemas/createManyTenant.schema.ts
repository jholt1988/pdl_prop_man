import { z } from 'zod';
import { TenantCreateManyInputObjectSchema } from './objects/TenantCreateManyInput.schema';

export const TenantCreateManySchema = z.object({
  data: z.union([
    TenantCreateManyInputObjectSchema,
    z.array(TenantCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
