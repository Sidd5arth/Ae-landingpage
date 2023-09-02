import React from "react";
import styles from "./home.module.css";
import Button from "../Button/Button";

function Home() {
  return (
    <div className={styles.home}>
      <img src="https://www.aesop.com/u1nb1km7t5q7/AGQGWYrTapcQI1NrPvsYU/11e99769c1767531dd3c12b6fce85f37/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg" />
      <div className={styles.details}>
        <div className={styles.sec2}>
          <p style={{fontWeight:"700", marginBottom:"15px"}}>Bar Soaps</p>
          <p style={{fontSize:"2em", marginBottom:"15px"}}>A body care classic, reimagined</p>
        </div>
        <div className={styles.sec2}>
          <p style={{fontSize:"1em", fontWeight:"600", lineHeight: "1.7em", marginBottom:"30px"}}>
            Breathing new life into the humble bar soap are Nurture, Polish and
            Refresh—three additions to the range, each imparting a unique
            constellation of benefits. 
          </p>
          <Button title="Discover Bar Soaps" style="add"></Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
