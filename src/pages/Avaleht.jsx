import { useState } from "react";

function Avaleht() {
		// const tegelased = [
		// 	{eesnimi: "Mickey", perenimi: "Mouse", teema: "Disneyland", vanus: 7},
		// 	{eesnimi: "Minnie", perenimi: "Mouse", teema: "Disneyland", vanus: 13},
		// 	{eesnimi: "Winnie", perenimi: "Pooh", teema: "Hundred Acre Wood", vanus: 25},
		// 	{eesnimi: "Roo", perenimi: "Kangaroo", teema: "Hundred Acre Wood", vanus: 2},
		// 	{eesnimi: "Scooby", perenimi: "Doo", teema: "Crystal Cove", vanus: 76}
		// ];

		const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];


		const kuvaNimi = (tegelane) => {
			console.log(tegelane.eesnimi)
			n2itaNime(tegelane.eesnimi)
		}

		const [nimi, n2itaNime] = useState ("");

		const valiTegelane = (klikutudTegelane) => {
			const valitud = JSON.parse(localStorage.getItem("valitudTegelased")) || [];
			valitud.push(klikutudTegelane);
			localStorage.setItem(("valitudTegelased"), JSON.stringify(valitud))
		}
		
  return (<>
	{nimi !== "" && <div>Klikkisid nimel: {nimi}</div>}
	<div>{tegelased.map(tegelane =>
	<div key={tegelane}>
	<div>{tegelane.eesnimi}</div>
	<div>{tegelane.perenimi}</div>
	<div>{tegelane.teema}</div>
	<div>{tegelane.vanus}</div>
	<button onClick={() => valiTegelane (tegelane)}>Vali</button>
	<button onClick={() => kuvaNimi (tegelane)}>Kuva nimi</button>
	</div>
	)}
	</div>

</>

  )
}

export default Avaleht