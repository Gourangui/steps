import { useState } from 'react';
import './index.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s)=> s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s)=> s + 1);
    }
  }


  return (
    <>
      <button className='close' onClick={()=> setIsOpen((is) => !is)}>&times;</button>
      { isOpen && (
        <main className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>

          <div className='buttons'>
            <button onClick={handlePrevious}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>
      </main>
      )}
    </>
  );
}

export default App;
