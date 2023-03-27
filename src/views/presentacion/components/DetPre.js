//
import { useState, useEffect } from "react";

import "./DetPre.scss";

import Data from "../../presentacion/api/DetVinculos.json";
import DetPreDetalle from "./DetPreDetalle";

const DetPre = () => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    leeNavBar(0);
  }, []);

  const leeNavBar = () => {
    // async function fetchData(hijo) {
    //   await fetch(url_opciones_get_hijos + "02/" + hijo, {
    //     method: "get",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       setDb(result.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    // fetchData(hijo);

    let xx = Data.DetVinculos;
    setDb(xx);
  };

  //   const filtro = (value) => id_navbar === value;

  return (
    <div className="detpre">
      <section>
        {db &&
          db.map((item) => {
            return (
              <article key={item.id}>
                <p>hola</p>
                <DetPreDetalle item={item} />
              </article>
            );
            // return (
            //   // <article key={item.id}>
            //   //   <p>hola</p>
            //   //   <DetPreDetalle item={item} />
            //   // </article>
            // );
          })}
      </section>
    </div>
  );
};

export default DetPre;
