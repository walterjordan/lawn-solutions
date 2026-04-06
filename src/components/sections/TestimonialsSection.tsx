import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah J.',
    neighborhood: 'North Metro',
    service: 'Annual Weed Plan',
    date: 'April 2023',
    rating: 5,
    text: 'LawnSolutions transformed my lawn in just one season. The dandelions are finally gone, and the grass is thicker than ever. Love their local expertise!'
  },
  {
    id: 2,
    name: 'Mike D.',
    neighborhood: 'Westside Oaks',
    service: 'Aeration & Overseeding',
    date: 'Sept 2023',
    rating: 5,
    text: 'Best lawn service I\'ve ever used. They actually show up when they say they will, and the results are night and day compared to the national company I used before.'
  },
  {
    id: 3,
    name: 'Amanda R.',
    neighborhood: 'Hilltop Gardens',
    service: 'Weed Control Only',
    date: 'June 2023',
    rating: 4,
    text: 'Very professional crew and great communication. My lawn looks fantastic. Highly recommend for anyone looking for reliable service in the Metro area.'
  }
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Rated 4.9 Stars by Your Neighbors</h2>
          <p className={styles.subtitle}>See what homeowners in the Metro Area are saying about our professional care.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <div className={styles.rating}>
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className={styles.text}>"{testimonial.text}"</p>
              <div className={styles.meta}>
                <span className={styles.name}>{testimonial.name}</span>
                <span className={styles.location}>{testimonial.neighborhood}</span>
                <div className={styles.service}>
                  <span>{testimonial.service}</span> • <span>{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <button className={styles.button}>Leave Your Review</button>
        </div>
      </div>
    </section>
  );
}
