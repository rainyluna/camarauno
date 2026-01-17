import Link from "next/link";
import ProjectShowcase, { Project } from "../components/ProjectShowcase";

const videoProjects: Project[] = [
    {
        id: "v1",
        title: "Voces del Territorio",
        category: "DOCUMENTAL",
        description: "Una serie documental que explora las raíces y tradiciones de las comunidades rurales en Colombia.",
        image: "https://static.wixstatic.com/media/cf0639_97a95f2700a74f76a80499e8ef053185~mv2.jpg/v1/crop/x_0,y_1,w_3000,h_2248/fill/w_1200,h_900,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG20240527114026_edited.jpg",
        tags: ["Social", "Documental", "Territorio"],
    },
    {
        id: "v2",
        title: "Campaña Institucional PONES",
        category: "CORPORATIVO",
        description: "Video promocional para la Fundación PONES destacando su impacto en la educación y el empoderamiento.",
        image: "https://static.wixstatic.com/media/cf0639_ef445899e73f4a10bf40a004273311dc~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-3465_edited.jpg",
        tags: ["Corporativo", "Fundación", "Impacto"],
    },
    {
        id: "v3",
        title: "Resiliencia Creativa",
        category: "CONTENIDO CREATIVO",
        description: "Exploración visual de los procesos artísticos en entornos urbanos contemporáneos.",
        image: "https://static.wixstatic.com/media/cf0639_10caaa69809a4b31bde166193c00322c~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20240925-WA0037_edited.jpg",
        tags: ["Arte", "Creativo", "Urbano"],
    }
];

export default function VideoPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
            {/* Hero */}
            <section className="px-8 py-24 lg:px-16 border-b border-zinc-200 dark:border-zinc-800">
                <div className="max-w-4xl">
                    <span className="text-sm font-semibold tracking-widest text-zinc-400 dark:text-zinc-500">
                        SERVICIOS
                    </span>
                    <h1 className="text-5xl md:text-7xl font-light mt-4 mb-8">
                        Video
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                        Producción audiovisual profesional para documentales, comerciales, contenido corporativo y proyectos que inspiran.
                    </p>
                </div>
            </section>

            {/* Immersive Video Projects */}
            <ProjectShowcase projects={videoProjects} showTitle={false} />

            {/* CTA */}
            <section className="px-8 py-24 lg:px-16 text-center bg-zinc-50 dark:bg-zinc-900/50">
                <h2 className="text-3xl md:text-4xl font-light mb-8">
                    ¿Listo para crear tu próximo video?
                </h2>
                <Link
                    href="/contacto"
                    className="inline-block px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold tracking-wide hover:opacity-90 transition-opacity"
                >
                    INICIAR PROYECTO
                </Link>
            </section>
        </div>
    );
}
