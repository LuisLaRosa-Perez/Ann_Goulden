import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import { Logo } from "@/components/navbar/logo"; // Import the Logo component

const footerLinks = [
  {
    title: "Características",
    href: "#features",
  },
  {
    title: "Preguntas Frecuentes",
    href: "#faq",
  },
  {
    title: "Testimonios",
    href: "#testimonials",
  },
];

const Footer = () => {
  return (
    <footer className="dark:border-t mt-40 dark bg-background text-foreground">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
          <div>
            <Logo /> {/* Use the Logo component here */}

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Removed Subscribe Newsletter section */}

        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground text-center sm:text-start">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              I.E Ann Goulden
            </Link>
            . Todos los derechos reservados.
          </span>

           <div className="flex items-center gap-5 text-muted-foreground">
      <Link
        href="https://www.facebook.com/share/1Cppxe8JP8/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hover:text-blue-600 transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 
          24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 
          1.894-4.788 4.659-4.788 1.325 0 2.463.099 
          2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 
          1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.4 
          24 24 23.4 24 22.675V1.325C24 .6 23.4 0 
          22.675 0z" />
        </svg>
      </Link>
    </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
