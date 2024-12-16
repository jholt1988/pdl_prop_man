import { z } from 'zod';
import { UtilitiesCreateInputObjectSchema } from './objects/UtilitiesCreateInput.schema';
import { UtilitiesUncheckedCreateInputObjectSchema } from './objects/UtilitiesUncheckedCreateInput.schema';

export const UtilitiesCreateOneSchema = z.object({
  data: z.union([
    UtilitiesCreateInputObjectSchema,
    UtilitiesUncheckedCreateInputObjectSchema,
  ]),
});
