import { z } from 'zod';
import { LeaseCreateInputObjectSchema } from './objects/LeaseCreateInput.schema';
import { LeaseUncheckedCreateInputObjectSchema } from './objects/LeaseUncheckedCreateInput.schema';

export const LeaseCreateOneSchema = z.object({
  data: z.union([
    LeaseCreateInputObjectSchema,
    LeaseUncheckedCreateInputObjectSchema,
  ]),
});
