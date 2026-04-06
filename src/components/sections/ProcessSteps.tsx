import styles from './ProcessSteps.module.css';

const steps = [
  {
    number: '01',
    title: 'Quote Online',
    description: 'Tell us about your lawn and get a custom quote in minutes. No obligation.'
  },
  {
    number: '02',
    title: 'We Treat',
    description: 'Our expert technicians apply the right products at the perfect time for our climate.'
  },
  {
    number: '03',
    title: 'You Relax',
    description: 'Enjoy a green, weed-free lawn without the hassle or corporate runaround.'
  }
];

export default function ProcessSteps() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Your Path to a Perfect Lawn in 3 Simple Steps</h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.number}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
