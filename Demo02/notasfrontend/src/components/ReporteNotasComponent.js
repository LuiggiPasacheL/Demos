import React, { Component } from 'react';
import CursoService from '../service/CursoService'

class ReporteNotasComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cursos: []
        }
    }

    componentDidMount() {
        CursoService.getCursos().then((res) => {
            this.setState({ cursos: (res.data) })
            console.log(res.data)
        });
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th className="head" style={{color: "black"}}>Curso</th>
                        <th className="head" style={{color: "black"}}>Promedio final</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.cursos.map(
                            curso =>
                                <tr key={curso.nombre}>
                                    <td> {curso.nombrecurso} </td>
                                    <td> {curso.prom} </td>
                                </tr>
                        )
                    }
                </tbody>
            </table >
        )
    }
}

export default ReporteNotasComponent;