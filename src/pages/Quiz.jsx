import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';

const Quiz = ({ onQuizComplete }) => {
  const [quizData, setQuizData] = useState(null);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/quiz');
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      if (currentQuestionIndex < quizData?.questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setTimer(15);
      } else {
        handleSubmitQuiz();
      }
    }
  }, [timer, currentQuestionIndex, quizData]);

  if (!quizData) {
    return <div className="text-center text-2xl text-white">Loading quiz...</div>;
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  const handleOptionClick = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimer(15);
    }
  };

  const handleSubmitQuiz = () => {
    let finalScore = 0;

    quizData.questions.forEach((question) => {
      const selectedAnswer = answers[question.id];
      if (selectedAnswer && selectedAnswer.is_correct) {
        finalScore += 10;
      }
    });

    onQuizComplete(finalScore);
    navigate('/result'); 
  };

  return (
    <div className="quiz-container bg-gradient-to-r from-indigo-700 to-purple-900 min-h-screen p-8 flex items-center justify-center">
      <div className="quiz-card bg-white h-[60%] p-10 rounded-3xl shadow-2xl w-full max-w-lg text-center ">
        <h1 className="text-4xl font-semibold text-indigo-600 mb-6">{quizData.title || 'Quiz Title'}</h1>
        <h2 className="text-xl text-gray-700 mb-6">{quizData.topic || 'Quiz Topic'}</h2>

        <div className="timer mb-6 flex items-center justify-center text-gray-600">
          <FaClock className="text-gray-600 text-2xl mr-2" />
          <p className="text-lg font-semibold">{timer} seconds</p>
        </div>

        <div className="question-number text-lg text-gray-800 mb-4">
          Question {currentQuestionIndex + 1}/{quizData.questions.length}
        </div>

        <div className="question-container mb-6 w-full">
          <h3 className="text-lg font-semibold text-gray-800">{currentQuestion.description || 'No question description'}</h3>

          <div className="options mt-4">
            {currentQuestion.options &&
              currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(currentQuestion.id, option)}
                  className={`w-full p-4 mt-2 text-left border rounded-lg transition duration-300 ease-in-out transform ${
                    answers[currentQuestion.id]?.id === option.id
                      ? 'bg-indigo-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.description}
                </button>
              ))}
          </div>
        </div>

        <div className="controls flex justify-between items-center mt-6 w-full">
          {currentQuestionIndex < quizData.questions.length - 1 && (
            <button
              onClick={handleNextQuestion}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Next
            </button>
          )}

          {currentQuestionIndex === quizData.questions.length - 1 && (
            <button
              onClick={handleSubmitQuiz}
              className="bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition duration-200"
            >
              Finish Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
