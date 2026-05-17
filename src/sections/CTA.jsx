import { useScrollReveal } from '../hooks/useScrollReveal'
import WhatsAppButton from '../components/WhatsAppButton'
import styles from './CTA.module.css'

export default function CTA() {
  const ref = useScrollReveal()

  return (
    <section id="orcamento" className={styles.cta}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div ref={ref} className={`reveal ${styles.content}`}>
          <span className={styles.badge}>Fale agora</span>
          <h2 className={styles.headline}>
            Máquina parada é{' '}
            <span className={styles.accent}>prejuízo</span>.
            <br />
            Fale agora com um especialista.
          </h2>
          <p className={styles.description}>
            Nossa equipe está pronta para diagnosticar e solucionar o problema da
            sua máquina EDM com rapidez e precisão.
          </p>
          <WhatsAppButton label="Solicitar orçamento via WhatsApp" size="lg" />
        </div>
      </div>
    </section>
  )
}
