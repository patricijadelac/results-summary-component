import styles from './ScoreCircle.module.scss';

export default function ScoreCircle({ score }: { score: number }) {
  return (
    <div className={styles.scoreCircle}>
      <p className={styles.scoreCircle__score}>{score}</p>
      <p className={styles.scoreCircle__fullScore}>of 100</p>
    </div>
  );
}
