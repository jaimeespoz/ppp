import "./PruebaFlex.scss";

const PruebaFlex = () => {
  return (
    <div className="pruebas jea">
      <div className="area-superior jea">Hola</div>

      <div className="area-central jea">
        <div className="seccion-left jea">
          <p>seccion-left seccion-left seccion-left seccion-left</p>
          <div className="seccion-left-col jea">
            <div className="parte-left jea">
              <p>parte-left</p>
              <p>parte-left</p>
              <p>parte-left</p>
              <p>parte-left</p>
              <p>parte-left</p>
            </div>
            <div className="parte-center jea">
              <p>parte-center</p>
              <p>parte-center</p>
              <p>parte-center</p>
              <p>parte-center</p>
              <p>parte-center</p>
            </div>
            <div className="parte-right jea">
              <p>parte-right</p>
              <p>parte-right</p>
              <p>parte-right</p>
              <p>parte-right</p>
              <p>parte-right</p>
            </div>
          </div>
        </div>

        <div className="seccion-center jea">
          <p> seccion-center seccion-center seccion-center seccion-center</p>
          <div className="seccion-center-row jea">
            <div className="parte-left jea">
              <p>parte-left</p>
              <p>parte-left</p>
              <p>parte-left</p>
              <p>parte-left</p>
              <p>parte-left</p>
            </div>
            <div className="parte-center jea">
              <p>parte-center</p>
              <p>parte-center</p>
              <p>parte-center</p>
              <p>parte-center</p>
              <p>parte-center</p>
            </div>
            <div className="parte-right jea">
              <p>parte-right</p>
              <p>parte-right</p>
              <p>parte-right</p>
              <p>parte-right</p>
              <p>parte-right</p>
            </div>
          </div>
        </div>

        <div className="seccion-right jea">
          <p>seccion-right seccion-right seccion-right seccion-right</p>
        </div>
      </div>

      <div className="area-inferior jea">Hola</div>
    </div>
  );
};

export default PruebaFlex;
