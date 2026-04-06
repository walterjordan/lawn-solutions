import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Lawn<span>Solutions</span>
            </Link>
            <p className={styles.description}>
              Professional weed control and lawn fertilization for homeowners who care about their results. Local, reliable, and expert service.
            </p>
            <div className={styles.socials}>
              {/* Social icons would go here */}
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Google">G</a>
            </div>
          </div>

          <div className={styles.linksSection}>
            <h3 className={styles.title}>Services</h3>
            <ul className={styles.links}>
              <li><Link href="/services/weed-control">Weed Control</Link></li>
              <li><Link href="/services/fertilization">Lawn Fertilization</Link></li>
              <li><Link href="/services/aeration">Aeration & Overseeding</Link></li>
              <li><Link href="/services/shrub-bed">Shrub Bed Care</Link></li>
              <li><Link href="/services/commercial">Commercial Services</Link></li>
            </ul>
          </div>

          <div className={styles.linksSection}>
            <h3 className={styles.title}>Company</h3>
            <ul className={styles.links}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/gallery">Results Gallery</Link></li>
              <li><Link href="/reviews">Customer Reviews</Link></li>
              <li><Link href="/service-area">Service Area</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className={styles.contactSection}>
            <h3 className={styles.title}>Contact Us</h3>
            <ul className={styles.contactInfo}>
              <li>
                <strong>Phone:</strong> <a href="tel:4042716964">(404) 271-6964</a>
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:hello@lawnsolutions.com">hello@lawnsolutions.com</a>
              </li>
              <li>
                <strong>Hours:</strong> Mon - Fri: 8am - 5pm
              </li>
              <li>
                <strong>Location:</strong> Greater Metropolitan Area
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} LawnSolutions. All rights reserved.
          </p>
          <ul className={styles.legalLinks}>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
