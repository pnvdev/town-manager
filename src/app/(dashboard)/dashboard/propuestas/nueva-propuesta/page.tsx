"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {useRouter} from "next/navigation";

import {Card, CardContent} from "@/components/ui/card";
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {toast} from "@/hooks/use-toast";

const formSchema = z.object({
  titulo: z
    .string()
    .min(5, {
      message: "El título debe tener al menos 5 caracteres.",
    })
    .max(100, {
      message: "El título no puede exceder los 100 caracteres.",
    }),
  categoria: z.string({
    required_error: "Por favor seleccione una categoría.",
  }),
  descripcion: z
    .string()
    .min(20, {
      message: "La descripción debe tener al menos 20 caracteres.",
    })
    .max(1000, {
      message: "La descripción no puede exceder los 1000 caracteres.",
    }),
  beneficios: z
    .string()
    .min(20, {
      message: "Los beneficios deben tener al menos 20 caracteres.",
    })
    .max(500, {
      message: "Los beneficios no pueden exceder los 500 caracteres.",
    }),
  recursos: z
    .string()
    .max(500, {
      message: "Los recursos no pueden exceder los 500 caracteres.",
    })
    .optional(),
});

export default function NuevaPropuestaPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titulo: "",
      descripcion: "",
      beneficios: "",
      recursos: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/propuestas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Error al enviar la propuesta");
      }

      toast({
        title: "Propuesta enviada",
        description: "Su propuesta ha sido enviada correctamente.",
      });

      router.push("/dashboard/propuestas");
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un error al enviar la propuesta. Por favor, intente nuevamente.",
        variant: "destructive",
      });
      console.error(error);
    }
  }

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
                <BreadcrumbLink href="/dashboard/propuestas">Propuestas</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Nueva Propuesta</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-8 p-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Nueva Propuesta Ciudadana</h1>
          <p className="text-muted-foreground">
            Complete el formulario para presentar su propuesta de mejora para la comunidad.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-8 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="titulo"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Título de la Propuesta</FormLabel>
                        <FormControl>
                          <Input placeholder="Ingrese un título descriptivo" {...field} />
                        </FormControl>
                        <FormDescription>
                          Escriba un título claro y conciso para su propuesta.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="categoria"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Categoría</FormLabel>
                        <Select defaultValue={field.value} onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccione una categoría" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="infraestructura">Infraestructura</SelectItem>
                            <SelectItem value="medioambiente">Medio Ambiente</SelectItem>
                            <SelectItem value="cultura">Cultura y Educación</SelectItem>
                            <SelectItem value="seguridad">Seguridad</SelectItem>
                            <SelectItem value="transporte">Transporte</SelectItem>
                            <SelectItem value="salud">Salud</SelectItem>
                            <SelectItem value="otros">Otros</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Seleccione la categoría que mejor se ajuste a su propuesta.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="descripcion"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Descripción de la Propuesta</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[120px]"
                          placeholder="Describa detalladamente su propuesta"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Explique en detalle su propuesta y cómo se implementaría.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="beneficios"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Beneficios para la Comunidad</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[120px]"
                          placeholder="Describa los beneficios que aportará su propuesta"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Explique cómo su propuesta beneficiará a la comunidad.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="recursos"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Recursos Necesarios (Opcional)</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[120px]"
                          placeholder="Describa los recursos necesarios para implementar la propuesta"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Indique qué recursos serían necesarios para llevar a cabo la propuesta.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button size="lg" type="submit">
                    Enviar Propuesta
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </SidebarInset>
  );
}
