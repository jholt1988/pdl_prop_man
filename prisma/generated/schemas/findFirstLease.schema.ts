import { z } from 'zod';
import { LeaseIncludeObjectSchema } from './objects/LeaseInclude.schema';
import { LeaseOrderByWithRelationInputObjectSchema } from './objects/LeaseOrderByWithRelationInput.schema';
import { LeaseWhereInputObjectSchema } from './objects/LeaseWhereInput.schema';
import { LeaseWhereUniqueInputObjectSchema } from './objects/LeaseWhereUniqueInput.schema';
import { LeaseScalarFieldEnumSchema } from './enums/LeaseScalarFieldEnum.schema';

export const LeaseFindFirstSchema = z.object({
  include: LeaseIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      LeaseOrderByWithRelationInputObjectSchema,
      LeaseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LeaseWhereInputObjectSchema.optional(),
  cursor: LeaseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(LeaseScalarFieldEnumSchema).optional(),
});
