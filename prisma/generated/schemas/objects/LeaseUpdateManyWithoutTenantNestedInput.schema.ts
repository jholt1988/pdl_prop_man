import { z } from 'zod';
import { LeaseCreateWithoutTenantInputObjectSchema } from './LeaseCreateWithoutTenantInput.schema';
import { LeaseUncheckedCreateWithoutTenantInputObjectSchema } from './LeaseUncheckedCreateWithoutTenantInput.schema';
import { LeaseCreateOrConnectWithoutTenantInputObjectSchema } from './LeaseCreateOrConnectWithoutTenantInput.schema';
import { LeaseUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './LeaseUpsertWithWhereUniqueWithoutTenantInput.schema';
import { LeaseCreateManyTenantInputEnvelopeObjectSchema } from './LeaseCreateManyTenantInputEnvelope.schema';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './LeaseUpdateWithWhereUniqueWithoutTenantInput.schema';
import { LeaseUpdateManyWithWhereWithoutTenantInputObjectSchema } from './LeaseUpdateManyWithWhereWithoutTenantInput.schema';
import { LeaseScalarWhereInputObjectSchema } from './LeaseScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpdateManyWithoutTenantNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => LeaseUpsertWithWhereUniqueWithoutTenantInputObjectSchema),
        z
          .lazy(() => LeaseUpsertWithWhereUniqueWithoutTenantInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => LeaseCreateManyTenantInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => LeaseWhereUniqueInputObjectSchema),
        z.lazy(() => LeaseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => LeaseWhereUniqueInputObjectSchema),
        z.lazy(() => LeaseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => LeaseWhereUniqueInputObjectSchema),
        z.lazy(() => LeaseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => LeaseWhereUniqueInputObjectSchema),
        z.lazy(() => LeaseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => LeaseUpdateWithWhereUniqueWithoutTenantInputObjectSchema),
        z
          .lazy(() => LeaseUpdateWithWhereUniqueWithoutTenantInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => LeaseUpdateManyWithWhereWithoutTenantInputObjectSchema),
        z
          .lazy(() => LeaseUpdateManyWithWhereWithoutTenantInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => LeaseScalarWhereInputObjectSchema),
        z.lazy(() => LeaseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const LeaseUpdateManyWithoutTenantNestedInputObjectSchema = Schema;
