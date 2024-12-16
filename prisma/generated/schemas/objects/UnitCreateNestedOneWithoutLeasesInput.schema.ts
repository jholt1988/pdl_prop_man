import { z } from 'zod';
import { UnitCreateWithoutLeasesInputObjectSchema } from './UnitCreateWithoutLeasesInput.schema';
import { UnitUncheckedCreateWithoutLeasesInputObjectSchema } from './UnitUncheckedCreateWithoutLeasesInput.schema';
import { UnitCreateOrConnectWithoutLeasesInputObjectSchema } from './UnitCreateOrConnectWithoutLeasesInput.schema';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateNestedOneWithoutLeasesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UnitCreateWithoutLeasesInputObjectSchema),
        z.lazy(() => UnitUncheckedCreateWithoutLeasesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UnitCreateOrConnectWithoutLeasesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UnitWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UnitCreateNestedOneWithoutLeasesInputObjectSchema = Schema;
