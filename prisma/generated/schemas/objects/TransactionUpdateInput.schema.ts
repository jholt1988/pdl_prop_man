import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { LeaseUpdateOneRequiredWithoutTransactionNestedInputObjectSchema } from './LeaseUpdateOneRequiredWithoutTransactionNestedInput.schema';
import { TenantUpdateOneRequiredWithoutTransactionNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutTransactionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateInput> = z
  .object({
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    amount: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    date: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    lease: z
      .lazy(
        () => LeaseUpdateOneRequiredWithoutTransactionNestedInputObjectSchema,
      )
      .optional(),
    tenant: z
      .lazy(
        () => TenantUpdateOneRequiredWithoutTransactionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TransactionUpdateInputObjectSchema = Schema;
