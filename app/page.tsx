"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks } from "./components/Header";
import ProjectShowcase from "./components/ProjectShowcase";

// Localized images (originally from Wix)
const galleryImages = [
  // Row 1
  [
    "/content/fotografia/Fotografía/fotografía_01.jpg",
    "/content/fotografia/Fotografía/fotografía_02.jpg",
    "/content/fotografia/Fotografía/fotografía_03.jpg",
    "/content/fotografia/Fotografía/fotografía_04.jpg",
    "/content/fotografia/Fotografía/fotografía_05.jpg",
    "/content/fotografia/Fotografía/fotografía_06.jpg",
    "/content/fotografia/Fotografía/fotografía_07.jpg",
    "/content/fotografia/Fotografía/fotografía_08.jpg",
  ],
  // Row 2
  [
    "/content/fotografia/Fotografía/fotografía_09.jpg",
    "/content/fotografia/Fotografía/fotografía_10.jpg",
    "/content/fotografia/Fotografía/fotografía_11.jpg",
    "/content/fotografia/Fotografía/fotografía_12.jpg",
    "/content/fotografia/Fotografía/fotografía_13.jpg",
    "/content/fotografia/Fotografía/fotografía_14.jpg",
    "/content/fotografia/Fotografía/fotografía_15.jpg",
    "/content/fotografia/Fotografía/fotografía_16.jpg",
  ],
  // Row 3
  [
    "/content/fotografia/Fotografía/fotografía_01.jpg",
    "/content/fotografia/Fotografía/fotografía_02.jpg",
    "/content/fotografia/Fotografía/fotografía_03.jpg",
    "/content/fotografia/Fotografía/fotografía_04.jpg",
    "/content/fotografia/Fotografía/fotografía_05.jpg",
    "/content/fotografia/Fotografía/fotografía_06.jpg",
    "/content/fotografia/Fotografía/fotografía_07.jpg",
    "/content/fotografia/Fotografía/fotografía_08.jpg",
  ],
];

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "Crecimiento Empresarial",
    category: "EMPRESARIAL",
    description: "Contenido que potencia la comunicación y la conquista de los objetivos.",
    image: "/content/crecimiento-empresarial/06_linfoma.png",
    tags: ["Comunicación", "Estrategia", "Objetivos"],
    href: "https://www.youtube.com/watch?v=nxll4zItKAU"
  },
  {
    id: 2,
    title: "Impacto Social",
    category: "SOCIAL",
    description: "Piezas audiovisuales que impulsan la inclusión y el cambio social visibilizando causas importantes.",
    image: "/content/impacto-social/01_pones.png",
    tags: ["Inclusión", "Cambio Social", "Causas"],
    href: "https://www.youtube.com/watch?v=evfTXoCmhzY"
  },
  {
    id: 3,
    title: "Proyectos de la casa",
    category: "CREATIVO",
    description: "Descubre el corazón creativo de nuestra compañía.",
    image: "/content/proyectos-casa/13_crapaud.png",
    tags: ["Creatividad", "Original", "Core"],
    href: "https://youtu.be/ZaNau1sbtnA"
  },
];

// Clients data
const clients = [
  { name: "Banco", logo: "/clientes/banco.webp" },
  { name: "Leucemia", logo: "/clientes/leucemia.webp" },
  { name: "Pones", logo: "/clientes/pones.webp" },
  { name: "Sagala", logo: "/clientes/sagala.webp" },
  { name: "Sant'Egidio", logo: "/clientes/santegidio.webp" },
  { name: "Territorio", logo: "/clientes/territorio.webp" },
  { name: "SCE", logo: "/clientes/scp.webp" },
  { name: "Parasoles", logo: "/clientes/parasoles.webp" },
];



function ScrollingRow({ images, speed = 30, reverse = false }: {
  images: string[];
  speed?: number;
  reverse?: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let animationId: number;
    let position = reverse ? -row.scrollWidth / 2 : 0;
    const direction = reverse ? 1 : -1;

    const animate = () => {
      position += direction * (speed / 60);

      // Reset position when we've scrolled through half the content
      if (!reverse && position <= -row.scrollWidth / 2) {
        position = 0;
      } else if (reverse && position >= 0) {
        position = -row.scrollWidth / 2;
      }

      row.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [speed, reverse]);

  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div
        ref={rowRef}
        className="flex gap-3 will-change-transform"
        style={{ width: "max-content" }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 overflow-hidden group"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="h-48 w-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

function TextRotator({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true); // Fade in
      }, 500); // Wait for fade out
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span
      className={`inline-block transition-opacity duration-500 font-semibold ${fade ? "opacity-100" : "opacity-0"
        }`}
    >
      {words[index]}
    </span>
  );
}

// ============================================================
// HERO VARIANT 1: Video Background
// ============================================================
function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/content/banner-inicial/reel-web.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center text-white">
        <h1 className="text-6xl md:text-8xl font-light tracking-tight">
          Creamos historias visuales
          <br />
          para tu <TextRotator words={["organización", "empresa", "fundación", "ONG", "marca", "proyecto"]} />
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-10 h-6" viewBox="0 0 40 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4,4 20,18 36,4" />
        </svg>
      </div>
    </section>
  );
}

// ============================================================
// HERO VARIANT 2: Image Scroller (Original)
// ============================================================
function HeroImageScroller() {
  return (
    <section className="py-8 space-y-4 relative">
      <ScrollingRow images={galleryImages[0]} speed={25} />
      <ScrollingRow images={galleryImages[1]} speed={35} reverse />
      <ScrollingRow images={galleryImages[2]} speed={20} />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="relative text-4xl md:text-6xl font-light tracking-tight text-white text-center">
          Creamos historias visuales
          <br />
          para tu <TextRotator words={["organización", "empresa", "fundación", "ONG", "marca", "proyecto"]} />
        </h2>
      </div>
    </section>
  );
}

// ============================================================
// Featured Projects Section - Full Width Immersive
// ============================================================
function FeaturedProjects() {
  return <ProjectShowcase projects={featuredProjects} />;
}

// ============================================================
// Clients Section
// ============================================================
function ClientsSection() {
  return (
    <section className="px-8 py-24 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-zinc-400 dark:text-zinc-500">
            QUIENES CONFÍAN EN NOSOTROS
          </span>
          <h2 className="text-3xl md:text-4xl font-light mt-2">
            Nuestros Clientes
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-auto max-h-24 w-auto object-contain dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// About Section - Redesigned
// ============================================================
function AboutSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative h-[60vh] lg:h-auto min-h-[500px]">
          <img
            src="/content/nosotros/nosotros.png"
            alt="Nuestro equipo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:bg-gradient-to-l lg:from-zinc-900 lg:to-transparent" />
        </div>

        {/* Right: Content */}
        <div className="bg-zinc-900 text-white px-8 py-20 lg:px-16 lg:py-24 flex flex-col justify-center">
          <span className="text-sm font-semibold tracking-widest text-zinc-400 mb-4">
            NOSOTROS
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            pensamiento en
            <br />
            <span className="font-semibold">movimiento</span>
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6 max-w-xl">
            Somos un equipo de profesionales audiovisuales y sociales comprometidos con convertir tus ideas en videos que impulsan resultados.
          </p>

          <p className="text-zinc-400 leading-relaxed max-w-xl">
            Creemos en el poder del contenido audiovisual como una herramienta estratégica para que organizaciones y personas logren apoyos técnicos, financieros y mayor visibilidad. Nuestros videos no solo validan tus proyectos, también potencian tu difusión en redes y canales multimedia.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Footer
// ============================================================
function Footer() {
  return (
    <footer className="px-8 py-16 lg:px-16 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src="/logo.svg" alt="Cámara Uno" className="h-16 mb-6 invert" />
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              Somos un equipo de profesionales audiovisuales y sociales comprometidos con convertir tus ideas en videos que impulsan resultados.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold tracking-wide mb-4">NAVEGACIÓN</h4>
            <nav className="flex flex-col gap-2 text-sm text-zinc-400">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold tracking-wide mb-4">CONTACTO</h4>
            <div className="flex flex-col gap-2 text-sm text-zinc-400">
              <a href="mailto:camaraunoproducciones@gmail.com" className="hover:text-white transition-colors">
                camaraunoproducciones@gmail.com
              </a>
              <a href="tel:+573177972003" className="hover:text-white transition-colors">
                +57 317 797 2003
              </a>
              <a href="tel:+573058210441" className="hover:text-white transition-colors">
                +57 305 821 0441
              </a>
              <div className="flex gap-4 mt-4">
                <a href="https://www.instagram.com/camara_uno_producciones/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@camaraunoproducciones582" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/people/C%C3%A1mara-Uno-Producciones/61576282596571/#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <span>© 2026 Cámara Uno Producciones. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================
export default function Home() {
  // Toggle this to switch between hero variants
  const useVideoHero = true;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">


      {/* HERO SECTION - Toggle between variants */}
      {useVideoHero ? <HeroVideo /> : <HeroImageScroller />}

      {/* About Section */}
      <AboutSection />

      {/* Featured Projects - Social, Empresarial, Propio */}
      <FeaturedProjects />

      {/* Clients Section */}
      <ClientsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
