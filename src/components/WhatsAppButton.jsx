import { FaWhatsapp } from 'react-icons/fa'
import { WA_URL } from '../utils/whatsapp'
import styles from './WhatsAppButton.module.css'

export default function WhatsAppButton({ label, size = 'md', className = '' }) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${styles[`button--${size}`]} ${className}`}
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className={styles.icon} />
      {label && <span>{label}</span>}
    </a>
  )
}
