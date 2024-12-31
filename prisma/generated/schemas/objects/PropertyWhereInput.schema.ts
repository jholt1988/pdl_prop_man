import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { LeaseListRelationFilterObjectSchema } from './LeaseListRelationFilter.schema';
import { RepairRequestListRelationFilterObjectSchema } from './RepairRequestListRelationFilter.schema';
import { UnitListRelationFilterObjectSchema } from './UnitListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PropertyWhereInputObjectSchema),
        z.lazy(() => PropertyWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PropertyWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PropertyWhereInputObjectSchema),
        z.lazy(() => PropertyWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    address: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    numUnits: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Lease: z.lazy(() => LeaseListRelationFilterObjectSchema).optional(),
    RepairRequest: z
      .lazy(() => RepairRequestListRelationFilterObjectSchema)
      .optional(),
    units: z.lazy(() => UnitListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const PropertyWhereInputObjectSchema = Schema;
