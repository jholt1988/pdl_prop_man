import { z } from 'zod';
import { LeaseWhereInputObjectSchema } from './objects/LeaseWhereInput.schema';

export const LeaseDeleteManySchema = z.object({
  where: LeaseWhereInputObjectSchema.optional(),
});
