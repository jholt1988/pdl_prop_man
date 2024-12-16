import { z } from 'zod';
import { VendorUpdateWithoutRepairRequestsInputObjectSchema } from './VendorUpdateWithoutRepairRequestsInput.schema';
import { VendorUncheckedUpdateWithoutRepairRequestsInputObjectSchema } from './VendorUncheckedUpdateWithoutRepairRequestsInput.schema';
import { VendorCreateWithoutRepairRequestsInputObjectSchema } from './VendorCreateWithoutRepairRequestsInput.schema';
import { VendorUncheckedCreateWithoutRepairRequestsInputObjectSchema } from './VendorUncheckedCreateWithoutRepairRequestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VendorUpsertWithoutRepairRequestsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VendorUpdateWithoutRepairRequestsInputObjectSchema),
      z.lazy(() => VendorUncheckedUpdateWithoutRepairRequestsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VendorCreateWithoutRepairRequestsInputObjectSchema),
      z.lazy(() => VendorUncheckedCreateWithoutRepairRequestsInputObjectSchema),
    ]),
  })
  .strict();

export const VendorUpsertWithoutRepairRequestsInputObjectSchema = Schema;
