import React from 'react';
import { ClipboardCheck, BadgeDollarSign, Truck } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <ClipboardCheck size={48} className="text-blue-600" />,
            title: "1. Danos los Detalles",
            desc: "Completa el formulario en línea o llámanos para darnos la información básica de tu auto."
        },
        {
            icon: <BadgeDollarSign size={48} className="text-blue-600" />,
            title: "2. Recibe tu Oferta",
            desc: "Te daremos una oferta justa de inmediato basada en el mercado actual."
        },
        {
            icon: <Truck size={48} className="text-blue-600" />,
            title: "3. Cobro y Recogida",
            desc: "Si aceptas, programamos la recogida gratis y te pagamos en efectivo en el acto."
        }
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase tracking-wider">
                        Nuestro Sencillo Proceso en 3 Pasos
                    </h2>
                </div>

                <div className="relative">
                    {/* Connector Line (visible on desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-dashed border-t-2 border-dashed border-gray-300 -translate-y-12"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                        {steps.map((s, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full border-4 border-blue-50 bg-blue-50/50 flex items-center justify-center mb-6">
                                    {s.icon}
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-4">{s.title}</h4>
                                <p className="text-gray-600 leading-relaxed italic">
                                    "{s.desc}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
