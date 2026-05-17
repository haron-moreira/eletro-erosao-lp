import SectionTitle from '../components/SectionTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { brands } from '../data/brands'
import styles from './Brands.module.css'

export default function Brands() {
  const ref = useScrollReveal()

  return (
    <section id="marcas" className="section">
      <div className="container">
        <SectionTitle
          label="Credibilidade técnica"
          title={<>Marcas <span>atendidas</span></>}
          subtitle="Trabalhamos com as principais marcas de máquinas EDM do mercado mundial."
          centered
        />

        <div ref={ref} className={`reveal ${styles.grid}`}>
          {brands.map((brand) => (
            <div key={brand.id} className={styles.brandCard}>
              <span className={styles.brandName}>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
