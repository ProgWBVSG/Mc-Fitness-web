import styles from './CTAFinalSection.module.css';

const WA_NUMBER = '5493513093652';
const WA_PRUEBA = encodeURIComponent('Hola! Quiero agendar mi clase de prueba gratuita en MC Fitness');
const WA_CONSULTA = encodeURIComponent('Hola! Tengo consultas sobre MC Fitness');

export default function CTAFinalSection() {
    return (
        <section className={styles.section} id="cta-final">
            <div className={styles.bg} />
            <div className={`container ${styles.content}`}>
                <span className="section-tag" style={{ color: 'rgba(255,255,255,0.6)' }}>¿Listo para empezar?</span>
                <h2 className={styles.title}>¿Listo para transformar tu rutina?</h2>
                <p className={styles.text}>
                    Dejá de buscar el gimnasio perfecto. <strong>Acabás de encontrarlo.</strong>
                    <br /><br />
                    En MC Fitness no solo vas a entrenar: vas a formar parte de una comunidad que te motiva, vas a trabajar con entrenadores que te conocen de verdad y vas a disfrutar de instalaciones que combinan calidad boutique con el calor de un espacio familiar.
                    <br /><br />
                    <em>Tu mejor versión te está esperando. Y está más cerca de lo que pensás.</em>
                </p>
                <div className={styles.ctas}>
                    <a
                        href={`https://wa.me/${WA_NUMBER}?text=${WA_PRUEBA}`}
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-white btn-lg"
                    >
                        Probá tu primera clase gratis
                    </a>
                    <a
                        href={`https://wa.me/${WA_NUMBER}?text=${WA_CONSULTA}`}
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline-white"
                    >
                        Consultar por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
