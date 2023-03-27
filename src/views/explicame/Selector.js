const Selector = ({ id, _handleClick, activeID }) => {
  let componentClass = "selector";
  if (activeID === id) {
    componentClass = "selector active";
  }
  return <div className={componentClass} onClick={_handleClick}></div>;
};

export default Selector;
