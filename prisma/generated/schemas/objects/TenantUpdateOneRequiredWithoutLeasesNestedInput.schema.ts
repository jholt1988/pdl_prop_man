import { z } from 'zod';
import { TenantCreateWithoutLeasesInputObjectSchema } from './TenantCreateWithoutLeasesInput.schema';
import { TenantUncheckedCreateWithoutLeasesInputObjectSchema } from './TenantUncheckedCreateWithoutLeasesInput.schema';
import { TenantCreateOrConnectWithoutLeasesInputObjectSchema } from './TenantCreateOrConnectWithoutLeasesInput.schema';
import { TenantUpsertWithoutLeasesInputObjectSchema } from './TenantUpsertWithoutLeasesInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateWithoutLeasesInputObjectSchema } from './TenantUpdateWithoutLeasesInput.schema';
import { TenantUncheckedUpdateWithoutLeasesInputObjectSchema } from './TenantUncheckedUpdateWithoutLeasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutLeasesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TenantCreateWithoutLeasesInputObjectSchema),
          z.lazy(() => TenantUncheckedCreateWithoutLeasesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TenantCreateOrConnectWithoutLeasesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => TenantUpsertWithoutLeasesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TenantUpdateWithoutLeasesInputObjectSchema),
          z.lazy(() => TenantUncheckedUpdateWithoutLeasesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const TenantUpdateOneRequiredWithoutLeasesNestedInputObjectSchema =
  Schema;
