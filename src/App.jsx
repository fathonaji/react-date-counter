import { useState } from "react";

function App() {
  return (
    <div className="center">
      <Counter />
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function increaseStep() {
    setStep(step + 1);
  }
  function decreaseStep() {
    if (step > 1) setStep(step - 1);
  }
  function increaseCount() {
    setCount(count + step);
  }
  function decreaseCount() {
    setCount(count - step);
  }
  return (
    <>
      <div className="d-flex">
        <button onClick={decreaseStep}>-</button>Step: {step}
        <button onClick={increaseStep}>+</button>
      </div>
      <div className="d-flex">
        <button onClick={decreaseCount}>-</button>Count: {count}
        <button onClick={increaseCount}>+</button>
      </div>
      <div className="d-flex mt-1">
        {count < 0 && (
          <div>
            {Math.abs(count)} days ago was {date.toDateString()}
          </div>
        )}
        {count == 0 && <div>Today is {date.toDateString()}</div>}
        {count > 0 && (
          <div>
            {count} days from today is {date.toDateString()}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
