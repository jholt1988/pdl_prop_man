import { z } from 'zod';
import { UnitIncludeObjectSchema } from './objects/UnitInclude.schema';
import { UnitCreateInputObjectSchema } from './objects/UnitCreateInput.schema';
import { UnitUncheckedCreateInputObjectSchema } from './objects/UnitUncheckedCreateInput.schema';

export const UnitCreateOneSchema = z.object({
  include: UnitIncludeObjectSchema.optional(),
  data: z.union([
    UnitCreateInputObjectSchema,
    UnitUncheckedCreateInputObjectSchema,
  ]),
});
