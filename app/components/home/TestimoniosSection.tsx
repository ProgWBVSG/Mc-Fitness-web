'use client';

import { useState } from 'react';
import styles from './TestimoniosSection.module.css';
import { Quote } from 'lucide-react';

const WA_NUMBER = '5493513093652';
const WA_MSG = encodeURIComponent('Hola! Quiero unirme a la comunidad de MC Fitness');

const testimonios = [
    {
        cita: 'Probé varios gimnasios en Córdoba, pero ninguno tenía el ambiente familiar de MC Fitness. Acá todos se conocen y eso te motiva a no faltar. Además, las sillas masajeadoras después de entrenar son un lujo.',
        nombre: 'Juan Pérez',
        tiempo: 'Miembro desde hace 8 meses',
        initials: 'JP',
        color: '#1B4F8A',
    },
    {
        cita: 'Lo que más valoro es la atención personalizada. Los profes conocen mi nombre, saben mis objetivos y adaptan los ejercicios cuando tengo alguna molestia. No sos un número más.',
        nombre: 'Laura Martínez',
        tiempo: 'Miembro desde hace 1 año',
        initials: 'LM',
        color: '#E8541A',
    },
    {
        cita: 'Antes iba a un gimnasio grande del centro y me sentía perdido. Acá en MC Fitness encontré lo que buscaba: calidad profesional cerca de casa y una comunidad que se siente como una segunda familia.',
        nombre: 'Carlos Rodríguez',
        tiempo: 'Miembro desde hace 6 meses',
        initials: 'CR',
        color: '#2563aa',
    },
];

export default function TestimoniosSection() {
    const [active, setActive] = useState(0);
    const t = testimonios[active];

    return (
        <section className={`section ${styles.section}`} id="testimonios">
            <div className="container">
                <div className="section-header fade-up">
                    <span className="section-tag">Testimonios</span>
                    <h2>Lo que dicen nuestros miembros</h2>
                    <p>Historias reales de personas que eligieron MC Fitness</p>
                </div>

                <div className={`${styles.card} fade-up`}>
                    <div className={styles.quoteIcon}><Quote className="w-10 h-10 opacity-20 mx-auto" /></div>
                    <p className={styles.cita}>{t.cita}</p>

                    <div className={styles.author}>
                        <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}>
                            {t.initials}
                        </div>
                        <div>
                            <div className={styles.nombre}>{t.nombre}</div>
                            <div className={styles.tiempo}>{t.tiempo}</div>
                        </div>
                    </div>

                    {/* Nav dots */}
                    <div className={styles.dots}>
                        {testimonios.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
                                aria-label={`Testimonio ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Navigation arrows */}
                <div className={styles.arrows}>
                    <button
                        onClick={() => setActive((active - 1 + testimonios.length) % testimonios.length)}
                        className={styles.arrow}
                        aria-label="Anterior"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => setActive((active + 1) % testimonios.length)}
                        className={styles.arrow}
                        aria-label="Siguiente"
                    >
                        →
                    </button>
                </div>

                <div className={styles.cta}>
                    <a
                        href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-primary btn-lg"
                    >
                        Unite a nuestra comunidad
                    </a>
                </div>
            </div>
        </section>
    );
}
