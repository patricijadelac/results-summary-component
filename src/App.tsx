import { useEffect, useState } from 'react';
import { ResultItem } from './types/index';

import ResultsSummary from './components/ResultSummary/ResultsSummary';
import SummaryDetails from './components/SummaryDetails/SummaryDetails';

function App() {
  const [data, setData] = useState<ResultItem[]>([]);

  // Calculate the average result score
  const averageScore = data.length
    ? Math.round(data.reduce((acc, item) => acc + item.score, 0) / data.length)
    : 0;

  const fetchJson = () => {
    fetch('./data.json')
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <div className="App">
      <ResultsSummary result={averageScore}>
        <SummaryDetails data={data} />
      </ResultsSummary>
    </div>
  );
}

export default App;
