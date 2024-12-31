import { z } from 'zod';
import { LeaseFindManySchema } from '../findManyLease.schema';
import { RepairRequestFindManySchema } from '../findManyRepairRequest.schema';
import { UnitFindManySchema } from '../findManyUnit.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyInclude> = z
  .object({
    Lease: z.union([z.boolean(), z.lazy(() => LeaseFindManySchema)]).optional(),
    RepairRequest: z
      .union([z.boolean(), z.lazy(() => RepairRequestFindManySchema)])
      .optional(),
    units: z.union([z.boolean(), z.lazy(() => UnitFindManySchema)]).optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const PropertyIncludeObjectSchema = Schema;
