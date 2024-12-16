import { z } from 'zod';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';
import { UnitCreateWithoutLeasesInputObjectSchema } from './UnitCreateWithoutLeasesInput.schema';
import { UnitUncheckedCreateWithoutLeasesInputObjectSchema } from './UnitUncheckedCreateWithoutLeasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateOrConnectWithoutLeasesInput> = z
  .object({
    where: z.lazy(() => UnitWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UnitCreateWithoutLeasesInputObjectSchema),
      z.lazy(() => UnitUncheckedCreateWithoutLeasesInputObjectSchema),
    ]),
  })
  .strict();

export const UnitCreateOrConnectWithoutLeasesInputObjectSchema = Schema;
