import { z } from 'zod';
import { LeaseArgsObjectSchema } from './LeaseArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesInclude> = z
  .object({
    lease: z
      .union([z.boolean(), z.lazy(() => LeaseArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UtilitiesIncludeObjectSchema = Schema;
