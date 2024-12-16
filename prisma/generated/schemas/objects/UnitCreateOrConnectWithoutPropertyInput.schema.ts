import { z } from 'zod';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';
import { UnitCreateWithoutPropertyInputObjectSchema } from './UnitCreateWithoutPropertyInput.schema';
import { UnitUncheckedCreateWithoutPropertyInputObjectSchema } from './UnitUncheckedCreateWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateOrConnectWithoutPropertyInput> = z
  .object({
    where: z.lazy(() => UnitWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UnitCreateWithoutPropertyInputObjectSchema),
      z.lazy(() => UnitUncheckedCreateWithoutPropertyInputObjectSchema),
    ]),
  })
  .strict();

export const UnitCreateOrConnectWithoutPropertyInputObjectSchema = Schema;
