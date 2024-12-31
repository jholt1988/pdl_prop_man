import { z } from 'zod';
import { LeaseFindManySchema } from '../findManyLease.schema';
import { RepairRequestFindManySchema } from '../findManyRepairRequest.schema';
import { PropertyArgsObjectSchema } from './PropertyArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitInclude> = z
  .object({
    leases: z
      .union([z.boolean(), z.lazy(() => LeaseFindManySchema)])
      .optional(),
    RepairRequest: z
      .union([z.boolean(), z.lazy(() => RepairRequestFindManySchema)])
      .optional(),
    property: z
      .union([z.boolean(), z.lazy(() => PropertyArgsObjectSchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const UnitIncludeObjectSchema = Schema;
