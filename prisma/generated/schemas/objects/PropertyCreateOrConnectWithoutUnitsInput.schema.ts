import { z } from 'zod';
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema';
import { PropertyCreateWithoutUnitsInputObjectSchema } from './PropertyCreateWithoutUnitsInput.schema';
import { PropertyUncheckedCreateWithoutUnitsInputObjectSchema } from './PropertyUncheckedCreateWithoutUnitsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyCreateOrConnectWithoutUnitsInput> = z
  .object({
    where: z.lazy(() => PropertyWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutUnitsInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutUnitsInputObjectSchema),
    ]),
  })
  .strict();

export const PropertyCreateOrConnectWithoutUnitsInputObjectSchema = Schema;
