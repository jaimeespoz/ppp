import { useParams } from "react-router";
import DetPre from "./DetPre";

const PresentacionesDriver = () => {
  const { opcionId } = useParams();
  // alert(opcionId);

  return (
    <div>
      <DetPre />
    </div>
  );
};

export default PresentacionesDriver;
