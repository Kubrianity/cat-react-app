import React from "react"


function ShowCatDetail(props) {
   return (
      <div className="cat-div">
         <p>{props.description}</p>
         <a href={props.wikipedia_url} target="_blank" rel="noreferrer"><img className="cat-img" src={props.url} alt="cat_pic"></img></a>
         <p>Temperament : {props.temperament}</p>
         <p>Life span : {props.lifeSpan} years</p>
      </div>
   )
}

export default ShowCatDetail;