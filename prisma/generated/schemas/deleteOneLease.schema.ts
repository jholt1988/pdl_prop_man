import { z } from 'zod';
import { LeaseWhereUniqueInputObjectSchema } from './objects/LeaseWhereUniqueInput.schema';

export const LeaseDeleteOneSchema = z.object({
  where: LeaseWhereUniqueInputObjectSchema,
});
