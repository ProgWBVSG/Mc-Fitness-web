import type { Metadata } from 'next';
import styles from './page.module.css';
import { Trophy, Users, Dumbbell, Leaf } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Nosotros | MC Fitness Las Delicias',
    description: 'Conocé la historia, valores y equipo de MC Fitness Las Delicias. Gimnasio boutique de barrio en Córdoba.',
};

const WA_NUMBER = '5493513093652';
const WA_MSG = encodeURIComponent('Hola! Quiero conocer más sobre MC Fitness');

const valores = [
    { icon: <Trophy className="w-10 h-10" />, title: 'Calidad sin Concesiones', desc: 'Equipamiento premium, metodologías actualizadas y estándares de primer nivel en todo lo que hacemos.' },
    { icon: <Users className="w-10 h-10" />, title: 'Comunidad Real', desc: 'Apostamos al vínculo humano genuino. Acá todos se conocen, se apoyan y celebran juntos.' },
    { icon: <Dumbbell className="w-10 h-10" />, title: 'Compromiso con tu Progreso', desc: 'Tu objetivoes nuestro objetivo. Seguimiento constante, adaptación y acompañamiento real.' },
    { icon: <Leaf className="w-10 h-10" />, title: 'Bienestar Integral', desc: 'El entrenamiento es importante, pero también lo es la recuperación, el descanso y la conexión social.' },
];

export default function NosotrosPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.tag}>Nosotros</span>
                    <h1>La Historia Detrás del Gym Boutique de Las Delicias</h1>
                    <p>Un proyecto nacido del barrio para el barrio. Con la convicción de que la calidad premium y la calidez familiar no son opuestos.</p>
                </div>
            </section>

            {/* Historia */}
            <section className="section">
                <div className="container">
                    <div className={styles.historia}>
                        <div>
                            <span className="section-tag">Nuestra Historia</span>
                            <h2>Cómo nació MC Fitness</h2>
                            <p>MC Fitness nació de una idea simple pero poderosa: que los vecinos de Las Delicias merecían un espacio de entrenamiento de verdadera calidad, sin tener que viajar al centro de Córdoba para encontrarlo.</p>
                            <p>Desde nuestra apertura, construimos algo más que un gimnasio. Construimos una comunidad. Un lugar donde el vecino de la esquina entrena al lado del deportista más comprometido, donde los entrenadores conocen tu nombre y tu historia, donde después de sudar podés quedarte a tomar mate.</p>
                            <p>Hoy, con más de 50 miembros activos, 5 entrenadores profesionales y siendo los únicos en la zona con sillas masajeadoras, seguimos creciendo con el mismo espíritu del primer día.</p>
                        </div>
                        <div className={styles.historiaStats}>
                            {[
                                { num: '+1', label: 'Año de historia', sub: 'En Las Delicias' },
                                { num: '+50', label: 'Miembros activos', sub: 'Comunidad en crecimiento' },
                                { num: '5', label: 'Entrenadores', sub: 'Certificados y comprometidos' },
                                { num: '2', label: 'Disciplinas', sub: 'Funcional + Pilates' },
                            ].map(s => (
                                <div key={s.label} className={styles.statBox}>
                                    <div className={styles.statNum}>{s.num}</div>
                                    <div className={styles.statLabel}>{s.label}</div>
                                    <div className={styles.statSub}>{s.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="section section--light">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Nuestros Valores</span>
                        <h2>Lo que nos define como espacio</h2>
                    </div>
                    <div className={styles.valoresGrid}>
                        {valores.map(v => (
                            <div key={v.title} className={styles.valorCard}>
                                <div className={styles.valorIcon}>{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.ctaSection}`}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'white' }}>Venite a conocernos</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '12px', marginBottom: '36px' }}>Nada replace la experiencia de estar acá. Primera clase gratis y sin compromiso.</p>
                    <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-white btn-lg">
                        Contactar por WhatsApp
                    </a>
                </div>
            </section>
        </>
    );
}
