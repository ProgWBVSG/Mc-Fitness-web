import type { Metadata } from 'next';
import styles from './page.module.css';
import { Dumbbell, Zap, Sparkles, Leaf, Tv, ShowerHead, Droplets, Star, Check } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Instalaciones | MC Fitness Las Delicias',
    description: 'Conocé las instalaciones de MC Fitness: sala de musculación, espacio funcional, sillas masajeadoras, patio y más. Único en Las Delicias.',
};

const WA_NUMBER = '5493513093652';
const WA_MSG = encodeURIComponent('Hola! Me gustaría agendar una visita para conocer MC Fitness');

const areas = [
    { nombre: 'Sala de Musculación', icon: <Dumbbell className="w-10 h-10" />, desc: 'Equipamiento completo y de primera calidad para tu entrenamiento de fuerza. Máquinas en perfecto estado, pesas libres, barras y accesorios profesionales.', badge: null },
    { nombre: 'Espacio Funcional', icon: <Zap className="w-10 h-10" />, desc: 'Área especialmente diseñada y equipada para las clases de entrenamiento funcional grupal. Espacio amplio y ventilado.', badge: null },
    { nombre: 'Sillas Masajeadoras', icon: <Sparkles className="w-10 h-10" />, desc: 'Nuestro diferenciador exclusivo. Después de entrenar, recuperá tus músculos con sesiones de masaje automático. Único en la zona.', badge: <><Star className="w-3 h-3 inline-block mr-1 mb-0.5" /> Único en Las Delicias</> },
    { nombre: 'Patio al Aire Libre', icon: <Leaf className="w-10 h-10" />, desc: 'Espacio abierto ideal para el descanso entre sesiones, tomar mate y conectar con comunidad de MC Fitness.', badge: null },
    { nombre: 'Zona de TV y Descanso', icon: <Tv className="w-10 h-10" />, desc: 'Área cómoda con pantalla para relajarte antes o después de entrenar. Un espacio para desconectar y sociabilizar.', badge: null },
    { nombre: 'Baños y Vestuarios', icon: <ShowerHead className="w-10 h-10" />, desc: 'Instalaciones sanitarias completas y limpias para que tu experiencia sea cómoda de principio a fin.', badge: null },
    { nombre: 'Pileta del Barrio', icon: <Droplets className="w-10 h-10" />, desc: 'Beneficio exclusivo para miembros: acceso a la pileta del barrio. El complemento perfecto para tus sesiones de entrenamiento.', badge: <><Star className="w-3 h-3 inline-block mr-1 mb-0.5" /> Beneficio exclusivo</> },
];

export default function InstalacionesPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.tag}>Instalaciones</span>
                    <h1>Tu Espacio de Bienestar Integral</h1>
                    <p>De la sala de musculación a las sillas masajeadoras, pasando por el patio y la pileta. Todo lo que necesitás para una experiencia de entrenamiento completa y placentera.</p>
                    <div className={styles.heroCtas}>
                        <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                            Agendar visita gratuita
                        </a>
                    </div>
                </div>
            </section>

            {/* Areas */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Nuestros Espacios</span>
                        <h2>Cada rincón diseñado para tu experiencia</h2>
                    </div>
                    <div className={styles.areasGrid}>
                        {areas.map((a) => (
                            <div key={a.nombre} className={`${styles.areaCard} ${a.badge ? styles.featured : ''}`}>
                                <div className={styles.areaIcon}>{a.icon}</div>
                                <h3>{a.nombre}</h3>
                                <p>{a.desc}</p>
                                {a.badge && <span className={styles.areaBadge}>{a.badge}</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities */}
            <section className="section section--light">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Todo Incluido</span>
                        <h2>Amenities de tu membresía</h2>
                    </div>
                    <div className={styles.amenitiesList}>
                        {[
                            'Sala de musculación con equipamiento premium',
                            'Clases de Entrenamiento Funcional (Lun/Mié 19hs)',
                            'Uso ilimitado de sillas masajeadoras',
                            'Acceso a patio al aire libre',
                            'Zona de descanso con TV',
                            'Baños y vestuarios completos',
                            'Acceso a pileta del barrio',
                            'Supervisión de 5 entrenadores certificados',
                            'Ambiente familiar y comunidad real',
                        ].map((a) => (
                            <div key={a} className={styles.amenityItem}>
                                <span className={styles.amenCheck}><Check className="w-5 h-5 inline-block" /></span>
                                {a}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.ctaSection}`}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'white' }}>¿Querés conocer el gym en persona?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '12px', marginBottom: '36px' }}>Agendá una visita gratuita y recorré las instalaciones con nuestro equipo.</p>
                    <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-white btn-lg">
                        Agendar visita por WhatsApp
                    </a>
                </div>
            </section>
        </>
    );
}
