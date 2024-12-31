import { z } from 'zod';
import { LeaseIncludeObjectSchema } from './objects/LeaseInclude.schema';
import { LeaseCreateInputObjectSchema } from './objects/LeaseCreateInput.schema';
import { LeaseUncheckedCreateInputObjectSchema } from './objects/LeaseUncheckedCreateInput.schema';

export const LeaseCreateOneSchema = z.object({
  include: LeaseIncludeObjectSchema.optional(),
  data: z.union([
    LeaseCreateInputObjectSchema,
    LeaseUncheckedCreateInputObjectSchema,
  ]),
});
