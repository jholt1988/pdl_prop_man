import { z } from 'zod';
import { RepairRequestIncludeObjectSchema } from './objects/RepairRequestInclude.schema';
import { RepairRequestUpdateInputObjectSchema } from './objects/RepairRequestUpdateInput.schema';
import { RepairRequestUncheckedUpdateInputObjectSchema } from './objects/RepairRequestUncheckedUpdateInput.schema';
import { RepairRequestWhereUniqueInputObjectSchema } from './objects/RepairRequestWhereUniqueInput.schema';

export const RepairRequestUpdateOneSchema = z.object({
  include: RepairRequestIncludeObjectSchema.optional(),
  data: z.union([
    RepairRequestUpdateInputObjectSchema,
    RepairRequestUncheckedUpdateInputObjectSchema,
  ]),
  where: RepairRequestWhereUniqueInputObjectSchema,
});
