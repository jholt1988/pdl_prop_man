import { z } from 'zod';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseUpdateWithoutTenantInputObjectSchema } from './LeaseUpdateWithoutTenantInput.schema';
import { LeaseUncheckedUpdateWithoutTenantInputObjectSchema } from './LeaseUncheckedUpdateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpdateWithWhereUniqueWithoutTenantInput> = z
  .object({
    where: z.lazy(() => LeaseWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => LeaseUpdateWithoutTenantInputObjectSchema),
      z.lazy(() => LeaseUncheckedUpdateWithoutTenantInputObjectSchema),
    ]),
  })
  .strict();

export const LeaseUpdateWithWhereUniqueWithoutTenantInputObjectSchema = Schema;
