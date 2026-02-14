import Link from "next/link";


export default function ConvocatoriasPage() {
    const banners = [
        {
            id: 1,
            title: "Premio Beca más Cultura Local",
            subtitle: "Localidad de San Cristóbal 2025",
            info: "Categoría No. 1 - Propuestas Iniciales",
            status: "EN EJECUCIÓN",
            href: null
        },
        {
            id: 2,
            title: "Premio Beca más Cultura Local",
            subtitle: "Localidad de San Cristóbal 2025",
            info: "Categoría No. 2 - Sostenibilidad de ganadores",
            status: "EN EJECUCIÓN",
            href: null
        },
        {
            id: 3,
            title: "Postulación Premio Cafam a la Mujer 2025",
            subtitle: "Dora Hilda Rincón",
            info: "Directora Fundación PONES",
            status: "EN EJECUCIÓN",
            href: "https://drive.google.com/file/d/1JW4JDsJLjWQr5fuXhuMyoMowPCyNL4BG/view?usp=sharing",
            cta: "VER POSTULACIÓN"
        },
        {
            id: 4,
            title: "Selección oficial – Video animado",
            subtitle: "Festival Internacional de Cine Para Niños y Jóvenes DIVERCINE 27",
            info: "Montevideo, Uruguay",
            status: "VER PROYECTO",
            href: "https://youtu.be/ZaNau1sbtnA",
            cta: "VER VIDEO"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
            {/* Hero */}
            <section className="px-8 py-24 lg:px-16 border-b border-zinc-200 dark:border-zinc-800">
                <div className="max-w-4xl">
                    <span className="text-sm font-semibold tracking-widest text-zinc-400 dark:text-zinc-500">
                        OPORTUNIDADES
                    </span>
                    <h1 className="text-5xl md:text-7xl font-light mt-4 mb-8">
                        Convocatorias
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                        Contamos con experiencia en la creación de contenidos audiovisuales para convocatorias sociales y culturales, así como para la postulación a programas de estímulos, premios y sus herramientas de verificación.
                    </p>
                </div>
            </section>

            {/* Convocatorias List */}
            <section className="px-8 py-24 lg:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {banners.map((banner) => (
                        <div
                            key={banner.id}
                            className="p-8 lg:p-12 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col justify-between"
                        >
                            <div>
                                <span className={`inline-block px-3 py-1 text-[10px] font-bold tracking-widest mb-6 ${banner.href ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' : 'bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500'}`}>
                                    {banner.status}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-light mb-2">{banner.title}</h2>
                                <h3 className="text-lg font-medium text-zinc-600 dark:text-zinc-400 mb-4">{banner.subtitle}</h3>
                                <p className="text-sm text-zinc-500 mb-8">{banner.info}</p>
                            </div>

                            {banner.href && (
                                <a
                                    href={banner.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest hover:gap-4 transition-all"
                                >
                                    {banner.cta}
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
