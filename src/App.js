import { useState } from "react";

/*
caja: {
  nombre: "",
  estante: "",
  fila: "",
  columna: "",
  espacio: "",
}
*/

const cajasIniciales = [
  {
    tipo: "V",
    numero: 1,
    año: 2022,
    estante: 2,
    fila: 1,
    columna: 1,
    espacio: 1,
  },
  {
    tipo: "V",
    numero: 2,
    año: 2012,
    estante: 2,
    fila: 1,
    columna: 2,
    espacio: 1,
  },
  {
    tipo: "V",
    numero: 3,
    año: 2022,
    estante: 2,
    fila: 1,
    columna: 3,
    espacio: 1,
  },
  {
    tipo: "V",
    numero: 1,
    año: 2012,
    estante: 2,
    fila: 1,
    columna: 3,
    espacio: 1,
  },
  {
    tipo: "MP",
    numero: 1,
    año: 2012,
    estante: 2,
    fila: 1,
    columna: 3,
    espacio: 1,
  },
];

function App() {
  const [cajas, setCajas] = useState(cajasIniciales);
  const [actual, setActual] = useState({});
  const updActual = (label, value) => setActual({ ...actual, [label]: value });

  const cajasFiltradas = cajas.filter(({ tipo, numero, año }) => {
    console.log(actual, tipo, numero, año);
    if (actual.tipo && actual.tipo !== tipo) return false;
    if (actual.numero && actual.numero !== String(numero)) return false;
    if (actual.año && !String(año).startsWith(actual.año)) return false;

    return true;
  });

  return (
    <div className="App">
      <div className="Data">
        <div className="Row">
          <input
            type="text"
            placeholder="Tipo"
            onChange={(e) => updActual("tipo", e.target.value)}
            list="tipos"
          />
          <datalist id="tipos">
            <option value="MP" />
            <option value="V" />
            <option value="L" />
            <option value="PT" />
          </datalist>
          <input
            type="number"
            placeholder="Número"
            onChange={(e) => updActual("numero", e.target.value)}
          />
          <input
            type="number"
            placeholder="Año"
            onChange={(e) => updActual("año", e.target.value)}
          />
        </div>

        {cajasFiltradas.length === 0 ? (
          <>
            <div className="Row">
              <input
                type="number"
                placeholder="estante"
                onChange={(e) => updActual("estante", e.target.value)}
              />
              <input
                type="number"
                placeholder="fila"
                onChange={(e) => updActual("fila", e.target.value)}
              />
              <input
                type="number"
                placeholder="columna"
                onChange={(e) => updActual("columna", e.target.value)}
              />
            </div>
            <button onClick={() => setCajas([...cajas, actual])}>
              Agregar
            </button>
          </>
        ) : null}
      </div>
      <div>
        {cajasFiltradas.map((caja, i) => (
          <div key={i}>
            {caja.tipo} {caja.numero} {caja.año} - {caja.estante} {caja.fila}{" "}
            {caja.columna}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
