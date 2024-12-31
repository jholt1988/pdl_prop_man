import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseArgs> = z.object({}).strict();

export const ExpenseArgsObjectSchema = Schema;
