import React, { useState } from "react";
import styles from "./button.module.css";
import Arrow from "../../assets/icons/arrow.svg";
import Arrow2 from "../../assets/icons/arrow2.svg";

function Button({ title, style }) {
  const [mouse, setMouse] = useState(false);
  const handleMouse = () => {
    setMouse(true);
  };
  const handleLeave = () => {
    setMouse(false);
  };
  return (
    <div
      onMouseEnter={handleMouse}
      onMouseLeave={handleLeave}
      className={style === "add" ? styles.btn : styles.btn2}
    >
      <div>{title}</div>
      <div style={{ marginRight: "1em", marginTop: "0.2em", zIndex: "1" }}>
        {style === "add" ? (
          !mouse ? (
            <img
              style={{ width: "15px", height: "15px", rotate: "180deg" }}
              src={Arrow}
            />
          ) : (
            <img
              style={{ width: "15px", height: "15px", rotate: "180deg" }}
              src={Arrow2}
            />
          )
        ) : mouse ? (
          <img
            style={{ width: "15px", height: "15px", rotate: "180deg" }}
            src={Arrow}
          />
        ) : (
          <img
            style={{ width: "15px", height: "15px", rotate: "180deg" }}
            src={Arrow2}
          />
        )}
      </div>
    </div>
  );
}

export default Button;
