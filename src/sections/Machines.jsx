import { iconMap as MdIcons } from '../utils/icons'
import SectionTitle from '../components/SectionTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { machines } from '../data/machines'
import styles from './Machines.module.css'

export default function Machines() {
  const ref = useScrollReveal()

  return (
    <section id="maquinas" className={`section section--alt`}>
      <div className="container">
        <SectionTitle
          label="Especialização técnica"
          title={<>Tipos de máquinas <span>atendidas</span></>}
          subtitle="Atendemos os três principais tipos de máquinas EDM com total expertise técnica."
          centered
        />

        <div ref={ref} className={`reveal ${styles.grid}`}>
          {machines.map((machine) => {
            const Icon = MdIcons[machine.icon]
            return (
              <div key={machine.id} className={styles.card}>
                <div className={styles.iconWrapper}>
                  {Icon && <Icon className={styles.icon} />}
                </div>
                <span className={styles.subtitle}>{machine.subtitle}</span>
                <h3 className={styles.title}>{machine.title}</h3>
                <p className={styles.description}>{machine.description}</p>
                <ul className={styles.applications}>
                  {machine.applications.map((app) => (
                    <li key={app} className={styles.appItem}>
                      <span className={styles.appDot} />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
