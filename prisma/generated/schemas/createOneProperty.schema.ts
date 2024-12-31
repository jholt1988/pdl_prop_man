import { z } from 'zod';
import { PropertyIncludeObjectSchema } from './objects/PropertyInclude.schema';
import { PropertyCreateInputObjectSchema } from './objects/PropertyCreateInput.schema';
import { PropertyUncheckedCreateInputObjectSchema } from './objects/PropertyUncheckedCreateInput.schema';

export const PropertyCreateOneSchema = z.object({
  include: PropertyIncludeObjectSchema.optional(),
  data: z.union([
    PropertyCreateInputObjectSchema,
    PropertyUncheckedCreateInputObjectSchema,
  ]),
});
