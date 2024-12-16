import { z } from 'zod';
import { VendorWhereInputObjectSchema } from './VendorWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VendorRelationFilter> = z
  .object({
    is: z
      .lazy(() => VendorWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => VendorWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const VendorRelationFilterObjectSchema = Schema;
