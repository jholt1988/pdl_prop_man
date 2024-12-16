import { z } from 'zod';
import { UnitCreateWithoutRepairRequestInputObjectSchema } from './UnitCreateWithoutRepairRequestInput.schema';
import { UnitUncheckedCreateWithoutRepairRequestInputObjectSchema } from './UnitUncheckedCreateWithoutRepairRequestInput.schema';
import { UnitCreateOrConnectWithoutRepairRequestInputObjectSchema } from './UnitCreateOrConnectWithoutRepairRequestInput.schema';
import { UnitUpsertWithoutRepairRequestInputObjectSchema } from './UnitUpsertWithoutRepairRequestInput.schema';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';
import { UnitUpdateWithoutRepairRequestInputObjectSchema } from './UnitUpdateWithoutRepairRequestInput.schema';
import { UnitUncheckedUpdateWithoutRepairRequestInputObjectSchema } from './UnitUncheckedUpdateWithoutRepairRequestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUpdateOneRequiredWithoutRepairRequestNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UnitCreateWithoutRepairRequestInputObjectSchema),
          z.lazy(
            () => UnitUncheckedCreateWithoutRepairRequestInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UnitCreateOrConnectWithoutRepairRequestInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UnitUpsertWithoutRepairRequestInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UnitWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UnitUpdateWithoutRepairRequestInputObjectSchema),
          z.lazy(
            () => UnitUncheckedUpdateWithoutRepairRequestInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UnitUpdateOneRequiredWithoutRepairRequestNestedInputObjectSchema =
  Schema;
