//
import { useState, useEffect } from "react";

import NavBarDetalle from "./NavBarDetalle";

// url
import { url_navbar_opciones } from "../../../components/routes/Urls";

// import Data from "../../presentacion/api/NavBarMain.json";
import DetSit from "./DetSit";
import DetSide from "./DetSide";

function NavBarPanel({ padre }) {
  const [dba, setDba] = useState(null);
  const [dbb, setDbb] = useState(null);
  const [dbc, setDbc] = useState(null);

  useEffect(() => {
    leeOpciones(padre);
  }, [padre]);

  // const leeOpciones = (padre) => {
  const leeOpciones = (Id) => {
    async function fetchData(padre) {
      await fetch(url_navbar_opciones + padre, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          // alert(JSON.stringify(result));
          // console.log(JSON.stringify(result));
          setDba(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData(padre);
    // let xx = Data.NavBarMain.filter((item) => item.padre === padre);
    // setDba(xx);
    fetchData(Id);
  };

  const MouseOverA = (Id) => {
    async function fetchData(padre) {
      await fetch(url_navbar_opciones + Id, {
        // await fetch(url_navbar_opciones + padre, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          //  alert(JSON.stringify(result));
          // console.log(JSON.stringify(result));
          setDbb(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData(padre);
    // let xx = Data.NavBarMain.filter((item) => item.padre === Id);
    // setDbb(xx);
    fetchData(Id);
  };

  const MouseOverB = (Id) => {
    async function fetchData(padre) {
      await fetch(url_navbar_opciones + Id, {
        // await fetch(url_navbar_opciones + padre, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(JSON.stringify(result));
          setDbc(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData(padre);
    // let xx = Data.NavBarMain.filter((item) => item.padre === Id);
    // setDbc(xx);
    fetchData(Id);
  };

  return (
    <div className="navbarpanel">
      <div className="item-left">
        <ul>
          {dba &&
            dba.map((item) => {
              return (
                <li
                  key={item.serial}
                  key={item.react_key}
                  onMouseOver={() => {
                    MouseOverA(item.id_opcion);
                  }}
                >
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque omnis ad ipsam explicabo ratione magnam recusandae nulla, soluta error, cum earum deleniti harum perspiciatis itaque sit. Laudantium veniam repellendus doloribus! */}
                  <NavBarDetalle item={item} />
                </li>
              );
            })}
          {!dba && <li></li>}
        </ul>
      </div>

      <div className="item-center">
        <ul>
          {dbb &&
            dbb.map((item) => {
              return (
                <li
                  key={item.serial}
                  onMouseOver={() => {
                    MouseOverB(item.id);
                    // key={item.react_key}}
                    // onMouseOver={() => {
                    //   MouseOverB(item.id_opcion);
                    // }
                  }}
                >
                  <NavBarDetalle item={item} />
                </li>
              );
            })}
          {!dbb && <li></li>}
        </ul>
      </div>

      <div className="item-right">
        <ul>
          {dbc &&
            dbc.map((item) => {
              return (
                <li
                  key={item.serial}
                  onMouseOver={() => {
                    MouseOverA(item.id);
                  }}
                >
                  <NavBarDetalle item={item} />
                </li>
              );
            })}
          {!dbc && <li></li>}
          <li
          // key={item.serial}
          // onMouseOver={() => {
          //   MouseOverA(item.id_opcion);
          // }}
          >
            {/* <NavBarDetalle item={item} /> */}
            {/* <DetSide /> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarPanel;
