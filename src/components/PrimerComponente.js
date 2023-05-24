import React from 'react'

export const PrimerComponente = () => {
  
    let nombre = "Carlos Villegas";
    let web = "empresarioencasa.org";

    // Creamos un array
    let cursos = [
      "Master en Javascript",
      "Master en PHP",
      "Master en React",
      "Master en CSS"
    ];
  
    return (
    <div>
        <h1>PRIMER COMPONENTE</h1>
        <p>Mi nombre es: {nombre} </p>
        <p>Mi web es: {web} </p>
        <hr></hr>
        <h2>CURSOS:</h2>
        <ol>
          {
            cursos.map( (curso, indice) => {
              return (<li key={indice}>
                {
                  curso
                }
              </li>);
            })
          }
        </ol>
    </div>
  )
}
