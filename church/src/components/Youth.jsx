import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import images1 from "./Pictures/bibleStudy2.jpg"
import images2 from "./Pictures/youthcamp.jpg"
import images3 from "./Pictures/Worship.jpg"
import images4 from "./Pictures/sports.jpg"
import '../App.css' 




function Youth() {
  return (
    <div className="youth-container">
      <div className="youth-header">
      <div className="text">
        <h1> Lkhc Youth </h1>
        <div className='sub-text'>
        <h2>Purpose</h2>
        <h3> Driven </h3>
        <h4>Community</h4>
        </div>
     </div>
      </div>
      <div className="youth-content">
        <div className="youth-event">
          <img src= {images1} alt="event 1" />
          <h3>Growth</h3>
          <p>At Lkhc Youth, we are committed to growing in Christlikeness. 
            We believe that becoming more like Jesus is a lifelong journey
            that requires intentional effort and a reliance on God's grace. 
            We strive to create an environment where young people can learn,
            ask questions, and be challenged in their faith.</p>
        </div>
        <div className="youth-event">
          <img src= {images2} alt="event 1" />
          <h3>Growth</h3>
          <p>At Lkhc Youth, we are committed to growing in Christlikeness. 
            We believe that becoming more like Jesus is a lifelong journey
            that requires intentional effort and a reliance on God's grace. 
            We strive to create an environment where young people can learn,
            ask questions, and be challenged in their faith.</p>
        </div>
        <div className="youth-team">
          <img src= {images3} alt="team 1" />
          <h3>Team 1</h3>
          <p>At Lkhc Youth, we are committed to growing in Christlikeness. 
            We believe that becoming more like Jesus is a lifelong journey
            that requires intentional effort and a reliance on God's grace. 
            We strive to create an environment where young people can learn,
            ask questions, and be challenged in their faith.</p>
        </div>
        <div className="youth-team">
          <img src= {images4} alt="team 2" />
          <h3>Team 2</h3>
          <p>At Lkhc Youth, we are committed to growing in Christlikeness. 
            We believe that becoming more like Jesus is a lifelong journey
            that requires intentional effort and a reliance on God's grace. 
            We strive to create an environment where young people can learn,
            ask questions, and be challenged in their faith.</p>
        </div>
      </div>
    </div>
  );
}



export default Youth
