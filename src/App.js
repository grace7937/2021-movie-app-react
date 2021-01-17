import React from "react";
import axios from "axios";
import Movie from "./Movie";
import './App.css';


function App() {
  state = {
    isLoading: true,
    movies: []
  };
    getMovies = async () => {
      const {
        data : {
          data : {movies}
        }
      } = await axios.get(
        'https://yts-proxy.nomadcoders1.now.sh/list_movies.json'
      );
      this.setState({movies, isLoading: false});
    };

    componentDidMount() {
      this.getMovies();
    }
    render () {
      const { isLoading} = this.state;
      return <div>{isLoading ? 'Loading...' :'We are ready'}</div>;
    }
  }
export default App;


// {siLoading ? (
//   <div className='loader'>
//     <span className='Loader__text'>Loading...</span>
//   </div>
// ) : (<div className='movies'>
//   {movies.map(movie => {
//     <Movie
//     key = {movie.id}
//     id = {movie.id}
//     year = {movie.year}
//     title = {movie.title}
//     summary = {movie.summary}
//     poster = {movie.mediym_cover_image}

//   })} </div>
// </section>