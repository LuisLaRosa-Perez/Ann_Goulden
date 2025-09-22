import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hero02 = () => {
  return (
    <div className="justify-center">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href="#">
              Comprometidos con el futuro de tus hijos
            </Link>
          </Badge>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
            Educación que inspira, valores que perduran
          </h1>
          <p className="mt-6 max-w-[60ch] sm:text-lg">
            Descubre una propuesta educativa innovadora que combina excelencia 
            académica, formación en valores y un ambiente que inspira a cada 
            estudiante a alcanzar su máximo potencial.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Comenzar <ArrowUpRight className="h-5! w-5!" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="h-5! w-5!" /> Ver Demostración
            </Button>
          </div>
        </div>
        <div className="relative w-full max-h-[450px]">
          <Image src="/imagen1.jpeg" alt="Hero Image" fill className="object-cover rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero02;