"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {useRouter} from "next/navigation";

import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useToast} from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  titulo: z.string().min(5, {
    message: "El título debe tener al menos 5 caracteres.",
  }),
  descripcion: z.string().min(10, {
    message: "La descripción debe tener al menos 10 caracteres.",
  }),
  tipo: z.string().min(1, {
    message: "Debe seleccionar un tipo de trámite.",
  }),
});

export default function IniciarTramitePage() {
  const {toast} = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titulo: "",
      descripcion: "",
      tipo: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const response = await fetch("/api/tramites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Error al crear el trámite");
      }

      toast({
        title: "Trámite creado exitosamente",
        description: "Su trámite ha sido registrado correctamente.",
      });

      router.push("/dashboard/tramites");
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un error al crear el trámite. Por favor, intente nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="rounded-lg border bg-card text-card-foreground shadow">
        <div className="p-6">
          <h1 className="text-2xl font-semibold leading-none tracking-tight">
            Iniciar Nuevo Trámite
          </h1>
          <Form {...form}>
            <form className="mt-6 space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="tipo"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Tipo de Trámite</FormLabel>
                    <Select defaultValue={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione un tipo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="licencia">Licencia de Construcción</SelectItem>
                        <SelectItem value="permiso">Permiso de Funcionamiento</SelectItem>
                        <SelectItem value="certificado">Certificado de Residencia</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="titulo"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Título</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingrese el título del trámite" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="descripcion"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none"
                        placeholder="Describa los detalles de su trámite"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" disabled={isLoading} type="submit">
                {isLoading ? "Enviando..." : "Enviar Trámite"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
