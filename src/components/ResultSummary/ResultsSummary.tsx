import ScoreCircle from '../ScoreCircle/ScoreCircle';
import styles from './ResultsSummary.module.scss';

export default function ResultsSummary({
  children,
  result,
}: {
  children: React.ReactNode;
  result: number;
}) {
  return (
    <div className={styles.resultsSummary}>
      <div className={styles.resultsSummary__result}>
        <h1>Your Result</h1>
        <ScoreCircle score={result} />
        <div>
          <span className={styles.resultsSummary__bold}>Great</span>
          <p>
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
      </div>
      <div className={styles.resultsSummary__summary}>{children}</div>
    </div>
  );
}
