import { iconMap } from '../utils/icons'
import styles from './Card.module.css'

export default function Card({ icon, title, description, children, variant = 'default' }) {
  const Icon = iconMap[icon]

  return (
    <div className={`${styles.card} ${styles[`card--${variant}`]}`}>
      {Icon && (
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {children}
    </div>
  )
}
