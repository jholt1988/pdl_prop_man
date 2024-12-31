import { z } from 'zod';
import { RepairRequestIncludeObjectSchema } from './objects/RepairRequestInclude.schema';
import { RepairRequestWhereUniqueInputObjectSchema } from './objects/RepairRequestWhereUniqueInput.schema';

export const RepairRequestDeleteOneSchema = z.object({
  include: RepairRequestIncludeObjectSchema.optional(),
  where: RepairRequestWhereUniqueInputObjectSchema,
});
