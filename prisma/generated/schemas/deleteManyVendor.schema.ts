import { z } from 'zod';
import { VendorWhereInputObjectSchema } from './objects/VendorWhereInput.schema';

export const VendorDeleteManySchema = z.object({
  where: VendorWhereInputObjectSchema.optional(),
});
