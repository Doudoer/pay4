import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { LayoutDashboard, LogOut, Save, RefreshCw } from 'lucide-react';

const Dashboard = () => {
    const { content, updateContent } = useContent();
    const navigate = useNavigate();
    const [localContent, setLocalContent] = useState(content);
    const [activeTab, setActiveTab] = useState('general');

    useEffect(() => {
        if (!localStorage.getItem('is_auth')) {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('is_auth');
        navigate('/login');
    };

    const handleSave = () => {
        Object.keys(localContent).forEach(section => {
            updateContent(section, localContent[section]);
        });
        alert('Cambios guardados con éxito');
    };

    const handleChange = (section, field, value) => {
        setLocalContent(prev => ({
            ...prev,
            [section]: { ...prev[section], [field]: value }
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-primary text-white flex flex-col">
                <div className="p-6 flex items-center gap-3 border-b border-white/10">
                    <LayoutDashboard size={24} className="text-accent" />
                    <span className="font-bold text-lg tracking-tight">Cms Admin</span>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('general')}
                        className={`w-full text-left p-3 rounded-xl transition-all ${activeTab === 'general' ? 'bg-white/10 font-bold text-accent' : 'hover:bg-white/5 opacity-70'}`}
                    >
                        General
                    </button>
                    <button
                        onClick={() => setActiveTab('hero')}
                        className={`w-full text-left p-3 rounded-xl transition-all ${activeTab === 'hero' ? 'bg-white/10 font-bold text-accent' : 'hover:bg-white/5 opacity-70'}`}
                    >
                        Hero Section
                    </button>
                    <button
                        onClick={() => setActiveTab('contacto')}
                        className={`w-full text-left p-3 rounded-xl transition-all ${activeTab === 'contacto' ? 'bg-white/10 font-bold text-accent' : 'hover:bg-white/5 opacity-70'}`}
                    >
                        Contacto
                    </button>
                </nav>
                <button
                    onClick={handleLogout}
                    className="p-6 flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors border-t border-white/10"
                >
                    <LogOut size={20} />
                    <span>Cerrar Sesión</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-10 h-screen overflow-y-auto">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-primary capitalize">{activeTab}</h1>
                        <p className="text-gray-500">Edita los contenidos de esta sección en tiempo real.</p>
                    </div>
                    <button
                        onClick={handleSave}
                        className="bg-accent hover:bg-accent-highlight text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-accent/20 transition-all"
                    >
                        <Save size={20} />
                        Guardar Cambios
                    </button>
                </div>

                <div className="max-w-4xl">
                    {/* General Section */}
                    {activeTab === 'general' && (
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-2">
                            <h3 className="text-xl font-bold text-primary mb-6">Ajustes Generales</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Ruta del Logo</label>
                                    <input
                                        type="text"
                                        value={localContent.header.logo}
                                        onChange={(e) => handleChange('header', 'logo', e.target.value)}
                                        className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-accent"
                                    />
                                    <p className="text-xs text-gray-400 mt-1">Usa la ruta relativa o una URL externa.</p>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Hero Section */}
                    {activeTab === 'hero' && (
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-2">
                            <h3 className="text-xl font-bold text-primary mb-6">Sección Principal (Hero)</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Badge Texto</label>
                                    <input
                                        type="text"
                                        value={localContent.hero.badge}
                                        onChange={(e) => handleChange('hero', 'badge', e.target.value)}
                                        className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-accent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Título Principal (H1)</label>
                                    <textarea
                                        rows="2"
                                        value={localContent.hero.title}
                                        onChange={(e) => handleChange('hero', 'title', e.target.value)}
                                        className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-accent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subtítulo</label>
                                    <textarea
                                        rows="3"
                                        value={localContent.hero.subtitle}
                                        onChange={(e) => handleChange('hero', 'subtitle', e.target.value)}
                                        className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-accent"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Texto Botón Primario</label>
                                        <input
                                            type="text"
                                            value={localContent.hero.ctaPrimary}
                                            onChange={(e) => handleChange('hero', 'ctaPrimary', e.target.value)}
                                            className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-accent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Texto Botón Secundario</label>
                                        <input
                                            type="text"
                                            value={localContent.hero.ctaSecondary}
                                            onChange={(e) => handleChange('hero', 'ctaSecondary', e.target.value)}
                                            className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-accent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Contacto Section */}
                    {activeTab === 'contacto' && (
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-2">
                            <h3 className="text-xl font-bold text-primary mb-6">Información de Contacto</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono Principal</label>
                                    <input
                                        type="text"
                                        value={localContent.header.phone}
                                        onChange={(e) => handleChange('header', 'phone', e.target.value)}
                                        className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-accent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={localContent.footer.email}
                                        onChange={(e) => handleChange('footer', 'email', e.target.value)}
                                        className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-accent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Ubicación</label>
                                    <input
                                        type="text"
                                        value={localContent.footer.location}
                                        onChange={(e) => handleChange('footer', 'location', e.target.value)}
                                        className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-accent"
                                    />
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
