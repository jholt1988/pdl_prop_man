import { z } from 'zod';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { LeaseUpdateOneWithoutUtilitiesNestedInputObjectSchema } from './LeaseUpdateOneWithoutUtilitiesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesUpdateInput> = z
  .object({
    electric: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    gas: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    water: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    lease: z
      .lazy(() => LeaseUpdateOneWithoutUtilitiesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UtilitiesUpdateInputObjectSchema = Schema;
