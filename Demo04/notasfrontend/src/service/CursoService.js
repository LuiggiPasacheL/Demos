import axios from 'axios';

const CURSO_API_BASE_URL = "http://localhost:8080/api";
const ALUMNO_API_BASE_URL = "#";

class CursoService {

  getCursos() {
    return axios.get(CURSO_API_BASE_URL + '/getcursos');
  }

  createCurso(curso) {
    return axios.post(CURSO_API_BASE_URL + '/agregar', curso);
  }

  createAlumno(alumno) {
    return axios.post(ALUMNO_API_BASE_URL + '/agregarAlumno', alumno);
  }

  getCursoById(cursoId) {
    return axios.get(CURSO_API_BASE_URL + '/curso/' + cursoId)

  }

  updateCurso(cursoId) {
    return axios.put(CURSO_API_BASE_URL + '/modificar/', cursoId)

  }

  deleteCurso(cursoId) {
    return axios.delete(CURSO_API_BASE_URL + '/del/' + cursoId)
  }

}
export default new CursoService()