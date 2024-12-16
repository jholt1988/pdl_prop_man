import { z } from 'zod';
import { LeaseUpdateInputObjectSchema } from './objects/LeaseUpdateInput.schema';
import { LeaseUncheckedUpdateInputObjectSchema } from './objects/LeaseUncheckedUpdateInput.schema';
import { LeaseWhereUniqueInputObjectSchema } from './objects/LeaseWhereUniqueInput.schema';

export const LeaseUpdateOneSchema = z.object({
  data: z.union([
    LeaseUpdateInputObjectSchema,
    LeaseUncheckedUpdateInputObjectSchema,
  ]),
  where: LeaseWhereUniqueInputObjectSchema,
});
