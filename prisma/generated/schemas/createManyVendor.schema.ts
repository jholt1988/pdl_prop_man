import { z } from 'zod';
import { VendorCreateManyInputObjectSchema } from './objects/VendorCreateManyInput.schema';

export const VendorCreateManySchema = z.object({
  data: z.union([
    VendorCreateManyInputObjectSchema,
    z.array(VendorCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
