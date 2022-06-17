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
            this.setState({ cursos: JSON.stringify(res.data) })
            console.log(res.data)
        });
    }

    render() {
        console.log('Cursos: ' + this.state.cursos)
        const curso = this.state.cursos.map(curso => {
            <tr>
                <td className="course">{curso.nombrecurso}</td>
                <td className="score">
                    <span className="note" id="note-arq">{curso.prom}</span>
                </td>
            </tr>
        })

        return (
            <table className="table" >
                <thead>
                    <tr>
                        <th className="head">Curso</th>
                        <th className="head">Promedio final</th>
                    </tr>
                </thead>
                <tbody>
                    {curso}
                </tbody>
            </table >
        )
    }
}

export default ReporteNotasComponent;