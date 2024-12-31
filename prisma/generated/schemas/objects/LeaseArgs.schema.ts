import { z } from 'zod';
import { LeaseIncludeObjectSchema } from './LeaseInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseArgs> = z
  .object({
    include: z.lazy(() => LeaseIncludeObjectSchema).optional(),
  })
  .strict();

export const LeaseArgsObjectSchema = Schema;
