import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { TenantUpdateOneRequiredWithoutLeasesNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutLeasesNestedInput.schema';
import { PropertyUpdateOneRequiredWithoutLeaseNestedInputObjectSchema } from './PropertyUpdateOneRequiredWithoutLeaseNestedInput.schema';
import { UtilitiesUpdateOneRequiredWithoutLeaseNestedInputObjectSchema } from './UtilitiesUpdateOneRequiredWithoutLeaseNestedInput.schema';
import { TransactionUpdateManyWithoutLeaseNestedInputObjectSchema } from './TransactionUpdateManyWithoutLeaseNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpdateWithoutUnitInput> = z
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
    tenant: z
      .lazy(() => TenantUpdateOneRequiredWithoutLeasesNestedInputObjectSchema)
      .optional(),
    property: z
      .lazy(() => PropertyUpdateOneRequiredWithoutLeaseNestedInputObjectSchema)
      .optional(),
    utilities: z
      .lazy(() => UtilitiesUpdateOneRequiredWithoutLeaseNestedInputObjectSchema)
      .optional(),
    Transaction: z
      .lazy(() => TransactionUpdateManyWithoutLeaseNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const LeaseUpdateWithoutUnitInputObjectSchema = Schema;
