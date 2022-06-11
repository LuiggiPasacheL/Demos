
package Modelo;

/**
 *
 * @author luigg
 */
public class Alumno {
    String nombre;
    String apellido;
    String codigo;
    String contrasena;



    public Alumno() {
      //  throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
    
    public Alumno(String nombre, String apellido, String codigo, String contrasena) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.codigo = codigo;
        this.contrasena = contrasena;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

 
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getCodigo() {
        return codigo;
    }

    public String getContrasena() {
        return contrasena;
    }
    

 
    
}
