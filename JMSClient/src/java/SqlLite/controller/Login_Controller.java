/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package SqlLite.controller;
import Modelo.Alumno;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author user
 */
public class Login_Controller {
      private Connection conn;

    public Login_Controller(Connection connection) {
        this.conn=connection;
        
    }
    public boolean login(Alumno modelLogin)
    {
        String  query= "SELECT * FROM Alumno WHERE Nombre=? AND Contrasena=?";
        try {
            PreparedStatement pst=ConnectDB.getConnection().prepareStatement(query);
            pst.setString(1, modelLogin.getNombre());
            pst.setString(2, modelLogin.getContrasena());
            ResultSet rs=pst.executeQuery();
            if(rs.next()){
                return true;
            }
            rs.close();

        } catch (SQLException ex) {
            Logger.getLogger(Login_Controller.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return false;
    }
    
}
