import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "Adanaque Silupu Miguel Ángel",
    designation: "Padre de familia",
    testimonial:
      "Mi hijo ha mejorado mucho en su rendimiento académico desde que ingresó. Se nota la dedicación de los docentes.",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    id: 2,
    name: "Albirena Cañola Alejandro Martín",
    designation: "Padre de familia",
    testimonial:
      "Me siento tranquilo al saber que mi hija recibe no solo educación de calidad, sino también valores que la forman como persona.",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 3,
    name: "Arevalo Vilela Juan de la Cruz",
    designation: "Padre de familia",
    testimonial:
      "Lo que más destaco es el ambiente familiar y el respeto que se inculca a los niños. Eso marca la diferencia.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 4,
    name: "Atiaja Lopez Gabriel Francisco",
    designation: "Padre de familia",
    testimonial:
      "Al ver el entusiasmo con el que mi hijo va a clases, confirmo que tomamos la mejor decisión al elegir esta institución.",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 5,
    name: "Avalos Sandoval Jeison Abraham",
    designation: "Padre de familia",
    testimonial:
      "El colegio se preocupa por cada estudiante, brindando apoyo personalizado que ayuda a superar las dificultades.",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: 6,
    name: "Vilela Meca Cintya Lisbeth",
    designation: "Madre de familia",
    testimonial:
      "Estoy muy agradecida con los profesores, siempre atentos y dispuestos a orientar a los padres en el proceso educativo.",
    avatar: "https://randomuser.me/api/portraits/women/35.jpg",
  },
  {
    id: 7,
    name: "Villegas Flores Erika Paola",
    designation: "Madre de familia",
    testimonial:
      "La institución fomenta un aprendizaje integral. Mi hija disfruta aprender y también participar en actividades culturales.",
    avatar: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    id: 8,
    name: "Chanchari Huansi Evila",
    designation: "Madre de familia",
    testimonial:
      "El acompañamiento constante y el trato humano hacen que los niños se sientan seguros y felices dentro del colegio.",
    avatar: "https://randomuser.me/api/portraits/women/37.jpg",
  },
  {
    id: 9,
    name: "Cordova Jimenez Jacinta",
    designation: "Madre de familia",
    testimonial:
      "Me gusta que no solo se enfoquen en lo académico, sino también en desarrollar la responsabilidad y el respeto.",
    avatar: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    id: 10,
    name: "Perleche Marquez Tamy Tamara",
    designation: "Madre de familia",
    testimonial:
      "El colegio brinda confianza a los padres porque se nota la seriedad en la enseñanza y el cariño hacia los estudiantes.",
    avatar: "https://randomuser.me/api/portraits/women/39.jpg",
  },
  {
    id: 11,
    name: "Edwin Jair Gonzales Gutierrez",
    designation: "Exalumno",
    testimonial:
      "La formación recibida aquí me ha servido como base en mi vida profesional y personal. Estoy agradecido.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 12,
    name: "Luis Francisco La Rosa Perez",
    designation: "Docente",
    testimonial:
      "Como docente, puedo decir que este colegio se preocupa por innovar y dar lo mejor a sus estudiantes.",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  },
];

const Testimonials = () => (
  <div id="testimonials" className="flex justify-center items-center py-20">
    <div className="h-full w-full">
      <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center tracking-tight px-6">
        Testimonios
      </h2>
      <div className="relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:40s]">
  <TestimonialList />
</Marquee>
<Marquee pauseOnHover reverse className="mt-0 [--duration:40s]">
  <TestimonialList />
</Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-96 max-w-sm bg-accent rounded-xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <TwitterLogo className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default Testimonials;
