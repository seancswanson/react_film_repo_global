import React from "react";

// Creates const for beginning of poster image path
const URLPREFIX = "https://image.tmdb.org/t/p/w780";

const FilmRow = (props) => {
   // console.log(props);
   return (
    // Creates event listener for whole div to activate the callback that is bound to the values gathered from the clicked div
      <div className="film-row" id={props.item.id} onClick={props.clickCallback.bind(this, props.item.id)}>
      {/* Creates poster */} 
          <img className="film-poster" src={URLPREFIX+props.item.poster_path} alt={props.item.title}/>
          <div className="film-summary"><h1>{props.item.title}</h1>
          <h3>{props.item.release_date}</h3></div>
      </div>
   )
}


const FilmList = (props) => {

   return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {props.allFilms.map( film=>(
          <FilmRow item={film} key={film.id} clickCallback={props.clickCallback}/>
       )
      )}
     </div>
  )
}


export default FilmList;