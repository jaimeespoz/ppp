// modulos
import { useNavigate } from "react-router-dom";
import { FaTwitter, FaYoutube, FaInstagram, FaBlogger } from "react-icons/fa";

// paginas
// import Footer from './Footer';

//
import LogoChile from "../../components/assets/images/LogoChile.png";
import Libertad from "../../components/assets/images/Libertad.jpg";
import BanderaEscudo from "../../components/assets/images/banderaescudo.jpg";
import Temas from "./Temas";

// css
import "./Home.scss";

function Home() {
  const { REACT_APP_API_BASE_URL } = process.env;
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handlePresentacion = () => {
    navigate("/presentacion");
  };

  const handleExplicame = () => {
    navigate("/explicame");
  };

  const handlePruebaFlex = () => {
    navigate("/pruebaflex");
  };

  // console.log(REACT_APP_API_BASE_URL);

  return (
    <>
      <main>
        <div className="home">
          <div className="layer">
            <div className="left">
              <span className="titulo">Red Patriota</span>
              <span className="bajada">Una Sola voz por nuestra Patria</span>
              <span className="bajada">
                {process.env.REACT_APP_API_BASE_URL}
              </span>
              <div className="botones">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={handleLogin}
                >
                  Entrar
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={handlePresentacion}
                >
                  Presentacion
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={handleExplicame}
                >
                  Explicame
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={handlePruebaFlex}
                >
                  Prueba Flex
                </button>
              </div>
            </div>
            <div className="right">
              <section className="rrss">
                {/* <ul>
                  <li className="social-media-icon">
                    <img src={LogoChile} alt="" />
                  </li>
                  <li className="social-media-icon">
                    <img src={Libertad} alt="" />
                  </li>
                  <li className="social-media-icon">
                    <img src={BanderaEscudo} alt="" />
                  </li>
                </ul> */}
                <ul>
                  <li className="social-media-icon">
                    <a
                      href="https://twitter.com/AtrevidosEntre"
                      aria-label="Close"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="social-media-icon">
                    <a
                      href="https://www.youtube.com/c/EntreAtrevidos"
                      aria-label="Close"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                  <li className="social-media-icon">
                    <a
                      href="https://www.instagram.com/entreatrevidos/"
                      aria-label="Close"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="social-media-icon">
                    <a
                      href="https://entre-atrevidos-candidatos.blogspot.com/"
                      aria-label="Close"
                    >
                      <FaBlogger />
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Temas />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
