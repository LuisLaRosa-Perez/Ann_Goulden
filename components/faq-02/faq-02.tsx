import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "¿Qué niveles educativos ofrece la institución?",
    answer:
      "La Institución Educativa Ann Goulden brinda educación inicial para niños y niñas de 3, 4 y 5 años bajo la modalidad de Educación Básica Regular.",
  },
  {
    question: "¿Cuál es el promedio de estudiantes por aula?",
    answer:
      "Cada aula cuenta con un promedio de 26 estudiantes, lo que permite un acompañamiento cercano y un ambiente de aprendizaje adecuado.",
  },
  {
    question: "¿Qué turnos están disponibles?",
    answer:
      "Ofrecemos turnos de mañana y tarde, brindando flexibilidad a las familias para elegir el horario que mejor se adapte a sus necesidades.",
  },
  {
    question: "¿Dónde está ubicada la institución?",
    answer:
      "Nos encontramos en la Avenida Integración S/N, distrito de Piura, provincia y departamento de Piura.",
  },
  {
    question: "¿Qué enfoque pedagógico utilizan?",
    answer:
      "Fomentamos el aprendizaje a través del juego, la exploración sensorial y la participación activa, en un entorno seguro, inclusivo y estimulante.",
  },
];

const FAQ02 = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12"
    >
      <div className="flex flex-col md:flex-row items-start gap-x-12 gap-y-6">
        <h2 className="text-4xl lg:text-5xl leading-[1.15]! font-semibold tracking-tighter">
          Preguntas Frecuentes
        </h2>

        <Accordion type="single" defaultValue="question-0" className="max-w-xl">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ02;

