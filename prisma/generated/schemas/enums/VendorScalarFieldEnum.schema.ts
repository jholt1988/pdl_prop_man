import { z } from 'zod';

export const VendorScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'email',
  'phone',
  'address',
]);
