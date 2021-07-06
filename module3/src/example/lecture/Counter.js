import React, { useState, useEffect } from "react";

function Counter() {
  const [valueCounter, setValueCounter] = useState(0);
  const [secCounter, setSecCounter] = useState(1);
  const [isDarkMode, setIsDarkmode] = useState(false);

  useEffect(() => {
    console.log("useffect triggered");
  });

  useEffect(() => {
    console.log("useffect mounted");
  }, []);

  useEffect(() => {
    console.log("useEffect", valueCounter);
  }, [valueCounter]);

  useEffect(() => {
    console.log("switching theme");
  }, [isDarkMode]);

  return (
    <React.Fragment>
      <button onClick={() => setValueCounter((prevstate) => prevstate + 1)}>
        Clicked {valueCounter} times
      </button>

      <button onClick={() => setIsDarkmode((prevstate) => !prevstate)}>
        is {isDarkMode && "not"} darkmode
      </button>
    </React.Fragment>
  );
}

// class Counter extends Component {
//   state = {
//     counter: 0,
// name: '',
// age : 0
//   };

//   render() {
//     return (
//       <button
//         onClick={() =>
//           this.setState((prevState) => ({ counter: prevState.counter + 1 }))
//         }
//       >
//         Clicked {this.state.counter} times
//       </button>
//     );
//   }
// }

export default Counter;
