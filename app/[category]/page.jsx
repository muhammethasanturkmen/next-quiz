"use client";

import { useState, useEffect } from "react";
import data from "/app/data.json";

export default function DataCategory({ params }) {
  const { category } = params;
  const [dataCategory, setDataCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  
  function handleNextQuestion() {
    if (currentQuestion < dataCategory.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
    setSubmitted(false);
    setAnswer(null);
  }

  function handleAnswer(x) {
    if (!submitted) {
      setAnswer(x);
    }
  }

  function handleSubmit() {
    if(answer === null) {
      return;
    }
    const correctAnswer = dataCategory.questions[currentQuestion].answer;
    setSubmitted(true);
    if (correctAnswer === answer) {
      setScore(score + 1);
    }
  }
  
  useEffect(() => {
    const categoryData = data.questionAndAnswers.find(cat => cat.category === category);
    setDataCategory(categoryData);
  }, [category]);

  if (!dataCategory) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {finished ? (
        <FinishPage score={score} />
      ) : (
        <div className="container">
          <div className="questions">
            <p>{dataCategory.questions[currentQuestion].question}</p>
          </div>
          
          <div className="options">
            {dataCategory.questions[currentQuestion].options.map((x, i) => (
              <button onClick={() => handleAnswer(x)} key={i}>{x}</button>
            ))}
            
            {!submitted 
            ? 
            (<button onClick={handleSubmit}>Submit Answer</button>)
            : 
            (<button onClick={handleNextQuestion}>Next Question</button>)
            }
          </div>
        </div>
      )}
    </>
  );
}

function FinishPage({ score }) {
  return (
    <>
      <div className="footer">
        <div className="footer-text">
          <h1>Quiz completed <span>You scored...</span></h1>
        </div>
        <div className="score">
          <h2>{score}</h2>
          <button>Play Again</button>
        </div>
      </div>
    </>
  );
}
