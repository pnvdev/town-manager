import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {Separator} from "@/components/ui/separator";
import {SidebarInset, SidebarTrigger} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator className="mr-2 h-4" orientation="vertical" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-8 p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            className="group relative h-40 overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg"
            href="/dashboard/reclamos/nuevo-reclamo"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/reclamo.jpg')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-25"
            />
            <div className="relative flex h-full flex-col items-center justify-center p-6">
              <span className="text-xl font-semibold">Nuevo Reclamo</span>
              <span className="mt-1 text-center text-sm text-muted-foreground">
                Registra un nuevo reclamo o sugerencia
              </span>
            </div>
          </Link>

          <Link
            className="group relative h-40 overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg"
            href="/dashboard/reclamos/mis-reclamos"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/mis-reclamos.jpg')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-25"
            />
            <div className="relative flex h-full flex-col items-center justify-center p-6">
              <span className="text-xl font-semibold">Mis Reclamos</span>
              <span className="mt-1 text-center text-sm text-muted-foreground">
                Consulta el estado de tus reclamos
              </span>
            </div>
          </Link>

          <Link
            className="group relative h-40 overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg"
            href="/dashboard/telefonos/emergencias"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/telefonos.jpg')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-25"
            />
            <div className="relative flex h-full flex-col items-center justify-center p-6">
              <span className="text-xl font-semibold">Teléfonos de Emergencia</span>
              <span className="mt-1 text-center text-sm text-muted-foreground">
                Números importantes para emergencias
              </span>
            </div>
          </Link>

          <Link
            className="group relative h-40 overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg"
            href="/dashboard/telefonos/servicios"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/servicios.jpg')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-25"
            />
            <div className="relative flex h-full flex-col items-center justify-center p-6">
              <span className="text-xl font-semibold">Teléfonos de Servicios</span>
              <span className="mt-1 text-center text-sm text-muted-foreground">
                Contactos de servicios públicos
              </span>
            </div>
          </Link>

          <Link
            className="group relative h-40 overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg"
            href="/dashboard/propuestas/nueva-propuesta"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/propuesta.jpg')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-25"
            />
            <div className="relative flex h-full flex-col items-center justify-center p-6">
              <span className="text-xl font-semibold">Nueva Propuesta</span>
              <span className="mt-1 text-center text-sm text-muted-foreground">
                Comparte tus ideas para mejorar la ciudad
              </span>
            </div>
          </Link>

          <Link
            className="group relative h-40 overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg"
            href="/dashboard/propuestas/mis-propuestas"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/mis-propuestas.jpg')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-25"
            />
            <div className="relative flex h-full flex-col items-center justify-center p-6">
              <span className="text-xl font-semibold">Mis Propuestas</span>
              <span className="mt-1 text-center text-sm text-muted-foreground">
                Consulta el estado de tus propuestas
              </span>
            </div>
          </Link>

          <Link
            className="group relative h-40 overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg"
            href="/dashboard/tramites/mis-tramites"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/tramites.jpg')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-25"
            />
            <div className="relative flex h-full flex-col items-center justify-center p-6">
              <span className="text-xl font-semibold">Mis Trámites</span>
              <span className="mt-1 text-center text-sm text-muted-foreground">
                Gestiona tus trámites municipales
              </span>
            </div>
          </Link>

          <Link
            className="group relative h-40 overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg"
            href="/dashboard/tramites/iniciar-tramite"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/nuevo-tramite.jpg')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-25"
            />
            <div className="relative flex h-full flex-col items-center justify-center p-6">
              <span className="text-xl font-semibold">Nuevo Trámite</span>
              <span className="mt-1 text-center text-sm text-muted-foreground">
                Inicia un nuevo trámite municipal
              </span>
            </div>
          </Link>

          <Link
            className="group relative h-40 overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg"
            href="/dashboard/pagos/realizar-pago"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/pagos.jpg')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-25"
            />
            <div className="relative flex h-full flex-col items-center justify-center p-6">
              <span className="text-xl font-semibold">Realizar Pago</span>
              <span className="mt-1 text-center text-sm text-muted-foreground">
                Realiza tus pagos municipales
              </span>
            </div>
          </Link>
        </div>
      </div>
    </SidebarInset>
  );
}
