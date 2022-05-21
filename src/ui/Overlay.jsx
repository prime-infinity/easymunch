import { useSelector } from "react-redux";
import "animate.css";

function Overlay({ closeOverlay, width }) {
  const mMenu = useSelector((state) => state.menu.menu);

  return (
    <div
      className={`${
        mMenu
          ? "animate__animated animate__slideInLeft"
          : "animate__animated animate__slideOutLeft"
      } overlay`}
      style={{ width: width }}
      onClick={closeOverlay}
    ></div>
  );
}

export default Overlay;
