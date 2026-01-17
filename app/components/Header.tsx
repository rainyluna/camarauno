"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export const navLinks = [
    { name: "Video", href: "/video" },
    { name: "Fotografía", href: "/fotografia" },
    { name: "Convocatorias", href: "/convocatorias" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`flex items-center justify-between px-8 lg:px-16 sticky top-0 bg-white/80 dark:bg-black backdrop-blur-md z-50 transition-all duration-300 ${isScrolled ? 'py-3 shadow-sm' : 'py-6'}`}>
            <div className="flex flex-col">
                <Link href="/">
                    <img
                        src={isScrolled ? "/logo-mini.svg" : "/logo.svg"}
                        alt="Cámara Uno"
                        className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-16 lg:h-18'} dark:invert`}
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 tracking-wide text-zinc-600 dark:text-zinc-400 text-lg items-center">
                {navLinks.map((link, index) => (
                    <span key={link.name} className="flex items-center gap-8">
                        <Link
                            href={link.href}
                            className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors"
                        >
                            {link.name}
                        </Link>
                        {index < navLinks.length - 1 && (
                            <span className="text-zinc-300 dark:text-zinc-600">/</span>
                        )}
                    </span>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <div className="w-6 space-y-1.5">
                    <span className={`block h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 md:hidden">
                    <nav className="flex flex-col px-8 py-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
