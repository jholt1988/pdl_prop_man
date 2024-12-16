import { z } from 'zod';
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema';
import { PropertyCreateWithoutRepairRequestInputObjectSchema } from './PropertyCreateWithoutRepairRequestInput.schema';
import { PropertyUncheckedCreateWithoutRepairRequestInputObjectSchema } from './PropertyUncheckedCreateWithoutRepairRequestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyCreateOrConnectWithoutRepairRequestInput> =
  z
    .object({
      where: z.lazy(() => PropertyWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PropertyCreateWithoutRepairRequestInputObjectSchema),
        z.lazy(
          () => PropertyUncheckedCreateWithoutRepairRequestInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PropertyCreateOrConnectWithoutRepairRequestInputObjectSchema =
  Schema;
