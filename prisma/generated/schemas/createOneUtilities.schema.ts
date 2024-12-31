import { z } from 'zod';
import { UtilitiesIncludeObjectSchema } from './objects/UtilitiesInclude.schema';
import { UtilitiesCreateInputObjectSchema } from './objects/UtilitiesCreateInput.schema';
import { UtilitiesUncheckedCreateInputObjectSchema } from './objects/UtilitiesUncheckedCreateInput.schema';

export const UtilitiesCreateOneSchema = z.object({
  include: UtilitiesIncludeObjectSchema.optional(),
  data: z.union([
    UtilitiesCreateInputObjectSchema,
    UtilitiesUncheckedCreateInputObjectSchema,
  ]),
});
