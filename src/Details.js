import React from 'react'
import './Details.css';

function Details() {
    return (
        <div className="details">
            <div className="details__background">
                <div className="details__background__shadow">
                    <img className="details__background__image" src="https://wallpapercave.com/wp/wp4025675.png" alt=" "/>
                </div>
            </div>
            <div className="details__area">
                <div className="details__area__container">
                    <div className="details__title">Hey</div>
                    <div className="details__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar. Urna molestie at elementum eu facilisis. Egestas sed tempus urna et pharetra pharetra. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Diam phasellus vestibulum lorem sed risus ultricies tristique. Tincidunt dui ut ornare lectus. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Pharetra massa massa ultricies mi quis. Est ante in nibh mauris cursus.
                    </div>
                </div>

            </div>

            <button className="trailerButton">Trailer</button>
        </div>
    )
}

export default Details
