import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import axios from 'axios';
import { Now_Playing_Movie, options } from '../utils/constant';
import { getNowPlayingMovies } from '../redux/movieSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';



const Browse = () => {
  const user = useSelector(store => store.app.user);
  const navigate = useNavigate();
  
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
  
  
useEffect(()=> {
  if(!user){
    navigate("/")
  }
},[]);
  
  return (
    <div>
     <Header />
     <div>
      <MainContainer />
      <MovieContainer />
     </div>
    </div>
  )
}

export default Browse
