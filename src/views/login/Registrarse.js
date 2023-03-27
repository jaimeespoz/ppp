// modulos
import { useState } from "react";
import { Link } from "react-router-dom";

import BanderaEscudo from "../../components/assets/images/banderaescudo.jpg";
import IsladePascua from "../../components/assets/images/IsladePascua.jpg";
import BotonAceptar from "../../components/html/button/BotonAceptar.js/index.js";

import "./Registrarse.scss";

const initialForm = {
  usuario: "aa@aa.cl",
  terminos: true,
  existe: false,
  registrado: false,
};

const validationsForm = (form) => {
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  //	let regexComments = /^.{1,255}$/;
  let errors = {};
  // let api = helpHttp();

  if (!form.usuario) {
    errors.usuario = "Ingrese su Correo Electronico";
  } else if (!regexEmail.test(form.usuario)) {
    errors.usuario = "Ingrese un Correo Electronico valido";
  }

  if (!form.terminos) {
    errors.terminos = "Debe aceptar Terminos de este Sitio";
  }
  return errors;
};

function Registrarse() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({ usuario: "", clave: "", valido: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleChecked = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = () => {
    //		navigate('/login');
  };

  return (
    <div className="registrese">
      <div className="area-superior">
        <Link to="/">
          <img src={BanderaEscudo} alt="" />
        </Link>
      </div>

      <div className="area-central">
        <div className="seccion-left">
          <p className="titulo">Registrese en nuestro Portal Patriota</p>
          <img src={IsladePascua} alt="" className="img-fluid img-thumbnail" />
        </div>
        <div className="seccion-center">
          <p className="titulo">Registro de Usuarios</p>
          <div className="form">
            <label
              htmlFor="usuario"
              className="form-label-sm fw-semi-bold mt-3"
            >
              Correo Electronico:
            </label>
            <input
              type="text"
              className="form-control-sm"
              id="usuario"
              name="usuario"
              value={form.usuario}
              placeholder="Ingrese Casilla Correo"
              onChange={handleChange}
            />
            <p>
              Es usado para que se conecte y tambien para algunas funciones
              administrativas
            </p>
            <article className="check-box">
              <input
                id="terminos"
                name="terminos"
                type="checkbox"
                value={form.terminos}
                onChange={handleChecked}
              />
              <div className="opciones">
                <label htmlFor="terminos" className="texto-2xsm">
                  Acepto los Terminos del sitio
                </label>
              </div>
            </article>
          </div>
          <BotonAceptar
            text="Verificacion Correo Electronico"
            onClickHandler={handleLogin}
          />
        </div>
      </div>

      <div className="area-inferior">
        <p className="texto-sm text-muted text-center">
          Visite las condiciones de Uso del Portal
        </p>
      </div>
    </div>
  );
}

export default Registrarse;
