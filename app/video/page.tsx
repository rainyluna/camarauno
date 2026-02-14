import Link from "next/link";
import ProjectShowcase, { Project } from "../components/ProjectShowcase";

const videoProjects: Project[] = [
    // IMPACTO SOCIAL
    {
        id: "s1",
        title: "Fundación PONES",
        category: "IMPACTO SOCIAL",
        description: "A través de un guion que humaniza cada acción e imágenes que destacan cada rostro, este proyecto visibiliza los procesos y atrae aliados y recursos.",
        image: "/content/impacto-social/01_pones.png",
        tags: ["Social", "Visibilización", "Recursos"],
        href: "https://www.youtube.com/watch?v=evfTXoCmhzY"
    },
    {
        id: "s2",
        title: "Academia Llano y Joropo",
        category: "IMPACTO SOCIAL",
        description: "Sponsor video que busca establecer alianzas que apoyen sus actividades y permitan otorgar becas a quienes no cuentan con recursos económicos.",
        image: "/content/impacto-social/02_llano.png",
        tags: ["Cultura", "Alianzas", "Becas"],
        href: "https://www.youtube.com/watch?v=ynZX6yUcbrU"
    },
    {
        id: "s3",
        title: "Fundación SAGALA",
        category: "IMPACTO SOCIAL",
        description: "Pieza audiovisual que invita a sumarse a procesos psicosociales y artísticos dirigidos a población con discapacidad intelectual.",
        image: "/content/impacto-social/03_sagala.png",
        tags: ["Inclusión", "Arte", "Psicosocial"],
        href: "https://www.youtube.com/watch?v=iGJJuglLhTg"
    },
    {
        id: "s4",
        title: "Fundación Sant’Egidio Colombia",
        category: "IMPACTO SOCIAL",
        description: "Documental que narra los retos y desafíos de la fundación en sus procesos de apoyo a población habitante de calle y población migrante.",
        image: "/content/impacto-social/04_san-egidio.png",
        tags: ["Documental", "Apoyo", "Social"],
        href: "https://www.youtube.com/watch?v=GcYZbz6mnzw"
    },
    {
        id: "s5",
        title: "Fundación Guiando Territorio",
        category: "IMPACTO SOCIAL",
        description: "Actividad con el propósito de reivindicar el trabajo del campesinado mayor en la ruralidad Bogotana.",
        image: "/content/impacto-social/05_territorio.png",
        tags: ["Campesinado", "Ruralidad", "Memoria"],
        href: "https://www.youtube.com/watch?v=0sEN-lmzpU8"
    },
    // CRECIMIENTO EMPRESARIAL
    {
        id: "e1",
        title: "Fundación Colombiana de Linfoma y Leucemia",
        category: "CRECIMIENTO EMPRESARIAL",
        description: "Campaña publicitaria con el objetivo de identificar, de manera gráfica y didáctica los síntomas para la prevención de las enfermedades hemato-oncológicas.",
        image: "/content/crecimiento-empresarial/06_linfoma.png",
        tags: ["Salud", "Prevención", "Campaña"],
        href: "https://www.youtube.com/watch?v=nxll4zItKAU"
    },
    {
        id: "e2",
        title: "Planetario de Bogotá – Exposición Maestro Al.Vivero",
        category: "CRECIMIENTO EMPRESARIAL",
        description: "Piezas publicitarias en el marco de la exposición pictórica del Maestro Alfredo Vivero Paniza, pintor precolombino.",
        image: "/content/crecimiento-empresarial/07_planetario.png",
        tags: ["Arte", "Exposición", "Cultura"],
        href: "https://www.youtube.com/watch?v=_3kfzqNjR2g"
    },
    {
        id: "e3",
        title: "XX Festival Nacional DE Música Campesina",
        category: "CRECIMIENTO EMPRESARIAL",
        description: "Graficación y edición de comerciales",
        image: "/content/crecimiento-empresarial/08_festival.png",
        tags: ["Música", "Comercial", "Edición"],
        href: "https://www.youtube.com/watch?v=4U4p-jvyyQk"
    },
    {
        id: "e4",
        title: "Sintaincolbest",
        category: "CRECIMIENTO EMPRESARIAL",
        description: "Video informativo acerca de los desafíos y logros obtenidos a través del sindicalismo en SINTRAINCOLBEST a lo largo de su existencia.",
        image: "/content/crecimiento-empresarial/09_sintraincolbest.png",
        tags: ["Sindicato", "Logros", "Informativo"],
        href: "https://www.youtube.com/watch?v=xDlNnfyVtcY"
    },
    {
        id: "e5",
        title: "Temporada de Conciertos Banco de la República",
        category: "CRECIMIENTO EMPRESARIAL",
        description: "Cubrimiento del concierto del maestro arpista colombiano Wuilmer López, presentando obras de su autoría.",
        image: "/content/crecimiento-empresarial/10_conciertos.png",
        tags: ["Música", "Cubrimiento", "Arpa"],
        href: "https://www.youtube.com/watch?v=igbgT_rK4jg"
    },
    {
        id: "e6",
        title: "Maestro Juan Carlos Contreras “Cuatro en Colores”",
        category: "CRECIMIENTO EMPRESARIAL",
        description: "Videoclip musical del sencillo discográfico.",
        image: "/content/crecimiento-empresarial/11_contreras.png",
        tags: ["Música", "Videoclip", "Artes"],
        href: "https://www.youtube.com/watch?v=uftap_3dhi4"
    },
    {
        id: "e7",
        title: "Encuentro Internacional Maestros del Arpa",
        category: "CRECIMIENTO EMPRESARIAL",
        description: "Resumen del cubrimiento de conciertos realizados en los teatros más importantes de Colombia, así como su adaptación en los años de pandemia en formato virtual.",
        image: "/content/crecimiento-empresarial/12_arpa.png",
        tags: ["Música", "Internacional", "Resumen"],
        href: "https://www.youtube.com/watch?v=HiFD-ERpH5A"
    },
    // PROYECTOS DE LA CASA
    {
        id: "h1",
        title: "Crapaud",
        category: "PROYECTOS DE LA CASA",
        description: "Un sapo aterrado con una característica muy particular, se encuentra con un mundo gris y sombrío al que logra dar color con la ayuda de sus guantes mágicos y la naturaleza.",
        image: "/content/proyectos-casa/13_crapaud.png",
        tags: ["Animación", "Fantasía", "Color"],
        href: "https://www.youtube.com/watch?v=UNsVEVn6faM"
    },
    {
        id: "h2",
        title: "The Adventures of Lula and the Dragonfly",
        category: "PROYECTOS DE LA CASA",
        description: "Serie web animada de Lula, una pequeña niña con malos modales que aún no sabe cómo comportarse; sin embargo, su amiga, la sabia Libélula, la guía para que siempre tome la mejor decisión.",
        image: "/content/proyectos-casa/14_lula.png",
        tags: ["Web Serie", "Animación", "Valores"],
        href: "https://youtu.be/ZaNau1sbtnA"
    }
];

export default function VideoPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pt-24">
            {/* Hero */}
            <section className="px-8 py-24 lg:px-16 border-b border-zinc-200 dark:border-zinc-800">
                <div className="max-w-4xl">
                    <span className="text-sm font-semibold tracking-widest text-zinc-400 dark:text-zinc-500">
                        VIDEO
                    </span>
                    <h1 className="text-5xl md:text-7xl font-light mt-4 mb-8">
                        Historias en movimiento
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                        Potenciamos tu comunicación a través del video, el formato líder en consumo digital, brindándote la seguridad y experiencia de una productora audiovisual comprometida con altos estándares de calidad.
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
