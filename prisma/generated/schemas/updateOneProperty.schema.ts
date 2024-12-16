import { z } from 'zod';
import { PropertyUpdateInputObjectSchema } from './objects/PropertyUpdateInput.schema';
import { PropertyUncheckedUpdateInputObjectSchema } from './objects/PropertyUncheckedUpdateInput.schema';
import { PropertyWhereUniqueInputObjectSchema } from './objects/PropertyWhereUniqueInput.schema';

export const PropertyUpdateOneSchema = z.object({
  data: z.union([
    PropertyUpdateInputObjectSchema,
    PropertyUncheckedUpdateInputObjectSchema,
  ]),
  where: PropertyWhereUniqueInputObjectSchema,
});
