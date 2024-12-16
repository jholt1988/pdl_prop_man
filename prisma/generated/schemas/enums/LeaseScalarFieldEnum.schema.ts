import { z } from 'zod';

export const LeaseScalarFieldEnumSchema = z.enum([
  'id',
  'termOfLease',
  'beginDate',
  'endDate',
  'monthlyRent',
  'deposit',
  'petDeposit',
  'tenantId',
  'propertyId',
  'unitId',
  'utilitiesId',
]);
