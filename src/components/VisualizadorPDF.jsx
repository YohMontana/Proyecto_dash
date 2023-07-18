const VisualizadorPDF = ({ url }) => {
    return (
      <div className="w-full">
        
        <iframe
          title="VisualizadorPDF"
          style={{ width: "100vh", height: "100vh" }}
          src={url}
        />
      </div>
    );
  };
  
export default VisualizadorPDF;