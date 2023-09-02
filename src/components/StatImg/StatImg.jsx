import styles from "./statImg.module.css";
import "./carousal.css"
import Button from "../Button/Button";
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

function StatImg({ style, type, images, link }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageWidth = document.querySelector(".carousel-container").offsetWidth;
    const tl = gsap.timeline();

    tl.to(".carousel", {
      x: -imageWidth * currentImageIndex,
      duration: 0.5,
      ease: 'power3.inOut',
    });

    return () => {
      tl.kill();
    };
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const mouseEnter = () => {
      const tl = gsap.timeline();
  
      tl.to(".prev-button", {
        x: -10,
        duration: 0.5,
        ease: 'power3.inOut',
      }, "p");
      tl.to(".next-button", {
        x: 1,
        duration: 0.5,
        ease: 'power3.inOut',
      }, "p");
  
      return () => {
        tl.kill();
      };
  }
  const mouseLeave = () => {
    const tl = gsap.timeline();
  
    tl.to(".prev-button", {
      x: -90,
      duration: 1,
      ease: 'power3.inOut',
    }, "q");
    tl.to(".next-button", {
      x: 90,
      duration: 1,
      ease: 'power3.inOut',
    }, "q");

    return () => {
      tl.kill();
    };
  }


  return (
    <div className={styles.main}>
      <div className={style === "rev" ? styles.containerRev : styles.container}>
        <div className={style === "rev" ? styles.detailsRev : styles.details}>
          <div className={styles.sec2}>
            <p style={{ fontWeight: "700", marginBottom: "15px" }}>Bar Soaps</p>
            <p style={{ fontSize: "2em", marginBottom: "15px" }}>
              A body care classic, reimagined
            </p>
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
              Breathing new life into the humble bar soap are Nurture, Polish
              and Refresh—three additions to the range, each imparting a unique
              constellation of benefits. 
            </p>
            <Button title="Read More" style="sub"></Button>
          </div>
        </div>
        {type === "dyn" ? (
          <div className="cr-d">
          <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="carousel-container">
            <div className="carousel">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  className={`carousel-slide ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                />
              ))}
            </div>
            <button className="prev-button" onClick={prevImage}>
              {`<`}
            </button>
            <button className="next-button" onClick={nextImage}>
              {`>`}
            </button>
          </div>
          </div>
        ) : (
          <div className={style === "rev" ? styles.imgRev : styles.img}>
            <img
              className={styles.im2}
              src={link}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default StatImg;
