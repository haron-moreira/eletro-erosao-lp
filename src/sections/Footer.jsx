import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md'
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { WA_URL } from '../utils/whatsapp'
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

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#hero" className={styles.logo}>
              <span className={styles.logoAccent}>Eletro</span>Erosão
            </a>
            <p className={styles.tagline}>
              Especialistas em manutenção de máquinas EDM.
              Atendimento nacional com excelência técnica.
            </p>
            <div className={styles.social}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
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
                <span>(11) 99999-9999</span>
              </li>
              <li>
                <FaWhatsapp className={styles.contactIcon} />
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <MdEmail className={styles.contactIcon} />
                <a href="mailto:contato@eletroeroso.com.br">
                  contato@eletroeroso.com.br
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
          <p>© {year} EletroErosão. Todos os direitos reservados.</p>
          <p className={styles.bottomRight}>
            Manutenção especializada em máquinas EDM
          </p>
        </div>
      </div>
    </footer>
  )
}
