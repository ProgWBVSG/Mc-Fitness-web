'use client';

import { useState } from 'react';
import styles from './FAQSection.module.css';

const faqs = [
    { q: '¿Es necesario tener experiencia previa en gimnasios?', a: 'Para nada. Recibimos personas de todos los niveles, desde principiantes absolutos hasta atletas experimentados. Nuestros entrenadores adaptan los ejercicios a tu nivel y progresan contigo a tu ritmo.' },
    { q: '¿Cuáles son los horarios disponibles?', a: 'Las clases de Entrenamiento Funcional son Lunes y Miércoles a las 19:00 hs. Para el uso libre de la sala de musculación y horarios de MC Pilates, consultanos por WhatsApp para conocer toda la disponibilidad.' },
    { q: '¿Puedo probar antes de inscribirme?', a: '¡Por supuesto! Ofrecemos una primera clase completamente gratis y sin compromiso. Así podés conocer las instalaciones, a los entrenadores y sentir si MC Fitness es para vos.' },
    { q: '¿Qué diferencia a MC Fitness de otros gimnasios?', a: 'Somos un gimnasio boutique de barrio: combinamos equipamiento de calidad premium y entrenadores profesionales con un ambiente familiar donde todos se conocen. Además, somos los únicos con sillas masajeadoras para recuperación muscular.' },
    { q: '¿Hay cupos limitados?', a: 'Sí. Mantenemos intencionalmente grupos reducidos para garantizar atención personalizada y preservar el ambiente familiar. Si estás interesado/a, te recomendamos contactarnos pronto.' },
    { q: '¿La membresía incluye todo o hay costos adicionales?', a: 'La membresía de $60.000/mes incluye acceso completo: sala de musculación, clases de funcional, uso de sillas masajeadoras y todos nuestros espacios. MC Pilates tiene planes específicos que podés consultar aparte.' },
    { q: '¿Dónde están ubicados?', a: 'Estamos en Molino de Torres 696, X5021 Córdoba (Barrio Las Delicias). MC Pilates funciona en nuestra sede central y cuenta además con una sucursal en Lomas. Contactanos por WhatsApp y te compartimos ubicación y horarios exactos.' },
    { q: '¿Puedo pausar mi membresía?', a: 'Sí, entendemos que pueden surgir imprevistos. Consultanos las opciones de pausa y nuestras políticas flexibles vía WhatsApp.' },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className={`section ${styles.section}`} id="faq">
            <div className="container">
                <div className={styles.inner}>
                    <div className={`${styles.left} fade-up`}>
                        <span className="section-tag">FAQ</span>
                        <h2>Preguntas que seguro tenés</h2>
                        <p className={styles.sub}>¿No encontrás lo que buscás? Escribinos por WhatsApp y te respondemos al instante.</p>
                        <a
                            href={`https://wa.me/5493513093652?text=${encodeURIComponent('Hola! Tengo una consulta sobre MC Fitness')}`}
                            target="_blank" rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Consultá por WhatsApp
                        </a>
                    </div>
                    <div className={`${styles.right} fade-up delay-2`}>
                        {faqs.map((faq, i) => (
                            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
                                <button
                                    className={styles.question}
                                    onClick={() => setOpen(open === i ? null : i)}
                                    aria-expanded={open === i}
                                >
                                    <span>{faq.q}</span>
                                    <span className={styles.icon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </button>
                                <div className={styles.answer}>
                                    <div className={styles.answerInner}>
                                        <p>{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
