import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutLeasesInputObjectSchema } from './TenantCreateWithoutLeasesInput.schema';
import { TenantUncheckedCreateWithoutLeasesInputObjectSchema } from './TenantUncheckedCreateWithoutLeasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateOrConnectWithoutLeasesInput> = z
  .object({
    where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TenantCreateWithoutLeasesInputObjectSchema),
      z.lazy(() => TenantUncheckedCreateWithoutLeasesInputObjectSchema),
    ]),
  })
  .strict();

export const TenantCreateOrConnectWithoutLeasesInputObjectSchema = Schema;
