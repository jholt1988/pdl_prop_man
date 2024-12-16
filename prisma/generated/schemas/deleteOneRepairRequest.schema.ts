import { z } from 'zod';
import { RepairRequestWhereUniqueInputObjectSchema } from './objects/RepairRequestWhereUniqueInput.schema';

export const RepairRequestDeleteOneSchema = z.object({
  where: RepairRequestWhereUniqueInputObjectSchema,
});
