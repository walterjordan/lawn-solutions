import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  return (
    <div className={styles.announcementBar}>
      <p className={styles.text}>
        Spring Pre-Emergent booking closes soon! <a href="/contact" className={styles.link}>Book Now &rarr;</a>
      </p>
    </div>
  );
}
