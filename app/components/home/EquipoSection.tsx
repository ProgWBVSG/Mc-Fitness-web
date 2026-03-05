import styles from './EquipoSection.module.css';
import { Camera } from 'lucide-react';

const entrenadores = [
    { nombre: 'Entrenador/a 1', especialidad: 'Entrenamiento Funcional', bio: 'Especialista en entrenamiento funcional de alta intensidad y corrección postural. Comprometido/a con el progreso de cada miembro.', frase: '"Mi objetivo es que disfrutes el camino tanto como el resultado"', initials: 'E1', color: '#1B4F8A' },
    { nombre: 'Entrenador/a 2', especialidad: 'Pilates y Movilidad', bio: 'Certificado/a en Pilates con foco en fortalecimiento profundo y conciencia corporal. Años de experiencia en bienestar integral.', frase: '"Cada cuerpo es único, cada rutina también"', initials: 'E2', color: '#E8541A' },
    { nombre: 'Entrenador/a 3', especialidad: 'Fuerza y Acondicionamiento', bio: 'Especialista en acondicionamiento físico y nutrición deportiva. Transforma objetivos en resultados medibles.', frase: '"La constancia hace la diferencia"', initials: 'E3', color: '#2563aa' },
    { nombre: 'Entrenador/a 4', especialidad: 'Funcional y Cardio', bio: 'Apasionado/a por el entrenamiento grupal motivador. Crea sesiones dinámicas que desafían y energizan a cada participante.', frase: '"Juntos llegamos más lejos"', initials: 'E4', color: '#1B4F8A' },
    { nombre: 'Entrenador/a 5', especialidad: 'Corrección Postural', bio: 'Especialista en corrección postural y recuperación física. Trabaja con atletas de todos los niveles para maximizar el rendimiento.', frase: '"Tu cuerpo es capaz de más de lo que imaginás"', initials: 'E5', color: '#E8541A' },
];

export default function EquipoSection() {
    return (
        <section className={`section ${styles.section}`} id="equipo">
            <div className="container">
                <div className="section-header fade-up">
                    <span className="section-tag">Nuestro Equipo</span>
                    <h2>Conocé a los profesionales que van a guiar tu transformación</h2>
                    <p>5 entrenadores certificados que te van a conocer por tu nombre y seguir tu progreso semana a semana</p>
                </div>

                <div className={styles.grid}>
                    {entrenadores.map((e, i) => (
                        <div key={e.nombre} className={`${styles.card} fade-up delay-${(i % 3) + 1}`}>
                            <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${e.color}, ${e.color}bb)` }}>
                                <span className={styles.initials}>{e.initials}</span>
                                <div className={styles.avatarNote}><Camera className="w-4 h-4 inline-block mr-1 mb-1" /> Foto pendiente</div>
                            </div>
                            <div className={styles.info}>
                                <h3 className={styles.nombre}>{e.nombre}</h3>
                                <span className={styles.especialidad}>{e.especialidad}</span>
                                <p className={styles.bio}>{e.bio}</p>
                                <p className={styles.frase}>{e.frase}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className={`${styles.closing} fade-up`}>
                    En MC Fitness no creemos en el entrenamiento impersonal. Cada uno de nuestros entrenadores está comprometido con tu progreso individual y disponible para ajustar tu rutina según tus necesidades.
                </p>
            </div>
        </section>
    );
}
