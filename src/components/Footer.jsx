import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';
import { useContent } from '../context/ContentContext';

const Footer = () => {
    const { content } = useContent();
    const { footer, header } = content;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-dark text-gray-300 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={header.logo} alt="Logo" className="h-10 w-auto brightness-0 invert" />
                            <span className="text-xl font-bold text-white">Pay4myjunkcar</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            La solución más rápida y profesional para vender tu vehículo viejo o chocado por dinero en efectivo.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Facebook size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Twitter size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-accent transition-colors">Inicio</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">¿Cómo Funciona?</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Preguntas Frecuentes</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Obtener Cotización</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone size={20} className="text-accent mt-1" />
                                <span>{header.phone}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={20} className="text-accent mt-1" />
                                <span>{footer.email}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-accent mt-1" />
                                <span>{footer.location}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Horario de Atención</h4>
                        <ul className="space-y-4">
                            <li className="flex justify-between">
                                <span>Lun - Vie:</span>
                                <span className="text-white">8:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sábados:</span>
                                <span className="text-white">9:00 AM - 2:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Domingos:</span>
                                <span className="text-white text-accent">Cerrado</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="h-px bg-white/10 mb-10"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                    <p>© {currentYear} Pay4myjunkcar. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
