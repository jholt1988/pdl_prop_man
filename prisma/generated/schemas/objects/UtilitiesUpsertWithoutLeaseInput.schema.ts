import { z } from 'zod';
import { UtilitiesUpdateWithoutLeaseInputObjectSchema } from './UtilitiesUpdateWithoutLeaseInput.schema';
import { UtilitiesUncheckedUpdateWithoutLeaseInputObjectSchema } from './UtilitiesUncheckedUpdateWithoutLeaseInput.schema';
import { UtilitiesCreateWithoutLeaseInputObjectSchema } from './UtilitiesCreateWithoutLeaseInput.schema';
import { UtilitiesUncheckedCreateWithoutLeaseInputObjectSchema } from './UtilitiesUncheckedCreateWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesUpsertWithoutLeaseInput> = z
  .object({
    update: z.union([
      z.lazy(() => UtilitiesUpdateWithoutLeaseInputObjectSchema),
      z.lazy(() => UtilitiesUncheckedUpdateWithoutLeaseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UtilitiesCreateWithoutLeaseInputObjectSchema),
      z.lazy(() => UtilitiesUncheckedCreateWithoutLeaseInputObjectSchema),
    ]),
  })
  .strict();

export const UtilitiesUpsertWithoutLeaseInputObjectSchema = Schema;
