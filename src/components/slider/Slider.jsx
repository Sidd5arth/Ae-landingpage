import React from "react";
import styles from "./slider.module.css";
import Arrow2 from "../../assets/icons/arrow2.svg";

const Slider = ({ list, title, about, desc, btntext }) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.sec2}>
            <p style={{ fontWeight: "700", marginBottom: "15px" }}>{title}</p>
            <p style={{ fontSize: "2em", marginBottom: "15px" }}>{about}</p>
          </div>
          <div className={styles.sec2}>
            <p
              style={{
                fontSize: "1em",
                fontWeight: "600",
                lineHeight: "1.7em",
                marginBottom: "30px",
              }}
            >
              {desc}
            </p>
            <div className={styles.btn2}>
              <div>{title}</div>
              <div
                style={{ marginRight: "1em", marginTop: "0.2em", zIndex: "1" }}
              >
                <img
                  style={{ width: "15px", height: "15px", rotate: "180deg" }}
                  src={Arrow2}
                />
              </div>
            </div>
          </div>
        </div>
        {list.map((mp) => (
          <div className={styles.details}>
            <img className={styles.imgSize} src={mp.url} />
            <div className={styles.text}>
              <h4>{mp.title}</h4>
              <p style={{ fontSize: "0.9em" }}>{mp.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
