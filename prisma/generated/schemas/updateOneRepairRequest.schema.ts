import { z } from 'zod';
import { RepairRequestUpdateInputObjectSchema } from './objects/RepairRequestUpdateInput.schema';
import { RepairRequestUncheckedUpdateInputObjectSchema } from './objects/RepairRequestUncheckedUpdateInput.schema';
import { RepairRequestWhereUniqueInputObjectSchema } from './objects/RepairRequestWhereUniqueInput.schema';

export const RepairRequestUpdateOneSchema = z.object({
  data: z.union([
    RepairRequestUpdateInputObjectSchema,
    RepairRequestUncheckedUpdateInputObjectSchema,
  ]),
  where: RepairRequestWhereUniqueInputObjectSchema,
});
