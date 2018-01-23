import React from "react";

const FilmDetails = (props) =>{

   var details = (
      <div className="film-detail">
         <p>
            <i className="material-icons">subscriptions</i>
            <span>No film selected</span>
         </p>
      </div>
   )

   if(props && props.movie && props.movie.id) {

      const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.movie.backdrop_path}`
      const posterUrl = `https://image.tmdb.org/t/p/w780/${props.movie.poster_path}`

      details = (
        // Renders information for the film that is clicked
         <div className="film-detail is-hydrated">
           <figure className="film-backdrop">
             <img src={backdropUrl} alt="" />
             <h1 className="film-title">{props.movie.title}</h1>
             <h2 className="film-subtitle">Released: {props.movie.release_date}</h2> 
           </figure>

           <div className="film-meta">
             <h2 className="film-tagline">{props.movie.tagline}</h2>
             <p className="film-detail-overview">
               <img src={posterUrl} className="film-detail-poster" alt={props.movie.title} />
               {props.movie.overview}
             </p>
           </div>
         </div>
      )
   }

   return (

      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
         {details}
      </div>

   );

}

export default FilmDetails;