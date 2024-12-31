import { z } from 'zod';
import { TenantIncludeObjectSchema } from './TenantInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantArgs> = z
  .object({
    include: z.lazy(() => TenantIncludeObjectSchema).optional(),
  })
  .strict();

export const TenantArgsObjectSchema = Schema;
