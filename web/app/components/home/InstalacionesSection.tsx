import styles from './InstalacionesSection.module.css';
import { Dumbbell, Zap, Sparkles, Leaf, Tv, Droplets, Star, Check } from 'lucide-react';

const WA_NUMBER = '5493513093652';
const WA_INSTALACIONES = encodeURIComponent('Hola! Me gustaría agendar una visita para conocer MC Fitness');

const areas = [
    { title: 'Sala de Musculación', desc: 'Equipamiento de primer nivel para tu entrenamiento de fuerza', icon: <Dumbbell className="w-10 h-10" />, color: '#1B4F8A' },
    { title: 'Espacio Funcional', desc: 'Área especialmente acondicionada para clases grupales de alta intensidad', icon: <Zap className="w-10 h-10" />, color: '#E8541A' },
    { title: 'Sillas Masajeadoras', desc: 'Recuperación muscular post-entrenamiento. Único en la zona.', icon: <Sparkles className="w-10 h-10" />, color: '#2563aa', featured: true },
    { title: 'Patio al Aire Libre', desc: 'Espacio para descanso y conexión con la comunidad del gym', icon: <Leaf className="w-10 h-10" />, color: '#1B4F8A' },
    { title: 'Zona de Descanso', desc: 'Zona con TV para relajación entre series o post-entrenamiento', icon: <Tv className="w-10 h-10" />, color: '#E8541A' },
    { title: 'Pileta del Barrio', desc: 'Acceso exclusivo para miembros de MC Fitness. Beneficio adicional único.', icon: <Droplets className="w-10 h-10" />, color: '#2563aa' },
];

const amenities = [
    'Sala de musculación con equipamiento premium',
    'Espacio acondicionado para clases de funcional',
    'Sillas masajeadoras para recuperación muscular (único en la zona)',
    'Patio al aire libre para descanso',
    'Zona con TV para relajación',
    'Baños completos y vestuarios',
    'Acceso a pileta del barrio (beneficio adicional)',
];

export default function InstalacionesSection() {
    return (
        <section className={`section`} id="instalaciones">
            <div className="container">
                <div className="section-header fade-up">
                    <span className="section-tag">Nuestro Espacio</span>
                    <h2>Más que un gimnasio: tu espacio de bienestar integral</h2>
                    <p>No es solo entrenar y salir corriendo. Tenés todo lo que necesitás para una experiencia completa.</p>
                </div>

                <div className={styles.grid}>
                    {areas.map((a, i) => (
                        <div
                            key={a.title}
                            className={`${styles.card} ${a.featured ? styles.featured : ''} fade-up delay-${(i % 3) + 1}`}
                            style={{ '--card-color': a.color } as React.CSSProperties}
                        >
                            <div className={styles.cardIcon}>{a.icon}</div>
                            <h3 className={styles.cardTitle}>{a.title}</h3>
                            <p className={styles.cardDesc}>{a.desc}</p>
                            {a.featured && <span className={styles.uniqueBadge}><Star className="w-3 h-3 inline-block mr-1 mb-0.5" /> Único en la zona</span>}
                        </div>
                    ))}
                </div>

                <div className={`${styles.amenities} fade-up`}>
                    <h3>Todo incluido en tu membresía:</h3>
                    <ul>
                        {amenities.map((a) => (
                            <li key={a}>
                                <span className={styles.check}><Check className="w-5 h-5" /></span>
                                {a}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`${styles.cta} fade-up`}>
                    <a
                        href={`https://wa.me/${WA_NUMBER}?text=${WA_INSTALACIONES}`}
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-primary btn-lg"
                    >
                        Quiero conocer las instalaciones
                    </a>
                </div>
            </div>
        </section>
    );
}
