import { z } from 'zod';
import { RepairRequestIncludeObjectSchema } from './objects/RepairRequestInclude.schema';
import { RepairRequestCreateInputObjectSchema } from './objects/RepairRequestCreateInput.schema';
import { RepairRequestUncheckedCreateInputObjectSchema } from './objects/RepairRequestUncheckedCreateInput.schema';

export const RepairRequestCreateOneSchema = z.object({
  include: RepairRequestIncludeObjectSchema.optional(),
  data: z.union([
    RepairRequestCreateInputObjectSchema,
    RepairRequestUncheckedCreateInputObjectSchema,
  ]),
});
