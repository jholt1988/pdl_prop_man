import { z } from 'zod';
import { UnitCreateWithoutRepairRequestInputObjectSchema } from './UnitCreateWithoutRepairRequestInput.schema';
import { UnitUncheckedCreateWithoutRepairRequestInputObjectSchema } from './UnitUncheckedCreateWithoutRepairRequestInput.schema';
import { UnitCreateOrConnectWithoutRepairRequestInputObjectSchema } from './UnitCreateOrConnectWithoutRepairRequestInput.schema';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateNestedOneWithoutRepairRequestInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UnitCreateWithoutRepairRequestInputObjectSchema),
        z.lazy(() => UnitUncheckedCreateWithoutRepairRequestInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UnitCreateOrConnectWithoutRepairRequestInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UnitWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UnitCreateNestedOneWithoutRepairRequestInputObjectSchema = Schema;
