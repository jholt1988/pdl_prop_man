import { z } from 'zod';

export const TransactionScalarFieldEnumSchema = z.enum([
  'id',
  'tenantId',
  'leaseId',
  'description',
  'amount',
  'date',
]);
