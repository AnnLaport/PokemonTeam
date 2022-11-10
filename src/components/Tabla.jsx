import React,{useState} from 'react'

function Tabla() {

  const[onepokemon,setPokemon]=useState([]);
  const[search, setSearch]=useState('');
  const[tiposp,setTipos]=useState([]);
  
  const pokemon = async () =>{
    const data= await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    let res=0;
    if(data.status===200){
        res= await data.json();
        setPokemon(res);
        setTipos(res.types);
        res.types.map(tipo=>console.log(tipo.type.name));
    }else{
        setPokemon(null);
        res='no existe esa url';
    }
    
    console.log(res);
  } 

  return (
    <div className="col-12 col-md-6">
        <h2>Create your team, maximum 6 pokemon!</h2>
        <br />
        <h4>Insert the number or name of the pokemon:</h4>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} />
        <button className="btn btn-success m-2" onClick={pokemon}>Catch it!</button>
        <table className="table">
          <thead>
            <tr>
              <th>id_pokemon</th>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Add accord to gender</th>
            </tr>
          </thead>
          <tbody>
                {
                  onepokemon === null ?
                  <tr>
                    <td>no has proporcionado el nombre de algún pokemon</td>
                  </tr>
                  :
                  <tr>
                    <td>{onepokemon.id}</td>
                    <td>{onepokemon.name}</td>
                    <td>
                      <ul>
                      {
                        tiposp.map((tipo,index)=><li key={index}>{tipo.type.name}</li>)
                      }
                      </ul>
                    </td>
                    <td>
                      <button className="btn btn-info m-1">Male</button>
                      <button className="btn btn-info m-1">Female</button>
                    </td>
                  </tr>
                }
          </tbody>
        </table>
    </div>
  )
}

export default Tabla