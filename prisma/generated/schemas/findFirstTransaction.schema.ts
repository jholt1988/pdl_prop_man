import { z } from 'zod';
import { TransactionIncludeObjectSchema } from './objects/TransactionInclude.schema';
import { TransactionOrderByWithRelationInputObjectSchema } from './objects/TransactionOrderByWithRelationInput.schema';
import { TransactionWhereInputObjectSchema } from './objects/TransactionWhereInput.schema';
import { TransactionWhereUniqueInputObjectSchema } from './objects/TransactionWhereUniqueInput.schema';
import { TransactionScalarFieldEnumSchema } from './enums/TransactionScalarFieldEnum.schema';

export const TransactionFindFirstSchema = z.object({
  include: TransactionIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      TransactionOrderByWithRelationInputObjectSchema,
      TransactionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TransactionWhereInputObjectSchema.optional(),
  cursor: TransactionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TransactionScalarFieldEnumSchema).optional(),
});
