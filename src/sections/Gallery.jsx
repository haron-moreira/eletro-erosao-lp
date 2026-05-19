import SectionTitle from '../components/SectionTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import edmFio from '../assets/gallery/01-edm-fio.webp'
import manutencao from '../assets/gallery/02-manutencao.webp'
import bancada from '../assets/gallery/03-bancada.webp'
import edmPenetracao from '../assets/gallery/04-edm-penetracao.webp'
import pecas from '../assets/gallery/05-pecas.webp'
import equipe from '../assets/gallery/06-equipe.webp'
import styles from './Gallery.module.css'

const FEATURED = { label: 'Máquina EDM por fio', src: edmFio }

const TILES = [
  { id: 2, label: 'Manutenção técnica', src: manutencao },
  { id: 3, label: 'Bancada de trabalho', src: bancada },
  { id: 4, label: 'EDM por penetração', src: edmPenetracao },
  { id: 5, label: 'Peças usinadas', src: pecas },
]

const WIDE = { label: 'Equipe técnica', src: equipe }

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

        <div ref={ref} className={`reveal ${styles.layout}`}>
          <figure className={`${styles.item} ${styles.featured}`}>
            <img
              src={FEATURED.src}
              alt={FEATURED.label}
              loading="lazy"
              decoding="async"
              className={styles.image}
            />
            <figcaption className={styles.caption}>{FEATURED.label}</figcaption>
          </figure>

          <div className={styles.tiles}>
            {TILES.map((tile) => (
              <figure key={tile.id} className={styles.item}>
                <img
                  src={tile.src}
                  alt={tile.label}
                  loading="lazy"
                  decoding="async"
                  className={styles.image}
                />
                <figcaption className={styles.caption}>{tile.label}</figcaption>
              </figure>
            ))}
          </div>

          <figure className={`${styles.item} ${styles.wide}`}>
            <img
              src={WIDE.src}
              alt={WIDE.label}
              loading="lazy"
              decoding="async"
              className={styles.image}
            />
            <figcaption className={styles.caption}>{WIDE.label}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
