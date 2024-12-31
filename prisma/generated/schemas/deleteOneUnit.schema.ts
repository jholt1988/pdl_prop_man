import { z } from 'zod';
import { UnitIncludeObjectSchema } from './objects/UnitInclude.schema';
import { UnitWhereUniqueInputObjectSchema } from './objects/UnitWhereUniqueInput.schema';

export const UnitDeleteOneSchema = z.object({
  include: UnitIncludeObjectSchema.optional(),
  where: UnitWhereUniqueInputObjectSchema,
});
