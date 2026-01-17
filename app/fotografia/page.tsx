import Link from "next/link";

const categories = [
    { name: "Eventos", count: 24 },
    { name: "Retratos", count: 18 },
    { name: "Producto", count: 32 },
    { name: "Corporativo", count: 15 },
    { name: "Social", count: 21 },
];

const galleryImages = [
    "https://picsum.photos/seed/foto1/600/400",
    "https://picsum.photos/seed/foto2/400/600",
    "https://picsum.photos/seed/foto3/600/400",
    "https://picsum.photos/seed/foto4/600/600",
    "https://picsum.photos/seed/foto5/400/600",
    "https://picsum.photos/seed/foto6/600/400",
    "https://picsum.photos/seed/foto7/600/600",
    "https://picsum.photos/seed/foto8/400/600",
    "https://picsum.photos/seed/foto9/600/400",
];

export default function FotografiaPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">


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
                        Capturamos momentos que cuentan historias. Fotografía profesional para eventos, productos, retratos y proyectos especiales.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="px-8 lg:px-16 pb-12">
                <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium text-sm">
                        Todos
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            className="px-6 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium text-sm hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                        >
                            {cat.name} ({cat.count})
                        </button>
                    ))}
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
