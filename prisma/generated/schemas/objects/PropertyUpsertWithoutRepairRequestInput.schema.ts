import { z } from 'zod';
import { PropertyUpdateWithoutRepairRequestInputObjectSchema } from './PropertyUpdateWithoutRepairRequestInput.schema';
import { PropertyUncheckedUpdateWithoutRepairRequestInputObjectSchema } from './PropertyUncheckedUpdateWithoutRepairRequestInput.schema';
import { PropertyCreateWithoutRepairRequestInputObjectSchema } from './PropertyCreateWithoutRepairRequestInput.schema';
import { PropertyUncheckedCreateWithoutRepairRequestInputObjectSchema } from './PropertyUncheckedCreateWithoutRepairRequestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUpsertWithoutRepairRequestInput> = z
  .object({
    update: z.union([
      z.lazy(() => PropertyUpdateWithoutRepairRequestInputObjectSchema),
      z.lazy(
        () => PropertyUncheckedUpdateWithoutRepairRequestInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutRepairRequestInputObjectSchema),
      z.lazy(
        () => PropertyUncheckedCreateWithoutRepairRequestInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const PropertyUpsertWithoutRepairRequestInputObjectSchema = Schema;
