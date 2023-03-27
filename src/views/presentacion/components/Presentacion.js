//
import { useState, useEffect } from "react";
//
import NavBarPanel from "./NavBarPanel";

import "./Presentacion.scss";

// import Data from "../../presentacion/api/NavBarMain.json";

// url
import { url_navbar_opciones } from "../../../components/routes/Urls";

function Presentacion() {
  const [panels, setPanels] = useState(null);
  const [db, setDb] = useState(null);
  const [id, setId] = useState(null);
  const [padre, setPadre] = useState(null);

  useEffect(() => {
    leeNavBar(0);
  }, []);

  const leeNavBar = (padre) => {
    async function fetchData(padre) {
      await fetch(url_navbar_opciones + padre, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(JSON.stringify(result));
          setDb(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData(padre);
  };

  return (
    <div className="presentacion">
      <nav>
        <ul>
          {db &&
            db.map((item) => {
              return (
                <li
                  key={item.react_key}
                  onMouseOver={() => {
                    setId(item.id_opcion);
                    setPadre(item.id_opcion);
                    setPanels(item.tipo_columnas);
                  }}
                >
                  <span>{item.textos_texto}</span>
                </li>
              );
            })}
          {!db && <li></li>}
        </ul>
      </nav>
      {panels && (
        <div className="paneles">
          {panels === "A" && <NavBarPanel padre={padre} />}
          {panels === "B" && <NavBarPanel padre={padre} />}
          {panels === "C" && <NavBarPanel padre={padre} />}
        </div>
      )}
    </div>
  );
}

export default Presentacion;
