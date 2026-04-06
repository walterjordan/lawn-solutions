'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import styles from './Faq.module.css';

const categories = [
  {
    name: 'Safety & Pets',
    faqs: [
      {
        question: 'Are your treatments safe for my pets and kids?',
        answer: 'Yes. We ask that you keep pets and children off the lawn until the application has completely dried (usually 1-2 hours). Once dry, it is perfectly safe to return to the lawn.'
      },
      {
        question: 'Do you use organic products?',
        answer: 'We use professional-grade, responsible products that are chosen for both efficacy and safety. While not strictly "organic," we prioritize products with the lowest environmental impact that still deliver real weed control results.'
      }
    ]
  },
  {
    name: 'Results & Timing',
    faqs: [
      {
        question: 'How soon will I see results in my lawn?',
        answer: 'You will typically see weeds begin to curl and yellow within 3-7 days, with complete die-off in 10-14 days. For fertilization, you\'ll notice a deeper green color within 1-2 weeks.'
      },
      {
        question: 'What happens if it rains right after a treatment?',
        answer: 'Most of our products are "rain-fast" within an hour. However, if a heavy downpour occurs immediately after we leave, we will return to re-treat your lawn at no additional charge.'
      },
      {
        question: 'How many applications do I need?',
        answer: 'For best results, we recommend our 7-visit annual plan. This covers pre-emergents, post-emergents, and fertilization throughout the entire growing season.'
      }
    ]
  },
  {
    name: 'Service & Billing',
    faqs: [
      {
        question: 'Do I need to be home when you treat my lawn?',
        answer: 'No. As long as we have access to your front and back yards, we can complete the service and leave a treatment summary on your door.'
      },
      {
        question: 'Do you require a long-term contract?',
        answer: 'Never. We earn your business with every visit. You can pause or cancel your service at any time without penalty.'
      },
      {
        question: 'How do I pay for my service?',
        answer: 'We offer convenient online billing. You can pay per-visit or set up automatic payments for your annual plan.'
      }
    ]
  }
];

export default function FaqPage() {
  const [activeFaq, setActiveFaq] = useState<{catIndex: number, faqIndex: number} | null>(null);

  const toggleFaq = (catIndex: number, faqIndex: number) => {
    if (activeFaq?.catIndex === catIndex && activeFaq?.faqIndex === faqIndex) {
      setActiveFaq(null);
    } else {
      setActiveFaq({catIndex, faqIndex});
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Everything you need to know about our lawn care treatments, safety protocols, and service options."
            light
          />
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqWrapper}>
            {categories.map((category, catIndex) => (
              <div key={catIndex} className={styles.category}>
                <h2 className={styles.categoryTitle}>{category.name}</h2>
                <div className={styles.accordion}>
                  {category.faqs.map((faq, faqIndex) => (
                    <div key={faqIndex} className={styles.item}>
                      <button 
                        className={styles.question} 
                        onClick={() => toggleFaq(catIndex, faqIndex)}
                        aria-expanded={activeFaq?.catIndex === catIndex && activeFaq?.faqIndex === faqIndex}
                      >
                        {faq.question}
                        <span className={styles.icon}>
                          {activeFaq?.catIndex === catIndex && activeFaq?.faqIndex === faqIndex ? '−' : '+'}
                        </span>
                      </button>
                      <div className={`${styles.answer} ${activeFaq?.catIndex === catIndex && activeFaq?.faqIndex === faqIndex ? styles.active : ''}`}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Still have questions? We’re happy to help.</h2>
          <div className={styles.ctaButtons}>
            <Button href="/contact" variant="secondary" size="lg">Contact Us</Button>
            <a href="tel:4042716964" className={styles.phoneLink}>Call (404) 271-6964</a>
          </div>
        </div>
      </section>
    </div>
  );
}
