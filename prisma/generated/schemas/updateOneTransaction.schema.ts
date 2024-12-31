import { z } from 'zod';
import { TransactionIncludeObjectSchema } from './objects/TransactionInclude.schema';
import { TransactionUpdateInputObjectSchema } from './objects/TransactionUpdateInput.schema';
import { TransactionUncheckedUpdateInputObjectSchema } from './objects/TransactionUncheckedUpdateInput.schema';
import { TransactionWhereUniqueInputObjectSchema } from './objects/TransactionWhereUniqueInput.schema';

export const TransactionUpdateOneSchema = z.object({
  include: TransactionIncludeObjectSchema.optional(),
  data: z.union([
    TransactionUpdateInputObjectSchema,
    TransactionUncheckedUpdateInputObjectSchema,
  ]),
  where: TransactionWhereUniqueInputObjectSchema,
});
