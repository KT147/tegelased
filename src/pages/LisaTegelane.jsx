import { useRef, useState } from 'react';

function LisaTegelane() {
    const [sonum, uuendaSonum] = useState ("");
    const nimiRef = useRef();


    function sisesta () {
      if (nimiRef.current.value === "") {
        uuendaSonum ("Tühja nimega ei saa sisestada!");
      }
        else {
          uuendaSonum ("Tegelane lisatud!")
        }
      }

        return (
    <div>
        <div>{sonum}</div>
        <label>Tegelase nimi</label> <br />
        <input type="text" ref={nimiRef} /> <br />    
                                                         {/* Nimiref oli puudu  */}
        <button onClick={sisesta}>Lisa uus</button>
    </div>
  )
}

export default LisaTegelane