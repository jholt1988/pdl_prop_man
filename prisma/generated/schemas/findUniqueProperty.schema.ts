import { z } from 'zod';
import { PropertyWhereUniqueInputObjectSchema } from './objects/PropertyWhereUniqueInput.schema';

export const PropertyFindUniqueSchema = z.object({
  where: PropertyWhereUniqueInputObjectSchema,
});
