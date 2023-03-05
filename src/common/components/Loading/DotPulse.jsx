// Styles
import styles from './Loading.module.css';

const DotPulse = () => {
  return (
    <div className="w-24">
      <div className={styles.stage}>
        <div className={styles.dot_pulse} />
      </div>
    </div>
  );
};
export default DotPulse;
