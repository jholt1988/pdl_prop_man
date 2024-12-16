import { z } from 'zod';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantRelationFilter> = z
  .object({
    is: z
      .lazy(() => TenantWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TenantWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TenantRelationFilterObjectSchema = Schema;
