import React from "react";
import "css/scoreboard.css"
import footballimg from "img/football.jpg"
import team1logo from "img/manu_logo.png"
import team2logo from "img/norwich_logo.png"

function ScoreCard(props) {
  return (
    <div className="score">
      <div className="scoreDiv">
        <img
          src={footballimg}
          alt="banner"
          className="scoreBanner"
        />
        <div className="centered">{props.game}</div>
      </div>
      <div className="below">
        <div className="box">
          <div className="left">
            <div
              className="leftbox"
              style={{
                backgroundImage: `url(${team1logo})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            />
            <br />
            <label className="teamName">{props.team1}</label>
          </div>
          <div className="centerbox">
            <label className="teamName1">1 - 2</label>
          </div>
          <div className="right">
            <div
              className="rightbox"
              style={{
                backgroundImage: `url(${team2logo})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            />
            <br />
            <label className="teamName">{props.team2}</label>
          </div>
        </div>
        <div className="label1">
          <br />
          <i className="fa fa-futbol-o"></i>&nbsp;
          <label className="teamWin">{props.team1} Won This Match</label>
          <br />
          <br />
        </div>
        <div className="label2">
          <label className="titleC">Commentary</label>
          <div className="boxC">
            <label className="boxTime">08:30 AM</label>
            <label className="boxComment">
              Good morning! Thank you very much for joining Sports Mole for the
              182nd edition of the derby between Manchester United and
              Manchester City!
            </label>
          </div>
          <div className="boxC">
            <label className="boxTime">09:02 AM</label>
            <label className="boxComment">
              Both teams could be missing some key men for today's contest, with
              Harry Maguire reportedly missing from the United squad despite Ole
              Gunnar Solskjaer optimistic assessment of his fitness in his press
              conference, and Kevin De Bruyne facing a late fitness test for Man
              City.
            </label>
          </div>
          <div className="boxC">
            <label className="boxTime">09:20 AM</label>
            <label className="boxComment">
              "It's that help we get from the FA again – that extra 24 hours
              that they've had," Solskjaer told reporters. "I cannot believe why
              there's a derby on Sunday and we've got to play Thursday night.
              What's the point in that? That doesn't level the playing field.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;