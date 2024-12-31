import { z } from 'zod';
import { VendorIncludeObjectSchema } from './VendorInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VendorArgs> = z
  .object({
    include: z.lazy(() => VendorIncludeObjectSchema).optional(),
  })
  .strict();

export const VendorArgsObjectSchema = Schema;
