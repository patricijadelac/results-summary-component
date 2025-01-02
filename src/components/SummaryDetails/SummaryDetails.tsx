import { SummaryDetailsProps } from '../../types/index';
import styles from './SummaryDetails.module.scss';

import Button from '../Button/Button';
import ResultItem from '../ResultItem/ResultItem';

const backgroundColors = ['red', 'yellow', 'green', 'blue'];

export default function SummaryDetails({ data }: SummaryDetailsProps) {
  return (
    <div className={styles.summaryDetails}>
      <h2>Summary</h2>
      <ul className={styles.summaryDetails__list}>
        {data?.map((data, index) => {
          const backgroundColor =
            backgroundColors[index % backgroundColors.length];

          return (
            <ResultItem
              category={data.category}
              score={data.score}
              icon={data.icon}
              backgroundColor={backgroundColor}
              key={data.category}
            />
          );
        })}
      </ul>
      <Button label="Continue" />
    </div>
  );
}
