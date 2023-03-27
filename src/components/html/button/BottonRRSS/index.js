import { Fragment } from "react";
import PropTypes from "prop-types";

// import { FaTwitter, FaYoutube, FaInstagram, FaBlogger } from "react-icons/fa";
// export const BotonRRSS = ({ text, onClickHandler }) => {
//   return (
//     <Fragment>
//       <article className="social-media-icon">
//         <a href="https://twitter.com/AtrevidosEntre" aria-label="Close">
//           <FaTwitter />
//         </a>
//       </article>
//     </Fragment>
// import PropTypes from "prop-types";
// import "./style.scss";

export const BotonRRSS = ({ url, className, text, onClickHandler }) => {
  return (
    <article className="social-media-icon">
      <a href={url} className={className} aria-label="Close">
        <span className="spany">{text}</span>
      </a>
    </article>
  );
};

BotonRRSS.propTypes = {
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default BotonRRSS;
