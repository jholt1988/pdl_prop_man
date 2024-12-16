import { z } from 'zod';
import { UtilitiesWhereUniqueInputObjectSchema } from './objects/UtilitiesWhereUniqueInput.schema';
import { UtilitiesCreateInputObjectSchema } from './objects/UtilitiesCreateInput.schema';
import { UtilitiesUncheckedCreateInputObjectSchema } from './objects/UtilitiesUncheckedCreateInput.schema';
import { UtilitiesUpdateInputObjectSchema } from './objects/UtilitiesUpdateInput.schema';
import { UtilitiesUncheckedUpdateInputObjectSchema } from './objects/UtilitiesUncheckedUpdateInput.schema';

export const UtilitiesUpsertSchema = z.object({
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
