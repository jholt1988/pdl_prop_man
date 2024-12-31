import { z } from 'zod';
import { VendorIncludeObjectSchema } from './objects/VendorInclude.schema';
import { VendorWhereUniqueInputObjectSchema } from './objects/VendorWhereUniqueInput.schema';

export const VendorFindUniqueSchema = z.object({
  include: VendorIncludeObjectSchema.optional(),
  where: VendorWhereUniqueInputObjectSchema,
});
