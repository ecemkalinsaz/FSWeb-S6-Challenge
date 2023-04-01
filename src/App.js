import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Karakter from "./components/Karakter"

const App = () => {
  const [karakterler, setKarakterler] = useState([]); 
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/', {
    })
    .then(function (response) {
      // response.data = Karakter listesi
      // `.data` bir kaliptir. Her zaman API'nin cevabina bu sekilde erisiriz.
      setKarakterler(response.data) // 2. Gorev
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <div className='accordion-div'>
      {karakterler.map(kisi => {
        return <div className='accordion'><Karakter kisi={kisi} /></div>
      })}
      </div>

    </div>
  );
}

export default App;
