import { z } from 'zod';
import { RepairRequestUpdateManyMutationInputObjectSchema } from './objects/RepairRequestUpdateManyMutationInput.schema';
import { RepairRequestWhereInputObjectSchema } from './objects/RepairRequestWhereInput.schema';

export const RepairRequestUpdateManySchema = z.object({
  data: RepairRequestUpdateManyMutationInputObjectSchema,
  where: RepairRequestWhereInputObjectSchema.optional(),
});
