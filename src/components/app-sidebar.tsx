"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  FileText,
  Phone,
  Lightbulb,
  ScrollText,
  CreditCard,
} from "lucide-react";

import {TeamSwitcher} from "./team-switcher";

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
  teams: [
    // {
    //   name: "Acme Inc",
    //   logo: GalleryVerticalEnd,
    //   plan: "Enterprise",
    // },
    {
      name: "Town Manager",
      logo: AudioWaveform,
      plan: "",
    },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  navMain: [
    {
      title: "Reclamos",
      url: "/dashboard/reclamos",
      icon: FileText,
      items: [
        {
          title: "Nuevo Reclamo",
          url: "/dashboard/reclamos/nuevo-reclamo",
        },
        {
          title: "Mis Reclamos",
          url: "/dashboard/reclamos/mis-reclamos",
        },
      ],
    },
    {
      title: "Teléfonos Útiles",
      url: "/dashboard/telefonos",
      icon: Phone,
      items: [
        {
          title: "Emergencias",
          url: "/dashboard/telefonos/emergencias",
        },
        {
          title: "Servicios",
          url: "/dashboard/telefonos/servicios",
        },
      ],
    },
    {
      title: "Propuestas",
      url: "/dashboard/propuestas",
      icon: Lightbulb,
      items: [
        {
          title: "Nueva Propuesta",
          url: "/dashboard/propuestas/nueva-propuesta",
        },
        {
          title: "Mis Propuestas",
          url: "/dashboard/propuestas/mis-propuestas",
        },
      ],
    },
    {
      title: "Trámites",
      url: "/dashboard/tramites",
      icon: ScrollText,
      items: [
        {
          title: "Iniciar Trámite",
          url: "/dashboard/tramites/iniciar-tramite",
        },
        {
          title: "Mis Trámites",
          url: "/dashboard/tramites/mis-tramites",
        },
      ],
    },
    {
      title: "Pagos",
      url: "/dashboard/pagos",
      icon: CreditCard,
      items: [
        {
          title: "Realizar Pago",
          url: "/dashboard/pagos/realizar-pago",
        },
        {
          title: "Historial",
          url: "/dashboard/pagos/historial",
        },
      ],
    },
  ],
};

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
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
