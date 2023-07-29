import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import images from "./Pictures/Pic1.jpg";
import image1 from "./Pictures/community.png";
import image2 from "./Pictures/cross.png";
import image3 from "./Pictures/mission.png";
import image4 from "./Pictures/scripture2.png";
import image5 from "./Pictures/youthcamp.jpg";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 3;
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div>
      <div className="Home">
        <div className="home-container">
          <h1
            style={{
              color: "white",
              textAlign: "Center",
            }}
          >
            WELCOME
          </h1>
          <button className="btn btn-primary">Get started</button>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="second-segment">
        <div className="section1">
          <div className="box1">
            <img src={image3} alt="" />
            <h1>Mission</h1>
            <p>
              Preaching the Gosple for all nations and making deciples for
              christ.
            </p>
          </div>

          <div className="box1">
            <img src={image2} alt="" />
            <h1>Christ</h1>
            <p>
              By the work of Jesus Christ on the cross we are saved through
              faith.
            </p>
          </div>
        </div>

        <div className="section2">
          <div className="aboutus">
            <h2>About</h2>
            <h1>Our Church</h1>
            <p>
              {" "}
              By the work of Jesus Christ on the cross we are saved through
              faith. By the work of Jesus Christ on the cross we are saved
              through faith. By the work of Jesus Christ on the cross we are
              saved through faith.
            </p>
          </div>
        </div>

        <div className="section3">
          <div className="box1">
            <img src={image1} alt="" />
            <h1>Community</h1>
            <p>Growing together in faith, love, and union.</p>
          </div>

          <div className="box1">
            <img src={image4} alt="" />
            <h1>Scripture</h1>
            <p>The foundation and </p>
          </div>
        </div>
      </div>

      <div className="slider">
        <ul>
          <li className={currentIndex === 0 ? "active" : ""}>
            <img className="images" src={images} alt="Image 1" />
            <h3>Image 1 Title</h3>
            <p>Image 1 Description</p>
          </li>
          <li className={currentIndex === 1 ? "active" : ""}>
            <img className="images" src={images} alt="Image 2" />
            <h3>Image 2 Title</h3>
            <p>Image 2 Description</p>
          </li>
          <li className={currentIndex === 2 ? "active" : ""}>
            <img className="images" src={images} alt="Image 3" />
            <h3>Image 3 Title</h3>
            <p>Image 3 Description</p>
          </li>
        </ul>
      </div>
      <h1>Up coming events</h1>
      <div className="events">
        <img src={image5} alt="Image" />
      </div>
    </div>
  );
}
export default Home;
