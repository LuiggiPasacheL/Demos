import React from 'react'

function index() {
	return (
		<div className="container">
			<div className="box">
				<h1 className="title">Portal de Notas</h1>
				<h2 style={{fontFamily: "sans-serif", textAlign: "center", fontSize: "20px"}}>
					Alumno: <span id="name">[Nombre]</span></h2>
				<a href="./IngresoNotas.html" className="index-button index-hov index-act">Ingresar</a>
				<a href="./ReporteNotas.html" className="index-button index-hov index-act">Reporte</a>
				<a href="#" className="index-button index-hov index-act">Cerrar</a>
			</div>
		</div>)
}

export default index;