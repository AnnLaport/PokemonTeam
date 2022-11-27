import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Stadistics() {

    const[userpokemon, setUserpokemon]=useState([]);

    useEffect(()=>{
        const bringPokemonuser=async()=>{

            try {
                const id_user=(JSON.parse(localStorage.getItem("userInfo")))._id;
                const {data}= await axios.get(`http://localhost:9000/api/pokemon/${id_user}`)
                setUserpokemon(data);
            } catch (error) {
                console.log(error)
            }
        }
        bringPokemonuser();
    },[])


  return (
    <div className='row'>
      <h3>Your team is mostly "Type"</h3>
      <div className="d-flex flex-wrap justify-content-center">
      {
        userpokemon.length>0 ?
        userpokemon.map((pokemon,index)=>(
            <div className="card col12 col-md-3" key={index}>
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">{pokemon.gender}</p>
                </div>
            </div>
        ))
        :
        <h3>You dont have pokemon on your team yet!</h3>
      }
      </div>
    </div>
  );
}

export default Stadistics