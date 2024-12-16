import { z } from 'zod';
import { PropertyCreateManyInputObjectSchema } from './objects/PropertyCreateManyInput.schema';

export const PropertyCreateManySchema = z.object({
  data: z.union([
    PropertyCreateManyInputObjectSchema,
    z.array(PropertyCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
