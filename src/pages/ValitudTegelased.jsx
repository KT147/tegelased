import { useState } from "react"


function ValitudTegelased() {

    const [tegelased, uuendaTegelased] = useState (JSON.parse(localStorage.getItem("valitudTegelased")) || [])

    const kustuta = (index) => {
      tegelased.splice(index,1)
      uuendaTegelased(tegelased.slice())
      localStorage.setItem(("valitudTegelased"), JSON.stringify(tegelased))
    }

    const kustutaKoik = () => {
      uuendaTegelased([]);
      localStorage.setItem(("valitudTegelased"), JSON.stringify([]))
    }

  return (
    <div>
      {tegelased.length > 0 && <div>Valitud tegelasi kokku: {tegelased.length}</div>}
      {tegelased.length > 0 && <button onClick={kustutaKoik}>Kustuta kõik</button>}
      {tegelased.length === 0 && <div>Ühtegi tegelast pole valitud</div>}
      {tegelased. map ((tegelane, index)=>
        <div key={tegelane}>
          <div>{tegelane.eesnimi}</div>
	        <div>{tegelane.perenimi}</div>
	        <div>{tegelane.teema}</div>
	        <div>{tegelane.vanus}</div>
          <button onClick={() => kustuta (index)}>Eemalda</button>
        </div>
      )}
    </div>
  )
}

export default ValitudTegelased