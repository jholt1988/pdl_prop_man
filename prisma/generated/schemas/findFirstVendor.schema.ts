import { z } from 'zod';
import { VendorIncludeObjectSchema } from './objects/VendorInclude.schema';
import { VendorOrderByWithRelationInputObjectSchema } from './objects/VendorOrderByWithRelationInput.schema';
import { VendorWhereInputObjectSchema } from './objects/VendorWhereInput.schema';
import { VendorWhereUniqueInputObjectSchema } from './objects/VendorWhereUniqueInput.schema';
import { VendorScalarFieldEnumSchema } from './enums/VendorScalarFieldEnum.schema';

export const VendorFindFirstSchema = z.object({
  include: VendorIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      VendorOrderByWithRelationInputObjectSchema,
      VendorOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: VendorWhereInputObjectSchema.optional(),
  cursor: VendorWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VendorScalarFieldEnumSchema).optional(),
});
