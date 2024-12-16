import { z } from 'zod';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';
import { RepairRequestUpdateWithoutVendorInputObjectSchema } from './RepairRequestUpdateWithoutVendorInput.schema';
import { RepairRequestUncheckedUpdateWithoutVendorInputObjectSchema } from './RepairRequestUncheckedUpdateWithoutVendorInput.schema';
import { RepairRequestCreateWithoutVendorInputObjectSchema } from './RepairRequestCreateWithoutVendorInput.schema';
import { RepairRequestUncheckedCreateWithoutVendorInputObjectSchema } from './RepairRequestUncheckedCreateWithoutVendorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUpsertWithWhereUniqueWithoutVendorInput> =
  z
    .object({
      where: z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RepairRequestUpdateWithoutVendorInputObjectSchema),
        z.lazy(
          () => RepairRequestUncheckedUpdateWithoutVendorInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => RepairRequestCreateWithoutVendorInputObjectSchema),
        z.lazy(
          () => RepairRequestUncheckedCreateWithoutVendorInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RepairRequestUpsertWithWhereUniqueWithoutVendorInputObjectSchema =
  Schema;
