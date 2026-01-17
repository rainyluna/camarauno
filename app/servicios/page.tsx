import Link from "next/link";

const services = [
    {
        id: 1,
        title: "Producción de Video",
        description: "Desde la conceptualización hasta la postproducción, creamos videos que cuentan tu historia de manera impactante.",
        features: ["Documentales", "Comerciales", "Videos corporativos", "Contenido para redes"],
        icon: "🎬",
    },
    {
        id: 2,
        title: "Fotografía Profesional",
        description: "Capturamos imágenes que comunican, desde eventos hasta productos y retratos corporativos.",
        features: ["Eventos", "Producto", "Retratos", "Arquitectura"],
        icon: "📷",
    },
    {
        id: 3,
        title: "Animación y Motion Graphics",
        description: "Damos vida a tus ideas con animación 2D, 3D y motion graphics profesional.",
        features: ["Motion graphics", "Animación 2D", "Animación 3D", "Infografías animadas"],
        icon: "✨",
    },
    {
        id: 4,
        title: "Diseño Gráfico",
        description: "Identidad visual, materiales impresos y diseño digital que refuerza tu marca.",
        features: ["Branding", "Editorial", "Digital", "Packaging"],
        icon: "🎨",
    },
    {
        id: 5,
        title: "Streaming y Eventos en Vivo",
        description: "Transmisión profesional de eventos con múltiples cámaras y producción en tiempo real.",
        features: ["Multi-cámara", "Overlays personalizados", "Grabación", "Plataformas múltiples"],
        icon: "📡",
    },
    {
        id: 6,
        title: "Consultoría Audiovisual",
        description: "Asesoramos a organizaciones en estrategia de contenido y comunicación audiovisual.",
        features: ["Estrategia", "Capacitación", "Procesos", "Evaluación"],
        icon: "💡",
    },
];

export default function ServiciosPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">


            {/* Hero */}
            <section className="px-8 py-24 lg:px-16">
                <div className="max-w-4xl">
                    <span className="text-sm font-semibold tracking-widest text-zinc-400 dark:text-zinc-500">
                        LO QUE HACEMOS
                    </span>
                    <h1 className="text-5xl md:text-7xl font-light mt-4 mb-8">
                        Servicios
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                        Soluciones audiovisuales integrales para organizaciones, empresas y proyectos que buscan comunicar con impacto.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="px-8 pb-24 lg:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <article
                            key={service.id}
                            className="p-8 lg:p-12 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 group"
                        >
                            <span className="text-5xl mb-6 block">{service.icon}</span>
                            <h2 className="text-2xl font-medium mb-4 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                                {service.title}
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-500">
                                        <span className="w-1 h-1 bg-zinc-400 rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
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
