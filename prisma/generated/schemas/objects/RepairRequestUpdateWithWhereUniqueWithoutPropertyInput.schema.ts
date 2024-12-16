import { z } from 'zod';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';
import { RepairRequestUpdateWithoutPropertyInputObjectSchema } from './RepairRequestUpdateWithoutPropertyInput.schema';
import { RepairRequestUncheckedUpdateWithoutPropertyInputObjectSchema } from './RepairRequestUncheckedUpdateWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUpdateWithWhereUniqueWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RepairRequestUpdateWithoutPropertyInputObjectSchema),
        z.lazy(
          () => RepairRequestUncheckedUpdateWithoutPropertyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RepairRequestUpdateWithWhereUniqueWithoutPropertyInputObjectSchema =
  Schema;
