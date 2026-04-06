'use client';

import { useState } from 'react';
import styles from './BeforeAfterSlider.module.css';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Real Results in Your Neighborhood</h2>
          <p className={styles.subtitle}>See the transformation LawnSolutions can deliver for your lawn.</p>
        </div>

        <div className={styles.sliderWrapper}>
          <div className={styles.imageContainer}>
            {/* Base Image (determines the container's height) */}
            <img src="/beforetreat.png" alt="Before treatment" className={styles.baseImage} />
            
            {/* Overlay Image (Clipped) */}
            <div 
              className={styles.overlayContainer} 
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img src="/aftertreat.png" alt="After treatment" className={styles.overlayImage} />
            </div>

            {/* Slider Control */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos} 
              onChange={handleSliderChange} 
              className={styles.slider}
              aria-label="Before and after slider"
            />
            
            {/* Slider Line */}
            <div 
              className={styles.sliderLine} 
              style={{ left: `${sliderPos}%` }}
            >
              <div className={styles.sliderHandle}>
                <span>↔</span>
              </div>
            </div>
          </div>
          <p className={styles.caption}>From patchy, stressed grass to a full, healthy lawn in just 4 weeks.</p>
        </div>
      </div>
    </section>
  );
}
