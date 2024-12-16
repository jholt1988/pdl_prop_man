import { z } from 'zod';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseCreateWithoutTenantInputObjectSchema } from './LeaseCreateWithoutTenantInput.schema';
import { LeaseUncheckedCreateWithoutTenantInputObjectSchema } from './LeaseUncheckedCreateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateOrConnectWithoutTenantInput> = z
  .object({
    where: z.lazy(() => LeaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LeaseCreateWithoutTenantInputObjectSchema),
      z.lazy(() => LeaseUncheckedCreateWithoutTenantInputObjectSchema),
    ]),
  })
  .strict();

export const LeaseCreateOrConnectWithoutTenantInputObjectSchema = Schema;
