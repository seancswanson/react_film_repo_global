
import React, { Component } from 'react';
import './App.css';
import FilmList from "./FilmList.js";
import FilmDetails from "./FilmDetails.js";
import TMDB from "./TMDB.js";



class App extends Component {

   constructor(props) {
      super(props);
      this.state = {

        // Sets movieData to empty object to contain the API response
         movieData: {}
      }
   }

   handleClick = (data) => {

    // API url pulls the id from selected movie out of TMDB
      const url = `https://api.themoviedb.org/3/movie/${data}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
      console.log(data);
      fetch(url).then(response => {
        response.json().then(data => {
          //console.log(data) // take a look at what you get back!
          this.setState({ movieData: data});
       });
     });
   }

  render() {
    return (
      <div className="App">
         <div className="film-library" >
              {/* Passes in the film array from TMDB, and sets up list items to recognize handleClick function*/}
            <FilmList allFilms={TMDB.films} clickCallback={this.handleClick}/>

              {/* Passes response gathered from handleClick function to the details divs*/}
            <FilmDetails movie={this.state.movieData}/>


         </div>
      </div>
    );
  }
}

export default App;