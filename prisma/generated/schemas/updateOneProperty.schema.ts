import { z } from 'zod';
import { PropertyIncludeObjectSchema } from './objects/PropertyInclude.schema';
import { PropertyUpdateInputObjectSchema } from './objects/PropertyUpdateInput.schema';
import { PropertyUncheckedUpdateInputObjectSchema } from './objects/PropertyUncheckedUpdateInput.schema';
import { PropertyWhereUniqueInputObjectSchema } from './objects/PropertyWhereUniqueInput.schema';

export const PropertyUpdateOneSchema = z.object({
  include: PropertyIncludeObjectSchema.optional(),
  data: z.union([
    PropertyUpdateInputObjectSchema,
    PropertyUncheckedUpdateInputObjectSchema,
  ]),
  where: PropertyWhereUniqueInputObjectSchema,
});
