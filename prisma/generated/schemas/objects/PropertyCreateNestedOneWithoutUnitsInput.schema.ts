import { z } from 'zod';
import { PropertyCreateWithoutUnitsInputObjectSchema } from './PropertyCreateWithoutUnitsInput.schema';
import { PropertyUncheckedCreateWithoutUnitsInputObjectSchema } from './PropertyUncheckedCreateWithoutUnitsInput.schema';
import { PropertyCreateOrConnectWithoutUnitsInputObjectSchema } from './PropertyCreateOrConnectWithoutUnitsInput.schema';
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyCreateNestedOneWithoutUnitsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PropertyCreateWithoutUnitsInputObjectSchema),
        z.lazy(() => PropertyUncheckedCreateWithoutUnitsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PropertyCreateOrConnectWithoutUnitsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PropertyCreateNestedOneWithoutUnitsInputObjectSchema = Schema;
