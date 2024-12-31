import { z } from 'zod';
import { LeaseIncludeObjectSchema } from './objects/LeaseInclude.schema';
import { LeaseUpdateInputObjectSchema } from './objects/LeaseUpdateInput.schema';
import { LeaseUncheckedUpdateInputObjectSchema } from './objects/LeaseUncheckedUpdateInput.schema';
import { LeaseWhereUniqueInputObjectSchema } from './objects/LeaseWhereUniqueInput.schema';

export const LeaseUpdateOneSchema = z.object({
  include: LeaseIncludeObjectSchema.optional(),
  data: z.union([
    LeaseUpdateInputObjectSchema,
    LeaseUncheckedUpdateInputObjectSchema,
  ]),
  where: LeaseWhereUniqueInputObjectSchema,
});
