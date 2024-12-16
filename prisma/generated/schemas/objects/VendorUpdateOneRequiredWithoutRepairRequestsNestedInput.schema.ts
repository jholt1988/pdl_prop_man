import { z } from 'zod';
import { VendorCreateWithoutRepairRequestsInputObjectSchema } from './VendorCreateWithoutRepairRequestsInput.schema';
import { VendorUncheckedCreateWithoutRepairRequestsInputObjectSchema } from './VendorUncheckedCreateWithoutRepairRequestsInput.schema';
import { VendorCreateOrConnectWithoutRepairRequestsInputObjectSchema } from './VendorCreateOrConnectWithoutRepairRequestsInput.schema';
import { VendorUpsertWithoutRepairRequestsInputObjectSchema } from './VendorUpsertWithoutRepairRequestsInput.schema';
import { VendorWhereUniqueInputObjectSchema } from './VendorWhereUniqueInput.schema';
import { VendorUpdateWithoutRepairRequestsInputObjectSchema } from './VendorUpdateWithoutRepairRequestsInput.schema';
import { VendorUncheckedUpdateWithoutRepairRequestsInputObjectSchema } from './VendorUncheckedUpdateWithoutRepairRequestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VendorUpdateOneRequiredWithoutRepairRequestsNestedInput> =
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
      upsert: z
        .lazy(() => VendorUpsertWithoutRepairRequestsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => VendorWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => VendorUpdateWithoutRepairRequestsInputObjectSchema),
          z.lazy(
            () => VendorUncheckedUpdateWithoutRepairRequestsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const VendorUpdateOneRequiredWithoutRepairRequestsNestedInputObjectSchema =
  Schema;
