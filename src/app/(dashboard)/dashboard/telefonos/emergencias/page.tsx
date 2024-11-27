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

const emergencyNumbers = [
  {
    title: "Policía",
    number: "911",
    description: "Para emergencias policiales y situaciones de riesgo inmediato",
  },
  {
    title: "Bomberos",
    number: "100",
    description: "Para incendios y rescates",
  },
  {
    title: "Ambulancia",
    number: "107",
    description: "Para emergencias médicas",
  },
  {
    title: "Defensa Civil",
    number: "103",
    description: "Para emergencias y catástrofes naturales",
  },
  {
    title: "Violencia de Género",
    number: "144",
    description: "Línea gratuita de atención para víctimas de violencia de género",
  },
  {
    title: "Emergencias Gas",
    number: "0800-333-2222",
    description: "Para emergencias relacionadas con pérdidas de gas",
  },
];

export default function EmergenciasPage() {
  const handleCall = (phoneNumber: string) => {
    // eslint-disable-next-line react-compiler/react-compiler
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
                <BreadcrumbLink href="/dashboard/telefonos">Teléfonos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Emergencias</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-8 p-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Teléfonos de Emergencia</h1>
          <p className="text-muted-foreground">
            Lista de números de contacto para situaciones de emergencia. Toque el número para llamar
            directamente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {emergencyNumbers.map((emergency, index) => (
            <button
              key={index}
              className="text-left transition hover:scale-[1.02]"
              type="button"
              onClick={() => handleCall(emergency.number)}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{emergency.title}</CardTitle>
                  <CardDescription>{emergency.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-2xl font-bold text-primary">{emergency.number}</span>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </SidebarInset>
  );
}
