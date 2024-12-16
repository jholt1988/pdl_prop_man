import { z } from 'zod';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';
import { RepairRequestUpdateWithoutVendorInputObjectSchema } from './RepairRequestUpdateWithoutVendorInput.schema';
import { RepairRequestUncheckedUpdateWithoutVendorInputObjectSchema } from './RepairRequestUncheckedUpdateWithoutVendorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUpdateWithWhereUniqueWithoutVendorInput> =
  z
    .object({
      where: z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RepairRequestUpdateWithoutVendorInputObjectSchema),
        z.lazy(
          () => RepairRequestUncheckedUpdateWithoutVendorInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RepairRequestUpdateWithWhereUniqueWithoutVendorInputObjectSchema =
  Schema;
