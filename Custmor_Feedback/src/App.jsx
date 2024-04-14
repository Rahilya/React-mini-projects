import { useState } from "react";

const Stats = ({ textP, feedCount }) => {
  return (
    <tr>
      <td>{textP}</td>
      <td>{feedCount}</td>
    </tr>
  );
};

const Button = ({ text, onClickButton }) => {
  return <button onClick={onClickButton}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [total, setTotal] = useState(0);

  const [average, setAverage] = useState(0);

  const handleClick = (type) => {
    if (type === "good") {
      const updateGood = good + 1;
      setGood(updateGood);
      const updateAverage = average + 1;
      setAverage(updateAverage);
    } else if (type === "neutral") {
      const updateNeutral = neutral + 1;
      setNeutral(updateNeutral);
      const updateAverage = average + 0;
      setAverage(updateAverage);
    } else if (type === "bad") {
      const updateBad = bad + 1;
      setBad(updateBad);
      const updateAverage = average - 1;
      setAverage(updateAverage);
    }
    const updateTotal = good + neutral + bad + 1;
    setTotal(updateTotal);
  };

  const averageScore = average / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" onClickButton={() => handleClick("good")} />
      <Button text="Neutral" onClickButton={() => handleClick("neutral")} />
      <Button text="Bad" onClickButton={() => handleClick("bad")} />

      <h2>Statistic</h2>
      {total > 0 ? (
        <>
          <table>
            <tbody>
              <Stats textP="Good" feedCount={good} />
              <Stats textP="Neutral" feedCount={neutral} />
              <Stats textP="Bad" feedCount={bad} />
              <Stats textP="Total" feedCount={total} />
              <Stats textP="Average" feedCount={averageScore} />
              <Stats textP="Positive" feedCount={positive} />
            </tbody>
          </table>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
