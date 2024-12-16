import { z } from 'zod';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';
import { RepairRequestUpdateWithoutUnitInputObjectSchema } from './RepairRequestUpdateWithoutUnitInput.schema';
import { RepairRequestUncheckedUpdateWithoutUnitInputObjectSchema } from './RepairRequestUncheckedUpdateWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUpdateWithWhereUniqueWithoutUnitInput> =
  z
    .object({
      where: z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RepairRequestUpdateWithoutUnitInputObjectSchema),
        z.lazy(() => RepairRequestUncheckedUpdateWithoutUnitInputObjectSchema),
      ]),
    })
    .strict();

export const RepairRequestUpdateWithWhereUniqueWithoutUnitInputObjectSchema =
  Schema;
