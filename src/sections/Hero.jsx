import { MdCheckCircle } from 'react-icons/md'
import WhatsAppButton from '../components/WhatsAppButton'
import styles from './Hero.module.css'

const HIGHLIGHTS = [
  'Manutenção e retrofit',
  'Venda de máquinas',
  'Peças e consumíveis',
  'Atendimento nacional',
]

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Eletroerosão · +30 anos em EDM
        </div>

        <h1 className={styles.headline}>
          Soluções completas para máquinas de{' '}
          <span className={styles.accent}>eletroerosão</span>
        </h1>

        <p className={styles.subheadline}>
          Manutenção, retrofit, venda e peças — tudo o que sua máquina EDM precisa
          em um só lugar. Atendemos todas as marcas, em todo o Brasil.
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
