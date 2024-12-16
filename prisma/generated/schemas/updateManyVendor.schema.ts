import { z } from 'zod';
import { VendorUpdateManyMutationInputObjectSchema } from './objects/VendorUpdateManyMutationInput.schema';
import { VendorWhereInputObjectSchema } from './objects/VendorWhereInput.schema';

export const VendorUpdateManySchema = z.object({
  data: VendorUpdateManyMutationInputObjectSchema,
  where: VendorWhereInputObjectSchema.optional(),
});
