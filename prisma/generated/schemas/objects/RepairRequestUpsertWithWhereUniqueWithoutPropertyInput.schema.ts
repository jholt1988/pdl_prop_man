import { z } from 'zod';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';
import { RepairRequestUpdateWithoutPropertyInputObjectSchema } from './RepairRequestUpdateWithoutPropertyInput.schema';
import { RepairRequestUncheckedUpdateWithoutPropertyInputObjectSchema } from './RepairRequestUncheckedUpdateWithoutPropertyInput.schema';
import { RepairRequestCreateWithoutPropertyInputObjectSchema } from './RepairRequestCreateWithoutPropertyInput.schema';
import { RepairRequestUncheckedCreateWithoutPropertyInputObjectSchema } from './RepairRequestUncheckedCreateWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUpsertWithWhereUniqueWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RepairRequestUpdateWithoutPropertyInputObjectSchema),
        z.lazy(
          () => RepairRequestUncheckedUpdateWithoutPropertyInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => RepairRequestCreateWithoutPropertyInputObjectSchema),
        z.lazy(
          () => RepairRequestUncheckedCreateWithoutPropertyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RepairRequestUpsertWithWhereUniqueWithoutPropertyInputObjectSchema =
  Schema;
