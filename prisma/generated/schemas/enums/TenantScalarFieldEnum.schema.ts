import { z } from 'zod';

export const TenantScalarFieldEnumSchema = z.enum([
  'id',
  'firstName',
  'lastName',
  'email',
  'phone',
  'ssn',
  'DOB',
  'driversLicense',
  'emergencyContact',
  'emergencyContactPhone',
]);
