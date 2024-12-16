import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LeaseUncheckedUpdateManyWithoutUnitNestedInputObjectSchema } from './LeaseUncheckedUpdateManyWithoutUnitNestedInput.schema';
import { RepairRequestUncheckedUpdateManyWithoutUnitNestedInputObjectSchema } from './RepairRequestUncheckedUpdateManyWithoutUnitNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUncheckedUpdateWithoutPropertyInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
      .lazy(() => LeaseUncheckedUpdateManyWithoutUnitNestedInputObjectSchema)
      .optional(),
    RepairRequest: z
      .lazy(
        () =>
          RepairRequestUncheckedUpdateManyWithoutUnitNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UnitUncheckedUpdateWithoutPropertyInputObjectSchema = Schema;
