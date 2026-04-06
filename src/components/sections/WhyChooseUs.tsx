import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Local Soil Knowledge',
      description: 'We understand the specific clay and soil profiles of the Metro area, not a national average.'
    },
    {
      title: 'No Contracts Required',
      description: 'We earn your business with every treatment. Cancel anytime if you aren\'t thrilled.'
    },
    {
      title: 'Technicians You Know',
      description: 'The same professional crew treats your lawn every time, building real familiarity with your property.'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>Why Neighbors Choose LawnSolutions Over National Franchises</h2>
            <p className={styles.body}>
              We aren’t a giant call center hundreds of miles away. We are local experts who understand the specific weeds, soil types, and climate challenges of the Metro area. We don't force you into confusing contracts; we earn your business with every treatment.
            </p>
            <ul className={styles.list}>
              {points.map((point, index) => (
                <li key={index} className={styles.point}>
                  <h3 className={styles.pointTitle}>{point.title}</h3>
                  <p className={styles.pointDescription}>{point.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.imagePlaceholder}>
            <img 
              src="/Untreated vs treated.jpg" 
              alt="Untreated vs treated lawn comparison" 
              className={styles.image} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
