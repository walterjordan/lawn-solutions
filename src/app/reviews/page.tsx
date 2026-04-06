'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import styles from './Reviews.module.css';

const initialReviews = [
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

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In a real app, this would send data to a CMS/API
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Read What Your Neighbors Say About LawnSolutions" 
            subtitle="Real reviews from real homeowners in the Greater Metropolitan Area."
            light
          />
          <div className={styles.stats}>
            <div className={styles.statBox}>
              <div className={styles.statValue}>4.9/5</div>
              <div className={styles.statLabel}>Average Rating</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statValue}>150+</div>
              <div className={styles.statLabel}>Local Reviews</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reviewsListSection}>
        <div className="container">
          <div className={styles.reviewsGrid}>
            {reviews.map((review) => (
              <div key={review.id} className={styles.reviewCard}>
                <div className={styles.rating}>
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </div>
                <p className={styles.reviewText}>"{review.text}"</p>
                <div className={styles.reviewMeta}>
                  <span className={styles.reviewerName}>{review.name}</span>
                  <span className={styles.reviewerLocation}>{review.neighborhood}</span>
                  <div className={styles.reviewService}>
                    <span>{review.service}</span> • <span>{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Submission Form */}
      <section className={styles.submitSection}>
        <div className="container">
          <div className={styles.formContainer}>
            {formSubmitted ? (
              <div className={styles.successMessage}>
                <h3>Thank you for your review!</h3>
                <p>Your feedback is being reviewed and will be published shortly.</p>
              </div>
            ) : (
              <>
                <h2 className={styles.formTitle}>Leave Your Review</h2>
                <p className={styles.formSubtitle}>Are you a happy customer? Tell us about your experience!</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="neighborhood">Neighborhood / City</label>
                      <input type="text" id="neighborhood" required />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="service">Service Received</label>
                      <select id="service">
                        <option value="annual-plan">Annual Care Plan</option>
                        <option value="weed-control">Weed Control</option>
                        <option value="fertilization">Fertilization</option>
                        <option value="aeration">Aeration & Overseeding</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="rating">Rating</label>
                      <select id="rating" required>
                        <option value="5">5 Stars - Excellent</option>
                        <option value="4">4 Stars - Very Good</option>
                        <option value="3">3 Stars - Good</option>
                        <option value="2">2 Stars - Fair</option>
                        <option value="1">1 Star - Poor</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="text">Your Review</label>
                    <textarea id="text" rows={4} required placeholder="Tell us what you liked about our service..."></textarea>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="photo">Upload Lawn Photo (Optional)</label>
                    <input type="file" id="photo" accept="image/*" />
                  </div>

                  <button type="submit" className={styles.submitBtn}>Submit Review</button>
                  <p className={styles.note}>Note: Reviews are moderated before being published to prevent spam.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready for 5-star lawn care?</h2>
          <Button href="/contact" variant="secondary" size="lg">Get A Free Quote</Button>
        </div>
      </section>
    </div>
  );
}
