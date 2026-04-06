import Link from 'next/link';
import styles from './ServicesPreview.module.css';

const services = [
  {
    id: 'weed-control',
    title: 'Weed Control',
    description: 'Targeted pre and post-emergent treatments to stop weeds before they start.',
    icon: '🌿'
  },
  {
    id: 'fertilization',
    title: 'Lawn Fertilization',
    description: 'Custom slow-release nutrients designed for the specific soil of the Metro area.',
    icon: '💎'
  },
  {
    id: 'annual-plan',
    title: 'Annual Care Plans',
    description: 'The "set it and forget it" solution for a perfect lawn year-round.',
    icon: '🗓️'
  }
];

export default function ServicesPreview() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Complete Care for Metro Area Lawns</h2>
          <p className={styles.subtitle}>We don't just spray; we build healthy, thick turf that naturally chokes out weeds.</p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <Link href={`/services/${service.id}`} className={styles.link}>
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/services" className={styles.button}>
            View All Services & Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
