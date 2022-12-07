import React,{useState,useEffect} from 'react'
import axios from 'axios';
import tablatipos from '../tabladetipos'

function Stadistics() {

    const[userpokemon, setUserpokemon]=useState([]);
    const[caracteristicasp,setCaracts]=useState([tablatipos]); 
    const[mostrepeatedtype, setMostrt]= useState('');

    const electricStyle= {
      backgroundColor:'#f9e79f'
    }

    const dragonStyle= {
      backgroundColor: '#2471a3'
    }

    const darkStyle= {
      backgroundColor: '#424949',
      color: '#ecf0f1'
    }

    const steelStyle= {
      backgroundColor: '#d6dbdf'
    }

    const flyingStyle= {
      backgroundColor: '#d4e6f1'
    }

    const waterStyle= {
      backgroundColor: '#aed6f1'
    }

    const iceStyle= {
      backgroundColor: '#f7f9f9',
      color: '#48c9b0'
    }

    const grassStyle= {
      backgroundColor: '#abebc6'
    }

    const bugStyle= {
      backgroundColor: '#a9dfbf'
    }

    const rockStyle= {
      backgroundColor: '#a04000'
    }

    const groundStyle= {
      backgroundColor: '#edbb99'
    }

    const fireStyle= {
      backgroundColor: '#f5b7b1'
    }

    const fightingStyle= {
      backgroundColor: '#F08080',
      color: '#ecf0f1'
    }

    const fairyStyle= {
      backgroundColor: '#fcdbfb'
    }

    const normalStyle= {
      backgroundColor: '#e5e8e8'
    }

    const psychicStyle= {
      backgroundColor: '#ecf0f1',
      color: '#F08080'
    }

    const poisonStyle= {
      backgroundColor: '#d7bde2'
    }

    const ghostStyle= {
      backgroundColor: '#808b96'
    }

    const genericStyle= {
      backgroundColor: '#d6eaf8'
    }

    


    useEffect(()=>{
        const bringPokemonuser=async()=>{

            try {
                const id_user=(JSON.parse(localStorage.getItem("userInfo")))._id;
                const {data}= await axios.get(`http://localhost:9000/api/pokemon/${id_user}`)
                setUserpokemon(data);
                let arraytipos=[];
    
                data.map(pokemon=>pokemon.typesPokemon.map(tipo=>arraytipos.push(tipo)))
                let variable = 0;
                let contador = 0;
                let cuenta = 0;
                arraytipos.map(p => {
                      cuenta = 0
                      arraytipos.map(x => {
                            if (p === x) { cuenta++ }
                             })
                            if (cuenta > contador) {
                                  contador = cuenta;
                                  variable = p;
                            }
                      });
                setMostrt({tipo: variable, veces: contador})
            } catch (error) {
                console.log(error)
            }
        }
        bringPokemonuser();
        //console.log(tablatipos);
    },[])


  return (
    <div className='row'>
      <h3>Your team is mostly {mostrepeatedtype.tipo} in {(mostrepeatedtype.veces/6).toFixed(2)*100}%</h3>
      <div className="d-flex flex-wrap justify-content-center">
      {
        userpokemon.length>0 ?
        userpokemon.map((pokemon,index)=>(
            <div className="card col12 col-md-3" 
                 key={index}
                 style={pokemon.typesPokemon[0]==='electric' ? electricStyle 
                 : pokemon.typesPokemon[0]==='dragon' ? dragonStyle 
                 : pokemon.typesPokemon[0]==='dark' ? darkStyle
                 : pokemon.typesPokemon[0]==='steel' ? steelStyle
                 : pokemon.typesPokemon[0]==='flying' ? flyingStyle
                 : pokemon.typesPokemon[0]==='water' ? waterStyle
                 : pokemon.typesPokemon[0]==='ice' ? iceStyle
                 : pokemon.typesPokemon[0]==='grass' ? grassStyle
                 : pokemon.typesPokemon[0]==='bug' ? bugStyle
                 : pokemon.typesPokemon[0]==='ground' ? groundStyle
                 : pokemon.typesPokemon[0]==='rock' ? rockStyle
                 : pokemon.typesPokemon[0]==='normal' ? normalStyle
                 : pokemon.typesPokemon[0]==='fire' ? fireStyle
                 : pokemon.typesPokemon[0]==='fighting' ? fightingStyle
                 : pokemon.typesPokemon[0]==='fairy' ? fairyStyle
                 : pokemon.typesPokemon[0]==='psychic' ? psychicStyle
                 : pokemon.typesPokemon[0]==='poison' ? poisonStyle
                 : pokemon.typesPokemon[0]==='ghost' ? ghostStyle
                 : genericStyle}>
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {
                        pokemon.typesPokemon.map(tipo=>('-'+tipo))
                      }
                    </h6>
                    <p className="card-text">{pokemon.gender}</p>

                    <h6>Strengths:  
                      {
                        pokemon.typesPokemon.map(tipo=>(
                          tipo==='fairy'? caracteristicasp[0].fairy[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='psychic'? caracteristicasp[0].psychic[0].Strengths.map(strength=>'-'+strength) 
                        : tipo==='steel'? caracteristicasp[0].steel[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='flying'? caracteristicasp[0].flying[0].Strengths.map(strength=>'-'+strength)  
                        : tipo==='water'? caracteristicasp[0].water[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='ice'? caracteristicasp[0].ice[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='grass'? caracteristicasp[0].grass[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='bug'? caracteristicasp[0].bug[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='electric'? caracteristicasp[0].electric[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='normal'? caracteristicasp[0].normal[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='rock'? caracteristicasp[0].rock[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='ground'? caracteristicasp[0].ground[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='fire'? caracteristicasp[0].fire[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='fighting'? caracteristicasp[0].fighting[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='poison'? caracteristicasp[0].poison[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='dragon'? caracteristicasp[0].dragon[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='ghost'? caracteristicasp[0].ghost[0].Strengths.map(strength=>'-'+strength)
                        : tipo==='dark'? caracteristicasp[0].dark[0].Strengths.map(strength=>'-'+strength)
                        : ''
                        ))
                      }
                      </h6>
                    <h6>Weaknesses:
                    {
                        pokemon.typesPokemon.map(tipo=>(
                          tipo==='fairy'? caracteristicasp[0].fairy[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='psychic'? caracteristicasp[0].psychic[0].Weaknesses.map(strength=>'-'+strength) 
                        : tipo==='steel'? caracteristicasp[0].steel[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='flying'? caracteristicasp[0].flying[0].Weaknesses.map(strength=>'-'+strength)  
                        : tipo==='water'? caracteristicasp[0].water[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='ice'? caracteristicasp[0].ice[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='grass'? caracteristicasp[0].grass[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='bug'? caracteristicasp[0].bug[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='electric'? caracteristicasp[0].electric[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='normal'? caracteristicasp[0].normal[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='rock'? caracteristicasp[0].rock[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='ground'? caracteristicasp[0].ground[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='fire'? caracteristicasp[0].fire[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='fighting'? caracteristicasp[0].fighting[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='poison'? caracteristicasp[0].poison[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='dragon'? caracteristicasp[0].dragon[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='ghost'? caracteristicasp[0].ghost[0].Weaknesses.map(strength=>'-'+strength)
                        : tipo==='dark'? caracteristicasp[0].dark[0].Weaknesses.map(strength=>'-'+strength)
                        : ''
                        ))
                      }
                    </h6>
                    <h6>No efective:
                    {
                        pokemon.typesPokemon.map(tipo=>(
                          tipo==='fairy'? caracteristicasp[0].fairy[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='psychic'? caracteristicasp[0].psychic[0].No_effective.map(strength=>'-'+strength) 
                        : tipo==='steel'? caracteristicasp[0].steel[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='flying'? caracteristicasp[0].flying[0].No_effective.map(strength=>'-'+strength)  
                        : tipo==='water'? caracteristicasp[0].water[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='ice'? caracteristicasp[0].ice[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='grass'? caracteristicasp[0].grass[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='bug'? caracteristicasp[0].bug[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='electric'? caracteristicasp[0].electric[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='normal'? caracteristicasp[0].normal[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='rock'? caracteristicasp[0].rock[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='ground'? caracteristicasp[0].ground[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='fire'? caracteristicasp[0].fire[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='fighting'? caracteristicasp[0].fighting[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='poison'? caracteristicasp[0].poison[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='dragon'? caracteristicasp[0].dragon[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='ghost'? caracteristicasp[0].ghost[0].No_effective.map(strength=>'-'+strength)
                        : tipo==='dark'? caracteristicasp[0].dark[0].No_effective.map(strength=>'-'+strength)
                        : ''
                        ))
                      }
                    </h6>
                    <h6>Immune:
                    {
                        pokemon.typesPokemon.map(tipo=>(
                          tipo==='fairy'? caracteristicasp[0].fairy[0].Immune.map(strength=>'-'+strength)
                        : tipo==='psychic'? caracteristicasp[0].psychic[0].Immune.map(strength=>'-'+strength) 
                        : tipo==='steel'? caracteristicasp[0].steel[0].Immune.map(strength=>'-'+strength)
                        : tipo==='flying'? caracteristicasp[0].flying[0].Immune.map(strength=>'-'+strength)  
                        : tipo==='water'? caracteristicasp[0].water[0].Immune.map(strength=>'-'+strength)
                        : tipo==='ice'? caracteristicasp[0].ice[0].Immune.map(strength=>'-'+strength)
                        : tipo==='grass'? caracteristicasp[0].grass[0].Immune.map(strength=>'-'+strength)
                        : tipo==='bug'? caracteristicasp[0].bug[0].Immune.map(strength=>'-'+strength)
                        : tipo==='electric'? caracteristicasp[0].electric[0].Immune.map(strength=>'-'+strength)
                        : tipo==='normal'? caracteristicasp[0].normal[0].Immune.map(strength=>'-'+strength)
                        : tipo==='rock'? caracteristicasp[0].rock[0].Immune.map(strength=>'-'+strength)
                        : tipo==='ground'? caracteristicasp[0].ground[0].Immune.map(strength=>'-'+strength)
                        : tipo==='fire'? caracteristicasp[0].fire[0].Immune.map(strength=>'-'+strength)
                        : tipo==='fighting'? caracteristicasp[0].fighting[0].Immune.map(strength=>'-'+strength)
                        : tipo==='poison'? caracteristicasp[0].poison[0].Immune.map(strength=>'-'+strength)
                        : tipo==='dragon'? caracteristicasp[0].dragon[0].Immune.map(strength=>'-'+strength)
                        : tipo==='ghost'? caracteristicasp[0].ghost[0].Immune.map(strength=>'-'+strength)
                        : tipo==='dark'? caracteristicasp[0].dark[0].Immune.map(strength=>'-'+strength)
                        : ''
                        ))
                      }
                    </h6>
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