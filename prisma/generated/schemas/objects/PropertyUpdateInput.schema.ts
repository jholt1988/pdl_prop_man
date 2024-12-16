import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { UnitUpdateManyWithoutPropertyNestedInputObjectSchema } from './UnitUpdateManyWithoutPropertyNestedInput.schema';
import { LeaseUpdateManyWithoutPropertyNestedInputObjectSchema } from './LeaseUpdateManyWithoutPropertyNestedInput.schema';
import { RepairRequestUpdateManyWithoutPropertyNestedInputObjectSchema } from './RepairRequestUpdateManyWithoutPropertyNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUpdateInput> = z
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
    units: z
      .lazy(() => UnitUpdateManyWithoutPropertyNestedInputObjectSchema)
      .optional(),
    Lease: z
      .lazy(() => LeaseUpdateManyWithoutPropertyNestedInputObjectSchema)
      .optional(),
    RepairRequest: z
      .lazy(() => RepairRequestUpdateManyWithoutPropertyNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PropertyUpdateInputObjectSchema = Schema;
