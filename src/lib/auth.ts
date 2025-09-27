import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { UserRole } from "@/generated/prisma";

export async function getCurrentUser() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  try {
    const user = await currentUser();
    if (!user) return null;

    // Get or create user in our database
    let dbUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!dbUser) {
      // Create user if doesn't exist
      dbUser = await prisma.user.create({
        data: {
          clerkId: userId,
          email: user.emailAddresses[0]?.emailAddress || "",
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          imageUrl: user.imageUrl,
          role: UserRole.Admin, // Default role for new users
        },
      });
    } else {
      // Update last login
      await prisma.user.update({
        where: { id: dbUser.id },
        data: { lastLogin: new Date() },
      });
    }

    return dbUser;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

export async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("Authentication required");
  }
  return user;
}

export async function requireRole(role: UserRole) {
  const user = await requireAuth();
  if (user.role !== role && user.role !== UserRole.Admin) {
    throw new Error("Insufficient permissions");
  }
  return user;
}

export async function isAdmin() {
  const user = await getCurrentUser();
  return user?.role === UserRole.Admin;
}
