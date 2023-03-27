import { useState } from "react";
import Panel from "./Panel";
import Selectors from "./Selectors";

function Appp({ data }) {
  const [activeID, SetActiveID] = useState(0);
  const [wrapperStyle, SetWrapperStyle] = useState(`url('${data[0].img}')`);
  const [panelStyle, SetPanelStyle] = useState(data[0].colour);
  const [buttonHover, SetButtonHover] = useState(false);
  const [buttonStyle, SetButtonStyle] = useState(data[0].colour);

  const _changeActive = (id) => {
    if (id !== undefined) {
      console.log("id: " + JSON.stringify(id));
      SetActiveID(id);
      SetWrapperStyle(`url('${data[id].img}')`);
      SetPanelStyle(data[id].colour);
    }
  };

  const _buttonColour = () => {
    if (buttonHover) {
      SetButtonHover(true);
      SetButtonStyle(data[activeID].colour);
    } else {
      SetButtonHover(false);
      SetButtonStyle("#ffffff");
    }
  };

  return (
    // <div className="pagina">
    //   <div className="pagina2">
    <section className="wrapper" style={{ backgroundImage: `${wrapperStyle}` }}>
      <Selectors
        data={data}
        activeID={activeID}
        _changeActive={_changeActive}
      />
      <Panel
        data={data[activeID]}
        panelStyle={panelStyle}
        buttonStyle={buttonStyle}
        _buttonColour={_buttonColour}
      />
    </section>
    //   </div>
    // </div>
  );
}

export default Appp;
