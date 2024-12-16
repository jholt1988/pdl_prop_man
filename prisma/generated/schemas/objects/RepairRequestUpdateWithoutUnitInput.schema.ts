import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PropertyUpdateOneRequiredWithoutRepairRequestNestedInputObjectSchema } from './PropertyUpdateOneRequiredWithoutRepairRequestNestedInput.schema';
import { VendorUpdateOneRequiredWithoutRepairRequestsNestedInputObjectSchema } from './VendorUpdateOneRequiredWithoutRepairRequestsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUpdateWithoutUnitInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    phone: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    issue: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    status: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    property: z
      .lazy(
        () =>
          PropertyUpdateOneRequiredWithoutRepairRequestNestedInputObjectSchema,
      )
      .optional(),
    vendor: z
      .lazy(
        () =>
          VendorUpdateOneRequiredWithoutRepairRequestsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RepairRequestUpdateWithoutUnitInputObjectSchema = Schema;
