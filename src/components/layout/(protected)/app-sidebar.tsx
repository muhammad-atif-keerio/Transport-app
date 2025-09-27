"use client";

import * as React from "react";
import {
  Users,
  FileText,
  Shield,
  Settings,
  BarChart3,
  Truck,
  AlertTriangle,
  UserCheck,
} from "lucide-react";

import { NavMain } from "@/components/layout/(protected)/nav-main";
import { NavProjects } from "@/components/layout/(protected)/nav-projects";
import { NavUser } from "@/components/layout/(protected)/nav-user";
import { TeamSwitcher } from "@/components/layout/(protected)/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Transport management specific data
const data = {
  user: {
    name: "Admin",
    email: "admin@transport.com",
    avatar: "/avatars/admin.jpg",
  },
  teams: [
    {
      name: "Transport Management",
      logo: Truck,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: BarChart3,
      isActive: true,
    },
    {
      title: "Driver Management",
      url: "#",
      icon: Users,
      items: [
        {
          title: "All Drivers",
          url: "/dashboard/drivers",
        },
        {
          title: "Add Driver",
          url: "/dashboard/drivers/new",
        },
        {
          title: "Driver Reports",
          url: "/dashboard/drivers/reports",
        },
      ],
    },
    {
      title: "Compliance",
      url: "#",
      icon: Shield,
      items: [
        {
          title: "License Tracking",
          url: "/dashboard/compliance/licenses",
        },
        {
          title: "Medical Records",
          url: "/dashboard/compliance/medical",
        },
        {
          title: "Training Records",
          url: "/dashboard/compliance/training",
        },
        {
          title: "Violations",
          url: "/dashboard/compliance/violations",
        },
      ],
    },
    {
      title: "Fleet Operations",
      url: "#",
      icon: Truck,
      items: [
        {
          title: "Vehicle Assignments",
          url: "/dashboard/fleet/assignments",
        },
        {
          title: "Route Management",
          url: "/dashboard/fleet/routes",
        },
        {
          title: "Performance",
          url: "/dashboard/fleet/performance",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Driver Reports",
          url: "/dashboard/reports/drivers",
        },
        {
          title: "Compliance Reports",
          url: "/dashboard/reports/compliance",
        },
        {
          title: "Fleet Reports",
          url: "/dashboard/reports/fleet",
        },
        {
          title: "Analytics",
          url: "/dashboard/reports/analytics",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "System Settings",
          url: "/dashboard/settings/system",
        },
        {
          title: "User Management",
          url: "/dashboard/settings/users",
        },
        {
          title: "Notifications",
          url: "/dashboard/settings/notifications",
        },
        {
          title: "Integrations",
          url: "/dashboard/settings/integrations",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Active Drivers",
      url: "/dashboard/drivers?status=active",
      icon: UserCheck,
    },
    {
      name: "Expiring Licenses",
      url: "/dashboard/compliance/licenses?expiring=true",
      icon: AlertTriangle,
    },
    {
      name: "Fleet Status",
      url: "/dashboard/fleet/status",
      icon: Truck,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
