import { z } from 'zod';
import { LeaseCreateWithoutUtilitiesInputObjectSchema } from './LeaseCreateWithoutUtilitiesInput.schema';
import { LeaseUncheckedCreateWithoutUtilitiesInputObjectSchema } from './LeaseUncheckedCreateWithoutUtilitiesInput.schema';
import { LeaseCreateOrConnectWithoutUtilitiesInputObjectSchema } from './LeaseCreateOrConnectWithoutUtilitiesInput.schema';
import { LeaseUpsertWithoutUtilitiesInputObjectSchema } from './LeaseUpsertWithoutUtilitiesInput.schema';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseUpdateWithoutUtilitiesInputObjectSchema } from './LeaseUpdateWithoutUtilitiesInput.schema';
import { LeaseUncheckedUpdateWithoutUtilitiesInputObjectSchema } from './LeaseUncheckedUpdateWithoutUtilitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpdateOneWithoutUtilitiesNestedInput> = z
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
    upsert: z
      .lazy(() => LeaseUpsertWithoutUtilitiesInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => LeaseWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => LeaseUpdateWithoutUtilitiesInputObjectSchema),
        z.lazy(() => LeaseUncheckedUpdateWithoutUtilitiesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LeaseUpdateOneWithoutUtilitiesNestedInputObjectSchema = Schema;
