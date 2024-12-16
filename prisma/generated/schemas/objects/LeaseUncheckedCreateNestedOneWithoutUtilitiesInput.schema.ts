import { z } from 'zod';
import { LeaseCreateWithoutUtilitiesInputObjectSchema } from './LeaseCreateWithoutUtilitiesInput.schema';
import { LeaseUncheckedCreateWithoutUtilitiesInputObjectSchema } from './LeaseUncheckedCreateWithoutUtilitiesInput.schema';
import { LeaseCreateOrConnectWithoutUtilitiesInputObjectSchema } from './LeaseCreateOrConnectWithoutUtilitiesInput.schema';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUncheckedCreateNestedOneWithoutUtilitiesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LeaseCreateWithoutUtilitiesInputObjectSchema),
          z.lazy(() => LeaseUncheckedCreateWithoutUtilitiesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => LeaseCreateOrConnectWithoutUtilitiesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => LeaseWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const LeaseUncheckedCreateNestedOneWithoutUtilitiesInputObjectSchema =
  Schema;
