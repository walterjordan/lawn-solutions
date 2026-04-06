import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Faq from '@/components/sections/Faq'; // I can reuse the general FAQ or make it specific
import styles from './ServiceDetail.module.css';

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <Link href="/services" className={styles.backLink}>&larr; All Services</Link>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.subtitle}>{service.shortDescription}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.details}>
              <div className={styles.descriptionSection}>
                <h2 className={styles.sectionTitle}>What is {service.title}?</h2>
                <p className={styles.descriptionText}>{service.fullDescription}</p>
              </div>

              <div className={styles.problemsSection}>
                <h3 className={styles.sectionTitle}>Common Problems We Solve:</h3>
                <ul className={styles.list}>
                  {service.commonProblems.map((problem, i) => (
                    <li key={i}>{problem}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.benefitsSection}>
                <h3 className={styles.sectionTitle}>Benefits of Professional Treatment:</h3>
                <div className={styles.benefitsGrid}>
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className={styles.benefitCard}>
                      <span className={styles.check}>✓</span>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.includedSection}>
                <h3 className={styles.sectionTitle}>What Is Included:</h3>
                <ul className={styles.checkList}>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.timingSection}>
                <h3 className={styles.sectionTitle}>Best Time to Schedule:</h3>
                <p className={styles.timingText}>{service.bestTime}</p>
              </div>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.ctaCard}>
                <h3>Ready to get started?</h3>
                <p>Get a free, no-obligation quote for your lawn today.</p>
                <Button href="/contact" size="lg" className={styles.sidebarButton}>Get My Free Quote</Button>
                <p className={styles.phoneNote}>Or call us: <a href="tel:4042716964">(404) 271-6964</a></p>
              </div>

              <div className={styles.relatedServices}>
                <h3 className={styles.relatedTitle}>Related Services</h3>
                <ul className={styles.relatedList}>
                  {relatedServices.map((rs) => (
                    <li key={rs.id}>
                      <Link href={`/services/${rs.id}`}>
                        <span className={styles.rsIcon}>{rs.icon}</span>
                        <span className={styles.rsTitle}>{rs.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specific FAQ */}
      <section className={styles.faqSection}>
        <div className="container">
          <SectionHeader title={`FAQs for ${service.title}`} />
          <div className={styles.faqGrid}>
            {service.faqs.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>{faq.question}</h4>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Don't let {service.title.toLowerCase()} be a headache anymore.</h2>
          <Button href="/contact" variant="secondary" size="lg">Get Your Free Quote Today</Button>
        </div>
      </section>
    </div>
  );
}
