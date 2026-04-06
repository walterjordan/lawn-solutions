import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            The Greenest, Weed-Free Lawns in the Metro Area Start Here.
          </h1>
          <p className={styles.subheadline}>
            Professional weed control and fertilization designed for local soil. Fast results, reliable service, and no corporate runaround.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryButton}>
              Get My Free Quote
            </Link>
            <a href="tel:4042716964" className={styles.secondaryButton}>
              Call (404) 271-6964
            </a>
          </div>
          <div className={styles.trustRow}>
            <span className={styles.trustItem}>✓ Family Owned</span>
            <span className={styles.trustItem}>✓ Licensed & Insured</span>
            <span className={styles.trustItem}>✓ 100% Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
