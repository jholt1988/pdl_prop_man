import { z } from 'zod';

export const ExpenseScalarFieldEnumSchema = z.enum([
  'id',
  'description',
  'category',
  'amount',
  'date',
]);
