import { z } from 'zod';
import { TransactionCreateWithoutTenantInputObjectSchema } from './TransactionCreateWithoutTenantInput.schema';
import { TransactionUncheckedCreateWithoutTenantInputObjectSchema } from './TransactionUncheckedCreateWithoutTenantInput.schema';
import { TransactionCreateOrConnectWithoutTenantInputObjectSchema } from './TransactionCreateOrConnectWithoutTenantInput.schema';
import { TransactionCreateManyTenantInputEnvelopeObjectSchema } from './TransactionCreateManyTenantInputEnvelope.schema';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUncheckedCreateNestedManyWithoutTenantInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TransactionCreateWithoutTenantInputObjectSchema),
          z.lazy(() => TransactionCreateWithoutTenantInputObjectSchema).array(),
          z.lazy(
            () => TransactionUncheckedCreateWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () => TransactionUncheckedCreateWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TransactionCreateOrConnectWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () => TransactionCreateOrConnectWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TransactionCreateManyTenantInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TransactionWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TransactionUncheckedCreateNestedManyWithoutTenantInputObjectSchema =
  Schema;
