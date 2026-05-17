import { MdPhotoCamera } from 'react-icons/md'
import SectionTitle from '../components/SectionTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Gallery.module.css'

const GALLERY_ITEMS = [
  { id: 1, label: 'Máquina EDM por fio', size: 'large' },
  { id: 2, label: 'Manutenção técnica', size: 'small' },
  { id: 3, label: 'Bancada de trabalho', size: 'small' },
  { id: 4, label: 'EDM por penetração', size: 'small' },
  { id: 5, label: 'Peças usinadas', size: 'small' },
  { id: 6, label: 'Equipe técnica', size: 'medium' },
]

export default function Gallery() {
  const ref = useScrollReveal()

  return (
    <section id="galeria" className="section">
      <div className="container">
        <SectionTitle
          label="Ambiente industrial"
          title={<>Nossa <span>galeria</span></>}
          subtitle="Veja nossa operação e os equipamentos com os quais trabalhamos."
          centered
        />

        <div ref={ref} className={`reveal ${styles.grid}`}>
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className={`${styles.item} ${styles[`item--${item.size}`]}`}>
              <div className={styles.placeholder}>
                <MdPhotoCamera className={styles.placeholderIcon} />
                <span className={styles.placeholderLabel}>{item.label}</span>
              </div>
              <div className={styles.overlay}>
                <span className={styles.overlayLabel}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
