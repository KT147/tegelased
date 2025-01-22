import { useRef, useState } from "react"


function TegelaseLisamine() {

    const [sonum, setSonum] = useState("")

    const eesnimiRef = useRef();
    const perenimiRef = useRef();
    const teemaRef = useRef();
    const vanusRef = useRef();

    const lisaUus = () => {
        if (eesnimiRef.current.value === "") {
            setSonum("Tühja nimega ei saa sisestada!")
        } else {
            setSonum("Tegelane lisatud!")
        }
        const tegelased = JSON.parse(localStorage.getItem("tegelased")) || []
        tegelased.push({
        "eesnimi" : eesnimiRef.current.value,
        "perenimi": perenimiRef.current.value,
        "teema": teemaRef.current.value,
        "vanus": vanusRef.current.value,
        })
        localStorage.setItem(("tegelased"), JSON.stringify(tegelased))
        console.log(eesnimiRef.current.value)
    }

  return (
    <div>
        {sonum} <br />
        <label>Eesnimi</label><br />
        <input ref={eesnimiRef} type="text" /><br />
        <label>Perenimi</label><br />
        <input ref={perenimiRef} type="text" /><br />
        <label>Teema</label><br />
        <input ref={teemaRef} type="text" /><br />
        <label>Vanus</label><br />
        <input ref={vanusRef} type="number" /><br />
        <button onClick={lisaUus}>Lisa tegelane</button>
    </div>
  )
}

export default TegelaseLisamine