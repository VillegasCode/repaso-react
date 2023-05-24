import React, {useState} from 'react'

export const PrimerComponente = () => {
  
    // let nombre = "Carlos Villegas";
    let web = "empresarioencasa.org";

    // Creamos un array
    let cursos = [
      "Master en Javascript",
      "Master en PHP",
      "Master en React",
      "Master en CSS"
    ];

    //Desestructurar una variable para cambiarle su estado con HOOK useState
    const [nombre, setNombre] = useState("Alex");

    //Creamos una función para cambiar nombre con el HOOK useState
    const cambiarNombre = (nuevoNombre) =>{
      setNombre(nuevoNombre);
    }
  
    return (
    <div>
        <h1>PRIMER COMPONENTE</h1>
        {/* Añadiendo un className a la variable para que cambie el color según su longitud */}
        <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong> </p>

        <input type='text' onChange={e => cambiarNombre(e.target.value)} placeholder='Escribe un nuevo nombre'></input>

        <button onClick={e => {
          console.log("El valor guardado en tu estado es: ", nombre);
        }}>Mostrar el valor del estado</button>

        <button onClick={ e => cambiarNombre("Evita Bonita")}>Cambiar Nombre</button>
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
