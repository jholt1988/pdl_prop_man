import { z } from 'zod';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseUpdateWithoutTenantInputObjectSchema } from './LeaseUpdateWithoutTenantInput.schema';
import { LeaseUncheckedUpdateWithoutTenantInputObjectSchema } from './LeaseUncheckedUpdateWithoutTenantInput.schema';
import { LeaseCreateWithoutTenantInputObjectSchema } from './LeaseCreateWithoutTenantInput.schema';
import { LeaseUncheckedCreateWithoutTenantInputObjectSchema } from './LeaseUncheckedCreateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpsertWithWhereUniqueWithoutTenantInput> = z
  .object({
    where: z.lazy(() => LeaseWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => LeaseUpdateWithoutTenantInputObjectSchema),
      z.lazy(() => LeaseUncheckedUpdateWithoutTenantInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LeaseCreateWithoutTenantInputObjectSchema),
      z.lazy(() => LeaseUncheckedCreateWithoutTenantInputObjectSchema),
    ]),
  })
  .strict();

export const LeaseUpsertWithWhereUniqueWithoutTenantInputObjectSchema = Schema;
