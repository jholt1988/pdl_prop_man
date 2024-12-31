import { z } from 'zod';
import { RepairRequestIncludeObjectSchema } from './objects/RepairRequestInclude.schema';
import { RepairRequestWhereUniqueInputObjectSchema } from './objects/RepairRequestWhereUniqueInput.schema';
import { RepairRequestCreateInputObjectSchema } from './objects/RepairRequestCreateInput.schema';
import { RepairRequestUncheckedCreateInputObjectSchema } from './objects/RepairRequestUncheckedCreateInput.schema';
import { RepairRequestUpdateInputObjectSchema } from './objects/RepairRequestUpdateInput.schema';
import { RepairRequestUncheckedUpdateInputObjectSchema } from './objects/RepairRequestUncheckedUpdateInput.schema';

export const RepairRequestUpsertSchema = z.object({
  include: RepairRequestIncludeObjectSchema.optional(),
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
