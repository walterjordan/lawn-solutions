import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className = ''
}: SectionHeaderProps) {
  const containerClass = `${styles.header} ${centered ? styles.centered : ''} ${light ? styles.light : ''} ${className}`;

  return (
    <div className={containerClass}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
