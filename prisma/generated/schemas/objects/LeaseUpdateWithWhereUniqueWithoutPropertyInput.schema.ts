import { z } from 'zod';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseUpdateWithoutPropertyInputObjectSchema } from './LeaseUpdateWithoutPropertyInput.schema';
import { LeaseUncheckedUpdateWithoutPropertyInputObjectSchema } from './LeaseUncheckedUpdateWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpdateWithWhereUniqueWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => LeaseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => LeaseUpdateWithoutPropertyInputObjectSchema),
        z.lazy(() => LeaseUncheckedUpdateWithoutPropertyInputObjectSchema),
      ]),
    })
    .strict();

export const LeaseUpdateWithWhereUniqueWithoutPropertyInputObjectSchema =
  Schema;
