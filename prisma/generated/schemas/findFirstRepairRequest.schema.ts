import { z } from 'zod';
import { RepairRequestOrderByWithRelationInputObjectSchema } from './objects/RepairRequestOrderByWithRelationInput.schema';
import { RepairRequestWhereInputObjectSchema } from './objects/RepairRequestWhereInput.schema';
import { RepairRequestWhereUniqueInputObjectSchema } from './objects/RepairRequestWhereUniqueInput.schema';
import { RepairRequestScalarFieldEnumSchema } from './enums/RepairRequestScalarFieldEnum.schema';

export const RepairRequestFindFirstSchema = z.object({
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
