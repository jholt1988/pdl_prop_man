import { z } from 'zod';
import { RepairRequestScalarWhereInputObjectSchema } from './RepairRequestScalarWhereInput.schema';
import { RepairRequestUpdateManyMutationInputObjectSchema } from './RepairRequestUpdateManyMutationInput.schema';
import { RepairRequestUncheckedUpdateManyWithoutRepairRequestsInputObjectSchema } from './RepairRequestUncheckedUpdateManyWithoutRepairRequestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUpdateManyWithWhereWithoutVendorInput> =
  z
    .object({
      where: z.lazy(() => RepairRequestScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RepairRequestUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            RepairRequestUncheckedUpdateManyWithoutRepairRequestsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RepairRequestUpdateManyWithWhereWithoutVendorInputObjectSchema =
  Schema;
