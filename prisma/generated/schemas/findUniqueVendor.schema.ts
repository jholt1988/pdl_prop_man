import { z } from 'zod';
import { VendorWhereUniqueInputObjectSchema } from './objects/VendorWhereUniqueInput.schema';

export const VendorFindUniqueSchema = z.object({
  where: VendorWhereUniqueInputObjectSchema,
});
