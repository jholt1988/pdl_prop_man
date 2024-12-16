import { z } from 'zod';
import { LeaseScalarWhereInputObjectSchema } from './LeaseScalarWhereInput.schema';
import { LeaseUpdateManyMutationInputObjectSchema } from './LeaseUpdateManyMutationInput.schema';
import { LeaseUncheckedUpdateManyWithoutLeaseInputObjectSchema } from './LeaseUncheckedUpdateManyWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpdateManyWithWhereWithoutPropertyInput> = z
  .object({
    where: z.lazy(() => LeaseScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => LeaseUpdateManyMutationInputObjectSchema),
      z.lazy(() => LeaseUncheckedUpdateManyWithoutLeaseInputObjectSchema),
    ]),
  })
  .strict();

export const LeaseUpdateManyWithWhereWithoutPropertyInputObjectSchema = Schema;
