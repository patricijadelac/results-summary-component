import styles from './ScoreCircle.module.scss';

export default function ScoreCircle({ score }: { score: number }) {
  return (
    <div className={styles.scoreCircle}>
      <span className={styles.scoreCircle__score}>{score}</span>
      <span className={styles.scoreCircle__fullScore}>of 100</span>
    </div>
  );
}
