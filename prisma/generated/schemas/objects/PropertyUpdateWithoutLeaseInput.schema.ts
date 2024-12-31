import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { RepairRequestUpdateManyWithoutPropertyNestedInputObjectSchema } from './RepairRequestUpdateManyWithoutPropertyNestedInput.schema';
import { UnitUpdateManyWithoutPropertyNestedInputObjectSchema } from './UnitUpdateManyWithoutPropertyNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUpdateWithoutLeaseInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    address: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    numUnits: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    RepairRequest: z
      .lazy(() => RepairRequestUpdateManyWithoutPropertyNestedInputObjectSchema)
      .optional(),
    units: z
      .lazy(() => UnitUpdateManyWithoutPropertyNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyUpdateWithoutLeaseInputObjectSchema = Schema;
