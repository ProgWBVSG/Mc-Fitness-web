'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './NumerosSection.module.css';
import { Users, Calendar, Trophy, Star } from 'lucide-react';

const stats = [
    { value: 50, suffix: '+', label: 'Miembros Activos', sub: 'En nuestra comunidad fitness', icon: <Users className="w-10 h-10" /> },
    { value: 1, suffix: '+', label: 'Año Transformando Vidas', sub: 'En Las Delicias, Córdoba', icon: <Calendar className="w-10 h-10" /> },
    { value: 5, suffix: '', label: 'Entrenadores Profesionales', sub: 'Dedicados a tu progreso', icon: <Trophy className="w-10 h-10" /> },
    { value: 100, suffix: '%', label: 'Equipamiento Premium', sub: 'Cero maquinaria en mal estado', icon: <Star className="w-10 h-10" /> },
];

function useCountUp(target: number, duration: number, start: boolean) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [start, target, duration]);
    return count;
}

function StatCard({ stat, animate }: { stat: typeof stats[0], animate: boolean }) {
    const count = useCountUp(stat.value, 1500, animate);
    return (
        <div className={styles.stat}>
            <div className={styles.icon}>{stat.icon}</div>
            <div className={styles.number}>
                {stat.suffix === '+' ? `+${count}` : count}{stat.suffix === '%' ? '%' : ''}
            </div>
            <div className={styles.label}>{stat.label}</div>
            <div className={styles.sub}>{stat.sub}</div>
        </div>
    );
}

export default function NumerosSection() {
    const ref = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={`section ${styles.section}`} ref={ref} id="numeros">
            <div className="container">
                <div className="section-header fade-up">
                    <span className="section-tag">Resultados</span>
                    <h2 style={{ color: 'white' }}>Números que hablan por nosotros</h2>
                </div>
                <div className={styles.grid}>
                    {stats.map((s, i) => (
                        <StatCard key={s.label} stat={s} animate={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
