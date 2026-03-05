import type { Metadata } from 'next';
import styles from './page.module.css';
import { Heart, Activity, HeartPulse, Target, Users, TrendingUp, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Entrenamiento Funcional | MC Fitness Las Delicias',
    description: 'Clases de entrenamiento funcional en Las Delicias, Córdoba. Grupos reducidos, supervisión profesional. Lunes y Miércoles 19:00 hs.',
};

const WA_NUMBER = '5493513093652';
const WA_MSG = encodeURIComponent('Hola! Quiero reservar mi clase de prueba de Entrenamiento Funcional en MC Fitness');

const beneficios = [
    { icon: <Heart className="w-8 h-8" />, title: 'Mejora Cardiovascular', desc: 'Aumenta tu capacidad aeróbica y rendimiento cardiaco con ejercicios diseñados progresivamente.' },
    { icon: <Activity className="w-8 h-8" />, title: 'Fuerza Funcional', desc: 'Desarrolla fuerza aplicable a tus actividades diarias, no solo en el gym.' },
    { icon: <HeartPulse className="w-8 h-8" />, title: 'Flexibilidad y Movilidad', desc: 'Mejora tu rango de movimiento y reduce el riesgo de lesiones.' },
    { icon: <Target className="w-8 h-8" />, title: 'Corrección Postural', desc: 'Corregí malos hábitos posturales con ejercicios específicos supervisados.' },
    { icon: <Users className="w-8 h-8" />, title: 'Grupo Motivador', desc: 'El entrenamiento grupal te da la energía y motivación que necesitás para dar el 100%.' },
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Progresión Real', desc: 'Seguimiento semana a semana de tu evolución para garantizar resultados visibles.' },
];

export default function FuncionalPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.tag}>Programa 1</span>
                    <h1>Entrenamiento Funcional que Transforma</h1>
                    <p>Mejorá tu sistema cardiovascular, fuerza funcional y flexibilidad en sesiones diseñadas para desafiarte y motivarte. En grupos reducidos con supervisión profesional constante.</p>
                    <div className={styles.heroCtas}>
                        <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                            Reservá tu clase de prueba
                        </a>
                    </div>
                    <div className={styles.heroInfo}>
                        <div className={styles.infoItem}><Calendar className="w-5 h-5 mr-2 inline-block align-text-bottom text-accent" /> Lunes y Miércoles</div>
                        <div className={styles.infoItem}><Clock className="w-5 h-5 mr-2 inline-block align-text-bottom text-accent" /> 19:00 hs</div>
                        <div className={styles.infoItem}><MapPin className="w-5 h-5 mr-2 inline-block align-text-bottom text-accent" /> Las Delicias, Córdoba</div>
                        <div className={styles.infoItem}><Users className="w-5 h-5 mr-2 inline-block align-text-bottom text-accent" /> Grupos reducidos</div>
                    </div>
                </div>
            </section>

            {/* Qué es */}
            <section className="section">
                <div className="container">
                    <div className={styles.queEs}>
                        <div>
                            <span className="section-tag">¿Qué es?</span>
                            <h2>Entrenamiento que imita los movimientos de tu vida real</h2>
                            <p>El entrenamiento funcional está basado en movimientos naturales del cuerpo humano: empujar, jalar, agacharse, rotar, caminar y correr. A diferencia de las máquinas de aislamiento, el funcional trabaja múltiples grupos musculares a la vez, mejorando la coordinación, el equilibrio y la fuerza de manera integral.</p>
                            <p>En MC Fitness, nuestros entrenadores certificados diseñan cada sesión para adaptarse a todos los niveles, desde quien empieza hasta quienes buscan un desafío de alta intensidad.</p>
                        </div>
                        <div className={styles.methodology}>
                            <h3>Nuestra Metodología</h3>
                            <ol className={styles.methodList}>
                                <li><span>01</span><div><strong>Calentamiento activador</strong><p>Movilidad articular y activación muscular específica</p></div></li>
                                <li><span>02</span><div><strong>Bloque principal</strong><p>Circuitos funcionales adaptados al nivel del grupo</p></div></li>
                                <li><span>03</span><div><strong>Trabajo cardiovascular</strong><p>Intervalos diseñados para quemar y fortalecer</p></div></li>
                                <li><span>04</span><div><strong>Vuelta a la calma</strong><p>Stretching y recuperación post-sesión</p></div></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios */}
            <section className="section section--light">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Beneficios</span>
                        <h2>Lo que va a cambiar en tu cuerpo y mente</h2>
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

            {/* CTA */}
            <section className={`section ${styles.ctaSection}`}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'white' }}>¿Listo para tu primera clase?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '12px', marginBottom: '36px' }}>La primera clase es gratis y sin compromiso. Vení a conocernos.</p>
                    <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-white btn-lg">
                        Reservá gratis por WhatsApp
                    </a>
                </div>
            </section>
        </>
    );
}
