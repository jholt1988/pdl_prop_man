import { z } from 'zod';
import { LeaseIncludeObjectSchema } from './objects/LeaseInclude.schema';
import { LeaseWhereUniqueInputObjectSchema } from './objects/LeaseWhereUniqueInput.schema';

export const LeaseFindUniqueSchema = z.object({
  include: LeaseIncludeObjectSchema.optional(),
  where: LeaseWhereUniqueInputObjectSchema,
});
