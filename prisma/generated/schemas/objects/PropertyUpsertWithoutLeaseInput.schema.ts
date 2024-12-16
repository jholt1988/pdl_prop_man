import { z } from 'zod';
import { PropertyUpdateWithoutLeaseInputObjectSchema } from './PropertyUpdateWithoutLeaseInput.schema';
import { PropertyUncheckedUpdateWithoutLeaseInputObjectSchema } from './PropertyUncheckedUpdateWithoutLeaseInput.schema';
import { PropertyCreateWithoutLeaseInputObjectSchema } from './PropertyCreateWithoutLeaseInput.schema';
import { PropertyUncheckedCreateWithoutLeaseInputObjectSchema } from './PropertyUncheckedCreateWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUpsertWithoutLeaseInput> = z
  .object({
    update: z.union([
      z.lazy(() => PropertyUpdateWithoutLeaseInputObjectSchema),
      z.lazy(() => PropertyUncheckedUpdateWithoutLeaseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutLeaseInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutLeaseInputObjectSchema),
    ]),
  })
  .strict();

export const PropertyUpsertWithoutLeaseInputObjectSchema = Schema;
