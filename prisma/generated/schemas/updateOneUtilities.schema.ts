import { z } from 'zod';
import { UtilitiesUpdateInputObjectSchema } from './objects/UtilitiesUpdateInput.schema';
import { UtilitiesUncheckedUpdateInputObjectSchema } from './objects/UtilitiesUncheckedUpdateInput.schema';
import { UtilitiesWhereUniqueInputObjectSchema } from './objects/UtilitiesWhereUniqueInput.schema';

export const UtilitiesUpdateOneSchema = z.object({
  data: z.union([
    UtilitiesUpdateInputObjectSchema,
    UtilitiesUncheckedUpdateInputObjectSchema,
  ]),
  where: UtilitiesWhereUniqueInputObjectSchema,
});
