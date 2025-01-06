export interface ResultItem {
  category: string;
  score: number;
  icon: string;
}

export interface SummaryDetailsProps {
  data: ResultItem[];
}

export interface ResultItemProps extends ResultItem {
  backgroundColor: string;
}
