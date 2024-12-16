import { z } from 'zod';

export const PropertyScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'address',
  'numUnits',
]);
