
package Modelo;

/**
 *
 * @author luigg
 */
public class DatosCurso {
    String seccion;
    String docente;
    String dia;
    String horaFin;
    String horaInicio;

    public DatosCurso(String seccion, String docente, String dia, String horaFin, String horaInicio) {
        this.seccion = seccion;
        this.docente = docente;
        this.dia = dia;
        this.horaFin = horaFin;
        this.horaInicio = horaInicio;
    }

    public String getSeccion() {
        return seccion;
    }

    public String getDocente() {
        return docente;
    }

    public String getDia() {
        return dia;
    }

    public String getHoraFin() {
        return horaFin;
    }

    public String getHoraInicio() {
        return horaInicio;
    }

    @Override
    public String toString() {
        return "seccion=" + seccion + ", docente=" + docente + ", dia=" + dia + ", horaFin=" + horaFin + ", horaInicio=" + horaInicio + '}';
    }
    
    
}
