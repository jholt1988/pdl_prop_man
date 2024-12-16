import { z } from 'zod';
import { UtilitiesWhereUniqueInputObjectSchema } from './objects/UtilitiesWhereUniqueInput.schema';

export const UtilitiesFindUniqueSchema = z.object({
  where: UtilitiesWhereUniqueInputObjectSchema,
});
