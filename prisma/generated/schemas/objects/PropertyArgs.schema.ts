import { z } from 'zod';
import { PropertyIncludeObjectSchema } from './PropertyInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyArgs> = z
  .object({
    include: z.lazy(() => PropertyIncludeObjectSchema).optional(),
  })
  .strict();

export const PropertyArgsObjectSchema = Schema;
