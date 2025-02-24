import React, { useState } from 'react';
import './Style.css'
const questions = [
  {
    question: "1. What is React primarily used for?",
    options: ["Building mobile apps", "Server-side processing", "Building user interfaces", "Data analysis"],
    correct: 2,
  },
  {
    question: "2. Which feature of React allows it to efficiently update the UI?",
    options: ["Real DOM", "Virtual DOM", "Shadow DOM", "Document Fragment"],
    correct: 1,
  },
  {
    question: "3. JSX stands for...",
    options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Syntax", "Java Structured XML"],
    correct: 0,
  },
  {
    question: "4. In JSX, how do you express JavaScript variables?",
    options: ["Inside curly braces", "Inside square brackets", "Inside single quotes", "Inside parentheses"],
    correct: 0,
  },
  {
    question: "5. Which of the following is a correct way to comment in JSX?",
    options: ["{/* Comment here */}", "// Comment here", "<!--Comment here-->", "#Comment here"],
    correct: 0,
  },

];
 
function QuizApp() {
  const [question, setQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
 
  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    const correctAnswerIndex = questions[question].correct;
    if (index === correctAnswerIndex) {
      setFeedback('Correct ✔');
      setIsCorrect(true);
    } else {
      setFeedback('Try Again');
      setIsCorrect(false);
    }
  };
 
  const handleNextQuestion = () => {
    if (question < questions.length - 1) {
      setQuestion(question + 1);
      setSelectedAnswer(null);
      setFeedback('');
      setIsCorrect(false);
    }
  };
 
  const currentQuestion = questions[question];
  const isLastQuestion = question === questions.length - 1;
 
  return (

    <div className="quiz-container">
    <h1>Quiz Application</h1>
    
    <h2>{currentQuestion.question}</h2>
    
    <div className="options">
        {currentQuestion.options.map((option, index) => (
    <button
        key={index}
        onClick={() => handleAnswerClick(index)}
        style={{
        backgroundColor:
            selectedAnswer === index
            ? isCorrect
                ? 'green'
                : 'red'
            : '',
        color: 'white',
        }}
    >
        {option}
    </button>

    ))}

    </div>

    <div style={{ color: isCorrect ? 'green' : 'red' }}>
        {feedback}
    </div>

    {isCorrect && !isLastQuestion && (
    <button onClick={handleNextQuestion}>Next Question</button>
    )}
        
    {isLastQuestion && isCorrect && <h2>Quiz is Completed!</h2>}
    </div>
  );
}
 
export default QuizApp;