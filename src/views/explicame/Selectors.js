import Selector from "./Selector";

const Selectors = ({ data, activeID, _changeActive }) => {
  const _handleClick = (id) => {
    if (id !== activeID) {
      _changeActive(id);
    } else {
      return;
    }
  };

  return (
    <>
      <div className="selectors">
        {data.map((item) => (
          <Selector
            key={item.id}
            id={item.id}
            _handleClick={() => {
              _handleClick(item.id);
            }}
            _changeActive={_changeActive(data.id)}
            activeID={activeID}
          />
        ))}
      </div>
    </>
  );
};

export default Selectors;
