package Modelo;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author luigg
 */
public class Curso {

    List<DatosCurso> cursosI = new ArrayList();
    List<DatosCurso> cursosII = new ArrayList();
    List<DatosCurso> cursosIII = new ArrayList();
    List<DatosCurso> cursosIV = new ArrayList();
    List<DatosCurso> cursosV = new ArrayList();

    public void agregarCursoI(String curso, String seccion, String docente, String dia, String horaFin, String horaInicio) {
        DatosCurso c = new DatosCurso(curso, seccion, docente, dia, horaFin, horaInicio);
        cursosI.add(c);
    }

    public void agregarCursoII(String curso, String seccion, String docente, String dia, String horaFin, String horaInicio) {
        DatosCurso c = new DatosCurso(curso, seccion, docente, dia, horaFin, horaInicio);
        cursosII.add(c);
    }

    public void agregarCursoIII(String curso, String seccion, String docente, String dia, String horaFin, String horaInicio) {
        DatosCurso c = new DatosCurso(curso, seccion, docente, dia, horaFin, horaInicio);
        cursosIII.add(c);
    }

    public void agregarCursoIV(String curso, String seccion, String docente, String dia, String horaFin, String horaInicio) {
        DatosCurso c = new DatosCurso(curso, seccion, docente, dia, horaFin, horaInicio);
        cursosIV.add(c);
    }

    public void agregarCursoV(String curso, String seccion, String docente, String dia, String horaFin, String horaInicio) {
        DatosCurso c = new DatosCurso(curso, seccion, docente, dia, horaFin, horaInicio);
        cursosV.add(c);
    }

    public DatosCurso getCursoI(int i) {
        return cursosI.get(i);
    }
    
    public DatosCurso getCursoII(int i) {
        return cursosII.get(i);
    }
    
    public DatosCurso getCursoIII(int i) {
        return cursosIII.get(i);
    }
    
    public DatosCurso getCursoIV(int i) {
        return cursosIV.get(i);
    }
    
    public DatosCurso getCursoV(int i) {
        return cursosV.get(i);
    }

}
