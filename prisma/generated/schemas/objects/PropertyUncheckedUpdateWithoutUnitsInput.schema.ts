import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LeaseUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema } from './LeaseUncheckedUpdateManyWithoutPropertyNestedInput.schema';
import { RepairRequestUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema } from './RepairRequestUncheckedUpdateManyWithoutPropertyNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUncheckedUpdateWithoutUnitsInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
    Lease: z
      .lazy(
        () => LeaseUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema,
      )
      .optional(),
    RepairRequest: z
      .lazy(
        () =>
          RepairRequestUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PropertyUncheckedUpdateWithoutUnitsInputObjectSchema = Schema;
