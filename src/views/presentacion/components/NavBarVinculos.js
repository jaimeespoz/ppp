import React, { useEffect, useState } from "react";
import BotonRRSS from "../../../components/html/button/BottonRRSS";

// url
import { url_navbar_opciones_vinculos } from "../../../components/routes/Urls";

function NavBarVinculos({ item }) {
  const [db, setDb] = useState([]);

  useEffect(() => {
    leeOpciones(item.id_opcion, item.textos_tipo);
  }, []);

  const leeOpciones = (id_opcion, textos_tipo) => {
    async function fetchData(id_opcion, textos_tipo) {
      await fetch(
        url_navbar_opciones_vinculos + id_opcion + "/" + textos_tipo,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((result) => {
          // console.log(JSON.stringify(result));
          setDb(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData(id_opcion, textos_tipo);
  };

  const handlerBotonGenerico = () => {
    alert("hola");
  };

  return (
    <div className="navbardetalle">
      {db && (
        <section className="rrss">
          {db.map((item) => {
            return (
              <BotonRRSS
                key={item.react_key}
                url={item.vinculos_path}
                className={item.classname}
                text={item.vinculos_texto}
                onClickHandler={handlerBotonGenerico}
              />
            );
          })}
        </section>
      )}
    </div>
  );
}

export default NavBarVinculos;
