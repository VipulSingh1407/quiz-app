import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://quiz-app-1-2vgs.onrender.com/api/quiz'; 

const StartPage = () => {
  const [quizData, setQuizData] = useState(null);
  const navigate = useNavigate(); 

  
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, []);

  
  const handleStartQuiz = () => {
    // Redirect to quiz 
    navigate('/quiz');
  };

  if (!quizData) {
    return <div className="text-center text-2xl text-white">Loading quiz...</div>;
  }

  return (
    <div className=" bg-gradient-to-r from-indigo-700 to-purple-900 min-h-screen p-8 flex items-center justify-center">
      <div className="quiz-start-section bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg text-center transform transition duration-500 hover:scale-105">
        <h1 className="text-5xl font-semibold text-indigo-600 mb-4">{quizData.title || 'Quiz Title'}</h1>
        <p className="text-xl text-gray-700 mb-6">{quizData.topic || 'Quiz Description'}</p>

        <div className="instructions mb-8 text-left text-gray-600">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Instructions:</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>There are total 10 questions.</li>
            <li>Each question is worth 10 points.</li>
            <li>You have 15 seconds to answer each question.</li>
            <li>Once the quiz starts, you cannot pause it.</li>
            <li>Click "Finish Quiz" to submit your answers when you're done.</li>
          </ul>
        </div>

        <button
          onClick={handleStartQuiz}
          className="bg-yellow-500 text-white text-2xl font-semibold px-10 py-5 rounded-full hover:bg-yellow-600 transition duration-300 shadow-lg transform hover:scale-110"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartPage;
