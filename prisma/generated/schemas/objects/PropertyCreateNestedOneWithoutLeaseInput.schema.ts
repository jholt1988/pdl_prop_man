import { z } from 'zod';
import { PropertyCreateWithoutLeaseInputObjectSchema } from './PropertyCreateWithoutLeaseInput.schema';
import { PropertyUncheckedCreateWithoutLeaseInputObjectSchema } from './PropertyUncheckedCreateWithoutLeaseInput.schema';
import { PropertyCreateOrConnectWithoutLeaseInputObjectSchema } from './PropertyCreateOrConnectWithoutLeaseInput.schema';
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyCreateNestedOneWithoutLeaseInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PropertyCreateWithoutLeaseInputObjectSchema),
        z.lazy(() => PropertyUncheckedCreateWithoutLeaseInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PropertyCreateOrConnectWithoutLeaseInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PropertyCreateNestedOneWithoutLeaseInputObjectSchema = Schema;
