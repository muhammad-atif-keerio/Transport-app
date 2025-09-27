"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

// Validation schemas
const createDriverSchema = z.object({
  // Personal Information
  driverName: z.string().min(2, "Driver name must be at least 2 characters"),
  fatherName: z.string().min(2, "Father name must be at least 2 characters"),
  dateOfBirth: z.string(),
  age: z.number().min(18, "Age must be at least 18"),
  gender: z.enum(["Male", "Female", "Other"]),
  placeOfBirth: z.string().min(2, "Place of birth is required"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  maritalStatus: z.enum(["Single", "Married", "Divorced", "Widowed"]),
  bloodGroup: z.enum([
    "A_Positive",
    "A_Negative",
    "B_Positive",
    "B_Negative",
    "AB_Positive",
    "AB_Negative",
    "O_Positive",
    "O_Negative",
  ]),
  contactNo: z.string().min(11, "Contact number must be at least 11 digits"),
  emergencyContact: z.string().optional(),
  emergencyContactName: z.string().optional(),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),

  // Professional Information
  driverId: z.number().min(1, "Driver ID must be a positive number"),
  pkCode: z.string().min(2, "PK Code is required"),
  vehicleNo: z.string().min(3, "Vehicle number is required"),
  inductionDate: z.string(),
  education: z.enum([
    "Primary",
    "Matric",
    "Inter",
    "Bachelors",
    "Masters",
    "None",
  ]),
  previousJob: z.enum(["PSO", "Shell", "Aramco", "Other", "None"]),
  typeOfVehicle: z.enum([
    "Tanker",
    "Trailer",
    "Dumper",
    "Truck",
    "Bus",
    "None",
  ]),
  experienceYear: z.number().optional(),
  experienceMonth: z.number().optional(),
  currentJob: z.string().min(2, "Current job is required"),
  salary: z.number().optional(),

  // Identification Documents
  cnicNo: z.string().min(13, "CNIC must be 13 digits"),
  cnicIssueDate: z.string(),
  cnicExpiryDate: z.string(),

  // Driving License
  licenseNo: z.string().min(5, "License number is required"),
  licenseIssueDate: z.string(),
  licenseExpiryDate: z.string(),
  licenseStatus: z.string().min(2, "License status is required"),
  typeOfLicense: z.enum(["LTV", "HTV", "PSV", "International"]),
  drivingSince: z.number().min(1, "Driving since must be at least 1 year"),

  // Medical Information
  covid19Vaccination: z.enum([
    "FirstDose",
    "SecondDose",
    "FullyVaccinated",
    "Booster",
  ]),
  medicalCheck: z.enum(["Yes", "No"]),

  // DDC
  ddcNHMP: z.enum(["Yes", "No"]),

  // Security & Policy
  policeVF: z.enum(["Yes", "No"]),
  tpplPolicy: z.enum(["Yes", "No"]),
  securityClearance: z.enum(["Yes", "No"]),

  // Additional Information
  notes: z.string().optional(),
});

const updateDriverSchema = createDriverSchema.partial().extend({
  id: z.string(),
});

export type CreateDriverInput = z.infer<typeof createDriverSchema>;
export type UpdateDriverInput = z.infer<typeof updateDriverSchema>;

// Result types for better error handling
export type ActionResult<T = any> = {
  success: boolean;
  data?: T;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

// CREATE Driver
export async function createDriver(
  formData: CreateDriverInput
): Promise<ActionResult> {
  try {
    // Authenticate user
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Authentication required" };
    }

    // Validate input data
    const validationResult = createDriverSchema.safeParse(formData);
    if (!validationResult.success) {
      return {
        success: false,
        error: "Validation failed",
        fieldErrors: validationResult.error.flatten().fieldErrors,
      };
    }

    const data = validationResult.data;

    // Check for unique constraints
    const existingDriverId = await prisma.driver.findUnique({
      where: { driverId: data.driverId },
    });
    if (existingDriverId) {
      return {
        success: false,
        error: "Driver ID already exists",
        fieldErrors: { driverId: ["Driver ID already exists"] },
      };
    }

    const existingCnic = await prisma.driver.findUnique({
      where: { cnicNo: data.cnicNo },
    });
    if (existingCnic) {
      return {
        success: false,
        error: "CNIC number already exists",
        fieldErrors: { cnicNo: ["CNIC number already exists"] },
      };
    }

    const existingLicense = await prisma.driver.findUnique({
      where: { licenseNo: data.licenseNo },
    });
    if (existingLicense) {
      return {
        success: false,
        error: "License number already exists",
        fieldErrors: { licenseNo: ["License number already exists"] },
      };
    }

    const existingEmail = data.email
      ? await prisma.driver.findUnique({
          where: { email: data.email },
        })
      : null;
    if (existingEmail) {
      return {
        success: false,
        error: "Email address already exists",
        fieldErrors: { email: ["Email address already exists"] },
      };
    }

    // Transform date strings to Date objects
    const transformedData = {
      ...data,
      dateOfBirth: new Date(data.dateOfBirth),
      inductionDate: new Date(data.inductionDate),
      cnicIssueDate: new Date(data.cnicIssueDate),
      cnicExpiryDate: new Date(data.cnicExpiryDate),
      licenseIssueDate: new Date(data.licenseIssueDate),
      licenseExpiryDate: new Date(data.licenseExpiryDate),
    };

    // Create driver
    const driver = await prisma.driver.create({
      data: {
        ...transformedData,
        cnicFront: "", // Default empty values for required fields
        cnicBack: "",
        createdById: user.id,
        updatedById: user.id,
        languages: {
          read: ["Urdu", "English"], // Default languages
          write: ["Urdu", "English"],
          speak: ["Urdu", "English"],
        },
      },
    });

    // Revalidate the drivers page
    revalidatePath("/dashboard/drivers");

    return {
      success: true,
      data: driver,
    };
  } catch (error) {
    console.error("Error creating driver:", error);
    return {
      success: false,
      error: "Failed to create driver. Please try again.",
    };
  }
}

// READ Drivers
export async function getDrivers(): Promise<ActionResult> {
  try {
    // Authenticate user
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Authentication required" };
    }

    const drivers = await prisma.driver.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        createdBy: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        updatedBy: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    return {
      success: true,
      data: drivers,
    };
  } catch (error) {
    console.error("Error fetching drivers:", error);
    return {
      success: false,
      error: "Failed to fetch drivers. Please try again.",
    };
  }
}

// READ Single Driver
export async function getDriver(id: string): Promise<ActionResult> {
  try {
    // Authenticate user
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Authentication required" };
    }

    const driver = await prisma.driver.findUnique({
      where: { id },
      include: {
        createdBy: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        updatedBy: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        workExperiences: true,
        references: true,
        documents: true,
        violations: true,
        assignments: true,
      },
    });

    if (!driver) {
      return {
        success: false,
        error: "Driver not found",
      };
    }

    return {
      success: true,
      data: driver,
    };
  } catch (error) {
    console.error("Error fetching driver:", error);
    return {
      success: false,
      error: "Failed to fetch driver. Please try again.",
    };
  }
}

// UPDATE Driver
export async function updateDriver(
  formData: UpdateDriverInput
): Promise<ActionResult> {
  try {
    // Authenticate user
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Authentication required" };
    }

    const { id, ...updateData } = formData;

    // Validate input data
    const validationResult = updateDriverSchema.safeParse(formData);
    if (!validationResult.success) {
      return {
        success: false,
        error: "Validation failed",
        fieldErrors: validationResult.error.flatten().fieldErrors,
      };
    }

    // Check if driver exists
    const existingDriver = await prisma.driver.findUnique({
      where: { id },
    });
    if (!existingDriver) {
      return {
        success: false,
        error: "Driver not found",
      };
    }

    // Check for unique constraints if they're being updated
    if (
      updateData.driverId &&
      updateData.driverId !== existingDriver.driverId
    ) {
      const existingDriverId = await prisma.driver.findUnique({
        where: { driverId: updateData.driverId },
      });
      if (existingDriverId) {
        return {
          success: false,
          error: "Driver ID already exists",
          fieldErrors: { driverId: ["Driver ID already exists"] },
        };
      }
    }

    if (updateData.cnicNo && updateData.cnicNo !== existingDriver.cnicNo) {
      const existingCnic = await prisma.driver.findUnique({
        where: { cnicNo: updateData.cnicNo },
      });
      if (existingCnic) {
        return {
          success: false,
          error: "CNIC number already exists",
          fieldErrors: { cnicNo: ["CNIC number already exists"] },
        };
      }
    }

    if (
      updateData.licenseNo &&
      updateData.licenseNo !== existingDriver.licenseNo
    ) {
      const existingLicense = await prisma.driver.findUnique({
        where: { licenseNo: updateData.licenseNo },
      });
      if (existingLicense) {
        return {
          success: false,
          error: "License number already exists",
          fieldErrors: { licenseNo: ["License number already exists"] },
        };
      }
    }

    if (updateData.email && updateData.email !== existingDriver.email) {
      const existingEmail = await prisma.driver.findUnique({
        where: { email: updateData.email },
      });
      if (existingEmail) {
        return {
          success: false,
          error: "Email address already exists",
          fieldErrors: { email: ["Email address already exists"] },
        };
      }
    }

    // Update driver
    const updatedDriver = await prisma.driver.update({
      where: { id },
      data: {
        ...updateData,
        updatedById: user.id,
      },
    });

    // Revalidate the drivers page
    revalidatePath("/dashboard/drivers");
    revalidatePath(`/dashboard/drivers/${id}`);

    return {
      success: true,
      data: updatedDriver,
    };
  } catch (error) {
    console.error("Error updating driver:", error);
    return {
      success: false,
      error: "Failed to update driver. Please try again.",
    };
  }
}

// DELETE Driver
export async function deleteDriver(id: string): Promise<ActionResult> {
  try {
    // Authenticate user
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Authentication required" };
    }

    // Check if driver exists
    const existingDriver = await prisma.driver.findUnique({
      where: { id },
    });
    if (!existingDriver) {
      return {
        success: false,
        error: "Driver not found",
      };
    }

    // Delete driver (this will cascade delete related records due to onDelete: Cascade)
    await prisma.driver.delete({
      where: { id },
    });

    // Revalidate the drivers page
    revalidatePath("/dashboard/drivers");

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error deleting driver:", error);
    return {
      success: false,
      error: "Failed to delete driver. Please try again.",
    };
  }
}

// BULK Operations
export async function bulkDeleteDrivers(ids: string[]): Promise<ActionResult> {
  try {
    // Authenticate user
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Authentication required" };
    }

    // Delete multiple drivers
    const result = await prisma.driver.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    // Revalidate the drivers page
    revalidatePath("/dashboard/drivers");

    return {
      success: true,
      data: { deletedCount: result.count },
    };
  } catch (error) {
    console.error("Error bulk deleting drivers:", error);
    return {
      success: false,
      error: "Failed to delete drivers. Please try again.",
    };
  }
}

// SEARCH Drivers
export async function searchDrivers(query: string): Promise<ActionResult> {
  try {
    // Authenticate user
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Authentication required" };
    }

    if (!query || query.trim().length < 2) {
      return {
        success: true,
        data: [],
      };
    }

    const drivers = await prisma.driver.findMany({
      where: {
        OR: [
          { driverName: { contains: query } },
          { fatherName: { contains: query } },
          { cnicNo: { contains: query } },
          { licenseNo: { contains: query } },
          { contactNo: { contains: query } },
          { vehicleNo: { contains: query } },
          { email: { contains: query } },
        ],
      },
      orderBy: { createdAt: "desc" },
      take: 50, // Limit results
    });

    return {
      success: true,
      data: drivers,
    };
  } catch (error) {
    console.error("Error searching drivers:", error);
    return {
      success: false,
      error: "Failed to search drivers. Please try again.",
    };
  }
}

// GET Driver Statistics
export async function getDriverStats(): Promise<ActionResult> {
  try {
    // Authenticate user
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Authentication required" };
    }

    const [
      totalDrivers,
      activeDrivers,
      inactiveDrivers,
      suspendedDrivers,
      terminatedDrivers,
      recentDrivers,
    ] = await Promise.all([
      prisma.driver.count(),
      prisma.driver.count({ where: { jobStatus: "Active" } }),
      prisma.driver.count({ where: { jobStatus: "Inactive" } }),
      prisma.driver.count({ where: { jobStatus: "Suspended" } }),
      prisma.driver.count({ where: { jobStatus: "Terminated" } }),
      prisma.driver.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
          },
        },
      }),
    ]);

    return {
      success: true,
      data: {
        total: totalDrivers,
        active: activeDrivers,
        inactive: inactiveDrivers,
        suspended: suspendedDrivers,
        terminated: terminatedDrivers,
        recent: recentDrivers,
      },
    };
  } catch (error) {
    console.error("Error fetching driver statistics:", error);
    return {
      success: false,
      error: "Failed to fetch driver statistics. Please try again.",
    };
  }
}
