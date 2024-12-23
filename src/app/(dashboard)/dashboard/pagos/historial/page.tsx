"use client";

import {useState} from "react";
import {format} from "date-fns";
import {es} from "date-fns/locale";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
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
// Datos de ejemplo para el historial de pagos
const pagosEjemplo = [
  {
    id: 1,
    fecha: new Date("2024-01-15"),
    monto: 150000,
    estado: "completado",
    descripcion: "Pago de cuota enero 2024",
    metodoPago: "Tarjeta de crédito",
  },
  {
    id: 2,
    fecha: new Date("2024-01-10"),
    monto: 75000,
    estado: "pendiente",
    descripcion: "Pago parcial cuota enero 2024",
    metodoPago: "Transferencia bancaria",
  },
  {
    id: 3,
    fecha: new Date("2023-12-15"),
    monto: 150000,
    estado: "rechazado",
    descripcion: "Pago de cuota diciembre 2023",
    metodoPago: "Tarjeta de débito",
  },
];

export default function HistorialPagos() {
  const [pagos] = useState(pagosEjemplo);

  const getEstadoBadge = (estado: string) => {
    const badges = {
      completado: <Badge className="bg-green-500">Completado</Badge>,
      pendiente: <Badge className="bg-yellow-500">Pendiente</Badge>,
      rechazado: <Badge className="bg-red-500">Rechazado</Badge>,
    };

    return badges[estado as keyof typeof badges];
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
                <BreadcrumbLink href="/dashboard/pagos">Pagos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Historial</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="container mx-auto py-6">
        <Card>
          <CardHeader>
            <CardTitle>Historial de Pagos</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead>Monto</TableHead>
                  <TableHead>Método de Pago</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pagos.map((pago) => (
                  <TableRow key={pago.id}>
                    <TableCell>{format(pago.fecha, "dd MMM yyyy", {locale: es})}</TableCell>
                    <TableCell>{pago.descripcion}</TableCell>
                    <TableCell>${pago.monto.toLocaleString("es-AR")}</TableCell>
                    <TableCell>{pago.metodoPago}</TableCell>
                    <TableCell>{getEstadoBadge(pago.estado)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </SidebarInset>
  );
}
