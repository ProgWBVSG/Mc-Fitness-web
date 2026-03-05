'use client';

import { useState } from 'react';
import { MapPin, Smartphone, Dumbbell, HeartPulse, Instagram } from 'lucide-react';
import styles from './page.module.css';

const WA_NUMBER = '5493513093652';

const waMessages = [
    { label: 'Información general', msg: 'Hola! Tengo una consulta sobre MC Fitness' },
    { label: 'Primera clase gratis', msg: 'Hola! Quiero probar mi primera clase gratis en MC Fitness' },
    { label: 'Consulta sobre precios', msg: 'Hola! Quiero información sobre la membresía de MC Fitness ($60.000/mes)' },
    { label: 'Agendar visita', msg: 'Hola! Me gustaría agendar una visita para conocer MC Fitness' },
    { label: 'MC Pilates', msg: 'Hola! Quiero consultar horarios y planes de MC Pilates' },
];

export default function ContactoPage() {
    const [selectedMsg, setSelectedMsg] = useState(0);
    const [formState, setFormState] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessages[selectedMsg].msg)}`;

    return (
        <>
            {/* Hero */}
            <section style={{ background: 'linear-gradient(135deg, #0d2e55 0%, #1B4F8A 100%)', padding: '80px 0 60px', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-block', fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>Contacto</span>
                    <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '16px' }}>¿Cómo podemos ayudarte?</h1>
                    <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '560px', lineHeight: 1.75, fontSize: '1.05rem' }}>La forma más rápida de contactarnos es por WhatsApp. También podés dejarnos tu mensaje y te respondemos pronto.</p>
                </div>
            </section>

            {/* Main */}
            <section className="section">
                <div className="container">
                    <div className={styles.gridContainer}>

                        {/* WhatsApp fast contact */}
                        <div>
                            <h2 style={{ marginBottom: '8px' }}>Mensaje rápido por WhatsApp</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>Elegí tu consulta y abrimos la conversación directamente.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                                {waMessages.map((m, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedMsg(i)}
                                        style={{
                                            padding: '14px 18px',
                                            border: `2px solid ${selectedMsg === i ? 'var(--primary)' : 'var(--border)'}`,
                                            borderRadius: 'var(--radius-sm)',
                                            background: selectedMsg === i ? 'rgba(27,79,138,0.06)' : 'white',
                                            color: selectedMsg === i ? 'var(--primary)' : 'var(--text-body)',
                                            fontFamily: 'var(--font-heading)',
                                            fontWeight: 600,
                                            fontSize: '0.88rem',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            transition: 'var(--transition-fast)',
                                        }}
                                    >
                                        {m.label}
                                    </button>
                                ))}
                            </div>
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Abrir WhatsApp
                            </a>
                        </div>

                        {/* Contact info */}
                        <div>
                            <h2 style={{ marginBottom: '8px' }}>Información de Contacto</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '28px', fontSize: '0.95rem' }}>También podés encontrarnos en:</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    { icon: <MapPin className="w-6 h-6" />, title: 'Ubicación', info: 'Molino de Torres 696, Barrio Las Delicias, Córdoba' },
                                    { icon: <Smartphone className="w-6 h-6" />, title: 'WhatsApp', info: 'Respuesta rápida en horario de atención' },
                                    { icon: <Dumbbell className="w-6 h-6" />, title: 'Funcional', info: 'Lunes y Miércoles | 19:00 hs | Las Delicias' },
                                    { icon: <HeartPulse className="w-6 h-6" />, title: 'Pilates', info: 'Las Delicias + Lomas | Consultá horarios' },
                                    { icon: <Instagram className="w-6 h-6" />, title: 'Instagram', info: '@mcfitnesslasdelicias' },
                                ].map((item) => (
                                    <div key={item.title} style={{
                                        display: 'flex',
                                        gap: '16px',
                                        padding: '18px 20px',
                                        background: 'white',
                                        border: '1px solid var(--border)',
                                        borderRadius: 'var(--radius-md)',
                                        alignItems: 'flex-start',
                                    }}>
                                        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                                        <div>
                                            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-dark)', marginBottom: '2px' }}>{item.title}</div>
                                            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{item.info}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map placeholder */}
                            <div style={{
                                marginTop: '24px',
                                height: '200px',
                                background: 'linear-gradient(135deg, var(--bg-section) 0%, var(--bg-light) 100%)',
                                border: '1px solid var(--border)',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                gap: '8px',
                                color: 'var(--text-muted)',
                            }}>
                                <MapPin className="w-10 h-10 text-primary" strokeWidth={1.5} />
                                <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>Molino de Torres 696</p>
                                <p style={{ fontSize: '0.78rem' }}>X5021 Córdoba</p>
                                <a
                                    href="https://maps.google.com/?q=Molino+de+Torres+696,Córdoba"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary btn-sm"
                                    style={{ marginTop: '4px' }}
                                >
                                    Ver en Google Maps
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
