import { z } from 'zod';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseUpdateWithoutPropertyInputObjectSchema } from './LeaseUpdateWithoutPropertyInput.schema';
import { LeaseUncheckedUpdateWithoutPropertyInputObjectSchema } from './LeaseUncheckedUpdateWithoutPropertyInput.schema';
import { LeaseCreateWithoutPropertyInputObjectSchema } from './LeaseCreateWithoutPropertyInput.schema';
import { LeaseUncheckedCreateWithoutPropertyInputObjectSchema } from './LeaseUncheckedCreateWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpsertWithWhereUniqueWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => LeaseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => LeaseUpdateWithoutPropertyInputObjectSchema),
        z.lazy(() => LeaseUncheckedUpdateWithoutPropertyInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => LeaseCreateWithoutPropertyInputObjectSchema),
        z.lazy(() => LeaseUncheckedCreateWithoutPropertyInputObjectSchema),
      ]),
    })
    .strict();

export const LeaseUpsertWithWhereUniqueWithoutPropertyInputObjectSchema =
  Schema;
