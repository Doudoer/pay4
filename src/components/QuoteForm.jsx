import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QuoteForm = () => {
    const [formData, setFormData] = useState({
        year: '',
        make: '',
        model: '',
        type: '',
        engineStarts: '',
        hasTitle: '',
        zipCode: '',
        name: '',
        email: '',
        phone: '',
    });

    const years = Array.from({ length: 2024 - 1990 + 1 }, (_, i) => 2024 - i).filter(y => y <= 2014);

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl shadow-primary/10 border border-gray-100 relative -mt-20 md:-mt-32 z-20 max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Obtén tu Oferta Instantánea</h3>
                <p className="text-gray-500">Completa los detalles y recibe una cotización gratuita en minutos</p>
            </div>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Año</label>
                        <select className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all">
                            <option value="">Seleccionar año</option>
                            {years.map(year => <option key={year} value={year}>{year}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Marca</label>
                        <input type="text" placeholder="Ej: Toyota" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Modelo</label>
                        <input type="text" placeholder="Ej: Camry" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Tipo de Vehículo</label>
                        <select className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all">
                            <option value="">Seleccionar tipo</option>
                            <option value="auto">Auto</option>
                            <option value="suv">SUV</option>
                            <option value="camioneta">Camioneta</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">¿Arranca el motor?</label>
                        <div className="flex gap-4 p-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="starts" className="text-accent focus:ring-accent" />
                                <span>Sí</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="starts" className="text-accent focus:ring-accent" />
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">¿Tienes el título?</label>
                        <div className="flex gap-4 p-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="title" className="text-accent focus:ring-accent" />
                                <span>Sí</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="title" className="text-accent focus:ring-accent" />
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-gray-100 my-4"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <input type="text" placeholder="Código Postal" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" />
                    <input type="text" placeholder="Nombre completo" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" />
                    <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" />
                    <input type="tel" placeholder="Teléfono" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" />
                </div>

                <div className="text-center pt-4">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-secondary hover:bg-green-600 text-white px-10 py-4 rounded-xl text-xl font-bold shadow-xl shadow-secondary/20 w-full md:w-auto"
                    >
                        ¡Obtener Cotización Gratuita!
                    </motion.button>
                </div>
            </form>
        </div>
    );
};

export default QuoteForm;
