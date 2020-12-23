import React from "react";

export default function elementoLista(props) {
  const { tech, year, author, license, language, type, logo } = props.tech;
  let pair 
  console.log(props.index)
  if(props.index % 2 === 0){
      pair = true;
  } else {
      pair = false
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
        <th>{type}</th>
        <th>
          <img src={logo} className="image" />
        </th>
      </div>
    </tr>
  );
}
