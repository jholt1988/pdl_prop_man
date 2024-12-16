import { z } from 'zod';
import { VendorCreateWithoutRepairRequestsInputObjectSchema } from './VendorCreateWithoutRepairRequestsInput.schema';
import { VendorUncheckedCreateWithoutRepairRequestsInputObjectSchema } from './VendorUncheckedCreateWithoutRepairRequestsInput.schema';
import { VendorCreateOrConnectWithoutRepairRequestsInputObjectSchema } from './VendorCreateOrConnectWithoutRepairRequestsInput.schema';
import { VendorWhereUniqueInputObjectSchema } from './VendorWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VendorCreateNestedOneWithoutRepairRequestsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => VendorCreateWithoutRepairRequestsInputObjectSchema),
          z.lazy(
            () => VendorUncheckedCreateWithoutRepairRequestsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => VendorCreateOrConnectWithoutRepairRequestsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => VendorWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const VendorCreateNestedOneWithoutRepairRequestsInputObjectSchema =
  Schema;
