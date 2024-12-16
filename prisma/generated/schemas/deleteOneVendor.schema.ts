import { z } from 'zod';
import { VendorWhereUniqueInputObjectSchema } from './objects/VendorWhereUniqueInput.schema';

export const VendorDeleteOneSchema = z.object({
  where: VendorWhereUniqueInputObjectSchema,
});
