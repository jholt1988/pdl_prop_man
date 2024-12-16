import { z } from 'zod';
import { LeaseWhereUniqueInputObjectSchema } from './objects/LeaseWhereUniqueInput.schema';

export const LeaseFindUniqueSchema = z.object({
  where: LeaseWhereUniqueInputObjectSchema,
});
