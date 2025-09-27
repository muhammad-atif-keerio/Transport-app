import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Starting database reset...");

  try {
    // Delete all data in the correct order (respecting foreign key constraints)
    console.log("🧹 Cleaning all data...");

    await prisma.driverViolation.deleteMany();
    console.log("✅ Cleared driver violations");

    await prisma.driverAssignment.deleteMany();
    console.log("✅ Cleared driver assignments");

    await prisma.driverDocument.deleteMany();
    console.log("✅ Cleared driver documents");

    await prisma.driverReference.deleteMany();
    console.log("✅ Cleared driver references");

    await prisma.driverWorkExperience.deleteMany();
    console.log("✅ Cleared driver work experiences");

    await prisma.driver.deleteMany();
    console.log("✅ Cleared drivers");

    await prisma.user.deleteMany();
    console.log("✅ Cleared users");

    console.log("\n🎉 Database reset completed successfully!");
    console.log("💡 Run 'npm run db:seed' to populate with sample data");
  } catch (error) {
    console.error("❌ Error during reset:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error("❌ Reset failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
