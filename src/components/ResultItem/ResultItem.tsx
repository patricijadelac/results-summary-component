import clsx from 'clsx';
import { ResultItemProps } from '../../types';
import styles from './ResultItem.module.scss';

export default function ResultItem({
  category,
  score,
  icon,
  backgroundColor,
}: ResultItemProps) {
  return (
    <li
      className={clsx(
        styles.resultItem,
        styles[`resultItem__${backgroundColor}`]
      )}
    >
      <img
        src={icon}
        alt={`Icon representing the ${category} category`}
        width={20}
        height={20}
        aria-hidden="true"
      />
      <p>{category}</p>
      <p className={styles.resultItem__score}>
        <span className={styles.resultItem__scoreBold}>{score}</span> / 100
      </p>
    </li>
  );
}
