import { useNavigate } from "react-router-dom";

// images import
import instructionHeading from "../assets/how-to-play.png";
import startBtn from "../assets/done.svg";
import bullet from "../assets/bullet.svg";

export default function Instruction() {
  const navigate = useNavigate();
  return (
    <div className="instruction">
      <div className="instruction-box">
        <img
          className="instruction-title"
          src={instructionHeading}
          alt="how-to-play-img"
        />
        <div className="instruction-text">
          <div className="instruction-text-item">
            <img src={bullet} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              repudiandae est sed non omnis ducimus.
            </p>
          </div>
          <div className="instruction-text-item">
            <img src={bullet} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              repudiandae est sed non omnis ducimus.
            </p>
          </div>
          <div className="instruction-text-item">
            <img src={bullet} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              repudiandae est sed non omnis ducimus.
            </p>
          </div>
        </div>

        <button onClick={() => navigate("/level")} className="instruction-btn">
          <img src={startBtn} alt="start-svg" />
        </button>
      </div>
    </div>
  );
}