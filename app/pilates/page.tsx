import type { Metadata } from 'next';
import styles from './page.module.css';
import { Dumbbell, RefreshCw, Target, Bone, Stethoscope, Brain, MapPin, Check, Building, TreePine } from 'lucide-react';

export const metadata: Metadata = {
    title: 'MC Pilates | Las Delicias & Lomas - Córdoba',
    description: 'Clases de Pilates en Las Delicias y Lomas, Córdoba. Fortalecimiento consciente, flexibilidad y bienestar integral. Consultá horarios.',
};

const WA_NUMBER = '543513878242';
const WA_MSG = encodeURIComponent('Hola! Quiero consultar horarios y planes de MC Pilates');

const beneficios = [
    { icon: <Dumbbell className="w-8 h-8" />, title: 'Fortalecimiento profundo', desc: 'Trabaja la musculatura profunda y estabilizadora que los ejercicios convencionales no llegan.' },
    { icon: <RefreshCw className="w-8 h-8" />, title: 'Flexibilidad real', desc: 'Mejora gradual y sostenida de tu flexibilidad y elasticidad muscular.' },
    { icon: <Target className="w-8 h-8" />, title: 'Conciencia corporal', desc: 'Aprendés a conocer, controlar y usar tu cuerpo de manera más eficiente.' },
    { icon: <Bone className="w-8 h-8" />, title: 'Corrección postural', desc: 'Corrige desequilibrios musculares y mejora tu postura de forma duradera.' },
    { icon: <Stethoscope className="w-8 h-8" />, title: 'Alivio de dolores crónicos', desc: 'Especialmente efectivo para dolor lumbar, cervical y problemas posturales.' },
    { icon: <Brain className="w-8 h-8" />, title: 'Equilibrio mental', desc: 'La conexión mente-cuerpo de Pilates reduce el estrés y mejora el bienestar general.' },
];

export default function PilatesPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.tag}>MC Pilates</span>
                    <h1>Fortalecimiento Consciente para tu Cuerpo y Mente</h1>
                    <p>Fortalecé tu musculatura profunda, mejorá tu flexibilidad y desarrollá conciencia corporal completa. El complemento perfecto para tu entrenamiento o tu disciplina principal para el bienestar integral.</p>
                    <div className={styles.heroCtas}>
                        <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                            Consultá horarios y planes
                        </a>
                    </div>
                    <div className={styles.sedes}>
                        <div className={styles.sede}><MapPin className="w-5 h-5 inline-block mr-1 text-accent align-text-bottom" /><strong>Las Delicias</strong></div>
                        <div className={styles.divider} />
                        <div className={styles.sede}><MapPin className="w-5 h-5 inline-block mr-1 text-accent align-text-bottom" /><strong>Lomas, Córdoba</strong></div>
                    </div>
                </div>
            </section>

            {/* Qué es */}
            <section className="section">
                <div className="container">
                    <div className={styles.intro}>
                        <div>
                            <span className="section-tag">¿Qué es Pilates?</span>
                            <h2>Un método de entrenamiento que transforma desde adentro</h2>
                            <p>El método Pilates fue desarrollado por Joseph Pilates a principios del siglo XX como un sistema integral de ejercicios que trabaja el cuerpo como un todo. A diferencia de otros métodos, Pilates pone énfasis en la calidad del movimiento sobre la cantidad, en el control sobre la velocidad, y en la conciencia sobre el automatismo.</p>
                            <p>En MC Pilates, combinamos la esencia del método clásico con aplicaciones modernas respaldadas por la ciencia del movimiento. Nuestras clases están adaptadas para todos los niveles, desde personas sin experiencia hasta atletas que buscan complementar su entrenamiento.</p>
                        </div>
                        <div className={styles.infoBox}>
                            <h3>¿Para quién es MC Pilates?</h3>
                            <ul className={styles.paraQuien}>
                                {['Personas que buscan bienestar integral', 'Quienes sufren dolores crónicos de espalda o cuello', 'Atletas que quieren complementar su entrenamiento', 'Adultos mayores que buscan mantener movilidad', 'Embarazadas (con autorización médica)', 'Quienes se recuperan de lesiones'].map(i => (
                                    <li key={i}><Check className="w-4 h-4 inline-block text-accent mr-2 align-bottom" />{i}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios */}
            <section className="section section--light">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Beneficios</span>
                        <h2>Lo que Pilates transforma en vos</h2>
                    </div>
                    <div className={styles.benefGrid}>
                        {beneficios.map((b) => (
                            <div key={b.title} className={styles.benefCard}>
                                <div className={styles.benefIcon}>{b.icon}</div>
                                <h3>{b.title}</h3>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sedes */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Nuestras Sedes</span>
                        <h2>Pilates cerca de vos</h2>
                    </div>
                    <div className={styles.sedesGrid}>
                        {[
                            { nombre: 'Las Delicias', icon: <Building className="w-10 h-10" />, desc: 'Sede principal en Molino de Torres 696, Barrio Las Delicias, Córdoba.', mapUrl: 'https://maps.google.com/?q=Molino+de+Torres+696,Córdoba' },
                            { nombre: 'Lomas', icon: <TreePine className="w-10 h-10" />, desc: 'Sede en Country Lomas de la Carolina. Rodeada de naturaleza y a minutos de Las Delicias.', mapUrl: 'https://www.google.com/maps/place/Mc+Pilates/data=!4m7!3m6!1s0x94329f005adc61f5:0x6c484ae8c2bb721b!8m2!3d-31.3678457!4d-64.3003852!16s%2Fg%2F11vq2ckjqt!19sChIJ9WHcWgCfMpQRG3K7wuhKSGw?authuser=0&hl=es-419&rclk=1' },
                        ].map(s => (
                            <div key={s.nombre} className={styles.sedeCard}>
                                <div className={styles.sedeIcon}>{s.icon}</div>
                                <h3>{s.nombre}</h3>
                                <p>{s.desc}</p>
                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                                    <a href={s.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '10px 16px', fontSize: '0.85rem' }}>
                                        Ver en Mapa
                                    </a>
                                    <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '10px 16px', fontSize: '0.85rem' }}>
                                        Consultar
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Galeria Lomas */}
            <section className="section section--light">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Conocé el espacio</span>
                        <h2>Nuestra Sede en Lomas</h2>
                        <p style={{ color: 'var(--text-muted)', marginTop: '12px', maxWidth: '600px', marginInline: 'auto' }}>
                            Un espacio diseñado exclusivamente para tu bienestar, equipado con camas reformer de primer nivel y ambiente climatizado.
                        </p>
                    </div>
                    <div className={styles.galleryGrid}>
                        {[1, 2, 3].map((num) => (
                            <div key={num} className={styles.galleryItem}>
                                <img
                                    src={`/images/pilates-lomas-${num}.png`}
                                    alt={`Clase de MC Pilates en sede Lomas - Foto ${num}`}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.ctaSection}`}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'white' }}>Empezá tu camino en Pilates</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '12px', marginBottom: '36px' }}>Primera clase gratis. Sin compromiso. Consultanos por horarios y planes.</p>
                    <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-white btn-lg">
                        Consultar por WhatsApp
                    </a>
                </div>
            </section>
        </>
    );
}
