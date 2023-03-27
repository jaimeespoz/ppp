// modulos
import { useState } from "react";
import { Link } from "react-router-dom";

import Valdivia from "../../components/assets/images/Valdivia.jpg";
import BanderaEscudo from "../../components/assets/images/banderaescudo.jpg";

import "./Login.scss";
import BotonAceptar from "../../components/html/button/BotonAceptar.js";

// import { useBase64 } from '../../components/hooks/useBase64';
// import { decode as base64_decode, encode as base64_encode } from 'base-64';
// import {
// 	fecha_del_dia_aaaammdd,
// 	fecha_nula_aaaammdd,
// } from '../../utils/FuncionesFechas';

// paginas
// import { VinculosTerminosNav } from '../../components/layout';

// // url
// import { url_tbl_usuarios } from '../../components/routes/Urls';

// // helpers
// import { helpHttp } from '../../components/stateManagement/helpers/helpHttp';

const initialForm = {
  usuario: "aa@aa.cl",
  clave: "123",
  recuerdame: false,
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

  if (!form.clave) {
    errors.clave = "Ingrese su Clave de Acceso";
  }

  if (!form.terminos) {
    errors.terminos = "Debe aceptar Terminos de este Sitio";
  }

  // if (errors) {
  // 	api
  // 		.get(url_tbl_usuarios + '/Existe_Correo?correo=' + form.usuario)
  // 		.then((res) => {
  // 			if (!res.err) {
  // 				errors.valido = true;
  // 				// alert('usuario existe..');
  // 			}
  // 		});
  // }

  return errors;
};

function Login() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({ usuario: "", clave: "", valido: "" });
  //	let navigate = useNavigate();
  //	let api = helpHttp();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validationsForm(form));
    setErrors((prevState) => validationsForm(form));

    if (errors) {
      let data = {
        username: form.usuario,
        password: form.clave,
      };
      let options = {
        body: data,
        headers: { "content-type": "application/json" },
      };
      // api.register(url_tbl_usuarios + '/Register', options).then((res) => {
      // 	if (!res.err) {
      // 		form.registrado = true;
      // 		let data = {
      // 			username: form.usuario,
      // 			password: form.clave,
      // 		};
      // 		let options = {
      // 			body: data,
      // 			headers: { 'content-type': 'application/json' },
      // 		};
      // 		api.login(url_tbl_usuarios + '/Login', options).then((res) => {
      // 			if (!res.err) {
      // 				api2.save('username', form.usuario);
      // 				api2.save('password', form.clave);
      // 				api2.save('passwordhash', res.passwordHash);
      // 				api2.save('passwordsalt', res.passwordSalt);
      // 				api2.save('token', res.token);
      // 				navigate('/mantenciones/mantusuario/MantUsuario');
      // 			} else {
      // 				alert('Clave erronea');
      // 				return;
      // 			}
      // 		});
      // 	} else {
      // 		alert('El Usuario no se pudo registrar');
      // 		return;
      // 	}
      // });
    } else {
      return;
    }
  };

  return (
    <main>
      <div className="login">
        <div className="area-superior">
          <Link to="/">
            <img src={BanderaEscudo} alt="" />
          </Link>
        </div>

        <div className="area-central">
          <div className="seccion-left">
            <p className="titulo">Iniciar Sesion de Usuario</p>
            <div className="form">
              <label htmlFor="usuario" className="form-label-sm">
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
              <label htmlFor="clave" className="form-label-sm">
                Clave de Acceso:
              </label>
              <input
                type="text"
                className="form-control-sm"
                id="clave"
                name="clave"
                value={form.clave}
                placeholder="Ingrese Clave de Acceso"
                onChange={handleChange}
              />
            </div>
            <div className="opciones">
              <article className="check-box">
                <input
                  id="terminos"
                  name="terminos"
                  type="checkbox"
                  value={form.terminos}
                  onChange={handleChecked}
                />
                <label htmlFor="recuerdame">Recuerdame</label>
              </article>
              <article className="check-box">
                <input
                  id="terminos"
                  name="terminos"
                  type="checkbox"
                  value={form.terminos}
                  onChange={handleChecked}
                />
                <label htmlFor="terminos">
                  Acepto los Terminos de Uso de este sitio
                </label>
              </article>
            </div>
            <BotonAceptar text="Iniciar Sesion" onClickHandler={handleLogin} />
            <Link to="/registrarse" className="registrarse">
              Registrase
            </Link>
          </div>

          <div className="seccion-center">
            <img
              src={Valdivia}
              alt="Valdivia"
              className="img-fluid img-thumbnail"
            />
          </div>
        </div>

        <div className="area-inferior">
          <p className="texto-sm text-muted text-center">
            Visite las condiciones de Uso del Portal
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;

// <main>
//   <div className="container">
//     <div className="d-flex flex-row">
//       <div className="col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3">
//         <Link to="/">
//           <img src={BanderaEscudo} alt="" className="logo" />
//         </Link>
//       </div>
//     </div>
//     <div className="d-flex flex-row flex-wrap justify-content-center justify-content-evenly">
//       <div className="col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3">
//         <div className="d-flex flex-row flex-wrap justify-content-center justify-content-evenly">
//           <div className="col-12">
//             <span className="texto-lg fc-steel-blue">
//               Iniciar Sesion como Usuario
//             </span>
//           </div>
//           <div className="col-12">
//             <label
//               htmlFor="usuario"
//               className="form-label-sm fw-semi-bold mt-3"
//             >
//               Correo Electronico:
//             </label>
//             <input
//               type="text"
//               className="form-control-sm"
//               id="usuario"
//               name="usuario"
//               value={form.usuario}
//               placeholder="Ingrese Casilla Correo"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="col-12">
//             <label htmlFor="clave" className="form-label-sm fw-semi-bold mt-3">
//               Clave de Acceso:
//             </label>
//           </div>
//           <div className="col-12">
//             <input
//               type="text"
//               className="form-control-sm"
//               id="clave"
//               name="clave"
//               value={form.clave}
//               placeholder="Ingrese Clave de Acceso"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="col-12">
//             <article className="check-box">
//               <input
//                 id="terminos"
//                 name="terminos"
//                 type="checkbox"
//                 value={form.terminos}
//                 onChange={handleChecked}
//               />
//               <label htmlFor="recuerdame" className="texto-xsm mt-3 mb-2">
//                 Recuerdame
//               </label>
//             </article>
//           </div>
//           <div className="col-12">
//             <article className="check-box">
//               <input
//                 id="terminos"
//                 name="terminos"
//                 type="checkbox"
//                 value={form.terminos}
//                 onChange={handleChecked}
//               />
//               <label htmlFor="terminos" className="texto-xsm">
//                 Acepto los Terminos de Uso de este sitio
//               </label>
//             </article>
//           </div>
//           <div className="col-12 text-center mt-4">
//             <BotonAceptar text="Iniciar Sesion" onClickHandler={handleLogin} />
//           </div>
//           <div className="col-12 text-center mt-4">
//             <Link to="/registrarse">
//               <span className="texto-sm fc-dell-blue">Registrase</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="col-10 col-sm-10 col-md-6 col-lg-6 col-xl-6">
//         <img
//           src={Valdivia}
//           alt="Valdivia"
//           className="img-fluid img-thumbnail"
//         />
//       </div>
//     </div>
//     <div className="d-flex flex-row justify-content-center">
//       <div className="col-10">
//         <hr className="mt-6"></hr>
//       </div>
//     </div>
//   </div>
// </main>;
