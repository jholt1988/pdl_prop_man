import { z } from 'zod';
import { LeaseCreateWithoutTenantInputObjectSchema } from './LeaseCreateWithoutTenantInput.schema';
import { LeaseUncheckedCreateWithoutTenantInputObjectSchema } from './LeaseUncheckedCreateWithoutTenantInput.schema';
import { LeaseCreateOrConnectWithoutTenantInputObjectSchema } from './LeaseCreateOrConnectWithoutTenantInput.schema';
import { LeaseCreateManyTenantInputEnvelopeObjectSchema } from './LeaseCreateManyTenantInputEnvelope.schema';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUncheckedCreateNestedManyWithoutTenantInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LeaseCreateWithoutTenantInputObjectSchema),
          z.lazy(() => LeaseCreateWithoutTenantInputObjectSchema).array(),
          z.lazy(() => LeaseUncheckedCreateWithoutTenantInputObjectSchema),
          z
            .lazy(() => LeaseUncheckedCreateWithoutTenantInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LeaseCreateOrConnectWithoutTenantInputObjectSchema),
          z
            .lazy(() => LeaseCreateOrConnectWithoutTenantInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LeaseCreateManyTenantInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LeaseWhereUniqueInputObjectSchema),
          z.lazy(() => LeaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LeaseUncheckedCreateNestedManyWithoutTenantInputObjectSchema =
  Schema;
