import { z } from 'zod';
import { RepairRequestWhereInputObjectSchema } from './objects/RepairRequestWhereInput.schema';

export const RepairRequestDeleteManySchema = z.object({
  where: RepairRequestWhereInputObjectSchema.optional(),
});
