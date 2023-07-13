import ModeloA from "../../components/ModeloA";
import ModeloB from "../../components/ModeloB";

function Tramite() {
  return (
    <>
      <h1>Elegir entre estos dos modelos</h1>

      <h3>Este es modelo A</h3>
      <ModeloA />

      <h3>Este es modelo B</h3>
      <ModeloB />
    </>
  );
}

export default Tramite;
