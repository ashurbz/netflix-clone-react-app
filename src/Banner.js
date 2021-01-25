import { PlayArrow } from '@material-ui/icons'
import React from 'react';
import "./Banner.css";
import AddIcon from "@material-ui/icons/Add";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function Banner() {
    return (
        <div className="banner">
            <img src="https://wallpapercave.com/wp/l8TD7Mr.jpg" alt="" className="banner__image"/>
            <h3>NETFLIX <small>ORIGINAL</small></h3>
            <h1>LOST IN SPACE</h1>
            <div className="button__div">
                <div className="button1">
                    <PlayArrowIcon style={{fontSize:10}}></PlayArrowIcon>
                </div>
                <div className="button2">
                    <AddIcon style={{fontSize:10}}></AddIcon>
                </div>

            </div>
            <div className="intro__container">
                <p className="intro">

Lost in Space is an American science fiction television series and is a reimagining of the 1965 series of the same name (itself a reimagining of the 1812 novel The Swiss Family Robinson), following the adventures of a family of space colonists whose spaceship veers off course.
                </p>
            </div>
        </div>
    )
}

export default Banner
