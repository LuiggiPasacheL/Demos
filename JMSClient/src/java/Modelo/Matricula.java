
package Modelo;

/**
 *
 * @author luigg
 */
public class Matricula {
    Curso cursos[];
    Alumno alumno;

    public Matricula() {
        cursos = new Curso[5];
        for(int i = 0; i < 5; i++){
            cursos[i] = new Curso();
        }
    }
    
    
}
