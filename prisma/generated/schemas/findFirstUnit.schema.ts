import { z } from 'zod';
import { UnitIncludeObjectSchema } from './objects/UnitInclude.schema';
import { UnitOrderByWithRelationInputObjectSchema } from './objects/UnitOrderByWithRelationInput.schema';
import { UnitWhereInputObjectSchema } from './objects/UnitWhereInput.schema';
import { UnitWhereUniqueInputObjectSchema } from './objects/UnitWhereUniqueInput.schema';
import { UnitScalarFieldEnumSchema } from './enums/UnitScalarFieldEnum.schema';

export const UnitFindFirstSchema = z.object({
  include: UnitIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      UnitOrderByWithRelationInputObjectSchema,
      UnitOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UnitWhereInputObjectSchema.optional(),
  cursor: UnitWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UnitScalarFieldEnumSchema).optional(),
});
