import { z } from 'zod';
import { VendorCreateInputObjectSchema } from './objects/VendorCreateInput.schema';
import { VendorUncheckedCreateInputObjectSchema } from './objects/VendorUncheckedCreateInput.schema';

export const VendorCreateOneSchema = z.object({
  data: z.union([
    VendorCreateInputObjectSchema,
    VendorUncheckedCreateInputObjectSchema,
  ]),
});
