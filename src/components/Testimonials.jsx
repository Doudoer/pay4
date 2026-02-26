import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Juan P.",
            text: "¡Pay4myjunkcar hizo que vender mi carro viejo fuera increíblemente fácil! Vinieron el mismo día y pagaron en efectivo. ¡Altamente recomendados!",
            rating: 5
        },
        {
            name: "María S.",
            text: "Excelente servicio. Mi auto estaba chocado y pensé que nadie lo querría. Ellos me dieron una oferta justa y se lo llevaron sin costo.",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Lo que Dicen Nuestros Clientes Satisfechos
                    </h2>
                    <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {reviews.map((r, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-3xl relative">
                            <Quote className="absolute top-6 right-8 text-accent/20" size={48} />
                            <div className="flex gap-1 mb-4">
                                {[...Array(r.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">★</span>
                                ))}
                            </div>
                            <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                                "{r.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                                    {r.name.charAt(0)}
                                </div>
                                <span className="font-bold text-primary">{r.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
