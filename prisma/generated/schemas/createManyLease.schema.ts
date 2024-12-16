import { z } from 'zod';
import { LeaseCreateManyInputObjectSchema } from './objects/LeaseCreateManyInput.schema';

export const LeaseCreateManySchema = z.object({
  data: z.union([
    LeaseCreateManyInputObjectSchema,
    z.array(LeaseCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
