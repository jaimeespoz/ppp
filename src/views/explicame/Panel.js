const Panel = ({ data, panelStyle, buttonStyle, _buttonColour }) => {
  return (
    <aside className="panel" style={{ backgroundColor: `${panelStyle}` }}>
      <h2 className="panel-header">{data.header}</h2>
      <p className="panel-info">{data.body}</p>
      <button
        className="panel-button"
        style={{ color: `${buttonStyle}` }}
        onMouseEnter={_buttonColour}
        onMouseLeave={_buttonColour}
      >
        Read More
      </button>
    </aside>
  );
};

export default Panel;
