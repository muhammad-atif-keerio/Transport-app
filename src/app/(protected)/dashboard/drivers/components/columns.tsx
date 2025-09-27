"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  ArrowUpDown,
  MoreHorizontal,
  Trash2,
  EyeIcon,
  PencilIcon,
} from "lucide-react";
import { deleteDriver } from "@/actions/driver/actions";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  IdentificationIcon,
  UserIcon,
  UserCircleIcon,
  CreditCardIcon,
  DocumentTextIcon,
  PhoneIcon,
  TruckIcon,
  CheckCircleIcon,
  CogIcon,
  CheckCircleIcon as ActiveIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";

// Driver type based on Prisma schema
export type Driver = {
  id: string;
  driverId: number;
  driverName: string;
  fatherName: string;
  cnicNo: string;
  licenseNo: string;
  contactNo: string;
  vehicleNo: string;
  jobStatus: "Active" | "Inactive" | "Suspended" | "Terminated";
  typeOfVehicle?: "Tanker" | "Trailer" | "Dumper" | "Truck" | "Bus" | "None";
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<Driver>[] = [
  {
    accessorKey: "driverId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-2 font-semibold justify-start"
        >
          <IdentificationIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Driver </span>ID
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    size: 80,
  },
  {
    accessorKey: "driverName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-2 font-semibold justify-start"
        >
          <UserIcon className="h-4 w-4" />
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "fatherName",
    header: () => (
      <div className="flex items-center">
        <UserCircleIcon className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline">Father </span>Name
      </div>
    ),
    size: 120,
  },
  {
    accessorKey: "cnicNo",
    header: () => (
      <div className="flex items-center">
        <CreditCardIcon className="mr-2 h-4 w-4" />
        <span className="hidden sm:inline">CNIC</span>
        <span className="sm:hidden">ID</span>
      </div>
    ),
    size: 140,
    cell: ({ row }) => {
      const cnicNo = row.getValue("cnicNo") as string;
      return <div className="font-mono text-sm">{cnicNo}</div>;
    },
  },
  {
    accessorKey: "licenseNo",
    header: () => (
      <div className="flex items-center">
        <DocumentTextIcon className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline">License </span>No
      </div>
    ),
    size: 120,
  },
  {
    accessorKey: "contactNo",
    header: () => (
      <div className="flex items-center">
        <PhoneIcon className="mr-2 h-4 w-4" />
        <span className="hidden md:inline">Contact</span>
        <span className="md:hidden">Phone</span>
      </div>
    ),
    size: 130,
    cell: ({ row }) => {
      const contactNo = row.getValue("contactNo") as string;
      return <div className="font-mono text-sm">{contactNo}</div>;
    },
  },
  {
    accessorKey: "vehicleNo",
    header: () => (
      <div className="flex items-center">
        <TruckIcon className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline">Vehicle </span>No
      </div>
    ),
    size: 100,
  },
  {
    accessorKey: "jobStatus",
    header: () => (
      <div className="flex items-center">
        <CheckCircleIcon className="mr-2 h-4 w-4" />
        Status
      </div>
    ),
    size: 90,
    cell: ({ row }) => {
      const status = row.getValue("jobStatus") as string;

      const getStatusConfig = (status: string) => {
        switch (status) {
          case "Active":
            return {
              icon: <ActiveIcon className="h-3 w-3" />,
              className:
                "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
            };
          case "Inactive":
            return {
              icon: <MinusCircleIcon className="h-3 w-3" />,
              className:
                "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100",
            };
          case "Suspended":
            return {
              icon: <ExclamationTriangleIcon className="h-3 w-3" />,
              className:
                "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
            };
          case "Terminated":
            return {
              icon: <XCircleIcon className="h-3 w-3" />,
              className:
                "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100",
            };
          default:
            return {
              icon: <MinusCircleIcon className="h-3 w-3" />,
              className:
                "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100",
            };
        }
      };

      const config = getStatusConfig(status);

      return (
        <div className="flex items-center justify-start">
          <div
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs border transition-all duration-200 ${config.className}`}
          >
            <span className="capitalize tracking-wide">
              {status.toLowerCase()}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => (
      <div className="flex items-center">
        <CogIcon className="mr-2 h-4 w-4" />
        <span className="hidden sm:inline">Actions</span>
      </div>
    ),
    size: 80,
    cell: ({ row }) => {
      const driver = row.original;

      const handleDelete = async () => {
        try {
          const result = await deleteDriver(driver.id);
          if (result.success) {
            // Refresh the page to show updated data
            window.location.reload();
          } else {
            alert(result.error || "Failed to delete driver");
          }
        } catch (error) {
          console.error("Error deleting driver:", error);
          alert("An error occurred while deleting the driver");
        }
      };

      return (
        <div className="flex items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(driver.id)}
              >
                Copy driver ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href={`/dashboard/drivers/${driver.id}`}
                  className="flex items-center"
                >
                  <EyeIcon className="mr-2 h-4 w-4" />
                  View driver
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={`/dashboard/drivers/${driver.id}/edit`}
                  className="flex items-center"
                >
                  <PencilIcon className="mr-2 h-4 w-4" />
                  Edit driver
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              {/* Delete with Alert Dialog */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    className="text-destructive focus:text-destructive"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete driver
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Driver</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete{" "}
                      <strong>{driver.driverName}</strong> (ID:{" "}
                      {driver.driverId})?
                      <br />
                      <br />
                      This action cannot be undone. This will permanently remove
                      the driver and all associated data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDelete}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Delete Driver
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
