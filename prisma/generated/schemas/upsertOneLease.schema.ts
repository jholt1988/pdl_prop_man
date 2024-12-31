import { z } from 'zod';
import { LeaseIncludeObjectSchema } from './objects/LeaseInclude.schema';
import { LeaseWhereUniqueInputObjectSchema } from './objects/LeaseWhereUniqueInput.schema';
import { LeaseCreateInputObjectSchema } from './objects/LeaseCreateInput.schema';
import { LeaseUncheckedCreateInputObjectSchema } from './objects/LeaseUncheckedCreateInput.schema';
import { LeaseUpdateInputObjectSchema } from './objects/LeaseUpdateInput.schema';
import { LeaseUncheckedUpdateInputObjectSchema } from './objects/LeaseUncheckedUpdateInput.schema';

export const LeaseUpsertSchema = z.object({
  include: LeaseIncludeObjectSchema.optional(),
  where: LeaseWhereUniqueInputObjectSchema,
  create: z.union([
    LeaseCreateInputObjectSchema,
    LeaseUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    LeaseUpdateInputObjectSchema,
    LeaseUncheckedUpdateInputObjectSchema,
  ]),
});
