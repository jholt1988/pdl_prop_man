import { z } from 'zod';
import { RepairRequestCreateInputObjectSchema } from './objects/RepairRequestCreateInput.schema';
import { RepairRequestUncheckedCreateInputObjectSchema } from './objects/RepairRequestUncheckedCreateInput.schema';

export const RepairRequestCreateOneSchema = z.object({
  data: z.union([
    RepairRequestCreateInputObjectSchema,
    RepairRequestUncheckedCreateInputObjectSchema,
  ]),
});
