"use client";

import {useState} from "react";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ScrollArea} from "@/components/ui/scroll-area";

// Datos de prueba
const reclamosDePrueba = [
  {
    id: 1,
    titulo: "Luminaria rota en Av. Principal",
    descripcion:
      "La luminaria de la esquina lleva más de una semana sin funcionar, generando inseguridad en la zona.",
    ubicacion: "Av. Principal 1234",
    categoria: "alumbrado",
    contacto: "juan@ejemplo.com",
    estado: "Pendiente",
    fecha: "2024-01-15",
  },
  {
    id: 2,
    titulo: "Bache peligroso",
    descripcion:
      "Hay un bache de gran tamaño que está causando problemas al tránsito y puede dañar los vehículos.",
    ubicacion: "Calle San Martín 567",
    categoria: "calles",
    contacto: "maria@ejemplo.com",
    estado: "En proceso",
    fecha: "2024-01-14",
  },
  {
    id: 3,
    titulo: "Basura acumulada",
    descripcion:
      "Hace varios días que no pasa el camión recolector y se está acumulando basura en la esquina.",
    ubicacion: "Belgrano y Rivadavia",
    categoria: "limpieza",
    contacto: "pedro@ejemplo.com",
    estado: "Resuelto",
    fecha: "2024-01-10",
  },
];

export default function MisReclamosPage() {
  const [reclamos] = useState(reclamosDePrueba);

  const getBadgeVariant = (estado: string) => {
    switch (estado.toLowerCase()) {
      case "pendiente":
        return "destructive";
      case "en proceso":
        return "secondary";
      case "resuelto":
        return "outline";
      default:
        return "default";
    }
  };

  const getCategoriaLabel = (categoria: string) => {
    const categorias: {[key: string]: string} = {
      alumbrado: "Alumbrado Público",
      calles: "Calles y Veredas",
      limpieza: "Limpieza",
      transito: "Tránsito",
      seguridad: "Seguridad",
      otros: "Otros",
    };

    return categorias[categoria] || categoria;
  };

  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <Card>
        <CardHeader>
          <CardTitle>Mis Reclamos</CardTitle>
          <CardDescription>Listado de todos los reclamos que has realizado</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="grid gap-4">
              {reclamos.map((reclamo) => (
                <Card key={reclamo.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{reclamo.titulo}</CardTitle>
                      <Badge
                        className={` ${reclamo.estado.toLowerCase() === "pendiente" ? "bg-red-500 hover:bg-red-600" : ""} ${reclamo.estado.toLowerCase() === "en proceso" ? "bg-blue-500 hover:bg-blue-600" : ""} ${reclamo.estado.toLowerCase() === "resuelto" ? "bg-green-500 text-white hover:bg-green-600" : ""} font-bold`}
                        variant={getBadgeVariant(reclamo.estado)}
                      >
                        {reclamo.estado}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 text-sm">
                    <p className="text-base">{reclamo.descripcion}</p>
                    <div className="grid gap-1 text-muted-foreground">
                      <p>
                        <span className="font-medium text-foreground">Ubicación:</span>{" "}
                        {reclamo.ubicacion}
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Categoría:</span>{" "}
                        {getCategoriaLabel(reclamo.categoria)}
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Contacto:</span>{" "}
                        {reclamo.contacto}
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Fecha:</span>{" "}
                        {new Date(reclamo.fecha).toLocaleDateString("es-AR")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
