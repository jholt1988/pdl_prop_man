import { z } from 'zod';
import { UtilitiesCreateManyInputObjectSchema } from './objects/UtilitiesCreateManyInput.schema';

export const UtilitiesCreateManySchema = z.object({
  data: z.union([
    UtilitiesCreateManyInputObjectSchema,
    z.array(UtilitiesCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
