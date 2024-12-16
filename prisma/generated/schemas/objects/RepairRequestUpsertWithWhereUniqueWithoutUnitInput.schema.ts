import { z } from 'zod';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';
import { RepairRequestUpdateWithoutUnitInputObjectSchema } from './RepairRequestUpdateWithoutUnitInput.schema';
import { RepairRequestUncheckedUpdateWithoutUnitInputObjectSchema } from './RepairRequestUncheckedUpdateWithoutUnitInput.schema';
import { RepairRequestCreateWithoutUnitInputObjectSchema } from './RepairRequestCreateWithoutUnitInput.schema';
import { RepairRequestUncheckedCreateWithoutUnitInputObjectSchema } from './RepairRequestUncheckedCreateWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUpsertWithWhereUniqueWithoutUnitInput> =
  z
    .object({
      where: z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RepairRequestUpdateWithoutUnitInputObjectSchema),
        z.lazy(() => RepairRequestUncheckedUpdateWithoutUnitInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RepairRequestCreateWithoutUnitInputObjectSchema),
        z.lazy(() => RepairRequestUncheckedCreateWithoutUnitInputObjectSchema),
      ]),
    })
    .strict();

export const RepairRequestUpsertWithWhereUniqueWithoutUnitInputObjectSchema =
  Schema;
