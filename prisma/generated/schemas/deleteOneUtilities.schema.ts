import { z } from 'zod';
import { UtilitiesWhereUniqueInputObjectSchema } from './objects/UtilitiesWhereUniqueInput.schema';

export const UtilitiesDeleteOneSchema = z.object({
  where: UtilitiesWhereUniqueInputObjectSchema,
});
