import React from 'react';
import { Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import { useContent } from '../context/ContentContext';

const Header = () => {
    const { content } = useContent();
    const { header } = content;

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-12 w-12 flex-shrink-0">
                        <img src={header.logo} alt="Logo" className="h-full w-full object-contain" />
                    </div>
                    <span className="text-xl font-bold text-primary hidden sm:block">Pay4myjunkcar</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href={`tel:${header.phone.replace(/\s/g, '')}`} className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                        <Phone size={20} className="text-accent" />
                        <span>{header.phone}</span>
                    </a>
                    <button className="bg-accent hover:bg-accent-highlight text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-accent/20 transition-all transform hover:scale-105 active:scale-95">
                        {header.ctaText}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
