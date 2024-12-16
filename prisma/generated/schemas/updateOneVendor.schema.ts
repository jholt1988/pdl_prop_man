import { z } from 'zod';
import { VendorUpdateInputObjectSchema } from './objects/VendorUpdateInput.schema';
import { VendorUncheckedUpdateInputObjectSchema } from './objects/VendorUncheckedUpdateInput.schema';
import { VendorWhereUniqueInputObjectSchema } from './objects/VendorWhereUniqueInput.schema';

export const VendorUpdateOneSchema = z.object({
  data: z.union([
    VendorUpdateInputObjectSchema,
    VendorUncheckedUpdateInputObjectSchema,
  ]),
  where: VendorWhereUniqueInputObjectSchema,
});
