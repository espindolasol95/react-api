import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() { 
  const [actors, setActors] = useState([]);
  useEffect(()=>{
    //chiamata API con AXIOS 
      axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then((response) => {
         console.log("Dati ricevuti:", response.data); 
          setActors(response.data); //salvo i dati nello stato

      })
        .catch((error) => {
        console.error("Errore nel recupero dei dati:", error);// da rivedere non capito bene
      });
  }, []); 

  return(

  <div className="container py-5">
    <h1 className='text-center mb-5'>Lista Attori</h1>
    <div className="row g-4">
       {actors.map((actor, index) => (
        <div key ={index} className="col-12 col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm">
        <img src={actor.image} alt= {actor.name} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card title">{actor.name}</h5>
          <p className='card-text'><strong>Anno di nascita:</strong>{actor.birthday}</p>
           <p className='card-text'><strong>Nazionalità:</strong>{actor.nationality}</p> 
            <p className='card-text'><strong>Biogafia:</strong>{actor.biography}</p>
             <p className='card-text'><strong>Riconoscimenti</strong>{actor.awards}</p>
        </div>
       </div>
      </div>
     ))}
    </div>
  </div>
  );
  }




export default App
