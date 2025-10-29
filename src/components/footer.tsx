import Link from "next/link";
import { LogoIcon } from "./icons";

export default function Footer() {
    return (
        <footer className="bg-secondary">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <LogoIcon className="h-6 w-6 text-primary" />
                        <span className="font-bold">Agua Nueva Esparta</span>
                    </div>
                    <p className="text-center text-sm text-muted-foreground md:text-left">
                        Construyendo un futuro hídrico sostenible.
                    </p>
                    <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium md:justify-end">
                        <Link href="/overview" className="text-muted-foreground transition-colors hover:text-foreground">
                            Resumen
                        </Link>
                        <Link href="/investment" className="text-muted-foreground transition-colors hover:text-foreground">
                            Inversión
                        </Link>
                        <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                            Contacto
                        </Link>
                        <Link href="/gallery" className="text-muted-foreground transition-colors hover:text-foreground">
                            Galería
                        </Link>
                    </nav>
                </div>
                <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Agua Nueva Esparta. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
