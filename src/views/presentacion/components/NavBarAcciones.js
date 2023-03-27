import React, { useEffect, useState } from "react";
import BotonAcciones from "../../../components/html/button/BotonAcciones";

// url
import { url_navbar_opciones_acciones } from "../../../components/routes/Urls";

function NavBarAcciones({ item }) {
  const [db, setDb] = useState([]);

  // alert("hola");

  useEffect(() => {
    leeOpciones(item.id_opcion, item.textos_tipo);
  }, []);

  const leeOpciones = (id_opcion, textos_tipo) => {
    async function fetchData(id_opcion, textos_tipo) {
      await fetch(
        url_navbar_opciones_acciones + id_opcion + "/" + textos_tipo,
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
        <section className="boton-acciones">
          {db.map((item) => {
            return (
              <BotonAcciones
                key={item.react_key}
                url={item.acciones_path}
                className={item.classname}
                text={item.acciones_texto}
                onClickHandler={item.acciones_onclickhandler}
              />
            );
          })}
        </section>
      )}
    </div>
  );
}

export default NavBarAcciones;
