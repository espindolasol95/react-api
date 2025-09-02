import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
  <div className="container py-5">
    <h1 className='text-center mb-5'>Lista Attori</h1>
    <div className="row g-4">
      <div className="col-12 col md-6 col-lg-4">
        <img src="" alt="" />
        <div className="card-body">
          <h5 className="card title">Nome Attore</h5>
          <p className='card-text'><strong>Anno di nascita:</strong></p>
           <p className='card-text'><strong>Nazionalità:</strong></p>
            <p className='card-text'><strong>Biogafia:</strong></p>
             <p className='card-text'><strong>Riconoscimenti</strong></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
