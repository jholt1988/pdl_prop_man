import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PropertyUpdateOneRequiredWithoutUnitsNestedInputObjectSchema } from './PropertyUpdateOneRequiredWithoutUnitsNestedInput.schema';
import { RepairRequestUpdateManyWithoutUnitNestedInputObjectSchema } from './RepairRequestUpdateManyWithoutUnitNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUpdateWithoutLeasesInput> = z
  .object({
    unitNumber: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sqft: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    bedrooms: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    bathrooms: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    propertyStatus: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    property: z
      .lazy(() => PropertyUpdateOneRequiredWithoutUnitsNestedInputObjectSchema)
      .optional(),
    RepairRequest: z
      .lazy(() => RepairRequestUpdateManyWithoutUnitNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UnitUpdateWithoutLeasesInputObjectSchema = Schema;
