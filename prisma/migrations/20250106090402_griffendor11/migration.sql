/*
  Warnings:

  - A unique constraint covering the columns `[leaseId]` on the table `Utilities` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Lease" DROP CONSTRAINT "Lease_utilitiesId_fkey";

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "DOB" DATE,
ADD COLUMN     "driversLicense" TEXT,
ADD COLUMN     "emergencyContact" TEXT,
ADD COLUMN     "emergencyContactPhone" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Utilities_leaseId_key" ON "Utilities"("leaseId");

-- AddForeignKey
ALTER TABLE "Utilities" ADD CONSTRAINT "Utilities_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
