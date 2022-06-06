
package Modelo;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author luigg
 */
public class Matricula {
    Alumno alumno;
    String curso;

    public Matricula(Alumno alumno, String curso) {
        this.alumno = alumno;
        this.curso = curso;
    }
    
    List<Matricula> m = new ArrayList();
    
    public void agregar(Alumno al, String cu){
        Matricula mat = new Matricula(al, cu);
        m.add(mat);
    }
    
    

    public Alumno getAlumno() {
        return alumno;
    }

    public String getCurso() {
        return curso;
    }

    @Override
    public String toString() {
        return "Matricula{" + "alumno=" + alumno + ", curso=" + curso + '}';
    }
    
   

    
}
