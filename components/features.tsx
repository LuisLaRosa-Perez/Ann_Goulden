import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Settings2,
    title: "Diseños personalizables",
    description:
      "Diseña tu espacio con la simplicidad de arrastrar y soltar: crea cuadrículas, listas o galerías en segundos.",
  },
  {
    icon: Blocks,
    title: "Widgets interactivos",
    description:
      "Incrusta encuestas, cuestionarios o formularios para mantener a tu audiencia enganchada.",
  },
  {
    icon: Bot,
    title: "Herramientas basadas en IA",
    description:
      "Genera resúmenes, formatea automáticamente el contenido o traduce a varios idiomas sin problemas.",
  },
  {
    icon: Film,
    title: "Integraciones multimedia",
    description:
      "Conéctate con Spotify, Instagram o tu propia biblioteca multimedia para obtener imágenes y sonidos dinámicos.",
  },
  {
    icon: ChartPie,
    title: "Análisis avanzado",
    description:
      "Realiza un seguimiento de la participación, los clics y la actividad de los usuarios con gráficos e informes intuitivos.",
  },
  {
    icon: MessageCircle,
    title: "Colaboración sin fisuras",
    description:
      "Comenta, etiqueta y asigna tareas directamente en tus documentos.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Da rienda suelta a tu creatividad
      </h2>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
