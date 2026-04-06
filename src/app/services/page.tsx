import Link from 'next/link';
import { services, annualPlan } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import styles from './Services.module.css';

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Professional Lawn Care Plans Designed for the Metro Area.</h1>
          <p className={styles.heroSubtitle}>
            A beautiful lawn requires ongoing care, not just a one-time spray. Our plans provide year-round protection against weeds and ensure deep-green, healthy growth tailored to the specific timing of our local seasons.
          </p>
        </div>
      </section>

      {/* Featured Annual Plan */}
      <section className={styles.annualPlanSection}>
        <div className="container">
          <div className={styles.planCard}>
            <div className={styles.planBadge}>MOST POPULAR</div>
            <div className={styles.planGrid}>
              <div className={styles.planContent}>
                <h2 className={styles.planTitle}>{annualPlan.title}</h2>
                <p className={styles.planSubtitle}>{annualPlan.subtitle}</p>
                <div className={styles.planPrice}>{annualPlan.priceLabel}</div>
                <p className={styles.planIdeal}><strong>Ideal For:</strong> {annualPlan.idealFor}</p>
                <Button href="/contact" size="lg" className={styles.planCta}>Get a Price for the Annual Plan</Button>
              </div>
              <div className={styles.planFeatures}>
                <h3 className={styles.featuresTitle}>What’s Included:</h3>
                <ul className={styles.featuresList}>
                  {annualPlan.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.check}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className={styles.individualServicesSection}>
        <div className="container">
          <SectionHeader 
            title="Individual Services & Add-Ons" 
            subtitle="Need specific help or a one-time service? We offer targeted solutions for every lawn challenge."
          />
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.shortDescription}</p>
                <Link href={`/services/${service.id}`} className={styles.serviceLink}>
                  View Details &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Not sure which plan is right for you?</h2>
          <p className={styles.ctaSubtitle}>Our experts can analyze your lawn and recommend the perfect treatment schedule.</p>
          <Button href="/contact" variant="secondary" size="lg">Get A Free Consultation</Button>
        </div>
      </section>
    </div>
  );
}
