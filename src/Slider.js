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
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Sacred Games',
      VideoID:'AkUgf2jIPyI'
    },
    {
      id:2,
      image: 'https://viralkekda.com/wp-content/uploads/2020/04/Money-Heist-Netflix-Spanish-Web-Series-Season-1-2-3-4-All-Episodes-in-English-Hindi-Watch-Online-Free-Download-Tamilrockers-DHub-Filmywap-Khatrimaza-780x405.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Money Heist',
      VideoID:'p_PJbmrX4uk'
    },
    {
      id:3,
      image: 'https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/guilty-netflix-202003-1585047524.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Guilty',
      VideoID:'A6sQ85MrpOPI'
    },
    {
      id:4,
      image: 'https://image.scoopwhoop.com/q30/s3.scoopwhoop.com/anj2/5cc43b0ad0aa38676aa9e25d/8fc9126d-a721-43c2-bafd-06fdda212200.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Unfortunate Events',
      VideoID:'vvtUbYentSQ'
    },
    {
      id:5,
      image: 'https://www.moviespie.com/wp-content/uploads/2020/11/mostlysane_123749592_2839118342999147_9192452111807481526_n.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Mismatched',
      VideoID:'uYmwNNkix-k'
    },
    {
      id:6,
      image: 'https://wirally.com/wp-content/uploads/2020/04/2-Top-Hindi-Web-Series-On-Netflix.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Delhi Crime',
      VideoID:'jNuKwlKJx2E'
    },
    {
      id:7,
      image: 'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Sacred Games',
      VideoID:'AkUgf2jIPyI'
    },
    {
      id:8,
      image: 'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Sacred Games',
      VideoID:'AkUgf2jIPyI'
    },
    {
      id:9,
      image: 'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Sacred Games',
      VideoID:'AkUgf2jIPyI'
    },
    {
      id:10,
      image: 'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
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
  const [State,setState] = useState()

useEffect(() => {
    setState(State)
    return () => {
    }
}, [State]) //whenever the satte of is changed i.e. whenever button is clickd we gonna update our state

  let arr = [];
  const handleClick = (i,event)=>{
      arr=[i];
      setState(i);
      // to change the state of button
      setbutton(!button);

  }

  const hey =()=>{

  }

  const movieID = State;
  const movieClicks =[   // storing the current array from movies into movieCLicks
    movies[movieID]
  ]


    return (
        <div className="slider">
            <Carousel breakPoints={breakPoints}>
                {movies.map((movie,i)=>
                    <span key={i}>
                        <button className="button3" onClick={hey(),handleClick.bind(this,i)}><Card movie={movie} title = {movie.title} image = {movie.image}></Card></button>
                    </span>
                )}
            </Carousel>

            {button && movieClicks.map((movieClick,i)=>
                <span key ={i}>
                    <Details title={movieClick.title} image={movieClick.imageBg}>Item1</Details>
                </span>
            )}
        </div>
    )
}

export default Slider
