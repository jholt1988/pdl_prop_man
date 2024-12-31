import { z } from 'zod';
import { PropertyArgsObjectSchema } from './PropertyArgs.schema';
import { UnitArgsObjectSchema } from './UnitArgs.schema';
import { VendorArgsObjectSchema } from './VendorArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestInclude> = z
  .object({
    property: z
      .union([z.boolean(), z.lazy(() => PropertyArgsObjectSchema)])
      .optional(),
    unit: z.union([z.boolean(), z.lazy(() => UnitArgsObjectSchema)]).optional(),
    vendor: z
      .union([z.boolean(), z.lazy(() => VendorArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const RepairRequestIncludeObjectSchema = Schema;
