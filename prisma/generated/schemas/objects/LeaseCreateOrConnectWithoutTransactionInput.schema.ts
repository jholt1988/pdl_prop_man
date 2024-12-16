import { z } from 'zod';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseCreateWithoutTransactionInputObjectSchema } from './LeaseCreateWithoutTransactionInput.schema';
import { LeaseUncheckedCreateWithoutTransactionInputObjectSchema } from './LeaseUncheckedCreateWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateOrConnectWithoutTransactionInput> = z
  .object({
    where: z.lazy(() => LeaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LeaseCreateWithoutTransactionInputObjectSchema),
      z.lazy(() => LeaseUncheckedCreateWithoutTransactionInputObjectSchema),
    ]),
  })
  .strict();

export const LeaseCreateOrConnectWithoutTransactionInputObjectSchema = Schema;
