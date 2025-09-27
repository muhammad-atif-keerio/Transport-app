import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDriver } from "@/actions/driver/actions";
import Link from "next/link";
import {
  ArrowLeftIcon,
  PencilIcon,
  UserIcon,
  PhoneIcon,
  IdentificationIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  MapPinIcon,
  HeartIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Driver } from "@/generated/prisma";

interface DriverDetailPageProps {
  params: {
    id: string;
  };
}

export default async function DriverDetailPage({
  params,
}: DriverDetailPageProps) {
  const resolvedParams = await params;
  const result = await getDriver(resolvedParams.id);

  if (!result.success || !result.data) {
    notFound();
  }

  const driver = result.data;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800";
      case "Inactive":
        return "bg-muted text-muted-foreground border-border";
      case "Suspended":
        return "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-400 dark:border-yellow-800";
      case "Terminated":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatLanguages = (languages: Driver["languages"]) => {
    if (!languages) return "N/A";
    const {
      read = [],
      write = [],
      speak = [],
    } = languages as { read: string[]; write: string[]; speak: string[] };
    return {
      read: read.join(", "),
      write: write.join(", "),
      speak: speak.join(", "),
    };
  };

  const languages = formatLanguages(driver.languages);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="flex flex-1 flex-col gap-8 p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-card rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/dashboard/drivers">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  Back to Drivers
                </Button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-foreground">
                    {driver.driverName}
                  </h1>
                  <p className="text-sm text-muted-foreground font-mono">
                    ID: {driver.driverId}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className={`px-3 py-1 rounded-full font-medium ${getStatusColor(
                  driver.jobStatus
                )}`}
              >
                {driver.jobStatus}
              </Badge>
              <Link href={`/dashboard/drivers/${driver.id}/edit`}>
                <Button>
                  <PencilIcon className="mr-2 h-4 w-4" />
                  Edit Driver
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Personal Information */}
          <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-card-foreground">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <UserIcon className="h-4 w-4 text-primary" />
                </div>
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Full Name
                </p>
                <p className="text-sm font-medium text-foreground">
                  {driver.driverName}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Father&apos;s Name
                </p>
                <p className="text-sm font-medium text-foreground">
                  {driver.fatherName}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Date of Birth
                </p>
                <p className="text-sm font-medium text-foreground">
                  {formatDate(driver.dateOfBirth)}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Age
                </p>
                <p className="text-sm font-medium text-foreground">
                  {driver.age} years
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Gender
                </p>
                <p className="text-sm font-medium text-foreground">
                  {driver.gender}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Blood Group
                </p>
                <p className="text-sm font-medium text-foreground">
                  {driver.bloodGroup}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Marital Status
                </p>
                <p className="text-sm font-medium text-foreground">
                  {driver.maritalStatus}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="h-4 w-4 text-green-600" />
                </div>
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Phone Number
                </p>
                <p className="text-sm font-medium text-foreground">
                  {driver.contactNo}
                </p>
              </div>
              {driver.email && (
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {driver.email}
                  </p>
                </div>
              )}
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Address
                </p>
                <p className="text-sm font-medium text-foreground">
                  {driver.address}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Place of Birth
                </p>
                <p className="text-sm font-medium text-foreground">
                  {driver.placeOfBirth}
                </p>
              </div>
              {driver.emergencyContact && (
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Emergency Contact
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {driver.emergencyContact}
                  </p>
                </div>
              )}
              {driver.emergencyContactName && (
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Emergency Contact Name
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {driver.emergencyContactName}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <BriefcaseIcon className="h-4 w-4 text-purple-600" />
                </div>
                Professional Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  PK Code
                </p>
                <p className="text-sm font-medium text-foreground font-mono">
                  {driver.pkCode}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Vehicle Number
                </p>
                <p className="text-sm font-medium text-foreground font-mono">
                  {driver.vehicleNo}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Current Job
                </p>
                <p className="text-sm font-medium text-foreground">
                  {driver.currentJob}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Type of Vehicle
                </p>
                <p className="text-sm font-medium text-foreground">
                  {driver.typeOfVehicle}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Experience
                </p>
                <p className="text-sm font-medium text-foreground">
                  {driver.experienceYear} years, {driver.experienceMonth} months
                </p>
              </div>
              {driver.salary && (
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Salary
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    PKR {driver.salary.toLocaleString()}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Education & Background */}
          <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <AcademicCapIcon className="h-4 w-4 text-orange-600" />
                </div>
                Education & Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Education Level
                </p>
                <p className="text-sm">{driver.education}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Previous Job
                </p>
                <p className="text-sm">{driver.previousJob}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Induction Date
                </p>
                <p className="text-sm">{formatDate(driver.inductionDate)}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Driving Since
                </p>
                <p className="text-sm">{driver.drivingSince} years</p>
              </div>
            </CardContent>
          </Card>

          {/* CNIC Information */}
          <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                  <IdentificationIcon className="h-4 w-4 text-indigo-600" />
                </div>
                CNIC Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  CNIC Number
                </p>
                <p className="text-sm font-medium text-foreground font-mono">
                  {driver.cnicNo}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Issue Date
                </p>
                <p className="text-sm font-medium text-foreground">
                  {formatDate(driver.cnicIssueDate)}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Expiry Date
                </p>
                <p className="text-sm font-medium text-foreground">
                  {formatDate(driver.cnicExpiryDate)}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Verification Status
                </p>
                <Badge
                  variant={
                    driver.cnicVerified === "Yes" ? "default" : "destructive"
                  }
                  className="w-fit"
                >
                  {driver.cnicVerified}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* License Information */}
          <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center">
                  <DocumentTextIcon className="h-4 w-4 text-teal-600" />
                </div>
                License Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  License Number
                </p>
                <p className="text-sm font-mono">{driver.licenseNo}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Type of License
                </p>
                <p className="text-sm">{driver.typeOfLicense}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Issue Date
                </p>
                <p className="text-sm">{formatDate(driver.licenseIssueDate)}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Expiry Date
                </p>
                <p className="text-sm">
                  {formatDate(driver.licenseExpiryDate)}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Status
                </p>
                <Badge
                  variant={
                    driver.licenseStatus === "Valid" ? "default" : "destructive"
                  }
                >
                  {driver.licenseStatus}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Medical Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartIcon className="h-5 w-5" />
                Medical Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  COVID-19 Vaccination
                </p>
                <p className="text-sm">{driver.covid19Vaccination}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Medical Check
                </p>
                <Badge
                  variant={
                    driver.medicalCheck === "Yes" ? "default" : "destructive"
                  }
                >
                  {driver.medicalCheck}
                </Badge>
              </div>
              {driver.medicalIssueDate && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Medical Issue Date
                  </p>
                  <p className="text-sm">
                    {formatDate(driver.medicalIssueDate)}
                  </p>
                </div>
              )}
              {driver.medicalExpiryDate && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Medical Expiry Date
                  </p>
                  <p className="text-sm">
                    {formatDate(driver.medicalExpiryDate)}
                  </p>
                </div>
              )}
              {driver.medicalStatus && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Medical Status
                  </p>
                  <Badge
                    variant={
                      driver.medicalStatus === "Valid"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {driver.medicalStatus}
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Security & Compliance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5" />
                Security & Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  DDC NHMP
                </p>
                <Badge
                  variant={driver.ddcNHMP === "Yes" ? "default" : "destructive"}
                >
                  {driver.ddcNHMP}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Police Verification
                </p>
                <Badge
                  variant={
                    driver.policeVF === "Yes" ? "default" : "destructive"
                  }
                >
                  {driver.policeVF}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  TPPL Policy
                </p>
                <Badge
                  variant={
                    driver.tpplPolicy === "Yes" ? "default" : "destructive"
                  }
                >
                  {driver.tpplPolicy}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Security Clearance
                </p>
                <Badge
                  variant={
                    driver.securityClearance === "Yes"
                      ? "default"
                      : "destructive"
                  }
                >
                  {driver.securityClearance}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Read
                </p>
                <p className="text-sm">
                  {typeof languages === "object" &&
                  languages !== null &&
                  "read" in languages
                    ? languages.read
                    : "N/A"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Write
                </p>
                <p className="text-sm">
                  {typeof languages === "object" &&
                  languages !== null &&
                  "write" in languages
                    ? languages.write
                    : "N/A"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Speak
                </p>
                <p className="text-sm">
                  {typeof languages === "object" &&
                  languages !== null &&
                  "speak" in languages
                    ? languages.speak
                    : "N/A"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notes */}
        {driver.notes && (
          <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <ExclamationTriangleIcon className="h-4 w-4 text-amber-600" />
                </div>
                Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {driver.notes}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Timestamps */}
        <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-foreground">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <ClockIcon className="h-4 w-4 text-muted-foreground" />
              </div>
              Record Information
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Created At
                </p>
                <p className="text-sm font-medium text-foreground">
                  {formatDate(driver.createdAt)}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Last Updated
                </p>
                <p className="text-sm font-medium text-foreground">
                  {formatDate(driver.updatedAt)}
                </p>
              </div>
              {driver.lastLogin && (
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Last Login
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {formatDate(driver.lastLogin)}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
