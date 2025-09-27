import { columns, Driver } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Charts } from "./components/charts";
import { getDrivers } from "@/actions/driver/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PlusIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

async function getData(): Promise<Driver[]> {
  const result = await getDrivers();

  if (!result.success || !result.data) {
    // Return empty array if there's an error or no data
    console.error("Error fetching drivers:", result.error);
    return [];
  }

  return result.data;
}

// Calculate driver statistics
function calculateStats(drivers: Driver[]) {
  const totalDrivers = drivers.length;
  const activeDrivers = drivers.filter(
    (driver) => driver.jobStatus === "Active"
  ).length;
  const suspendedDrivers = drivers.filter(
    (driver) => driver.jobStatus === "Suspended"
  ).length;
  const terminatedDrivers = drivers.filter(
    (driver) => driver.jobStatus === "Terminated"
  ).length;

  return {
    total: totalDrivers,
    active: activeDrivers,
    suspended: suspendedDrivers,
    terminated: terminatedDrivers,
  };
}

// Prepare chart data
function prepareChartData(drivers: Driver[]) {
  // Status distribution for pie chart
  const statusData = [
    {
      name: "Active",
      value: drivers.filter((d) => d.jobStatus === "Active").length,
      color: "#22c55e",
    },
    {
      name: "Inactive",
      value: drivers.filter((d) => d.jobStatus === "Inactive").length,
      color: "#6b7280",
    },
    {
      name: "Suspended",
      value: drivers.filter((d) => d.jobStatus === "Suspended").length,
      color: "#f59e0b",
    },
    {
      name: "Terminated",
      value: drivers.filter((d) => d.jobStatus === "Terminated").length,
      color: "#ef4444",
    },
  ];

  // Vehicle type distribution for bar chart
  const vehicleTypeData = drivers.reduce((acc, driver) => {
    const type = driver.typeOfVehicle || "None";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const vehicleChartData = Object.entries(vehicleTypeData).map(
    ([type, count]) => ({
      type,
      count,
    })
  );

  return {
    statusData,
    vehicleChartData,
  };
}

export default async function DriversPage() {
  const data = await getData();
  const stats = calculateStats(data);
  const chartData = prepareChartData(data);

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Drivers</h1>
          <p className="text-muted-foreground">
            Manage and view all drivers in the system.
          </p>
        </div>
        <Link href="/dashboard/drivers/create-new">
          <Button className="flex items-center gap-2">
            <PlusIcon className="h-4 w-4" />
            Add Driver
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Drivers
            </CardTitle>
            <UserGroupIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {stats.total}
            </div>
            <p className="text-xs text-muted-foreground">
              All registered drivers
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Drivers
            </CardTitle>
            <CheckCircleIcon className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {stats.active}
            </div>
            <p className="text-xs text-muted-foreground">
              Currently working drivers
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Suspended Drivers
            </CardTitle>
            <ExclamationTriangleIcon className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {stats.suspended}
            </div>
            <p className="text-xs text-muted-foreground">
              Temporarily suspended
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Terminated Drivers
            </CardTitle>
            <XCircleIcon className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {stats.terminated}
            </div>
            <p className="text-xs text-muted-foreground">No longer active</p>
          </CardContent>
        </Card>
      </div>

      {/* Data Table */}
      <div className="flex-1">
        <DataTable columns={columns} data={data} />
      </div>

      {/* Charts Section */}
      <Charts chartData={chartData} />
    </div>
  );
}
