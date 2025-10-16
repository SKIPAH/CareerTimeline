import { useState } from "react";
import { Volume2, Trophy, Play } from "lucide-react";

import "/src/css/tailwind.css";

// Sample quiz data - replace with real Deadlock items/characters
const quizQuestions = [
  {
    id: 1,
    question: "Which character says this voice line?",
    audioUrl: "/sounds/char1.mp3",
    correctAnswer: "Infernus",
    options: ["Infernus", "Wraith", "Haze", "Lash"],
  },
  {
    id: 2,
    question: "What ability makes this sound effect?",
    audioUrl: "/sounds/ability1.mp3",
    correctAnswer: "Ground Strike",
    options: ["Ground Strike", "Flame Dash", "Shadow Step", "Power Surge"],
  },
];

export default function DeadlockQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true); // NEW STATE

  const question = quizQuestions[currentQuestion];

  const playSound = () => {
    setAudioPlaying(true);
    const audio = new Audio(question.audioUrl);
    audio.play().catch((err) => {
      console.log("Audio playback failed - add real audio files");
      setAudioPlaying(false);
    });
    audio.onended = () => setAudioPlaying(false);
  };

  const handleAnswer = (answer) => {
    if (showResult) return;

    setSelectedAnswer(answer);
    setShowResult(true);

    if (answer === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameOver(false);
    setShowWelcome(true); // Show welcome again on restart
  };

  // --- WELCOME PAGE ---
  if (showWelcome) {
    return (
      <div className="deadlock-quiz-container">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to Deadlock Quiz!
            </h1>
            <p className="text-lg text-purple-300 mb-8">
              Test your knowledge of Deadlock items, characters, and abilities.
              <br />
              Click the button below to start the quiz!
            </p>
            <button
              onClick={() => setShowWelcome(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="deadlock-quiz-container">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <Trophy className="w-24 h-24 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl font-bold text-white mb-4">Game Over!</h1>
            <p className="text-2xl text-purple-300 mb-8">
              Your Score: {score} / {quizQuestions.length}
            </p>
            <div className="text-lg text-slate-300 mb-8">
              {score === quizQuestions.length
                ? "Perfect! You're a Deadlock master! 🎉"
                : score >= quizQuestions.length / 2
                ? "Great job! Keep practicing! 💪"
                : "Keep playing to improve! 🎮"}
            </div>
            <button
              onClick={restartGame}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="deadlock-quiz-container">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-purple-300 font-semibold">
              Question {currentQuestion + 1}/{quizQuestions.length}
            </div>
            <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold">
              Score: {score}
            </div>
          </div>

          {/* Question */}
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {question.question}
          </h2>

          {/* Audio Player */}
          <div className="mb-8 flex justify-center">
            <button
              onClick={playSound}
              disabled={audioPlaying}
              className={`${
                audioPlaying
                  ? "bg-purple-700"
                  : "bg-purple-600 hover:bg-purple-700"
              } text-white p-6 rounded-full transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50`}
            >
              {audioPlaying ? (
                <Volume2 className="w-12 h-12 animate-pulse" />
              ) : (
                <Play className="w-12 h-12" />
              )}
            </button>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === question.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-lg font-semibold text-left transition-all transform hover:scale-102 active:scale-98 ${
                    showCorrect
                      ? "bg-green-600 text-white"
                      : showWrong
                      ? "bg-red-600 text-white"
                      : isSelected
                      ? "bg-purple-600 text-white"
                      : "bg-slate-700 text-white hover:bg-slate-600"
                  } disabled:cursor-not-allowed`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          {showResult && (
            <button
              onClick={nextQuestion}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              {currentQuestion < quizQuestions.length - 1
                ? "Next Question"
                : "See Results"}
            </button>
          )}

          {/* Result Feedback */}
          {showResult && (
            <div
              className={`mt-4 p-4 rounded-lg text-center font-semibold ${
                selectedAnswer === question.correctAnswer
                  ? "bg-green-900/50 text-green-300"
                  : "bg-red-900/50 text-red-300"
              }`}
            >
              {selectedAnswer === question.correctAnswer
                ? "✓ Correct!"
                : `✗ Wrong! Correct answer: ${question.correctAnswer}`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
