import { MdFactory, MdVerified, MdSupportAgent } from 'react-icons/md'
import SectionTitle from '../components/SectionTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import oficina from '../assets/about-oficina.webp'
import styles from './About.module.css'

const STATS = [
  { icon: MdFactory, value: '+7', label: 'Anos de experiência' },
  { icon: MdVerified, value: '100%', label: 'Focado em EDM' },
  { icon: MdSupportAgent, value: '24h', label: 'Atendimento emergencial' },
]

export default function About() {
  const refLeft = useScrollReveal()
  const refRight = useScrollReveal()

  return (
    <section id="sobre" className={`section section--alt ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <div ref={refLeft} className={`reveal--left ${styles.textCol}`}>
            <SectionTitle
              label="Sobre a empresa"
              title={<>Referência nacional em <span>manutenção EDM</span></>}
              subtitle="Combinamos expertise técnica de alto nível com agilidade no atendimento para manter sua produção funcionando com máxima eficiência."
            />

            <p className={styles.paragraph}>
              A <strong>Eletroerosão Sérgio Amorim</strong> é especialista exclusiva em máquinas de
              eletroerosão (EDM), com mais de 7 anos de atuação no setor industrial. Atendemos
              ferramentarias, metalúrgicas, fabricantes de moldes e indústrias de usinagem em todo
              o Brasil, a partir da nossa base em São Paulo/SP.
            </p>

            <p className={styles.paragraph}>
              Com profundo conhecimento em EDM por fio, por penetração e de furo rápido, oferecemos
              soluções completas: da manutenção preventiva ao retrofit completo de máquinas, sempre
              com foco em reduzir o tempo de parada produtiva e prolongar a vida útil dos
              equipamentos.
            </p>

            <div className={styles.stats}>
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className={styles.statItem}>
                  <Icon className={styles.statIcon} />
                  <strong className={styles.statValue}>{value}</strong>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={refRight} className={`reveal--right ${styles.imageCol}`}>
            <img
              src={oficina}
              alt="Oficina de manutenção EDM da Eletroerosão Sérgio Amorim"
              loading="lazy"
              decoding="async"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
