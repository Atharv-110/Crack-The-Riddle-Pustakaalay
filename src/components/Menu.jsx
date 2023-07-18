import { useNavigate } from "react-router-dom";

// image imports
import menuHeading from "../assets/menu-heading.png";
import playBtn from "../assets/play-btn.svg";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menu">
      <div className="menu-heading">
        <img src={menuHeading} alt="menu-heading" />
      </div>
      <button onClick={() => navigate("/instruction")} className="menu-btn">
        <img src={playBtn} alt="play-button" />
      </button>
    </div>
  );
}