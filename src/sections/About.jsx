import { MdFactory, MdVerified, MdSupportAgent } from 'react-icons/md'
import SectionTitle from '../components/SectionTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './About.module.css'

const STATS = [
  { icon: MdFactory, value: '15+', label: 'Anos de experiência' },
  { icon: MdVerified, value: '500+', label: 'Máquinas atendidas' },
  { icon: MdSupportAgent, value: '24h', label: 'Suporte disponível' },
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
              Somos especialistas exclusivos em máquinas de eletroerosão (EDM), com mais de 15 anos
              de experiência no setor industrial. Nossa equipe técnica altamente qualificada atende
              ferramentarias, metalúrgicas, fabricantes de moldes e indústrias de usinagem em todo
              o Brasil.
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
            <div className={styles.imagePlaceholder}>
              <div className={styles.imagePlaceholderInner}>
                <MdFactory className={styles.imagePlaceholderIcon} />
                <p>Foto da equipe / oficina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
