import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    const { content } = useContent();
    const { hero } = content;

    return (
        <section className="relative min-h-screen md:min-h-[90vh] flex items-center pt-20 overflow-hidden pb-40 md:pb-32">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
                            {hero.badge}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                            {hero.title.split('Dinero en Efectivo')[0]}
                            <span className="text-accent">Dinero en Efectivo</span>
                            {hero.title.split('Dinero en Efectivo')[1]}
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                            {hero.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-accent text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-accent/30 flex items-center gap-2"
                            >
                                {hero.ctaPrimary}
                            </motion.button>
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all">
                                {hero.ctaSecondary}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
};

export default Hero;
