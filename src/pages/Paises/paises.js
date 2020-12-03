import React, { useState, useEffect } from 'react'
import axios from 'axios';

import './index.css'


const Paises = () => {

    const [paises, setPaises] = useState(null);

    useEffect(() => {
      async  function pegarDados(){
      const resposta = await axios.get(
          'https://restcountries.eu/rest/v2/all'
          );
        setPaises(resposta.data);

        }
        pegarDados();

    }, []);



    if(paises === null){
      return  <p>Carregando...</p>
    }

    return (
        <>
        <table border = '1'><div className = 'tabela'> 
        <tr>
    
        <td><div className= 'colunaPaises'><h2>País</h2>{paises.map((item) => (<div key>
            {item.name}
            </div>))}
        </div></td>

        <td><div className = 'colunaCapital' ><h2>Capital</h2>{paises.map((item) => (<div>
            {item.capital}
            </div>))}
        </div></td>

        <td><div className = 'colunaRegiao'><h2>Região</h2>{paises.map((item) => (<div>
            {item.region}</div>))}
        </div></td>

        <td><div className = 'colunaSubRegiao'><h2>Subregião</h2> {paises.map((item) => (<div>
            {item.subregion}</div>))}
        </div></td>
        
        <td><div className = 'colunaArea'><h2>Área:</h2> {paises.map((item) => (<div>
            {item.area}</div>))}
        </div></td>

        <td><div className = 'colunaFronteira'><h2>Fronteiras:</h2> {paises.map((item) => (<div>
            {item.borders}</div>))}
        </div></td>
        
        </tr>
        </div>  
        </table>
        
        
        </> 
    )
};

export default Paises;
