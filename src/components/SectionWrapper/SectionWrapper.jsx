import styles from './SectionWrapper.module.scss';

export function SectionWrapper({ children }) {
  return <div className={styles.Container}>{children}</div>;
}
