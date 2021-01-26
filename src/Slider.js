import React, { useState,useEffect } from 'react';
import './Slider.css';
import Card from './Card'
import Carousel from 'react-elastic-carousel'
import Details from './Details'
import { hydrate } from 'react-dom';

const movies =[
    {
      id:1,
      image: 'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
      imageBg: 'https://laffaz.com/wp-content/uploads/2018/07/Sacred-Games-Review.jpg',
      title: 'Sacred Games',
      VideoID:'RWpuZXhCEkQ'
    },
    {
      id:2,
      image: 'https://i.pinimg.com/originals/35/1a/27/351a270916a48aaeb6df21b86200eca3.jpg',
      imageBg: 'https://netflixlife.com/files/2016/05/Bloodline-Danny.jpg',
      title: 'Blood Line',
      VideoID:'p_PJbmrX4uk'
    },
    {
      id:3,
      image: 'https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/guilty-netflix-202003-1585047524.jpg',
      imageBg: 'https://images.jansatta.com/2020/03/Guilty-620x400.jpg',
      title: 'Guilty',
      VideoID:'A6sQ85MrpOPI'
    },
    {
      id:4,
      image: 'https://pbs.twimg.com/media/D-itLBEU4AAJUMk.jpg',
      imageBg: 'https://i.ytimg.com/vi/0f2ioNMngzk/sddefault.jpg',
      title: 'Typewriter',
      VideoID:'vvtUbYentSQ'
    },
    {
      id:5,
      image: 'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
      imageBg: 'https://laffaz.com/wp-content/uploads/2018/07/Sacred-Games-Review.jpg',
      title: 'Sacred Games',
      VideoID:'RWpuZXhCEkQ'
    },
    {
      id:6,
      image: 'https://m.media-amazon.com/images/M/MV5BOTUzMTMzNTgtNmI5NS00ZTI1LTgzMjYtZTFkZWZkYTE0MWMyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
      imageBg: 'https://occ-0-999-448.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYeZnH-Vqh8TOUjZvzsQyZgMPzHtwQ1hcjuq3eHv0zrUqMxoEs_WXZa_r-X2h70zElUMPpf46dW-v-QEyOV2JFLjANau.jpg',
      title: 'Mismatched',
      VideoID:'jNuKwlKJx2E'
    },
    {
      id:7,
      image: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2018/03/font-psychology-6.png',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Sacred Games',
      VideoID:'AkUgf2jIPyI'
    },
    {
      id:8,
      image: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2018/03/font-psychology-24.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Sacred Games',
      VideoID:'AkUgf2jIPyI'
    },
    {
      id:9,
      image: 'https://pbs.twimg.com/media/ETUotsfVAAIihsZ.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Sacred Games',
      VideoID:'AkUgf2jIPyI'
    },
    {
      id:10,
      image: 'https://cdna.artstation.com/p/assets/images/images/026/167/692/large/nakul-anand-mrsserial-killer-poster.jpg',
      imageBg: 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/stranger-things-21.jpg',
      title: 'Sacred Games',
      VideoID:'AkUgf2jIPyI'
    },
  ]

  

function Slider() {
    const breakPoints=[
        {width:1,itemsToShow:1},
        {width:500,itemsToShow:2},
        {width:768,itemsToShow:3},
        {width:1200,itemsToShow:4},
    ]

    const[button,setbutton] = useState(false);
  const [State,setState] = useState(-1)


 
  const handleClick = (i,event)=>{
    
     
      // to change the state of buttona
      if(State===i){
      setbutton(false);
      setState(-1)}
      else{
        setbutton(true);
        setState(i);
      }

  }

  const hey =()=>{

  }

  const movieID = State;
  const movieClicks =  // storing the current array from movies into movieCLicks
    movies[movieID?movieID:0]
  


    return (
        <div className="slider">
            <Carousel breakPoints={breakPoints}>
                {movies.map((movie,i)=>
                    <span key={i}>
                        <button className="button3" onClick={()=>handleClick(i)}><Card movie={movie} title = {movie.title} image = {movie.image}></Card></button>
                    </span>
                )}
            </Carousel>

            {button && 
                <span >
                    <Details title={movieClicks.title} image={movieClicks.imageBg} videoID={movieClicks.VideoID}>Item1</Details>
                </span>
            }
        </div>
    )
}

export default Slider
