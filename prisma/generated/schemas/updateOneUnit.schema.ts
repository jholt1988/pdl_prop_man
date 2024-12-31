import { z } from 'zod';
import { UnitIncludeObjectSchema } from './objects/UnitInclude.schema';
import { UnitUpdateInputObjectSchema } from './objects/UnitUpdateInput.schema';
import { UnitUncheckedUpdateInputObjectSchema } from './objects/UnitUncheckedUpdateInput.schema';
import { UnitWhereUniqueInputObjectSchema } from './objects/UnitWhereUniqueInput.schema';

export const UnitUpdateOneSchema = z.object({
  include: UnitIncludeObjectSchema.optional(),
  data: z.union([
    UnitUpdateInputObjectSchema,
    UnitUncheckedUpdateInputObjectSchema,
  ]),
  where: UnitWhereUniqueInputObjectSchema,
});
