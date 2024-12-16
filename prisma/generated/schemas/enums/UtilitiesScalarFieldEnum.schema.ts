import { z } from 'zod';

export const UtilitiesScalarFieldEnumSchema = z.enum([
  'id',
  'electric',
  'gas',
  'water',
  'leaseId',
]);
