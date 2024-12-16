import { z } from 'zod';
import { LeaseUpdateManyMutationInputObjectSchema } from './objects/LeaseUpdateManyMutationInput.schema';
import { LeaseWhereInputObjectSchema } from './objects/LeaseWhereInput.schema';

export const LeaseUpdateManySchema = z.object({
  data: LeaseUpdateManyMutationInputObjectSchema,
  where: LeaseWhereInputObjectSchema.optional(),
});
