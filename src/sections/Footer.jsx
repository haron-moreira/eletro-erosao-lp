import { useEffect, useState } from 'react'
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md'
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { WA_URL } from '../utils/whatsapp'
import logoPrimary from '../assets/logo-primary.webp'
import logoSecondary from '../assets/logo-secondary.webp'
import styles from './Footer.module.css'

const QUICK_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#maquinas', label: 'Máquinas' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#galeria', label: 'Galeria' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const [toast, setToast] = useState('')

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(''), 2500)
    return () => clearTimeout(t)
  }, [toast])

  const showSoon = (e, label) => {
    e.preventDefault()
    setToast(`${label}: em breve!`)
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#hero" className={styles.logo} aria-label="Eletroerosão Sérgio Amorim">
              <span className={styles.logoCard}>
                <img src={logoPrimary} alt="Eletroerosão Sérgio Amorim" className={styles.logoImg} />
              </span>
              <span className={styles.logoCard}>
                <img src={logoSecondary} alt="Resitron Eletroerosão" className={styles.logoImg} />
              </span>
            </a>
            <p className={styles.tagline}>
              Especialistas em manutenção de máquinas EDM.
              Atendimento nacional com excelência técnica.
            </p>
            <div className={styles.social}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="#" aria-label="Instagram" onClick={(e) => showSoon(e, 'Instagram')}>
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" onClick={(e) => showSoon(e, 'LinkedIn')}>
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Links rápidos</h4>
            <ul className={styles.linkList}>
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={styles.link}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contato</h4>
            <ul className={styles.contactList}>
              <li>
                <MdPhone className={styles.contactIcon} />
                <span>(11) 98365-6664</span>
              </li>
              <li>
                <FaWhatsapp className={styles.contactIcon} />
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  (11) 98365-6664
                </a>
              </li>
              <li>
                <MdEmail className={styles.contactIcon} />
                <a href="mailto:sergioeletroerosao@gmail.com">
                  sergioeletroerosao@gmail.com
                </a>
              </li>
              <li>
                <MdLocationOn className={styles.contactIcon} />
                <span>São Paulo, SP — Atendimento nacional</span>
              </li>
              <li>
                <MdAccessTime className={styles.contactIcon} />
                <span>Seg–Sex: 08h–18h | Emergências 24h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} Eletroerosão Sérgio Amorim. Todos os direitos reservados.</p>
          <p className={styles.bottomRight}>
            Feito por{' '}
            <a
              href="https://lookcode.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lookcode}
            >
              Lookcode LTDA
            </a>
          </p>
        </div>
      </div>

      {toast && (
        <div className={styles.toast} role="status" aria-live="polite">
          {toast}
        </div>
      )}
    </footer>
  )
}
