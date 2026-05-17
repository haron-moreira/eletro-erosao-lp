import { iconMap as MdIcons } from '../utils/icons'
import SectionTitle from '../components/SectionTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { differentials } from '../data/differentials'
import styles from './Differentials.module.css'

export default function Differentials() {
  const ref = useScrollReveal()

  return (
    <section id="diferenciais" className="section section--alt">
      <div className="container">
        <SectionTitle
          label="Por que nos escolher"
          title={<>Nossos <span>diferenciais</span></>}
          subtitle="O que nos torna a melhor escolha para a manutenção das suas máquinas EDM."
          centered
        />

        <div ref={ref} className={`reveal ${styles.grid}`}>
          {differentials.map((item) => {
            const Icon = MdIcons[item.icon]
            return (
              <div key={item.id} className={styles.card}>
                <div className={styles.iconWrapper}>
                  {Icon && <Icon className={styles.icon} />}
                </div>
                <div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
