import { z } from 'zod';
import { UtilitiesWhereInputObjectSchema } from './objects/UtilitiesWhereInput.schema';

export const UtilitiesDeleteManySchema = z.object({
  where: UtilitiesWhereInputObjectSchema.optional(),
});
