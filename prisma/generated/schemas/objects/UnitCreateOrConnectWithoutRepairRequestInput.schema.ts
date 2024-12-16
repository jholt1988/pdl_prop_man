import { z } from 'zod';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';
import { UnitCreateWithoutRepairRequestInputObjectSchema } from './UnitCreateWithoutRepairRequestInput.schema';
import { UnitUncheckedCreateWithoutRepairRequestInputObjectSchema } from './UnitUncheckedCreateWithoutRepairRequestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateOrConnectWithoutRepairRequestInput> = z
  .object({
    where: z.lazy(() => UnitWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UnitCreateWithoutRepairRequestInputObjectSchema),
      z.lazy(() => UnitUncheckedCreateWithoutRepairRequestInputObjectSchema),
    ]),
  })
  .strict();

export const UnitCreateOrConnectWithoutRepairRequestInputObjectSchema = Schema;
