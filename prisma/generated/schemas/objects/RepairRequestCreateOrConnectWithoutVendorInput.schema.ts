import { z } from 'zod';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';
import { RepairRequestCreateWithoutVendorInputObjectSchema } from './RepairRequestCreateWithoutVendorInput.schema';
import { RepairRequestUncheckedCreateWithoutVendorInputObjectSchema } from './RepairRequestUncheckedCreateWithoutVendorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestCreateOrConnectWithoutVendorInput> =
  z
    .object({
      where: z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RepairRequestCreateWithoutVendorInputObjectSchema),
        z.lazy(
          () => RepairRequestUncheckedCreateWithoutVendorInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RepairRequestCreateOrConnectWithoutVendorInputObjectSchema =
  Schema;
