import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue // "+newValue" converts newValue to a number.
      };
    });
  }



  return (
      <>
      <Header/>
      <UserInput
          onChange={handleChange}
          userInput={userInput}
      />
        {inputIsValid ? <Results
      input={userInput}
      />
            : <p className="center">Please enter duration grater than zero.</p>}
      </>
  )
}

export default App
