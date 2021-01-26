import React from 'react';
import './Slider.css';
import Carousel from 'react-elastic-carousel'

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
      image: 'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Sacred Games',
      VideoID:'AkUgf2jIPyI'
    },
    {
      id:3,
      image: 'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Sacred Games',
      VideoID:'AkUgf2jIPyI'
    },
    {
      id:4,
      image: 'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Sacred Games',
      VideoID:'AkUgf2jIPyI'
    },
    {
      id:5,
      image: 'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Sacred Games',
      VideoID:'AkUgf2jIPyI'
    },
    {
      id:6,
      image: 'https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
      imageBg: 'https://wallpapercave.com/wp/wp4025675.png',
      title: 'Sacred Games',
      VideoID:'AkUgf2jIPyI'
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

function slider() {
    return (
        <div className="slider">
            <Carousel>
                <Card/>
            </Carousel>
        </div>
    )
}

export default slider
