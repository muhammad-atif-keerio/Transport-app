-- CreateEnum
CREATE TYPE "public"."MaritalStatus" AS ENUM ('Single', 'Married', 'Divorced', 'Widowed');

-- CreateEnum
CREATE TYPE "public"."CovidVaccinationStatus" AS ENUM ('FirstDose', 'SecondDose', 'FullyVaccinated', 'Booster');

-- CreateEnum
CREATE TYPE "public"."YesNo" AS ENUM ('Yes', 'No');

-- CreateEnum
CREATE TYPE "public"."BoosterStatus" AS ENUM ('Done', 'NotDone');

-- CreateEnum
CREATE TYPE "public"."DDCStatus" AS ENUM ('Valid', 'Invalid');

-- CreateEnum
CREATE TYPE "public"."DDCResult" AS ENUM ('Pass', 'Fail', 'None');

-- CreateEnum
CREATE TYPE "public"."MedicalStatus" AS ENUM ('Valid', 'Invalid');

-- CreateEnum
CREATE TYPE "public"."DrugAlcoholStatus" AS ENUM ('Done', 'NotDone');

-- CreateEnum
CREATE TYPE "public"."JobStatus" AS ENUM ('Active', 'Inactive', 'Suspended', 'Terminated');

-- CreateEnum
CREATE TYPE "public"."EducationLevel" AS ENUM ('Primary', 'Matric', 'Inter', 'Bachelors', 'Masters', 'None');

-- CreateEnum
CREATE TYPE "public"."PreviousJob" AS ENUM ('PSO', 'Shell', 'Aramco', 'Other', 'None');

-- CreateEnum
CREATE TYPE "public"."VehicleType" AS ENUM ('Tanker', 'Trailer', 'Dumper', 'Truck', 'Bus', 'None');

-- CreateEnum
CREATE TYPE "public"."LicenseType" AS ENUM ('LTV', 'HTV', 'PSV', 'International');

-- CreateEnum
CREATE TYPE "public"."BloodGroup" AS ENUM ('A_Positive', 'A_Negative', 'B_Positive', 'B_Negative', 'AB_Positive', 'AB_Negative', 'O_Positive', 'O_Negative');

-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('Male', 'Female', 'Other');

-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('Admin', 'Manager', 'Supervisor');

-- CreateTable
CREATE TABLE "public"."drivers" (
    "id" TEXT NOT NULL,
    "driverImage" TEXT,
    "driverName" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "maritalStatus" "public"."MaritalStatus" NOT NULL,
    "bloodGroup" "public"."BloodGroup" NOT NULL,
    "contactNo" TEXT NOT NULL,
    "emergencyContact" TEXT,
    "emergencyContactName" TEXT,
    "driverId" INTEGER NOT NULL,
    "pkCode" TEXT NOT NULL,
    "vehicleNo" TEXT NOT NULL,
    "inductionDate" TIMESTAMP(3) NOT NULL,
    "jobStatus" "public"."JobStatus" NOT NULL DEFAULT 'Active',
    "education" "public"."EducationLevel" NOT NULL,
    "previousJob" "public"."PreviousJob" NOT NULL,
    "typeOfVehicle" "public"."VehicleType" NOT NULL,
    "experienceYear" INTEGER,
    "experienceMonth" INTEGER,
    "currentJob" TEXT NOT NULL,
    "salary" DOUBLE PRECISION,
    "cnicNo" TEXT NOT NULL,
    "cnicFront" TEXT NOT NULL,
    "cnicBack" TEXT NOT NULL,
    "cnicIssueDate" TIMESTAMP(3) NOT NULL,
    "cnicExpiryDate" TIMESTAMP(3) NOT NULL,
    "cnicVerified" "public"."YesNo" NOT NULL DEFAULT 'No',
    "licenseNo" TEXT NOT NULL,
    "licenseIssueDate" TIMESTAMP(3) NOT NULL,
    "licenseExpiryDate" TIMESTAMP(3) NOT NULL,
    "licenseStatus" TEXT NOT NULL,
    "typeOfLicense" "public"."LicenseType" NOT NULL,
    "drivingSince" INTEGER NOT NULL,
    "licenseOnlineVerification" "public"."YesNo" NOT NULL DEFAULT 'No',
    "covid19Vaccination" "public"."CovidVaccinationStatus" NOT NULL,
    "firstDoseExpiry" TIMESTAMP(3),
    "secondDoseExpiry" TIMESTAMP(3),
    "boosterDose" TIMESTAMP(3),
    "boosterStatus" "public"."BoosterStatus",
    "medicalCheck" "public"."YesNo" NOT NULL,
    "medicalIssueDate" TIMESTAMP(3),
    "medicalExpiryDate" TIMESTAMP(3),
    "medicalStatus" "public"."MedicalStatus",
    "medicalCertificate" TEXT,
    "ddcNHMP" "public"."YesNo" NOT NULL,
    "ddcNHMPIssueDate" TIMESTAMP(3),
    "ddcNHMPExpiryDate" TIMESTAMP(3),
    "ddcNHMPStatus" "public"."DDCStatus",
    "ddcNHMPResult" "public"."DDCResult",
    "ddcCertificate" TEXT,
    "randomDrugAlcoholDate" TIMESTAMP(3),
    "randomDrugAlcoholCount" INTEGER,
    "randomDrugAlcoholStatus" "public"."DrugAlcoholStatus",
    "drugTestCertificate" TEXT,
    "policeVF" "public"."YesNo" NOT NULL,
    "policeVFCertificate" TEXT,
    "tpplPolicy" "public"."YesNo" NOT NULL,
    "securityClearance" "public"."YesNo" NOT NULL DEFAULT 'No',
    "languages" JSONB NOT NULL,
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLogin" TIMESTAMP(3),
    "passwordHash" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT,
    "updatedById" TEXT,

    CONSTRAINT "drivers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."driver_work_experiences" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "dateFrom" TIMESTAMP(3) NOT NULL,
    "dateTo" TIMESTAMP(3),
    "jobTill" TEXT NOT NULL,
    "responsibility" TEXT NOT NULL,
    "salary" DOUBLE PRECISION,
    "reasonForLeaving" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "driver_work_experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."driver_references" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "referenceName" TEXT NOT NULL,
    "referenceAddress" TEXT NOT NULL,
    "referencePhone" TEXT NOT NULL,
    "referenceRelation" TEXT NOT NULL,
    "referenceEmail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "driver_references_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."driver_documents" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "documentName" TEXT NOT NULL,
    "documentUrl" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3),
    "expiryDate" TIMESTAMP(3),
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verifiedBy" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "driver_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."driver_violations" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "violationType" TEXT NOT NULL,
    "violationDate" TIMESTAMP(3) NOT NULL,
    "location" TEXT,
    "description" TEXT,
    "fineAmount" DOUBLE PRECISION,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "points" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "driver_violations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."driver_assignments" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "vehicleId" TEXT,
    "routeId" TEXT,
    "assignmentDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "driver_assignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "imageUrl" TEXT,
    "role" "public"."UserRole" NOT NULL DEFAULT 'Admin',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "drivers_driverId_key" ON "public"."drivers"("driverId");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_cnicNo_key" ON "public"."drivers"("cnicNo");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_licenseNo_key" ON "public"."drivers"("licenseNo");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_email_key" ON "public"."drivers"("email");

-- CreateIndex
CREATE INDEX "drivers_driverId_idx" ON "public"."drivers"("driverId");

-- CreateIndex
CREATE INDEX "drivers_cnicNo_idx" ON "public"."drivers"("cnicNo");

-- CreateIndex
CREATE INDEX "drivers_licenseNo_idx" ON "public"."drivers"("licenseNo");

-- CreateIndex
CREATE INDEX "drivers_jobStatus_idx" ON "public"."drivers"("jobStatus");

-- CreateIndex
CREATE INDEX "drivers_createdAt_idx" ON "public"."drivers"("createdAt");

-- CreateIndex
CREATE INDEX "driver_work_experiences_driverId_idx" ON "public"."driver_work_experiences"("driverId");

-- CreateIndex
CREATE INDEX "driver_references_driverId_idx" ON "public"."driver_references"("driverId");

-- CreateIndex
CREATE INDEX "driver_documents_driverId_idx" ON "public"."driver_documents"("driverId");

-- CreateIndex
CREATE INDEX "driver_documents_documentType_idx" ON "public"."driver_documents"("documentType");

-- CreateIndex
CREATE INDEX "driver_violations_driverId_idx" ON "public"."driver_violations"("driverId");

-- CreateIndex
CREATE INDEX "driver_violations_violationDate_idx" ON "public"."driver_violations"("violationDate");

-- CreateIndex
CREATE INDEX "driver_assignments_driverId_idx" ON "public"."driver_assignments"("driverId");

-- CreateIndex
CREATE INDEX "driver_assignments_assignmentDate_idx" ON "public"."driver_assignments"("assignmentDate");

-- CreateIndex
CREATE UNIQUE INDEX "users_clerkId_key" ON "public"."users"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE INDEX "users_clerkId_idx" ON "public"."users"("clerkId");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "public"."users"("email");

-- CreateIndex
CREATE INDEX "users_role_idx" ON "public"."users"("role");

-- AddForeignKey
ALTER TABLE "public"."drivers" ADD CONSTRAINT "drivers_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."drivers" ADD CONSTRAINT "drivers_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."driver_work_experiences" ADD CONSTRAINT "driver_work_experiences_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "public"."drivers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."driver_references" ADD CONSTRAINT "driver_references_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "public"."drivers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."driver_documents" ADD CONSTRAINT "driver_documents_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "public"."drivers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."driver_violations" ADD CONSTRAINT "driver_violations_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "public"."drivers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."driver_assignments" ADD CONSTRAINT "driver_assignments_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "public"."drivers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
