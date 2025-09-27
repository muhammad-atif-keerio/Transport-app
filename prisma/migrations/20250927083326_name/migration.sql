-- CreateTable
CREATE TABLE "drivers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "driverImage" TEXT,
    "driverName" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "bloodGroup" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "emergencyContact" TEXT,
    "emergencyContactName" TEXT,
    "driverId" INTEGER NOT NULL,
    "pkCode" TEXT NOT NULL,
    "vehicleNo" TEXT NOT NULL,
    "inductionDate" DATETIME NOT NULL,
    "jobStatus" TEXT NOT NULL DEFAULT 'Active',
    "education" TEXT NOT NULL,
    "previousJob" TEXT NOT NULL,
    "typeOfVehicle" TEXT NOT NULL,
    "experienceYear" INTEGER,
    "experienceMonth" INTEGER,
    "currentJob" TEXT NOT NULL,
    "salary" REAL,
    "cnicNo" TEXT NOT NULL,
    "cnicFront" TEXT NOT NULL,
    "cnicBack" TEXT NOT NULL,
    "cnicIssueDate" DATETIME NOT NULL,
    "cnicExpiryDate" DATETIME NOT NULL,
    "cnicVerified" TEXT NOT NULL DEFAULT 'No',
    "licenseNo" TEXT NOT NULL,
    "licenseIssueDate" DATETIME NOT NULL,
    "licenseExpiryDate" DATETIME NOT NULL,
    "licenseStatus" TEXT NOT NULL,
    "typeOfLicense" TEXT NOT NULL,
    "drivingSince" INTEGER NOT NULL,
    "licenseOnlineVerification" TEXT NOT NULL DEFAULT 'No',
    "covid19Vaccination" TEXT NOT NULL,
    "firstDoseExpiry" DATETIME,
    "secondDoseExpiry" DATETIME,
    "boosterDose" DATETIME,
    "boosterStatus" TEXT,
    "medicalCheck" TEXT NOT NULL,
    "medicalIssueDate" DATETIME,
    "medicalExpiryDate" DATETIME,
    "medicalStatus" TEXT,
    "medicalCertificate" TEXT,
    "ddcNHMP" TEXT NOT NULL,
    "ddcNHMPIssueDate" DATETIME,
    "ddcNHMPExpiryDate" DATETIME,
    "ddcNHMPStatus" TEXT,
    "ddcNHMPResult" TEXT,
    "ddcCertificate" TEXT,
    "randomDrugAlcoholDate" DATETIME,
    "randomDrugAlcoholCount" INTEGER,
    "randomDrugAlcoholStatus" TEXT,
    "drugTestCertificate" TEXT,
    "policeVF" TEXT NOT NULL,
    "policeVFCertificate" TEXT,
    "tpplPolicy" TEXT NOT NULL,
    "securityClearance" TEXT NOT NULL DEFAULT 'No',
    "languages" JSONB NOT NULL,
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLogin" DATETIME,
    "passwordHash" TEXT,
    "email" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "createdById" TEXT,
    "updatedById" TEXT,
    CONSTRAINT "drivers_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "drivers_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "driver_work_experiences" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "driverId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "dateFrom" DATETIME NOT NULL,
    "dateTo" DATETIME,
    "jobTill" TEXT NOT NULL,
    "responsibility" TEXT NOT NULL,
    "salary" REAL,
    "reasonForLeaving" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "driver_work_experiences_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "drivers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "driver_references" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "driverId" TEXT NOT NULL,
    "referenceName" TEXT NOT NULL,
    "referenceAddress" TEXT NOT NULL,
    "referencePhone" TEXT NOT NULL,
    "referenceRelation" TEXT NOT NULL,
    "referenceEmail" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "driver_references_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "drivers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "driver_documents" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "driverId" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "documentName" TEXT NOT NULL,
    "documentUrl" TEXT NOT NULL,
    "issueDate" DATETIME,
    "expiryDate" DATETIME,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verifiedBy" TEXT,
    "verifiedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "driver_documents_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "drivers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "driver_violations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "driverId" TEXT NOT NULL,
    "violationType" TEXT NOT NULL,
    "violationDate" DATETIME NOT NULL,
    "location" TEXT,
    "description" TEXT,
    "fineAmount" REAL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "points" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "driver_violations_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "drivers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "driver_assignments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "driverId" TEXT NOT NULL,
    "vehicleId" TEXT,
    "routeId" TEXT,
    "assignmentDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "status" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "driver_assignments_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "drivers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clerkId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "imageUrl" TEXT,
    "role" TEXT NOT NULL DEFAULT 'Admin',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLogin" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "drivers_driverId_key" ON "drivers"("driverId");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_cnicNo_key" ON "drivers"("cnicNo");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_licenseNo_key" ON "drivers"("licenseNo");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_email_key" ON "drivers"("email");

-- CreateIndex
CREATE INDEX "drivers_driverId_idx" ON "drivers"("driverId");

-- CreateIndex
CREATE INDEX "drivers_cnicNo_idx" ON "drivers"("cnicNo");

-- CreateIndex
CREATE INDEX "drivers_licenseNo_idx" ON "drivers"("licenseNo");

-- CreateIndex
CREATE INDEX "drivers_jobStatus_idx" ON "drivers"("jobStatus");

-- CreateIndex
CREATE INDEX "drivers_createdAt_idx" ON "drivers"("createdAt");

-- CreateIndex
CREATE INDEX "driver_work_experiences_driverId_idx" ON "driver_work_experiences"("driverId");

-- CreateIndex
CREATE INDEX "driver_references_driverId_idx" ON "driver_references"("driverId");

-- CreateIndex
CREATE INDEX "driver_documents_driverId_idx" ON "driver_documents"("driverId");

-- CreateIndex
CREATE INDEX "driver_documents_documentType_idx" ON "driver_documents"("documentType");

-- CreateIndex
CREATE INDEX "driver_violations_driverId_idx" ON "driver_violations"("driverId");

-- CreateIndex
CREATE INDEX "driver_violations_violationDate_idx" ON "driver_violations"("violationDate");

-- CreateIndex
CREATE INDEX "driver_assignments_driverId_idx" ON "driver_assignments"("driverId");

-- CreateIndex
CREATE INDEX "driver_assignments_assignmentDate_idx" ON "driver_assignments"("assignmentDate");

-- CreateIndex
CREATE UNIQUE INDEX "users_clerkId_key" ON "users"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_clerkId_idx" ON "users"("clerkId");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_role_idx" ON "users"("role");
