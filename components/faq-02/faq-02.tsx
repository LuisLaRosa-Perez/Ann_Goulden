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
      "La Institución Educativa Ann Goulden brinda educación inicial y primaria en la modalidad de Educación Básica Regular, ofreciendo una formación integral que promueve el desarrollo académico, personal y social de los estudiantes",
  },
  {
    question: "¿Cuál es el promedio de estudiantes por aula?",
    answer:
      "Cada aula de nivel inicial cuenta con un promedio de 25 estudiantes, mientras que en el nivel primaria el promedio es de 36. Esta organización permite brindar un acompañamiento cercano a los alumnos y mantener un ambiente de aprendizaje participativo y adecuado para su desarrollo integral.",
  },
  {
    question: "¿Qué turnos están disponibles?",
    answer:
      "Ofrecemos turnos de mañana y tarde, brindando flexibilidad a las familias para elegir el horario que mejor se adapte a sus necesidades.",
  },
  {
    question: "¿Dónde está ubicada la institución?",
    answer:
      "Nos encontramos en la Av. Don Bosco, código Q9WC+MHV, en el distrito de Piura, provincia y departamento de Piura (20001).",
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

