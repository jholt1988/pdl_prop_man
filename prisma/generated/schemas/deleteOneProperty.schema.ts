import { z } from 'zod';
import { PropertyWhereUniqueInputObjectSchema } from './objects/PropertyWhereUniqueInput.schema';

export const PropertyDeleteOneSchema = z.object({
  where: PropertyWhereUniqueInputObjectSchema,
});
