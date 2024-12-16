import { z } from 'zod';
import { RepairRequestWhereUniqueInputObjectSchema } from './objects/RepairRequestWhereUniqueInput.schema';
import { RepairRequestCreateInputObjectSchema } from './objects/RepairRequestCreateInput.schema';
import { RepairRequestUncheckedCreateInputObjectSchema } from './objects/RepairRequestUncheckedCreateInput.schema';
import { RepairRequestUpdateInputObjectSchema } from './objects/RepairRequestUpdateInput.schema';
import { RepairRequestUncheckedUpdateInputObjectSchema } from './objects/RepairRequestUncheckedUpdateInput.schema';

export const RepairRequestUpsertSchema = z.object({
  where: RepairRequestWhereUniqueInputObjectSchema,
  create: z.union([
    RepairRequestCreateInputObjectSchema,
    RepairRequestUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RepairRequestUpdateInputObjectSchema,
    RepairRequestUncheckedUpdateInputObjectSchema,
  ]),
});
