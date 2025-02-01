import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizResult = ({ score }) => {
  const totalQuestions = 10;
  const pointsPerQuestion = 10;
  const totalPoints = totalQuestions * pointsPerQuestion;
  const correctAnswers = score / pointsPerQuestion;
  const incorrectAnswers = totalQuestions - correctAnswers;
  const percentage = (score / totalPoints) * 100;
  const navigate = useNavigate();

  let resultMessage = '';
  if (percentage >= 80) {
    resultMessage = 'Excellent!';
  } else if (percentage >= 50) {
    resultMessage = 'Good Job!';
  } else {
    resultMessage = 'Better Luck Next Time!';
  }

  return (
    <div className="quiz-result bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-500 p-12 rounded-2xl shadow-xl w-3/4 mx-auto mt-16 text-center ">
      <h1 className="text-5xl font-bold text-white">Quiz Completed!</h1>
      <p className="text-3xl text-gray-100 mt-4">Your Score: {score} out of {totalPoints}</p>
      <p className="text-2xl text-gray-200 mt-2 font-semibold">{resultMessage}</p>

      <div className="score-details mt-8 bg-white bg-opacity-20 p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl text-black mb-3">Quiz Result:</h1>
        <p className="text-2xl text-black">Percentage: {percentage.toFixed(2)}%</p>
        <p className="text-2xl text-black mt-4">Correct Answers: {correctAnswers} out of {totalQuestions}</p>
        <p className="text-2xl text-black mt-2">Incorrect Answers: {incorrectAnswers} out of {totalQuestions}</p>
      </div>

      <div className="actions mt-12">
        <button
          className="bg-green-600 text-white text-xl px-10 py-5 rounded-full hover:bg-green-700 transition duration-300 shadow-md transform hover:scale-105"
          onClick={() => navigate('/')}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default QuizResult;
