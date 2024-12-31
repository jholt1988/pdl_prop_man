import { z } from 'zod';
import { PropertyIncludeObjectSchema } from './objects/PropertyInclude.schema';
import { PropertyWhereUniqueInputObjectSchema } from './objects/PropertyWhereUniqueInput.schema';
import { PropertyCreateInputObjectSchema } from './objects/PropertyCreateInput.schema';
import { PropertyUncheckedCreateInputObjectSchema } from './objects/PropertyUncheckedCreateInput.schema';
import { PropertyUpdateInputObjectSchema } from './objects/PropertyUpdateInput.schema';
import { PropertyUncheckedUpdateInputObjectSchema } from './objects/PropertyUncheckedUpdateInput.schema';

export const PropertyUpsertSchema = z.object({
  include: PropertyIncludeObjectSchema.optional(),
  where: PropertyWhereUniqueInputObjectSchema,
  create: z.union([
    PropertyCreateInputObjectSchema,
    PropertyUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PropertyUpdateInputObjectSchema,
    PropertyUncheckedUpdateInputObjectSchema,
  ]),
});
