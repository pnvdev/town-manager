"use client";

import * as React from "react";
import {
  FileText,
  Phone,
  Lightbulb,
  ScrollText,
  CreditCard
} from "lucide-react";

import {NavMain} from "@/components/nav-main";
import {NavUser} from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Usuario",
    email: "usuario@example.com",
    avatar: "/avatars/default.jpg",
  },
  navMain: [
    {
      title: "Reclamos",
      url: "/dashboard/nuevo-reclamo",
      icon: FileText,
      items: [
        {
          title: "Nuevo Reclamo",
          url: "/dashboard/nuevo-reclamo",
        },
        {
          title: "Mis Reclamos",
          url: "/dashboard/mis-reclamos",
        }
      ]
    },
    {
      title: "Teléfonos Útiles",
      url: "/dashboard/telefonos",
      icon: Phone,
      items: [
        {
          title: "Emergencias",
          url: "/dashboard/telefonos#emergencias",
        },
        {
          title: "Servicios",
          url: "/dashboard/telefonos#servicios", 
        }
      ]
    },
    {
      title: "Propuestas",
      url: "/dashboard/nueva-propuesta",
      icon: Lightbulb,
      items: [
        {
          title: "Nueva Propuesta",
          url: "/dashboard/nueva-propuesta",
        },
        {
          title: "Mis Propuestas",
          url: "/dashboard/mis-propuestas",
        }
      ]
    },
    {
      title: "Trámites",
      url: "/dashboard/tramites",
      icon: ScrollText,
      items: [
        {
          title: "Iniciar Trámite",
          url: "/dashboard/tramites/nuevo",
        },
        {
          title: "Mis Trámites",
          url: "/dashboard/tramites/lista",
        }
      ]
    },
    {
      title: "Pagos",
      url: "/dashboard/pagos",
      icon: CreditCard,
      items: [
        {
          title: "Realizar Pago",
          url: "/dashboard/pagos/nuevo",
        },
        {
          title: "Historial",
          url: "/dashboard/pagos/historial",
        }
      ]
    }
  ]
};

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <h2 className="px-4 text-lg font-semibold">Town Manager</h2>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
