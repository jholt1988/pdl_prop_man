import { z } from 'zod';
import { RepairRequestCreateManyInputObjectSchema } from './objects/RepairRequestCreateManyInput.schema';

export const RepairRequestCreateManySchema = z.object({
  data: z.union([
    RepairRequestCreateManyInputObjectSchema,
    z.array(RepairRequestCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
