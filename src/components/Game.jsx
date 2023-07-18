import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Swal from "sweetalert2";

// import data
import gameData from "../data/gameData";

// import Images
import pauseBtn from "../assets/pause-btn.svg";
import submitBtn from "../assets/submit-btn.svg";

// import array data

export default function Game() {
  const navigate = useNavigate();
  const [isPlaying, setPlaying] = useState(true);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const checkAnswer = () => {
    const correctAnswer = gameData[currentQuestion].answer;
    const answerIsCorrect =
      userAnswer.toLowerCase() === correctAnswer.toLowerCase();
    setIsAnswerCorrect(answerIsCorrect);
    if (answerIsCorrect) {
      // console.log("correct");
      setCorrectCount(correctCount + 1);
      console.log();
      setPlaying(false);
      Swal.fire({
        allowOutsideClick: false,
        icon: "success",
        title: "Right Answer",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        setPlaying(true);
      });
      setUserAnswer("");
      setIsAnswerCorrect(null);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // console.log("wrong");
      setPlaying(false);
      Swal.fire({
        allowOutsideClick: false,
        icon: "error",
        title: "Wrong",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        setPlaying(true);
      });
      setUserAnswer("");
      setIsAnswerCorrect(null);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (currentQuestion >= gameData.length) {
    navigate("/summary");
    return <div>Quiz completed!</div>;
  }

  const currentQuestionObj = gameData[currentQuestion];

  // Pause Function
  const handlePause = () => {
    console.log("Pause");
    setPlaying(false);
    Swal.fire({
      allowOutsideClick: false,
      title: "Game Paused",
      iconHtml:
        '<i class="fa-solid fa-pause fa-fade" style="color: #000000;"></i>',
      showCancelButton: true,
      cancelButtonText: "Quit",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Resume",
    }).then((result) => {
      if (result.isConfirmed) {
        setPlaying(true);
      } else {
        navigate("/");
      }
    });
  };

  // Complete Funtion
  const complete = () => {
    Swal.fire({
      title: "Time's Up!",
      iconHtml:
        '<i class="fa-solid fa-hourglass-end fa-shake" style="color: #000000;"></i>',
      showCancelButton: false,
      showConfirmButton: false,
      text: "Redirecting to summary page...",
      timer: 2000,
    }).then(() => {
      navigate("/summary");
    });
  };

  return (
    <div className="game">
      <div className="game-header">
        <button onClick={handlePause} className="game-pause-btn">
          <img src={pauseBtn} alt="pause-button-img" />
        </button>
        <div className="game-timer">
          <CountdownCircleTimer
            strokeLinecap={"round"}
            size={60}
            strokeWidth={5}
            isPlaying={isPlaying}
            duration={600000}
            trailColor="#fff"
            colors="#6C1FCE"
            onComplete={() => complete()}
          >
            {({ remainingTime }) => (
              <h1 className="game-timer-count">{remainingTime}</h1>
            )}
          </CountdownCircleTimer>
        </div>
      </div>
      <div className="game-main">
        <div className="game-main-card">
          <div className="game-main-upper">
            <h3 className="riddle-count">Riddle 1</h3>
            <h1 className="riddle-question">{currentQuestionObj.question}</h1>
          </div>
          <div className="game-main-lower">
            <div className="riddle-hint">
              <p>{currentQuestionObj.hint}</p>
            </div>
            <button className="hint-button"></button>
          </div>
        </div>
        <input
          className="game-input"
          type="text"
          value={userAnswer}
          onChange={handleAnswerChange}
          placeholder="Enter your answer"
        />
        <button className="game-submit-btn" onClick={checkAnswer}>
          <img src={submitBtn} alt="submit-button-img" />
        </button>
      </div>
    </div>
  );
}
