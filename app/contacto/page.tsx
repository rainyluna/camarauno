"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactoPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">


            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-88px)]">
                {/* Left: Info */}
                <section className="px-8 py-24 lg:px-16 flex flex-col justify-center">
                    <span className="text-sm font-semibold tracking-widest text-zinc-400 dark:text-zinc-500">
                        CÁMARA UNO
                    </span>
                    <h1 className="text-5xl md:text-7xl font-light mt-4 mb-8">
                        CONTACTO
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg mb-12">
                        Cada proyecto es único y merece una narrativa visual impecable.
                        Ya sea que necesites contenido para redes sociales, cobertura de eventos
                        o una campaña publicitaria, estamos aquí para asesorarte.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
                                EMAIL
                            </h3>
                            <a href="mailto:camaraunoproducciones@gmail.com" className="text-lg hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                                camaraunoproducciones@gmail.com
                            </a>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
                                TELÉFONO
                            </h3>
                            <a href="tel:+573177972003" className="text-lg hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                                +57 317 797 2003
                            </a>
                            <span className="mx-2 text-zinc-300 dark:text-zinc-700">-</span>
                            <a href="tel:+573058210441" className="text-lg hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                                +57 305 821 0441
                            </a>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
                                REDES SOCIALES
                            </h3>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/camara_uno_producciones/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                                    Instagram
                                </a>
                                <span className="text-zinc-300 dark:text-zinc-700">|</span>
                                <a href="https://www.youtube.com/@camaraunoproducciones582" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                                    YouTube
                                </a>
                                <span className="text-zinc-300 dark:text-zinc-700">|</span>
                                <a href="https://www.facebook.com/people/C%C3%A1mara-Uno-Producciones/61576282596571/#" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                                    Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Right: Form */}
                <section className="px-8 py-24 lg:px-16 bg-zinc-50 dark:bg-zinc-900 flex items-center">
                    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Nombre completo
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-400 outline-none transition-colors"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-400 outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                    Teléfono
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-400 outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="service" className="block text-sm font-medium mb-2">
                                Servicio de interés
                            </label>
                            <select
                                id="service"
                                value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-400 outline-none transition-colors"
                            >
                                <option value="">Selecciona un servicio</option>
                                <option value="video">Producción de Video</option>
                                <option value="fotografia">Fotografía</option>
                                <option value="animacion">Animación</option>
                                <option value="diseno">Diseño Gráfico</option>
                                <option value="streaming">Streaming</option>
                                <option value="consultoria">Consultoría</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Cuéntanos sobre tu proyecto
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-400 outline-none transition-colors resize-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold tracking-wide hover:opacity-90 transition-opacity"
                        >
                            ENVIAR MENSAJE
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
}
