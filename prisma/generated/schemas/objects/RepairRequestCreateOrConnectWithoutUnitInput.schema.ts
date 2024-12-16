import { z } from 'zod';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';
import { RepairRequestCreateWithoutUnitInputObjectSchema } from './RepairRequestCreateWithoutUnitInput.schema';
import { RepairRequestUncheckedCreateWithoutUnitInputObjectSchema } from './RepairRequestUncheckedCreateWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestCreateOrConnectWithoutUnitInput> = z
  .object({
    where: z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RepairRequestCreateWithoutUnitInputObjectSchema),
      z.lazy(() => RepairRequestUncheckedCreateWithoutUnitInputObjectSchema),
    ]),
  })
  .strict();

export const RepairRequestCreateOrConnectWithoutUnitInputObjectSchema = Schema;
