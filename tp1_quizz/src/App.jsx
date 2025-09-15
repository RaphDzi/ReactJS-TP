import React, { useState } from "react";
import questions from "./quiz";
import QuestionCard from "./components/QuestionCard";
import Results from "./components/Results";
import "./App.css";

export default function QuizApp() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId, choiceId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: choiceId }));
  };

  const handleSubmit = () => setSubmitted(true);
  const handleRestart = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Quiz</h1>

      {!submitted ? (
        <>
          {questions.map((q) => (
            <QuestionCard
              key={q.id}
              question={q}
              selected={answers[q.id]}
              onSelect={handleSelect}
            />
          ))}

          <button onClick={handleSubmit} className="submit-btn">
            Soumettre
          </button>
        </>
      ) : (
        <Results
          questions={questions}
          answers={answers}
          onRestart={handleRestart}
        />
      )} 
    </div>
  );
}
