"use client";

import { useState } from "react";
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
  UserIcon,
  IdentificationIcon,
  TruckIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { createDriver, type CreateDriverInput } from "@/actions/driver/actions";
import { useRouter } from "next/navigation";

// Zod schema for validation
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

const CreateNewDriverPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  const [serverError, setServerError] = useState<string>("");
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

  const onSubmit = async (data: DriverFormData) => {
    setIsSubmitting(true);
    setServerError("");

    try {
      // Transform the data for server action
      const serverData: CreateDriverInput = {
        ...data,
        dateOfBirth: data.dateOfBirth.toISOString(),
        inductionDate: data.inductionDate.toISOString(),
        cnicIssueDate: data.cnicIssueDate.toISOString(),
        cnicExpiryDate: data.cnicExpiryDate.toISOString(),
        licenseIssueDate: data.licenseIssueDate.toISOString(),
        licenseExpiryDate: data.licenseExpiryDate.toISOString(),
      };

      const result = await createDriver(serverData);

      if (result.success) {
        // Redirect to drivers list on success
        router.push("/dashboard/drivers");
      } else {
        // Handle server-side validation errors
        if (result.fieldErrors) {
          // Set field-specific errors
          Object.entries(result.fieldErrors).forEach(([field, errors]) => {
            if (errors && errors.length > 0) {
              // You can set these errors on the form fields
              console.error(`Field ${field}:`, errors[0]);
            }
          });
        }
        setServerError(result.error || "Failed to create driver");
      }
    } catch (error) {
      console.error("Error creating driver:", error);
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

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Create New Driver</h1>
        <p className="text-muted-foreground">
          Add a new driver to the system with complete information.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Server Error Display */}
        {serverError && (
          <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <ShieldCheckIcon className="h-5 w-5 text-destructive" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-destructive">Error</h3>
                <div className="mt-2 text-sm text-destructive">
                  <p>{serverError}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section Navigation */}
        <Card>
          <CardHeader>
            <CardTitle>Form Sections</CardTitle>
            <CardDescription>
              Navigate through different sections of the form
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <Button
                    key={section.id}
                    type="button"
                    variant={
                      currentSection === section.id ? "default" : "outline"
                    }
                    onClick={() => setCurrentSection(section.id)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {section.title}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Section 1: Personal Information */}
        {currentSection === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Basic personal details of the driver
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
                          !watch("licenseIssueDate") && "text-muted-foreground"
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
                          !watch("licenseExpiryDate") && "text-muted-foreground"
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
                  <Label htmlFor="drivingSince">Driving Since (Years) *</Label>
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
                  <Label htmlFor="securityClearance">Security Clearance</Label>
                  <Select
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
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {currentSection > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentSection(currentSection - 1)}
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
                {isSubmitting ? "Creating..." : "Create Driver"}
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNewDriverPage;
