import ModeloA from "../../components/ModeloA";
import ModeloB from "../../components/ModeloB";
import { useState } from "react";



function Tramite() {
  
    const [isChecked, setIsChecked] = useState(true);
  
    const handleToggle = () => {
      setIsChecked((prevState) => !prevState);
    
    };
  
  return (
    <>
      <div className="">
        <div className="mb-6 p-2 md:p-8 lg:12 bg-gray-100 ">
          <h1 className="text-3xl font-bold">Tramite</h1>
        </div>
        <div className="flex flex-wrap">
          {/* Esto es mi bloque 1 */}

          <div className="w-[50%] p-6 bg-gray-100">
          <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value={isChecked}
        className="sr-only peer"
        onChange={handleToggle}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {isChecked ? "ModeloA" : "ModeloB"}
      </span>
    </label>

      {isChecked ? <ModeloA/> : <ModeloB/>}
            {/* <h3 className="italic"><span className="hover:cursor-pointer font-bold text-blue-500">Click </span>Modelo A</h3>
            <ModeloA />

            <h3 className="mt-20 italic"><span className="hover:cursor-pointer font-bold text-blue-500">Click </span>Modelo B</h3>
            <ModeloB /> */}
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
