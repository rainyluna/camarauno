import Link from "next/link";

export interface Project {
    id: number | string;
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    href?: string;
}

interface ProjectShowcaseProps {
    projects: Project[];
    showTitle?: boolean;
}

export default function ProjectShowcase({ projects, showTitle = true }: ProjectShowcaseProps) {
    return (
        <section>
            {/* Section Header */}
            {showTitle && (
                <div className="px-8 py-16 lg:px-16 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <span className="text-sm font-semibold tracking-widest text-zinc-400 dark:text-zinc-500">
                                PORTAFOLIO
                            </span>
                            <h2 className="text-3xl md:text-4xl font-light mt-2">
                                Historias en movimiento
                            </h2>
                        </div>
                    </div>
                </div>
            )}

            {/* Full Width Project Sections */}
            {projects.map((project, index) => (
                <article
                    key={project.id}
                    className="grid grid-cols-1 grid-rows-1 w-full overflow-hidden group border-b border-zinc-200 dark:border-zinc-800 last:border-0"
                >
                    {/* Background Image */}
                    <img
                        src={project.image}
                        alt={project.title}
                        className="col-start-1 row-start-1 w-full h-full object-cover"
                    />
                    {/* Gradient Overlays */}
                    <div className="col-start-1 row-start-1 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
                    <div className="col-start-1 row-start-1 bg-linear-to-t from-black/60 via-transparent to-black/20" />

                    {/* Content */}
                    <div className="col-start-1 row-start-1 z-10 flex items-center">
                        <div className={`px-8 lg:px-16 py-8 lg:py-10 max-w-3xl ${index % 2 === 1 ? 'ml-auto text-right' : ''}`}>
                            {/* Category Badge */}
                            <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-white/80 border border-white/30 mb-6">
                                {project.category}
                            </span>

                            {/* Title */}
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className={`flex gap-3 flex-wrap mb-8 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <Link
                                href={project.href || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group/btn inline-flex items-center gap-3 px-6 py-3 bg-white text-zinc-900 font-semibold tracking-wide hover:bg-zinc-100 transition-all duration-300 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                            >
                                VER PROYECTO
                                <svg
                                    className={`w-5 h-5 transition-transform group-hover/btn:translate-x-1 ${index % 2 === 1 ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}
