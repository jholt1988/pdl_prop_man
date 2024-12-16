import { z } from 'zod';
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema';
import { PropertyCreateWithoutLeaseInputObjectSchema } from './PropertyCreateWithoutLeaseInput.schema';
import { PropertyUncheckedCreateWithoutLeaseInputObjectSchema } from './PropertyUncheckedCreateWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyCreateOrConnectWithoutLeaseInput> = z
  .object({
    where: z.lazy(() => PropertyWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutLeaseInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutLeaseInputObjectSchema),
    ]),
  })
  .strict();

export const PropertyCreateOrConnectWithoutLeaseInputObjectSchema = Schema;
