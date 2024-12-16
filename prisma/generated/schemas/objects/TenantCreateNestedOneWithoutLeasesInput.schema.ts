import { z } from 'zod';
import { TenantCreateWithoutLeasesInputObjectSchema } from './TenantCreateWithoutLeasesInput.schema';
import { TenantUncheckedCreateWithoutLeasesInputObjectSchema } from './TenantUncheckedCreateWithoutLeasesInput.schema';
import { TenantCreateOrConnectWithoutLeasesInputObjectSchema } from './TenantCreateOrConnectWithoutLeasesInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateNestedOneWithoutLeasesInput> = z
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
    connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TenantCreateNestedOneWithoutLeasesInputObjectSchema = Schema;
