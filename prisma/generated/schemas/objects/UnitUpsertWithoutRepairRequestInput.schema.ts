import { z } from 'zod';
import { UnitUpdateWithoutRepairRequestInputObjectSchema } from './UnitUpdateWithoutRepairRequestInput.schema';
import { UnitUncheckedUpdateWithoutRepairRequestInputObjectSchema } from './UnitUncheckedUpdateWithoutRepairRequestInput.schema';
import { UnitCreateWithoutRepairRequestInputObjectSchema } from './UnitCreateWithoutRepairRequestInput.schema';
import { UnitUncheckedCreateWithoutRepairRequestInputObjectSchema } from './UnitUncheckedCreateWithoutRepairRequestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUpsertWithoutRepairRequestInput> = z
  .object({
    update: z.union([
      z.lazy(() => UnitUpdateWithoutRepairRequestInputObjectSchema),
      z.lazy(() => UnitUncheckedUpdateWithoutRepairRequestInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UnitCreateWithoutRepairRequestInputObjectSchema),
      z.lazy(() => UnitUncheckedCreateWithoutRepairRequestInputObjectSchema),
    ]),
  })
  .strict();

export const UnitUpsertWithoutRepairRequestInputObjectSchema = Schema;
