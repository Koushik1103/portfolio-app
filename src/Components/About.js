import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__left">
        <div className="koushik__picture">
          <img
            className="meonahill"
            src="https://drive.google.com/thumbnail?id=1-dbbFkrtJqJnwZno13NahzFXd6sueJmB&sz=w500"
            alt="Cannot load"
          />
        </div>
      </div>

      <div className="about__right">
        <div className="about__text">ABOUT</div>

        <div className="line__div">
          <hr className="line" />
        </div>

        <div className="about__paragraph">
          <p>
            Hey, I'm Koushik, just a computer science and engineering student
            cruising through the wild ride of the third year in a four-year
            journey. 🚀 I'm your go-to backend developer, turning code into
            magic. When I'm not geeking out over lines of code, you'll catch me
            in the virtual worlds of Resident Evil and Call of Duty – absolute
            classics, right? I also kick back with some badminton to keep things
            interesting.
          </p>
          <p>
            Beyond that, I'm a total tech junkie. I can spend hours glued to
            gadget reviews, always chasing the latest and coolest tech trends.
            Originally from the lively city of Chennai in Tamil Nadu, India,
            I've been a local forever. 🌆
          </p>
          <p>
            If you're into games, tech, or just up for a chat, hit me up! Links
            are on the side – let's connect and swap stories about the digital
            and real-world adventures. 👾✨
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
