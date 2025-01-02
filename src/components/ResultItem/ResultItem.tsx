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
        width={20}
        height={20}
        src={icon}
        alt={`${category} category icon`}
      />
      {category}
      <span className={styles.resultItem__score}>
        <span className={styles.resultItem__scoreBold}>{score}</span> / 100
      </span>
    </li>
  );
}
