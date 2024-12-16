import { z } from 'zod';
import { PropertyCreateInputObjectSchema } from './objects/PropertyCreateInput.schema';
import { PropertyUncheckedCreateInputObjectSchema } from './objects/PropertyUncheckedCreateInput.schema';

export const PropertyCreateOneSchema = z.object({
  data: z.union([
    PropertyCreateInputObjectSchema,
    PropertyUncheckedCreateInputObjectSchema,
  ]),
});
