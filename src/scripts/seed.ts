import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// Sample data for seeding
const sampleDrivers = [
  {
    // Personal Information
    driverName: "Ahmed Khan",
    fatherName: "Muhammad Khan",
    dateOfBirth: new Date("1985-03-15"),
    age: 39,
    gender: "Male" as const,
    placeOfBirth: "Karachi, Pakistan",
    address: "House No. 123, Block 6, PECHS, Karachi",
    maritalStatus: "Married" as const,
    bloodGroup: "O_Positive" as const,
    contactNo: "03001234567",
    emergencyContact: "03007654321",
    emergencyContactName: "Fatima Khan",
    email: "ahmed.khan@email.com",

    // Professional Information
    driverId: 1001,
    pkCode: "PK-001",
    vehicleNo: "KHI-2023",
    inductionDate: new Date("2023-01-15"),
    jobStatus: "Active" as const,
    education: "Matric" as const,
    previousJob: "PSO" as const,
    typeOfVehicle: "Tanker" as const,
    experienceYear: 8,
    experienceMonth: 3,
    currentJob: "Heavy Vehicle Driver",
    salary: 45000,

    // Identification Documents
    cnicNo: "42101-1234567-8",
    cnicFront: "https://example.com/cnic_front_001.jpg",
    cnicBack: "https://example.com/cnic_back_001.jpg",
    cnicIssueDate: new Date("2015-06-10"),
    cnicExpiryDate: new Date("2025-06-10"),
    cnicVerified: "Yes" as const,

    // Driving License
    licenseNo: "LTV-2023-001",
    licenseIssueDate: new Date("2018-03-20"),
    licenseExpiryDate: new Date("2028-03-20"),
    licenseStatus: "Valid",
    typeOfLicense: "HTV" as const,
    drivingSince: 12,
    licenseOnlineVerification: "Yes" as const,

    // Medical Information
    covid19Vaccination: "FullyVaccinated" as const,
    firstDoseExpiry: new Date("2024-01-15"),
    secondDoseExpiry: new Date("2024-02-15"),
    boosterDose: new Date("2024-08-15"),
    boosterStatus: "Done" as const,
    medicalCheck: "Yes" as const,
    medicalIssueDate: new Date("2023-12-01"),
    medicalExpiryDate: new Date("2024-12-01"),
    medicalStatus: "Valid" as const,
    medicalCertificate: "https://example.com/medical_001.pdf",

    // DDC
    ddcNHMP: "Yes" as const,
    ddcNHMPIssueDate: new Date("2023-11-15"),
    ddcNHMPExpiryDate: new Date("2025-11-15"),
    ddcNHMPStatus: "Valid" as const,
    ddcNHMPResult: "Pass" as const,
    ddcCertificate: "https://example.com/ddc_001.pdf",

    // Drug & Alcohol Testing
    randomDrugAlcoholDate: new Date("2024-01-10"),
    randomDrugAlcoholCount: 1,
    randomDrugAlcoholStatus: "Done" as const,
    drugTestCertificate: "https://example.com/drug_test_001.pdf",

    // Security & Policy
    policeVF: "Yes" as const,
    policeVFCertificate: "https://example.com/police_vf_001.pdf",
    tpplPolicy: "Yes" as const,
    securityClearance: "Yes" as const,

    // Languages
    languages: {
      read: ["Urdu", "English"],
      write: ["Urdu", "English"],
      speak: ["Urdu", "English", "Sindhi"],
    },

    // Additional Information
    notes:
      "Experienced driver with excellent safety record. Fluent in multiple languages.",
    isActive: true,
    lastLogin: new Date("2024-01-20"),
  },
  {
    // Personal Information
    driverName: "Ali Hassan",
    fatherName: "Hassan Ali",
    dateOfBirth: new Date("1988-07-22"),
    age: 35,
    gender: "Male" as const,
    placeOfBirth: "Lahore, Pakistan",
    address: "Street 45, Model Town, Lahore",
    maritalStatus: "Single" as const,
    bloodGroup: "B_Positive" as const,
    contactNo: "03012345678",
    emergencyContact: "03023456789",
    emergencyContactName: "Hassan Ali (Father)",
    email: "ali.hassan@email.com",

    // Professional Information
    driverId: 1002,
    pkCode: "PK-002",
    vehicleNo: "LHR-2024",
    inductionDate: new Date("2023-02-20"),
    jobStatus: "Active" as const,
    education: "Inter" as const,
    previousJob: "Shell" as const,
    typeOfVehicle: "Trailer" as const,
    experienceYear: 6,
    experienceMonth: 8,
    currentJob: "Trailer Driver",
    salary: 52000,

    // Identification Documents
    cnicNo: "42101-2345678-9",
    cnicFront: "https://example.com/cnic_front_002.jpg",
    cnicBack: "https://example.com/cnic_back_002.jpg",
    cnicIssueDate: new Date("2018-03-15"),
    cnicExpiryDate: new Date("2028-03-15"),
    cnicVerified: "Yes" as const,

    // Driving License
    licenseNo: "HTV-2023-002",
    licenseIssueDate: new Date("2019-05-10"),
    licenseExpiryDate: new Date("2029-05-10"),
    licenseStatus: "Valid",
    typeOfLicense: "HTV" as const,
    drivingSince: 9,
    licenseOnlineVerification: "Yes" as const,

    // Medical Information
    covid19Vaccination: "Booster" as const,
    firstDoseExpiry: new Date("2023-12-01"),
    secondDoseExpiry: new Date("2024-01-01"),
    boosterDose: new Date("2024-07-01"),
    boosterStatus: "Done" as const,
    medicalCheck: "Yes" as const,
    medicalIssueDate: new Date("2023-11-20"),
    medicalExpiryDate: new Date("2024-11-20"),
    medicalStatus: "Valid" as const,
    medicalCertificate: "https://example.com/medical_002.pdf",

    // DDC
    ddcNHMP: "Yes" as const,
    ddcNHMPIssueDate: new Date("2023-10-15"),
    ddcNHMPExpiryDate: new Date("2025-10-15"),
    ddcNHMPStatus: "Valid" as const,
    ddcNHMPResult: "Pass" as const,
    ddcCertificate: "https://example.com/ddc_002.pdf",

    // Drug & Alcohol Testing
    randomDrugAlcoholDate: new Date("2024-01-15"),
    randomDrugAlcoholCount: 1,
    randomDrugAlcoholStatus: "Done" as const,
    drugTestCertificate: "https://example.com/drug_test_002.pdf",

    // Security & Policy
    policeVF: "Yes" as const,
    policeVFCertificate: "https://example.com/police_vf_002.pdf",
    tpplPolicy: "Yes" as const,
    securityClearance: "Yes" as const,

    // Languages
    languages: {
      read: ["Urdu", "English", "Punjabi"],
      write: ["Urdu", "English"],
      speak: ["Urdu", "English", "Punjabi"],
    },

    // Additional Information
    notes:
      "Skilled trailer driver with clean driving record. Good communication skills.",
    isActive: true,
    lastLogin: new Date("2024-01-19"),
  },
  {
    // Personal Information
    driverName: "Usman Sheikh",
    fatherName: "Sheikh Muhammad",
    dateOfBirth: new Date("1990-11-08"),
    age: 33,
    gender: "Male" as const,
    placeOfBirth: "Islamabad, Pakistan",
    address: "Sector F-8/2, Islamabad",
    maritalStatus: "Married" as const,
    bloodGroup: "A_Positive" as const,
    contactNo: "03023456789",
    emergencyContact: "03034567890",
    emergencyContactName: "Aisha Sheikh",
    email: "usman.sheikh@email.com",

    // Professional Information
    driverId: 1003,
    pkCode: "PK-003",
    vehicleNo: "ISB-2023",
    inductionDate: new Date("2023-03-10"),
    jobStatus: "Suspended" as const,
    education: "Bachelors" as const,
    previousJob: "Aramco" as const,
    typeOfVehicle: "Dumper" as const,
    experienceYear: 5,
    experienceMonth: 2,
    currentJob: "Dumper Driver",
    salary: 48000,

    // Identification Documents
    cnicNo: "42101-3456789-0",
    cnicFront: "https://example.com/cnic_front_003.jpg",
    cnicBack: "https://example.com/cnic_back_003.jpg",
    cnicIssueDate: new Date("2019-08-20"),
    cnicExpiryDate: new Date("2029-08-20"),
    cnicVerified: "Yes" as const,

    // Driving License
    licenseNo: "PSV-2023-003",
    licenseIssueDate: new Date("2020-02-15"),
    licenseExpiryDate: new Date("2030-02-15"),
    licenseStatus: "Valid",
    typeOfLicense: "PSV" as const,
    drivingSince: 7,
    licenseOnlineVerification: "Yes" as const,

    // Medical Information
    covid19Vaccination: "FullyVaccinated" as const,
    firstDoseExpiry: new Date("2023-11-01"),
    secondDoseExpiry: new Date("2023-12-01"),
    boosterDose: new Date("2024-06-01"),
    boosterStatus: "Done" as const,
    medicalCheck: "Yes" as const,
    medicalIssueDate: new Date("2023-10-15"),
    medicalExpiryDate: new Date("2024-10-15"),
    medicalStatus: "Valid" as const,
    medicalCertificate: "https://example.com/medical_003.pdf",

    // DDC
    ddcNHMP: "Yes" as const,
    ddcNHMPIssueDate: new Date("2023-09-10"),
    ddcNHMPExpiryDate: new Date("2025-09-10"),
    ddcNHMPStatus: "Valid" as const,
    ddcNHMPResult: "Pass" as const,
    ddcCertificate: "https://example.com/ddc_003.pdf",

    // Drug & Alcohol Testing
    randomDrugAlcoholDate: new Date("2023-12-20"),
    randomDrugAlcoholCount: 2,
    randomDrugAlcoholStatus: "Done" as const,
    drugTestCertificate: "https://example.com/drug_test_003.pdf",

    // Security & Policy
    policeVF: "Yes" as const,
    policeVFCertificate: "https://example.com/police_vf_003.pdf",
    tpplPolicy: "Yes" as const,
    securityClearance: "No" as const,

    // Languages
    languages: {
      read: ["Urdu", "English"],
      write: ["Urdu", "English"],
      speak: ["Urdu", "English"],
    },

    // Additional Information
    notes:
      "Temporarily suspended due to minor traffic violation. Expected to return soon.",
    isActive: false,
    lastLogin: new Date("2023-12-15"),
  },
  {
    // Personal Information
    driverName: "Hassan Ali",
    fatherName: "Ali Ahmed",
    dateOfBirth: new Date("1982-04-30"),
    age: 42,
    gender: "Male" as const,
    placeOfBirth: "Karachi, Pakistan",
    address: "Gulshan-e-Iqbal, Block 7, Karachi",
    maritalStatus: "Divorced" as const,
    bloodGroup: "AB_Negative" as const,
    contactNo: "03034567890",
    emergencyContact: "03045678901",
    emergencyContactName: "Sara Ali",
    email: "hassan.ali@email.com",

    // Professional Information
    driverId: 1004,
    pkCode: "PK-004",
    vehicleNo: "KAR-2023",
    inductionDate: new Date("2023-04-05"),
    jobStatus: "Terminated" as const,
    education: "Primary" as const,
    previousJob: "Other" as const,
    typeOfVehicle: "Truck" as const,
    experienceYear: 15,
    experienceMonth: 6,
    currentJob: "Heavy Vehicle Driver",
    salary: 55000,

    // Identification Documents
    cnicNo: "42101-4567890-1",
    cnicFront: "https://example.com/cnic_front_004.jpg",
    cnicBack: "https://example.com/cnic_back_004.jpg",
    cnicIssueDate: new Date("2012-09-10"),
    cnicExpiryDate: new Date("2022-09-10"),
    cnicVerified: "No" as const,

    // Driving License
    licenseNo: "LTV-2023-004",
    licenseIssueDate: new Date("2015-11-25"),
    licenseExpiryDate: new Date("2025-11-25"),
    licenseStatus: "Expired",
    typeOfLicense: "LTV" as const,
    drivingSince: 18,
    licenseOnlineVerification: "No" as const,

    // Medical Information
    covid19Vaccination: "SecondDose" as const,
    firstDoseExpiry: new Date("2023-10-01"),
    secondDoseExpiry: new Date("2023-11-01"),
    boosterDose: null,
    boosterStatus: "NotDone" as const,
    medicalCheck: "No" as const,
    medicalIssueDate: new Date("2022-12-01"),
    medicalExpiryDate: new Date("2023-12-01"),
    medicalStatus: "Invalid" as const,
    medicalCertificate: null,

    // DDC
    ddcNHMP: "No" as const,
    ddcNHMPIssueDate: null,
    ddcNHMPExpiryDate: null,
    ddcNHMPStatus: "Invalid" as const,
    ddcNHMPResult: "Fail" as const,
    ddcCertificate: null,

    // Drug & Alcohol Testing
    randomDrugAlcoholDate: new Date("2023-11-10"),
    randomDrugAlcoholCount: 3,
    randomDrugAlcoholStatus: "NotDone" as const,
    drugTestCertificate: null,

    // Security & Policy
    policeVF: "No" as const,
    policeVFCertificate: null,
    tpplPolicy: "No" as const,
    securityClearance: "No" as const,

    // Languages
    languages: {
      read: ["Urdu"],
      write: ["Urdu"],
      speak: ["Urdu", "Sindhi"],
    },

    // Additional Information
    notes:
      "Terminated due to multiple policy violations and expired documents.",
    isActive: false,
    lastLogin: new Date("2023-11-20"),
  },
  {
    // Personal Information
    driverName: "Fatima Bibi",
    fatherName: "Muhammad Ali",
    dateOfBirth: new Date("1993-09-12"),
    age: 30,
    gender: "Female" as const,
    placeOfBirth: "Lahore, Pakistan",
    address: "Johar Town, Block H, Lahore",
    maritalStatus: "Married" as const,
    bloodGroup: "O_Negative" as const,
    contactNo: "03045678901",
    emergencyContact: "03056789012",
    emergencyContactName: "Muhammad Ali (Husband)",
    email: "fatima.bibi@email.com",

    // Professional Information
    driverId: 1005,
    pkCode: "PK-005",
    vehicleNo: "LHR-2024-B",
    inductionDate: new Date("2023-05-20"),
    jobStatus: "Active" as const,
    education: "Inter" as const,
    previousJob: "None" as const,
    typeOfVehicle: "Bus" as const,
    experienceYear: 3,
    experienceMonth: 4,
    currentJob: "Bus Driver",
    salary: 42000,

    // Identification Documents
    cnicNo: "42101-5678901-2",
    cnicFront: "https://example.com/cnic_front_005.jpg",
    cnicBack: "https://example.com/cnic_back_005.jpg",
    cnicIssueDate: new Date("2020-01-15"),
    cnicExpiryDate: new Date("2030-01-15"),
    cnicVerified: "Yes" as const,

    // Driving License
    licenseNo: "PSV-2023-005",
    licenseIssueDate: new Date("2021-06-10"),
    licenseExpiryDate: new Date("2031-06-10"),
    licenseStatus: "Valid",
    typeOfLicense: "PSV" as const,
    drivingSince: 4,
    licenseOnlineVerification: "Yes" as const,

    // Medical Information
    covid19Vaccination: "FullyVaccinated" as const,
    firstDoseExpiry: new Date("2023-09-15"),
    secondDoseExpiry: new Date("2023-10-15"),
    boosterDose: new Date("2024-04-15"),
    boosterStatus: "Done" as const,
    medicalCheck: "Yes" as const,
    medicalIssueDate: new Date("2023-08-20"),
    medicalExpiryDate: new Date("2024-08-20"),
    medicalStatus: "Valid" as const,
    medicalCertificate: "https://example.com/medical_005.pdf",

    // DDC
    ddcNHMP: "Yes" as const,
    ddcNHMPIssueDate: new Date("2023-07-15"),
    ddcNHMPExpiryDate: new Date("2025-07-15"),
    ddcNHMPStatus: "Valid" as const,
    ddcNHMPResult: "Pass" as const,
    ddcCertificate: "https://example.com/ddc_005.pdf",

    // Drug & Alcohol Testing
    randomDrugAlcoholDate: new Date("2024-01-05"),
    randomDrugAlcoholCount: 1,
    randomDrugAlcoholStatus: "Done" as const,
    drugTestCertificate: "https://example.com/drug_test_005.pdf",

    // Security & Policy
    policeVF: "Yes" as const,
    policeVFCertificate: "https://example.com/police_vf_005.pdf",
    tpplPolicy: "Yes" as const,
    securityClearance: "Yes" as const,

    // Languages
    languages: {
      read: ["Urdu", "English", "Punjabi"],
      write: ["Urdu", "English"],
      speak: ["Urdu", "English", "Punjabi"],
    },

    // Additional Information
    notes:
      "First female driver in the company. Excellent safety record and customer service.",
    isActive: true,
    lastLogin: new Date("2024-01-21"),
  },
];

const sampleUsers = [
  {
    clerkId: "user_2abc123def456ghi",
    email: "admin@transport.com",
    firstName: "Admin",
    lastName: "User",
    role: "Admin" as const,
    isActive: true,
    lastLogin: new Date("2024-01-21"),
  },
  {
    clerkId: "user_2xyz789uvw012rst",
    email: "manager@transport.com",
    firstName: "Manager",
    lastName: "User",
    role: "Manager" as const,
    isActive: true,
    lastLogin: new Date("2024-01-20"),
  },
];

const sampleWorkExperiences = [
  {
    driverId: "", // Will be set after driver creation
    companyName: "PSO Pakistan",
    dateFrom: new Date("2018-01-01"),
    dateTo: new Date("2023-01-15"),
    jobTill: "Heavy Vehicle Driver",
    responsibility: "Transportation of petroleum products across the country",
    salary: 42000,
    reasonForLeaving: "Better opportunity",
  },
  {
    driverId: "", // Will be set after driver creation
    companyName: "Shell Pakistan",
    dateFrom: new Date("2019-06-01"),
    dateTo: new Date("2023-02-20"),
    jobTill: "Trailer Driver",
    responsibility: "Long-haul transportation of goods",
    salary: 45000,
    reasonForLeaving: "Career advancement",
  },
];

const sampleReferences = [
  {
    driverId: "", // Will be set after driver creation
    referenceName: "Muhammad Asif",
    referenceAddress: "Block 5, PECHS, Karachi",
    referencePhone: "03001234567",
    referenceRelation: "Former Supervisor",
    referenceEmail: "asif@email.com",
  },
  {
    driverId: "", // Will be set after driver creation
    referenceName: "Ali Raza",
    referenceAddress: "Model Town, Lahore",
    referencePhone: "03012345678",
    referenceRelation: "Colleague",
    referenceEmail: "ali.raza@email.com",
  },
];

const sampleDocuments = [
  {
    driverId: "", // Will be set after driver creation
    documentType: "CNIC",
    documentName: "CNIC Front",
    documentUrl: "https://example.com/cnic_front_001.jpg",
    issueDate: new Date("2015-06-10"),
    expiryDate: new Date("2025-06-10"),
    isVerified: true,
    verifiedBy: "admin@transport.com",
    verifiedAt: new Date("2023-01-20"),
  },
  {
    driverId: "", // Will be set after driver creation
    documentType: "License",
    documentName: "Driving License",
    documentUrl: "https://example.com/license_001.pdf",
    issueDate: new Date("2018-03-20"),
    expiryDate: new Date("2028-03-20"),
    isVerified: true,
    verifiedBy: "admin@transport.com",
    verifiedAt: new Date("2023-01-20"),
  },
];

const sampleViolations = [
  {
    driverId: "", // Will be set after driver creation
    violationType: "Speed Limit",
    violationDate: new Date("2023-12-10"),
    location: "Motorway M-2, KM 150",
    description: "Exceeded speed limit by 15 km/h",
    fineAmount: 3000,
    isPaid: true,
    points: 2,
  },
];

const sampleAssignments = [
  {
    driverId: "", // Will be set after driver creation
    vehicleId: "vehicle_001",
    routeId: "route_001",
    assignmentDate: new Date("2024-01-01"),
    endDate: null,
    status: "Active",
    notes: "Regular route assignment",
  },
];

async function main() {
  console.log("🌱 Starting database seeding...");

  try {
    // Clear existing data
    console.log("🧹 Cleaning existing data...");
    await prisma.driverViolation.deleteMany();
    await prisma.driverAssignment.deleteMany();
    await prisma.driverDocument.deleteMany();
    await prisma.driverReference.deleteMany();
    await prisma.driverWorkExperience.deleteMany();
    await prisma.driver.deleteMany();
    await prisma.user.deleteMany();

    // Create users first
    console.log("👥 Creating users...");
    const users = await Promise.all(
      sampleUsers.map((user) => prisma.user.create({ data: user }))
    );
    console.log(`✅ Created ${users.length} users`);

    // Get admin user for createdById
    const adminUser = users.find((user) => user.role === "Admin");
    if (!adminUser) {
      throw new Error("Admin user not found");
    }

    // Create drivers
    console.log("🚛 Creating drivers...");
    const drivers = [];

    for (let i = 0; i < sampleDrivers.length; i++) {
      const driverData = {
        ...sampleDrivers[i],
        createdById: adminUser.id,
        updatedById: adminUser.id,
      };

      const driver = await prisma.driver.create({ data: driverData });
      drivers.push(driver);
      console.log(
        `✅ Created driver: ${driver.driverName} (ID: ${driver.driverId})`
      );
    }

    // Create work experiences
    console.log("💼 Creating work experiences...");
    const workExperiences = [];
    for (
      let i = 0;
      i < Math.min(sampleWorkExperiences.length, drivers.length);
      i++
    ) {
      const experienceData = {
        ...sampleWorkExperiences[i],
        driverId: drivers[i].id,
      };
      const experience = await prisma.driverWorkExperience.create({
        data: experienceData,
      });
      workExperiences.push(experience);
    }
    console.log(`✅ Created ${workExperiences.length} work experiences`);

    // Create references
    console.log("📞 Creating references...");
    const references = [];
    for (
      let i = 0;
      i < Math.min(sampleReferences.length, drivers.length);
      i++
    ) {
      const referenceData = {
        ...sampleReferences[i],
        driverId: drivers[i].id,
      };
      const reference = await prisma.driverReference.create({
        data: referenceData,
      });
      references.push(reference);
    }
    console.log(`✅ Created ${references.length} references`);

    // Create documents
    console.log("📄 Creating documents...");
    const documents = [];
    for (let i = 0; i < Math.min(sampleDocuments.length, drivers.length); i++) {
      const documentData = {
        ...sampleDocuments[i],
        driverId: drivers[i].id,
      };
      const document = await prisma.driverDocument.create({
        data: documentData,
      });
      documents.push(document);
    }
    console.log(`✅ Created ${documents.length} documents`);

    // Create violations
    console.log("⚠️ Creating violations...");
    const violations = [];
    for (
      let i = 0;
      i < Math.min(sampleViolations.length, drivers.length);
      i++
    ) {
      const violationData = {
        ...sampleViolations[i],
        driverId: drivers[i].id,
      };
      const violation = await prisma.driverViolation.create({
        data: violationData,
      });
      violations.push(violation);
    }
    console.log(`✅ Created ${violations.length} violations`);

    // Create assignments
    console.log("🎯 Creating assignments...");
    const assignments = [];
    for (
      let i = 0;
      i < Math.min(sampleAssignments.length, drivers.length);
      i++
    ) {
      const assignmentData = {
        ...sampleAssignments[i],
        driverId: drivers[i].id,
      };
      const assignment = await prisma.driverAssignment.create({
        data: assignmentData,
      });
      assignments.push(assignment);
    }
    console.log(`✅ Created ${assignments.length} assignments`);

    console.log("\n🎉 Database seeding completed successfully!");
    console.log(`📊 Summary:`);
    console.log(`   - Users: ${users.length}`);
    console.log(`   - Drivers: ${drivers.length}`);
    console.log(`   - Work Experiences: ${workExperiences.length}`);
    console.log(`   - References: ${references.length}`);
    console.log(`   - Documents: ${documents.length}`);
    console.log(`   - Violations: ${violations.length}`);
    console.log(`   - Assignments: ${assignments.length}`);
  } catch (error) {
    console.error("❌ Error during seeding:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
