import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// const count = 0;
export function App() {
  const [count, setCount] = useState(0);
  console.log("I am here");
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <h1>Count={count}</h1>

      {count < 10 ? <h1>Count={count}</h1> : <h1>Max Value</h1>}
      {/* {count >= 10 ? (count = 10) : (count = this.count)} */}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// import React, { useState } from "react";
// import "./App.css";
// import { PropsDemo } from "./components/PropsDemo";

// const initialCount = 0;
// // functional or hooks
// export function App() {
//   const [count, setCount] = useState(initialCount);

//   const increment = (step) => {
//     if (count < 10) setCount(count + step);
//   };

//   const decrement = () => {
//     if (count > -5) setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(initialCount);
//   };

//   return (
//     <div className="App">
//       {count < 10 && count > -5 ? (
//         <h1>count - {count}</h1>
//       ) : (
//         <h1>{count == 10 ? "Max" : "Min"} value reached</h1>
//       )}
//       <PropsDemo
//         decrement={decrement}
//         increment={increment}
//         count={count}
//         name={"vasanth"}
//       />
//       <PropsDemo
//         decrement={decrement}
//         increment={increment}
//         count={count}
//         name={"sriram"}
//       />
//       <PropsDemo
//         decrement={decrement}
//         increment={increment}
//         count={count}
//         name={"Bharadan"}
//       />
//       <button onClick={() => increment(1)}>increment</button>
//       <button onClick={decrement}>decrement</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
// }
