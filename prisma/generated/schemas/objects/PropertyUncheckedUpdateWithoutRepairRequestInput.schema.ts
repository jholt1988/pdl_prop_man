import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UnitUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema } from './UnitUncheckedUpdateManyWithoutPropertyNestedInput.schema';
import { LeaseUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema } from './LeaseUncheckedUpdateManyWithoutPropertyNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUncheckedUpdateWithoutRepairRequestInput> =
  z
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
      units: z
        .lazy(
          () => UnitUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema,
        )
        .optional(),
      Lease: z
        .lazy(
          () => LeaseUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PropertyUncheckedUpdateWithoutRepairRequestInputObjectSchema =
  Schema;
