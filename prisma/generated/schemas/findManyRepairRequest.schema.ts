import { z } from 'zod';
import { RepairRequestIncludeObjectSchema } from './objects/RepairRequestInclude.schema';
import { RepairRequestOrderByWithRelationInputObjectSchema } from './objects/RepairRequestOrderByWithRelationInput.schema';
import { RepairRequestWhereInputObjectSchema } from './objects/RepairRequestWhereInput.schema';
import { RepairRequestWhereUniqueInputObjectSchema } from './objects/RepairRequestWhereUniqueInput.schema';
import { RepairRequestScalarFieldEnumSchema } from './enums/RepairRequestScalarFieldEnum.schema';

export const RepairRequestFindManySchema = z.object({
  include: z.lazy(() => RepairRequestIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      RepairRequestOrderByWithRelationInputObjectSchema,
      RepairRequestOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RepairRequestWhereInputObjectSchema.optional(),
  cursor: RepairRequestWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RepairRequestScalarFieldEnumSchema).optional(),
});
