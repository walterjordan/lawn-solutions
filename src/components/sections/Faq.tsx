'use client';

import { useState } from 'react';
import styles from './Faq.module.css';

const faqs = [
  {
    question: 'Are your treatments safe for my pets and kids?',
    answer: 'Yes. We ask that you keep pets and children off the lawn until the application has completely dried (usually 1-2 hours). Once dry, it is perfectly safe to return to the lawn.'
  },
  {
    question: 'What happens if it rains right after a treatment?',
    answer: 'Most of our products are "rain-fast" within an hour. However, if a heavy downpour occurs immediately after we leave, we will return to re-treat your lawn at no additional charge as part of our satisfaction guarantee.'
  },
  {
    question: 'How soon will I see results in my lawn?',
    answer: 'You will typically see weeds begin to curl and yellow within 3-7 days, with complete die-off in 10-14 days. For fertilization, you\'ll notice a deeper green color within 1-2 weeks.'
  },
  {
    question: 'Do I need to be home when you treat my lawn?',
    answer: 'No. As long as we have access to your front and back yards (gates unlocked, pets inside), we can complete the service and leave a summary of the treatment on your door or via email.'
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Common Questions About Our Lawn Care</h2>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <button 
                className={styles.question} 
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
                <span className={styles.icon}>{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`${styles.answer} ${activeIndex === index ? styles.active : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
