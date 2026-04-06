'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo}>
          Lawn<span>Solutions</span>
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navLinks}>
            <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link href="/reviews" onClick={() => setIsOpen(false)}>Reviews</Link></li>
            <li><Link href="/faq" onClick={() => setIsOpen(false)}>FAQ</Link></li>
            <li className={styles.mobileOnly}>
              <Link href="/contact" className={styles.ctaButtonMobile} onClick={() => setIsOpen(false)}>
                Get Free Quote
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="tel:4042716964" className={styles.phoneLink}>
            <span className={styles.phoneIcon}>📞</span>
            <span className={styles.phoneNumber}>(404) 271-6964</span>
          </a>
          <Link href="/contact" className={styles.ctaButton}>
            Get Free Quote
          </Link>
          <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
