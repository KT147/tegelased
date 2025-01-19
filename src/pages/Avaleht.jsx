import { useState } from "react";

function Avaleht() {
		const tegelased = [
			{VÕTI: "Mickey", VÕTI2: "Mouse", VÕTI3: "Disneyland"},
			{VÕTI: "Minnie", VÕTI2: "Mouse", VÕTI3: "Disneyland"},
			{VÕTI: "Winnie", VÕTI2: "Pooh", VÕTI3: "Hundred Acre Wood"},
			{VÕTI: "Roo", VÕTI2: "Kangaroo", VÕTI3: "Hundred Acre Wood"},
			{VÕTI: "Scooby", VÕTI2: "Doo", VÕTI3: "Crystal Cove"}
		];

		const kuvaNimi = (tegelane) => {
			console.log(tegelane.VÕTI)
			n2itaNime(tegelane.VÕTI)
		}

		const [nimi, n2itaNime] = useState ("");
		
  return (<>
	{nimi !== "" && <div>Klikkisid nimel: {nimi}</div>}
	<div>{tegelased.map(tegelane =>
	<div key={tegelane}>
	<div>{tegelane.VÕTI}</div>
	<div>{tegelane.VÕTI2}</div>
	<div>{tegelane.VÕTI3}</div>
	<button onClick={() => kuvaNimi (tegelane)}>Kuva nimi</button>
	</div>
	)}
	</div>

</>

  )
}

export default Avaleht