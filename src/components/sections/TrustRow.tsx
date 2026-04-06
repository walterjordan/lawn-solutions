import styles from './TrustRow.module.css';

export default function TrustRow() {
  const trustItems = [
    { icon: '🏠', title: 'Local & Family Owned' },
    { icon: '🛡️', title: 'Licensed & Insured' },
    { icon: '🤝', title: 'Satisfaction Guarantee' },
  ];

  return (
    <section className={styles.trustRow}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {trustItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.title}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
