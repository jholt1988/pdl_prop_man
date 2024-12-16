import { z } from 'zod';
import { UtilitiesWhereUniqueInputObjectSchema } from './UtilitiesWhereUniqueInput.schema';
import { UtilitiesCreateWithoutLeaseInputObjectSchema } from './UtilitiesCreateWithoutLeaseInput.schema';
import { UtilitiesUncheckedCreateWithoutLeaseInputObjectSchema } from './UtilitiesUncheckedCreateWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesCreateOrConnectWithoutLeaseInput> = z
  .object({
    where: z.lazy(() => UtilitiesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UtilitiesCreateWithoutLeaseInputObjectSchema),
      z.lazy(() => UtilitiesUncheckedCreateWithoutLeaseInputObjectSchema),
    ]),
  })
  .strict();

export const UtilitiesCreateOrConnectWithoutLeaseInputObjectSchema = Schema;
