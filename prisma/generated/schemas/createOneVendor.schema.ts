import { z } from 'zod';
import { VendorIncludeObjectSchema } from './objects/VendorInclude.schema';
import { VendorCreateInputObjectSchema } from './objects/VendorCreateInput.schema';
import { VendorUncheckedCreateInputObjectSchema } from './objects/VendorUncheckedCreateInput.schema';

export const VendorCreateOneSchema = z.object({
  include: VendorIncludeObjectSchema.optional(),
  data: z.union([
    VendorCreateInputObjectSchema,
    VendorUncheckedCreateInputObjectSchema,
  ]),
});
