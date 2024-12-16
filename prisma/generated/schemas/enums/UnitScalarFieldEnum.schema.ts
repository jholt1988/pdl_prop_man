import { z } from 'zod';

export const UnitScalarFieldEnumSchema = z.enum([
  'id',
  'unitNumber',
  'sqft',
  'bedrooms',
  'bathrooms',
  'propertyStatus',
  'propertyId',
]);
