/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package SqlLite.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author user
 */
public class ConnectDB{
        
private static Connection conn;
private ResultSet rst;
private PreparedStatement pst;

    public ConnectDB() {
    }

public static Connection getConnection(){
    try{
        Class.forName("org.sqlite.JDBC");
        conn=DriverManager.getConnection("jdbc:sqlite:src/java/SqlLite/database/Alumnos.db");
    } catch(SQLException | ClassNotFoundException ex)
    {
        ex.printStackTrace();
    }
    return conn;
}
}
