import { z } from 'zod';
import { UtilitiesIncludeObjectSchema } from './objects/UtilitiesInclude.schema';
import { UtilitiesWhereUniqueInputObjectSchema } from './objects/UtilitiesWhereUniqueInput.schema';
import { UtilitiesCreateInputObjectSchema } from './objects/UtilitiesCreateInput.schema';
import { UtilitiesUncheckedCreateInputObjectSchema } from './objects/UtilitiesUncheckedCreateInput.schema';
import { UtilitiesUpdateInputObjectSchema } from './objects/UtilitiesUpdateInput.schema';
import { UtilitiesUncheckedUpdateInputObjectSchema } from './objects/UtilitiesUncheckedUpdateInput.schema';

export const UtilitiesUpsertSchema = z.object({
  include: UtilitiesIncludeObjectSchema.optional(),
  where: UtilitiesWhereUniqueInputObjectSchema,
  create: z.union([
    UtilitiesCreateInputObjectSchema,
    UtilitiesUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    UtilitiesUpdateInputObjectSchema,
    UtilitiesUncheckedUpdateInputObjectSchema,
  ]),
});
