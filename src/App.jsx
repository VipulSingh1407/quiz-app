import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './pages/Start';
import Quiz from './pages/Quiz';
import QuizResult from './pages/QuizResults';

const App = () => {
  const [score, setScore] = useState(0);

  const handleQuizCompletion = (finalScore) => {
    setScore(finalScore);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/quiz"
          element={<Quiz onQuizComplete={handleQuizCompletion} />}
        />
        <Route path="/result" element={<QuizResult score={score} />} />
      </Routes>
    </Router>
  );
};

export default App;