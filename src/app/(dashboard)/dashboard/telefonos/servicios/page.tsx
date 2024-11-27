"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {Separator} from "@/components/ui/separator";
import {SidebarInset, SidebarTrigger} from "@/components/ui/sidebar";

const serviceNumbers = [
  {
    title: "EDESUR",
    number: "0800-333-3787",
    description: "Servicio de energía eléctrica - Reclamos y emergencias",
  },
  {
    title: "AySA",
    number: "0800-321-2482",
    description: "Servicio de agua y cloacas - Atención al usuario",
  },
  {
    title: "Metrogas",
    number: "0800-333-6427",
    description: "Servicio de gas natural - Atención al cliente",
  },
  {
    title: "Recolección de Residuos",
    number: "147",
    description: "Reclamos sobre recolección de residuos y limpieza urbana",
  },
  {
    title: "Alumbrado Público",
    number: "147",
    description: "Reportes de fallas en el alumbrado público",
  },
  {
    title: "Defensa del Consumidor",
    number: "0800-666-1518",
    description: "Consultas y reclamos sobre servicios públicos",
  },
];

export default function ServiciosPage() {
  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator className="mr-2 h-4" orientation="vertical" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Servicios</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-8 p-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Teléfonos de Servicios Públicos</h1>
          <p className="text-muted-foreground">
            Lista de números de contacto para servicios públicos. Toque el número para llamar
            directamente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceNumbers.map((service, index) => (
            <button
              key={index}
              className="text-left transition hover:scale-[1.02]"
              onClick={() => handleCall(service.number)}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-2xl font-bold text-primary">{service.number}</span>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </SidebarInset>
  );
}
