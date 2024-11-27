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
import {SidebarInset, SidebarTrigger} from "@/components/ui/sidebar";
import {Badge} from "@/components/ui/badge";

type Tramite = {
  id: string;
  titulo: string;
  tipo: string;
  descripcion: string;
  estado: "pendiente" | "en_proceso" | "completado" | "rechazado";
  fechaCreacion: string;
};

export default function MisTramitesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [tramites, setTramites] = useState<Tramite[]>([]);

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setTramites([
        {
          id: "1",
          titulo: "Solicitud de Licencia de Construcción",
          tipo: "licencia",
          descripcion: "Solicitud para construcción de ampliación residencial en zona urbana.",
          estado: "pendiente",
          fechaCreacion: "2024-01-15T10:00:00Z",
        },
        {
          id: "2",
          titulo: "Permiso de Funcionamiento Local Comercial",
          tipo: "permiso",
          descripcion: "Solicitud de permiso para apertura de local comercial en el centro.",
          estado: "en_proceso",
          fechaCreacion: "2024-01-10T15:30:00Z",
        },
        {
          id: "3",
          titulo: "Registro de Marca Comercial",
          tipo: "registro",
          descripcion: "Registro de marca para nuevo emprendimiento local.",
          estado: "completado",
          fechaCreacion: "2023-12-20T09:15:00Z",
        },
        {
          id: "4",
          titulo: "Permiso de Eventos Públicos",
          tipo: "permiso",
          descripcion: "Solicitud rechazada por documentación incompleta.",
          estado: "rechazado",
          fechaCreacion: "2024-01-05T11:45:00Z",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getEstadoBadge = (estado: Tramite["estado"]) => {
    const badges = {
      pendiente: <Badge variant="outline">Pendiente</Badge>,
      en_proceso: <Badge variant="secondary">En Proceso</Badge>,
      completado: (
        <Badge className="border-green-600 text-green-600" variant="outline">
          Completado
        </Badge>
      ),
      rechazado: <Badge variant="destructive">Rechazado</Badge>,
    };

    return badges[estado];
  };

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger />
          <Breadcrumb className="ml-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard/tramites">Trámites</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Mis Trámites</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-8 p-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Mis Trámites</h1>
          <p className="text-muted-foreground">
            Aquí puede ver todos los trámites que ha iniciado y su estado actual.
          </p>
        </div>

        <div className="grid gap-4">
          {isLoading ? (
            <Card>
              <CardContent className="p-6">
                <p>Cargando trámites...</p>
              </CardContent>
            </Card>
          ) : tramites.length === 0 ? (
            <Card>
              <CardContent className="p-6">
                <p>No ha iniciado ningún trámite aún.</p>
              </CardContent>
            </Card>
          ) : (
            tramites.map((tramite) => (
              <Card key={tramite.id} className="hover:bg-muted/50">
                <CardHeader className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{tramite.titulo}</CardTitle>
                      <CardDescription className="mt-1.5">
                        {formatDate(tramite.fechaCreacion)}
                      </CardDescription>
                    </div>
                    {getEstadoBadge(tramite.estado)}
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Tipo de Trámite</p>
                      <p className="mt-0.5 capitalize">{tramite.tipo.replace("_", " ")}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Descripción</p>
                      <p className="mt-0.5">{tramite.descripcion}</p>
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
