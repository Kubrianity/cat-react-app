import React, { useState, useEffect } from "react"
import ShowCatDetail from "./ShowCatDetail"



function ShowCatList() {

  const [breedList, setList] = useState([])
  const [breedInfo, setInfo] = useState({
    img: "",
    description: "",
    temperament: "",
    lifeSpan: "",
    wikipedia_url: ""
  })

  const [isLoaded, setLoad] = useState(false)


  const url = 'https://api.thecatapi.com/v1/breeds';

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(url);
        const response = await data.json();
        setList(response)
      }
      catch (err) {
        console.log(err);
      }

    }
    getData()


  }, [])

  function handleChange(e) {
    const nevVal = e.target.value
    if (nevVal !== "defaultOption") {
      const breed_type = breedList.filter(breed => breed.name === nevVal)
      setInfo((preVal) => ({
        ...preVal,
        img:`https://cdn2.thecatapi.com/images/${breed_type[0].reference_image_id}.jpg`,
        description: breed_type[0].description,
        temperament: breed_type[0].temperament,
        lifeSpan: breed_type[0].life_span,
        wikipedia_url: breed_type[0].wikipedia_url,

      }),
        setLoad(true)

      )
    }
    else return ""

  }


  return (
    <>
      <main>

        <h1>Click On Me</h1>

        <div className="SearchBox">

          <select onChange={handleChange} className="SearchBox-input" defaultValue={'defaultOption'}>
            <option className="optionClass" value="defaultOption">select a cat breed</option>
            {breedList.map(breed =>
              <option className="optionClass"
                key={breed.id}
                value={breed.name}>
                {breed.name}
              </option>
            )}
          </select>

          <button type="button" className="SearchBox-button">
            <img className="SearchBox-button" alt="cat-icon" src={require("./assets/icon.png")} />
          </button>

        </div>
        {isLoaded ? <ShowCatDetail
          url={breedInfo.img}
          description={breedInfo.description}
          temperament={breedInfo.temperament}
          lifeSpan={breedInfo.lifeSpan}
          wikipedia_url={breedInfo.wikipedia_url} /> : ""}

        {!isLoaded ?
          <footer><a href="https://www.flaticon.com/free-icons/cat"
            title="cat icons"
            target="_blank"
            rel="noreferrer">
            The cat icon created by Flat Icons - Flaticon
          </a></footer> : null}
      </main>

    </>
  )
}


export default ShowCatList;

