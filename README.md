
# Quiz Application

This is a modern, interactive quiz application that allows users to take quizzes and see their results. The app provides a seamless experience with features like a countdown timer, question navigation, and detailed results after completing the quiz.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)


## Features
- **Interactive UI**: Professional UI with smooth transitions and responsive design.
- **Timer**: Countdown timer for each question, ensuring time management.
- **Multiple Choice Questions**: Users can select answers from multiple options.
- **Navigation**: Seamlessly navigate between questions, with a finish option at the end.
- **Results Page**: Displays score, percentage, and detailed information about correct and incorrect answers.
- **Gamified Experience**: The app includes a score-based system with motivational messages based on user performance.

## Tech Stack
- **Frontend**:
  - React.js (for building the user interface)
  - React Router (for navigation between pages)
  - React Icons (for adding icons)
  - Tailwind CSS (for styling)

- **Backend**:
  - Node.js (server-side environment)
  - Express.js (for API routing)
  -

- **Hosting**:
  - Frontend:  Vercel
  - Backend: Render

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/quiz-app.git
cd quiz-app
```

### 2. Install dependencies
First, install the frontend dependencies:
```bash
cd quiz-app
npm install
```

Then, install the backend dependencies:
```bash
cd server
npm install
```



### 3. Run the app locally

#### Frontend
To run the frontend:
```bash
npm run dev
```
This will start the React development server on `http://localhost:3000`.

#### Backend
To run the backend:
```bash
cd server
npm start
```
This will start the Node.js server on `http://localhost:5000`.

Now, you can open `http://localhost:3000` in your browser to use the app.

## Usage

1. **Take a Quiz**: Upon opening the app, users can start a quiz, which will display questions one by one. They can select options and navigate through the questions.
2. **Timer**: Each question will have a countdown timer.
3. **View Results**: After completing the quiz, users will see their results, including a detailed analysis of their performance.


