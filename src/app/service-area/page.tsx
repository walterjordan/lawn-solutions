import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import styles from './ServiceArea.module.css';

const regions = [
  {
    name: 'North Metro',
    cities: ['Cityville', 'Northfield', 'Green Valley', 'River Oaks', 'Maplewood']
  },
  {
    name: 'South Metro',
    cities: ['Southgate', 'Oak Ridge', 'Pinehurst', 'Cedar Creek', 'Summit Park']
  },
  {
    name: 'East Metro',
    cities: ['Eastwood', 'Brighton', 'Fairview', 'Brookside', 'Lakeside']
  },
  {
    name: 'West Metro',
    cities: ['Westbury', 'Highland Park', 'Stonegate', 'Meadowbrook', 'Willow Creek']
  }
];

export default function ServiceAreaPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Proudly Serving the Greater Metropolitan Area" 
            subtitle="We are a local company serving our neighbors across the entire Metro region. Check below to see if we treat lawns in your specific city."
            light
          />
        </div>
      </section>

      <section className={styles.areaSection}>
        <div className="container">
          <div className={styles.grid}>
            {regions.map((region, i) => (
              <div key={i} className={styles.regionCard}>
                <h2 className={styles.regionName}>{region.name}</h2>
                <ul className={styles.cityList}>
                  {region.cities.map((city, j) => (
                    <li key={j}>{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.dontSeeCity}>
            <h3>Don't see your specific neighborhood listed?</h3>
            <p>We are constantly expanding our routes. Give us a call at <a href="tel:4042716964">(404) 271-6964</a> to see if we can accommodate your property.</p>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready for the best lawn on the block?</h2>
          <Button href="/contact" variant="secondary" size="lg">Get A Free Quote Today</Button>
        </div>
      </section>
    </div>
  );
}
