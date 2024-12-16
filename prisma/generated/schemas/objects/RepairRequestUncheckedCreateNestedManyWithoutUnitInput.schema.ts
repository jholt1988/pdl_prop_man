import { z } from 'zod';
import { RepairRequestCreateWithoutUnitInputObjectSchema } from './RepairRequestCreateWithoutUnitInput.schema';
import { RepairRequestUncheckedCreateWithoutUnitInputObjectSchema } from './RepairRequestUncheckedCreateWithoutUnitInput.schema';
import { RepairRequestCreateOrConnectWithoutUnitInputObjectSchema } from './RepairRequestCreateOrConnectWithoutUnitInput.schema';
import { RepairRequestCreateManyUnitInputEnvelopeObjectSchema } from './RepairRequestCreateManyUnitInputEnvelope.schema';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUncheckedCreateNestedManyWithoutUnitInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RepairRequestCreateWithoutUnitInputObjectSchema),
          z.lazy(() => RepairRequestCreateWithoutUnitInputObjectSchema).array(),
          z.lazy(
            () => RepairRequestUncheckedCreateWithoutUnitInputObjectSchema,
          ),
          z
            .lazy(
              () => RepairRequestUncheckedCreateWithoutUnitInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RepairRequestCreateOrConnectWithoutUnitInputObjectSchema,
          ),
          z
            .lazy(
              () => RepairRequestCreateOrConnectWithoutUnitInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RepairRequestCreateManyUnitInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RepairRequestUncheckedCreateNestedManyWithoutUnitInputObjectSchema =
  Schema;
