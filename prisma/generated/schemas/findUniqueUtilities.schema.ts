import { z } from 'zod';
import { UtilitiesIncludeObjectSchema } from './objects/UtilitiesInclude.schema';
import { UtilitiesWhereUniqueInputObjectSchema } from './objects/UtilitiesWhereUniqueInput.schema';

export const UtilitiesFindUniqueSchema = z.object({
  include: UtilitiesIncludeObjectSchema.optional(),
  where: UtilitiesWhereUniqueInputObjectSchema,
});
