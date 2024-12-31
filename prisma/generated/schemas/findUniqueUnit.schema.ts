import { z } from 'zod';
import { UnitIncludeObjectSchema } from './objects/UnitInclude.schema';
import { UnitWhereUniqueInputObjectSchema } from './objects/UnitWhereUniqueInput.schema';

export const UnitFindUniqueSchema = z.object({
  include: UnitIncludeObjectSchema.optional(),
  where: UnitWhereUniqueInputObjectSchema,
});
