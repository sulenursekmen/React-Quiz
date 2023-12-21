import React, { useState, useEffect } from "react";
import "./QuestionCard.css";
const QuestionCard = ({
  questionsData,
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
}) => {
  const [timer, setTimer] = useState(30);
  const approvedChoise = (e) => {
    const checkAnswer = e.currentTarget.value === questionsData[count]?.correct_answer;
  
    if (checkAnswer) {
      setScore(score + 100);
    }
  
    setCount(count + 1);
  
    if (count === 9) {
      setModal(true);
    } else {
      setTimer(30); // Reset the timer to 30 seconds for the next question
    }
  };
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0) {
        if (count < 9) {
          setCount(count + 1);
          setTimer(30);
        } else {
          setModal(true);
        }
      }
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, [timer, count]);
  
  return (
    <div className="question-card">
      <div className="question-card-timer">{timer}</div>
      <div className="question-card-title">
        {count + 1} /10 -{questionsData[count]?.question}
      </div>

      {questionsData[count]?.answers?.map((answer, i) => (
        <button onClick={approvedChoise} key={i} value={answer}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;


// import React, { useState, useEffect } from "react";
// import "./QuestionCard.css";
// const QuestionCard = ({
//   questionsData,
//   score,
//   setScore,
//   count,
//   setCount,
//   modal,
//   setModal,
// }) => {
//   const [timer, setTimer] = useState(30);
//   const approvedChoise = (e) => {
//     //    console.log(e.currentTarget.value);
//     const checkAnswer =
//       e.currentTarget.value === questionsData[count]?.correct_answer;
//     //    console.log(checkAnswer)
//     if (checkAnswer) {
//       setScore(score + 100);
//     }
//     setCount(count + 1);
//     if (count === 9) {
//       setModal(true);
//       setTimer(30)
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (timer > 0) {
//         setTimer(timer - 1);
//       }
//       if(timer===0 && count < 10){
//          setCount(count +1)
//          setTimer(30)
//       }else if(count >= 10){
//       setModal(true)
//       }
//     }, 1000);
//     return ()=>{
//         clearInterval(interval)
//     }
//   }, [timer]);
//   return (
//     <div className="question-card">
//       <div className="question-card-timer">{timer}</div>
//       <div className="question-card-title">
//         {count + 1} /10 -{questionsData[count]?.question}
//       </div>

//       {questionsData[count]?.answers?.map((answer, i) => (
//         <button onClick={approvedChoise} key={i} value={answer}>
//           {answer}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default QuestionCard;
