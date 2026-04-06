import Link from 'next/link';
import styles from './MobileCtaBar.module.css';

export default function MobileCtaBar() {
  return (
    <div className={styles.stickyBar}>
      <a href="tel:4042716964" className={styles.callButton}>
        <span className={styles.icon}>📞</span> Call
      </a>
      <Link href="/contact" className={styles.quoteButton}>
        Get Free Quote
      </Link>
    </div>
  );
}
