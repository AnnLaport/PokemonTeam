import React,{useState, useEffect} from 'react'

function Tabla() {

  const[onepokemon,setPokemon]=useState(null);
  const[search, setSearch]=useState('');
  const[tiposp,setTipos]=useState([]);
  const[datosuser, setDatosuser]= useState('');
  const[pokemonuser,setPokemonuser]=useState([]);
  const[numberpokemon,setNumberPokemon]=useState(0);

  const addMaleFemale=async(genderd)=>{
    
    const gender=genderd;
    const iduser= datosuser._id;
    const idpokemon= onepokemon.id;
    const namepokemon=onepokemon.name;

    const data= await fetch(`http://localhost:9000/api/addpokemon`,{
      method:'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(
        {
          "id":idpokemon,
          "name":namepokemon,
          "trainer":iduser,
          "gender":gender
       }
      )
    });
    if(data.status===200){
      //alert('Pokemon succesfully added!');
      bringUserpokemon(iduser);
    }else{
      alert('Error. Try later');
    }
  }

  const deletePokemon=async(idpokemon)=>{
    const data= await fetch(`http://localhost:9000/api/pokemon/${idpokemon}`,{
      method: 'DELETE'
    });
    if(data.status===200){
       await data.json();
       alert('pokemon deleted succesfully!')
       bringUserpokemon(datosuser._id)
    }else{
       alert('error, try later')
    }
  }

  const bringUserpokemon=async(id_user)=>{
    const data= await fetch(`http://localhost:9000/api/pokemon/${id_user}`);
      if(data.status===200){
         const res= await data.json();
         setNumberPokemon(res.length);
         setPokemonuser(res);
      }else{
         setPokemonuser(null);
      }
  }
  
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
  } 

  useEffect(()=>{
    const datosInicio=async()=>{
      setDatosuser(JSON.parse(localStorage.getItem("userInfo")));
      const id_user=(JSON.parse(localStorage.getItem("userInfo")))._id;
      bringUserpokemon(id_user);
    }
    datosInicio();
  },[]);

  return (
    <div className="row">
      <div className="col-12 col-md-6 border">
        <h3 className="border p-2" style={{backgroundColor: '#cff4fc'}}>Create your team, maximum 6 pokemon!</h3>
        <br />
        <div>
          <h5>Insert the number or name of the pokemon:</h5>
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          <button className="btn btn-success m-2" onClick={pokemon}>
              Catch it!
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>id_pokemon</th>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Add accord to gender</th>
            </tr>
          </thead>
          <tbody>
            {onepokemon === null ? (
              <tr>
                <td>no has proporcionado el nombre de algún pokemon</td>
              </tr>
            ) : (
              <tr>
                <td>{onepokemon.id}</td>
                <td>{onepokemon.name}</td>
                <td>
                  <ul>
                    {tiposp.map((tipo, index) => (
                      <li key={index}>{tipo.type.name}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <button className="btn btn-info m-1" 
                  disabled={numberpokemon>=6 ? true : false}
                  onClick={()=>addMaleFemale('male')}>Male</button>

                  <button className="btn btn-info m-1" 
                  disabled={numberpokemon>=6 ? true : false}
                  onClick={()=>addMaleFemale('female')}>Female</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="col-12 col-md-5">
        <table className="table table-info">
          <thead>
            <tr>
              <th>id_pokemon</th>
              <th>Nombre</th>
              <th>Gender</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {pokemonuser === null ? (
              <tr>
                <td>no has agregado pokemon</td>
              </tr>
            ) : (
              pokemonuser.map((pokemon,index)=>(
                <tr key={index}>
                  <td>{pokemon.id}</td>
                  <td>{pokemon.name}</td>
                  <td>{pokemon.gender}</td>
                  <td><button 
                  className="btn btn-danger"
                  onClick={()=>deletePokemon(pokemon._id)}>Delete</button></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {
          numberpokemon<6 ?
          <h4>You can add {6-numberpokemon} more</h4>
          :
          <h4>Your team is complete, check the stadistics!</h4>
        }
      </div>
    </div>
  );
}

export default Tabla