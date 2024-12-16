import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { LeaseRelationFilterObjectSchema } from './LeaseRelationFilter.schema';
import { LeaseWhereInputObjectSchema } from './LeaseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UtilitiesWhereInputObjectSchema),
        z.lazy(() => UtilitiesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UtilitiesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UtilitiesWhereInputObjectSchema),
        z.lazy(() => UtilitiesWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    electric: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    gas: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    water: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    leaseId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    lease: z
      .union([
        z.lazy(() => LeaseRelationFilterObjectSchema),
        z.lazy(() => LeaseWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const UtilitiesWhereInputObjectSchema = Schema;
