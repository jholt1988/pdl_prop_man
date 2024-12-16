import { z } from 'zod';

export const RepairRequestScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'email',
  'phone',
  'issue',
  'image',
  'propertyId',
  'unitId',
  'status',
  'vendorId',
]);
