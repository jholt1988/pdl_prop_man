import { z } from 'zod';
import { TransactionIncludeObjectSchema } from './objects/TransactionInclude.schema';
import { TransactionCreateInputObjectSchema } from './objects/TransactionCreateInput.schema';
import { TransactionUncheckedCreateInputObjectSchema } from './objects/TransactionUncheckedCreateInput.schema';

export const TransactionCreateOneSchema = z.object({
  include: TransactionIncludeObjectSchema.optional(),
  data: z.union([
    TransactionCreateInputObjectSchema,
    TransactionUncheckedCreateInputObjectSchema,
  ]),
});
