"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import * as z from "zod";

import {Button} from "@/components/ui/button";
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
import {toast} from "@/hooks/use-toast";

const formSchema = z.object({
  titulo: z.string().min(5, {
    message: "El título debe tener al menos 5 caracteres.",
  }),
  descripcion: z.string().min(20, {
    message: "La descripción debe tener al menos 20 caracteres.",
  }),
  ubicacion: z.string().min(5, {
    message: "La ubicación debe tener al menos 5 caracteres.",
  }),
  categoria: z.string({
    required_error: "Por favor seleccione una categoría.",
  }),
  contacto: z.string().email({
    message: "Por favor ingrese un email válido.",
  }),
});

export default function NuevoReclamoPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titulo: "",
      descripcion: "",
      ubicacion: "",
      categoria: "",
      contacto: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      const response = await fetch("/api/reclamos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el reclamo");
      }

      toast({
        title: "Reclamo enviado",
        description: "Su reclamo ha sido registrado exitosamente.",
      });

      router.push("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un error al enviar el reclamo. Por favor intente nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Nuevo Reclamo</h1>
        <p className="text-muted-foreground">
          Complete el formulario para registrar su reclamo o sugerencia.
        </p>
      </div>

      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-8 md:grid-cols-2">
            <FormField
              control={form.control}
              name="titulo"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingrese un título para su reclamo" {...field} />
                  </FormControl>
                  <FormDescription>
                    Escriba un título breve y descriptivo para su reclamo.
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
                      <SelectItem value="alumbrado">Alumbrado Público</SelectItem>
                      <SelectItem value="calles">Calles y Veredas</SelectItem>
                      <SelectItem value="limpieza">Limpieza</SelectItem>
                      <SelectItem value="transito">Tránsito</SelectItem>
                      <SelectItem value="seguridad">Seguridad</SelectItem>
                      <SelectItem value="otros">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Seleccione la categoría que mejor describe su reclamo.
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
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-[120px]"
                    placeholder="Describa detalladamente su reclamo o sugerencia"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Proporcione todos los detalles relevantes de su reclamo.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid gap-8 md:grid-cols-2">
            <FormField
              control={form.control}
              name="ubicacion"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Ubicación</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingrese la dirección o ubicación" {...field} />
                  </FormControl>
                  <FormDescription>
                    Indique la dirección o ubicación relacionada con el reclamo.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contacto"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email de contacto</FormLabel>
                  <FormControl>
                    <Input placeholder="nombre@ejemplo.com" type="email" {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingrese su email para recibir actualizaciones sobre su reclamo.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button disabled={isLoading} size="lg" type="submit">
              {isLoading ? "Enviando..." : "Enviar Reclamo"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
