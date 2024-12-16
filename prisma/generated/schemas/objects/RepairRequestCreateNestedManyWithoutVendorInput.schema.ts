import { z } from 'zod';
import { RepairRequestCreateWithoutVendorInputObjectSchema } from './RepairRequestCreateWithoutVendorInput.schema';
import { RepairRequestUncheckedCreateWithoutVendorInputObjectSchema } from './RepairRequestUncheckedCreateWithoutVendorInput.schema';
import { RepairRequestCreateOrConnectWithoutVendorInputObjectSchema } from './RepairRequestCreateOrConnectWithoutVendorInput.schema';
import { RepairRequestCreateManyVendorInputEnvelopeObjectSchema } from './RepairRequestCreateManyVendorInputEnvelope.schema';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestCreateNestedManyWithoutVendorInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RepairRequestCreateWithoutVendorInputObjectSchema),
          z
            .lazy(() => RepairRequestCreateWithoutVendorInputObjectSchema)
            .array(),
          z.lazy(
            () => RepairRequestUncheckedCreateWithoutVendorInputObjectSchema,
          ),
          z
            .lazy(
              () => RepairRequestUncheckedCreateWithoutVendorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RepairRequestCreateOrConnectWithoutVendorInputObjectSchema,
          ),
          z
            .lazy(
              () => RepairRequestCreateOrConnectWithoutVendorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RepairRequestCreateManyVendorInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RepairRequestCreateNestedManyWithoutVendorInputObjectSchema =
  Schema;
