'use client';

import styles from './LeadForm.module.css';

export default function LeadForm() {
  return (
    <section className={styles.section} id="get-quote">
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>Get A Price For Your Lawn Today</h2>
            <p className={styles.subtitle}>See how affordable a perfect, weed-free lawn can be. No obligation.</p>
            <div className={styles.badges}>
              <span className={styles.badge}>✓ Instant Estimate</span>
              <span className={styles.badge}>✓ No Contract Required</span>
              <span className={styles.badge}>✓ 100% Satisfaction Guarantee</span>
            </div>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input type="text" id="name" name="name" className={styles.input} placeholder="John Doe" required />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input type="tel" id="phone" name="phone" className={styles.input} placeholder="(404) 271-6964" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input type="email" id="email" name="email" className={styles.input} placeholder="john@example.com" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="address" className={styles.label}>Street Address</label>
              <input type="text" id="address" name="address" className={styles.input} placeholder="123 Metro Way" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service" className={styles.label}>Service Interested In</label>
              <select id="service" name="service" className={styles.select}>
                <option value="annual-plan">Annual Care Plan (Recommended)</option>
                <option value="weed-control">Weed Control Only</option>
                <option value="aeration">Aeration & Overseeding</option>
                <option value="shrub-bed">Shrub Bed Weed Control</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <button type="submit" className={styles.submitButton}>Get My Quote Now</button>
            <p className={styles.privacyNote}>We respect your privacy. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
