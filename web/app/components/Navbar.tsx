'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const WA_NUMBER = '5493513093652';
const WA_MSG = encodeURIComponent('Hola! Quiero probar mi primera clase gratis en MC Fitness');

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/funcional', label: 'Funcional' },
  { href: '/pilates', label: 'MC Pilates' },
  { href: '/instalaciones', label: 'Instalaciones' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <svg width="120" height="44" viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="32" fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="30" fill="#1B4F8A">MC</text>
            <path d="M58 8 L80 8 L74 20 Z" fill="#E8541A"/>
            <text x="0" y="44" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="13" fill="#1B4F8A" letterSpacing="3">FITNESS</text>
          </svg>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={styles.link}>{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary btn-sm ${styles.cta}`}
        >
          Primera clase gratis
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileOpen : ''}`}>
        <ul>
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={styles.mobileLink} onClick={() => setIsOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          onClick={() => setIsOpen(false)}
          style={{ marginTop: '16px', width: '100%' }}
        >
          Primera clase gratis
        </a>
      </div>
    </nav>
  );
}
