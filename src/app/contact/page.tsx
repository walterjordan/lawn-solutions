import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import LeadForm from '@/components/sections/LeadForm';
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Let’s Get Your Lawn Looking Its Best" 
            subtitle="Ready for a quote? Have a question about a specific weed? We’re here to help homeowners in the Greater Metropolitan area."
            light
          />
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.formSection}>
              <div className={styles.formWrapper}>
                <h2 className={styles.sectionTitle}>Get A Free Quote</h2>
                <p className={styles.sectionSubtitle}>Fill out the form below and we'll get back to you with a customized estimate for your property.</p>
                <LeadForm /> {/* I'll reuse the lead form but maybe style it differently for this page if needed, or just embed it */}
              </div>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>Contact Information</h3>
                <ul className={styles.infoList}>
                  <li>
                    <span className={styles.icon}>📞</span>
                    <div>
                      <strong>Call or Text Us:</strong>
                      <a href="tel:4042716964" className={styles.link}>(404) 271-6964</a>
                    </div>
                  </li>
                  <li>
                    <span className={styles.icon}>✉️</span>
                    <div>
                      <strong>Email:</strong>
                      <a href="mailto:hello@lawnsolutions.com" className={styles.link}>hello@lawnsolutions.com</a>
                    </div>
                  </li>
                  <li>
                    <span className={styles.icon}>⏰</span>
                    <div>
                      <strong>Business Hours:</strong>
                      <p>Monday - Friday: 8am - 5pm</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.icon}>📍</span>
                    <div>
                      <strong>Service Area:</strong>
                      <p>Serving the entire Greater Metropolitan Area and surrounding neighborhoods.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.mapCard}>
                {/* Map placeholder */}
                <div className={styles.map}>
                  <span>Map showing service area around Metro City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Shortcut */}
      <section className={styles.faqShortcut}>
        <div className="container">
          <div className={styles.faqBox}>
            <h3>Have a quick question?</h3>
            <p>Check out our <a href="/faq">Frequently Asked Questions</a> for immediate answers about our treatments, safety, and more.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
