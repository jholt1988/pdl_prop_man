import { z } from 'zod';
import { VendorWhereUniqueInputObjectSchema } from './objects/VendorWhereUniqueInput.schema';
import { VendorCreateInputObjectSchema } from './objects/VendorCreateInput.schema';
import { VendorUncheckedCreateInputObjectSchema } from './objects/VendorUncheckedCreateInput.schema';
import { VendorUpdateInputObjectSchema } from './objects/VendorUpdateInput.schema';
import { VendorUncheckedUpdateInputObjectSchema } from './objects/VendorUncheckedUpdateInput.schema';

export const VendorUpsertSchema = z.object({
  where: VendorWhereUniqueInputObjectSchema,
  create: z.union([
    VendorCreateInputObjectSchema,
    VendorUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    VendorUpdateInputObjectSchema,
    VendorUncheckedUpdateInputObjectSchema,
  ]),
});
