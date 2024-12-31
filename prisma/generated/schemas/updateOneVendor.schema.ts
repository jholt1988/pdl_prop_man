import { z } from 'zod';
import { VendorIncludeObjectSchema } from './objects/VendorInclude.schema';
import { VendorUpdateInputObjectSchema } from './objects/VendorUpdateInput.schema';
import { VendorUncheckedUpdateInputObjectSchema } from './objects/VendorUncheckedUpdateInput.schema';
import { VendorWhereUniqueInputObjectSchema } from './objects/VendorWhereUniqueInput.schema';

export const VendorUpdateOneSchema = z.object({
  include: VendorIncludeObjectSchema.optional(),
  data: z.union([
    VendorUpdateInputObjectSchema,
    VendorUncheckedUpdateInputObjectSchema,
  ]),
  where: VendorWhereUniqueInputObjectSchema,
});
