'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import styles from './Gallery.module.css';

const galleryItems = [
  {
    id: 1,
    category: 'weed-control',
    title: 'Dandelion Takeover',
    location: 'North Metro',
    description: 'This property was 40% weeds. After 2 treatments, the lawn is 100% clean.',
    before: 'https://images.unsplash.com/photo-1599341775764-f654b049d566?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    category: 'lawn-recovery',
    title: 'Heat Stress Recovery',
    location: 'Westside',
    description: 'Brought back a dormant lawn with specialized nutrient applications.',
    before: 'https://images.unsplash.com/photo-1595841696677-54897b28bc12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    category: 'aeration',
    title: 'Thin Lawn Thickening',
    location: 'Hilltop',
    description: 'Fall aeration and overseeding results after 6 weeks.',
    before: 'https://images.unsplash.com/photo-1599341775764-f654b049d566?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Real Results in the Metro Area" 
            subtitle="See the difference professional treatment makes. No stock photos—just real transformations for our local neighbors."
            light
          />
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          {/* Filters */}
          <div className={styles.filters}>
            <button 
              className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
              onClick={() => setFilter('all')}
            >
              Show All
            </button>
            <button 
              className={`${styles.filterBtn} ${filter === 'weed-control' ? styles.active : ''}`}
              onClick={() => setFilter('weed-control')}
            >
              Weed Infestations
            </button>
            <button 
              className={`${styles.filterBtn} ${filter === 'lawn-recovery' ? styles.active : ''}`}
              onClick={() => setFilter('lawn-recovery')}
            >
              Lawn Recovery
            </button>
            <button 
              className={`${styles.filterBtn} ${filter === 'aeration' ? styles.active : ''}`}
              onClick={() => setFilter('aeration')}
            >
              Aeration Results
            </button>
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {filteredItems.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.imagePair}>
                  <div className={styles.beforeAfterContainer}>
                    <div className={styles.imgLabel}>BEFORE</div>
                    <div 
                      className={styles.image} 
                      style={{ backgroundImage: `url(${item.before})` }}
                    ></div>
                  </div>
                  <div className={styles.beforeAfterContainer}>
                    <div className={styles.imgLabel}>AFTER</div>
                    <div 
                      className={styles.image} 
                      style={{ backgroundImage: `url(${item.after})` }}
                    ></div>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.location}>{item.location}</p>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Like these results? Get the same for your lawn.</h2>
          <Button href="/contact" variant="secondary" size="lg">Get A Quote</Button>
        </div>
      </section>
    </div>
  );
}
