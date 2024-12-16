import { z } from 'zod';
import { PropertyCreateWithoutRepairRequestInputObjectSchema } from './PropertyCreateWithoutRepairRequestInput.schema';
import { PropertyUncheckedCreateWithoutRepairRequestInputObjectSchema } from './PropertyUncheckedCreateWithoutRepairRequestInput.schema';
import { PropertyCreateOrConnectWithoutRepairRequestInputObjectSchema } from './PropertyCreateOrConnectWithoutRepairRequestInput.schema';
import { PropertyUpsertWithoutRepairRequestInputObjectSchema } from './PropertyUpsertWithoutRepairRequestInput.schema';
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema';
import { PropertyUpdateWithoutRepairRequestInputObjectSchema } from './PropertyUpdateWithoutRepairRequestInput.schema';
import { PropertyUncheckedUpdateWithoutRepairRequestInputObjectSchema } from './PropertyUncheckedUpdateWithoutRepairRequestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUpdateOneRequiredWithoutRepairRequestNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PropertyCreateWithoutRepairRequestInputObjectSchema),
          z.lazy(
            () => PropertyUncheckedCreateWithoutRepairRequestInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => PropertyCreateOrConnectWithoutRepairRequestInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => PropertyUpsertWithoutRepairRequestInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PropertyUpdateWithoutRepairRequestInputObjectSchema),
          z.lazy(
            () => PropertyUncheckedUpdateWithoutRepairRequestInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PropertyUpdateOneRequiredWithoutRepairRequestNestedInputObjectSchema =
  Schema;
