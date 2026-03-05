import styles from './ProgramasSection.module.css';
import { Dumbbell, Calendar, Clock, MapPin, Check, HeartPulse, Smartphone } from 'lucide-react';

const WA_NUMBER = '5493513093652';
const WA_PILATES_NUMBER = '543513878242';
const WA_FUNCIONAL = encodeURIComponent('Hola! Quiero reservar mi clase de prueba de Entrenamiento Funcional en MC Fitness');
const WA_PILATES = encodeURIComponent('Hola! Quiero consultar horarios y planes de MC Pilates');

export default function ProgramasSection() {
    return (
        <section className={`section ${styles.section}`} id="programas">
            <div className="container">
                <div className="section-header fade-up">
                    <span className="section-tag">Nuestros Programas</span>
                    <h2>Dos caminos, un mismo objetivo: tu mejor versión</h2>
                </div>

                {/* Funcional */}
                <div className={`${styles.programa} fade-up`}>
                    <div className={styles.programaImg}>
                        <div className={styles.imgPlaceholder} style={{ background: 'linear-gradient(135deg, #1B4F8A 0%, #0d2e55 100%)' }}>
                            <div className={styles.imgOverlay}>
                                <span className={styles.programaBadge}><Dumbbell className="w-4 h-4 inline-block mr-1" /> Entrenamiento Funcional</span>
                                <ul className={styles.horarioList}>
                                    <li><Calendar className="w-4 h-4 inline-block mr-2 align-text-bottom" /> Lunes y Miércoles</li>
                                    <li><Clock className="w-4 h-4 inline-block mr-2 align-text-bottom" /> 19:00 hs</li>
                                    <li><MapPin className="w-4 h-4 inline-block mr-2 align-text-bottom" /> Las Delicias</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.programaContent}>
                        <span className="section-tag">Programa 1</span>
                        <h3>Entrenamiento Funcional de Alto Rendimiento</h3>
                        <p>Mejorá tu sistema cardiovascular, fuerza funcional y flexibilidad en sesiones diseñadas para desafiarte y motivarte. Grupos reducidos con supervisión profesional constante.</p>
                        <ul className={styles.beneficios}>
                            {[
                                'Mejora cardiovascular y capacidad aeróbica',
                                'Desarrollo de fuerza funcional aplicable a tu vida diaria',
                                'Flexibilidad dinámica y movilidad',
                                'Corrección de postura corporal',
                                'Ambiente de grupo motivador',
                            ].map((b) => (
                                <li key={b}>
                                    <span className={styles.check}><Check className="w-5 h-5" /></span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.nivel}>
                            <span>Nivel:</span> <strong>Todos los niveles bienvenidos</strong>
                        </div>
                        <a
                            href={`https://wa.me/${WA_NUMBER}?text=${WA_FUNCIONAL}`}
                            target="_blank" rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Reservá tu clase de prueba
                        </a>
                    </div>
                </div>

                {/* Pilates */}
                <div className={`${styles.programa} ${styles.reverse} fade-up delay-2`}>
                    <div className={styles.programaContent}>
                        <span className="section-tag">Programa 2</span>
                        <h3>MC Pilates: Fortalecimiento Consciente</h3>
                        <p>Fortalecé tu musculatura profunda, mejorá tu flexibilidad y desarrollá conciencia corporal completa. Pilates es el complemento perfecto para tu entrenamiento o tu disciplina principal.</p>
                        <ul className={styles.beneficios}>
                            {[
                                'Fortalecimiento muscular profundo',
                                'Mejora notable de flexibilidad',
                                'Desarrollo de conciencia corporal',
                                'Corrección postural efectiva',
                                'Alivio de dolores crónicos',
                                'Equilibrio mental y reducción de estrés',
                            ].map((b) => (
                                <li key={b}>
                                    <span className={styles.check}><Check className="w-5 h-5" /></span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.nivel}>
                            <span>Sedes:</span> <strong>Las Delicias + Lomas (Córdoba)</strong>
                        </div>
                        <a
                            href={`https://wa.me/${WA_PILATES_NUMBER}?text=${WA_PILATES}`}
                            target="_blank" rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Consultá horarios de Pilates
                        </a>
                    </div>
                    <div className={styles.programaImg}>
                        <div className={styles.imgPlaceholder} style={{ background: 'linear-gradient(135deg, #E8541A 0%, #c44310 100%)' }}>
                            <div className={styles.imgOverlay}>
                                <span className={styles.programaBadge}><HeartPulse className="w-4 h-4 inline-block mr-1" /> MC Pilates</span>
                                <ul className={styles.horarioList}>
                                    <li><MapPin className="w-4 h-4 inline-block mr-2 align-text-bottom" /> Las Delicias + Lomas</li>
                                    <li><Smartphone className="w-4 h-4 inline-block mr-2 align-text-bottom" /> Consultá horarios</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
