import styles from './UVPSection.module.css';

export default function UVPSection() {
    return (
        <section className={`section ${styles.uvp}`} id="uvp">
            <div className="container">
                <div className={styles.inner}>
                    <div className={`${styles.left} fade-up`}>
                        <span className="section-tag">¿Por qué MC Fitness?</span>
                        <h2>No es solo otro gimnasio de barrio.<br />
                            <span className={styles.highlight}>Es tu gimnasio boutique.</span>
                        </h2>
                    </div>
                    <div className={`${styles.right} fade-up delay-2`}>
                        <p>
                            En MC Fitness combinamos lo mejor de dos mundos: la calidad y el equipamiento de un gimnasio boutique premium con la calidez y el sentido de comunidad de un gym de barrio donde todos se conocen.
                        </p>
                        <p>
                            Aquí no sos un número más. Nuestros 5 entrenadores profesionales te conocen por tu nombre, siguen tu progreso y ajustan tu entrenamiento según tus objetivos. Y después de entrenar, podés relajarte en nuestras sillas masajeadoras o tomar mate con tus compañeros en el patio.
                        </p>
                        <p className={styles.emphasis}>
                            Esta es la diferencia entre venir a entrenar y pertenecer a una comunidad.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
