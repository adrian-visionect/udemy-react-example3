import React, { useState } from 'react';

import './App.css';

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(props.result);

  const handleMathClick = (type, number = 1) => {
    if (type === 'subtraction') {
      setCount(count + 1);
      setResult(result - number);
    } else if (type === 'reset') {
      setCount(count + 1);
      setResult(props.result);
    } else if (type === 'addition') {
      setCount(count + 1);
      setResult(result + number);
    }
  };
  return (
    <>
      <MathButton
        name="-10"
        number="10"
        type="subtraction"
        click={handleMathClick}
      />
      <MathButton
        name="-1"
        number="1"
        type="subtraction"
        click={handleMathClick}
      />

      <MathButton name="reset" type="reset" click={handleMathClick} />

      <MathButton
        name="+1"
        number="1"
        type="addition"
        click={handleMathClick}
      />
      <MathButton
        name="+10"
        number="10"
        type="addition"
        click={handleMathClick}
      />

      <ResultPanel count={count} result={result} />
    </>
  );
};
const MathButton = (props) => {
  const number = parseInt(props.number);

  return <button onClick={() => props.click(props.type, number)}></button>;
};

const ResultPanel = (props) => {
  return (
    <>
      <h1>
        Liczby kliniec: {props.count}
        {props.count > 10 ? <span> Przeciazenie procesora</span> : null}{' '}
      </h1>
      <h1>Wynik: {props.result}</h1>
    </>
  );
};

export default Counter;
