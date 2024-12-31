import { z } from 'zod';
import { RepairRequestFindManySchema } from '../findManyRepairRequest.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VendorInclude> = z
  .object({
    repairRequests: z
      .union([z.boolean(), z.lazy(() => RepairRequestFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const VendorIncludeObjectSchema = Schema;
