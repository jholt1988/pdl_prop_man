import { z } from 'zod';
import { UtilitiesUpdateManyMutationInputObjectSchema } from './objects/UtilitiesUpdateManyMutationInput.schema';
import { UtilitiesWhereInputObjectSchema } from './objects/UtilitiesWhereInput.schema';

export const UtilitiesUpdateManySchema = z.object({
  data: UtilitiesUpdateManyMutationInputObjectSchema,
  where: UtilitiesWhereInputObjectSchema.optional(),
});
