import { z } from 'zod';
import { UtilitiesIncludeObjectSchema } from './objects/UtilitiesInclude.schema';
import { UtilitiesUpdateInputObjectSchema } from './objects/UtilitiesUpdateInput.schema';
import { UtilitiesUncheckedUpdateInputObjectSchema } from './objects/UtilitiesUncheckedUpdateInput.schema';
import { UtilitiesWhereUniqueInputObjectSchema } from './objects/UtilitiesWhereUniqueInput.schema';

export const UtilitiesUpdateOneSchema = z.object({
  include: UtilitiesIncludeObjectSchema.optional(),
  data: z.union([
    UtilitiesUpdateInputObjectSchema,
    UtilitiesUncheckedUpdateInputObjectSchema,
  ]),
  where: UtilitiesWhereUniqueInputObjectSchema,
});
