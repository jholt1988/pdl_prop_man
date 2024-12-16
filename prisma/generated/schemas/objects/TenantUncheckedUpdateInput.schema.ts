import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LeaseUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './LeaseUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { TransactionUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './TransactionUncheckedUpdateManyWithoutTenantNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    firstName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    lastName: z
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
    ssn: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    leases: z
      .lazy(() => LeaseUncheckedUpdateManyWithoutTenantNestedInputObjectSchema)
      .optional(),
    Transaction: z
      .lazy(
        () =>
          TransactionUncheckedUpdateManyWithoutTenantNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TenantUncheckedUpdateInputObjectSchema = Schema;
