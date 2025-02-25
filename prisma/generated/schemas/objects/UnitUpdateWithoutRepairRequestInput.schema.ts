import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LeaseUpdateManyWithoutUnitNestedInputObjectSchema } from './LeaseUpdateManyWithoutUnitNestedInput.schema';
import { PropertyUpdateOneRequiredWithoutUnitsNestedInputObjectSchema } from './PropertyUpdateOneRequiredWithoutUnitsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUpdateWithoutRepairRequestInput> = z
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
    leases: z
      .lazy(() => LeaseUpdateManyWithoutUnitNestedInputObjectSchema)
      .optional(),
    property: z
      .lazy(() => PropertyUpdateOneRequiredWithoutUnitsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UnitUpdateWithoutRepairRequestInputObjectSchema = Schema;
