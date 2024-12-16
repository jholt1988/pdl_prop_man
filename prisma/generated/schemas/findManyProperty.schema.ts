import { z } from 'zod';
import { PropertyOrderByWithRelationInputObjectSchema } from './objects/PropertyOrderByWithRelationInput.schema';
import { PropertyWhereInputObjectSchema } from './objects/PropertyWhereInput.schema';
import { PropertyWhereUniqueInputObjectSchema } from './objects/PropertyWhereUniqueInput.schema';
import { PropertyScalarFieldEnumSchema } from './enums/PropertyScalarFieldEnum.schema';

export const PropertyFindManySchema = z.object({
  orderBy: z
    .union([
      PropertyOrderByWithRelationInputObjectSchema,
      PropertyOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PropertyWhereInputObjectSchema.optional(),
  cursor: PropertyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PropertyScalarFieldEnumSchema).optional(),
});
