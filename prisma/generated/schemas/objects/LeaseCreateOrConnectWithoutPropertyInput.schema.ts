import { z } from 'zod';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseCreateWithoutPropertyInputObjectSchema } from './LeaseCreateWithoutPropertyInput.schema';
import { LeaseUncheckedCreateWithoutPropertyInputObjectSchema } from './LeaseUncheckedCreateWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateOrConnectWithoutPropertyInput> = z
  .object({
    where: z.lazy(() => LeaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LeaseCreateWithoutPropertyInputObjectSchema),
      z.lazy(() => LeaseUncheckedCreateWithoutPropertyInputObjectSchema),
    ]),
  })
  .strict();

export const LeaseCreateOrConnectWithoutPropertyInputObjectSchema = Schema;
