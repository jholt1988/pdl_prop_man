import { z } from 'zod';
import { RepairRequestWhereUniqueInputObjectSchema } from './objects/RepairRequestWhereUniqueInput.schema';

export const RepairRequestFindUniqueSchema = z.object({
  where: RepairRequestWhereUniqueInputObjectSchema,
});
