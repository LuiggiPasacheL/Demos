import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <h1 className="title">Portal de Notas</h1>
            <h2 style={{fontFamily: "sans-serif", textAlign: "center", fontSize: "20px"}}>
              Alumno: <span id="name">[Nombre]</span></h2>
            <a href="/#" className="index-button index-hov index-act">Ingresar</a>
            <a href="/#" className="index-button index-hov index-act">Reporte</a>
            <a href="#" className="index-button index-hov index-act">Cerrar</a>
      </header>
    </div>
  );
}

export default App;
