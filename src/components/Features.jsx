import React from 'react';
import { DollarSign, Truck, CarFront, FileText } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <DollarSign size={40} className="text-white" />,
            title: "Pago en Efectivo al Instante",
            desc: "Te pagamos en el momento de la recogida.",
            color: "bg-blue-600"
        },
        {
            icon: <Truck size={40} className="text-white" />,
            title: "Remolque y Recogida Gratis",
            desc: "No pagas nada por el servicio de grúa.",
            color: "bg-blue-500"
        },
        {
            icon: <CarFront size={40} className="text-white" />,
            title: "Compramos en Cualquier Condición",
            desc: "Viejos, chocados, dañados o sin funcionar.",
            color: "bg-primary"
        },
        {
            icon: <FileText size={40} className="text-white" />,
            title: "Proceso Sencillo y Sin Complicaciones",
            desc: "Nos encargamos de todo el papeleo.",
            color: "bg-accent"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        Tu Solución Rápida y Confiable para Deshacerte de tu Vehículo
                    </h2>
                    <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="text-center group p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                            <div className={`${f.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl transform group-hover:scale-110 transition-transform`}>
                                {f.icon}
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-3">
                                {f.title}
                            </h4>
                            <p className="text-gray-600">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
