import styles from './PreciosSection.module.css';
import { Check, MessageCircle, Gift } from 'lucide-react';

const WA_NUMBER = '5493513093652';
const WA_PILATES_NUMBER = '543513878242';
const WA_PRECIOS = encodeURIComponent('Hola! Quiero información sobre la membresía de MC Fitness ($60.000/mes)');
const WA_PILATES = encodeURIComponent('Hola! Quiero consultar horarios y planes de MC Pilates');

const beneficios = [
    'Acceso ilimitado a sala de musculación',
    'Clases de Entrenamiento Funcional incluidas',
    'Supervisión de 5 entrenadores profesionales',
    'Uso ilimitado de sillas masajeadoras',
    'Acceso a zonas de descanso y patio',
    'Ambiente familiar y comunidad',
    'Atención personalizada garantizada',
];

export default function PreciosSection() {
    return (
        <section className={`section`} id="precios">
            <div className="container">
                <div className="section-header fade-up">
                    <span className="section-tag">Planes y Precios</span>
                    <h2>Inversión simple y transparente</h2>
                    <p>Un solo plan, todo incluido. Sin costos ocultos ni sorpresas.</p>
                </div>

                <div className={`${styles.wrapper} fade-up`}>
                    <div className={styles.card}>
                        {/* Header */}
                        <div className={styles.cardHeader}>
                            <p className={styles.planName}>MEMBRESÍA MC FITNESS</p>
                            <div className={styles.precio}>
                                <span className={styles.currency}>$</span>
                                <span className={styles.amount}>60.000</span>
                                <span className={styles.period}>/mes</span>
                            </div>
                            <p className={styles.subtitle}>Todo incluido · Sin permanencia</p>
                        </div>

                        {/* Beneficios */}
                        <ul className={styles.beneficios}>
                            {beneficios.map((b) => (
                                <li key={b}>
                                    <span className={styles.check}><Check className="w-5 h-5" /></span>
                                    {b}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <a
                            href={`https://wa.me/${WA_NUMBER}?text=${WA_PRECIOS}`}
                            target="_blank" rel="noopener noreferrer"
                            className={`btn btn-primary btn-lg ${styles.ctaBtn}`}
                        >
                            Empezar mi transformación
                        </a>

                        {/* Pilates note */}
                        <p className={styles.pilatesNote}>
                            <MessageCircle className="w-4 h-4 inline-block mr-1 align-text-bottom" /> <strong>MC Pilates:</strong> Consultá planes y horarios específicos{' '}
                            <a href={`https://wa.me/${WA_PILATES_NUMBER}?text=${WA_PILATES}`} target="_blank" rel="noopener noreferrer">
                                vía WhatsApp
                            </a>
                        </p>
                    </div>

                    {/* Right side */}
                    <div className={styles.rightCol}>
                        {/* First class free */}
                        <div className={styles.freeClass}>
                            <div className={styles.freeIcon}><Gift className="w-8 h-8 mx-auto" /></div>
                            <h3>Primera clase gratis</h3>
                            <p>Probá antes de comprometerte. Conocé las instalaciones, entrenadores y sentí la energía de nuestra comunidad sin ningún costo.</p>
                            <a
                                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola! Quiero probar mi primera clase gratis en MC Fitness')}`}
                                target="_blank" rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Agendar clase gratis
                            </a>
                        </div>

                        {/* Guarantees */}
                        <div className={styles.guarantees}>
                            <h4>Sin riesgos, sin excusas</h4>
                            {[
                                { icon: <Check className="w-5 h-5" />, text: 'Sin permanencia mínima' },
                                { icon: <Check className="w-5 h-5" />, text: 'Cancelación simple' },
                                { icon: <Check className="w-5 h-5" />, text: 'Primera clase sin compromiso' },
                            ].map((g) => (
                                <div key={g.text} className={styles.guarantee}>
                                    <span className={styles.guaranteeCheck}>{g.icon}</span>
                                    <span>{g.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
