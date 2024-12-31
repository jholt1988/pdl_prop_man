import { z } from 'zod';
import { UtilitiesIncludeObjectSchema } from './objects/UtilitiesInclude.schema';
import { UtilitiesOrderByWithRelationInputObjectSchema } from './objects/UtilitiesOrderByWithRelationInput.schema';
import { UtilitiesWhereInputObjectSchema } from './objects/UtilitiesWhereInput.schema';
import { UtilitiesWhereUniqueInputObjectSchema } from './objects/UtilitiesWhereUniqueInput.schema';
import { UtilitiesScalarFieldEnumSchema } from './enums/UtilitiesScalarFieldEnum.schema';

export const UtilitiesFindManySchema = z.object({
  include: z.lazy(() => UtilitiesIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      UtilitiesOrderByWithRelationInputObjectSchema,
      UtilitiesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UtilitiesWhereInputObjectSchema.optional(),
  cursor: UtilitiesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UtilitiesScalarFieldEnumSchema).optional(),
});
