import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import styles from './About.module.css';

export default function AboutPage() {
  const values = [
    {
      title: 'Show Up & Follow Through',
      description: 'If we say we’ll be there Tuesday, we’re there Tuesday. If it rains, we communicate.'
    },
    {
      title: 'Results You Can See',
      description: 'We don\'t hide behind excuses. Our goal is a visibly better lawn within weeks.'
    },
    {
      title: 'Local Expertise',
      description: 'We know the difference between crabgrass and nutsedge, and exactly when to treat them in our specific climate zone.'
    },
    {
      title: 'Respect the Property',
      description: 'We treat your home like our own. Gates are closed, toys are avoided, and we leave nothing behind but a flagged, treated lawn.'
    }
  ];

  return (
    <div className={styles.page}>
      {/* Intro Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>More Than Just Weed Killers. We’re Your Local Lawn Partners.</h1>
          <div className={styles.introContent}>
            <p className={styles.introText}>
              Hi, we’re LawnSolutions. If you’re here, you’re probably tired of seeing dandelions pop up two days after you mowed, or you’re frustrated with a previous lawn service that never showed up on time. We get it.
            </p>
            <p className={styles.introText}>
              We started this company right here in the Greater Metropolitan Area because we saw homeowners paying too much for generic service that didn't deliver real results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyImage}>
              {/* Placeholder for local truck/crew */}
              <div className={styles.imageBox}></div>
            </div>
            <div className={styles.storyContent}>
              <h2 className={styles.storyTitle}>Our Story</h2>
              <p>
                LawnSolutions wasn’t founded in a boardroom. It started in a truck, with a deep knowledge of local turf science and a commitment to doing things right the first time. We realized that the "big guys" were treating every lawn in the country the same way.
              </p>
              <p>
                But the soil here in the Metro area is unique. It needs a specific approach. We built our business on customizing treatments for <em>our</em> local environment, not a national average.
              </p>
              <div className={styles.missionBox}>
                <h3 className={styles.missionTitle}>Our Mission</h3>
                <p className={styles.missionText}>
                  To give homeowners the pride of a beautiful lawn without the hassle, using professional-grade, responsible treatments that actually work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <SectionHeader 
            title="Our Core Values" 
            subtitle="How we operate every single day to earn your trust."
          />
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.processContent}>
            <h2 className={styles.processTitle}>The LawnSolutions Process</h2>
            <p className={styles.processSubtitle}>We don’t just spray and pray.</p>
            <p>
              Our technicians are trained to analyze your lawn's current health on every visit. We use targeted applications—combining pre-emergents to stop weeds before they start, and high-quality post-emergents to knock down existing problems, all while feeding the grass so it grows thick enough to choke out future weeds naturally.
            </p>
            <div className={styles.expectationBox}>
              <h3>What homeowners can expect from us:</h3>
              <ul className={styles.expectationList}>
                <li>Clear communication before and after every visit.</li>
                <li>Trained, licensed LawnSolutions employees (no subcontractors).</li>
                <li>Commercial-grade products that are safe for your family and pets once dry.</li>
                <li>A visible improvement in your lawn's health and appearance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className="container">
          <SectionHeader 
            title="Meet Your Local Experts" 
            subtitle="When you hire us, you aren't hiring a giant corporation. You're hiring neighbors who care about your results."
          />
          <div className={styles.teamPlaceholder}>
            {/* Team photo placeholder */}
            <div className={styles.teamImage}></div>
            <p className={styles.teamCaption}>Our trained, licensed LawnSolutions crew ready to serve you.</p>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready for a lawn company that cares as much as you do?</h2>
            <Button href="/contact" variant="secondary" size="lg">Get A Free Quote</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
