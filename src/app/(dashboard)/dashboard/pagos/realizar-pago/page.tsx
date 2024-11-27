"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Card, CardHeader, CardContent, CardFooter} from "@/components/ui/card";
import {toast} from "@/hooks/use-toast";
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

interface PaymentFormData {
  service: string;
  amount: number;
  reference: string;
}

export default function RealizarPago() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {errors},
    control,
  } = useForm<PaymentFormData>();

  const onSubmit = async (data: PaymentFormData) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al procesar el pago");
      }

      toast({
        title: "Pago realizado",
        description: "El pago se ha procesado exitosamente",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un error al procesar el pago",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
                <BreadcrumbPage>Realizar pago</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="container mx-auto py-10">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">Realizar Pago de Servicios</h2>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <label htmlFor="service">Servicio</label>
                <Select onValueChange={(value) => (control._formValues.service = value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agua">Agua</SelectItem>
                    <SelectItem value="luz">Luz</SelectItem>
                    <SelectItem value="gas">Gas</SelectItem>
                    <SelectItem value="internet">Internet</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-sm text-red-500">{errors.service.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="reference">Número de Referencia</label>
                <Input
                  {...register("reference", {
                    required: "Ingrese el número de referencia",
                    minLength: {value: 8, message: "Mínimo 8 caracteres"},
                  })}
                  placeholder="Ingrese el número de referencia"
                />
                {errors.reference && (
                  <p className="text-sm text-red-500">{errors.reference.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="amount">Monto a Pagar</label>
                <Input
                  type="number"
                  {...register("amount", {
                    required: "Ingrese el monto a pagar",
                    min: {value: 1, message: "El monto debe ser mayor a 0"},
                  })}
                  placeholder="Ingrese el monto"
                />
                {errors.amount && <p className="text-sm text-red-500">{errors.amount.message}</p>}
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              disabled={isLoading}
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              {isLoading ? "Procesando..." : "Realizar Pago"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </SidebarInset>
  );
}
