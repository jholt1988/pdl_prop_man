import { z } from 'zod';
import { PropertyIncludeObjectSchema } from './objects/PropertyInclude.schema';
import { PropertyWhereUniqueInputObjectSchema } from './objects/PropertyWhereUniqueInput.schema';

export const PropertyFindUniqueSchema = z.object({
  include: PropertyIncludeObjectSchema.optional(),
  where: PropertyWhereUniqueInputObjectSchema,
});
