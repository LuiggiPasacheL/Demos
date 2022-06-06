
package Modelo;

import java.util.List;

/**
 *
 * @author luigg
 */
public class Matricula {
    List<Curso> cursos;
    Alumno alumno;
    
    public Alumno getAlumno() {
        return alumno;
    }

    public void setAlumno(Alumno alumno) {
        this.alumno = alumno;
    }

    public List<Curso> getCursos() {
        return cursos;
    }

    public void setCursos(List<Curso> cursos) {
        this.cursos = cursos;
    }

    @Override
    public String toString() {
        return "Matricula{" + "cursos=" + cursos + ", alumno=" + alumno + '}';
    }


    
}
