import { z } from 'zod';
import { TenantUpdateWithoutLeasesInputObjectSchema } from './TenantUpdateWithoutLeasesInput.schema';
import { TenantUncheckedUpdateWithoutLeasesInputObjectSchema } from './TenantUncheckedUpdateWithoutLeasesInput.schema';
import { TenantCreateWithoutLeasesInputObjectSchema } from './TenantCreateWithoutLeasesInput.schema';
import { TenantUncheckedCreateWithoutLeasesInputObjectSchema } from './TenantUncheckedCreateWithoutLeasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpsertWithoutLeasesInput> = z
  .object({
    update: z.union([
      z.lazy(() => TenantUpdateWithoutLeasesInputObjectSchema),
      z.lazy(() => TenantUncheckedUpdateWithoutLeasesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TenantCreateWithoutLeasesInputObjectSchema),
      z.lazy(() => TenantUncheckedCreateWithoutLeasesInputObjectSchema),
    ]),
  })
  .strict();

export const TenantUpsertWithoutLeasesInputObjectSchema = Schema;
