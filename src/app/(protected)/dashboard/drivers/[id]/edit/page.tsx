"use client";

import { useState, useEffect, use } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CalendarIcon,
  ArrowLeftIcon,
  CheckIcon,
  ShieldCheckIcon,
  PencilIcon,
  UserIcon,
  IdentificationIcon,
  TruckIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  getDriver,
  updateDriver,
  type UpdateDriverInput,
} from "@/actions/driver/actions";

// Validation schema - same as create form but with optional id
const driverSchema = z.object({
  // Personal Information
  driverName: z.string().min(2, "Driver name must be at least 2 characters"),
  fatherName: z.string().min(2, "Father name must be at least 2 characters"),
  dateOfBirth: z.date(),
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
  inductionDate: z.date(),
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
  cnicIssueDate: z.date(),
  cnicExpiryDate: z.date(),

  // Driving License
  licenseNo: z.string().min(5, "License number is required"),
  licenseIssueDate: z.date(),
  licenseExpiryDate: z.date(),
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

type DriverFormData = z.infer<typeof driverSchema>;

interface EditDriverPageProps {
  params: Promise<{
    id: string;
  }>;
}

const EditDriverPage = ({ params }: EditDriverPageProps) => {
  const resolvedParams = use(params);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  const [serverError, setServerError] = useState<string>("");
  const [driver, setDriver] = useState<DriverFormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<DriverFormData>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      gender: "Male",
      maritalStatus: "Single",
      bloodGroup: "O_Positive",
      education: "Matric",
      previousJob: "None",
      typeOfVehicle: "Truck",
      typeOfLicense: "LTV",
      covid19Vaccination: "FullyVaccinated",
      medicalCheck: "Yes",
      ddcNHMP: "Yes",
      policeVF: "Yes",
      tpplPolicy: "Yes",
      securityClearance: "No",
    },
  });

  // Load driver data
  useEffect(() => {
    const loadDriver = async () => {
      try {
        const result = await getDriver(resolvedParams.id);
        if (result.success && result.data) {
          const driverData = result.data;
          setDriver(driverData);

          // Set form values explicitly
          setValue("driverName", driverData.driverName || "");
          setValue("fatherName", driverData.fatherName || "");
          setValue(
            "dateOfBirth",
            driverData.dateOfBirth
              ? new Date(driverData.dateOfBirth)
              : new Date()
          );
          setValue("age", driverData.age || 18);
          setValue(
            "gender",
            (driverData.gender as "Male" | "Female" | "Other") || "Male"
          );
          setValue("placeOfBirth", driverData.placeOfBirth || "");
          setValue("address", driverData.address || "");
          setValue(
            "maritalStatus",
            (driverData.maritalStatus as
              | "Single"
              | "Married"
              | "Divorced"
              | "Widowed") || "Single"
          );
          setValue(
            "bloodGroup",
            (driverData.bloodGroup as
              | "A_Positive"
              | "A_Negative"
              | "B_Positive"
              | "B_Negative"
              | "AB_Positive"
              | "AB_Negative"
              | "O_Positive"
              | "O_Negative") || "O_Positive"
          );
          setValue("contactNo", driverData.contactNo || "");
          setValue("emergencyContact", driverData.emergencyContact || "");
          setValue(
            "emergencyContactName",
            driverData.emergencyContactName || ""
          );
          setValue("email", driverData.email || "");

          // Professional Information
          setValue("driverId", driverData.driverId || 0);
          setValue("pkCode", driverData.pkCode || "");
          setValue("vehicleNo", driverData.vehicleNo || "");
          setValue(
            "inductionDate",
            driverData.inductionDate
              ? new Date(driverData.inductionDate)
              : new Date()
          );
          setValue(
            "education",
            (driverData.education as
              | "Primary"
              | "Matric"
              | "Inter"
              | "Bachelors"
              | "Masters"
              | "None") || "Matric"
          );
          setValue(
            "previousJob",
            (driverData.previousJob as
              | "PSO"
              | "Shell"
              | "Aramco"
              | "Other"
              | "None") || "None"
          );
          setValue(
            "typeOfVehicle",
            (driverData.typeOfVehicle as
              | "Tanker"
              | "Trailer"
              | "Dumper"
              | "Truck"
              | "Bus"
              | "None") || "Truck"
          );
          setValue("experienceYear", driverData.experienceYear || 0);
          setValue("experienceMonth", driverData.experienceMonth || 0);
          setValue("currentJob", driverData.currentJob || "");
          setValue("salary", driverData.salary || 0);

          // Identification Documents
          setValue("cnicNo", driverData.cnicNo || "");
          setValue(
            "cnicIssueDate",
            driverData.cnicIssueDate
              ? new Date(driverData.cnicIssueDate)
              : new Date()
          );
          setValue(
            "cnicExpiryDate",
            driverData.cnicExpiryDate
              ? new Date(driverData.cnicExpiryDate)
              : new Date()
          );

          // Driving License
          setValue("licenseNo", driverData.licenseNo || "");
          setValue(
            "licenseIssueDate",
            driverData.licenseIssueDate
              ? new Date(driverData.licenseIssueDate)
              : new Date()
          );
          setValue(
            "licenseExpiryDate",
            driverData.licenseExpiryDate
              ? new Date(driverData.licenseExpiryDate)
              : new Date()
          );
          setValue("licenseStatus", driverData.licenseStatus || "");
          setValue(
            "typeOfLicense",
            (driverData.typeOfLicense as
              | "LTV"
              | "HTV"
              | "PSV"
              | "International") || "LTV"
          );
          setValue("drivingSince", driverData.drivingSince || 1);

          // Medical & Security
          setValue(
            "covid19Vaccination",
            (driverData.covid19Vaccination as
              | "FirstDose"
              | "SecondDose"
              | "FullyVaccinated"
              | "Booster") || "FullyVaccinated"
          );
          setValue(
            "medicalCheck",
            (driverData.medicalCheck as "Yes" | "No") || "Yes"
          );
          setValue("ddcNHMP", (driverData.ddcNHMP as "Yes" | "No") || "Yes");
          setValue("policeVF", (driverData.policeVF as "Yes" | "No") || "Yes");
          setValue(
            "tpplPolicy",
            (driverData.tpplPolicy as "Yes" | "No") || "Yes"
          );
          setValue(
            "securityClearance",
            (driverData.securityClearance as "Yes" | "No") || "No"
          );

          // Additional Information
          setValue("notes", driverData.notes || "");
        } else {
          router.push("/dashboard/drivers");
        }
      } catch (error) {
        console.error("Error loading driver:", error);
        router.push("/dashboard/drivers");
      } finally {
        setIsLoading(false);
      }
    };

    loadDriver();
  }, [resolvedParams.id, setValue, router]);

  const onSubmit = async (data: DriverFormData) => {
    setIsSubmitting(true);
    setServerError("");

    try {
      // Transform the data for server action
      const serverData: UpdateDriverInput = {
        id: resolvedParams.id,
        ...data,
        dateOfBirth: data.dateOfBirth.toISOString(),
        inductionDate: data.inductionDate.toISOString(),
        cnicIssueDate: data.cnicIssueDate.toISOString(),
        cnicExpiryDate: data.cnicExpiryDate.toISOString(),
        licenseIssueDate: data.licenseIssueDate.toISOString(),
        licenseExpiryDate: data.licenseExpiryDate.toISOString(),
      };

      const result = await updateDriver(serverData);

      if (result.success) {
        // Redirect to driver detail page
        router.push(`/dashboard/drivers/${resolvedParams.id}`);
      } else {
        // Handle server-side validation errors
        if (result.fieldErrors) {
          Object.entries(result.fieldErrors).forEach(([field, errors]) => {
            if (errors && errors.length > 0) {
              console.error(`Field ${field}:`, errors[0]);
            }
          });
        }
        setServerError(result.error || "Failed to update driver");
      }
    } catch (error) {
      console.error("Error updating driver:", error);
      setServerError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sections = [
    { id: 1, title: "Personal Information", icon: UserIcon },
    { id: 2, title: "Professional Information", icon: IdentificationIcon },
    { id: 3, title: "Identification Documents", icon: DocumentTextIcon },
    { id: 4, title: "Driving License", icon: TruckIcon },
    { id: 5, title: "Medical & Security", icon: ShieldCheckIcon },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        <div className="flex flex-1 flex-col gap-8 p-6 max-w-7xl mx-auto">
          <div className="bg-card rounded-xl shadow-sm border p-12">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-muted-foreground font-medium">
                  Loading driver data...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!driver) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        <div className="flex flex-1 flex-col gap-8 p-6 max-w-7xl mx-auto">
          <div className="bg-card rounded-xl shadow-sm border p-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">
                Driver not found
              </h1>
              <p className="text-muted-foreground mb-6">
                The driver you&apos;re looking for doesn&apos;t exist.
              </p>
              <Link href="/dashboard/drivers">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  Back to Drivers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="flex flex-1 flex-col gap-8 p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-card rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href={`/dashboard/drivers/${resolvedParams.id}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  Back to Details
                </Button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <PencilIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-foreground">
                    Edit Driver
                  </h1>
                  <p className="text-sm text-muted-foreground font-mono">
                    {driver.driverName} (ID: {driver.driverId})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="bg-card rounded-xl shadow-sm border p-4">
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Button
                  key={section.id}
                  type="button"
                  variant={currentSection === section.id ? "default" : "ghost"}
                  onClick={() => setCurrentSection(section.id)}
                  className={`flex items-center gap-2 ${
                    currentSection === section.id
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {section.title}
                </Button>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Server Error Display */}
          {serverError && (
            <Card className="border border-destructive/50 bg-destructive/10">
              <CardContent className="p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="h-5 w-5 text-destructive" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-destructive">
                      Error
                    </h3>
                    <div className="mt-2 text-sm text-destructive">
                      <p>{serverError}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section 1: Personal Information */}
          {currentSection === 1 && (
            <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <UserIcon className="h-4 w-4 text-primary" />
                  </div>
                  Personal Information
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Update the driver&apos;s personal details and contact
                  information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="driverName">Driver Name *</Label>
                    <Input
                      id="driverName"
                      {...register("driverName")}
                      placeholder="Enter full name"
                    />
                    {errors.driverName && (
                      <p className="text-sm text-destructive">
                        {errors.driverName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fatherName">Father Name *</Label>
                    <Input
                      id="fatherName"
                      {...register("fatherName")}
                      placeholder="Enter father's name"
                    />
                    {errors.fatherName && (
                      <p className="text-sm text-destructive">
                        {errors.fatherName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Date of Birth *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !watch("dateOfBirth") && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {watch("dateOfBirth")
                            ? format(watch("dateOfBirth"), "PPP")
                            : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={watch("dateOfBirth")}
                          onSelect={(date) =>
                            setValue("dateOfBirth", date || new Date())
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.dateOfBirth && (
                      <p className="text-sm text-destructive">
                        {errors.dateOfBirth.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      {...register("age", { valueAsNumber: true })}
                      placeholder="Enter age"
                    />
                    {errors.age && (
                      <p className="text-sm text-destructive">
                        {errors.age.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select
                      value={watch("gender")}
                      onValueChange={(value) =>
                        setValue("gender", value as "Male" | "Female" | "Other")
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.gender && (
                      <p className="text-sm text-destructive">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="placeOfBirth">Place of Birth *</Label>
                    <Input
                      id="placeOfBirth"
                      {...register("placeOfBirth")}
                      placeholder="Enter place of birth"
                    />
                    {errors.placeOfBirth && (
                      <p className="text-sm text-destructive">
                        {errors.placeOfBirth.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      {...register("address")}
                      placeholder="Enter complete address"
                      rows={3}
                    />
                    {errors.address && (
                      <p className="text-sm text-destructive">
                        {errors.address.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maritalStatus">Marital Status *</Label>
                    <Select
                      value={watch("maritalStatus")}
                      onValueChange={(value) =>
                        setValue(
                          "maritalStatus",
                          value as "Single" | "Married" | "Divorced" | "Widowed"
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select marital status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Single">Single</SelectItem>
                        <SelectItem value="Married">Married</SelectItem>
                        <SelectItem value="Divorced">Divorced</SelectItem>
                        <SelectItem value="Widowed">Widowed</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.maritalStatus && (
                      <p className="text-sm text-destructive">
                        {errors.maritalStatus.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bloodGroup">Blood Group *</Label>
                    <Select
                      value={watch("bloodGroup")}
                      onValueChange={(value) =>
                        setValue(
                          "bloodGroup",
                          value as
                            | "A_Positive"
                            | "A_Negative"
                            | "B_Positive"
                            | "B_Negative"
                            | "AB_Positive"
                            | "AB_Negative"
                            | "O_Positive"
                            | "O_Negative"
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select blood group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A_Positive">A+</SelectItem>
                        <SelectItem value="A_Negative">A-</SelectItem>
                        <SelectItem value="B_Positive">B+</SelectItem>
                        <SelectItem value="B_Negative">B-</SelectItem>
                        <SelectItem value="AB_Positive">AB+</SelectItem>
                        <SelectItem value="AB_Negative">AB-</SelectItem>
                        <SelectItem value="O_Positive">O+</SelectItem>
                        <SelectItem value="O_Negative">O-</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.bloodGroup && (
                      <p className="text-sm text-destructive">
                        {errors.bloodGroup.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactNo">Contact Number *</Label>
                    <Input
                      id="contactNo"
                      {...register("contactNo")}
                      placeholder="Enter contact number"
                    />
                    {errors.contactNo && (
                      <p className="text-sm text-destructive">
                        {errors.contactNo.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact</Label>
                    <Input
                      id="emergencyContact"
                      {...register("emergencyContact")}
                      placeholder="Enter emergency contact number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactName">
                      Emergency Contact Name
                    </Label>
                    <Input
                      id="emergencyContactName"
                      {...register("emergencyContactName")}
                      placeholder="Enter emergency contact name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="Enter email address"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section 2: Professional Information */}
          {currentSection === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IdentificationIcon className="h-5 w-5" />
                  Professional Information
                </CardTitle>
                <CardDescription>
                  Work-related details and experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="driverId">Driver ID *</Label>
                    <Input
                      id="driverId"
                      type="number"
                      {...register("driverId", { valueAsNumber: true })}
                      placeholder="Enter driver ID"
                    />
                    {errors.driverId && (
                      <p className="text-sm text-destructive">
                        {errors.driverId.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pkCode">PK Code *</Label>
                    <Input
                      id="pkCode"
                      {...register("pkCode")}
                      placeholder="Enter PK code"
                    />
                    {errors.pkCode && (
                      <p className="text-sm text-destructive">
                        {errors.pkCode.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicleNo">Vehicle Number *</Label>
                    <Input
                      id="vehicleNo"
                      {...register("vehicleNo")}
                      placeholder="Enter vehicle number"
                    />
                    {errors.vehicleNo && (
                      <p className="text-sm text-destructive">
                        {errors.vehicleNo.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Induction Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !watch("inductionDate") && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {watch("inductionDate")
                            ? format(watch("inductionDate"), "PPP")
                            : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={watch("inductionDate")}
                          onSelect={(date) =>
                            setValue("inductionDate", date || new Date())
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.inductionDate && (
                      <p className="text-sm text-destructive">
                        {errors.inductionDate.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="education">Education Level *</Label>
                    <Select
                      value={watch("education")}
                      onValueChange={(value) =>
                        setValue(
                          "education",
                          value as
                            | "Primary"
                            | "Matric"
                            | "Inter"
                            | "Bachelors"
                            | "Masters"
                            | "None"
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Primary">Primary</SelectItem>
                        <SelectItem value="Matric">Matric</SelectItem>
                        <SelectItem value="Inter">Inter</SelectItem>
                        <SelectItem value="Bachelors">Bachelors</SelectItem>
                        <SelectItem value="Masters">Masters</SelectItem>
                        <SelectItem value="None">None</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.education && (
                      <p className="text-sm text-destructive">
                        {errors.education.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="previousJob">Previous Job *</Label>
                    <Select
                      value={watch("previousJob")}
                      onValueChange={(value) =>
                        setValue(
                          "previousJob",
                          value as "PSO" | "Shell" | "Aramco" | "Other" | "None"
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select previous job" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PSO">PSO</SelectItem>
                        <SelectItem value="Shell">Shell</SelectItem>
                        <SelectItem value="Aramco">Aramco</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                        <SelectItem value="None">None</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.previousJob && (
                      <p className="text-sm text-destructive">
                        {errors.previousJob.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="typeOfVehicle">Type of Vehicle *</Label>
                    <Select
                      value={watch("typeOfVehicle")}
                      onValueChange={(value) =>
                        setValue(
                          "typeOfVehicle",
                          value as
                            | "Tanker"
                            | "Trailer"
                            | "Dumper"
                            | "Truck"
                            | "Bus"
                            | "None"
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Tanker">Tanker</SelectItem>
                        <SelectItem value="Trailer">Trailer</SelectItem>
                        <SelectItem value="Dumper">Dumper</SelectItem>
                        <SelectItem value="Truck">Truck</SelectItem>
                        <SelectItem value="Bus">Bus</SelectItem>
                        <SelectItem value="None">None</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.typeOfVehicle && (
                      <p className="text-sm text-destructive">
                        {errors.typeOfVehicle.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentJob">Current Job *</Label>
                    <Input
                      id="currentJob"
                      {...register("currentJob")}
                      placeholder="Enter current job title"
                    />
                    {errors.currentJob && (
                      <p className="text-sm text-destructive">
                        {errors.currentJob.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experienceYear">Experience (Years)</Label>
                    <Input
                      id="experienceYear"
                      type="number"
                      {...register("experienceYear", { valueAsNumber: true })}
                      placeholder="Years of experience"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experienceMonth">Experience (Months)</Label>
                    <Input
                      id="experienceMonth"
                      type="number"
                      {...register("experienceMonth", { valueAsNumber: true })}
                      placeholder="Additional months"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary">Salary</Label>
                    <Input
                      id="salary"
                      type="number"
                      {...register("salary", { valueAsNumber: true })}
                      placeholder="Enter salary amount"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section 3: Identification Documents */}
          {currentSection === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DocumentTextIcon className="h-5 w-5" />
                  Identification Documents
                </CardTitle>
                <CardDescription>
                  CNIC and other identification details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="cnicNo">CNIC Number *</Label>
                    <Input
                      id="cnicNo"
                      {...register("cnicNo")}
                      placeholder="Enter 13-digit CNIC number"
                    />
                    {errors.cnicNo && (
                      <p className="text-sm text-destructive">
                        {errors.cnicNo.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>CNIC Issue Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !watch("cnicIssueDate") && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {watch("cnicIssueDate")
                            ? format(watch("cnicIssueDate"), "PPP")
                            : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={watch("cnicIssueDate")}
                          onSelect={(date) =>
                            setValue("cnicIssueDate", date || new Date())
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.cnicIssueDate && (
                      <p className="text-sm text-destructive">
                        {errors.cnicIssueDate.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>CNIC Expiry Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !watch("cnicExpiryDate") && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {watch("cnicExpiryDate")
                            ? format(watch("cnicExpiryDate"), "PPP")
                            : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={watch("cnicExpiryDate")}
                          onSelect={(date) =>
                            setValue("cnicExpiryDate", date || new Date())
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.cnicExpiryDate && (
                      <p className="text-sm text-destructive">
                        {errors.cnicExpiryDate.message}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section 4: Driving License */}
          {currentSection === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TruckIcon className="h-5 w-5" />
                  Driving License Information
                </CardTitle>
                <CardDescription>
                  License details and driving experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="licenseNo">License Number *</Label>
                    <Input
                      id="licenseNo"
                      {...register("licenseNo")}
                      placeholder="Enter license number"
                    />
                    {errors.licenseNo && (
                      <p className="text-sm text-destructive">
                        {errors.licenseNo.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>License Issue Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !watch("licenseIssueDate") &&
                              "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {watch("licenseIssueDate")
                            ? format(watch("licenseIssueDate"), "PPP")
                            : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={watch("licenseIssueDate")}
                          onSelect={(date) =>
                            setValue("licenseIssueDate", date || new Date())
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.licenseIssueDate && (
                      <p className="text-sm text-destructive">
                        {errors.licenseIssueDate.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>License Expiry Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !watch("licenseExpiryDate") &&
                              "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {watch("licenseExpiryDate")
                            ? format(watch("licenseExpiryDate"), "PPP")
                            : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={watch("licenseExpiryDate")}
                          onSelect={(date) =>
                            setValue("licenseExpiryDate", date || new Date())
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.licenseExpiryDate && (
                      <p className="text-sm text-destructive">
                        {errors.licenseExpiryDate.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="licenseStatus">License Status *</Label>
                    <Input
                      id="licenseStatus"
                      {...register("licenseStatus")}
                      placeholder="Enter license status"
                    />
                    {errors.licenseStatus && (
                      <p className="text-sm text-destructive">
                        {errors.licenseStatus.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="typeOfLicense">Type of License *</Label>
                    <Select
                      value={watch("typeOfLicense")}
                      onValueChange={(value) =>
                        setValue(
                          "typeOfLicense",
                          value as "LTV" | "HTV" | "PSV" | "International"
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select license type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="LTV">
                          LTV (Light Transport Vehicle)
                        </SelectItem>
                        <SelectItem value="HTV">
                          HTV (Heavy Transport Vehicle)
                        </SelectItem>
                        <SelectItem value="PSV">
                          PSV (Public Service Vehicle)
                        </SelectItem>
                        <SelectItem value="International">
                          International
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.typeOfLicense && (
                      <p className="text-sm text-destructive">
                        {errors.typeOfLicense.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="drivingSince">
                      Driving Since (Years) *
                    </Label>
                    <Input
                      id="drivingSince"
                      type="number"
                      {...register("drivingSince", { valueAsNumber: true })}
                      placeholder="Years of driving experience"
                    />
                    {errors.drivingSince && (
                      <p className="text-sm text-destructive">
                        {errors.drivingSince.message}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section 5: Medical & Security */}
          {currentSection === 5 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-5 w-5" />
                  Medical & Security Information
                </CardTitle>
                <CardDescription>
                  Health and security clearance details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="covid19Vaccination">
                      COVID-19 Vaccination Status *
                    </Label>
                    <Select
                      value={watch("covid19Vaccination")}
                      onValueChange={(value) =>
                        setValue(
                          "covid19Vaccination",
                          value as
                            | "FirstDose"
                            | "SecondDose"
                            | "FullyVaccinated"
                            | "Booster"
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select vaccination status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FirstDose">First Dose</SelectItem>
                        <SelectItem value="SecondDose">Second Dose</SelectItem>
                        <SelectItem value="FullyVaccinated">
                          Fully Vaccinated
                        </SelectItem>
                        <SelectItem value="Booster">Booster</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.covid19Vaccination && (
                      <p className="text-sm text-destructive">
                        {errors.covid19Vaccination.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medicalCheck">Medical Check *</Label>
                    <Select
                      value={watch("medicalCheck")}
                      onValueChange={(value) =>
                        setValue("medicalCheck", value as "Yes" | "No")
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select medical check status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.medicalCheck && (
                      <p className="text-sm text-destructive">
                        {errors.medicalCheck.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ddcNHMP">DDC NHMP *</Label>
                    <Select
                      value={watch("ddcNHMP")}
                      onValueChange={(value) =>
                        setValue("ddcNHMP", value as "Yes" | "No")
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select DDC status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.ddcNHMP && (
                      <p className="text-sm text-destructive">
                        {errors.ddcNHMP.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="policeVF">Police Verification *</Label>
                    <Select
                      value={watch("policeVF")}
                      onValueChange={(value) =>
                        setValue("policeVF", value as "Yes" | "No")
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select police verification status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.policeVF && (
                      <p className="text-sm text-destructive">
                        {errors.policeVF.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tpplPolicy">TPPL Policy *</Label>
                    <Select
                      value={watch("tpplPolicy")}
                      onValueChange={(value) =>
                        setValue("tpplPolicy", value as "Yes" | "No")
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select TPPL policy status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.tpplPolicy && (
                      <p className="text-sm text-destructive">
                        {errors.tpplPolicy.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="securityClearance">
                      Security Clearance
                    </Label>
                    <Select
                      value={watch("securityClearance")}
                      onValueChange={(value) =>
                        setValue("securityClearance", value as "Yes" | "No")
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select security clearance status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.securityClearance && (
                      <p className="text-sm text-destructive">
                        {errors.securityClearance.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      {...register("notes")}
                      placeholder="Enter any additional notes or comments"
                      rows={4}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Form Actions */}
          <Card className="bg-card border shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {currentSection > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentSection(currentSection - 1)}
                      className="border-border text-muted-foreground hover:bg-muted"
                    >
                      Previous
                    </Button>
                  )}
                </div>

                <div className="flex gap-2">
                  {currentSection < sections.length && (
                    <Button
                      type="button"
                      onClick={() => setCurrentSection(currentSection + 1)}
                    >
                      Next
                    </Button>
                  )}
                  {currentSection === sections.length && (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="min-w-32"
                    >
                      <CheckIcon className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Updating..." : "Update Driver"}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default EditDriverPage;
