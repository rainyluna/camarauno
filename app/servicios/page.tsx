import Link from "next/link";

const services = [
    {
        id: 1,
        title: "Producción de Video",
        description: "Desde la conceptualización hasta la posproducción, creamos videos que cuentan tu historia de manera impactante.",
        features: ["Videos corporativos", "Comerciales", "Documentales", "Sistematización de procesos"],
        image: "/content/servicios/video.jpg",
    },
    {
        id: 2,
        title: "Fotografía Profesional",
        description: "Capturamos imágenes que comunican, desde eventos hasta productos corporativos.",
        features: ["Campañas publicitarias", "Catálogos", "Registro de actividades"],
        image: "/content/servicios/foto.jpg",
    },
    {
        id: 3,
        title: "Consultoría Audiovisual",
        description: "Asesoramos a organizaciones en estrategias de gestión y comunicación.",
        features: ["Apoyo en convocatorias", "Construcción de memoria social", "Visibilización para captar recursos técnicos y financieros"],
        image: "/content/servicios/consultoria.jpg",
    }
];

export default function ServiciosPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pt-24">
            {/* Hero */}
            <section className="px-8 py-24 lg:px-16">
                <div className="max-w-4xl">
                    <span className="text-sm font-semibold tracking-widest text-zinc-400 dark:text-zinc-500">
                        CÁMARA UNO
                    </span>
                    <h1 className="text-5xl md:text-7xl font-light mt-4 mb-8">
                        Servicios
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                        Soluciones audiovisuales integrales para organizaciones, empresas y proyectos que buscan comunicar con impacto.
                    </p>
                    <p className="text-lg text-zinc-500 mt-6 max-w-2xl">
                        Contamos con experiencia en la creación de contenidos audiovisuales para convocatorias sociales y culturales, así como para la postulación a programas de estímulos, premios y procesos de evaluación pública y privada.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="px-8 pb-24 lg:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service) => (
                        <article
                            key={service.id}
                            className="group relative overflow-hidden last:md:col-span-2 last:md:max-w-[calc(50%-0.75rem)]"
                        >
                            {/* Image with overlay */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                <h2 className="absolute bottom-6 left-6 right-6 text-2xl lg:text-3xl font-semibold text-white">
                                    {service.title}
                                </h2>
                            </div>

                            {/* Content */}
                            <div className="p-6 lg:p-8 bg-zinc-50 dark:bg-zinc-900 border border-t-0 border-zinc-200 dark:border-zinc-800">
                                <p className="text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="px-8 py-24 lg:px-16 bg-zinc-50 dark:bg-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
                        Nuestro Proceso
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Descubrimiento", desc: "Entendemos tus necesidades y objetivos" },
                            { step: "02", title: "Planificación", desc: "Diseñamos la estrategia y el concepto" },
                            { step: "03", title: "Producción", desc: "Ejecutamos con profesionalismo y creatividad" },
                            { step: "04", title: "Entrega", desc: "Te entregamos un producto de calidad" },
                        ].map((phase) => (
                            <div key={phase.step} className="text-center">
                                <span className="text-5xl font-light text-zinc-300 dark:text-zinc-700">{phase.step}</span>
                                <h3 className="text-xl font-semibold mt-4 mb-2">{phase.title}</h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-8 py-24 lg:px-16 text-center">
                <h2 className="text-3xl md:text-4xl font-light mb-8">
                    ¿Tienes un proyecto en mente?
                </h2>
                <Link
                    href="/contacto"
                    className="inline-block px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold tracking-wide hover:opacity-90 transition-opacity"
                >
                    HABLEMOS
                </Link>
            </section>
        </div>
    );
}
