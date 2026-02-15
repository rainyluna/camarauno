import Link from "next/link";



const galleryImages = [
    "/content/fotografia/fotografía_01.jpg",
    "/content/fotografia/fotografía_02.jpg",
    "/content/fotografia/fotografía_03.jpg",
    "/content/fotografia/fotografía_04.jpg",
    "/content/fotografia/fotografía_05.jpg",
    "/content/fotografia/fotografía_06.jpg",
    "/content/fotografia/fotografía_07.jpg",
    "/content/fotografia/fotografía_08.jpg",
    "/content/fotografia/fotografía_09.jpg",
    "/content/fotografia/fotografía_10.jpg",
    "/content/fotografia/fotografía_11.jpg",
    "/content/fotografia/fotografía_12.jpg",
    "/content/fotografia/fotografía_13.jpg",
    "/content/fotografia/fotografía_14.jpg",
    "/content/fotografia/fotografía_15.jpg",
    "/content/fotografia/fotografía_16.jpg",
    "/content/fotografia/fotografía_17.jpg",
    "/content/fotografia/fotografía_18.jpg",
];

export default function FotografiaPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pt-24">


            {/* Hero */}
            <section className="px-8 py-24 lg:px-16">
                <div className="max-w-4xl">
                    <span className="text-sm font-semibold tracking-widest text-zinc-400 dark:text-zinc-500">
                        SERVICIOS
                    </span>
                    <h1 className="text-5xl md:text-7xl font-light mt-4 mb-8">
                        Fotografía
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                        Desarrollamos campañas publicitarias y catálogos visuales,
                        pensados estratégicamente para distintos sectores y objetivos
                        comerciales, capaces de captar la atención, comunicar valor y
                        convertir miradas en clientes.
                    </p>
                </div>
            </section>



            {/* Gallery Grid */}
            <section className="px-8 pb-24 lg:px-16">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {galleryImages.map((src, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid overflow-hidden group cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`Fotografía ${index + 1}`}
                                className="w-full object-cover grayscale-0 hover:grayscale transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="px-8 py-24 lg:px-16 bg-zinc-50 dark:bg-zinc-900 text-center">
                <h2 className="text-3xl md:text-4xl font-light mb-8">
                    ¿Necesitas fotografía profesional?
                </h2>
                <Link
                    href="/contacto"
                    className="inline-block px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold tracking-wide hover:opacity-90 transition-opacity"
                >
                    SOLICITAR COTIZACIÓN
                </Link>
            </section>
        </div>
    );
}
