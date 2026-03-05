import styles from './DiferenciadorSection.module.css';

const diferenciadores = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
            </svg>
        ),
        title: 'Equipamiento de Primer Nivel',
        copy: 'Maquinaria de calidad premium que rivaliza con los gimnasios más exclusivos del centro. Cero equipos viejos o en mal estado.',
        color: '#1B4F8A',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: 'Comunidad Auténtica',
        copy: 'Ambiente donde todos se conocen y se apoyan. No entrenás solo, entrenás con amigos que te motivan cada día.',
        color: '#E8541A',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
        title: 'Único con Sillas Masajeadoras',
        copy: 'Después de entrenar, recuperá tus músculos en nuestras sillas masajeadoras. Porque entrenar bien es solo la mitad de la ecuación.',
        color: '#2563aa',
        featured: true,
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /><polyline points="17 11 19 13 23 9" />
            </svg>
        ),
        title: 'Atención Personalizada',
        copy: 'Grupos reducidos que garantizan seguimiento individual. Cada entrenamiento se adapta a tus objetivos y nivel.',
        color: '#E8541A',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: 'Funcional + Pilates',
        copy: 'Dos disciplinas, un solo espacio. Entrenamiento funcional de alta intensidad y clases de Pilates para equilibrio y flexibilidad.',
        color: '#1B4F8A',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
        ),
        title: 'Calidad Sin Viajar',
        copy: 'Ubicado en Las Delicias. Ahorrá tiempo y ganá comodidad sin sacrificar nivel profesional.',
        color: '#2563aa',
    },
];

export default function DiferenciadorSection() {
    return (
        <section className={`section`} id="diferenciadores">
            <div className="container">
                <div className="section-header fade-up">
                    <span className="section-tag">Lo que nos hace únicos</span>
                    <h2>Seis razones para elegir MC Fitness</h2>
                    <p>No es marketing, es nuestra manera de hacer las cosas todos los días.</p>
                </div>
                <div className={styles.grid}>
                    {diferenciadores.map((d, i) => (
                        <div
                            key={d.title}
                            className={`${styles.card} ${d.featured ? styles.featured : ''} fade-up delay-${(i % 3) + 1}`}
                        >
                            <div className={styles.icon} style={{ color: d.featured ? 'white' : d.color, background: d.featured ? d.color : `${d.color}14` }}>
                                {d.icon}
                            </div>
                            <h3 className={styles.title}>{d.title}</h3>
                            <p className={styles.copy}>{d.copy}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
