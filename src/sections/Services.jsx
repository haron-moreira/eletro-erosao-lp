import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { services } from '../data/services'
import styles from './Services.module.css'

export default function Services() {
  const ref = useScrollReveal()

  return (
    <section id="servicos" className="section">
      <div className="container">
        <SectionTitle
          label="O que fazemos"
          title={<>Nossos <span>serviços</span></>}
          subtitle="Soluções completas para manutenção, modernização e operação de máquinas EDM."
          centered
        />

        <div ref={ref} className={`reveal ${styles.grid}`}>
          {services.map((service) => (
            <Card
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
