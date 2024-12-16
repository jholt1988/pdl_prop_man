import { z } from 'zod';
import { VendorWhereUniqueInputObjectSchema } from './VendorWhereUniqueInput.schema';
import { VendorCreateWithoutRepairRequestsInputObjectSchema } from './VendorCreateWithoutRepairRequestsInput.schema';
import { VendorUncheckedCreateWithoutRepairRequestsInputObjectSchema } from './VendorUncheckedCreateWithoutRepairRequestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VendorCreateOrConnectWithoutRepairRequestsInput> =
  z
    .object({
      where: z.lazy(() => VendorWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => VendorCreateWithoutRepairRequestsInputObjectSchema),
        z.lazy(
          () => VendorUncheckedCreateWithoutRepairRequestsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VendorCreateOrConnectWithoutRepairRequestsInputObjectSchema =
  Schema;
