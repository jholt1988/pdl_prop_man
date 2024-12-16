import { z } from 'zod';
import { UnitWhereInputObjectSchema } from './UnitWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitListRelationFilter> = z
  .object({
    every: z.lazy(() => UnitWhereInputObjectSchema).optional(),
    some: z.lazy(() => UnitWhereInputObjectSchema).optional(),
    none: z.lazy(() => UnitWhereInputObjectSchema).optional(),
  })
  .strict();

export const UnitListRelationFilterObjectSchema = Schema;
