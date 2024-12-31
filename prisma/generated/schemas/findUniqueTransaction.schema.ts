import { z } from 'zod';
import { TransactionIncludeObjectSchema } from './objects/TransactionInclude.schema';
import { TransactionWhereUniqueInputObjectSchema } from './objects/TransactionWhereUniqueInput.schema';

export const TransactionFindUniqueSchema = z.object({
  include: TransactionIncludeObjectSchema.optional(),
  where: TransactionWhereUniqueInputObjectSchema,
});
