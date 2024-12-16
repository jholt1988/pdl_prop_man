import { z } from 'zod';
import { LeaseScalarWhereInputObjectSchema } from './LeaseScalarWhereInput.schema';
import { LeaseUpdateManyMutationInputObjectSchema } from './LeaseUpdateManyMutationInput.schema';
import { LeaseUncheckedUpdateManyWithoutLeasesInputObjectSchema } from './LeaseUncheckedUpdateManyWithoutLeasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpdateManyWithWhereWithoutUnitInput> = z
  .object({
    where: z.lazy(() => LeaseScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => LeaseUpdateManyMutationInputObjectSchema),
      z.lazy(() => LeaseUncheckedUpdateManyWithoutLeasesInputObjectSchema),
    ]),
  })
  .strict();

export const LeaseUpdateManyWithWhereWithoutUnitInputObjectSchema = Schema;
