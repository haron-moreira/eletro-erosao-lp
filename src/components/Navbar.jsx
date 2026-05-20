import { useState, useEffect } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { WA_URL } from '../utils/whatsapp'
import logoPrimary from '../assets/logo-primary.webp'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#maquinas', label: 'Máquinas' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#galeria', label: 'Galeria' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo} onClick={closeMenu} aria-label="Eletroerosão">
          <img src={logoPrimary} alt="Eletroerosão" className={styles.logoImg} />
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={styles.navLink} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navCta}
            onClick={closeMenu}
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </header>
  )
}
