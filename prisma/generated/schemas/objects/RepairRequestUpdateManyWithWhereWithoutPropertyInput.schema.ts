import { z } from 'zod';
import { RepairRequestScalarWhereInputObjectSchema } from './RepairRequestScalarWhereInput.schema';
import { RepairRequestUpdateManyMutationInputObjectSchema } from './RepairRequestUpdateManyMutationInput.schema';
import { RepairRequestUncheckedUpdateManyWithoutRepairRequestInputObjectSchema } from './RepairRequestUncheckedUpdateManyWithoutRepairRequestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUpdateManyWithWhereWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => RepairRequestScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RepairRequestUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            RepairRequestUncheckedUpdateManyWithoutRepairRequestInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RepairRequestUpdateManyWithWhereWithoutPropertyInputObjectSchema =
  Schema;
