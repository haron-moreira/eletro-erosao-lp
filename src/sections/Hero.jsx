import { MdCheckCircle } from 'react-icons/md'
import WhatsAppButton from '../components/WhatsAppButton'
import styles from './Hero.module.css'

const HIGHLIGHTS = [
  'Atendimento nacional',
  'Técnicos especializados',
  'Suporte rápido',
  'Preventiva e corretiva',
]

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Especialistas em Eletroerosão EDM
        </div>

        <h1 className={styles.headline}>
          Manutenção especializada
          <br />
          em máquinas de{' '}
          <span className={styles.accent}>eletroerosão</span>
        </h1>

        <p className={styles.subheadline}>
          Assistência técnica especializada, manutenção preventiva e corretiva
          para máquinas EDM. Atendemos todas as marcas e modelos do mercado.
        </p>

        <ul className={styles.highlights}>
          {HIGHLIGHTS.map((item) => (
            <li key={item} className={styles.highlightItem}>
              <MdCheckCircle className={styles.highlightIcon} />
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <WhatsAppButton label="Falar no WhatsApp" size="lg" />
          <a href="#servicos" className={styles.secondaryAction}>
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  )
}
