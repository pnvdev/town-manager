"use client";

import {useEffect, useState} from "react";

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
import {Badge} from "@/components/ui/badge";

type Propuesta = {
  id: string;
  titulo: string;
  categoria: string;
  descripcion: string;
  estado: "pendiente" | "en_revision" | "aprobada" | "rechazada";
  fechaCreacion: string;
};

export default function MisPropuestasPage() {
  // Datos de ejemplo
  const propuestasEjemplo: Propuesta[] = [
    {
      id: "1",
      titulo: "Mejora de Iluminación en Plaza San Martín",
      categoria: "infraestructura",
      descripcion:
        "Propuesta para mejorar la iluminación LED en toda la plaza para aumentar la seguridad y permitir actividades nocturnas.",
      estado: "pendiente",
      fechaCreacion: "2024-01-15T10:00:00Z",
    },
    {
      id: "2",
      titulo: "Programa de Reciclaje Comunitario",
      categoria: "medioambiente",
      descripcion:
        "Implementación de un sistema de reciclaje con contenedores diferenciados y programa educativo para vecinos.",
      estado: "en_revision",
      fechaCreacion: "2024-01-10T15:30:00Z",
    },
    {
      id: "3",
      titulo: "Taller de Arte para Adultos Mayores",
      categoria: "cultura",
      descripcion:
        "Creación de un taller semanal de arte y manualidades para adultos mayores en el centro cultural.",
      estado: "aprobada",
      fechaCreacion: "2023-12-20T09:15:00Z",
    },
    {
      id: "4",
      titulo: "Sistema de Cámaras de Seguridad",
      categoria: "seguridad",
      descripcion: "Instalación de cámaras de seguridad en puntos estratégicos del barrio.",
      estado: "rechazada",
      fechaCreacion: "2023-12-15T14:20:00Z",
    },
  ];

  const [propuestas, setPropuestas] = useState<Propuesta[]>(propuestasEjemplo);
  const [isLoading, setIsLoading] = useState(false);

  const getEstadoBadge = (estado: Propuesta["estado"]) => {
    const estados = {
      pendiente: <Badge variant="outline">Pendiente</Badge>,
      en_revision: <Badge variant="secondary">En Revisión</Badge>,
      aprobada: <Badge className="bg-green-500 hover:bg-green-600">Aprobada</Badge>,
      rechazada: <Badge variant="destructive">Rechazada</Badge>,
    };

    return estados[estado];
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
                <BreadcrumbPage>Mis Propuestas</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-8 p-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Mis Propuestas</h1>
          <p className="text-muted-foreground">
            Aquí puede ver todas las propuestas que ha enviado y su estado actual.
          </p>
        </div>

        <div className="grid gap-4">
          {isLoading ? (
            <Card>
              <CardContent className="p-6">
                <p>Cargando propuestas...</p>
              </CardContent>
            </Card>
          ) : propuestas.length === 0 ? (
            <Card>
              <CardContent className="p-6">
                <p>No ha enviado ninguna propuesta aún.</p>
              </CardContent>
            </Card>
          ) : (
            propuestas.map((propuesta) => (
              <Card key={propuesta.id} className="hover:bg-muted/50">
                <CardHeader className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{propuesta.titulo}</CardTitle>
                      <CardDescription className="mt-1.5">
                        {formatDate(propuesta.fechaCreacion)}
                      </CardDescription>
                    </div>
                    {getEstadoBadge(propuesta.estado)}
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Categoría</p>
                      <p className="mt-0.5 capitalize">{propuesta.categoria.replace("_", " ")}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Descripción</p>
                      <p className="mt-0.5">{propuesta.descripcion}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </SidebarInset>
  );
}
