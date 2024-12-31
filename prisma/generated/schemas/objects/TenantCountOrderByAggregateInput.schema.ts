import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    ssn: z.lazy(() => SortOrderSchema).optional(),
    DOB: z.lazy(() => SortOrderSchema).optional(),
    driversLicense: z.lazy(() => SortOrderSchema).optional(),
    emergencyContact: z.lazy(() => SortOrderSchema).optional(),
    emergencyContactPhone: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TenantCountOrderByAggregateInputObjectSchema = Schema;
