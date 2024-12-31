import { z } from 'zod';
import { UnitIncludeObjectSchema } from './UnitInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitArgs> = z
  .object({
    include: z.lazy(() => UnitIncludeObjectSchema).optional(),
  })
  .strict();

export const UnitArgsObjectSchema = Schema;
