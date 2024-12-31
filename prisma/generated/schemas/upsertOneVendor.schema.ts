import { z } from 'zod';
import { VendorIncludeObjectSchema } from './objects/VendorInclude.schema';
import { VendorWhereUniqueInputObjectSchema } from './objects/VendorWhereUniqueInput.schema';
import { VendorCreateInputObjectSchema } from './objects/VendorCreateInput.schema';
import { VendorUncheckedCreateInputObjectSchema } from './objects/VendorUncheckedCreateInput.schema';
import { VendorUpdateInputObjectSchema } from './objects/VendorUpdateInput.schema';
import { VendorUncheckedUpdateInputObjectSchema } from './objects/VendorUncheckedUpdateInput.schema';

export const VendorUpsertSchema = z.object({
  include: VendorIncludeObjectSchema.optional(),
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
