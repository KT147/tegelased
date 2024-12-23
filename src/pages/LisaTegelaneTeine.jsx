import { useRef, useState } from 'react';

function LisaTegelaneTeine() {
  const [sonum, uuendaSonum] = useState ("");
  const nimiRef = useRef();
  const lisaUusTegelane = () => {
    if (nimiRef.current.value === "") {
      uuendaSonum ("Tühja nimega ei saa sisestada");
    } else {
      uuendaSonum ("Tegelane lisatud!");
    }

  }


      return (
  <div>
      <div>{sonum}</div>
      <label>Tegelase nimi</label> <br />
      <input type="text" ref={nimiRef} /> <br />   
      <button onClick={lisaUusTegelane}>Lisa uus</button>
  </div>
)
}

export default LisaTegelaneTeine