import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <div className="grid gap-6 md:grid-cols-3">
        <Link
          className="group relative h-32 overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
          href="/dashboard/nuevo-reclamo"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[url('/images/reclamo.jpg')] bg-cover bg-center opacity-20"
          />
          <div className="relative flex h-full flex-col items-center justify-center p-4">
            <span className="text-lg font-semibold">Nuevo Reclamo</span>
            <span className="text-sm text-muted-foreground">
              Registra un nuevo reclamo o sugerencia
            </span>
          </div>
        </Link>

        <Link
          className="group relative h-32 overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
          href="/dashboard/telefonos"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[url('/images/telefonos.jpg')] bg-cover bg-center opacity-20"
          />
          <div className="relative flex h-full flex-col items-center justify-center p-4">
            <span className="text-lg font-semibold">Teléfonos Útiles</span>
            <span className="text-sm text-muted-foreground">Números de emergencia y servicios</span>
          </div>
        </Link>

        <Link
          className="group relative h-32 overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
          href="/dashboard/nueva-propuesta"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[url('/images/propuesta.jpg')] bg-cover bg-center opacity-20"
          />
          <div className="relative flex h-full flex-col items-center justify-center p-4">
            <span className="text-lg font-semibold">Nueva Propuesta Ciudadana</span>
            <span className="text-sm text-muted-foreground">
              Comparte tus ideas para mejorar la ciudad
            </span>
          </div>
        </Link>

        <Link
          className="group relative h-32 overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
          href="/dashboard/tramites"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[url('/images/tramites.jpg')] bg-cover bg-center opacity-20"
          />
          <div className="relative flex h-full flex-col items-center justify-center p-4">
            <span className="text-lg font-semibold">Trámites</span>
            <span className="text-sm text-muted-foreground">Gestiona tus trámites municipales</span>
          </div>
        </Link>

        <Link
          className="group relative h-32 overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
          href="/dashboard/pagos"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[url('/images/pagos.jpg')] bg-cover bg-center opacity-20"
          />
          <div className="relative flex h-full flex-col items-center justify-center p-4">
            <span className="text-lg font-semibold">Pagos</span>
            <span className="text-sm text-muted-foreground">Realiza tus pagos municipales</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
