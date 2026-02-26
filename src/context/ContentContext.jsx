import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

const initialContent = {
    header: {
        phone: '063 734-050 8500',
        ctaText: 'Obtén tu cotización gratis',
        logo: '/src/assets/logo.png'
    },
    hero: {
        badge: 'Compramos modelos 2014 y anteriores',
        title: '¡Vendemos tu Auto Viejo o Chocado por Dinero en Efectivo Hoy!',
        subtitle: 'Sin importar su condición. Recogida gratis en tu ubicación. Recibe el pago el mismo día, sin complicaciones ni trámites lentos.',
        ctaPrimary: '¡Cotiza tu Auto Ahora!',
        ctaSecondary: 'Saber más'
    },
    features: {
        title: 'Tu Solución Rápida y Confiable para Deshacerte de tu Vehículo'
    },
    footer: {
        email: 'info@pay4myjunkcar.com',
        location: 'Ubicación Urbana Central'
    }
};

export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState(() => {
        const saved = localStorage.getItem('site_content');
        return saved ? JSON.parse(saved) : initialContent;
    });

    const updateContent = (section, data) => {
        setContent(prev => {
            const newContent = {
                ...prev,
                [section]: { ...prev[section], ...data }
            };
            localStorage.setItem('site_content', JSON.stringify(newContent));
            return newContent;
        });
    };

    return (
        <ContentContext.Provider value={{ content, updateContent }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => useContext(ContentContext);
