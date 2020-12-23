import React, { useEffect, useState } from "react";

const ElementoLista = (props) => {
  const { tech, year, author, license, language, type, logo } = props.tech;

  const [favourite, setFavourite] = useState(false);

  let pair 
  console.log(props.index)
  if(props.index % 2 === 0){
      pair = true;
  } else {
      pair = false
  };

  useEffect(() => {
    let auxStorage = localStorage.getItem("favourites")
    auxStorage = auxStorage.filter((tecnologias) => {
      return tecnologias === tech
    })
    if(auxStorage){
      setFavourite(true)
    }
    console.log(favourite)
  },[])

  const switchFavourites = (name) => {
    let auxStorage = localStorage.getItem("favourites");
    if(auxStorage.includes(name)) {
      auxStorage = auxStorage.filter((tecnologias) => {
        return tecnologias !== name
      })
      localStorage.setItem("favourites")
    }
  }

  console.log(pair)
  return (
    <tr>
      <div className={ pair ? "tableElement" : "tableElement grey"}>
        <th>{tech}</th>
        <th>{year}</th>
        <th>{author}</th>
        <th>{license}</th>
        <th>{language}</th>
        <th></th>
        <th>{type}</th>
        <th>
          <img src={logo} className="image" />
        </th>
      </div>
    </tr>
  );
}

export default ElementoLista;
