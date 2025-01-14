import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { PropertyUpdateOneRequiredWithoutLeaseNestedInputObjectSchema } from './PropertyUpdateOneRequiredWithoutLeaseNestedInput.schema';
import { TenantUpdateOneRequiredWithoutLeasesNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutLeasesNestedInput.schema';
import { UnitUpdateOneRequiredWithoutLeasesNestedInputObjectSchema } from './UnitUpdateOneRequiredWithoutLeasesNestedInput.schema';
import { UtilitiesUpdateOneWithoutLeaseNestedInputObjectSchema } from './UtilitiesUpdateOneWithoutLeaseNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpdateWithoutTransactionInput> = z
  .object({
    termOfLease: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    beginDate: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    endDate: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    monthlyRent: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    deposit: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    petDeposit: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    utilitiesId: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    property: z
      .lazy(() => PropertyUpdateOneRequiredWithoutLeaseNestedInputObjectSchema)
      .optional(),
    tenant: z
      .lazy(() => TenantUpdateOneRequiredWithoutLeasesNestedInputObjectSchema)
      .optional(),
    unit: z
      .lazy(() => UnitUpdateOneRequiredWithoutLeasesNestedInputObjectSchema)
      .optional(),
    utilities: z
      .lazy(() => UtilitiesUpdateOneWithoutLeaseNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const LeaseUpdateWithoutTransactionInputObjectSchema = Schema;
