import { z } from 'zod';
import { RepairRequestCreateWithoutPropertyInputObjectSchema } from './RepairRequestCreateWithoutPropertyInput.schema';
import { RepairRequestUncheckedCreateWithoutPropertyInputObjectSchema } from './RepairRequestUncheckedCreateWithoutPropertyInput.schema';
import { RepairRequestCreateOrConnectWithoutPropertyInputObjectSchema } from './RepairRequestCreateOrConnectWithoutPropertyInput.schema';
import { RepairRequestCreateManyPropertyInputEnvelopeObjectSchema } from './RepairRequestCreateManyPropertyInputEnvelope.schema';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUncheckedCreateNestedManyWithoutPropertyInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RepairRequestCreateWithoutPropertyInputObjectSchema),
          z
            .lazy(() => RepairRequestCreateWithoutPropertyInputObjectSchema)
            .array(),
          z.lazy(
            () => RepairRequestUncheckedCreateWithoutPropertyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RepairRequestUncheckedCreateWithoutPropertyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RepairRequestCreateOrConnectWithoutPropertyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RepairRequestCreateOrConnectWithoutPropertyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RepairRequestCreateManyPropertyInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RepairRequestUncheckedCreateNestedManyWithoutPropertyInputObjectSchema =
  Schema;
