import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { RepairRequestListRelationFilterObjectSchema } from './RepairRequestListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VendorWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VendorWhereInputObjectSchema),
        z.lazy(() => VendorWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VendorWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VendorWhereInputObjectSchema),
        z.lazy(() => VendorWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    phone: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    address: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    repairRequests: z
      .lazy(() => RepairRequestListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const VendorWhereInputObjectSchema = Schema;
