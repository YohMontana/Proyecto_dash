import ModeloA from "../../components/ModeloA";
import ModeloB from "../../components/ModeloB";

function Tramite() {
  return (
    <>
      <div className="">
        <div className="mb-6 p-2 md:p-8 lg:12 bg-gray-100 ">
          <h1 className="text-3xl font-bold">Tramite</h1>
        </div>
        <div className="flex flex-wrap">
          {/* Esto es mi bloque 1 */}
          <div className="w-[50%] pl-8">
            <h1 className="text-xl font-semibold">Modelos de Envíos</h1>

            <h3 className="italic"><span className="hover:cursor-pointer font-bold text-blue-500">Click </span>Modelo A</h3>
            <ModeloA />

            <h3 className="mt-20 italic"><span className="hover:cursor-pointer font-bold text-blue-500">Click </span>Modelo B</h3>
            <ModeloB />
          </div>
          {/* Aqui visualizador */}
          <div className="w-[50%]">
            <h1>AQUI VA MI VISUALIZADOR</h1>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Tramite;
