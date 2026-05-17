import styles from './SectionTitle.module.css'

export default function SectionTitle({ label, title, subtitle, centered = false }) {
  return (
    <div className={`${styles.wrapper} ${centered ? styles.centered : ''}`}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
