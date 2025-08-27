"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un email válido.",
  }),
  role: z.string().min(1, {
    message: "Por favor selecciona tu rol.",
  }),
  province: z.string().optional(),
  message: z.string().optional(),
});

export default function Contact() {
  const [state, handleSubmit] = useFormspree("mzzazpon");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      province: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Create a form data object that matches Formspree's expected format
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("role", values.role);
    if (values.province) formData.append("province", values.province);
    if (values.message) formData.append("message", values.message);

    // Submit to Formspree
    await handleSubmit(formData);
    
    if (state.succeeded) {
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos pronto.",
      });
      form.reset();
    } else if (state.errors) {
      toast({
        title: "Error al enviar",
        description: "Por favor verifica los datos e intenta nuevamente.",
        variant: "destructive",
      });
    }
  }

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-r from-beige-100 to-primary/10"
      style={{
        backgroundImage: "url('/rural-green.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contacto</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            ¿Listo para transformar tus residuos en energía? Contáctanos y
            descubre cómo EnerGiro puede ayudarte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="bg-card p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
              Envíanos un mensaje
            </h3>
            {state.succeeded ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h4 className="text-lg font-semibold text-green-800 mb-2">
                  ¡Gracias por contactarnos!
                </h4>
                <p className="text-green-700">
                  Hemos recibido tu mensaje y te contactaremos pronto.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>¿Cuál es tu rol?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu rol" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="generador">
                            Generador de residuos
                          </SelectItem>
                          <SelectItem value="logistica">
                            Operador logístico
                          </SelectItem>
                          <SelectItem value="biogas">
                            Generador de biogás
                          </SelectItem>
                          <SelectItem value="gobierno">
                            Gobierno/Municipalidad
                          </SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="province"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Provincia (opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu provincia" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje (opcional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Cuéntanos más sobre tu interés en EnerGiro..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </Form>
            )}
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                Contacto directo
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Email</p>
                  <a
                    href="mailto:energiro@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    energiro@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                ¿Por qué contactarnos?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Descubre cómo monetizar tus residuos orgánicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Únete a la economía circular</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Contribuye a un futuro más sostenible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Accede a tecnología innovadora</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
