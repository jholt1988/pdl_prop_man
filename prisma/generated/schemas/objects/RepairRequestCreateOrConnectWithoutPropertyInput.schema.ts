import { z } from 'zod';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';
import { RepairRequestCreateWithoutPropertyInputObjectSchema } from './RepairRequestCreateWithoutPropertyInput.schema';
import { RepairRequestUncheckedCreateWithoutPropertyInputObjectSchema } from './RepairRequestUncheckedCreateWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestCreateOrConnectWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RepairRequestCreateWithoutPropertyInputObjectSchema),
        z.lazy(
          () => RepairRequestUncheckedCreateWithoutPropertyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RepairRequestCreateOrConnectWithoutPropertyInputObjectSchema =
  Schema;
