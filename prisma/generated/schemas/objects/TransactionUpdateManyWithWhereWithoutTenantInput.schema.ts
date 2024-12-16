import { z } from 'zod';
import { TransactionScalarWhereInputObjectSchema } from './TransactionScalarWhereInput.schema';
import { TransactionUpdateManyMutationInputObjectSchema } from './TransactionUpdateManyMutationInput.schema';
import { TransactionUncheckedUpdateManyWithoutTransactionInputObjectSchema } from './TransactionUncheckedUpdateManyWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => TransactionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TransactionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TransactionUncheckedUpdateManyWithoutTransactionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TransactionUpdateManyWithWhereWithoutTenantInputObjectSchema =
  Schema;
