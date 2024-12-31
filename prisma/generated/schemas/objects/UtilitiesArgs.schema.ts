import { z } from 'zod';
import { UtilitiesIncludeObjectSchema } from './UtilitiesInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesArgs> = z
  .object({
    include: z.lazy(() => UtilitiesIncludeObjectSchema).optional(),
  })
  .strict();

export const UtilitiesArgsObjectSchema = Schema;
