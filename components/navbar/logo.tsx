import Link from "next/link";
import Image from "next/image";

export const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <Image src="/logo_colegio.png" alt="I.E Ann Goulden Logo" width={32} height={32} className="h-8 w-8" />
    <span className="text-lg font-semibold">I.E Ann Goulden</span>
  </Link>
);
