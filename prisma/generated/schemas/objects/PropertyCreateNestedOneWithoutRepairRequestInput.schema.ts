import { z } from 'zod';
import { PropertyCreateWithoutRepairRequestInputObjectSchema } from './PropertyCreateWithoutRepairRequestInput.schema';
import { PropertyUncheckedCreateWithoutRepairRequestInputObjectSchema } from './PropertyUncheckedCreateWithoutRepairRequestInput.schema';
import { PropertyCreateOrConnectWithoutRepairRequestInputObjectSchema } from './PropertyCreateOrConnectWithoutRepairRequestInput.schema';
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyCreateNestedOneWithoutRepairRequestInput> =
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
      connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const PropertyCreateNestedOneWithoutRepairRequestInputObjectSchema =
  Schema;
