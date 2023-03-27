const DetPreDetalle = ({ item }) => {
  return (
    <div className="recuadro">
      <ul>
        {item.opciones.map((item2) => {
          return (
            <li key={item2.codigo}>
              <p>{item2.descripcion}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetPreDetalle;
